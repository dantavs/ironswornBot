import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { prisma } from "../server";
import { EmbedBuilder } from 'discord.js'

export const getChar: Command = {
    data: new SlashCommandBuilder()
        .setName("getchar")
        .setDescription("Get you character")
        ,
    run: async (interaction) => {
        await interaction.deferReply()
        const { user, channelId } = interaction
        const playerId = user.id

        const character = await prisma.character.findFirst({
            where: {
                channelId,
                playerId
            }
        })
        
        let response = ''
        if (character){
            response = character.name
    
            const assets = await prisma.asset.findMany({
                where: {
                    characterId: character?.id
                }
            })
    
            const vows = await prisma.vow.findMany({
                where: {
                    characterId: character?.id
                }
            })
            
            const embedStats = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(character.name.toString())
            .addFields(
                { name: 'Edge', value: character.edge.toString(), inline: true },
                { name: 'Heart', value: character.heart.toString(), inline: true},
                { name: 'Iron', value: character.iron.toString(), inline: true},
                { name: 'Shadow', value: character.shadow.toString(), inline: true},
                { name: 'Wits', value: character.wits.toString(), inline: true},
                { name: ' ', value: ' ', inline: false},
                { name: 'Health', value: character.health.toString(), inline: true},
                { name: 'Spirit', value: character.spirit.toString(), inline: true},
                { name: 'Momentum', value: character.momentum.toString(), inline: true},
                )
                
            if (character.portrait != ""){
                embedStats.setImage(character.portrait)
            }
            
            const embedAssets = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Assets')

            for (let i=0;i<assets.length;i++){

                embedAssets.addFields(
                    { name: assets[i].subject, value: assets[i].description},
                    )
            }
            
            const embedVows = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Vows')

            for (let i=0;i<vows.length;i++){

                embedVows.addFields(
                    { name: vows[i].subject, value: vows[i].description},
                    { name: ' ', value: vows[i].challengeRank},
                    { name: ' ', value: vows[i].progressTrack.toString()},
                    )
            }
                
                await interaction.channel?.send({ embeds: [embedStats, embedAssets, embedVows] })
        }else{
                response = 'You have not character in this channel'
            }

        await interaction.editReply(response);
    }
}