import { Character, CharacterProps } from "../entities/character";
import { prisma } from '../server'

export class CreateCharacter {
     async execute(props: CharacterProps) {
        const character = new Character(props)

        prisma.character.create({
            data: {
                name: props.name,
                playerId: props.playerId,
                playerUsername: props.playerUsername,
                channelId: props.channelId,
                iron: props.iron,
                heart: props.heart,
                shadow: props.shadow,
                wits: props.wits,
                edge: props.edge
            }
        }
        )

        return { character }
        
     }
}