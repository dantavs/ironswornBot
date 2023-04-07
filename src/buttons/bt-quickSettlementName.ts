import { Button } from "../interfaces/Command";
import { OracleQuickSettlementName } from "../use-cases/oracleQuickSettlementName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonQuickSettlementName: Button = {
    customId: 'o-quickSettlementName',
    run: async (interaction) => {

        const oracleResponse = OracleQuickSettlementName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Quick Settlement Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}