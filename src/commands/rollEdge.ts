import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { prisma } from "../server";
import { burnMomentum } from "../utils/burnMomentum";
import { CheckRoll } from "../utils/checkRoll";
import { GetCharacater } from "../utils/getCharacter";

export const rollEdge: Command = {
    data: new SlashCommandBuilder()
        .setName("edge")
        .setDescription("Roll Edge for you character")
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
                'title': 'Roll Edge'
            })

            response = getChar.character.name

            await interaction.editReply({ embeds: [checkRoll.embedResult], components: checkRoll.components })

            if (checkRoll.burnMomentum){
                burnMomentum(
                    character,
                    checkRoll,
                    interaction
                )
            }
        }else{
                response = getChar.message
            }

        await interaction.editReply(response);

    }
}