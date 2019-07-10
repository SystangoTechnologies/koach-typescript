import winston from 'winston'
import fs from 'fs'

export class LogManager {
    private logger: winston.Logger
    constructor(private logDir: string, private datePattern: string, private env: string) {
        if (!fs.existsSync(this.logDir)) {
            fs.mkdirSync(this.logDir)
        }
        this.logger = winston.createLogger({
            transports: [
                new (winston.transports.Console)({
                    level: 'info'
                }),
                new (require('winston-daily-rotate-file'))({
                    filename: `${this.logDir}/logs`,
                    timestamp: this.tsFormat(),
                    datePattern: this.datePattern,
                    prepend: true,
                    level: this.env === 'development' ? 'verbose' : 'info',
                    maxFiles: '30d',
                    zippedArchive: true
                })
            ]
        })
    }

    tsFormat(): string {
        return (new Date()).toLocaleDateString()
    }

    getLogger(): winston.Logger {
        return this.logger
    }
}