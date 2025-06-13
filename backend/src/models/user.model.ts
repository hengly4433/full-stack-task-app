import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs';
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser> (
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function (enteredPassword: string) {
    return bcrypt.compare(enteredPassword, this.password);
}

export const User = mongoose.model<IUser>('User', userSchema);
