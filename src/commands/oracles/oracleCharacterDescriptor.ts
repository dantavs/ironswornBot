import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleCharacterDescriptor } from "../../use-cases/oracleCharacterDescriptor";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleCharacterDescriptor: Command = {
    data: new SlashCommandBuilder()
        .setName("ocd")
        .setDescription("Random an option in the Oracle Character Descriptor.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleCharacterDescriptor()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Character Descriptor',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



