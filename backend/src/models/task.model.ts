import mongoose, { Schema } from "mongoose";
import { ITask } from "../interfaces/task.interface";

const taskSchema = new Schema<ITask>(
    {
        title: { type: String, required: true },
        description: { type: String },
        status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
        dueDate: { type: Date },
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    }, 
    { timestamps: true }
);

export const Task = mongoose.model<ITask>('Task', taskSchema);
