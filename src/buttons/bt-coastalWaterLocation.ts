import { Button } from "../interfaces/Command";
import { OracleCoastalWaterLocation } from "../use-cases/oracleCoastalWaterLocation";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonCoastalWaterLocation: Button = {
    customId: 'o-coastalWaterLocation',
    run: async (interaction) => {

        const oracleResponse = OracleCoastalWaterLocation()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Coastal Water Location',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}