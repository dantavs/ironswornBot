import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Button } from "../interfaces/Command";

export const buttonName: Button = {
    customId: 'o-name',
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-ironlanderName')
                .setLabel('Ironlander Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-ironlanderName2')
                .setLabel('Ironlander Name 2 Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-elfName')
                .setLabel('Elf Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-giantName')
                .setLabel('Giant Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )

        const row2 = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-trollName')
                .setLabel('Troll Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-varouName')
                .setLabel('Varou Name Oracle')
                .setStyle(ButtonStyle.Primary)
        )

        await interaction.update({ content: 'Name Oracles', components:[row, row2] })

    }
}