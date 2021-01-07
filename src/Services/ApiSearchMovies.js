export default function ApiSearchMovies(keyWord) {
        const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${keyWord}`;
    return fetch(url).then(res => {
                if (res.ok) {
            return res.json()
        }
        return Promise.reject(new Error('Casts not found'))
    })
};
