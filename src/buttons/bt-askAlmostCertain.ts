import { Button } from "../interfaces/Command";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAtOAlmostCertain: Button = {
    customId: 'almostCertain',
    run: async (interaction) => {

        const number = Math.floor(Math.random() * 100 )+1; 
        const oracle = number > 10 ? "Yes" : "No"
          
        const words = []
        words.push(oracle)

        const embedResult = EmbedOracle(
            'Ask the Oracle (Almost Certain)',
            words
        )

        await interaction.update({content: ' ', embeds: [embedResult], components:[] })

    }
}