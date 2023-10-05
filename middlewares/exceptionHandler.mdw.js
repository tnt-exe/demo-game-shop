module.exports = {
   unknownEndpoint: (req, res) => {
      console.error("Unknown endpoint");
      res.status(500).send("Unknown endpoint");
   },
   errorHandler: (err, req, res, next) => {
      console.error(err.message);
      res.status(500).send("Something broke!");
   }
};