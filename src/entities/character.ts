export interface CharacterProps {
    id?: string
    name: string
    edge: number
    heart: number
    iron: number
    shadow: number
    wits: number
    health?: number
    spirit?: number
    supply?: number
    momentum: number
    assets?: string[]
    vows?: string[]
    playerId: string
    playerUsername: string
    channelId: string
    createdAt?: Date
}

export class Character {
    private props: CharacterProps
    constructor (props: CharacterProps){
        this.props = props
    }

    public name() {
        return this.props.name
    }

}