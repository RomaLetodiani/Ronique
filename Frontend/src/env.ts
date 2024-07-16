import z from "zod";

export default z
  .object({
    VITE_ENV: z.string().min(1),
    VITE_LOCAL_API: z.string().min(1),
    VITE_PROD_API: z.string().min(1),
    VITE_ADMIN_EMAIL: z.string().min(1),
    VITE_ADMIN_PASSWORD: z.string().min(1),
  })
  .parse(import.meta.env);
