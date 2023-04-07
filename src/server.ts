import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import Discord from 'discord.js';
import { IntentOptions } from '../IntentOptions'
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { CharacterController } from "./controllers/CharacterController";


(async () => {
    const BOT: Discord.Client = new Discord.Client({intents:IntentOptions});
    BOT.on("ready", async () => await onReady(BOT));
    BOT.on("interactionCreate", async (interaction) => {
        await onInteraction(interaction)
    })
    await BOT.login (process.env.BOT_TOKEN)
})()

const app = Fastify()
export const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Drink'
            }
        }
    })

    return habits
})

app.get('/char', CharacterController.getChar)

app.listen({
    port: 5555
}).then(() => {
    console.log('HTTP Server running!')
})