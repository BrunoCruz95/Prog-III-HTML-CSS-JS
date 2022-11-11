var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/BrunoCruz95')
xhr.send(null)

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log('Requisição deu certo')
        console.log(JSON.parse(xhr.responseText))
        var body = document.querySelector('body')
        var text = JSON.parse(xhr.responseText)
        var h1 = document.createElement('h1')
        var filhoTextoElemento = document.createTextNode(text.login)
        h1.appendChild(filhoTextoElemento)
        body.appendChild(h1)
    }
}