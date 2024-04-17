module.exports = class {


    add(Entity, Repository) { 
        return Repository.adds(Entity)
    }
    update(id,Entity, Repository) { 
    console.log('u')

        return Repository.updatedata(id,Entity)
    }
    getlist(entity, Repository) { 
        return Repository.getlistdata(entity)
    }

    
}