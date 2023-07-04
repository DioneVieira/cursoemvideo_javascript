function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 13){
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = "#32a852"
        msg.innerHTML = `Agora são <strong>${hora}</strong> horas. <strong>GOOD MORNING</strong>!!!`
    } else if (hora >= 13 && hora <= 18) {
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = "#2c2c5c"
        msg.innerHTML = `Agora são <strong>${hora}</strong> horas. <strong>GOOD AFTERNOON</strong>!!!`
    } else {
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = "#282836"
        msg.innerHTML = `Agora são <strong>${hora}</strong> horas. <strong>GOOD EVENING or GOOD NIGHT</strong>!!!`
    }
}