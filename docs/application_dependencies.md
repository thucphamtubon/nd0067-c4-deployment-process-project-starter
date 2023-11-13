### Application Dependencies
The app was developed on a Node.js environment with a Postgres database and Angular as frontend

### To run this project locally you must to the following steps in order
- Clone the repository on your own machine
  https://github.com/thucphamtubon/nd0067-c4-deployment-process-project-starter
- cd to `nd0067-c4-deployment-process-project-starter` folder
- Create `.env` file with nessary enviroment values
- Input follow step to start in dev mode
```bash
npm run api:install
npm run api:start
npm run frontend:install
npm run frontend:start
```
- Connect frontend url: `http://localhost:4200`
- Connect api url: `http://localhost:8100`

- when the front end is built and running then you cd to the backend folder
- setup your database connection
- setup environment variables
- run the server using the following command


### For RDS Postgres
```Host: database-1.cqmhdelgtyti.us-east-1.rds.amazonaws.com
Port: 5432
Database: postgres
Username: postgres
Password: Hung199
```

### For API Elastic Beanstalk Link
http://hungcm5-2-env.eba-xf9p6etm.us-east-1.elasticbeanstalk.com/

## For Frontend S3 Bucket Link
http://udacity-bucket-hungcm5.s3-website-us-east-1.amazonaws.com/
