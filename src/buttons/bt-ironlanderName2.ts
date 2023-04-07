import { Button } from "../interfaces/Command";
import { OracleIronlanderName2 } from "../use-cases/oracleIronlanderName2";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonIronlanderName2: Button = {
    customId: 'o-ironlanderName2',
    run: async (interaction) => {

        const oracleResponse = OracleIronlanderName2()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Ironlander Name 2',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}