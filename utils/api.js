const BASE_API = 'https://yts.mx/api/v2/';

class Api {
  async getSugerencias(id) {
    const res = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const data = await res.json();

    //console.log(data.data.movies);
    return data.data.movies;
  }
  async getCategorias() {
    const res = await fetch(`${BASE_API}list_movies.json`);
    const data = await res.json();

    //console.log(data.data.movies);
    return data.data.movies;
  }
}

export default new Api();
