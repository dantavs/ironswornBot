import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleTrollName } from "../../use-cases/oracleTrollName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleTrollName: Command = {
    data: new SlashCommandBuilder()
        .setName("otrollname")
        .setDescription("Random an option in the Oracle Troll Name.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleTrollName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Troll Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



