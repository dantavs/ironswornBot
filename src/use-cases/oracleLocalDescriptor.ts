export function OracleLocalDescriptor(){

    const oracleTheme = ['High','High','Remote','Remote','Exposed','Exposed','Small','Small','Broken','Broken',
    'Diverse','Diverse','Rough','Rough','Dark','Dark','Shadowy','Shadowy','Contested','Contested',
    'Grim','Grim','Wild','Wild','Fertile','Fertile','Blocked','Blocked','Ancient','Ancient',
    'Perilous','Perilous','Hidden','Hidden','Occupied','Occupied','Rich','Rich','Big','Big',
    'Savage','Savage','Defended','Defended','Withered','Withered','Mystical','Mystical','Inaccessible','Inaccessible',
    'Protected','Portected','Abandoned','Abandoned','Wild','Wild','Foul','Foul','Dead','Dead',
    'Ruined','Ruined','Barren','Barren','Cold','Cold','Blighted','Blighted','Low','Low',
    'Beautiful','Beautiful','Abundant','Abundant','Lush','Lush','Flooded','Flooded','Empty','Empty',
    'Strange','Strange','Corrupted','Corrupted','Peaceful','Peaceful','Forgotten','Forgotten','Expansive','Expansive',
    'Settled','Settled','Dense','Dense','Civilized','Civilized','Desolated','Desolated','Isolated','Isolated']

    return oracleTheme[ Math.floor(Math.random() * oracleTheme.length ) ]
}