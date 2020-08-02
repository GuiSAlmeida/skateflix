import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAll = () => fetch(URL_CATEGORIES)
  .then((res) => res.json());

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then((res) => res.json());

export default {
  getAllWithVideos,
  getAll,
};
