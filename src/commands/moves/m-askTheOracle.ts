import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, MessageActionRowComponent, ActionRow } from "discord.js";
import { Command } from "../../interfaces/Command";

export const rollAskTheOracle: Command = {
    data: new SlashCommandBuilder()
        .setName("ask")
        .setDescription("Ask the Oracle")
        ,
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('almostCertain')
                    .setLabel('Almost Certain')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('likely')
                    .setLabel('Likely')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('5050')
                    .setLabel('50/50')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('unlikely')
                    .setLabel('Unlikely')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('smallChance')
                    .setLabel('Small Chance')
                    .setStyle(ButtonStyle.Primary)
            )


        await interaction.reply({ content: 'Choose the odd', components: [row] });
    }
}