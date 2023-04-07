export function OracleCoastalWaterLocation(){
    const oracleOptions = ['Fleet','Sargassun', 'Floatsam', 'Mystical Site','Lair','Wreck','Wreck','Wreck','Wreck','Wreck',
                            'Harbor','Harbor','Harbor','Harbor','Harbor','Ship','Ship','Ship','Ship','Ship',
                            'Ship','Ship','Ship','Rocks','Rocks','Rocks','Rocks','Rocks','Rocks','Rocks',
                            'Fjord','Fjord','Fjord','Fjord','Fjord','Fjord','Fjord','Fjord','Estuary','Estuary',
                            'Estuary','Estuary','Estuary','Estuary','Estuary','Estuary','Cove','Cove','Cove','Cove',
                            'Cove','Cove','Cove','Cove','Bay','Bay','Bay','Bay','Bay','Bay',
                            'Bay','Bay','Ice','Ice','Ice','Ice','Ice','Ice','Ice','Ice',
                            'Island','Island','Island','Island','Island','Island','Island','Island','Island','Island',
                            'Island','Island','Island','Island','Island','Open Water','Open Water','Open Water','Open Water','Open Water',
                            'Open Water','Open Water','Open Water','Open Water','Open Water','Open Water','Open Water','Open Water','Open Water','Anomaly']

    return oracleOptions[ Math.floor(Math.random() * oracleOptions.length ) ]
}