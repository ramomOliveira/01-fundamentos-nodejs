//regex e uma expressão regular (é uma forma de encontrar texto especifico dentro de um texto maior)

export function buildRoutePath(path) {

  // pagar o nome do parâmetro
  const routeParametersRegex = /:([a-zA-Z]+)/g
  // ?<$1> sera o nome do parâmetro dentro do group
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  // "^" começa a partir do caractere inicial
  const pathRegex = new RegExp(`^${pathWithParams}`)

  return pathRegex
}