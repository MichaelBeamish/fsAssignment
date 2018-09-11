var fs = require('fs');
var path = require('path');

//CHALLENGE 1
fs.readFile("./challenge1/info.txt", "utf8", (err, data) => {
    if(err){
        throw err; 
    }
    console.log(data);
})

//CHALLENGE 2
let challenge2 = fs.readFileSync("./challenge2/info.txt", "utf8");
challenge2+=" Bob, Bobby, Bobbett, Rob, Robert, Roberto, Roberta, Robobino";
fs.writeFileSync("./challenge2/info.txt", challenge2);
console.log(challenge2);

//CHALLENGE 3
fs.rename("./challenge3/binfo.txt", "./challenge3/info.txt", function(err) {
    if ( err ) console.log('ERROR: You have probably already changed the name of the file.\n' + err);
});

//CHALLENGE 4
fs.mkdir("./challenge4/copyfolder");
fs.createReadStream("./challenge4/info.txt").pipe(fs.createWriteStream("./challenge4/copyfolder/info.txt"));

//CHALLENGE 5
let challenge5 = fs.readFileSync("./challenge5/info.txt", "utf8");
challenge5 = challenge5.split('-').join(' ');
fs.writeFileSync("./challenge5/info.txt", challenge5);
console.log(challenge5);

//CHALLENGE 6
fs.readdir("./challenge6", (err, files) => {
    if (err) {
      console.error(err)
    } else {
        
        files.forEach(element => {
            if(path.extname(element) === '.txt'){
                console.log(element);
            }
        });
    }
  })