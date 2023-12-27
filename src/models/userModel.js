const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// // 익명함수
// async (prisma) => {

// });


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

async function createUser(userData) {

    return dbHandling(async(prisma) => {
        return await prisma.userTable.create({
            data:userData
        });

    });
}

async function readUser(userData) {

    return dbHandling(async (prisma) => {
        return await prisma.userTable.findUnique({
            where: {UserID: userData.UserID}
        });

    });
}

async function updateUser(){
    return dbHandling(async(prisma) => {
    });

}

async function deleteUser(){
    return dbHandling(async(prisma) => {
    });

}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
}