import producDAO from "../dao/productsDao.js";

const C = console.log.bind(console.log)


export const getAllProducts=(req,res)=>{
    producDAO.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.error(err))
};

export const getOneProduct=(req,res)=>{
    producDAO.getOne(req.params.barcode)
    .then(result=>{ 
        if(result!=null){
        res.json(result)
        }else{
            res.json({
                status:"Product not found "
            })
        }
    })
    .catch(err=>res.json({
        status:"servidor no disponible"
    }))
}

