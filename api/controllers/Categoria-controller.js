const db = require('../models')

module.exports = class Categoria {

    static async add(req,res){
        
        try {
            const bodyData = req.body
            const data = await db.categorias
                .create(bodyData)
            return res
                .status(202)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }

    static async getAll(req,res){
        
        try {
            const data = await db.categorias.findAll()
            return res
                .status(200)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }
    static async get(req,res){
        
        try {
            const { id } = req.params
            const data = await db.categorias
                .findAll({
                    where: { id } 
                })
            return res
                .status(200)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }

    static async updateData(req,res){
         
        try {
            const { id } = req.params
            const bodyData = req.body
            const data = await db.categorias
                .update(
                    bodyData,
                    {
                        where: { id } 
                    })
            return res
                .status(200)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }

    static async delete(req,res){
        
        try {
            const { id } = req.params
            const data = await db.categorias
                .destroy({
                    where: { id }
                })
            return res
                .status(200)
                .json(data)
        } catch (error) {
            return res
                .status(500)
                .json(error.message)
        }
    }
}

