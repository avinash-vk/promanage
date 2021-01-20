const db = require("../../../db/config");

const users = db.collection("users");

const getUser = async (req,res) => {
    const { id } = req.params;
    const user = await users.doc(id).get();
    if (!user.exists){
        res.status(400);
        res.json({
            error: "No such user found"
        });
    }
    else {
        res.status(200);
        res.json({
            data: user.data()
        })
    }
}

const createUser = async (req,res) => {
    const { id, username, photoUrl } = req.body;
    if(!id) {
        res.status(400).json({
            error: "ID cannot be found"
        });
    }
    else {
        try {
            await users.doc(id).set({
                id,
                username,
                photoUrl
            });
            res.status(200).json({
                data:"Success"
            });
        }
        catch(err) {
            res.status(300).json({
                error: "Could not update to the database" + err.message
            });
        }
    }
}

module.exports = {
    getUser,
    createUser
}