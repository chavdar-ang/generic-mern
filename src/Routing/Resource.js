const express = require("express");
const { check, validationResult } = require("express-validator");

resource = model => {
  router = new express.Router();

  // @route   GET api/{model}
  // @desc    Index route
  // @access  --
  router.get("/", async (req, res) => {
    try {
      const documents = await model.find();
      res.json(documents);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    // not sure what this was doing
    // res.send(req.document);
  });

  // @route   GET api/{model}/{id}
  // @desc    Show route
  // @access  --
  router.get("/:id", getDocument, (req, res) => {
    res.json(res.document);
  });

  // @route   POST api/users
  // @desc    Store route
  // @access  Public
  router.post("/", async (req, res) => {
    // console.log(req.body, req.baseUrl);

    // const document = new model(req.body);

    try {
      let newDocument = await model.create(req.body);
      // let newDocument = await document.save();
      res.status(201).json(newDocument);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // @route   PATCH api/{model}/{id}
  // @desc    Update route
  // @access  --
  router.patch("/:id", getDocument, async (req, res) => {
    // add request values to the document object
    Object.assign(res.document, req.body);

    try {
      const updatedDocument = await res.document.save();
      res.json(updatedDocument);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  // @route   DELETE api/{model}/{id}
  // @desc    Delete route
  // @access  --
  router.delete("/:id", getDocument, async (req, res) => {
    try {
      await res.document.remove();
      res.json({ message: "Document deleted." });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Document middleware
  async function getDocument(req, res, next) {
    let document;
    try {
      document = await model.find(req.params.id);
      
      // if (document == null) {
      //   return res.status(404).json({ message: "Document not found." });
      // }
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
    res.document = document;
    next();
  }

  return router;
};

module.exports = resource;
