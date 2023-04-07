import { Button } from "../interfaces/Command";
import { OracleLocation } from "../use-cases/oracleLocation";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonLocation: Button = {
    customId: 'o-location',
    run: async (interaction) => {
        const oracleResponse = OracleLocation()

        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Location',
            words
        )

        await interaction.update({ embeds: [embedResult] , components:[] })

    }
}