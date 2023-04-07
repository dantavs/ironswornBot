export function OracleCharacterRole(){
    const oracleOptions = ['Criminal','Criminal','Healer','Healer','Bandit','Bandit','Guide','Guide','Guide','Performer',
    'Performer','Performer','Miner','Miner','Miner','Mercenary','Mercenary','Mercenary','Outcast','Outcast',
    'Outcast','Vagrant','Vagrant','Vagrant',"Forester",'Forester','Forester','Traveler','Traveler','Traveler',
    'Mystic',"Mystic",'Mystic','Priest','Priest',"Priest",'Sailor',"Sailor",'Sailor','Pilgrim',
    'Pilgrim','Pilgrim','Thief','Thief','Thief','Adventurer','Adventurer','Adventurer','Forager','Forager',
    'Forager','Leader','Leader','Leader','Guard','Guard','Guard','Guard','Artisan','Artisan',
    "Artisan","Artisan","Scout","Scout","Scout",'Herder','Herder','Herder','Herder','Fisher',
    "Fisher","Fisher","Fisher",'Warrior','Warrior','Warrior','Warrior','Warrior','Hunter','Hunter',
    'Hunter','Hunter','Hunter','Raider','Raider','Raider','Raider','Raider','Trader','Trader',
    'Trader','Trader','Trader','Farmer','Farmer','Farmer','Farmer','Farmer','Unusual Role']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}