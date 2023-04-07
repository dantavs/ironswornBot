export function OracleCharacterDescriptor(){
    const oracleOptions = ['Stoic','Attractive','Passive','Aloof','Affectionate','Generous','Smug','Armed','Clever','Brave',
    'Ugly','Sociable','Doomed','Connected','Bold','Jealous','Angry','Active','Suspicious','Hostile',
    'Hardhearted','Successful','Talented','Experienced','Deceitful','Ambitious','Aggressive','Conceited','Proud','Stern',
    'Dependent',"Wary",'Strong','Insightful','Dangerous','Quirky',"Cheery",'Disfigured','Intolerant','Skilled',
    'Stingy','Timid','Intensive','Wild','Bitter','Cunning','Remorseful','Kind','Charming','Oblivious',
    'Critical','Cautious','Resourceful','Weary','Wounded','Anxious','Powerful','Athletic','Driven','Cruel',
    "Quiet","Honest","Infamous","Dying","Reclusive",'Artistic','Disabled','Confused','Manipulative','Relaxed',
    "Stealthy","Confident","Weak",'Friendly','Wiser','Influential','Young','Adventurous','Opressed','Vengeful',
    "Cooperativa","Armored","Apathetic",'Determined','Loyal','Sick','Religious','Selfish','Old','Fervent',
    "Violent","Agreeable",'Hot-tempered','Stubborn','Incompetent','Greedy','Cowardly','Obsessed','Careless','Ironsworn']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}