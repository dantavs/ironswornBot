import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleIronlanderName2 } from "../../use-cases/oracleIronlanderName2";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleIronlanderName2: Command = {
    data: new SlashCommandBuilder()
        .setName("oironnames2")
        .setDescription("Random an option in the Oracle Ironlander Names 2.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleIronlanderName2()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Ironlander Names 2',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



