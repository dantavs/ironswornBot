function RollIronswornCheck (mod){
    const challengDie1 = Math.floor(Math.random() * 10 )+1;
    const challengDie2 = Math.floor(Math.random() * 10 )+1;
    const actionDie = Math.floor(Math.random() * 6 )+1;
    const actionResult = actionDie + mod

    let result = ''

    if (actionResult > challengDie1 && actionResult > challengDie2){
        result = 'Strong Hit'
    }else{
        if (actionResult <= challengDie1 && actionResult <= challengDie2){
            result = 'Miss'
        }else{
            result = 'Weak Hit'
        }
    }

    return result
}

function stressIronswornCheck(mod){
    const countResults = [
        {result: 'Miss', qty: 0, perc: 0},
        {result: 'Weak Hit', qty: 0, perc: 0},
        {result: 'Strong Hit', qty: 0, perc: 0}
    ]

    const totalRolls = 100000000

    for (let i=0; i < totalRolls; i++){
        const result = RollIronswornCheck(mod)

        countResults.filter((x) => {
            if (result === x.result){
                x.qty++
            }
        })
    }

    countResults[0].perc = ((countResults[0].qty / totalRolls)*100).toFixed(2)
    countResults[1].perc = ((countResults[1].qty / totalRolls)*100).toFixed(2)
    countResults[2].perc = ((countResults[2].qty / totalRolls)*100).toFixed(2)

    console.log('Ironsworn Check | mod: ', mod)
    console.log({countResults})
}

function changeMod(){

    stressIronswornCheck(0)
    stressIronswornCheck(1)
    stressIronswornCheck(2)
    stressIronswornCheck(3)
    stressIronswornCheck(4)
    stressIronswornCheck(5)
}

changeMod()
