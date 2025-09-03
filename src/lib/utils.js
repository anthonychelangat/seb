import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: "7.tcp.eu.ngrok.io",
      port: "18245",
      user: "root",
      password: "",
      database: "seb",
    });

    const [results] = await db.execute(query, data);
    await db.end();
    return results;
  } catch (error) {
    console.log("error");
  }
};

export default executeQuery;
