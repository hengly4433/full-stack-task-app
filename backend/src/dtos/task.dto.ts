import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(['pending', 'in-progress', 'completed'])
    status?: 'pending' | 'in-progress' | 'completed';

    @IsOptional()
    @IsDateString()
    dueDate? : string;
}

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(['pending', 'in-progress', 'completed'])
    status?: 'pending' | 'in-progress' | 'completed';

    @IsOptional()
    @IsDateString()
    dueDate?: string;
}