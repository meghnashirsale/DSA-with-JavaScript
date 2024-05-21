function printPattern(n){
   for(let i=1;i<=n;i++){
    let pattern=' ';
    for(let j=1;j<=i;j++){
        pattern +='* ';
    }
    console.log(pattern.trim());
   }
}
printPattern(3);