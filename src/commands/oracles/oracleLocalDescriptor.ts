import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleLocalDescriptor } from "../../use-cases/oracleLocalDescriptor";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleLocalDescriptor: Command = {
    data: new SlashCommandBuilder()
        .setName("olocaldesc")
        .setDescription("Random an option in the Oracle Local Descriptor.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedTheme = OracleLocalDescriptor()

        const words = []
        words.push(selectedTheme)

        const embedResult = EmbedOracle(
            'Local Decriptor',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



