const db = require("../../Data/dbconfig");

async function getAllDestekciler() {
  return await db("destekciler");
}

async function getAllEtkinlik() {
  return await db("etkinlikler");
}

async function getAllDesteksayisi() {
  return await db("desteksayisi");
}

async function getAllAksiyonlar() {
  return await db("aksiyonlar");
}

async function getAllUlasilankisi() {
  return await db("ulasilankisiler");
}

module.exports = {
  getAllDestekciler,
  getAllEtkinlik,
  getAllDesteksayisi,
  getAllAksiyonlar,
  getAllUlasilankisi,
};
