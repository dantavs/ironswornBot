import { Button } from "../interfaces/Command";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonAtOSmallChance: Button = {
    customId: 'smallChance',
    run: async (interaction) => {

        const number = Math.floor(Math.random() * 100 )+1; 
        const oracle = number > 90 ? "Yes" : "No"
          
        const words = []
        words.push(oracle)

        const embedResult = EmbedOracle(
            'Ask the Oracle (Small Chance)',
            words
        )

        await interaction.update({content: ' ', embeds: [embedResult], components:[] })

    }
}