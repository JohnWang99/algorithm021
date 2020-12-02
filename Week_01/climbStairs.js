const climbStairs = (n) => {
    let prev = 1;
    let cur = 1;
    for (let i = 2; i < n + 1; i++) {
        let temp = cur;
        cur = prev + cur;
        prev = temp;
    }
    return cur;
}

// var climbStairs = function (n) {
//     const arr = [];
//     arr[1] = 1;
//     arr[2] = 2;
//     for (let i = 3; i < n + 1; i++) {
//         arr[i] = arr[i - 2] + arr[i - 1];
//     }
//     return arr[n];
// };