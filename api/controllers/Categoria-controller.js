const db = require('../models')

module.exports = class Categoria {
    static async get(req,res){
        
        try {
            const data = await db.categorias.findAll()
            return res
                .status(202)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }
}

