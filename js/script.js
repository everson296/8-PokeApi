const search = document.getElementById("pesquisar");
const card = document.getElementById("listaDePokemons");
const body = document.getElementById("body");
const url = "https://pokeapi.co/api/v2";
const pokemon = "pokemon";


async function getPoke(user){
    const cardResponse = await fetch(`${url}/${pokemon}/${user}`);
    const card = await cardResponse.json();

    return {card};
};


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


const loadPokemon = async() => {
    for(let i = 1; i <= 151; i++ ){
        const cardResponse = await fetch(`${url}/${pokemon}/${i}`);
        const card = await cardResponse.json();

        showcard(card);
    }
}

search.addEventListener("keyup", (e) =>{
    const user = e.target.value;

    if(user.length > 0){
        getPoke(user).then(res =>{
            card.innerHTML='';
            showcard(res.card);
            console.log(res.card);
        })
    }
})


loadPokemon();
