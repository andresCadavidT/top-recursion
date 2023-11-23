function mergeSort(toSort){
    if(toSort.length <= 1){return toSort}
    console.log("ToSort", toSort)
    let middle = Math.floor((toSort.length)/2)
    let left =  mergeSort(toSort.slice(0, middle)) 
    let right = mergeSort(toSort.slice(middle)) 
    return merge(left,right)
} 

console.log("FINAL ANSWER",mergeSort([9, 8, 7, 6,7, 5, 4, 3, 2, 1,-2]))

function merge(a, b){
    let m = 0
    let n = 0
    let result = []
    while((a.length > m) && (b.length > n)){
        if(a[m] <= b[n]) { result.push(a[m++])}
        if(b[n] <= a[m]) { result.push(b[n++])}
    }
    for (; a.length > m ; m++) {
        result.push(a[m])
    }
    for (; b.length > n; n++) {
        result.push(b[n])
    }
    return result 
}

// console.log(merge([2,5,6],[3,4,7]))




// --------------- Excercise N1 -------------

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

// function fibsRec(num, result = [0,1], first = 0, second = 1 ){
//     if (result.length === num){return result}
//     if (result.length < num){
//         partial = first + second
//         result.push(partial)
//         return fibsRec(num, result, first = second, second = partial)
//     }
// }

// console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 8, 13]