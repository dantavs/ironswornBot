import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { EmbedBuilder } from 'discord.js'
import { CheckRoll } from "../utils/checkRoll";

export const ironswordCheck: Command = {
    data: new SlashCommandBuilder()
        .setName("isc")
        .setDescription("Do a check in Ironsworn system.")
        .addStringOption((option) => 
            option
                .setName("modifier")
                .setDescription("Modifier in the Ironsworn check.")
                .setRequired(false)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('modifier')

        let modifier = modifierString ? parseInt(modifierString) : 0


        const checkRoll = CheckRoll({
            'attribute': 0,
            'modifier': modifier,
            'title': 'Ironsworn Check'
        })

        const embedResult = new EmbedBuilder()
            .setColor(checkRoll.cardColor)
            .setTitle('Ironsworn Check')
            .addFields(
                {name: 'Result: ', value: checkRoll.resultText},
                {name: 'Challenge Dice', value:`${checkRoll.challengeDice[0]} , ${checkRoll.challengeDice[1]} `},
                {name: 'ActionResult', value: `${checkRoll.actionResult} (Action Die: ${checkRoll.actionDie} + Modifier: ${checkRoll.modifier} + Attribute: )`},
            )

        await interaction.editReply({ embeds: [checkRoll.embedResult] })
    }
}
