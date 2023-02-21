import express from 'express';
import {register,login,getme, updateres} from '../controller/userController.js';
import auth from '../middleware/auth.js';
import router from './booking.js';


const route=express.Router()

route.post('/register',register)
route.post('/login',login)
route.get('/getme',auth,getme)
route.put('/update',auth,updateres)

export default route;