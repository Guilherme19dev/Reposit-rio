function buscarCep(){
    var cep= document.getElementById('cep').value;
    var url="https://viacep.com.br/ws/"+cep+"/json/";
fetch(url)
.then(response => response.json())
.then(data =>{
    if(data.erro){
document.getElementById('resultado').textContent ="Cep não encontrado";
    }
    else{
        document.getElementById('resultado').innerHTML = 
        "<b>Cidade:</b>" + data.cep +"<br>"
        +"<b>Logradouro:</b>" + data.logradouro +"<br>"
        +"<b>Bairro:</b>" + data.bairro +"<br>"
        +"<b>Cidade:</b>" + data.localidade +"<br>"
        +"<b>Estado:</b>" + data.uf +"<br>";
    }
    alert('Deu certo');
}).catch(error =>alert(error))
}