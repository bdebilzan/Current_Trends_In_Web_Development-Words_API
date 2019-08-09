// Export method for API search
// Export method for API fetch

const 
    config = require('./config')
    wordsapp = require('../words-app/app')

var unirest = require('unirest');

const _fetch = command => {
    return unirest.get(`${config.url}/${command}`)
        .header("X-RapidAPI-Key", `${config.api_key}`)
        .then(result => result.body)
        .catch(error => error.result.text)
}

//search
exports.search = (words1) => {
        return _fetch(`${words1}/definitions`) 
}
