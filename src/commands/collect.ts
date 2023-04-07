import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle, ComponentType, SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { prisma } from "../server";
import { CheckRoll } from "../utils/checkRoll";
import { GetCharacater } from "../utils/getCharacter";

export const Collect: Command = {
    data: new SlashCommandBuilder()
        .setName("col")
        .setDescription("Test Collection")
        ,  
    run: async (interaction) => {

        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('collectionTest')
                    .setLabel('Collect')
                    .setStyle(ButtonStyle.Primary)
            )
        
        await interaction.reply({ content: 'Collection', components: [row] });

        const message = await interaction.fetchReply()
        const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time:15000})

        //console.log('collector', {collector})
        
        collector.on('collect', async i => {
            console.log(`Collected ${i}`)
            i.update({content: 'Collected', components: []})
        })

        collector.on('end', async i => {
            message.edit({components: []})
            console.log(`Collected ${i.size} items`)})
        
    }
}