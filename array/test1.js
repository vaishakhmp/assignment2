const a='malayalam';
function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
checkPalindrome(a);