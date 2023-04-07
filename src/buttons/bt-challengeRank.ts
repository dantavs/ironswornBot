import { Button } from "../interfaces/Command";
import { OracleChallengeRank } from "../use-cases/oracleChallengeRank";
import { OracleCombatAction } from "../use-cases/oracleCombatAction";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonChallengeRank: Button = {
    customId: 'o-challengeRank',
    run: async (interaction) => {

        const oracleResponse = OracleChallengeRank()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Challenge Action',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}