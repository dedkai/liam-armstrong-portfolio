import Service from '../models/service.js';
import serializeDocument from '../utils/serializeDocument.js';

export const getAllServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      success: true,
      message: 'Services list retrieved successfully.',
      data: services.map((service) => serializeDocument(service)),
    });
  } catch (error) {
    next(error);
  }
};

export const getServiceById = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Service retrieved successfully.',
      data: serializeDocument(service),
    });
  } catch (error) {
    return next(error);
  }
};

export const addService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Service added successfully.',
      data: serializeDocument(service),
    });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Service updated successfully.',
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Service deleted successfully.',
    });
  } catch (error) {
    return next(error);
  }
};
