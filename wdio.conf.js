import { config as sharedConfg } from './wdio.shared.conf.js'

exports.config = {
    ...sharedConfg,
    ...{
        services: ['chromedriver'],
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
        }]
    }
}