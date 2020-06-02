const express = require('express');
const app = express();
const localStorage = require('localStorage');

(() => {
	// Inicialización de la persistencia
	const prodPrueba = {
		idProducto: 2020,
		descripcion: "Monitor 21 pulgadas",
		categoria: {
			descripcion: "Material informático",
			idCategoria: 3
		}
	}
	const productos = [prodPrueba]
	const categorias = []
	
	localStorage.setItem('productos', JSON.stringify(productos));
	localStorage.setItem('categorias', JSON.stringify(categorias));
})();


getProductos = () => {
	newProductos = JSON.parse(localStorage.getItem('productos'));
	return newProductos;
}

getCategorias = () => {
	newCategorias = JSON.parse(localStorage.getItem('categorias'));
	return newCategorias;
}

saveProductos = newProductos => {
	localStorage.setItem('productos', JSON.stringify(newProductos));
}

saveCategorias = newCategorias => {
	localStorage.setItem('categorias', JSON.stringify(newCategorias));
}

// Página de Inicio
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de la API de Productos');
})

// Productos

// /Productos
app.post('/Productos', (req, res) => {
	const newProductos = req.body;
	
	productos = getProductos();
	
	if (productos.length == 0) {
		saveProductos(newProductos)
		res.send('201 CREATED')
	} else {
		res.send('ERROR 409')
	}
});


// /Productos/{id}
app.post('/Productos/:id', (req, res) => {
	const productos = req.body;
	const id = req.param('id');
	
	productos = getProductos()
	producto = productos.find(p => p.id = id);
	
	if (producto !== undefined)
		res.send('ERROR 409 El ID del producto ya existe')
	else {
		newProducto = req.body;
		productos.push(newProducto);
		saveProductos(productos);
		res.send('201 Created')
	}
});

app.delete('/Productos/:id', (req, res) => {
	const id = req.param('id');
	
	productos = getProductos();
	productoDelete = productos.findIndex(p => p.id == id);
	
	if (productoDelete !== -1) {
		productos = productos.splice(productoDelete, 1);
		res.send('204 DELETED')
	}
	else
		res.send('ERROR 404')
});

app.put('/Productos/:id', (req, res) => {
	const id = req.param('id');
	const newProducto = req.body;
	
	if (!Object.hasOwnProperty(newProducto.id))
		res.send('422 Falta el ID del producto')
	else {
		productos = getProductos();
		productoPut = productos.findIndex(p => p.id == id);
		
		productos[productoPut] = newProducto;
		res.send('200 OK');
	}
});

// Categorias

// /Categorias
app.post('/Categorias', (req, res) => {
	const categorias = req.body;
	
	categorias = getCategorias();
	
	if (categorias.length == 0) {
		saveCategorias(newCategorias)
		res.send('201 CREATED')
	} else {
		res.send('ERROR 409')
	}
});

// /Categorias/{idCategoria}
app.delete('/Categoria/:idCategoria', (req, res) => {
    const id = req.param('idCategoria');

    categorias = getCategorias();
    categoriaDelete = categorias.findIndex(c => c.idCategoria == idCategoria);

    if (categoriaDelete !== -1) {
        categoria = categorias.splice(categoriaDelete, 1);
        res.send('204 DELETED')
    }
    else
        res.send('ERROR 404')
});

app.put('/Categoria/:idCategoria', (req, res) => {
    const id = req.param('idCategoria');
    const newCategoria = req.body;

    if (!Object.hasOwnProperty(newCategoria.idCategoria))
        res.send('422 Falta el ID de la Categoria')
    else {
        categoria = getCategoria();
        categoriaPut = categoria.findIndex(c => c.idCategoria == idCategoria);

        categoria[categoriaPut] = newCategoria;
        res.send('200 OK');
    }
});

// Listado de Productos por Categoría

// /Productos/categoria/{idCategoria}
app.get('/Productos/categoria/:idCategoria', (req, res) => {
	const idCategoria = req.param('idCategoria');
	
	productos = getProductos();
	console.log(productos);
	productosCategoria = productos.filter(p => p.categoria.idCategoria == idCategoria);
	res.send(productosCategoria);
})

// Búsqueda de Productos

// /Productos/query/{query}
app.get('/Productos/query/:query', (req, res) => {
	const query = req.param('query').toLowerCase();
	
	productos = getProductos();
	productosQuery = productos.filter(p => p.descripcion.toLowerCase().includes(query));
	res.send(productosQuery);
})
 
app.listen(4010)