fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
    return resposta.json();
}).then(corpo => {
    document.getElementById("ask").innerHTML = corpo.codein;
})