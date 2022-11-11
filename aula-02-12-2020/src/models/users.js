const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
    static associate(models){
        this.hasMany(models.Endereco, {
            foreignKey: 'user_id',
            as: 'enderecos'
        })
    }
}

module.exports = User;