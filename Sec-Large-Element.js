function findSecondLargest(arr) {
    let first = -Infinity, second = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    return second;
}

const arr3 = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(arr3));
