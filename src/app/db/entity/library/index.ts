import { DatabaseConfigurationManager } from '../../DatabaseConfigurationManager'
import configuration from '../../../../resources/config'

let databaseConfigurationManager: DatabaseConfigurationManager = new DatabaseConfigurationManager(__dirname, configuration.database.name, configuration.database.user, configuration.database.password, {
    host: configuration.database.host,
    port: configuration.database.port,
    dialect: configuration.database.dialect,
    pool: {
        max: 2,
        min: 1,
        idle: 10000,
        acquire: 40000
    }
})

let db: any = databaseConfigurationManager.loadDatabaseModels()
export default db