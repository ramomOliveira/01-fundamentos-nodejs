// ?search=Ramom&page=2
// o substring(1) serve para remover o primeiro caractere da string "?"
// o split('&') serve para separar a string em um array de strings, separando pelo caractere "&"
// exemplo ["search=Ramom", "page=2"]

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    // reduce serve para transformar um array em um objeto
    // o split('=') serve para separar em um array, "search = key" e "Ramom = value"
    const [key, value] = param.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}