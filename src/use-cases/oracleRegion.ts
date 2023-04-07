export function OracleRegion(){
    const wordList = [
        { word: "Barrier Lands", chance: 12 },
        { word: "Ragged Coast", chance: 12 },
        { word: "Deep Wilds", chance: 10 },
        { word: "Flooded Lands", chance: 12},
        { word: "Havens", chance: 14},
        { word: "Hinterlands", chance: 12},
        { word: "Tempest Hills", chance: 12},
        { word: "Veiled Mountains", chance: 10},
        { word: "Shattered Wastes", chance: 5},
        { word: "Elsewhere", chance: 1 },
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

      const region = chooseRandomWord()

      let image = ''

      switch (region){
          case "Barrier Lands":
              image = 'https://imgur.com/shX0ESh.png'
              break;
          case "Ragged Coast":
              image = 'https://imgur.com/iWKCH03.png'
              break;
          case "Deep Wilds":
              image = 'https://imgur.com/2qUp7HK.png'
              break;
          case "Flooded Lands":
              image = 'https://imgur.com/hKQukib.png'
              break;
          case "Havens":
              image = 'https://imgur.com/650dK3V.png'
              break;
          case "Hinterlands":
              image = 'https://imgur.com/2gLNCeK.png'
              break;
          case "Tempest Hills":
              image = 'https://imgur.com/Rs2hJU2.png'
              break;
          case "Veiled Mountains":
              image = 'https://imgur.com/kiyGYDV.png'
              break;
          case "Shattered Wastes":
              image = 'https://imgur.com/Xl1H2NG.png'
              break;
      }
      
      // Example usage:
      return {region: region, image: image}
}