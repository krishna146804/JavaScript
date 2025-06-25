function palindrome(sentence){
    let splitedSentence= sentence.split(" ")
    let reverse_word= splitedSentence.reverse().join(" ")
    return sentence==reverse_word
}

console.log(palindrome("krishna"))
console.log(palindrome("racecar"))

