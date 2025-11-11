import { Request, Response } from 'express';
import { ProviderService } from '../services/provider.service';

export class ProviderController {
  private service = new ProviderService();

  getAll = async (req: Request, res: Response) => {
    const providers = await this.service.getAll();
    res.json(providers);
  };

  getById = async (req: Request, res: Response) => {
    const provider = await this.service.getById(Number(req.params.id));
    res.json(provider);
  };

  create = async (req: Request, res: Response) => {
    const provider = await this.service.create(req.body);
    res.status(201).json(provider);
  };

  update = async (req: Request, res: Response) => {
    const provider = await this.service.update(Number(req.params.id), req.body);
    res.json(provider);
  };

  delete = async (req: Request, res: Response) => {
    await this.service.delete(Number(req.params.id));
    res.status(204).send();
  };
}