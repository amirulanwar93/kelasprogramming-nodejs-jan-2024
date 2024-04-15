function get(req, res) {
  const resObj = {
    message: "Server to do app is running",
    data: true,
  };
  res.status(200).json(resObj);
}

function post(req, res) {
  const body = req.body;
  const resObj = {
    message: "Server to do app is running",
    data: body,
  };
  res.status(200).json(resObj);
}

const healthController = {
  get,
  post,
};

export default healthController;
