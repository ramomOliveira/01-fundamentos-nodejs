//regex e uma expressão regular (é uma forma de encontrar texto especifico dentro de um texto maior)

export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routeParametersRegex)))

  // return new RegExp()
}