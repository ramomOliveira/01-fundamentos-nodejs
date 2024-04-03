//regex e uma expressão regular (é uma forma de encontrar texto especifico dentro de um texto maior)

export function buildRoutePath(path) {

  // pagar o nome do parâmetro
  const routeParametersRegex = /:([a-zA-Z]+)/g
  // ?<$1> sera o nome do parâmetro dentro do group
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  // "^" começa a partir do caractere inicial
  //  criando outro grupo com nome query, o "?" no final do grupo faz com que ele seja opcional
  // a barra invertida "\" serve para escapar o caractere "?" e o "." serve para pegar qualquer caractere, o "*" serve para pegar tudo que vier depois
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}