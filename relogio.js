//variavel publica para ser usada em mais de uma funcao
var repeticao;

//Array dos meses e dia da semana para aparecer por escrito
var dias_sem = new Array("domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado");
var nomes_meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");


//funcao 
function exibir()
    {
        repeticao = setInterval("repetir()",1000);
    }


//funcao para rodar o relogio
function repetir()
    {

        var hoje = new Date();
        var d = hoje.getDate();
        var m = hoje.getMonth();
        var a = hoje.getFullYear();
        var h = hoje.getHours();
        var mt = hoje.getMinutes();
        var s = hoje.getSeconds();
        var se = hoje.getDay();
        //a variável 'm' ainda não recebeu o zero à esquerda e nem '+1' para acertar o valor com a ref do mês que conhecemos 
        document.getElementById("nome_mes").value = nomes_meses[m];
        m++;
        //Colocando o 0 para os numeros sozinhos
        if (d < 10)
            d = "0" + dia;
        if (m < 10)
            m = "0" + m;
        if (h < 10)
            h = "0" + h;
        if (mt < 10)
            mt = "0" + mt;
        if (s < 10)
            s = "0" + s;
        
        document.getElementById("dia").value = d;
        document.getElementById("mes").value = m;
        document.getElementById("anos").value = a;
        document.getElementById("hora").value = h;
        document.getElementById("minu").value = mt;
        document.getElementById("segu").value = s;
        document.getElementById("sem").value = dias_sem[se];
        
    }


    //funcao para para o relogio
    function parar()
    {
        clearInterval(repeticao);
    }

