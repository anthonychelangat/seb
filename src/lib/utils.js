import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: "tramway.proxy.rlwy.net",
      port: "43657",
      user: "root",
      password: "CUtGhKrSTGoEVIcoGAJIplcaKpTUuBxD",
      database: "railway",
    });

    const [results] = await db.execute(query, data);
    await db.end();
    return results;
  } catch (error) {
    console.log("error");
  }
};

export default executeQuery;
