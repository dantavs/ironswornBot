import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleElfName } from "../../use-cases/oracleElfName";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleElfName: Command = {
    data: new SlashCommandBuilder()
        .setName("oelfname")
        .setDescription("Random an option in the Oracle Ironlander Names 2.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleElfName()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Elf Name',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



