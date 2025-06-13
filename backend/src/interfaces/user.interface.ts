import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    comparePassword(enteredPassword: string): Promise<boolean>;
}