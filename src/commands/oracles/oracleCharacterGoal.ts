import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleCharacterGoal } from "../../use-cases/oracleCharacterGoal";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleCharacterGoal: Command = {
    data: new SlashCommandBuilder()
        .setName("ocg")
        .setDescription("Random an option in the Oracle Character Goal.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()
        
        const words = OracleCharacterGoal()

        const embedResult = EmbedOracle(
            'Character Goal',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



