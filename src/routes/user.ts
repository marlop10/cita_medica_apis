import { UserController } from './../controller/UserController';
import { Router } from 'express';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from './../middlewares/role';

const router = Router();

//Get all users
router.get('/', [checkJwt, checkRole(['Administrador'])], UserController.getAll);

//Get one user
router.get('/:id', [checkJwt, checkRole(['Administrador'])], UserController.getById);

//Create new user
router.post('/', [checkJwt, checkRole(['Administrador'])], UserController.newUser);

//Edit user
router.patch('/:id', [checkJwt, checkRole(['Administrador'])], UserController.editUser);

//Get all users
router.delete('/:id', [checkJwt, checkRole(['Administrador'])], UserController.deleteUser);

export default router;

