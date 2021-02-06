import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import * as bodyParser from "body-parser";
import * as Path from "path";
import * as http from "http";

import { postRouter } from "./api/post/post.controller";
import { userRouter } from "./api/user/user.controller";
import { quoteRouter } from "./api/quote/quote.controller";
import { lekhRouter } from "./api/lekh/lekh.controller";
import { stockRouter } from "./api/currency/stock.controller";
import { castRouter } from "./api/broadcast/cast.controller";
import { authRouter } from "./api/auth/auth.controller";
 
import { errorHandler } from "./api/middleware/error-middleware";
// import { notFoundHandler } from "./middleware/notfound-middleware";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const port = process.env.PORT;
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

app.use(express.static(__dirname + 'public/index.html'));

const uri = 'mongodb://localhost:27017/news';
// mongoose.Promise = global.Promise;
const conn = process.env.dbPath;
mongoose.connect(uri, {useNewUrlParser: true }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("[Database] Ready to go... /")
  }
})

app.use('/uploads', express.static('uploads'));
app.use(express.static(Path.join(__dirname, 'public/index.html')));
app.use((req, res, next) => {
  res.sendFile(__dirname, '/dist');
});

app.use(errorHandler);
// app.use(notFoundHandler);

app.use("/post", postRouter);
app.use("/quote", quoteRouter);
app.use("/api/user", userRouter);
app.use("/new/broad-cast", castRouter);
app.use("/stock", stockRouter);
app.use("/api/lekh", lekhRouter);
app.use("/usr/signin", authRouter);

app.set('port', port);
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});

// export const io = socket(server);

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}




// import express, { Request, Response } from "express";

// const app = express();
// app.use(express.json());
// app.set("port", process.env.PORT || 3000);

// app.get("/", (req: Request, res: Response) => res.send("hi"));

// const server = app.listen(app.get("port"), () => {
//   console.log("App is running on http://localhost:%d", app.get("port"));
// });