export function OracleMajorPlotTwist(){

    const oracleOptions = ['It was all a diversion.','A dark secret is revealed.','A trap is sprung.',
    'An assumption is revealed to be false.','A secret alliance is revealed.','Your actions benefit an enemy.',
    'Someone returns unexpectedly.','A more dangerous foe is revealed.',
    'You and an enemy share a common goal.','A true identity is revealed.',
    'You are betrayed by someone who was trusted.','You are too late.',
    'The true enemy is revealed.','The enemy gains new allies.',
    'A new danger appears.','Someone or something goes missing.',
    'The truth of a relationship is revealed.','Two seemingly unrelated situations are shown to be connected.',
    'Unexpected powers or abilities are revealed.','Roll twice']

    let selectedOption = oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]

    const words = []
    words.push(selectedOption)


    if (selectedOption === 'Roll twice'){
        selectedOption = oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
        words.push(selectedOption)
        selectedOption = oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
        words.push(selectedOption)
    }

    return words
}