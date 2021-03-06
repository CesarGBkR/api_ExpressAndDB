const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
    };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/explorers2', async (req, res) => {
    const allExplorers2 =  await prisma.explorer2.findMany({});
    res.json(allExplorers2);
});

app.get('/explorers2/:id', async (req, res) => {
    const id = req.params.id;
    const explorer2 = await prisma.explorer2.findUnique({where: {id: parseInt(id)}});
    res.json(explorer2);
});

app.post('/explorers2', async (req, res) => {
    const explorer2 = {
    name: req.body.name,
    lang: req.body.lang,
    missionCommander: req.body.missionCommander,
    enrollments: req.body.enrollments,
    hasCertification: req.body.hasCertification
    };
    const message = 'Explorer creado.';
    await prisma.explorer2.create({data: explorer2});
    return res.json({message});
});

app.put('/explorers2/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer2.update({
		where: {
			id: id
		},
		data: {
			name: req.body.name,
            lang: req.body.lang,
            missionCommander: req.body.missionCommander,
            enrollments: req.body.enrollments,
            hasCertification: req.body.hasCertificatio
		}
	})

	return res.json({message: "Actualizado correctamente"});
});


app.get('/missioncommnader', async (req, res) => {
    const allCommanders =  await prisma.missioncommander.findMany({});
    res.json(allCommanders);
});

app.get('/missioncommander/:id', async (req, res) => {
    const id = req.params.id;
    const missionCommander = await prisma.missioncommander.findUnique({where: {id: parseInt(id)}});
    res.json(missionCommander);
});

app.post('/missioncommander', async (req, res) => {
    const missioncommander = {
        name: req.body.name,
        username: req.body.username,
        currentEnrollment: req.body.currentEnrollment,
        hasAzureCertification: req.body.hasAzureCertification
    };
    const message = 'Explorer creado.';
    await prisma.missioncommander.create({data: missioncommander});
    return res.json({message});
});

app.put('//:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer2.update({
		where: {
			id: id
		},
		data: {
			name: req.body.name,
            username: req.body.username,
            currentEnrollment: req.body.currentEnrollment,
            hasAzureCertification: req.body.hasAzureCertification
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/missioncommander/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.missioncommander.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
});


app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});