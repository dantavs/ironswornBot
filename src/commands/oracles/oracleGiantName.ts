import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleGiantName } from "../../use-cases/oracleGiantName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleGiantName: Command = {
    data: new SlashCommandBuilder()
        .setName("ogiantname")
        .setDescription("Random an option in the Oracle Giant Name.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleGiantName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Giant Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



