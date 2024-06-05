//Q7.7. Prefix to Infix Conversion Using Stack
function prefixToInfix(prefix) {
    const stack = [];
    prefix = prefix.split('').reverse().join('');

    for (let char of prefix) {
        if (char.match(/[a-zA-Z0-9]/)) {
            stack.push(char);
        } else {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(`(${a}${char}${b})`);
        }
    }

    return stack.pop();
}

const prefix = "*+AB-CD";
console.log(prefixToInfix(prefix)); 