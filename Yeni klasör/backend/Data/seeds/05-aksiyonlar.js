/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const userData = [
  { tarih: "22.05.2023", aciklama: "Kahramanmaraş etkinlikleri yapılacaktır." },
  {
    tarih: "28.05.2023",
    aciklama: "çoçuklarla buluşma etkinliğine tüm urfalıları bekleriz.",
  },
  {
    tarih: "02.06.2023",
    aciklama: "Yılbaşı kutlamaları tüm heyecanla misafirlerimiz beklemektedir.",
  },
];
exports.userData = userData;
exports.seed = async function (knex) {
  return await knex("aksiyonlar").insert(userData);
};
