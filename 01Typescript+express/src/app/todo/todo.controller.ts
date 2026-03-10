import type { Request, Response } from "express";
import {
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";
export class TodoController {
  private _db: Todo[];

  constructor() {
    this._db = [];
  }

  public handleGetaAllTodos(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async handleInsertTodo(req: Request, res: Response) {
    try {
      const unvalidated = req.body;
      const validatedResult =
        await todoValidationSchema.parseAsync(unvalidated);
      this._db.push(validatedResult);
      return res.json({ todo: validatedResult });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async handleDeleteTodo(req: Request, res: Response) {
    try {
      const id: string = req.body;
      const todos = this._db;
      const indextobeRemoved = todos.findIndex((todo) => todo.id === id);
      if (indextobeRemoved > -1) todos.splice(indextobeRemoved, 1);

      return res.json({ todos });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async handleGetTodoById(req: Request, res: Response) {
    try {
      // const id: string = req.body.id;
      const id = req.params.id;
      console.log(id);
      const todos = this._db;
      console.log(todos);
      const todo = todos.find((todo) => todo.id === id);
      return res.json({ todo });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
