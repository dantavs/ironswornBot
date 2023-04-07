import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleCombatAction } from "../../use-cases/oracleCombatAction";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleCombatAction: Command = {
    data: new SlashCommandBuilder()
        .setName("ocombaction")
        .setDescription("Random an option in the Oracle Combat Action.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleCombatAction()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Combat Action',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



