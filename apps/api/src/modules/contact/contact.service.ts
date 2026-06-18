import { prisma } from '../../prisma';
import { ContactInput } from './contact.schema';

export async function saveContactMessage(
  input: ContactInput,
  meta: { ip?: string; userAgent?: string },
) {
  return prisma.contactMessage.create({
    data: {
      name: input.name,
      email: input.email,
      message: input.message,
      locale: input.locale,
      ip: meta.ip,
      userAgent: meta.userAgent,
    },
  });
}
