const isButtonCryptografy = document.getElementById("criptografar");
const isButtonDecryptografy = document.getElementById("descriptografar");
const istButtonCopy = document.getElementById("btn-copiar");
const changedFieldText = document.getElementById("imgretangulo");
let encryptText = document.querySelector("input-resultadomensagem");


const handledPreventDefaultBrowser = (event) => event.preventDefault();

const clearForm = () => document.querySelector("form").reset();

const sendEncryptedText = (event) => {
    handledPreventDefaultBrowser(event);

    const encryptedText = document.getElementById("mensagem");

    if (encryptedText.value != "") {
        let text = encryptedAt(encryptedText.value);
        hideContentAndAddAnButton();

        changedFieldText.innerText = text;
    }

    clearForm();
    return changedFieldText;
}

const sendDecryptText = (event) => {
    handledPreventDefaultBrowser(event);

    const decryptedText = document.getElementById("mensagem");

    if (decryptedText.value != "") {
        let text = decryptedAt(decryptedText.value);
        hideContentAndAddAnButton();
        changedFieldText.innerHTML = text;
    }

    clearForm();
    return changedFieldText;
}

const copyText = () => {
    let copyText = document.querySelector(".input-resultadomensagem");

    if (copyText.value !== "") {
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        alert("Texto copiado: " + copyText.value);
    }
}

const encryptedAt = (textEncrypt) => {
    encryptText = removeSpecialChars(textEncrypt);

    return conversorLettersToWords(encryptText);
}

const decryptedAt = (textEncrypted) => {
    encryptText = textEncrypted;

    return conversorWordsToLetters(encryptText);
}

const conversorLettersToWords = (letters) => {
    return letters.replaceAll(/[e]/g, 'enter').replaceAll(/[i]/g, 'imes').replaceAll(/[a]/g, 'ai').replaceAll(/[o]/g, 'ober').replaceAll(/[u]/g, 'ufat');
}

const conversorWordsToLetters = (textEncrypted) => {
    return textEncrypted.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

const removeSpecialChars = (string) => {
    string = string.replaceAll(/[àáâãäå]/g, 'a').replaceAll(/[èéêë]/g, 'e').replaceAll(/[ìíïî]/g, 'i').replaceAll(/[òóõö]/g, 'o')
        .replaceAll(/[ùúûü]/g, 'u').replaceAll(/[ç]/g, 'c').replaceAll(/[ð]/g, 'd').replaceAll(/[ñ]/g, 'n').replaceAll(/[ý]/g, 'y');

    return string.replace(/[^a-z]/gi, ' ').toLowerCase();
}

const hideContentAndAddAnButton = () => {
    let copyText = document.querySelector(".div-copy");
    changedFieldText.style.backgroundImage = "none";
    copyText.innerHTML = '<input type="submit" value="Copiar" class="btn-copiar" onclick="copyText()">';
}


isButtonCryptografy.onclick = sendEncryptedText;
isButtonDecryptografy.onclick = sendDecryptText;