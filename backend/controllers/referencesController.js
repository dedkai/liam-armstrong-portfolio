import Reference from '../models/reference.js';
import serializeDocument from '../utils/serializeDocument.js';

const normalizeReferencePayload = (body = {}) => {
  const firstName = body.firstName ?? body.firstname ?? '';
  const lastName = body.lastName ?? body.lastname ?? '';

  return {
    ...body,
    firstName,
    lastName,
    firstname: firstName,
    lastname: lastName,
    email: body.email ?? '',
    company: body.company ?? '',
    position: body.position ?? '',
  };
};

export const getAllReferences = async (req, res, next) => {
  try {
    const references = await Reference.find();
    res.status(200).json({
      success: true,
      message: 'References list retrieved successfully.',
      data: references.map((reference) => serializeDocument(reference)),
    });
  } catch (error) {
    next(error);
  }
};

export const getReferenceById = async (req, res, next) => {
  try {
    const reference = await Reference.findById(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: 'Reference not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Reference retrieved successfully.',
      data: serializeDocument(reference),
    });
  } catch (error) {
    return next(error);
  }
};

export const addReference = async (req, res, next) => {
  try {
    const payload = normalizeReferencePayload(req.body);

    if (!payload.firstName || !payload.lastName || !payload.email) {
      return res.status(400).json({
        success: false,
        message: 'firstName, lastName, and email are required.',
      });
    }

    const reference = await Reference.create(payload);
    res.status(201).json({
      success: true,
      message: 'Reference added successfully.',
      data: serializeDocument(reference),
    });
  } catch (error) {
    next(error);
  }
};

export const updateReference = async (req, res, next) => {
  try {
    const payload = normalizeReferencePayload(req.body);
    const reference = await Reference.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: 'Reference not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Reference updated successfully.',
      data: serializeDocument(reference),
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteReference = async (req, res, next) => {
  try {
    const reference = await Reference.findByIdAndDelete(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: 'Reference not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Reference deleted successfully.',
      data: serializeDocument(reference),
    });
  } catch (error) {
    return next(error);
  }
};
