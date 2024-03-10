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

	res.render('viajes', {
		pagina: 'Próximos viajes',
		viajes,
	});
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
	const { slug } = req.params;

	try {
		const viaje = await Viaje.findOne({ where: { slug } });

		res.render('viaje', {
			pagina: 'Información Viaje',
			viaje,
		});
	} catch (error) {
		console.log(console.error);
	}
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
