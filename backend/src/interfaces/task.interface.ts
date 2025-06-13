import { Date, Document, Types } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: Date;
    owner: Types.ObjectId;
}