import { Button } from "../interfaces/Command";
import { OracleMajorPlotTwist } from "../use-cases/oracleMajorPlotTwist";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonMajorPlotTwist: Button = {
    customId: 'o-majorPlotTwist',
    run: async (interaction) => {

        const oracleResponse = OracleMajorPlotTwist()

        const embedResult = EmbedOracle(
            'Major Plot Twist',
            oracleResponse
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}