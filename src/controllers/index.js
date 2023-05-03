const { trackPackage } = require("#repository");

const RESPONSE_ERROR_MESSAGE = "Pacote não encontrado ou código invalido!";
const RESPONSE_ERROR = 404;

exports.homePageController = (_, resp) => {
  resp.end();
};

exports.trackPackageController = (req, resp) => {
  const code = req.params.cte;
  trackPackage(code)
    .then((events) => {
      resp.json(events);
    })
    .catch(() => {
      resp.status(RESPONSE_ERROR);
      resp.json({ error: RESPONSE_ERROR_MESSAGE });
    });
};
