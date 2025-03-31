     /api
       index.js  (contains your API handler)
     package.json  (with dependencies)
     vercel.json  (deployment configuration)

module.exports = (req, res) => {
  res.status(200).json({
    answer: "API is working correctly"
  });
};
