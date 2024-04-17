module.exports = class{
    constructor(repository){
        this.repository = repository
    }

    adds(Entity){
        return this.repository.adds(Entity)
    }
    updatedata(id,Entity){

        return this.repository.updatedata(id,Entity)
    }
    getlistdata(entity){
        return this.repository.getlistdata(entity)
    }

}