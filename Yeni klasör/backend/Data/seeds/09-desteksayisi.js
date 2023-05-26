/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [{ sayi: 50 }];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("desteksayisi").insert(userData);
};
