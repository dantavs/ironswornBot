import { Button } from "../interfaces/Command";
import { OracleTrollName } from "../use-cases/oracleTrollName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonTrollName: Button = {
    customId: 'o-trollName',
    run: async (interaction) => {

        const oracleResponse = OracleTrollName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Troll Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}