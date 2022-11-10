const db = require('../models')

module.exports = class Endereco {

    static async add(req,res){
        
        try {
            const bodyData = req.body
            const data = await db.enderecos
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
            const data = await db.enderecos.findAll()
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
            const data = await db.enderecos
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
            const data = await db.enderecos
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
            const data = await db.enderecos
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

