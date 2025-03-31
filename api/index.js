     /api
       index.js  (contains your API handler)
     package.json  (with dependencies)
     vercel.json  (deployment configuration)

   module.exports = (req, res) => {
     if (req.method === 'POST') {
       res.status(200).json({ answer: "This is a test response" });
     } else {
       res.status(405).json({ error: "Method not allowed" });
     }
   };q
