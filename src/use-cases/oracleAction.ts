export function OracleAction() {
    const oracleAction = ['Scheme','Clash', 'Weaken', 'Initiate','Create','Swear','Avenge','Guard','Defeat','Control','Break','Risk','Surrender','Inspect'
    ,'Raid','Evade','Assault','Deflect','Threaten','Attack','Leave','Preserve','Manipulate','Remove','Eliminate','Withdraw','Abandon','Investigate',
'Hold','Focus','Uncover','Breach','Aid','Uphold','Falter','Suppress','Hunt','Share','Destroy','Avoid','Reject','Demand','Explore','Bolster','Seize','Mourn',
'Reveal','Gather','Defy','Transform','Persevere','Serve','Begin','Move','Coordinate','Resist','Await','Impress','Take','Oppose','Capture','Overwhelm','Challenge',
'Acquire','Protect','Finish','Strengthen','Restore','Advance','Command','Refuse','Find','Deliver','Hide','Fortify','Betray','Secure','Arrive','Affect','Change','Defend',
'Debate','Support','Follow','Contruct','Locate','Endure','Release','Lose','Reduce','Escalate','Distract','Journey','Escort','Learn','Communicate','Depart','Charge','Summon','Search']

    return oracleAction[ Math.floor(Math.random() * oracleAction.length ) ]
}