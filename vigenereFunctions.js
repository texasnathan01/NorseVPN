//Encrypts message into vigenere cipher
function vigenere(message, key){
	message = purify(message);
	key = keyLen(key, message.length);
}

//Removes spaces from a string
function purify(message){
	x = message.split(" ");
	x = x.join("");
	return x;
}

//Return the key repeated for uproper length
function keyLen(key, len){
	var ret = "";
	var x = len/key.length;
	ret += key.repeat([x]);
	var remain = len % key.length;
	ret += key.slice(0, remain);
	return ret;
}

//Encrypts individual character
function encrypt(message, key){
	var x = message.charCodeAt(0);
	var y = key.charCodeAt(0);
	var z = x + (y - 65);
	if (z > 90){
		z -= 26;
	}
	return String.fromCharCode(z);
}

//Decyptes an individual character
function encrypt(message, key){
	var x = message.charCodeAt(0);
	var y = key.charCodeAt(0);
	var z = x - (y - 65);
	if (z < 65){
		z += 26;
	}
	return String.fromCharCode(z);
}

//Encrypts entire message
function vigenereCipher(message, key){
	message = purify(message);
	key = keyLen(key);
	var encrypted = "";
	for(var i = 0; i < message.length; i++){
		encrypted += encrypt(message[i], key[i]);
	}
	return encrypted;
}

//Decryptes entire message
funciton decryptCipher(message, key){
	key = keyLen(key);
	var decrypted = "";
	for (var i=0; i < message.length; i++){
		decrypted += decrypt(message[i], key[i]);
	}
	return decrypted;
}