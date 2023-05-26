/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [
  { username: "Ezel", password: 1234, role_id: 1 },
  { username: "Taylan", password: 12345, role_id: 2 },
];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("users").insert(userData);
};
