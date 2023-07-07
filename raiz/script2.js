function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe macho.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem macho.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto macho.png')
            } else {
                img.setAttribute('src', 'idoso macho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe femea.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'jovem femea.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto femea.png')
            } else {
                img.setAttribute('src', 'idoso femea.png')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

    }

}