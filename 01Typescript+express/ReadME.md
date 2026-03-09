```JS
npm init -y
npm i -D typescript
tsc --init
npm i tsc-watch -D
tsc -p .
npm i @types/packagename -D
npm i @types/node -D
npm i @types/express -D
"dev": "tsc-watch --onSuccess \" node dist/index.js \"" //watch the code then compile and run latest code on success

//zod is a runtime validation environment
```

---

```JS
Zod run time flow
// z var import kiya humne zod se
// us z se hum ek object define kiya, jise hum envSchema bol dete hai
// ab ek function bnaynge usme env variable pass karenge, jo hume safely parse env return karega
// function ke andar (env: NodeJS.ProcessEnv), or envSchema jo humne z se define kiya tha us ke base pe safeParse karenge
// safeParse us env var ko schema se match karta hai ki hamari need ke according hai yah nahi
// if safeParse nahi hua, then we throw a Error
// safeParse return 3 things - data/error/success
// then jo safeParse ka result aayga, us result mai se data return kar denege
// then we store the data in var, here we called it env,
// now we can access variable using, env.variableName
// now the env stores all the environment var that were defined, if something new comes it will creash the environment, because the new variable doesn't exist in the currrent env

```

---

```JS
// 2 ways to write clean code
MVC -
// writing all models in a model dir, controllers in a controllers dir, routes in routes dir
// ex -
// routes/auth.routes.ts
// schema/auth.schema.ts
// controller/auth.controller.ts

// debugging becomes a issue , you have to jump from one file to another file.

Club Structure-
// club one functionality, instead of mvc structure
// make one dir for one service
// ex - Auth/auth.routes.ts
//      Auth/auth.schema.ts
//      Auth/auth.controller.ts


// you do not have to hop bw dir and files to debug,
```

---

```JS
2 ways to write Controller
function based controller = function () {
// ✅ Advantages
// Simple and easy to read
// Less boilerplate
// Works well for small-moderate APIs
// can also work with scalable no issue,maintainance become issue at some point
// Functional programming style

// ❌ Disadvantages
// Harder to organize when project grows
// Shared logic between functions becomes messy
}

class based Controller {
// ✅ Advantages
// Better organization for large projects
// Supports DEPENDENCY INJECTION
// Easy to group related methods
// OOP style

// ❌ Disadvantages
// More boilerplate
// Need to manage this context sometimes
}
```
