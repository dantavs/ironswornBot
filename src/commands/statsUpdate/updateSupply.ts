import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { UpdateStat } from "../../utils/updateStat";

export const updateSupply: Command = {
    data: new SlashCommandBuilder()
        .setName("updtsu")
        .setDescription("Updated the Supply of your character")
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
            "supply",
            modifier,
            playerId,
            channelId            
        )
        
        await interaction.editReply({embeds: [updateStat.embedResult], content: updateStat.response});
    }
}
