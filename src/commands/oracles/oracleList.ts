import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, MessageActionRowComponent, ActionRow } from "discord.js";
import { Command } from "../../interfaces/Command";

export const OracleList: Command = {
    data: new SlashCommandBuilder()
        .setName("oracle")
        .setDescription("Oracle")
        ,
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-actionTheme')
                    .setLabel('Action + Theme Oracle')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-action')
                    .setLabel('Action Oracle')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-theme')
                    .setLabel('Theme Oracle')
                    .setStyle(ButtonStyle.Primary)
            )


        const row2 = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-locations')
                    .setLabel('Location Oracles')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-character')
                    .setLabel('Character Oracles')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-name')
                    .setLabel('Name Oracles')
                    .setStyle(ButtonStyle.Primary)
            )

        const row3 = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-combatAction')
                    .setLabel('Combat Action Oracle')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-mysticBacklash')
                    .setLabel('Mystic Backlash Oracle')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-majorPlotTwist')
                    .setLabel('Major Plot Twist Oracle')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('o-challengeRank')
                    .setLabel('Challenge Rank Oracle')
                    .setStyle(ButtonStyle.Primary)
            )

        await interaction.reply({ content: 'Oracle', components: [row, row2, row3] });
    }
}