import { config as sharedConfg } from "./shared.js";

exports.config = {
    ...sharedConfg,
    ...{
        services: ["docker"],
        dockerOptions: {
            image: process.env.SELENIUM,
            healthCheck: "http://localhost:4444",
            options: {
                p: ["4444:4444"],
                shmSize: "2g",
            },
        },
        capabilities: [
            {
                browserName: "chrome",
                acceptInsecureCerts: true,
                "goog:chromeOptions": {
                    args: [
                        "--no-sandbox",
                        "--headless",
                        "--disable-gpu",
                        "--window-size=1366,768",
                    ],
                },
            },
        ],
    },
};
