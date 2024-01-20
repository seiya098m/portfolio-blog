import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "os-nextjs-blog",
  apiKey: process.env.API_KEY,
});
