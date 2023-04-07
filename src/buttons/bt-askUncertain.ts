import { Button } from "../interfaces/Command";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAtOUnlikely: Button = {
    customId: 'unlikely',
    run: async (interaction) => {

        const number = Math.floor(Math.random() * 100 )+1; 
        const oracle = number > 75 ? "Yes" : "No"
          
        const words = []
        words.push(oracle)

        const embedResult = EmbedOracle(
            'Ask the Oracle (Unlikely)',
            words
        )

        await interaction.update({content: ' ', embeds: [embedResult], components:[] })

    }
}