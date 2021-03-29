const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  isReverseMachine;
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(machineType) {
    this.isReverseMachine = !(machineType === true || machineType === undefined);
  }
  encrypt(message, key) {
    let res = [];
    if(message === undefined || key === undefined) throw new Error();
    let redactKey = this.createKey(message, key);
    message = message.toUpperCase();
    redactKey = redactKey.toUpperCase()
    for(let i = 0, j=0; i < message.length; i++){
      if(this.alphabet.includes(message[i])){
        res.push(this.alphabet[((this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(redactKey[j])) % this.alphabet.length)]);
        j++;
      }
      else {
        res.push(message[i]);
      }
    }
    if(this.isReverseMachine) return res.reverse().join('');
    return res.join('');
  }
  decrypt(encryptedMessage, key) {
    let res = [];
    if(encryptedMessage === undefined || key === undefined) throw new Error();
    let redactKey = this.createKey(encryptedMessage, key);
    redactKey = redactKey.toUpperCase();
    for(let i = 0, j = 0; i < encryptedMessage.length; i++){
      if(this.alphabet.includes(encryptedMessage[i])) {
        res.push(this.alphabet[((this.alphabet.indexOf(encryptedMessage[i]) + this.alphabet.length - this.alphabet.indexOf(redactKey[j])) % this.alphabet.length)]);
        j++;
      }
      else res.push(encryptedMessage[i]);
    }
    if(this.isReverseMachine) return res.reverse().join('');
    return res.join('');
  }

  createKey(message, key){
    let redactKey = '';
    for(; redactKey.length < message.length; redactKey+=key);
    return redactKey.substr(0, message.length);
  }
}

module.exports = VigenereCipheringMachine;
