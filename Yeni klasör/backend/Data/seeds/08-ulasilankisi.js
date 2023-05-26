/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [{ sayi: 100, etkinlik_id: 1 }];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("ulasilankisiler").insert(userData);
};
