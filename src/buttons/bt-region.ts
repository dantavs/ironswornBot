import { Button } from "../interfaces/Command";
import { OracleRegion } from "../use-cases/oracleRegion";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonRegion: Button = {
    customId: 'o-region',
    run: async (interaction) => {

        const {region, image } = OracleRegion()
          
        const words = []
        words.push(region)

        const embedResult = EmbedOracle(
            'Region',
            words,
            image
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}