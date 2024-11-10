/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        AUTH_SECRET: string;
        CLIENT_URL: string;
        POCKETBASE_URL: string;
        PAY_URL: string;
        CLIENT_KEY: string;
        PRIVATE_KEY: string;
    }
}
