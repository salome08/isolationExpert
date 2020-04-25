const User = require("../schema/shemaUser");



//   module.exports = async () => {
//     console.log('here')
//     async (req, res) => {
//     const {  email } = req.body;
//     if (!email ) {
//       //Le cas où l'email ou bien le password ne serait pas soumit ou nul
//       return res.status(400).json({
//         text: "Requête invalide"
//       });
//     }
//     // Création d'un objet user, dans lequel on hash le mot de passe
//     const user = {
//       email,
//     };
//     // On check en base si l'utilisateur existe déjà
//     try {
//       const findUser = await User.findOne({
//         email
//       });
//       if (findUser) {
//         return res.status(400).json({
//           text: "L'utilisateur existe déjà"
//         });
//       }
//     } catch (error) {
//       return res.status(500).json({ error });
//     }
//     try {
//       // Sauvegarde de l'utilisateur en base
//       const userData = new User(user);
//      await userData.save();
//       return res.status(200).json({
//         text: "Succès",
//       });
//     } catch (error) {
//       return res.status(500).json({ error });
//     }
//   }
// }