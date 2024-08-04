
class ValidAnagram {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sortedS = s.split('').sort().join('');
        const sortedT = t.split('').sort().join('');
        return sortedS === sortedT;
    }
}

const validAnagram = new ValidAnagram();
const s = 'anagram';
const t = 'nagaram';
console.log(validAnagram.isAnagram(s, t)); // Output: true
console.log(validAnagram.isAnagram('rat', 'car')); // Output: false