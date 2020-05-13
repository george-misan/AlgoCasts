// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
    var newStr = str.split("");
    var text = '';
    const n = newStr.length
    for (let i=n-1; i>(n-n)-1; i--){
        text += newStr[i];
    }

    return text;
} */

function reverse(str) {
 /*    --- SOLUTION ONE --- */
/*     const arr = str.split('');
    arr.reverse();
    return arr.join('') */

 /*    --- SOLUTION ONE [CLEAN-UP] --- */
/*     return str.split('').reverse().join(''); */


 /*    --- SOLUTION TWO --- */
/* let reverse = '';
for (char of str) {
    reverse = char + reverse;
}

return reverse; */
return str.split('').reduce((accumulator, currentValue) => {
    return currentValue + accumulator
}, '');

}

module.exports = reverse;

