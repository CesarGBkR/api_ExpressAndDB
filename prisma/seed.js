const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
        where: { name: 'Woopa' },
        update: {},
        create: {
            name: 'Woopa',
                    username: 'ajolonauta',
                    mission: 'Node'
        },
        });

        const woopa1 = await prisma.explorer.upsert({
        where: { name: 'Woopa1' },
        update: {},
        create: {
            name: 'Woopa1',
                    username: 'ajolonauta1',
                    mission: 'Node'
        },
        });

        const woopa2 = await prisma.explorer.upsert({
        where: { name: 'Woopa 2' },
        update: {},
        create: {
            name: 'Woopa 2',
                    username: 'ajolonauta2',
                    mission: 'Java'
        },
        });

        const woopa3 = await prisma.explorer.upsert({
        where: { name: 'Woopa 3' },
        update: {},
        create: {
            name: 'Woopa 3',
                    username: 'ajolonauta3',
                    mission: 'Node'
        },
        });

        const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
            name: 'Woopa 4',
                    username: 'ajolonauta4',
                    mission: 'Java'
        },
        });

        const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
            name: 'Woopa 5',
                    username: 'ajolonauta5',
                    mission: 'Java'
        },
        });

        const woopa6 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 1' },
        update: {},
        create: {
            name: 'Woopa 1',
                    lang: 'JS',
                    missionCommander: 'Carlo',
                    enrollments: 1,
                    hasCertification: true
        },
        });

        const woopa7 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 2' },
        update: {},
        create: {
            name: 'Woopa 2',
                    lang: 'Java',
                    missionCommander: 'Fer',
                    enrollments: 2,
                    hasCertification: false
        },
        });

        const woopa8 = await prisma.missioncommander.upsert({
        where: { name: 'Woopa 2' },
        update: {},
        create: {
            name: 'Carlo',
            username: 'Caarlo G',
            mainStack: 'Js',
            currenEnrollment: true,
            hasAzureCertification: true
        },
        });

        console.log('Create explorers');
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();