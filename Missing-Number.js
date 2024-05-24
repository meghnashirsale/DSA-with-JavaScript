function findMissingNumber(arr) {
    const n = arr.length + 1;
    let totalSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += i;
    }
    
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    
    return totalSum - arrSum;
}

const arr1 = [1, 2, 4, 6, 3, 7, 8];
console.log(findMissingNumber(arr1));
