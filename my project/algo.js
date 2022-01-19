let ch = "hello my name is skander.";    
let  i =0;
let words = 0;
let vowels = 0;
let characters=0;
while (ch.charAt(i)!= '.'){
characters++;
if (ch.charAt(i) == ' ' ) words ++;
else if (ch.charAt(i) == 'a' || ch.charAt(i) == 'e' || ch.charAt(i) == 'o' ||ch.charAt(i) == 'i' )
vowels++;
i++;
}
if (characters > 0) 
words++;
console.log("words are" + words);
console.log("vowels " + vowels);
console.log("characters " + characters);