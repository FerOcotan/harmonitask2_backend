import { Router } from "express";
import { body,param} from "express-validator";
import { ProjectController } from "../controllers/ProjectController";
import { handleInputErrors } from "../middleware/validation";

const router = Router()


router.post("/", 

  body("projectName").notEmpty().withMessage("projectName is required"),
  body("clientName").notEmpty().withMessage("clientName is required"),
  body("description").notEmpty().withMessage("description is required"),
  handleInputErrors,

  
  ProjectController.createProject)
router.get("/", ProjectController.getAllProjects)




router.get("/:id",
  param("id").isMongoId().withMessage("id is not valid"),
  handleInputErrors,
  ProjectController.getProyectById)

  router.put("/:id",
    body("projectName").notEmpty().withMessage("projectName is required"),
    body("clientName").notEmpty().withMessage("clientName is required"),
    body("description").notEmpty().withMessage("description is required"),
    handleInputErrors,
  
    param("id").isMongoId().withMessage("id is not valid"),
    handleInputErrors,
    ProjectController.updateProject)



    router.delete("/:id",
      param("id").isMongoId().withMessage("id is not valid"),
      handleInputErrors,
      ProjectController.deleteProject)
  

export default router

