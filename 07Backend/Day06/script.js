const express = require("express");
const app = express();

app.use("/service", (req, res) => {
    res.send([
        {
            "squadName": "Super hero squad",
            "homeTown": "Metro City",
            "formed": 2016,
            "secretBase": "Super tower",
            "active": true,
            "members": [
                {
                    "name": "Molecule Man",
                    "age": 29,
                    "secretIdentity": "Dan Jukes",
                    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
                },
                {
                    "name": "Madame Uppercut",
                    "age": 39,
                    "secretIdentity": "Jane Wilson",
                    "powers": [
                        "Million tonne punch",
                        "Damage resistance",
                        "Superhuman reflexes"
                    ]
                },
                {
                    "name": "Eternal Flame",
                    "age": 1000000,
                    "secretIdentity": "Unknown",
                    "powers": [
                        "Immortality",
                        "Heat Immunity",
                        "Inferno",
                        "Teleportation",
                        "Interdimensional travel"
                    ]
                }
            ]
        }
    ])
})

app.use("/", (req, res) => {
    res.send({ "hi": "hello", "hello": "hi", "by": "by" })
})

app.listen(3000, () => {

})
