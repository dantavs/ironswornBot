import { Button } from "../interfaces/Command";
import { OracleGiantName } from "../use-cases/oracleGiantName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonGiantName: Button = {
    customId: 'o-giantName',
    run: async (interaction) => {

        const oracleResponse = OracleGiantName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Giant Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}