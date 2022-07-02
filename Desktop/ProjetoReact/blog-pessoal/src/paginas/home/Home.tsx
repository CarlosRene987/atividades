
import React from 'react';
import './Home.css';

function Home(){
    
    return (
        <>
            <h1 className="titulo">Bem Vindo</h1>
            <h2 className="titulo">Olá sinta-se a vontade para conhecer o nosso site de estilos musicais</h2>
            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
            <h2 className="temas">3 Estilos musicais</h2>
            <img src="https://static.todamateria.com.br/upload/sa/mb/sambacaribe-cke.jpg?auto_optimize=low" alt="Imagem Tela Inicial" className="img"/>
                    <h2 className="temas">MPB</h2>
                    <h3 className="temas"> Música popular brasileira resulta de um conjunto de manifestações culturais sob a influência da cultura indígena, africana, e europeia.</h3>
                    <h2 className="temas">Música da Clarissa Falcão</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rDAd302a2lc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <h2 className="temas">ROCK NACIONAL</h2>
                    <h3 className="temas"> Refere-se ao tratamento do estilo musical Rock dos Estados Unidos para a linguagem do Brasil deu-se em início principalmente nos anos de 1950</h3>
                    <h2 className="temas">Música da Pitty</h2>
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/His5BZcgxj8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                   <h2 className="temas">JAZZ</h2>
                    <h3 className="temas"> No Brasil é caracterizada principalmente pelas musicas instrumentais surgiu principalmente nos anos 60 com a revolução da Bossa Nova</h3>
                    <h2 className="temas">Música da Bossa Nova</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fT3W2LTZ9Ks" title="Ary Barroso,Chico Buarque e Celia..." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </>
    );
}

export default Home;


