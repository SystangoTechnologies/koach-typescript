import { Sequelize } from 'sequelize'
import fs from 'fs'
import path from 'path'

export class DatabaseConfigurationManager extends Sequelize {
    db: {} = {}
    constructor(private modelDirPath: string, databaseName: string, user: string, password: string, options: {} = {}) {
        // calling base class constructor for providing database information to orm
        super(databaseName, user, password, options)
    }

    // loading the database models
    loadDatabaseModels(): {} {
        // establishing the database connection
        this.authenticate().then(() => {
            console.log('Connection has been established successfully.')
        }).catch(error => {
            console.log(`Unable to connect to the database : ${error}`)
        })

        fs.readdirSync(this.modelDirPath).filter((file: string) => {
            return (file.indexOf('.') !== 0) && (!['index.js', 'index.ts'].includes(file))
        }).forEach((file: string) => {
            let model = super.import(path.join(this.modelDirPath, file))
            this.db[model.name] = model
        })

        Object.keys(this.db).forEach((modelName: string) => {
            if ('associate' in this.db[modelName]) {
                this.db[modelName].associate(this.db)
            }
        })

        this.db['sequelize'] = this
        return this.db
    }
}