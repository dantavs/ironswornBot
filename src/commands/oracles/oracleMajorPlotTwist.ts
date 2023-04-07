import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleMajorPlotTwist } from "../../use-cases/oracleMajorPlotTwist";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleMajorPlotTwist: Command = {
    data: new SlashCommandBuilder()
        .setName("oplottwist")
        .setDescription("Random an option in the Oracle Major Plot Twist.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const words = OracleMajorPlotTwist()
        
        const embedResult = EmbedOracle(
            'Major Plot Twist',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



