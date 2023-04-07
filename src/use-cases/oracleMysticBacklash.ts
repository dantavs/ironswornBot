export function OracleMysticBacklash(){
    const oracleOptions = ['Your ritual has the opposite affect.','You are sapped of strength.','Your friend, ally, or companion is adversely affected.',
    'You destroy an important object.','You inadvertently summon a horror.','You collapse, and drift into a troubled sleep.',
    'You undergo a physical torment which leaves its mark upon you.','You hear ghostly voices whispering of dark portents.',
    'You are lost in shadow, and find yourself in another place without memory of how you got there.','RYou alert someone or something to your presence.',
    'You are not yourself, and act against a friend, ally, or companion.','You affect or damage your surroundings, causing a disturbance or potential harm.',
    'You wast resources.','You suffer the loss of a sense for several hours.',
    'You lose your connection to magic for a day or so, and cannot perform rituals.','Your ritual affects the target in an unexpected and problematic way.',
    'Your ritual reveals a surprising and troubling truth.','You are tempted by dark powers.','You see a troubling vision of you future',
    'You can not perform this ritual again until you acquire an important component.','You develop a strange fear or compulsion.',
    'Your ritual causes creatures to exhibit strange or aggressive behavior.','You are tormented by an apparition from your past.',
    'You are wracked with sudden sickness.','Roll twice']

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