import { Button } from "../interfaces/Command";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAtOLikely: Button = {
    customId: 'likely',
    run: async (interaction) => {

        const number = Math.floor(Math.random() * 100 )+1; 
        const oracle = number > 25 ? "Yes" : "No"
          
        const words = []
        words.push(oracle)

        const embedResult = EmbedOracle(
            'Ask the Oracle (Likely)',
            words
        )

        await interaction.update({content: ' ', embeds: [embedResult], components:[] })

    }
}