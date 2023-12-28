const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function dbHandling(_func) {
    try {
        return await _func(prisma);
    } catch (error) {
        console.error(error);
        throw error;  // 에러 던지기 호출부에
    } finally {
        await prisma.$disconnect();
    }
}

async function createPost(data) {
    return dbHandling(async(prisma) => {
        await prisma.boardTable.create({
            data:data
        });

    });
}

async function readPost(data) {
    return dbHandling(async (prisma) => {
        return await prisma.boardTable.findMany({
            where: {UserID: data.UserID}
        });

    });
}


module.exports = {
    createPost,
    readPost,
}