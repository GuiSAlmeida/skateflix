import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (videoData) => {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoData),
  })
    .then((res) => res.json());
};

export default {
  create,
};
