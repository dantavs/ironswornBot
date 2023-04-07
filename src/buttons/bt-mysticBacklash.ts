import { Button } from "../interfaces/Command";
import { OracleMysticBacklash } from "../use-cases/oracleMysticBacklash";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonMysticBacklash: Button = {
    customId: 'o-mysticBacklash',
    run: async (interaction) => {

        const oracleResponse = OracleMysticBacklash()

        const embedResult = EmbedOracle(
            'Mystic Backlash',
            oracleResponse
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}