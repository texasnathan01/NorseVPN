function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}
function caesarCipher(message = "Get pranked bro", k = 0){
  if(typeof message !== 'string'){
    message = message.toString(); 
  }
  var caesar = "";
  for(var i = 0; i < message.length; i++){
    if(message.charCodeAt(i) < 58 && message.charCodeAt(i) > 47){
      var z = message.charCodeAt(i) - 48;
      caesar += String.fromCharCode((z+k)%10 + 48)
    }
    else if(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91){
      var x = message.charCodeAt(i) - 65;
      caesar += String.fromCharCode((x+k)%26 + 65);
    }
    else if(message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123){
      var y = message.charCodeAt(i) - 97;
      caesar += String.fromCharCode((y+k)%26 + 97);
    }
    else{
      caesar += message.charAt(i);
    }
  }
  return caesar;
}
function decryptCaesarCipher(message = "Get pranked bro", k = 0){
  if(typeof message !== 'string'){
    message = message.toString(); 
  }
  var caesar = "";
  for(var i = 0; i < message.length; i++){
    if(message.charCodeAt(i) < 58 && message.charCodeAt(i) > 47){
      var z = message.charCodeAt(i) - 48;
      caesar += String.fromCharCode((z-k)%10 + 48)
    }
    else if(message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91){
      var x = message.charCodeAt(i) - 65;
      caesar += String.fromCharCode((x-k)%26 + 65);
    }
    else if(message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123){
      var y = message.charCodeAt(i) - 97;
      caesar += String.fromCharCode((y-k)%26 + 97);
    }
    else{
      caesar += message.charAt(i);
    }
  }
  return caesar;
}