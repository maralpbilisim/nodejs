const fs = require('fs');

// VERİ OKUMAK

// fs.readFile('password.txt','utf8',(err,data) =>{
//  if (err) console.log(err);
//  console.log(data);
//  console.log('Dosya okundu');
// })


// DOSYA OLUŞTURMAK
// fs.writeFile('example.json', '{"name":"maralp","surname":"bilisim"', 'utf8', (err,data) =>{
//     if (err) console.log(err);
//     console.log('JSON Dosya başarılı bir şeikilde oluşturuldu');
// });


//  VERİ EKLEMEK

// fs.appendFile('example.txt', '\n Fullstack Developer olmayı', 'utf8', (err,data) =>{
//     if (err) console.log(err);
//     );
// });console.log('Yeni veri eklendi'



// VERİ SİLMEK
// fs.unlink('example.json',(err) =>{
//      if (err) console.log(err)
//      console.log('dosya silindi')
//     })


//KLASÖRLER OLUŞTURMAK

// fs.mkdir('uploads/img',{ recursive: true },(err) =>{
//     if (err) console.log(err)
//    console.log('klasörler oluşturuldu')
// })


//KLASÖRLER SİLMEK

// fs.rmdir('uploads',{ recursive: true },(err) =>{
//     if (err) console.log(err)
//    console.log('klasörler silindi')
// })