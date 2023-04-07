import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Button } from "../interfaces/Command";
import { OracleTheme } from "../use-cases/oracleTheme";

export const buttonLocations: Button = {
    customId: 'o-locations',
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-region')
                .setLabel('Region Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-location')
                .setLabel('Location Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-coastalWaterLocation')
                .setLabel('Coastal Water Location Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-locationDescriptor')
                .setLabel('Location Descriptor Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-settlementTrouble')
                .setLabel('Settlement Trouble Oracle')
                .setStyle(ButtonStyle.Primary)
        )

        const row2 = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-settlementName')
                .setLabel('Settlement Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-quickSettlementName')
                .setLabel('Quick Settlement Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )

        await interaction.update({ content: 'Location Oracles', components:[row, row2] })

    }
}