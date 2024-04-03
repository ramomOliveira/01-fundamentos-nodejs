import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";
import { extractQueryParams } from "./utils/extract-query-params.js";

// Stateful = salva na memória da aplicação
// Stateless = salva no banco de dados

// Query Parameters: URL Stateful ====> /users?name=Lucas&age=25
// Route Parameters: Identificação de recurso ====> /users/:id
// Request body: envio de informações de um formulário (HTTPs)

// Cabeçalhos (Requisição/resposta) => Metadados
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  });

  if (route) {
    const  routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups
    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
