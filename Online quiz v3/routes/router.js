const httpStatus = require("http-status-codes"),
  contentTypes = require("../contentTypes/contentTypes"),
  utils = require("../utils/utils");

const routes = {
  "GET": {},
  "POST": {}
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.StatusCodes.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};

