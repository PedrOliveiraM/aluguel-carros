import { Router } from 'express';
import { ListMarcaController } from './Controller/Marca/ListMarca';
import { CreateMarcaController } from './Controller/Marca/CreateMarca';
import { ListModeloController } from './Controller/Modelo/ListModelo';
import { CreateModeloController } from './Controller/Modelo/CreateModelo';



const router = Router()

router.get('/listmarca', new ListMarcaController().handle)
router.post('/createmarca', new CreateMarcaController().handle)


router.get('/listmodelo', new ListModeloController().handle)
router.post('/createmodelo', new CreateModeloController().handle)

export { router }