import { Request, Response } from 'express';
import { DemandService } from '../services/demand.service';
import { createDemandSchema } from '../schemas/demand.schema';

const demandService = new DemandService();

export const createDemand = async (req: Request, res: Response, next: Function) => {
  try {
    const validated = createDemandSchema.parse(req.body);
    const demand = await demandService.create(validated);
    res.status(201).json(demand);
  } catch (error) {
    next(error);
  }
};

export class DemandController {
  private service = new DemandService();

  getAll = async (req: Request, res: Response) => {
    const demands = await this.service.getAll();
    res.json(demands);
  };

  getById = async (req: Request, res: Response) => {
    const demand = await this.service.getById(Number(req.params.id));
    res.json(demand);
  };

  create = async (req: Request, res: Response) => {
    const demand = await this.service.create(req.body);
    res.status(201).json(demand);
  };

  update = async (req: Request, res: Response) => {
    const demand = await this.service.update(Number(req.params.id), req.body);
    res.json(demand);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(Number(req.params.id));
    res.status(204).send();
  };
}