import express from 'express';

const router = express();

router.get('/', (req, res) => {
	res.render('inicio', {});
});

router.get('/nosotros', (req, res) => {
	const viajes = 'Viaje a Andorra';

	res.render('nosotros', {
		viajes, // Object Literal Enhancement: llave y valor se llaman igual
	});
});

router.get('/contacto', (req, res) => {
	res.send('Contacto');
});

export default router;
