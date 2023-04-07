import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder  } from "discord.js";
import { MoveDescriptor } from "../../entities/moveDescriptor";
import { MoveResultCollection } from "../../entities/moveResultCollection";
import { Command } from "../../interfaces/Command";
import { prisma } from "../../server";
import { burnMomentum } from "../../utils/burnMomentum";
import { CheckRoll } from "../../utils/checkRoll";
import { GetCharacater } from "../../utils/getCharacter";

export const rollGatherInformation: Command = {
    data: new SlashCommandBuilder()
        .setName("gather")
        .setDescription("Roll Gather Information move for you character")
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
            
            const checkRoll = CheckRoll({
                'attribute': getChar.character.wits,
                'modifier': modifier,
                'portrait': getChar.character.portrait,
                'momentum': getChar.character.momentum,
                'title': 'Roll Gather Information'
            })
            
            const moveResultDescriptorMiss = new MoveDescriptor({
                resultName:'Miss',
                resultDescriptor : "Your investigation unearths a dire threat or reveals and unwelcome truth that undermines your quest. Pay the Price."
            })
            
            const moveResultDescriptorWeakHit = new MoveDescriptor({
                resultName:'Weak Hit',
                resultDescriptor : 'The information complicates your quest or introduces a new danger. Envision what you disover (Ask the Oracle if unsure) and take +1 Momentum.'
            })
            
            let strongHitDescriptor = "'You discover something helpful and specific. The path you must follow or action you must take to make progress is made clear.' \n"
            strongHitDescriptor += "-Envision what you learn (Ask the Oracle if unsure), and take +2 Momentum"
            
            const moveResultDescriptorStrongHit = new MoveDescriptor({
                resultName:'Strong Hit',
                resultDescriptor : strongHitDescriptor
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