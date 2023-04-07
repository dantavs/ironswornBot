import { Button } from "../interfaces/Command";
import { OracleCharacterGoal } from "../use-cases/oracleCharacterGoal";
import { OracleCharacterRole } from "../use-cases/oracleCharacterRole";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonCharacterGoal: Button = {
    customId: 'o-characterGoal',
    run: async (interaction) => {

        const oracleResponse = OracleCharacterGoal()

        const embedResult = EmbedOracle(
            'Character Goal',
            oracleResponse
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}