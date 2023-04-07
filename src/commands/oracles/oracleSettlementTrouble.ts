import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleSettlementTrouble } from "../../use-cases/oracleSettlementTrouble";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleSettlementTrouble: Command = {
    data: new SlashCommandBuilder()
        .setName("ost")
        .setDescription("Random an option in the Oracle Settlement Trouble.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const words = OracleSettlementTrouble()

        const embedResult = EmbedOracle(
            'Settlement Trouble',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



