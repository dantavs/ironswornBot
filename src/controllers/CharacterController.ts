import { prisma } from "../server"


export const CharacterController = {

    async Create (){ 
        return 'ok'
    },

    async getChar(){
        const playerId = '286994687120637955'
        const channelId = '1087427041542033439'
        const character = await prisma.character.findFirst({
            where: {
                playerId,
                channelId
            }
        })

        console.log('char: ', character?.name, ' channelId: ')
        

        let result = ''
        if (character){
            result = character.name
        }else{
            result = 'You have not character in this channel'
        }


        return result
    }


}

