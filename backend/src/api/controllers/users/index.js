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

module.exports = {
    getUser
}