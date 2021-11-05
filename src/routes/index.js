var express = require('express');
var router = express.Router();
const {getApi, getAllEpisodes, getAllCharacters, getAllLocations} = require("../controllers/indexController")

/* GET home page. */
router.get('/', getApi);
router.get('/episodes', getAllEpisodes)
router.get('/characters', getAllCharacters)
router.get('/locations', getAllLocations)

module.exports = router;
