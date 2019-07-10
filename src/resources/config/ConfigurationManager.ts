export class ConfigurationManager {
    private configurationDetails: any
    constructor(isReadFromEnv: boolean = false) {
        if (isReadFromEnv) {
            require('dotenv').config()
        }
        let env: string = process.env.NODE_ENV || 'development'
        this.configurationDetails = Object.assign({}, require(`./env.${env}`).default, require('./env.common').default)
    }

    getConfigurationDetails(): any {
        return this.configurationDetails
    }
}