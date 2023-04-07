import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleMysticBacklash } from "../../use-cases/oracleMysticBacklash";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleMysticBacklash: Command = {
    data: new SlashCommandBuilder()
        .setName("omb")
        .setDescription("Random an option in the Oracle Mystic Backlash.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const words = OracleMysticBacklash()
        
        const embedResult = EmbedOracle(
            'Mystic Backlash',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



