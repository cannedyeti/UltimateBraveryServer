const fetch = require('node-fetch')
const db = require('_helpers/db');
const Patch = db.Patch;

const LEAGUE_VERSION_API = 'https://ddragon.leagueoflegends.com/api/versions.json';

const  getPatch = async (req, res) => {
    const currentPatch = await Patch.findOne().sort({ field: 'asc', _id: -1 }).limit(1)
    res.json(currentPatch)
}


const updatePatch = async (req, res) => {
    let newPatch;
    await fetch(LEAGUE_VERSION_API)
    .then((res) => res.json())
    .then((json)=> {
        newPatch = json[0];
        Patch.findOrCreate({patchNumber: newPatch}, (err, res) => {
            return res;
        })
        res.json(newPatch);
    })
    .catch((err) => console.log({err}))
}

module.exports = {
    getPatch,
    updatePatch,
}