import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleTheme } from "../../use-cases/oracleTheme";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleTheme: Command = {
    data: new SlashCommandBuilder()
        .setName("otheme")
        .setDescription("Random an option in the Oracle Theme.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleTheme()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Action',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })

    }
}



