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

const statusPokemon = () => {
    card=`
    <div id="cardStatusPokemon">
    <div id="containerPokePerfil">
        <div id="imgPokemon">
            <div id="pokeImg"></div>
            <div id="estiloImg">
                <div id="estiloEscolha"></div>
                <div id="estiloEscolha"></div>
                <div id="estiloEscolha"></div>
                <div id="estiloEscolha"></div>
            </div>
        </div>
        <div id="idPokemon">#001</div>
        <div id="nomePokemon">bulbasaur</div>
    </div>
    
    <div id="containerPokeStatus">
        <div id="containerTipo">
            
            <div id="tipo2">poison</div>
            <div id="tipo1">grass</div>
            <div id="fechar">X</div>
        </div>
        
        <div id="containerStatus">
            <div id="containerStatusBar">
                <div class="statusName">HP</div>
                <div class="statusNumber"></div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
            <div id="containerStatusBar">
                <div class="statusName">Attack</div>
                <div class="statusNumber"></div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
            <div id="containerStatusBar">
                <div class="statusName">Defense</div>
                <div class="statusNumber">260</div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
            <div id="containerStatusBar">
                <div class="statusName">Sp. Atk</div>
                <div class="statusNumber"></div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
            <div id="containerStatusBar">
                <div class="statusName">Sp. Def</div>
                <div class="statusNumber">15</div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
            <div id="containerStatusBar">
                <div class="statusName">Speed</div>
                <div class="statusNumber">60</div>
                <div class="statusBar">
                    <div></div>
                </div>
            </div>
            
        </div>
        
    </div>
</div>
    `;
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