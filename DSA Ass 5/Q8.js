// Q8. Prefix to Postfix Conversion Using Stack
function prefixToPostfix(prefix) {
    const stack = [];
    prefix = prefix.split('').reverse().join('');

    for (let char of prefix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(`${a}${b}${char}`);
        }
    }

    return stack.pop();
}

const prefixExpr = "*+AB-CD";
console.log(prefixToPostfix(prefixExpr)); 
