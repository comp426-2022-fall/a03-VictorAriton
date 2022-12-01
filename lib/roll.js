export default function roll(sides, dice, rolls){

    let results = [];
    // number of rolls
    for(let i = 0; i < rolls; i++){
        let current = 0;
        for(let counter = 0; counter < dice; counter++){
            let addNum = Math.floor(Math.random() * sides) + 1;
            current += addNum;
        }
        results[i] = current;
    }
// At this point, you could add the roll to the list of results by pushing but in the autograder it is uncessary 
//.push
    let resultstring = {
        sides:sides,
        dice: dice, 
        rolls: rolls,
        results: results
    }

//Stringify this for assignment 4
    return resultstring;
}