const db = require('../models')

module.exports = class Produto {

    static async add(req,res){
        
        try {
            const bodyData = req.body
            const data = await db.produtos
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
            const data = await db.produtos.findAll()
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
            const data = await db.produtos
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
            const data = await db.produtos
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
            const data = await db.produtos
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

