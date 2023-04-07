import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder  } from "discord.js";
import { MoveDescriptor } from "../../entities/moveDescriptor";
import { MoveResultCollection } from "../../entities/moveResultCollection";
import { Command } from "../../interfaces/Command";
import { prisma } from "../../server";
import { burnMomentum } from "../../utils/burnMomentum";
import { CheckRoll } from "../../utils/checkRoll";
import { GetCharacater } from "../../utils/getCharacter";

export const rollFaceDangerEdge: Command = {
    data: new SlashCommandBuilder()
        .setName("facee")
        .setDescription("Roll Face Danger (Edge) move for you character")
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
                'attribute': getChar.character.edge,
                'modifier': modifier,
                'portrait': getChar.character.portrait,
                'momentum': getChar.character.momentum,
                'title': 'Roll Face Danger (Edge)'
            })
            
            const moveResultDescriptorMiss = new MoveDescriptor({
                resultName:'Miss',
                resultDescriptor : "You fail, or your progress is undermined by a dramatic and costly turn of events. Pay the Price."
            })
            
            
            let weakHitDescriptor = "You success, but face a troublesome cost. Choose one: \n"
            weakHitDescriptor += "- You are delayed, lose advantage, or face a new danger. Suffer -1 Momentum.\n"
            weakHitDescriptor += "- You are tyred or hurt: Edure Harm (1 harm). \n"
            weakHitDescriptor += "- You are dispirited or afraid: Edure Stress (1 stress). \n"
            weakHitDescriptor += "- You sacrifice resources: Suffer -1 Supply."

            const moveResultDescriptorWeakHit = new MoveDescriptor({
                resultName:'Weak Hit',
                resultDescriptor : weakHitDescriptor
            })
            
            const moveResultDescriptorStrongHit = new MoveDescriptor({
                resultName:'Strong Hit',
                resultDescriptor : 'You are successful. Take +1 Momentum.'
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