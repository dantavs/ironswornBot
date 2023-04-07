import { EmbedBuilder } from "@discordjs/builders";
import { CommandInteraction, ComponentType } from "discord.js";
import { MoveResultCollectionProps, MoveResultDescriptorProps } from "../interfaces/MoveResultDescriptor";
import { prisma } from "../server";

export async function burnMomentum(
    character: any, 
    checkRoll:any, 
    interaction: CommandInteraction, 
    moveResultCollection?: MoveResultCollectionProps
    ){

    const message = await interaction.fetchReply()
    const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time:150000})
    
    collector.on('collect', async i => {
    
        await prisma.character.update({
            where: {
                id: character.id,
            },
            data: {
                momentum: 2
            }
        })

        let cardColor = 0x00AA00
        let newResult = checkRoll.resultText === 'Miss' ? 'Weak Hit' : 'Strong Hit'

        if (character.momentum > checkRoll.challengeDice[0] && character.momentum > checkRoll.challengeDice[1] && checkRoll.resultText === 'Miss'){
            newResult = 'Strong Hit'
        }

        const newMessage = new EmbedBuilder()
            .setTitle (message.embeds[0].title + " - Momentum Burnt!")
            
        if (newResult === 'Weak Hit'){
            cardColor = 0xf1c232
            newMessage.addFields({name: 'Result', value: newResult})
        }
        if (newResult === 'Strong Hit'){
            cardColor = 0x00AA00
            newMessage.addFields({name: 'Result', value: newResult})
        }
        
        if (message.embeds[0].data.fields){
            for (let i=1; i<message.embeds[0].data.fields?.length - 1;i++){
                newMessage.addFields(message.embeds[0].data.fields[i])
            }
        }
        
        newMessage
            .addFields({name: 'After this, your Momentum was reseted to +2', value:' '})
            .setColor(cardColor)
            .setThumbnail(character.portrait)
            
        const embeds: EmbedBuilder[] = [newMessage]

        const resultDescriptor = moveResultCollection?.moveResultDescriptors.filter((x) => {
            if (x.resultName === newResult ){
                return x.resultDescriptor
            }
        })
            
        if(resultDescriptor){
            //newMessage.addFields({ name: 'Weak Hit', value: resultDescriptor[0].resultDescriptor})
            
            const moveResultDescriptor = new EmbedBuilder()
            .setTitle(newResult)
            .setColor(cardColor)
            .addFields(
                {name:' ', value: resultDescriptor[0].resultDescriptor}
            )

            embeds.push(moveResultDescriptor)

        }
        
        await i.update({content: 'Momentum Burnt', embeds:embeds, components: []})
    })

    collector.on('end', async i => {
        await message.edit({components: []})
    })

    return null

}