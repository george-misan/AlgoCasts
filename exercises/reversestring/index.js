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
/*     const arr = str.split('');
    arr.reverse();
    return arr.join('') */
    return str.split('').reverse().join('');
}

module.exports = reverse;

