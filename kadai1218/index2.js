const fs = require('fs')
// ファイルを作成
fs.writeFileSync('./hello.txt')
// 作成したファイルを読み込み
const buf =fs.readFileSync('./hello.txt')
console.log(buf.toString())