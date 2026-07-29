import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const signUpSchema = z
  .object({
    fio: z.string('Обязательное поле').min(1, 'Обязательное поле'),
    email: z.email('Введите корректный email'),
    password: z.string().min(8, 'Не менее 8 символов'),
    password_confirmation: z.string().min(8, 'Не менее 8 символов'),
  })
  .refine((data): boolean => data.password === data.password_confirmation, {
    message: 'Указанный пароль не совпадает',
    path: ['password_confirmation'],
  });

export type signUpSchemaModel = z.infer<typeof signUpSchema>;

export const signUpSchemaResolver = zodResolver(signUpSchema);
