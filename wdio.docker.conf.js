import { config as sharedConfg } from './wdio.shared.conf.js'

exports.config = {
    ...sharedConfg,
    ...{
        services: ['docker'],
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
        }],
        dockerOptions: {
            image: process.env.SELENIUM,
            healthCheck: "http://localhost:4444",
            options: {
                p: ["4444:4444", "7900:7900"],
                shmSize: "2g",
            },
        },
    }
}