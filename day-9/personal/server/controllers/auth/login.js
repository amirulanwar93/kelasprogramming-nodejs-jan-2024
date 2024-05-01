const login = async (req, res) => {
  try {
    console.log(req.body);
    return res.json({ message: "Login Route", data: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default login;
