import { z } from "zod";

const NAME_REGEX = /^[a-z\u0027\u2019\u0020\u00E0-\u00FC]+$/i;

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(NAME_REGEX, { message: "Please enter a valid name" }),
  email: z.string().trim().email({ message: "Please enter a valid email" }),
  consents: z.array(z.string()).min(1, "Please select at least one consent"),
});

export type FormSchemaData = z.infer<typeof formSchema>;
