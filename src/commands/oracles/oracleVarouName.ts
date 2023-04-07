import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleVarouName } from "../../use-cases/oracleVarouName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleVarouName: Command = {
    data: new SlashCommandBuilder()
        .setName("ovarouname")
        .setDescription("Random an option in the Oracle Varou Name.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleVarouName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Varou Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



