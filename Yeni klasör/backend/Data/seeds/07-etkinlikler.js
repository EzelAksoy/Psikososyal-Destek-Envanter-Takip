/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [{ aciklama: "kahve toplantısı" }];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("etkinlikler").insert(userData);
};
