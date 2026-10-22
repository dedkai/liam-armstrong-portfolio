import Project from '../models/project.js';
import serializeDocument from '../utils/serializeDocument.js';

const normalizeProjectPayload = (body = {}) => {
  const title = body.title ?? '';
  const description = body.description ?? '';
  const completion = body.completion ?? '';

  return {
    ...body,
    title,
    description,
    completion,
    image: body.image ?? '',
  };
};

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      success: true,
      message: 'Projects list retrieved successfully.',
      data: projects.map((project) => serializeDocument(project)),
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project retrieved successfully.',
      data: serializeDocument(project),
    });
  } catch (error) {
    return next(error);
  }
};

export const addProject = async (req, res, next) => {
  try {
    const payload = normalizeProjectPayload(req.body);

    if (!payload.title || !payload.completion || !payload.description) {
      return res.status(400).json({
        success: false,
        message: 'title, completion, and description are required.',
      });
    }

    const project = await Project.create(payload);
    res.status(201).json({
      success: true,
      message: 'Project added successfully.',
      data: serializeDocument(project),
    });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const payload = normalizeProjectPayload(req.body);
    const project = await Project.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully.',
      data: serializeDocument(project),
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project deleted successfully.',
      data: serializeDocument(project),
    });
  } catch (error) {
    return next(error);
  }
};
