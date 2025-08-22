function reverseWords(sentence) 
{
    sentence = sentence.trim();

    let words = sentence.split(" ");

    words.reverse();

    return words.join(" ");
}

//Test Case 1:
console.log(reverseWords("the sky is blue"));

//Test Case 2:
console.log(reverseWords("  hello world  "));

//Test Case 3:
console.log(reverseWords("a good   example"));

//Test Case 4:
console.log(reverseWords("    "));

//Test Case 5:
console.log(reverseWords("word"));
