import { Button } from "../interfaces/Command";
import { OracleIronlanderName } from "../use-cases/oracleIronlanderName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonIronlanderName: Button = {
    customId: 'o-ironlanderName',
    run: async (interaction) => {

        const oracleResponse = OracleIronlanderName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Ironlander Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}