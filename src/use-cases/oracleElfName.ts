export function OracleElfName(){
    const oracleOptions = ['Arsula','Naidita','Belesunna','Vidarna','Ninsunu','Balathu','Dorosi','Gezera','Zursan','Seleeku',
    'Utamara','Nebakay','Dismashk','Mitunu','Atani','Kinzura','Sumula','Ukames','Ahmeshki','Ilsit',
    'Mayatanay','Etana','Gamanna','Nessana','Uralar','Tishetu','Leucia','Sutahe','Dotani','Uktannu',
    'Retenay','Kendalanu','Tahuta','Mattissa','Anatu','Aralu','Arakhi','Ibrahem','Sinosu','Jemshida',
    'Visapni','Hullata','Sidura','Kerihu','Ereshki','Cybela','Anunna','Otani','Ditani','Faraza']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}