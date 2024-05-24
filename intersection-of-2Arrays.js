function intersection(arr1, arr2) {
    const result = [];
    const set1 = new Set();
    const set2 = new Set(arr2);
    
    for (let i = 0; i < arr1.length; i++) {
        set1.add(arr1[i]);
    }
    
    set1.forEach(num => {
        if (set2.has(num)) {
            result.push(num);
        }
    });
    
    return result;
}

const arr5_1 = [1, 2, 2, 1];
const arr5_2 = [2, 2];
console.log(intersection(arr5_1, arr5_2)); 
