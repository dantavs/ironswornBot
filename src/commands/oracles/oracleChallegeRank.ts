import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleChallengeRank } from "../../use-cases/oracleChallengeRank";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleChallengeRank: Command = {
    data: new SlashCommandBuilder()
        .setName("ochallenge")
        .setDescription("Random an option in the Oracle Challenge Rank.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const challengeRank = OracleChallengeRank()
          
        const words = []
        words.push(challengeRank)

        const embedResult = EmbedOracle(
            'Challenge Rank',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



