export function OracleSettlementTrouble(){

    const oracleOptions = ['Outsiders rejected','Dangerous discovery', 'Dreadful omens', 'Natural Disaster','Old wounds reopened',
    'Important object is lost','Someone is captured','Mysterious phenomenon','Revolt agaist a leader','Vengeful outcast',
    'Rival settlement','Nature strikes back','Someone is missing','Production halts','Mysterious murderers',
    'Debt comes due','Unjust leadership','Disastrous accident','In league with the enemy','Raiders prey on the weak',
    'Cursed Past','An innocent is accused','Corrupted by Dark Magic','Isolated by brutal weather','Provisions are scarce',
    'Sickness run amok','Allies become enemies','Attack is imminent','Lost caravan','Dark secret revealed',
    'Urgent expedition','A leader falls','Families in conflict','Incompetent leadership','Reckless warmongering',
    'Beast on the hunt','Betrayed from within','Broken truce','Wrathful haunt','Conflict with firstborn',
    'Trade route blocked','In the crossfire','Stranger causes discord','Important event threatened','Dangerous tradition',
    'Roll twice','Roll twice','Roll twice','Roll twice','Roll twice']

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