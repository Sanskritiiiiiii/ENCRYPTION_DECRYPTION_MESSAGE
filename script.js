const chars = " " + "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" + "0123456789" + "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const key = chars.split('').sort(() => Math.random() - 0.5).join('');

function encrypt() {
    const plainText = document.getElementById('encrypt-input').value;
    let cipherText = '';
    for (let letter of plainText) {
        const index = chars.indexOf(letter);
        cipherText += key[index];
    }
    document.getElementById('encrypt-result').innerText = 'Encrypted message: ' + cipherText;
}

function decrypt() {
    const cipherText = document.getElementById('decrypt-input').value;
    let plainText = '';
    for (let letter of cipherText) {
        const index = key.indexOf(letter);
        plainText += chars[index];
    }
    document.getElementById('decrypt-result').innerText = 'Decrypted message: ' + plainText;
}

document.getElementById('encrypt-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        encrypt();
    }
});

document.getElementById('decrypt-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        decrypt();
    }
});
