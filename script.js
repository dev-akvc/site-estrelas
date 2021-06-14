const image = document.querySelector('img');

const limiteDePersonagens = 671;


geraNumeroAleatorio = () => {
  return Math.floor(Math.random() * limiteDePersonagens);
}
acessaPersonagem = async (incremento) => {
  const id = geraNumeroAleatorio();
  let response = await fetch(`https://rickandmortyapi.com/api/character/${id + incremento}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    return data;
  })

  return response;
}


imprime = async () => {

  let personagens = []
  for (let incremento = 1; incremento <= 4; incremento++) {
    await this.acessaPersonagem(incremento)
      .then(resultado => {
        personagens.push(resultado)
      })
  }

  for (let i = 0; i <= 3; i++) {
    let nomeDoSerumaninho = personagens[i].name
    let id = personagens[i].id
    console.log(id)

    document.getElementById(`nomePersonagens${i + 1}`).innerHTML = `${nomeDoSerumaninho}`
    document.getElementById(`personagens${i + 1}`).src = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
  }
}



{
  imprime()
}