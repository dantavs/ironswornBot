export function OracleSettlementName(){
    const oracleOptions = ['Highmount','Brackwater','Frostwood','Redcrest','Grimtree','Stoneford','Deepwater','Whitefall','Graycliff','Three Rivers',
    'Whitebridge','Lonefort','Highcairn','Redhall','Darkwell','Timberwall','Stonetower','Thronhall','Cinderhome','Fellowfield',
    'Ravencliff','Bearmark','Wolfcrag','Eaglespire',"Wyvern's Rest",'Boarwood','Floxhollow','Elderwatch','Elkfield','Dragonshadow',
    'Swordbreak',"Fool's Fall",'Firstmeet','Brokenhelm','Mournhaunt',"Olgar's Stand",'Lostwater',"Rojirra's Lament",'Lastmarch','Rockfall',
    'Abon','Daveza','Damula','Essus','Sina','Kazeera','Khazu','Sova','Nabuma','Tiza',
    'Winterhome','Windhaven','Stormrest','Breakfrost','Springtide','Duskmoor','Frostcrag','Springbrook','Icebreak','Summersong',
    "A trade good (Ironhome)","An Old World city (New Arkesh)","A founder or famous settler (Kei's Hall)","A god (Elisora)","A historical item (Blackhelm)",
    "A firstborn race (Elfbrook)","An elvish word or name (Nessana)","A mythic belief or event (Ghostwalk)",
    "A positive term (Hope)","A negative term (Forsaken)"]

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}