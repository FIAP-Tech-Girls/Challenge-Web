import {} from 'react'

function Home() {
    return (
      
      <>

      <section className='conteudo-home'>
        <img src="./src/assets/ImagensHome/imagemScrolldown.png" />
        <div className='conteudo-home-imagem'>
          <h2 className='titulo-home'>O futuro é: colocar tecnologia, inovação, inclusão e empatia</h2>
          <img src="./src/assets/ImagensHome/imagem1.png" />
        </div>
       
        <div className='conteudo-home-texto'>
          <h2>Um pouco sobre quem somos!</h2>
          <p className='texto-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros tellus, congue vitae ultricies quis, imperdiet a sapien. Nam elit dolor, laoreet vel dolor vitae, consequat porttitor lectus. Proin cursus imperdiet neque id lobortis. Nullam cursus ligula sit amet enim elementum sagittis eget sed tellus. Integer augue libero, molestie in condimentum non, rhoncus ac lorem. Integer sagittis luctus dui. Quisque non sem lectus. Proin molestie ultricies lorem ac efficitur. Vestibulum eu diam id nisi aliquam convallis a in metus. Vivamus imperdiet odio eget elit mattis, ut dictum lacus pharetra. Etiam ultricies condimentum.</p>
          <img src="./src/assets/ImagensHome/imagem2.png" />
        </div>
        <div className='conteudo-home-imagem-reconhecimentos'>
          <h2 className='titulo-reconhecimentos'>Nossos reconhecimentos</h2>
          <img src="./src/assets/ImagensHome/lampada-de-ideia.png"  />
          <img src="./src/assets/ImagensHome/lampada-de-ideia.png"  />
          <img src="./src/assets/ImagensHome/lampada-de-ideia.png"  />
        </div>
      </section>
      </>
    )
  }
  
  export default Home

  