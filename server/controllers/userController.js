import { hash, compare } from "bcrypt";
import {
  insertUser,
  searchUserByEmail,
  searchUserById,
  deleteUserById,
} from "../models/User.js";
import { ApiError } from "../helpers/apiError.js";
import jwt from "jsonwebtoken";
const { sign } = jwt;

const registration = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || email.length === 0)
      return next(new ApiError("Invalid email", 400));
    if (!password || password.length < 8)
      return next(new ApiError("Invalid password", 400));

    const hashedPassword = await hash(password, 10);
    const result = await insertUser(email, hashedPassword);
    const user = result.rows[0];
    res.status(201).json(createUserObj(user.id, user.email));
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await searchUserByEmail(email);

    if (result.rowCount === 0)
      return next(new ApiError("Invalid credentials", 400));

    const user = result.rows[0];
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) return next(new ApiError("Invalid password", 401));

    const token = sign({ user: email }, process.env.JWT_SECRET);

    return res.status(200).json(createUserObj(user.id, user.email, token));
  } catch (error) {
    return next(error);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await searchUserById(id);
    const user = result.rows[0];
    const profile = createProfileObj(
      user.id,
      user.email,
      user.password,
      user.firstname,
      user.lastname
    );
    return res.status(200).json(profile);
  } catch (error) {
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteUserById(id);
    console.log(result);
    return res
      .status(200)
      .json({ id: id, message: `User ID ${id} deleted successfully.` });
  } catch (error) {
    return next(error);
  }
};

const createUserObj = (id, email, token = undefined) => {
  return {
    id: id,
    email: email,
    ...(token !== undefined && { token: token }),
  };
};

const createProfileObj = (id, email, password, firstname, lastname) => {
  return {
    id: id,
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  };
};

export { registration, login, getUserProfile, deleteUser };
