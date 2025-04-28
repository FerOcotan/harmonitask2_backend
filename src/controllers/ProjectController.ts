import { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController { 
    
    

    static async createProject(req:Request, res:Response) {

        const project = new Project(req.body)

        try {
            await project.save()
            res.send("Project created successfully")
            
        } catch (error) {
            console.log(error)
        }

 
 
     }


    static async getAllProjects(req:Request, res:Response) {

        try {
            
            const projects = await Project.find({

            })
            res.json(projects)




        } catch (error) {
            console.log(error)
            
        }
    }


    static async getProyectById(req:Request, res:Response) {


        const { id } = req.params


        try {
            
            const project = await (await Project.findById(id)).populate('tasks')

            if (!project) {
                const error = new Error("Project not found")
            }

            res.json(project)




        } catch (error) {
            console.log(error)
            
        }
    }


    static async updateProject(req:Request, res:Response) {


        const { id } = req.params


        try {
            
            const project = await Project.findByIdAndUpdate(id, req.body, )
       
            await project.save()
            res.send("Project updated successfully")

            if (!project) {
                const error = new Error("Project not found")
            }


        } catch (error) {
            console.log(error)
            
        }
    }


    static async deleteProject(req:Request, res:Response) {


        const { id } = req.params


        try {
            
            const project = await Project.findById(id)

            await project.deleteOne()
            res.send("Project deleted successfully")
            if (!project) {
                const error = new Error("Project not found")
            }


        } catch (error) {
            console.log(error)
            
        }
    }
 


}