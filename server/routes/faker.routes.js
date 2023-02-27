import { Router } from "express";
import {getCompanyNew, getDual, getUserNew} from '../controllers/fakerPrueba.controllers.js'



const router = Router();

router.get('/api/user/new', getUserNew)
router.get('/api/companies/new', getCompanyNew )
router.get('/api/user/company', getDual )



export default router