import { ConfigurationManager } from './ConfigurationManager'

const configurationManager: ConfigurationManager = new ConfigurationManager(true)

let configurationDetails = configurationManager.getConfigurationDetails()

export default configurationDetails