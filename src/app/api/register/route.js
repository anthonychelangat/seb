import { NextResponse } from "next/server";
import executeQuery from "../../../lib/utils";

export const POST = async request => {
  const { name, email, password } = await request.json();

  const user = await executeQuery("select * from users where email=?", [email]);
  if (user.length > 0) {
    console.log("Email already exists");
    return { message: "Email already exists" };
  } else {
    const createUser = await executeQuery(
      "insert into users(username,email,password) values(?,?,?)",
      [name, email, password]
    );

    if (createUser.affectedRows) {
      console.log("User Created");

      return new NextResponse("User has been created", { status: 201 });
    } else {
      console.log("There was an error while creating user");
    }
  }
};
