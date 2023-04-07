import { Button } from "../interfaces/Command";
import { OracleAction } from "../use-cases/oracleAction";
import { OracleTheme } from "../use-cases/oracleTheme";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonActionTheme: Button = {
    customId: 'o-actionTheme',
    run: async (interaction) => {

        const oracleResponse = OracleAction() + ' ' + OracleTheme()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Action + Theme Oracle',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}