// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb de dados
// POST /upload import.csv   sem o conceito de stream vai demorar pois tem que esperar subir tudo para o servidor

// Readable Streams => leitura
// Writable Streams => escrita

// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
  
        this.push(buf)
      }
    }, 1000)
   
  }
}

class InverseNumber extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}


// lendo dados de um stream
new OneToHundredStream()
// transforma os dados lido readable(stream de leitura) e manda para o writable(stream de escrita)
.pipe(new InverseNumber())
  // escrevendo dados em um stream de escrita
.pipe(new MultiplyByTenStream())