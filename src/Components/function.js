export  function getRandomPlayer(players) {
    let number = Math.random() *  Object.keys(players).length 
    let numberB = Math.ceil(number)
    return numberB
}