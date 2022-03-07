import { config as sharedConfg } from "./shared.js";

exports.config = {
    ...sharedConfg,
    ...{
        services: ["chromedriver"],
        capabilities: [
            {
                browserName: "chrome",
                acceptInsecureCerts: true,
            },
        ],
    },
};
