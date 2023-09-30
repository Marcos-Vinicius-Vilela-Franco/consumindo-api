// script.js
 // Variável com o valor inicial
 let valor = 0;
 let valorDolar = 0;
 let valorConversao=0
$(document).ready(function() {
    function fetchExchangeRate() {
        $.ajax({
            url: 'https://economia.awesomeapi.com.br/last/USD-BRL',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                console.log(data.USDBRL.ask)
                const rate = Number(data.USDBRL.ask);
                valorDolar = rate.toFixed(2);
                $('#cotation').text(rate.toFixed(2));
                $("#conversao").text(valorConversao.toFixed(2));
            },
            error: function() {
                $('#cotation').text('Erro ao buscar a cotação');
            }
        });
        
    }
    $('#valor').text(valor);
    

    // Atualize a cotação a cada 30 segundos (ou como desejar)
    fetchExchangeRate();
    setInterval(fetchExchangeRate, 30000);
});

function decrementar(){
    if(valor==1){
        $("#valor").text(valor)
    }else{
    valor--
    $("#valor").text(valor)
    valorConversao=parseFloat(valorConversao)-parseFloat(valorDolar)
    $("#conversao").text(valorConversao.toFixed(2));
    }

}
$('#derementButton').click(decrementar)


function somar(){
     valor++;
    $("#valor").text(valor)
    valorConversao=parseFloat(valorConversao)+parseFloat(valorDolar);
    $("#conversao").text(valorConversao.toFixed(2));
}
$('#incrementButton').click(somar);
