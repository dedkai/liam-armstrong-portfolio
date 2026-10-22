const serializeDocument = (document) => {
  const plain = document.toObject();
  const { _id, ...rest } = plain;
  return {
    ...rest,
    id: String(_id),
  };
};

export default serializeDocument;
