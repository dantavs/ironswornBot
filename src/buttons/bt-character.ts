import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { Button } from "../interfaces/Command";

export const buttonCharacter: Button = {
    customId: 'o-character',
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-characterRole')
                .setLabel('Character Role Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-characterGoal')
                .setLabel('Character Goal Oracle')
                .setStyle(ButtonStyle.Primary)
        )
        .addComponents(
            new ButtonBuilder()
                .setCustomId('o-characterDescriptor')
                .setLabel('Character Descriptor Oracle')
                .setStyle(ButtonStyle.Primary)
        )

        await interaction.update({ content: 'Character Oracles', components:[row] })

    }
}