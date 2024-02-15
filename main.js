const form = document.getElementById('form-contato')
const contato = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionalinha()
    atualizatabela ()
})

function adicionalinha () {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`)
    } else {
        contato.push(inputNomeContato.value)

        let linha = '<tr>'
        linha +=`<td>${inputNomeContato.value}</td>`
        linha +=`<td>${inputNumeroContato.value}</td>`
        linha +=`</tr>`
    
        linhas += linha
    }
}

function atualizatabela () { 
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}