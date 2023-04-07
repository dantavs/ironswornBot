import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleLocation } from "../../use-cases/oracleLocation";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleLocation: Command = {
    data: new SlashCommandBuilder()
        .setName("olocation")
        .setDescription("Random an option in the Oracle Location.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedTheme = OracleLocation()

        const words = []
        words.push(selectedTheme)

        const embedResult = EmbedOracle(
            'Location',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



