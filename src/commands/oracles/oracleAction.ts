import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleAction } from "../../use-cases/oracleAction";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleAction: Command = {
    data: new SlashCommandBuilder()
        .setName("oaction")
        .setDescription("Do a check in Ironsworn system.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleAction()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Action',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



