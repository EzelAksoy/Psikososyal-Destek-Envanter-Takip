/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [
  {
    adi: "Hakan",
    soyadi: "Aksoy",
    mail: "aksoy.bla@gmail.com",
    tel: "0505 569 56 98",
  },
  {
    adi: "Kenan",
    soyadi: "Aksoy",
    mail: "aksoy.kenan@gmail.com",
    tel: "0505 569 56 95",
  },
];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("gonulluler").insert(userData);
};
