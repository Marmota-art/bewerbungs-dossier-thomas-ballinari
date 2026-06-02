import serverless from "serverless-http";
import app from "../../apiApp";

export const handler = serverless(app);
