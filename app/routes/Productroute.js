//const express = require('express');
//const router = express.Router();
//const multer =require('multer');

/*filename='';

const mystorage= multer.diskStorage({
  destination: './assets',
  filename: (req,file,redirect)=>{
    let date = Date.now();
    let fl = date +'.'+ file.mimetype.split('/')[1]; // file.mimetype:return l'extension de l'image
    redirect(null, fl);
    filename = fl;
  }
})
const upload=multer({storage:mystorage});*/
 
// Routes pour les produits

module.exports = (app) => {
  const App = require("../controllers/prodController.js");
 
  app.post("/createP", App.create); // Créer un produit
  app.get("/get-allP", App.findAll); // Récupérer tous les produits
  app.get("/products/:productId", App.findOne);
  app.put("/products/:productId", App.update);
  app.delete("/products/:productId", App.delete);
}