function throwDice(typeOfDice) {
    finalNum = Number(typeOfDice.slice(1));
    return Math.floor((Math.random() * finalNum) + 1)
};

console.log(throwDice('d20'))