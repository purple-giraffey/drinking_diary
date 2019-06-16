import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./users";
import { Drink } from "./drinks";

@Entity()
export class Entry {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    created_datetime: Date;

    @Column()
    user_entered_datetime: Date;

    @ManyToOne(type => User, user => user.entry)
    user: number;

    @ManyToOne(type => Drink, drink => drink.type)
    drink: string;

    @Column()
    drink_id: number;

    @Column("float")
    total_drink_kcal: number;

    @Column("float")
    total_drink_alc_pct: number;

}
