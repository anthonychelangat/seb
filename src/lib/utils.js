import mysql from "mysql2/promise";

const executeQuery = async (query, data) => {
  try {
    const db = await mysql.createConnection({
      host: "4.tcp.eu.ngrok.io",
      port: "13945",
      user: "root",
      password: "",
      database: "sipi",
    });

    const [results] = await db.execute(query, data);
    await db.end();
    return results;
  } catch (error) {
    console.log("error");
  }
};

// host: "tramway.proxy.rlwy.net"

// port: "43657",
// user: "root",
// password: "CUtGhKrSTGoEVIcoGAJIplcaKpTUuBxD",
// database: "railway",

export default executeQuery;
