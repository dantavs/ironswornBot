import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleCharacterRole } from "../../use-cases/oracleCharacterRole";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleCharacterRole: Command = {
    data: new SlashCommandBuilder()
        .setName("ocr")
        .setDescription("Random an option in the Oracle Character Role.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedTheme = OracleCharacterRole()

        const words = []
        words.push(selectedTheme)

        const embedResult = EmbedOracle(
            'Character Role',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



