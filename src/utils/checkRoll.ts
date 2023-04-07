import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle, EmbedBuilder } from "discord.js";

export interface checkRollRequest {
    attribute?: number
    modifier?: number
    portrait?: string
    momentum?: number
    title: string
}

export function CheckRoll({attribute, modifier, portrait, momentum, title}:checkRollRequest) {
    const challengeDie1 = Math.floor(Math.random() * 10 )+1; 
    const challengeDie2 = Math.floor(Math.random() * 10 )+1; 
    const actionDie = Math.floor(Math.random() * 6 )+1;

    const mod = modifier? modifier : 0
    const att = attribute? attribute : 0
            
    const actionResult = actionDie + att + mod

    const challengeDice = []
    challengeDice.push(challengeDie1)
    challengeDice.push(challengeDie2)


    let color = 0x990000
    let resultText = ''

    if (actionResult > challengeDie1 && actionResult > challengeDie2){
        resultText = "Strong Hit"
        color = 0x00AA00
    }else if (actionResult > challengeDie1 || actionResult > challengeDie2){
        resultText = "Weak Hit"
        color = 0xf1c232
    }else {
        resultText = "Miss"
    }


    const embedResult = new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .addFields(
        {name: 'Result: ', value: resultText},
        {name: 'Challenge Dice', value:`${challengeDice[0]} , ${challengeDice[1]} `},
        {name: 'ActionResult', value: `${actionResult} (Action Die: ${actionDie} + Mod: ${modifier} + Attr: ${att})`},
    )

    if (challengeDie1 === challengeDie2){
        embedResult.addFields(
            {name:'Opportunity or Complication happens!', value:' '}
        )
    }

    if (portrait){
        embedResult.setThumbnail(portrait)
    }

    const row = new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('burnMomentum')
            .setLabel('Burn Momentum')
            .setStyle(ButtonStyle.Primary)
    )

    let components = []
    let burnMomentum = false

    if (momentum && resultText === "Weak Hit"){
        if (momentum > challengeDie1 && momentum > challengeDie2){
            burnMomentum = true
        }
    }

    if (momentum && resultText === "Miss"){
        if (momentum > challengeDie1 || momentum > challengeDie2){
            burnMomentum = true
        }
    }
    
    if (burnMomentum){
        components.push(row)
        embedResult.addFields(
            {name:'You can burn you Momentum to improve you result!', value:' '}
        )
    }

    return {'challengeDice': challengeDice, 
        'actionResult': actionResult,
        'actionDie': actionDie,
        'modifier': mod,
        'attribute': att,
        'resultText': resultText,
        'cardColor': color,
        'embedResult': embedResult,
        'burnMomentum': burnMomentum,
        'components': components
    }
}