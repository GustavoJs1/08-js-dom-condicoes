function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'DIA DIA.png'
        document.body.style.background = "#bfd6d9"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'TARDE TARDE.png'
        document.body.style.background = "#9eb5c5"
    } else {
        // BOA NOITE!
        img.src = 'NOITE NOITE.png'
        document.body.style.background = "#141f3d"
    }
}