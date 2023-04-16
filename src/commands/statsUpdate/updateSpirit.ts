import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { EmbedBuilder } from 'discord.js'
import { prisma } from "../../server";
import { GetCharacater } from "../../utils/getCharacter";
import { UpdateStat } from "../../utils/updateStat";

export const updateSpirit: Command = {
    data: new SlashCommandBuilder()
        .setName("updtsp")
        .setDescription("Updated the Spirit of your character")
        .addStringOption((option) => 
            option
                .setName("value")
                .setDescription("Value to be added or subtracted.")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('value')

        let modifier = modifierString ? parseInt(modifierString) : 0

        const { user, channelId } = interaction
        const playerId = user.id

        const updateStat = await UpdateStat(
            "spirit",
            modifier,
            playerId,
            channelId            
        )
        
        await interaction.editReply({embeds: [updateStat.embedResult], content: updateStat.response});
    }
}
