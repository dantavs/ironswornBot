import { Button } from "../interfaces/Command";
import { OracleLocalDescriptor } from "../use-cases/oracleLocalDescriptor";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonLocationDescriptor: Button = {
    customId: 'o-locationDescriptor',
    run: async (interaction) => {

        const oracleResponse = OracleLocalDescriptor()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Location Descriptor',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}