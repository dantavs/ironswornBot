import { Button } from "../interfaces/Command";
import { OracleElfName } from "../use-cases/oracleElfName";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonElfName: Button = {
    customId: 'o-elfName',
    run: async (interaction) => {

        const oracleResponse = OracleElfName()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Elf Name',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}