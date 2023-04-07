export function OracleCombatAction(){
    const oracleOptions = ['Compel a surrender.','Coordinate with allies.','Gather reinforcements.','Seize something or someone.',
    'Provoke a reckless response.','Intimidate or frighten.','Reveal a surprising truth.','Shift focus to someone or something else.',
    'Destroy something or render it useless.','Take a decisive action.','Reinforce Defenses.','Ready an action.','Use the terrain to gain advantage.',
    'Leverage the advantage of a weapon or ability.','Create an oportunity.','Attack with precision.',
    'Attack with power.','Take a completely unexpected action.']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}