export function OracleLocation(){

    const oracleTheme = ['Hideout','Ruin', 'Mine', 'Waste','Mystical Site','Path','Outpost','Wall','Battlefield','Hovel',
    'Spring','Lair','Fort','Bridge','Camp','Cairn/Grave','Caravan','Caravan','Waterfal','Waterfal',
    'Cave','Cave','Swamp','Swamp','Fen','Fen','Ravine','Ravine','Road','Road',
    'Tree','Tree','Pond','Pond','Fields','Fields','Marsh','Marsh','Steading','Steading',
    'Rapids','Rapids','Pass','Pass','Trail','Trail','Glade','Glade','Plain','Plain',
    'Ridge','Ridge','Cliff','Cliff','Grove','Grove','Village','Village','Moor','Moor',
    'Thicket','Thicket','River Ford','River Ford','Valley','Valley','Bay/Fjord','Bay/Fjord','Foothills','Foothills',
    'Lake','Lake','River','River','River','Forest','Forest','Forest','Forest','Coast',
    'Coast','Coast','Coast','Hill','Hill','Hill','Hill','Hill','Mountain','Mountain',
    'Mountain','Mountain','Mountain','Woods','Woods','Woods','Woods','Woods','Woods','Anomaly']

    return oracleTheme[ Math.floor(Math.random() * oracleTheme.length ) ]
}