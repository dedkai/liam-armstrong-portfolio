import User from '../models/user.js';
import serializeDocument from '../utils/serializeDocument.js';

const normalizeUserPayload = (body = {}) => {
  const firstName = body.firstName ?? body.firstname ?? '';
  const lastName = body.lastName ?? body.lastname ?? '';

  return {
    ...body,
    firstName,
    lastName,
    firstname: firstName,
    lastname: lastName,
    email: body.email ?? '',
    password: body.password ?? '',
    username: body.username ?? '',
    role: body.role ?? 'user',
    created: body.created ?? new Date(),
    updated: body.updated ?? new Date(),
  };
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: 'Users list retrieved successfully.',
      data: users.map((user) => serializeDocument(user)),
    });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User retrieved successfully.',
      data: serializeDocument(user),
    });
  } catch (error) {
    return next(error);
  }
};

export const addUser = async (req, res, next) => {
  try {
    const payload = normalizeUserPayload(req.body);

    if (!payload.firstName || !payload.lastName || !payload.email || !payload.password) {
      return res.status(400).json({
        success: false,
        message: 'firstName, lastName, email, and password are required.',
      });
    }

    const user = await User.create(payload);
    res.status(201).json({
      success: true,
      message: 'User added successfully.',
      data: serializeDocument(user),
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const payload = normalizeUserPayload(req.body);
    const user = await User.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User updated successfully.',
      data: serializeDocument(user),
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
      data: serializeDocument(user),
    });
  } catch (error) {
    return next(error);
  }
};
