function revArray(array){
    const newArray=[];
    for(let i=array.length-1;i>=0;i--)
        {
            newArray.push(array[i]);
        }
        return newArray;
}
const numbers=[1,0,2,3,4,5,6];
const newArray = revArray(numbers);
console.log(newArray);