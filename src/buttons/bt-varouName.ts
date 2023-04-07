import { Button } from "../interfaces/Command";
import { OracleVarouName } from "../use-cases/oracleVarouName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonVarouName: Button = {
    customId: 'o-varouName',
    run: async (interaction) => {

        const oracleResponse = OracleVarouName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Varou Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}