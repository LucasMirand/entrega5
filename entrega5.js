const http = require("http");
const server = http.createServer((peticion, respuesta) => {
  let aleatorio = Math.floor(Math.random() * 10 + 1);
  let aleatorio2 = Math.floor(Math.random() * 9999.0 + 0.0).toFixed(2);

  let obj = {
    id: aleatorio,
    title: `producto${aleatorio}`,
    price: aleatorio2,
    thumbnail: `Foto${aleatorio}`,
  };
  respuesta.end(JSON.stringify(obj));
});
server.listen(8080, () => {
  console.log(`listening http://localhost:${8080}`);
});
