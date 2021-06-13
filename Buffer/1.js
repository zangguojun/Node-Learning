let r = Buffer.from('珠')
console.log(r);
console.log(0xe7.toString(2));
console.log(0x8f.toString(2));
console.log(0xa0.toString(2));
// 00111001 00111000 00111110 00100000
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
str += str.toLowerCase()
str += '0123456789+/'
console.log(str[57]+str[56]+str[62]+str[32]);