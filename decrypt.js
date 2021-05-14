const { program } = require('commander')

const CHAR_CODE_A = 'A'.charCodeAt(0) // 65

program
  .arguments('<key> <ciphertext>')
  .description('vigenere decrypt', {
    key: '密钥',
    ciphertext: '密文'
  })
  .action(decrypt)

program.parse(process.argv)

function decrypt (key, ciphertext) {
  const keyLen = key.length
  const ciphertextLen = ciphertext.length
  const plaintextArr = []
  for (let i = 0; i < ciphertextLen; ++i) {
    const cipherLetter = ciphertext[i]
    const offset = (key).charCodeAt(i % keyLen) - CHAR_CODE_A
    const plainLetter = String.fromCharCode((cipherLetter.charCodeAt(0) - CHAR_CODE_A - offset + 26) % 26 + CHAR_CODE_A)
    plaintextArr.push(plainLetter)
  }
  console.log(plaintextArr.join(''))
}

