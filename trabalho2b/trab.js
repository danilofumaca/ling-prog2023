async function api1() {
    let numero = document.getElementById("numero").value
        if (numero < 1 || numero > 10){
            alert("Usuário invalido.. Tente Novamente")
            numero = document.getElementById("numero").value
        }
    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users?id=${numero}`)
        let dados = await
            resposta.json()
    document.getElementById("name").value = dados[0].name
    document.getElementById("username").value = dados[0].username
    document.getElementById("email").value = dados[0].email
    document.getElementById("zipcode").value = dados[0].address.zipcode
    document.getElementById("adress").value = dados[0].address.street
    document.getElementById("suite").value = dados[0].address.suite
    document.getElementById("city").value = dados[0].address.city
    document.getElementById("phone").value = dados[0].phone
    document.getElementById("website").value = dados[0].website
    document.getElementById("company").value = dados[0].company.name
    
}
