import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

//create category
export const createCategoryController=async(req,res)=>{
    try {
        const {name}=req.body;
        if(!name)
        {
            return res.status(401).send({message:"Name is required"});
        }
        const existingCategory=await categoryModel.findOne({name});
        if(existingCategory)
        {
            return res.status(200).send({
                success:true,
                message:'Category already exists'
            })
        }
        const category=await new categoryModel({name,slug:slugify(name)}).save();
        res.status(200).send({
            success:true,
            message:"new category created",
            category
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

//update category

export const updateCategoryController=async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
        
    }
}