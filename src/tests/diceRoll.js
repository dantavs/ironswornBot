function DiceRoll(){
    const result = Math.floor(Math.random() * 10 )+1;

    return result
}

function StressDiceRoll(){
    const countResults = [
        { result: 1, qty: 0},
        { result: 2, qty: 0},
        { result: 3, qty: 0},
        { result: 4, qty: 0},
        { result: 5, qty: 0},
        { result: 6, qty: 0},
        { result: 7, qty: 0},
        { result: 8, qty: 0},
        { result: 9, qty: 0},
        { result: 10, qty: 0},
    ]
    for (let i=0; i<1000000;i++){
        const result = DiceRoll()
        countResults.filter((x) => {
            if (result === x.result){
                x.qty++
            }
        })
    }

    console.log({countResults})
}

StressDiceRoll()