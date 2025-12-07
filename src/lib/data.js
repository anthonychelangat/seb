"use server";

import { redirect } from "next/navigation";
import executeQuery from "./utils";
import path from "path";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";

export const addMessage = async formData => {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const message = formData.get("message");
  const vote = formData.get("vote");

  await executeQuery(
    "insert into messages(firstname,lastname,email,message,vote) values(?,?,?,?,?)",
    [firstname, lastname, email, message, vote]
  );

  if (addMessage.affectedRows) {
    console.log("Message sent");
  }
};

export const addTour = async formData => {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = formData.get("price");
  const user_id = formData.get("user_id");
  const files = formData.getAll("file");

  const same = await executeQuery("select * from tours where title=?", [title]);

  if (same.length > 0) {
    console.log("There is a tour by that name already");
    return { message: "There is a tour by that name" };
  }

  const tour = await executeQuery(
    "insert into tours(title,description,user_id,price) values(?,?,?,?)",
    [title, description, user_id, price]
  );

  const [{ id }] = await executeQuery("select id from tours where title=?", [
    title,
  ]);

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}_${file.name}`;

    const size = file.size;
    const owner = "tour";
    const mimetype = file.type;

    await executeQuery(
      "insert into pictures(data,filename,mime_type,size,owner_type,tour_id) values(?,?,?,?,?,?)",
      [buffer, filename, mimetype, size, owner, id]
    );
  }

  if (tour.affectedRows) {
    console.log("A tour has been added");
    redirect("/tours");
  }
};

export const addSingleUser = async formData => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const file = formData.get("file");
  const owner = "user";

  const same = await executeQuery("select * from users where email=?", [email]);

  if (same.length > 0) {
    console.log("There is a user by that email");
    return { message: "There is a user by that email" };
  }

  const tour = await executeQuery(
    "insert into users(username,email,role,password) values(?,?,?,?)",
    [username, email, role, password]
  );

  const [{ id }] = await executeQuery("select id from users where email=?", [
    email,
  ]);

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name}`;
  const filepath = "/Images/" + filename;
  const size = file.size;
  const mimetype = file.type;

  const p = await executeQuery(
    "insert into pictures(data,filename,owner_type,user_id,mime_type,size) values(?,?,?,?,?,?)",
    [buffer, filename, owner, id, mimetype, size]
  );

  await executeQuery(
    "insert into user_photos(name,path,user_id) values(?,?,?)",
    [filename, filepath, id]
  );

  if (tour.affectedRows) {
    console.log("A user has been added");
    // redirect("/tours");
  }
};

export const assignGuides = async formData => {
  const tour_id = formData.get("tour_id");
  const user_id = formData.get("user_id");

  const guide = await executeQuery(
    "insert into tours_and_guides(user_id,tour_id) values(?,?)",
    [user_id, tour_id]
  );

  if (guide.affectedRows) {
    console.log("Guide has been assigned to tour");
  }
};

export const updateTour = async formData => {
  const title = formData.get("title");
  const price = formData.get("price");
  const description = formData.get("description");
  const id = formData.get("tour_id");

  const tour = await executeQuery(
    "update tours set title=?,price=?,description=? where id=?",
    [title, price, description, id]
  );

  if (tour.affectedRows) {
    console.log("Tour details updated successfull");
  } else {
    console.log("Tour details update failed");
  }
};

export const updateUser = async formData => {
  const username = formData.get("username");
  const email = formData.get("email");
  const role = formData.get("role");
  const password = formData.get("password");
  const id = formData.get("user_id");
  const file = formData.get("file");

  const user = await executeQuery(
    "update users set username=?,email=?,role=?,password=? where id=?",
    [username, email, role, password, id]
  );

  const same = await executeQuery("select * from pictures where user_id=?", [
    id,
  ]);

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name}`;

  const owner = "user";
  const size = file.size;
  const type = file.type;

  if (same.length > 0) {
    await executeQuery(
      "update pictures set filename=?,data=? where user_id=?",
      [filename, buffer, id]
    );
  } else {
    await executeQuery(
      "insert into pictures(data,filename,size,mime_type,owner_type,user_id) values(?,?,?,?,?,?)",
      [buffer, filename, size, type, owner, id]
    );
  }

  if (user.affectedRows) {
    console.log("User details updated successfull");
  } else {
    console.log("User details update failed");
  }
};

export const addLinks = async formData => {
  const name = formData.get("socials");
  const link = formData.get("link");

  const linka = await executeQuery(
    "insert into socials(name,link) values(?,?)",
    [name, link]
  );

  if (linka.affectedRows) {
    console.log("Link has been added successfull");
  } else {
    console.log("Link has failed");
  }
};

export const addContact = async formData => {
  const name = formData.get("category");
  const contact = formData.get("contact");

  const contacta = await executeQuery(
    "insert into contacts(name,contact) values(?,?)",
    [name, contact]
  );

  if (contacta.affectedRows) {
    console.log("Contact has been added successfull");
  } else {
    console.log("Contact has failed");
  }
};

export const addAboutUs = async formData => {
  const about = formData.get("about");

  const abouta = await executeQuery("insert into about(about) values(?)", [
    about,
  ]);

  if (abouta.affectedRows) {
    console.log("About has been added successfull");
  } else {
    console.log("About has failed");
  }
};

export const addSubscriber = async formData => {
  const email = formData.get("email");

  const subscriber = await executeQuery(
    "insert into subscribers(email) values(?)",
    [email]
  );

  if (subscriber.affectedRows) {
    console.log("Subscriber has been added successfull");
  } else {
    console.log("Subscriber has failed");
  }
};

export const updateAbout = async formData => {
  const id = formData.get("about_id");
  const about = formData.get("about");

  const abouta = await executeQuery("update about set about=? where id=?", [
    about,
    id,
  ]);

  if (abouta.affectedRows) {
    console.log("About details updated successfull");
  } else {
    console.log("About details update failed");
  }
};

export const updateContact = async formData => {
  const name = formData.get("category");
  const contact = formData.get("contact");
  const id = formData.get("contact_id");

  const contacta = await executeQuery(
    "update contacts set name=?,contact=? where id=?",
    [name, contact, id]
  );

  if (contacta.affectedRows) {
    console.log("Contact details updated successfull");
  } else {
    console.log("Contact details update failed");
  }
};

export const updateSocial = async formData => {
  const name = formData.get("socials");
  const link = formData.get("link");
  const id = formData.get("link_id");

  const social = await executeQuery(
    "update socials set name=?,link=? where id=?",
    [name, link, id]
  );

  if (social.affectedRows) {
    console.log("Social details updated successfull");
  } else {
    console.log("Social details update failed");
  }
};

export const pendingBooking = async formData => {
  const tour_id = formData.get("tour_id");
  const price = formData.get("price");
  const email = formData.get("email");
  const guests = formData.get("guests");
  const date_of_arrival = formData.get("date_of_arrival");
  const telephone = formData.get("telephone");

  const pending = await executeQuery(
    "insert into pending_booking(tour_id,price,email,guests,date_of_arrival,telephone) values(?,?,?,?,?,?)",
    [tour_id, price, email, guests, date_of_arrival, telephone]
  );

  if (pending.affectedRows) {
    console.log("Booking details have been added successfully");
    redirect("/booking");
  } else {
    console.log("Booking details failed");
  }
};

export const processPayments = async formData => {
  const telephone = formData.get("telephone");
  const total = formData.get("total");

  console.log(telephone, total);
};
