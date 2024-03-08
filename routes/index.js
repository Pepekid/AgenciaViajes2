import express from 'express';

const router = express();

router.get('/', (req, res) => {
	res.render('inicio', {
		pagina: 'Inicio',
	});
});

router.get('/nosotros', (req, res) => {
	res.render('nosotros', {
		pagina: 'Nosotros',
	});
});
router.get('/viajes', (req, res) => {
	res.render('viajes', {
		pagina: 'Viajes',
	});
});
Vouter.get('/testimoniales', (req, res) => {
	res.render('testimoniales', {
		pagina: 'Testimoniales',
	});
});

router.get('/contacto', (req, res) => {
	res.send('Contacto');
});

export default router;
