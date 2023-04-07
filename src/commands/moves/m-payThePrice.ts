import { EmbedBuilder } from "@discordjs/builders";
import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { prisma } from "../../server";
import { CheckRoll } from "../../utils/checkRoll";
import { GetCharacater } from "../../utils/getCharacter";

export const rollPaythePrice: Command = {
    data: new SlashCommandBuilder()
        .setName("price")
        .setDescription("Roll Pay the Price move"),  
    run: async (interaction) => {
        await interaction.deferReply()
        const { user, channelId } = interaction
        const playerId = user.id

        const character = await prisma.character.findFirst({
            where: {
                channelId,
                playerId
            }
        })

        const getChar = await GetCharacater(playerId, channelId)
        
        let response = ''
        if (getChar.character){

            const wordList = [
                { word: "Roll again and make it worst", chance: 2 },
                { word: "A person or community you trusted lose faith in you, or acts against you", chance: 3 },
                { word: "A person or community you care about is exposed to danger.", chance: 4 },
                { word: "You are separated from something or someone.", chance: 7},
                { word: "Your action has an unintended effect.", chance: 7},
                { word: "Something of value is lost or destroyed.", chance: 9},
                { word: "The current situation worsens.", chance: 9},
                { word: "A new danger or foe is revealed.", chance: 9},
                { word: "It causes a delay or puts you at a disadvantage.", chance: 9},
                { word: "It is harmful.", chance: 9},
                { word: "It is stressful.", chance: 9},
                { word: "A surprising development complicates your quest.", chance: 8},
                { word: "It wastes resources.", chance: 5},
                { word: "It forces you to act against your best intentions.", chance: 4},
                { word: "A friend, companion, or ally is put in harm's way (or you are, if alone).", chance: 4},
                { word: "Roll twice more on this table. Both results occur. If they are the same result, make it worse.", chance: 2},
              ];
              
              function chooseRandomWord() {
                // Generate a random number between 0 and 100
                const randomNumber = Math.floor(Math.random() * 100);
              
                // Iterate through the word list and check if the random number falls within the chance range for each word
                let cumulativeChance = 0;
                for (let i = 0; i < wordList.length; i++) {
                  cumulativeChance += wordList[i].chance;
                  if (randomNumber < cumulativeChance) {
                    return wordList[i].word;
                  }
                }
              
                // If the random number is greater than or equal to 100, return the last word in the list as a fallback
                return wordList[wordList.length - 1].word;
              }
              
              response = getChar.character.name
              
              const price = chooseRandomWord()
              
              const moveResultText = new EmbedBuilder()
                .addFields(
                    {name:price, value:' '}
                )

            if (character?.portrait){
                moveResultText.setThumbnail(character?.portrait)
            }
              
              
              await interaction.channel?.send({ embeds: [moveResultText] })
              
        }else{
                response = getChar.message
            }

        await interaction.editReply(response);
    }
}
    
 