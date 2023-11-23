const chaveApi = "2da200bce18040ef9cc12840232311";
const btnBusca = document.querySelector(".btn-busca");

btnBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if(!cidade) return;

    const dados = await buscarDadosCidade(cidade);

    if(dados) dadosNaTela(dados, cidade);
});

async function buscarDadosCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if(resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function dadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const umidade = dados.current.humidity;
    const velocidadeVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura} °C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("umidade").textContent = `${umidade}%`;
    document.getElementById("velocidade-vento").textContent = `${velocidadeVento}Km/h`
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)
}