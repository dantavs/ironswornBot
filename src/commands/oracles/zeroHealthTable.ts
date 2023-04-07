import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { OracleRegion } from "../../use-cases/oracleRegion";
import { ZeroHealthTable } from "../../use-cases/zeroHealthTable";
import { EmbedOracle } from "../../utils/embedOracle";

export const zeroHalthTable: Command = {
    data: new SlashCommandBuilder()
        .setName("zeroh")
        .setDescription("Random an option for when you are at 0 Health.")
        ,
    run: async (interaction) => {
        await interaction.deferReply()

        const {result } = ZeroHealthTable()
          
        const words = []
        words.push(result)

        const embedResult = EmbedOracle(
            'Edure Harm - Zero Health Table',
            words
        )

        await interaction.editReply({ embeds: [embedResult] })
    }
}



