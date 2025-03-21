export const uploadDocument = async (fileData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "File uploaded successfully",
        fileId: "mock-file-" + Math.floor(Math.random() * 1000),
      });
    }, 1000);
  });
};
