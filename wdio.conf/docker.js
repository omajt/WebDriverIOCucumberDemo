import { config as sharedConfg } from "./shared.js";

exports.config = {
    ...sharedConfg,
    ...{
        services: ["docker"],
        dockerOptions: {
            image: process.env.SELENIUM,
            healthCheck: "http://localhost:4444",
            options: {
                p: ["4444:4444", "7900:7900"],
                shmSize: "2g",
            },
        },
        capabilities: [
            {
                browserName: "chrome",
                acceptInsecureCerts: true,
            },
        ],
    },
};
