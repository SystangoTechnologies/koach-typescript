import winston from 'winston'
import { LogManager } from './LogManager'

let logManager: LogManager = new LogManager('log', 'YYYY-MM-DD', process.env.NODE_ENV)

let logger: winston.Logger = logManager.getLogger()

export default logger