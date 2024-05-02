const listAllSlots = async (req, res) => {
  try {
    return res.json({ message: "List all slots" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default listAllSlots;
