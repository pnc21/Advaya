import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:73mFJtEuWVfU@ep-curly-butterfly-a5plbktk.us-east-2.aws.neon.tech/BigData?sslmode=require"
);
export const db = drizzle(sql, { schema });
