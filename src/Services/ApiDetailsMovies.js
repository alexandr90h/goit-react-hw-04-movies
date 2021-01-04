export default function ApiDetailsMovies(id) {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
   return fetch(url).then(res => {
       if (res.ok) {
            return res.json()
       }
       return Promise.reject(new Error('This movie not found'))
    })

};
