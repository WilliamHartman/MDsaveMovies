const axios = require ('axios');

module.exports = {
    autocomplete: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.params.st ? req.params.st : 'a '}&language=en-US&page=1&include_adult=false`).then((result) => {
            let movies = result.data.results.map((movie) => {
                return {label: movie.title, id: movie.id}
            })
            res.status(200).send(movies)
        })
    },

    getMovie: (req, res) => {
        console.log(req.params.id)
        axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`).then((result) => {
            res.status(200).send(result.data)
        })
    }
}