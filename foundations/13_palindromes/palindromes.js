const palindromes = function (word) {
    const alphanum ="qwertyuiopasdfghjklZxcvbnm1234567890";

    const cleaned = word.toLowerCase()
                        .split("")
                        .filter(char => alphanum.includes(char))
                        .join('');

    return cleaned === cleaned.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
