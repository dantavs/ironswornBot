export function OracleCharacterGoal(){

    const oracleOptions = ['Obtain an object','Make an agreement','Build a relationship','Undermine a relationship','Seek a truth',
    'Pay a debt','Refute a falsehood','Harm a rival','Cure an ill','Find a person',
    'Find a home','Seize power','Restore a relationship','Create an item','Travel to a place',
    'Secure provisions','Rebel against power','Collect a debt','Protect a secret','Spread faith',
    'Enrich themselves','Protect a person','Protect the status quo','Advance Status',"Defend a place",
    'Avenge a wrong','Fulfill a duty','Gain knowledge','Prove worthiness','Find redemption',
    'Escape from something',"Resolve a dispute",'Roll twice']

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