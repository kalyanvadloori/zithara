module.exports = (sequelize, type) => {
    return sequelize.define('customer', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: true
        },
        email: {
            type: type.STRING,
            allowNull: true
        },  
        total_order: {
            type: type.INTEGER,
            allowNull: true
        }, 
        created_at: {
            type: type.STRING,
            allowNull: true
        },
        updated_at: {
            type: type.STRING,
            allowNull: true
        }
    },{
        freezTableName: true,
        updatedAt: false,
        createdAt: false
    })
}