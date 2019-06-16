import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Entry } from "./entries";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    username: string;

    @Column("text")
    email: string;

    @Column("timestamptz")
    createdAt: Date;

    @OneToMany(type => Entry, entry => entry.user)
    entry: Entry;
}
