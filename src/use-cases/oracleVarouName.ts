export function OracleVarouName(){

    const oracleOptions = ['Vata','Zora','Jasna','Charna','Tana','Soveen','Radka','Zlata','Leesla','Byna',
    'Meeka','Iskra','Jarek','Darva','Neda','Keha','Zhivka','Kvata','Staysa','Evka',
    'Vuksha','Muko','Dreko','Aleko','Vojan']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}