import { Router } from 'express';
import ProjectsController from '@controllers/projects.controller';
import { Routes } from '@interfaces/routes.interface';

class ProjectsRoute implements Routes {
  public path = '/projects';
  public router = Router();
  public ProjectsController = new ProjectsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.ProjectsController.projects);
  }
}

export default ProjectsRoute;