export default {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_cw8reqIlaTb0@ep-lively-meadow-a5wg1a21-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_cw8reqIlaTb0@ep-lively-meadow-a5wg1a21-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
