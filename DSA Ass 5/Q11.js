// Q11. Infix to Prefix Conversion Using Stack
function infixToPrefix(infix) {
    const reverseInfix = infix.split('').reverse().join('');
    const temp = infixToPostfix(reverseInfix.split('').map(char => {
        if (char === '(') return ')';
        if (char === ')') return '(';
        return char;
    }).join(''));

    return temp.split('').reverse().join('');
}

// Example usage:
const infixExpr2 = "(a-b/c)*(a/k-l)";
console.log(infixToPrefix(infixExpr2)); 
