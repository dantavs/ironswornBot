import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleIronlanderName } from "../../use-cases/oracleIronlanderName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleIronlanderName: Command = {
    data: new SlashCommandBuilder()
        .setName("oironname")
        .setDescription("Random an option in the Oracle Ironlander Names.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleIronlanderName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Ironlander Names ',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



