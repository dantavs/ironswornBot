import { Button } from "../interfaces/Command";
import { OracleCharacterRole } from "../use-cases/oracleCharacterRole";
import { EmbedOracle } from "../utils/embedOracle";

export const buttonCharacterRole: Button = {
    customId: 'o-characterRole',
    run: async (interaction) => {

        const oracleResponse = OracleCharacterRole()
          
        const words = []
        words.push(oracleResponse)

        const embedResult = EmbedOracle(
            'Character Role',
            words
        )

        await interaction.update({ embeds: [embedResult], components:[] })

    }
}