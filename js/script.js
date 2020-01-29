(function() {

    const cipherOption = prompt('Deseja CRIPTOGRAFAR ou DESCRIPTOGRAFAR?')

    const caesarCipher = function (option, key, cipher) {
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const cipherVector = cipher.split(' ')
        const cipherLenght = Number(cipher.length - (cipherVector.length - 1))
        
        cipherVector = cipherVector.toUpperCase

        if(option == 1){
            
            for( let i=0; i<cipherLenght; i++){
                
            }
        } else [

        ]
    }

    if (cipherOption.toUpperCase == 'CRIPTOGRAFAR'){
        let key = Number(prompt('Digite o numero da chave:'))
        let cipher = prompt('Digite a mensagem:')
        caesarCipher(1, 2, 'alex alves')
    } else if (cipherOption.toUpperCase == 'DESCRIPTOGRAFAR'){
        let key = Number(prompt('digite o numero da key:'))
        let cipher = prompt('Digite a cifra:')

    } else {
        alert('A opçao desejada nao exite, digite CRIPTOGRAFAR ou DESCRIPTOGRAFAR')
    }

})()