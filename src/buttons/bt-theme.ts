import { Button } from "../interfaces/Command";
import { OracleTheme } from "../use-cases/oracleTheme";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonTheme: Button = {
    customId: 'o-theme',
    run: async (interaction) => {
        const oracleResponse = OracleTheme()
         
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Location Descriptor',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}