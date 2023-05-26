/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [
  { adi: "Duygu", soyadi: "Aksoy", iletişim: "0532 200 20 05" },
];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("psikologlar").insert(userData);
};
