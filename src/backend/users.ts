import { User as UserTbl } from '../entity/users';
import { dbConnection } from './db'

export class User {

    create(username: string, email: string) {
        let user = new UserTbl();
        user.username = username;
        user.email = email;
        user.createdAt = new Date();
        return dbConnection().then(connection => connection.manager.save(user));
    }

    read(id: number) {
        return dbConnection()
        .then(connection => connection.getRepository(UserTbl))
        .then(users => users.findOne(id));
    }

    update(id: number, username?: string, email?: string) {
        dbConnection()
        .then(async connection => {
            let users = await connection.getRepository(UserTbl);
            let user = await users.findOne(id);
            if(user){
                if(username){
                    user.username = username;
                }
                if(email){
                    user.email = email;
                }
                users.save(user);
            }
        })
        .catch(error => console.log(error));
    }

    delete(id: number) {
        return dbConnection()
        .then(async connection => {
            let users = await connection.getRepository(UserTbl);
            let user = await users.findOne(id);
            if(user){
                users.remove(user);
            }
        }
    }
}