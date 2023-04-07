import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleQuickSettlementName } from "../../use-cases/oracleQuickSettlementName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleSQuickettlementName: Command = {
    data: new SlashCommandBuilder()
        .setName("oqsn")
        .setDescription("Random an option in the Oracle Quick Settlement Name.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const settlementName = OracleQuickSettlementName()

        const words = []
        words.push(settlementName)

        const embedResult = EmbedOracle(
            'Quick Settlement Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



