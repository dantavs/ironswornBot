export function OracleQuickSettlementName(){

    const prefix = ['Break','Green','Wolf','Raven','Gray','Red','Axe','Great','Wood','Low',
    'White','Storm','Black','Mourn','New','Stone','Grim','Lost','High','Rock',
    'Shield','Sword','Frost','Thorn',"Long"]

    const selectedPrefix = prefix[ Math.floor(Math.random() * prefix.length ) ]

    const sufix = ['moor','ford','crag','watch','hope','wood','ridge','stone','haven','fall',
        'river','field','hill','bridge','mark','cairn','land','hall','mount','rock',
        'brook','barrow','stead','home',"weak"]

    const selectedSufix = sufix[ Math.floor(Math.random() * sufix.length ) ]

    return  selectedPrefix + selectedSufix
}