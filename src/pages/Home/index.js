import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';
import categoryRepository from '../../repositories/categories';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout paddingAll={0}>
      {data.length === 0 && (<div>Loading...</div>)}

      {data.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={data[0].videos[0].titulo}
                url={data[0].videos[0].url}
                videoDescription="O que é front-end?"
              />

              <Carousel
                ignoreFirstVideo
                category={data[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
      ;

    </Layout>
  );
}

export default Home;
