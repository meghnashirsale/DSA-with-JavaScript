function countFrequency(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
    return frequency;
}

const arr2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countFrequency(arr2));
