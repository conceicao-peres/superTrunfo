var carta1 = {
    imagem: "https://pbs.twimg.com/profile_images/1152020032228081665/DFbKrBIC_400x400.jpg",
    nome: "Mestre Dos Magos",
    atributos: {
        ataque: 5,
        defesa: 8,
        magia: 10
    }
}

var carta2 = {
    imagem: "https://1.bp.blogspot.com/-5unuJYKhTRE/UlqhGWzqA8I/AAAAAAAAA7M/mh9LxJwb_d0/w1200-h630-p-nu/26+-+Vingador.jpg",
    nome: "Vingador",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 6
    }
}

var carta3 = {
    imagem: "https://http2.mlstatic.com/D_NQ_NP_728405-MLB25022756171_082016-O.jpg",
    nome: "Hank – O Guarda",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 4
    }
}

var carta4 = {
    imagem: "https://i.ytimg.com/vi/Uu_n05PgWgk/hqdefault.jpg",
    nome: "Eric – O Cavaleiro",
    atributos: {
        ataque: 5,
        defesa: 10,
        magia: 4
    }
}

var carta5 = {
    imagem:"https://imgsapp2.uai.com.br/app/noticia_133890394703/2013/09/17/146491/20130917140038779036a.jpg",
    nome: "Diana – A Acrobata",
    atributos: {
        ataque: 6,
        defesa: 8,
        magia: 4
    }
}

var carta6 = {
    imagem: "https://4.bp.blogspot.com/-lkn_XEHkA80/V-phTC9yD5I/AAAAAAAAHXI/0SKj_LZ0uPAyDncQM3PTKuvjo1su6SPCACLcB/s1600/sheila.jpg",
    nome: "Sheila – A Ladina",
    atributos: {
        ataque: 4,
        defesa: 5,
        magia: 8
    }
}
var carta7 = {
    imagem: "https://nishiweb.com.br/animecomics/images/upload/403.jpg",
    nome: "Presto – O mago",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 9
    }
}
var carta8 = {
    imagem: "https://nishiweb.com.br/animecomics/images/upload/400.jpg",
    nome: "Bobby – O Bárbaro",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 4
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
var cartaJogador
var cartaMaquina
var sortear = document.querySelector("#btnSortear")
var botaoJogar = document.querySelector("#btnJogar")
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 8);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }


sortear.addEventListener("click", sortearCarta)
botaoJogar.addEventListener("click", jogar)



