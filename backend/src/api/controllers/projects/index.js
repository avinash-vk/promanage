const db = require("../../../db/config");

const projects = db.collection("projects");

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

const getProjects = (req, res) => {
    res.send("Underdev")
}

const updateProject = (req, res) => {
    res.send("Underdev")
}

const deleteProject = (req, res) => {
    res.send("Underdev")
}

module.exports = {
    getProject, 
    getProjects, 
    createProject, 
    updateProject, 
    deleteProject
}