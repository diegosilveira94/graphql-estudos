const generator = require("../../helpers/generator");
const NoPermissionError = require("../../errors/NoPermissionError");

module.exports = ({ req }) => {
  const token = req.headers.authorization;

  // Bearer dfgfdhdgfjfhgjadfasd

  return {
    validate() {
      try {
        // Regras
        const { id } = generator.verifyToken(token);
        return id;
      } catch (e) {
        throw new NoPermissionError("Você não está autenticado!");
      }
    },
  };
};
