import { EmbedBuilder } from "discord.js";

export function EmbedOracle( title: string, words: string[], image?: string) {

    const embedResult = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(title)
 

    for (let i=0;i < words.length;i++){
        embedResult.addFields(
            {name: words[i], value: ' '},
    
        )
    }

    if (image){
        embedResult.setImage(image)
    }

    return embedResult

}