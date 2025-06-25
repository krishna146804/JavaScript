function reverse_word(sentence){
    let splitedSentence= sentence.split("")
    return splitedSentence.reverse().join(" ")
}

console.log(reverse_word("krishna"))