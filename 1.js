const subOptimal=  () => {
    const strings = ['abcd', 'karamba', 'racecar'];

    return strings.map(item => {
        return reverseString(item);
    });
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

console.log(subOptimal());

