const fetch = require('node-fetch')
const db = require('_helpers/db');
const Patch = db.Patch;

const  getPatch = async (req, res) => {
    console.log("get patch")
    const currentPatch = await Patch.findOne().sort({ field: 'asc', _id: -1 }).limit(1)
    res.json(currentPatch)
}

const updatePatch = async (req, res) => {
    console.log("update patch")
    res.send('updatePatch')
    let newPatch;
    await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    .then((res) => res.json())
    .then((json)=> {
        console.log({json})
        newPatch = json[0];
    })
    Patch.findOrCreate({patchNumber: newPatch}, (err, res) => {
        return res;
    })
}

module.exports = {
    getPatch,
    updatePatch,
}