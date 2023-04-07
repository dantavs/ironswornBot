import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleRegion } from "../../use-cases/oracleRegion";
import { EmbedOracle } from "../../utils/embedOracle";

export const oracleRegion: Command = {
    data: new SlashCommandBuilder()
        .setName("oregion")
        .setDescription("Random an option in the Oracle Theme.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const {region, image } = OracleRegion()
          
        const words = []
        words.push(region)

        const embedResult = EmbedOracle(
            'Region',
            words,
            image
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



