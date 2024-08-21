import { Config } from "jest";
import nextJest from "next/jest"

const createJestConfig = nextJest({
    dir: "./", //path to load next.config.mjs
})
const config: Config = {
    coverageProvider:"v8",
    testEnvironment: "jest-environment-jsdom",
}

export default createJestConfig(config)