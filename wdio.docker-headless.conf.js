import { config as sharedConfg } from './wdio.shared.conf.js'

exports.config = {
    ...sharedConfg,
    ...{
        services: ['docker'],
        capabilities: [{
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--window-size=1366,768',
                ]
            }
        }],
        dockerOptions: {
            image: process.env.SELENIUM,
            healthCheck: "http://localhost:4444",
            options: {
                p: ["4444:4444"],
                shmSize: "2g",
            },
        },
    }
}