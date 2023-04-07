import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder  } from "discord.js";
import { MoveDescriptor } from "../../entities/moveDescriptor";
import { MoveResultCollection } from "../../entities/moveResultCollection";
import { Command } from "../../interfaces/Command";
import { prisma } from "../../server";
import { burnMomentum } from "../../utils/burnMomentum";
import { CheckRoll } from "../../utils/checkRoll";
import { GetCharacater } from "../../utils/getCharacter";

export const rollEndureHarm: Command = {
    data: new SlashCommandBuilder()
        .setName("endureh")
        .setDescription("Roll Endure Harm move for you character")
        .addStringOption((option) => 
        option
            .setName("modifier")
            .setDescription("Modifier in the Ironsworn check.")
            .setRequired(false))
        ,  
    run: async (interaction) => {
        await interaction.deferReply()
        const { user, channelId } = interaction
        const playerId = user.id
        
        const character = await prisma.character.findFirst({
            where: {
                channelId,
                playerId
            }
        })
        
        const getChar = await GetCharacater(playerId, channelId)
        
        const modifierString = interaction.options.getString('modifier')
        let modifier = modifierString ? parseInt(modifierString) : 0
        
        let response = ''
        if (getChar.character){
            const stat = getChar.character.health < getChar.character.iron? getChar.character.iron : getChar.character.health
            
            const checkRoll = CheckRoll({
                'attribute': stat,
                'modifier': modifier,
                'portrait': getChar.character.portrait,
                'momentum': getChar.character.momentum,
                'title': 'Roll Endure Harm'
            })

            let descriptor = "Suffer -health equal to your foe's rank"
            
            const moveResultDescriptorMiss = new MoveDescriptor({
                resultName:'Miss',
                resultDescriptor : descriptor + " and -1 Momentum."
            })
            
            const moveResultDescriptorWeakHit = new MoveDescriptor({
                resultName:'Weak Hit',
                resultDescriptor : descriptor + "and you press on."
            })
            
            descriptor += "and choose one: \n"
            descriptor += "- Shake it off: If your health is greater 0, suffer -1 Momentum in exchange for +1 health.\n"
            descriptor += "- Suffer -health equal to your foe's rank and embrace the pain: Take +1 Momentum."
            
            const moveResultDescriptorStrongHit = new MoveDescriptor({
                resultName:'Strong Hit',
                resultDescriptor : descriptor
            })

            const moveResultCollectionTemp = [moveResultDescriptorMiss.props, moveResultDescriptorWeakHit.props, moveResultDescriptorStrongHit.props]
            
            let moveResultCollection = new MoveResultCollection(moveResultCollectionTemp)
            
            const resultDescriptor = moveResultCollection?.moveResultDescriptors.filter((x) => {
                if (x.resultName === checkRoll.resultText ){
                    return x.resultDescriptor
                }
            })

            const moveResultText = new EmbedBuilder()
                .addFields({name: checkRoll.resultText ,value: resultDescriptor[0].resultDescriptor})
                .addFields({name: 'If you are at 0 health, you must mark wounded or maimed (if currently unmarked) or roll the Zero Health table /zeroh', value:' '})
                .setColor(checkRoll.embedResult.data.color? checkRoll.embedResult.data.color: 0x99)

            response = getChar.character.name

            await interaction.editReply({ embeds: [checkRoll.embedResult, moveResultText], components: checkRoll.components })

            if (checkRoll.burnMomentum){
                burnMomentum(
                    character,
                    checkRoll,
                    interaction,
                    moveResultCollection
                )
            }

        }else{
                response = getChar.message
            }

        await interaction.editReply(response);
    }
}