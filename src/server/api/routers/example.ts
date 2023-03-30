import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { sendEmail } from "~/utils/email";
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  contact: publicProcedure
    .input(z.object({ email: z.string().email(), message: z.string() }))
    .mutation(({ input }) => {
      return sendEmail(input.email, input.message);
    }),
});
