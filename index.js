
// function fibs(num){
//     let first = 0
//     let second = 1
//     let result = []
//     result.push(first)
//     result.push(second)
//     while (num > 2){
//         let partial = first + second
//         result.push(partial)
//         first = second
//         second = partial
//         num--
//     }
//     return result
// }

function fibsRec(num, result = [0,1], first = 0, second = 1 ){
    if (result.length === num){return result}
    if (result.length < num){
        partial = first + second
        result.push(partial)
        return fibsRec(num, result, first = second, second = partial)
    }
}

console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 8, 13]