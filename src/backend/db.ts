/**
 * db connection
 */
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Drink} from "../entity/drinks";
import { Entry } from "../entity/entries";
import { User } from "../entity/users";

export function dbConnection() {return createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "drinker",
    password: "ooZogie7",
    database: "drinking_diary",
    entities: [
        Drink,
        Entry,
        User
    ],
    synchronize: true,
    logging: false
});
}
