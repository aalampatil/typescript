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
}
