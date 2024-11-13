import { Router } from 'express';
import { CreateMarcaController } from './Controller/Marca/CreateMarca';
import { ListMarcaController } from './Controller/Marca/ListMarca';
import { CreateModeloController } from './Controller/Modelo/CreateModelo';
import { ListModeloController } from './Controller/Modelo/ListModelo';

const router = Router();

router.get('/listmarca', new ListMarcaController().handle);
router.post('/createmarca', new CreateMarcaController().handle);

router.get('/listmodelo', new ListModeloController().handle);
router.post('/createmodelo', new CreateModeloController().handle);

export { router };
