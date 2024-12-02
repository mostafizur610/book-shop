import { Server } from 'http';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { log } from 'console';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

// const PORT = 5000;
// let server: Server;

// (async function main() {
//   // console.log(process.env.DATABASE_URL);

//   try {
//     const db = await mongoose.connect(config.port);
//     console.log('DB Connected Successfully');
//   } catch (error) {
//     console.log(error);
//   }
// })();

// async function bootstrap() {
//     server= app.listen(PORT, () => {
//         console.log(`Example app listening on port ${PORT}`)
//       });
// }

// bootstrap();
