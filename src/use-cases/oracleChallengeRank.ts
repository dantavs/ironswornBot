export function OracleChallengeRank(){
    
    const wordList = [
        { word: "Troublesome", chance: 20 },
        { word: "Dangerous", chance: 35 },
        { word: "Formidable", chance: 25 },
        { word: "Extreme", chance: 13},
        { word: "Epic", chance: 7},
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
      
      // Example usage:
      return chooseRandomWord()
}