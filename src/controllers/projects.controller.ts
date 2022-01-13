import { NextFunction, Request, Response } from 'express';
import { readdirSync } from 'fs'
import { projects } from '../../static/projects';



class ProjectController {
  public projects = (req: Request, res: Response, next: NextFunction): void => {
    try {
      
      
      res.render('projects', { title: 'usbo | Projects', proj: projects});
    } catch (error) {
      next(error);
    }
  };
}

export default ProjectController;
