import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "Hung1991",
  database: "postgres",
  host: "database-1.cqmhdelgtyti.us-east-1.rds.amazonaws.com",
  aws_region: "us-east-1",
  aws_profile: "default",
  aws_media_bucket: "arn:aws:s3:::udacity-bucket-hungcm5",
  url: "http://localhost:8080",
  jwt: {
    secret: "hungcm5",
  },
  accessKeyId: "ASIAUG2BTKLAQ2ELWJFF",
  secretAccessKey: "sbksPvlOhteF8n6SWazY6otPBadWdO6AF+SWujI0"
};
