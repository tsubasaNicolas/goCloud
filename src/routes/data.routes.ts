import {Router} from 'express'
import {getData} from './data.controller'

const router = Router()

router.get('/data', getData );

export default router