import { Viaje } from '../models/Viaje.js';

const paginaInicio = (req, res) => {
	res.render('inicio', {
		pagina: 'Inicio',
	});
};

const paginaNosotros = (req, res) => {
	res.render('nosotros', {
		pagina: 'Nosotros',
	});
};

const paginaViajes = async (req, res) => {
	// Consultar BBDD
	const viajes = await Viaje.findAll();
	console.log(viajes);

	res.render('viajes', {
		viajes,
		pagina: 'Próximos viajes',
	});
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
	const { slug } = req.params;
	console.log(slug);
};

const paginaTestimoniales = (req, res) => {
	res.render('testimoniales', {
		pagina: 'Testimoniales',
	});
};

export {
	paginaInicio,
	paginaNosotros,
	paginaViajes,
	paginaDetalleViaje,
	paginaTestimoniales,
};
