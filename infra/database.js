import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "local_password",
  });
  await client.connect();
  const result = await client.query(queryObject);
  client.end();
  return result;
}

export default {
  query: query,
};
