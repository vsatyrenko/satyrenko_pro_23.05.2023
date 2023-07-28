const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length) {

// let charactersLength = characters.length;
let randomElements =  '';
for (let i = 0; i <= length; i++) {
    let random = Math.floor(Math.random() * characters.length);
    randomElements += characters[random] 
    }
    return randomElements;
}

const key = generateKey(15, characters);
console.log(key);

