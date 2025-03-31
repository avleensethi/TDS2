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
   };

   {
     "name": "tds2",
     "version": "1.0.0",
     "description": "TDS Project 2",
     "main": "api/index.js",
     "dependencies": {
       "express": "^4.18.2",
       "multer": "^1.4.5-lts.1"
     }
   }
