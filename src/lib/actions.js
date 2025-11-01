"use server";

import executeQuery from "./utils";
import { signIn, signOut } from "./auth";

export const socialMediaLogin = async formData => {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
};

export const logOut = async () => {
  await signOut({ redirectTo: "/login" });
};

export const credentialsLogin = async formData => {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  return response;
};

export const getUserByEmail = async email => {
  const user = await executeQuery("SELECT * FROM users WHERE email=?", [email]);

  return user;
};

export const getBookingDetailsByEmail = async email => {
  const booking = await executeQuery(
    "SELECT * FROM pending_booking WHERE email=?",
    [email]
  );

  return booking;
};

export const getUserById = async id => {
  const user = await executeQuery("select * from users where id=?", [id]);

  return user;
};

export const getToursByUserId = async user_id => {
  const tour = await executeQuery(
    "select id=tours.id,title=tours.title,description=tours.description from tours inner join photos on tours.id=photos.tour_id where tours.id=?",
    [user_id]
  );

  return tour;
};

export const getTours = async () => {
  const tours = await executeQuery("select * from tours");

  return tours;
};

export const getRoles = async () => {
  const roles = await executeQuery("select id,role from roles");

  return roles;
};

export const getUserPicsById = async id => {
  const rows = await executeQuery("select data from pictures where user_id=?", [
    id,
  ]);

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;

    return { url };
  });
};

export const getAbout = async () => {
  const about = await executeQuery("select * from about");

  return about;
};

export const getToursLimit = async () => {
  const tours = await executeQuery("select * from tours limit 3");

  return tours;
};

export const getLinks = async () => {
  const links = await executeQuery("select * from socials");

  return links;
};

export const getContacts = async () => {
  const contacts = await executeQuery("select * from contacts");

  return contacts;
};

export const getusersWithPics = async () => {
  const rows = await executeQuery(
    `select users.id as id, username, data, email, role from users left join pictures on users.id=pictures.user_id where pictures.owner_type="user" and users.role=2`
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;
    const id = row.id;
    const username = row.username;
    const email = row.email;
    const role = row.role;

    return { url, id, username, email, role };
  });
};

export const getAllUsersWithPics = async () => {
  const rows = await executeQuery(
    `select users.id as id, username, data, email, role from users left join pictures on users.id=pictures.user_id where pictures.owner_type="user"`
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;
    const id = row.id;
    const username = row.username;
    const email = row.email;
    const role = row.role;

    return { url, id, username, email, role };
  });
};

export const getuserWithPics = async id => {
  const rows = await executeQuery(
    "select users.id as id, password, username, data, email, role from users left join pictures on users.id=pictures.user_id where users.id=?",
    [id]
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;
    const id = row.id;
    const password = row.password;
    const username = row.username;
    const email = row.email;
    const role = row.role;

    return { url, id, password, username, email, role };
  });
};

export const getusersWithPicsByRole = async role => {
  const rows = await executeQuery(
    `select users.id as id, username, data, email, role from users left join pictures on users.id=pictures.user_id where users.role=? and pictures.owner_type="user"`,
    [role]
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;
    const id = row.id;
    const username = row.username;
    const email = row.email;
    const role = row.role;

    return { url, id, username, email, role };
  });
};

export const deleteUser = async formData => {
  const id = formData.get("user_id");

  await executeQuery("delete from users where id=?", [id]);
  console.log("deleted");
};

export const deleteTour = async formData => {
  const id = formData.get("tour_id");

  await executeQuery("delete from tours where id=?", [id]);
  console.log("deleted");
};

export const deleteAbout = async formData => {
  const id = formData.get("about_id");

  await executeQuery("delete from about where id=?", [id]);
  console.log("deleted");
};

export const deleteLinks = async formData => {
  const id = formData.get("link_id");

  await executeQuery("delete from socials where id=?", [id]);
  console.log("deleted");
};

export const deleteContacts = async formData => {
  const id = formData.get("contact_id");

  await executeQuery("delete from contacts where id=?", [id]);
  console.log("deleted");
};

export const getTourByTourId = async id => {
  const tour = await executeQuery("select * from tours where id=?", [id]);

  return tour;
};

export const getTourAndPhotoByTourId = async tour_id => {
  const tour = await executeQuery(
    "select * from tours inner join photos on tours.id=photos.tour_id where tours.id=? limit 1",
    [tour_id]
  );

  return tour;
};

export const getContactByContactId = async id => {
  const contact = await executeQuery("select * from contacts where id=?", [id]);

  return contact;
};

export const getGuidesByTourId = async id => {
  const rows = await executeQuery(
    "select tours_and_guides.id as id, tours_and_guides.tour_id as tour_id,users.username as username,users.role as role, pictures.data as data from tours_and_guides inner join users on users.id=user_id left join pictures on pictures.user_id=users.id  where tours_and_guides.tour_id=?",
    [id]
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;
    const id = row.id;
    const tour_id = row.tour_id;
    const username = row.username;
    const role = row.role;

    return { url, id, tour_id, username, role };
  });
};

export const getGuides = async () => {
  const guides = await executeQuery(
    "select * from users where role=1 || role=2"
  );

  return guides;
};

export const getAboutByAboutId = async id => {
  const about = await executeQuery("select * from about where id=?", [id]);

  return about;
};

export const getLinkByLinkId = async id => {
  const link = await executeQuery("select * from socials where id=?", [id]);

  return link;
};

export const getToursPhotosByTourId = async id => {
  const rows = await executeQuery(
    `select pictures.data from pictures left join tours on pictures.tour_id=tours.id where pictures.tour_id=? and pictures.owner_type="tour"`,
    [id]
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;

    return { url };
  });
};

export const getTourPhotos1ById = async id => {
  const rows = await executeQuery(
    `select data from pictures where tour_id=? and owner_type="tour"`,
    [id]
  );

  return rows.map(row => {
    const base64 = Buffer.from(row.data).toString("base64");
    const url = `data:${row.type};base64,${base64}`;

    return { url };
  });
};
