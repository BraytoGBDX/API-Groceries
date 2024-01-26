import producDAO from "../dao/productsDao.js";

export const getAllProducts=(req,res)=>{
    producDAO.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.error(err))
};


