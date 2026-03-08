import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "178.128.59.178",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 