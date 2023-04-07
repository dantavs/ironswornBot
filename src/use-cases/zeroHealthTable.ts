export function ZeroHealthTable(){

    let result1 ="You are unconscious and out of action. If left alone, you come back to your senses in an hour or two.\n"
    result1 += "If tou are vulnerable to a foe not inclined to show mercy, Face Death"

    let result2 ="You are reeling and fighting to stay conscious.\n" 
    result2 += "If you engage in any vigorous activity (such as running or fighting) before take a breather for a few minutes,"
    result2 += "roll on this table again (before resolve the other move)."

    const wordList = [
        { word: "The harml is mortal. Face Death.", chance: 10 },
        { word: "You are dying. You need to Heal within an hour or two, or Face Death.", chance: 10 },
        { word: result1, chance: 15 },
        { word: result2, chance: 15},
        { word: "You are battered but still standing.", chance: 50},
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

      const result = chooseRandomWord()

      return {result: result}
}