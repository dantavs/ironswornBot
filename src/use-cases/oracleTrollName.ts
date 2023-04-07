export function OracleTrollName(){

    const oracleOptions = ['Rattle','Scratch','Wallow','Groak','Gimble','Scar','Cratch','Creech','Shush','Glush',
    'Slar','Gnash','Stoad','Grig','Bleat','Chortle','Cluk','Slith','Mongo','Creak',
    'Burble','Vrusk','Snuffle','Leech','Herk']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}