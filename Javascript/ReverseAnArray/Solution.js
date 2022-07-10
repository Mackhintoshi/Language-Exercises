let sample = ["a","b","c","d","e"]

function reverseArray(input){
    result = []
    arrayToReverse = Array.from(input);
    for(let i = 0;i < input.length; i++){
        result.push(arrayToReverse.pop());
    }
    return result;
}