export function OracleTheme() {
    const oracleTheme = ['Risk','Ability', 'Price', 'Ally','Battle','Safety','Survival','Weapon','Wound','Shelter','Leader','Fear','Time','Duty', 'Secret',
    'Innocence','Renown','Direction','Death','Honor','Labor','Solution','Tool','Balance','Love','Barrier','Creation','Decay','Trade',
'Bond','Hope','Superstition','Peace','Deception','History','World','Vow','Protection','Nature','Opinion','Burden','Vengeance','Opportunity',
'Faction','Danger','Corruption','Freedom','Debt','Hate','Possession','Stranger','Passage','Land','Creature','Desease','Advantage','Blood',
'Languange','Rumor','Weakness','Greed','Family','Resource','Structure','Dream','Community','War','Portent','Prize','Destiny','Momentum','Power',
'Memory','Ruin','Mysticism','Rival','Problema','Idea','Revenge','Health','Fellowship','Enemy','Religion','Spirit','Fame','Desolation','Strength',
'Knowledge','Truth','Quest','Pride','Loss','Law','Path','Warning','Relationship','Wealth','Home','Strategy','Supply']

    return oracleTheme[ Math.floor(Math.random() * oracleTheme.length ) ]
}