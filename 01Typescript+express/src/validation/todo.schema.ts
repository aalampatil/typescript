import { z } from "zod";
export const todoValidationSchema = z.object({
  id: z.string().describe("id of the todo"),
  title: z.string().describe("title to the todo"),
  description: z.string().optional().describe("description to the todo"),
  isCompleted: z.boolean().default(false).describe("isCompleted?"),
});

//instead do this
export type Todo = z.infer<typeof todoValidationSchema>;

//this breaks the DRY principle of code -
// export interface ITODO {
//   id: string;
//   title: string;
//   description?: string;
//   isCompleted: string;
// }
