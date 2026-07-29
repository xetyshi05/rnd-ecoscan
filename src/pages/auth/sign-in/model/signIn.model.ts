import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email('Введите корректный email'),
  password: z.string().min(8, 'Не менее 8 символов'),
});

export type signInSchemaModel = z.infer<typeof signInSchema>;

export const signInSchemaResolver = zodResolver(signInSchema);
