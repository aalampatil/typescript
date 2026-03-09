import { Router } from "express";
import { TodoController } from "./todo.controller.js";

export const todoRouter = Router();

const controller = new TodoController();

// todoRouter.route("/").get(controller.handleGetaAllTodos);
// this won't work as we created controller from new, so we do not have this here, it is detached now, we have to bind this so we can access this, bind return a fn which we can later call when required

todoRouter.route("/").get(controller.handleGetaAllTodos.bind(controller));
todoRouter.route("/add").post(controller.handleInsertTodo.bind(controller));
