import express from "express";
import type { Application } from "express";
import { todoRouter } from "./todo/todo.routes.js";

export function createServerApplication(): Application {
  const app = express();

  app.use(express.json());

  app.use("/todos", todoRouter);

  // app.get("/", function (req, res) {
  //   return res.json({ message: "hello from expresss" });
  // });

  // app.get("/hello", function (req, res) {
  //   return res.json({ message: "hello" });
  // });

  return app;
}
