import { Button } from "../interfaces/Command";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAtO5050: Button = {
    customId: '5050',
    run: async (interaction) => {

        const number = Math.floor(Math.random() * 100 )+1; 
        const oracle = number > 50 ? "Yes" : "No"
          
        const words = []
        words.push(oracle)

        const embedResult = EmbedOracle(
            'Ask the Oracle (50/50)',
            words
        )

        await interaction.update({content: ' ', embeds: [embedResult], components:[] })

    }
}