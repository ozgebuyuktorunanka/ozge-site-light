import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(80),
  email: z.string().trim().email('Enter a valid email').max(120),
  message: z.string().trim().min(10, 'Message is too short').max(2000),
  locale: z.enum(['tr', 'en']).optional(),
  // Honeypot: the form hides this field, so real users leave it empty.
  // Bots tend to fill every field; if it arrives non-empty we silently drop
  // the submission in the route (returning success so the bot learns nothing).
  company: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
