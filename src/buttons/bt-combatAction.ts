import { Button } from "../interfaces/Command";
import { OracleCombatAction } from "../use-cases/oracleCombatAction";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonCombatAction: Button = {
    customId: 'o-combatAction',
    run: async (interaction) => {

        const oracleResponse = OracleCombatAction()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Combat Action',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}