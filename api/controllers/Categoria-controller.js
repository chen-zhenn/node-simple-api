const db = require('../models')

module.exports = class Categoria {
    static async get(req,res){
        const data = await db.categorias.findAll()

        try {
            data
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

