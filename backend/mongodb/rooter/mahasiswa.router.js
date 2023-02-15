const router = require("express").Router();
const {
  getMahasiswa,
  postMahasiswa,
  putMahasiswa,
  deleteMahasiswa
} = require('../controllers/mahasiswa.controller');

router.route("/").get(getMahasiswa).post(postMahasiswa);
router.route("/:id").patch(putMahasiswa).delete(deleteMahasiswa)
module.exports = router;