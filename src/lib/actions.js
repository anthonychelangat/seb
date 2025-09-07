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
  const users = await executeQuery(
    "select users.id as id, username, path, email, role from users left join user_photos on users.id=user_photos.user_id"
  );

  return users;
};

export const getuserWithPics = async id => {
  const user = await executeQuery(
    "select users.id as id, password, username, path, email, role from users left join user_photos on users.id=user_photos.user_id where users.id=?",
    [id]
  );

  return user;
};

export const getusersWithPicsByRole = async role => {
  const users = await executeQuery(
    "select users.id as id, username, path, email, role from users left join user_photos on users.id=user_photos.user_id where users.role=?",
    [role]
  );

  return users;
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

export const getContactByContactId = async id => {
  const contact = await executeQuery("select * from contacts where id=?", [id]);

  return contact;
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
  const pics = await executeQuery(
    "select photos.url from photos left join tours on photos.tour_id=tours.id where photos.tour_id=?",
    [id]
  );

  return pics;
};

export const getTourPhotos1ById = async id => {
  const pictures = await executeQuery(
    "select url from photos where tour_id=?",
    [id]
  );

  return pictures;
};
