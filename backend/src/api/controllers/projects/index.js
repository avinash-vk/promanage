const db = require("../../../db/config");

const projects = db.collection("projects");
const users = db.collection("users");

const getProject = async (req,res) => {
    const { id } = req.params;
    const project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    else {
        res.status(200);
        res.json({
            data: project.data()
        })
    }
}

const createProject = async (req,res) => {
    const { title } = req.body;
    if(!title) {
        res.status(400).json({
            error: "ID cannot be found"
        });
    }
    else {
        try {
            let docRef = await projects.doc().get();
            await projects.doc(docRef.id).set({
                id: docRef.id,
                ...req.body
            })
            res.status(200).json({
                data:{
                    ...(await projects.doc(docRef.id).get()).data()
                }
            });
        }
        catch(err) {
            res.status(300).json({
                error: "Could not update to the database! " + err.message
            });
        }
    }
}

const getProjects = async (req, res) => {
    const { id } = req.params;
    const user = await users.doc(id).get();
    if (!user.exists){
        res.status(400);
        res.json({
            error: "No such user found"
        });
    }
    try {
        let docs = await projects.get();
        let output = [];
        docs.forEach( doc => {
            let data = doc.data();
            if (data.collaborators && data.collaborators[id]){
                output.push(data);
            }
        })
        res.json({
            data:{
                projects: output
            }
        })
    }
    catch(err) {
        res.status(300).json({
            error: "Could not update to the database! " + err.message
        });
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    let project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such user found"
        });
    }
    try{
        project = await projects.doc(id).set({
            ...req.body
        },{merge:true});
        res.status(200);
        res.json({
            data: "Success"
        })
    }
    catch(err){
        res.status(300).json({
            error: `Could not update to the database! - ${err}`
        });
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    try{
        await projects.doc(id).delete();
        res.status(200);
        res.json({
            data: "Success"
        })
    }
    catch(err){
        res.status(300).json({
            error: "Could not update to the database! " + err.message
        });
    }
}

const addEnv = async (req,res) => {
    const { id } = req.params;
    let project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    try{
        project = await projects.doc(id).set({
            ...req.body
        },{merge:true});
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

const getProjectEnv = async (req, res) => {
    const { id } = req.params;
    const project = await projects.doc(id).get();
    if (!project.exists){
        res.status(400);
        res.json({
            error: "No such project found"
        });
    }
    else {
        let data = project.data();
        res.status(200);
        res.json({
            env: data.env
        })
    }
}

module.exports = {
    getProject, 
    getProjects, 
    createProject, 
    updateProject, 
    deleteProject,
    addEnv,
    getProjectEnv
}