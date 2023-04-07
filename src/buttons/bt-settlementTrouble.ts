import { Button } from "../interfaces/Command";
import { OracleSettlementTrouble } from "../use-cases/oracleSettlementTrouble";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonSettlementTrouble: Button = {
    customId: 'o-settlementTrouble',
    run: async (interaction) => {

        const oracleResponse = OracleSettlementTrouble()

        const embedResult = EmbedOracle(
            'Settlement Trouble',
            oracleResponse
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}