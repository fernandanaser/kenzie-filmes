// Selecionando a lista (UL) do HTML
const listaFilme = document.querySelector(".listaFilme");


// FUNÇÃO QUE LISTA OS FILMES
function listarFilmes(colecaoFilmes) {

    // Limpar vitrine HTML
    listaFilme.innerHTML = "";

    // 2. Loop para encontrar os filmes
    // 3. Montar um template (li)
    // 4. Mostrar na tela

    // 1. Acessar os filmes
    colecaoFilmes.forEach(function (filme) {

        const template = criarTemplate(filme);

        // adicionando o filme de forma visual no html
        listaFilme.appendChild(template);
    })
}

listarFilmes(filmes);

// FUNÇÃO QUE CRIA O TEMPLATE (LI)
function criarTemplate(filme) {

    // CRIANDO TEMPLATE TIPO HTML
    const li = document.createElement("li");

    // ADICIONANDO ESTRUTURA HTML DENTRO DO (LI)
    li.innerHTML = `
    <figure>
        <img src="${filme.url}" alt="${filme.nome}">
    </figure>
    <h2>${filme.nome}</h2>
    `

    return li;

}

// FILTRAR FILME POR CATEGORIA
function filtrarFilme(filtroCategoria){

    const filmesFiltrados = filmes.filter(function(filme){
        if(filtroCategoria == filme.categoria){
            return filme;
        }
        
    })

    listarFilmes(filmesFiltrados);

}


// SELECIONANDO MENU
const secaoCategorias = document.querySelector(".secaoCategorias")
secaoCategorias.addEventListener("click", function(event){
    event.preventDefault();

    const categoriaSelecionada = event.target.text;

    if(categoriaSelecionada == "Mostrar todos"){
        listarFilmes(filmes);
    } else {
        filtrarFilme(categoriaSelecionada);
    }
} )