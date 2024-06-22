const producto1 = {
  id: 1,
  name: "iphone 15",
  price: 1500,
};
const producto2 = {
  id: 2,
  name: "iphone 15 pro",
  price: 1800,
};
/* 
C -> Create -> Crear
R -> Read -> Leer
U -> Update -> Actualizar
D -> Delete -> Borrar 
*/

exports.findAll = (req, res) => {
  res.send([producto1, producto2]);
};

exports.findOne = (req, res) => {
  console.log(req.params.id);
  res.send(producto1);
};
exports.create = (req, res) => {
  const p = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  }

  console.log(`producto guardado: ${p.name}`);
  res.send(`producto guardado: ${p.name}`)
}

exports.update = (req, res) => {
  console.log(`producto actualizar: ${req.params.id}`);
  res.send(`producto actualizar: ${req.params.id}`);
}

exports.delete = (req, res) => {
  console.log(`producto eliminado: ${req.params.id}`);
  res.send(`producto eliminado: ${req.params.id}`);
}
