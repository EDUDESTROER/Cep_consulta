function consulta(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url : url,
        type:"GET",
        success: function(response) {
            console.log(response);
            document.getElementById("Tcep").innerHTML = response.cep;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("ibge").innerHTML = response.ibge;
            document.getElementById("siafi").innerHTML = response.siafi;
            document.getElementById("complemento").innerHTML = response.complemento;
        }
    })
}

