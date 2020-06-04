<h1 align="center"> Consumo da PokéAPI </h1>

## projeto de api, solicitado por Fernando Leonid - SENAI JANDIRA.

## PROPOSTA:

* pegar a API escolhida pelo professor e consumila em um site.

## BUGS:

1. Quando o site abre se o usuario digitar na barra de pesquisa, a pesquisa é feita porém os cards continuam carregando de onde pararam.

2. Quando o usuario digita um pokemon/id e despois apaga o site não volta a ser o que era.

3. Os tipos(types) dos pokemons devem ser tratados. Entres os pokémon tem uns que contem somente um tipo e outros que contem dois, quando coloco para que apareca os dois tipos aqueles que tem dois tipo aparecem e os que contem somente um tipo não aparece.

###### solução para o item 3: criar uma div para para cada tipo, assim contendo ao todo duas divs pois este será o maximo de tipo que um pokémon poderá ter.

<h1 align="center"> CRITÉRIOS DE APROVAÇÂO: </h1>

CRITÈRIOS | ATINGIU?
----------|----------
Foi consumido a API como especificado? | SIM
Foi utilizado funções puras quando possível? | SIM
As funções foram criadas seguindo a boa prática de responsabilidade única? | SIM
Existe animação entre o item e a descrição? | SIM
A interface web funcionar em dispositivos diferentes? | SIM
O usuário tem alguma opção de filtro para a API? | SIM
As cores e formatos tem coerência com a API consumida? | SIM
Analisou a documentação da API? | SIM
Criou o documento organizado e objetivo? | SIM
Especificou no documento possíveis problemas e suas soluções? | SIM
O documento tem um passo a passo sobre o consumo da API? | SIM
O documento segue algum padrão? | SIM
Foi utilizado no documento o markdown? | SIM
Foi criado um novo repositório no github para o projeto? | SIM
Demostrou cooperação entre os colegas durante a resolução da SAS? | SIM

<h1 align="center"> PASSO A PASSO DE COMO COMEÇAR NA API </h1>

1. resgatar e transformar o conteudo a API em JSON;

  const search = document.getElementById("pesquisar");
  const card = document.getElementById("listaDePokemons");
  const body = document.getElementById("body");
  const url = "https://pokeapi.co/api/v2";
  const pokemon = "pokemon";

2. criar uma função para receber a url e retornar um card;

  async function getPoke(user){
      const cardResponse = await fetch(`${url}/${pokemon}/${user}`);
      const card = await cardResponse.json();
      return {card};
  };
  
3. criar uma função para neste caso exibir um card com as informações do pokémon que o usuario quiser.
  
    const showcard = (user) =>{
      card.innerHTML+=`
          <ul class="containerPokemon">
              <img class="imagem" title="imagem de ${user.name}" src="${user.sprites.front_default}">
              <li class="id">#${user.id}</li>
              <li class="nome">${user.name}</li>
              <li class="tipo">${user.types[0].type.name}</li>
          </ul>
      `;
    }
    
<h1 align="center"> FIM </h1>

<p align="center">
  <img align="center" width="360" height="222" src="https://github.com/everson296/8-PokeApi/blob/master/pikachu.gif">
</p>
