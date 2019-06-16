import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Entry } from "./entries";

@Entity()
export class Drink {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    type: string;

    @Column("float")
    alcohol_pct: number;

    @Column("float")
    kcal: number;

    @OneToMany(type => Entry, entry => entry.drink)
    entry: Entry;

}
