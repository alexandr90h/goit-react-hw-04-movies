export default function ApiListMovies() {
    const key = 'fa66142a379ae8488ea37ebbe65d511c';
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
    return fetch(url).then(res => {
        if (res.ok) {
        return res.json()
        }
        return Promise.reject(new Error('Movies not found'))
})
};
