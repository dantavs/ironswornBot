import { Button } from "../interfaces/Command";
import { OracleCharacterDescriptor } from "../use-cases/oracleCharacterDescriptor";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonCharacterDescriptor: Button = {
    customId: 'o-characterDescriptor',
    run: async (interaction) => {

        const oracleResponse = OracleCharacterDescriptor()
                  
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Character Descriptor',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}