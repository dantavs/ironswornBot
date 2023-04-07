import { Button } from "../interfaces/Command";
import { OracleAction } from "../use-cases/oracleAction";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAction: Button = {
    customId: 'o-action',
    run: async (interaction) => {

        const oracleResponse = OracleAction()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Action',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}