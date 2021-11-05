const { response } = require("express")
const fetch = require('node-fetch')

const throwError = (res, error) => {
    return res.status(error.status || 500).json({
        status: error.status || 500,
        errors: error.errors
    })
}

module.exports = {
    getApi : async (req, res) => {

        try {
            let api = await fetch("https://rickandmortyapi.com/api")
            let response = await api.json()
            let result = {
                status: 200,
                meta: {
                    total: api.length,
                    link: "https://rickandmortyapi.com/api"
                },
                data: response
            }
            return res.status(200).json(result)
        } catch (error) {
            throwError(res, error)
        }

    },
    getAllEpisodes : async (req, res) => {
        try {
            let api = await fetch("https://rickandmortyapi.com/api/episode")
            let response = await api.json()
            let result = {
                status: 200,
                meta: {
                    total: api.length,
                    link: "https://rickandmortyapi.com/api/episode"
                },
                data: response.results
            }
            return res.status(200).json(result)
        } catch (error) {
            throwError(res, error)
        }
    },
    getAllCharacters : async (req, res) => {
        try {
            let api = await fetch("https://rickandmortyapi.com/api/character")
            let response = await api.json()
            let result = {
                status: 200,
                meta: {
                    total: api.length,
                    link: "https://rickandmortyapi.com/api/character"
                },
                data: response.results
            }
            return res.status(200).json(result)
            
        } catch (error) {
            throwError(res, error)
        }
    },
    getAllLocations : async (req, res) => {
        try {
            let api = await fetch("https://rickandmortyapi.com/api/location")
            let response = await api.json()
            let result = {
                status: 200,
                meta: {
                    total: api.length,
                    link: "https://rickandmortyapi.com/api/location"
                },
                data: response.results
            }
            return res.status(200).json(result)
            
        } catch (error) {
            throwError(res, error)
        }
    }

}