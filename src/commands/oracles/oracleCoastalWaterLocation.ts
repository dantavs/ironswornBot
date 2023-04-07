import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleCoastalWaterLocation } from "../../use-cases/oracleCoastalWaterLocation";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleCoastalWaterLocation: Command = {
    data: new SlashCommandBuilder()
        .setName("ocwlocation")
        .setDescription("Random an option in the Oracle Coastal Water Location.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const selectedOption = OracleCoastalWaterLocation()

        const words = []
        words.push(selectedOption)

        const embedResult = EmbedOracle(
            'Coastal Water Location',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



