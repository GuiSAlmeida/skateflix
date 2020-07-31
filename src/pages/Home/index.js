import React from 'react';
import Menu from '../../components/Menu';
import Data from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

function Home() {
  return (
    <Layout>
      <BannerMain
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"O que é front-end?"}
      />

      <Carousel
        ignoreFirstVideo
        category={Data.categorias[0]}
      />

      <Carousel
        category={Data.categorias[1]}
      />

      <Carousel
        category={Data.categorias[2]}
      />

      <Carousel
        category={Data.categorias[3]}
      />

      <Carousel
        category={Data.categorias[4]}
      />

      <Carousel
        category={Data.categorias[5]}
      />
    </Layout>
  );
}

export default Home;
