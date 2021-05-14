const { program } = require('commander')

const CHAR_CODE_A = 'A'.charCodeAt(0) // 65

program
  .arguments('<key> <plaintext>')
  .description('vigenere encrypt', {
    key: '密钥',
    plaintext: '明文'
  })
  .action(encrypt)

program.parse(process.argv)

function encrypt (key, plaintext) {
  const keyLen = key.length
  const plaintextLen = plaintext.length
  const ciphertextArr = []
  for (let i = 0; i < plaintextLen; ++i) {
    const plainLetter = plaintext[i]
    const offset = (key).charCodeAt(i % keyLen) - CHAR_CODE_A
    const cipherLetter = String.fromCharCode((plainLetter.charCodeAt(0) - CHAR_CODE_A + offset) % 26 + CHAR_CODE_A)
    ciphertextArr.push(cipherLetter)
  }
  console.log(ciphertextArr.join(''))
}

