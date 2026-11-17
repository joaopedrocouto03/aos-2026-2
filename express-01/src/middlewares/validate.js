// validate — middleware HOF que valida req[target] com um schema Zod
// target pode ser 'body' (padrão), 'params' ou 'query'
export const validate = (schema, target = 'body') =>
  (req, res, next) => {
    try {
      schema.parse(req[target]);
      next();
    } catch (error) {
      next(error);
    }
  };
