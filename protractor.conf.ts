import {Config} from "protractor";

export let config: Config = {
    framework: "jasmine",
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1280,1024"
            ]
        }
    },
    specs: ["spec.js"],
};
