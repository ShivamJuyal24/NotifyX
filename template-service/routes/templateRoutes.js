import express from 'express';
import Template from '../models/template.js';

const router = express.Router();

// Create a new template
router.post("/", async (req, res) => {
  try {
    const { name, subject, body, channel } = req.body;
    const template = new Template({ name, subject, body, channel });
    await template.save();
    res.status(201).json({ message: "Template created successfully", template });
  } catch (error) {
    console.error("Error creating template:", error);  // <--- log full error
    res.status(500).json({ message: "Error creating template", error: error.message });
  }
});


//get all templates
router.get("/", async(req, res)=>{
    try{
        const templates = await Template.find();
        res.status(200).json(templates);
    }catch(error){
        res.status(500).json({message:"Error fetching template", error});
    }
});

//get template by id 
router.get("/:id", async ( req, res)=>{
    try{
        const template = await Template.findById(req.params.id);
        if(!template){
            return res.status(404).json({message:"Template not found"});
        }
        res.status(200).json(template);
    }catch(error){
        res.status(500).json({message:"Error fetching template by ID", error});
    }
})

//update template by id
router.put("/:id", async ( req, res)=>{
    try{
        const updated = await Template.findByIdAndUpdate(req.params.id,req.body,
            {new:true}
        );
        if(!updated){
            return res.status(404).json({message:"Template not found"});
        }
        res.status(200).json(updated);
    }catch(error){
        res.status(500).json({message:"Error updating template", error});
    }
});

// delete template by id
router.delete("/:id", async ( req, res)=>{
    try{
        const deleted = await Template.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({message:"Template not found"});
        }
        res.status(200).json(deleted);
    }catch(error){
        res.status(500).json({message:"Error deleting template", error});
    }
});

export default router;