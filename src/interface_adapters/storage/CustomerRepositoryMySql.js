const sequelize = require('../../frameworks_drivers/database/sequelize')
const _ = require('lodash')
const Sequelize = require('sequelize')

module.exports = class {
    constructor() {
        this.db = sequelize
        this.model = this.db.model('customer')
    }

    
    async adds(Entity) {
        const err = []
        const {  name, email,total_order,created_at } = Entity
        if (_.isUndefined(name) || _.isNull(name)) err.push("name is required in field 'name'")
        if (err.length > 0) 
        return err
        else {
        return await this.model.create({ name, email,total_order,created_at  }, { raw: true })
        }
    }

    async updatedata(id,Entity) {
        const err = []
        console.log('storage')
        var { name,email, total_order,update_at } = Entity
        if (_.isUndefined(email) || _.isNull(email)) err.push("email is required in field 'email'")

        if (err.length > 0) return err
        else {
            return await this.model.update({ name,email, total_order,update_at }, { where: { id }, raw: true })
        }
    }
    async getlistdata(entity){
        const err = []
         const {name,email,total_order}=entity
        if (_.isUndefined(email) || _.isNull(email)) err.push("email is required in field 'email'")
        if (err.length > 0) return err
        else {
            return await sequelize.query(`Select * from zithara.customer where total_order >= '${total_order}' and name like '%${name}%' or email='${email}' `,{type:Sequelize.QueryTypes.SELECT})
        }
    }

}

