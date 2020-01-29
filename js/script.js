(function(){
    const cipherOption = Number(prompt('Deseja CRIPTOGRAFAR(1) ou DESCRIPTOGRAFAR(2):'))
    const key = Number(prompt('Digite o numero da chave:'))
    const caesarCipher = function (option, key, cipher){
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let msg = ''

        for(let i=0; i<cipher.length; i++){
            for(let j=0; j<abc.length; j++){
                if(cipher[i].toUpperCase() == abc[j]){
                    if (option == 1){
                        if((key+j)<26){
                            msg += abc[key+j]
                        } else {
                            msg += abc[((key+j)-26)]
                        }
                    } else {
                        if((j-key)>=0){
                            msg += abc[j-key]
                        } else {
                            msg += abc[((j-key)+26)]
                        }
                    }                  
                } else if (cipher[i] == ' ') {
                    msg += ' '
                    
                } else {
                    specialChar = /[A-Z]/
                    if (specialChar.test(cipher[i].toUpperCase()) == false){
                        msg += cipher[i]
                    
                    }
                }
            }
        }
        document.write(msg)
    }

    if(cipherOption == 1 && key < 26){
        let cipher = prompt('Digite sua mensagem:')
        caesarCipher(1, key, cipher)
    } else if(cipherOption == 2 && key < 26){
        let cipher = prompt('Digite sua cifra:')
        caesarCipher(2, key, cipher)
    } else {
        alert('A opcao digitada ou a chave nao e valida')
    }

})()