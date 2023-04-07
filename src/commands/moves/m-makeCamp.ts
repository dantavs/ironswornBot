import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder  } from "discord.js";
import { MoveDescriptor } from "../../entities/moveDescriptor";
import { MoveResultCollection } from "../../entities/moveResultCollection";
import { Command } from "../../interfaces/Command";
import { prisma } from "../../server";
import { burnMomentum } from "../../utils/burnMomentum";
import { CheckRoll } from "../../utils/checkRoll";
import { GetCharacater } from "../../utils/getCharacter";

export const rollMakeCamp: Command = {
    data: new SlashCommandBuilder()
        .setName("make")
        .setDescription("Roll Make Camp move for you character")
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
                'title': 'Roll Make Camp'
            })
            
            const moveResultDescriptorMiss = new MoveDescriptor({
                resultName:'Miss',
                resultDescriptor : "You take no comfort. Pay the Price."
            })
            
            let weakStrongHitDescriptor = "- Recuperate: Take +1 Health for you and any companions \n"
            weakStrongHitDescriptor += "- Partake: Suffer -1 Supply and take +1 health for you and any companions \n"
            weakStrongHitDescriptor += "- Relax: Take +1 Spirit \n"
            weakStrongHitDescriptor += "- Focus: Take +1 Momentum \n"
            weakStrongHitDescriptor += "- Prepare: When you brak camp, add +1 if you Undertake a Journey"
            
            let weakHitDescriptor = "You and or allies may each choose one: \n" + weakStrongHitDescriptor
            
            const moveResultDescriptorWeakHit = new MoveDescriptor({
                resultName:'Weak Hit',
                resultDescriptor : weakHitDescriptor
            })
            let strongHitDescriptor = "You and or allies may each choose two: \n" + weakStrongHitDescriptor
            
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