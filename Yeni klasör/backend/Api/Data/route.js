const router = require("express").Router();
const datamodel = require("./datamodel");

router.get("/destekciler", async (req, res, next) => {
  try {
    const destekçi = await datamodel.getAllDestekciler();
    res.status(200).json(destekçi);
  } catch (error) {
    next(error);
  }
});

router.get("/etkinlikler", async (req, res, next) => {
  try {
    const etkinlik = await datamodel.getAllEtkinlik();
    res.status(200).json(etkinlik);
  } catch (error) {
    next(error);
  }
});
router.get("/desteksayisi", async (req, res, next) => {
  try {
    const destek = await datamodel.getAllDesteksayisi();
    res.status(200).json(destek);
  } catch (error) {
    next(error);
  }
});

router.get("/aksiyonlar", async (req, res, next) => {
  try {
    const aksiyon = await datamodel.getAllAksiyonlar();
    res.status(200).json(aksiyon);
  } catch (error) {
    next(error);
  }
});

router.get("/ulasilankisiler", async (req, res, next) => {
  try {
    const aksiyon = await datamodel.getAllUlasilankisi();
    res.status(200).json(aksiyon);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(400).json(error);
});

module.exports = router;
