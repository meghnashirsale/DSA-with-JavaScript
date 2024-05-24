function moveZerosToEnd(arr) {
    const result = [];
    let zeroCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        } else {
            zeroCount++;
        }
    }
    
    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }
    
    return result;
}

const arr4 = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0];
console.log(moveZerosToEnd(arr4)); 
