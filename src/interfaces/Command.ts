import { SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from '@discordjs/builders'
import { ButtonInteraction, CommandInteraction } from 'discord.js'

export interface Command {
    data: 
        | Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
        | SlashCommandSubcommandsOnlyBuilder
    run: (interaction: CommandInteraction) => Promise<void>
}

export interface Button {
    customId: string
    run: (interaction: ButtonInteraction) => Promise<void>
}