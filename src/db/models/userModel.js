import { db } from '../index.js';

const UserModel = {
    create: async function ({ username, email, userPassword, nickname, gender, birthday, job }) {
        const createNewUser = await db.User.create({
            username: username,
            email: email,
            userPassword: userPassword,
            nickname: nickname,
            gender: gender,
            birthday: birthday,
            job: job,
        });
        return createNewUser;
    },

    findByEmail: async function (email) {
        const user = await db.User.findOne({
            where: {
                email: email,
                isDeleted: 0,
            },
        });
        return user;
    },
};

export { UserModel };
