let numberOfVictories = 1
let numberOfDefeats = 10

let balance = balanceCalculator(numberOfVictories, numberOfDefeats)
let level = levelCalculator(balance)

levelCalculatorMessage(balance, level)


function levelCalculatorMessage(balanceOfVictories, level){

    console.log("O herói tem um saldo de " + balanceOfVictories + " vitórias, e está no nível " + level)
   
}

function levelCalculator(balanceOfMatches){
    let playerLevel = ""

    if (balanceOfMatches < 10)
    {
        playerLevel = "Ferro"
    }
    else if (balanceOfMatches < 21)
    {
        playerLevel = "Bronze"
    }
    else if (balanceOfMatches < 51)
    {
        playerLevel = "Prata"
    }
    else if (balanceOfMatches < 81)
    {
        playerLevel = "Ouro"
    }
    else if (balanceOfMatches < 91)
    {
        playerLevel = "Diamante"
    }
    else if (playerLevel < 101)
    {
        playerLevel = "Lendário"
    }
    else
    {
        playerLevel = "Imortal"
    }

    return playerLevel
}

function balanceCalculator(numVictories, numDefeats){
    let balance = numVictories - numDefeats

    if(balance >= 0)
    {
        return balance
    }
    else
    {
        return 0
    }
     
}
