import { Company } from "../class/Company.js";
import { User } from "../class/user.js";


export const getUserNew = (req, res) => res.send(new User())

export const getCompanyNew = (req, res) => res.send(Company)

export const getDual =  (req, res) => res.send('User, Company')