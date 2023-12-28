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


async function createRequirements(data) {

    return dbHandling(async(prisma) => {
        await prisma.requirementsTable.create({
            data:{
                UserID: data
            }
        
        })
    });
}


module.exports = {
    createRequirements,
}