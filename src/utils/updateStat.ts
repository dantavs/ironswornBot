import { EmbedBuilder } from "@discordjs/builders"
import { prisma } from "../server"
import { GetCharacater } from "./getCharacter"

export async function UpdateStat(stat: string, modifier: number, playerId: string, channelId: string){

    let response = ''
    let embedResult = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Update ${stat}`)
        
    const getChar = await GetCharacater(playerId, channelId)

    if (getChar.character){
        response = getChar.character.name

        let health = getChar.character.health
        let spirit = getChar.character.spirit
        let supply = getChar.character.supply
        let momentum = getChar.character.momentum

        let currentStat = 0
        let newStat = 0

        switch(stat){
            case "health":
                currentStat = getChar.character.health
                newStat = getChar.character.health + modifier > 5 ? 5: getChar.character.health + modifier
                health = newStat
                break;
            case "spirit":
                currentStat = getChar.character.spirit
                newStat = getChar.character.spirit + modifier > 5 ? 5: getChar.character.spirit + modifier
                spirit = newStat
                break;
            case "supply":
                currentStat = getChar.character.supply
                newStat = getChar.character.supply + modifier > 5 ? 5: getChar.character.supply + modifier
                supply = newStat
                break;
            case "momentum":
                currentStat = getChar.character.momentum
                newStat = getChar.character.momentum + modifier > 10 ? 10: getChar.character.momentum + modifier
                momentum = newStat
                break;
        }

        if (currentStat === 5 && modifier > 0){
            embedResult.addFields(
                {name: " ", value: `Your ${stat} is already at its maximum value it and can't be increased anymore. `}
            ) 
        }else{
            await prisma.character.update({
                where: {
                    id: getChar.character.id,
                },
                data: {
                    health,
                    spirit,
                    supply,
                    momentum
                }
            })
            
            
            embedResult.addFields(
                {name: `Your ${stat} now is ${newStat} `, 
                value: `The value of ${modifier} was added/subtracted from you previous value of ${currentStat}, respecting the maximum value.`},
                )
                
            }
    }else{
        embedResult.addFields(
            {name: getChar.message, value: " "}
        )
    }

    return {
        response: response,
        embedResult: embedResult
    }

}