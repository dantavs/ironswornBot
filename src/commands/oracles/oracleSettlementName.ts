import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleSettlementName } from "../../use-cases/oracleSettlementName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleSettlementName: Command = {
    data: new SlashCommandBuilder()
        .setName("osn")
        .setDescription("Random an option in the Oracle Settlement Name.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleSettlementName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Settlement Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



