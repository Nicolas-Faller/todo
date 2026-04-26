const isProduction = import.meta.env.PROD;

const prod = "https://server-dark-field-5123.fly.dev";
const dev = "http://localhost:5173/";

export const finalUrl = isProduction ? prod : dev