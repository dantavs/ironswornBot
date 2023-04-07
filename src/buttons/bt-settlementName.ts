import { Button } from "../interfaces/Command";
import { OracleSettlementName } from "../use-cases/oracleSettlementName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonSettlementName: Button = {
    customId: 'o-settlementName',
    run: async (interaction) => {

        const oracleResponse = OracleSettlementName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Settlement Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}