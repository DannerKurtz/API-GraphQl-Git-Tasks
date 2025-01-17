const generator = require('../../helpers/generator.js');
const NoPermissionError = require('../../errors/NoPermissionError');
module.exports = ({ req }) => {
  const token = req.headers.authorization;
  return {
    validate() {
      try {
        const { id } = generator.verifyToken(token);
        return id;
      } catch (error) {
        throw new NoPermissionError('Você não está autenticado');
      }
    },
  };
};
