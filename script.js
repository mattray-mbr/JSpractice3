
// ------------------- 1 --------------------
function palindrome(str){
	var separate = []; //create empty array to store values
	for(var i = 0; i < str.length; i++){ //loop over string input
		separate.push(str.charAt((str.length-1) - i)); //starting at the last letter, work backwards pushing into a new array
		//second to last letter - 0 == charAt[last letter]
	}
	var reverse = separate.join('');  //join reverse array back into a new string
	if(str === reverse){  //compare both strings
		return true
	} else {
		return false
	}
}
console.log(palindrome('racecar'))
console.log(palindrome('words'))

// ------------------- 2 --------------------
function dashInsert(num){
	var digits = (""+num).split("")
	console.log(digits)
	for(var i = 0; i < digits.length-1; i++){
		if(digits[i] %2 !== 0 && digits[i+1] %2 !== 0) {
			i++
			digits.splice(i, 0,'-')
		} 
	}
	return digits.join('')
}
console.log(dashInsert(234235745465))

// ------------------- 3 --------------------
function caesarCipher(str, num){
	var newWord = '';
	for(var i = 0; i < str.length; i++){
		var num2 = num
		if(str[i].match(/[a-z]/)){
			var newNum = str.charCodeAt(i)+num;
			while(newNum > 122){
				//loops back to a
				newNum = (str.charCodeAt(i)-26)+num2
				num2-=26
			}
			var newLetter = String.fromCharCode(newNum);
			newWord += newLetter
		} else if (str[i].match(/[A-Z]/)){
			var newNum = str.charCodeAt(i)+num;
			while(newNum > 90){
				//loops back to A
				newNum = str.charCodeAt(i)-26+num2
				num2-=26
			}
			var newLetter = String.fromCharCode(newNum);
			newWord += newLetter
		}else {
			newWord += str[i]
		}
	}
	return newWord;
}
console.log(caesarCipher('aza',1))
console.log(caesarCipher('goat', 99))
console.log(caesarCipher('snows storm', 123))
console.log(caesarCipher("Jump, GOLD", 99))















