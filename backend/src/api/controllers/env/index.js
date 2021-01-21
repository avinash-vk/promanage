const db = require("../../../db/config");
const admin = require("firebase-admin");
const projects = db.collection("projects");
const env = db.collection("env");

const addEnv = async (req,res) => {
    const { id } = req.params;
    let project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    else{
        //Checking if project doesn't have already stored variables
        let variable = await env.doc(id).get();
        if (!variable.exists){
            try{
                await env.doc(id).set({
                    id:id,
                    ...req.body
                })
                res.status(200);
                res.json({
                    data: "Successfully added Environment"
                })
            }
            catch(err){
                res.status(300).json({
                    error: `Could not update to the database! - ${err}`
                });
            }
        }
        else{
            //Need to append to existing list of variables for project
            const old = variable.data().variables;
            //console.log(old)
            //console.log(...req.body.variables)
            old.push(...req.body.variables);
            try{
                variable = await env.doc(id).set({
                    variables:old,
                },{merge:true});
                res.status(200);
                res.json({
                    data: "Successfully appended to Environment Variables"
                })
            }
            catch(err){
                res.status(300).json({
                    error: `Could not update to the database! - ${err}`
                });
            }
        }
    }
}

const getProjectEnv = async (req, res) => {
    const { id } = req.params;
    const project = await projects.doc(id).get()
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    else{
    const variable = await env.doc(id).get()
    if (!variable.exists){
        res.status(400);
        res.json({
            error: "Project has no stored variables"
        });
    }
    else {
        let data = variable.data();
        //console.log(data.variables)
        res.status(200);
        res.json({
            variables: data.variables
        })
    }
    }
}
const deleteEnv = async (req,res) => {
    const { id} = req.params;
    const variable = await env.doc(id).get();
    if (!variable.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    try{
        await env.doc(id).delete();
        res.status(200);
        res.json({
            data: "Successfully Deleted Environment Variables"
        })
    }
    catch(err){
        res.status(300).json({
            error: "Could not update to the database! " + err.message
        });
    }
    /*
    try{
        var docRef = projects.doc(id);
        var removeKey = docRef.update(
            {
               env: admin.firestore.FieldValue.delete()
            }
        );
        res.status(200);
        res.json({
            data: "Successfully removed Enviroment"
        })
    }
    catch(err){
        res.status(300).json({
            error: "Could not update to the database! " + err.message
        });
    }
    */
}

module.exports = {
    addEnv,
    getProjectEnv,
    deleteEnv
}