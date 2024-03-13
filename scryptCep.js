function mostraCep(){
const cep = document.getElementById("cep").value
const fetchURL = async (URL) => {
    const response = await fetch(URL)
    const json = await response.json()
    return json
}
(fetchURL(`https://viacep.com.br/ws/${cep}/json/`))
    .then((cep) => {
        const element = document.getElementById('resposta')
        element.innerHTML = (`CEP: ${cep.cep}<br>Rua: ${cep.logradouro}<br>Bairro: ${cep.bairro}<br>Cidade: ${cep.localidade}<br>Estado: ${cep.uf}`)
    })
}
    