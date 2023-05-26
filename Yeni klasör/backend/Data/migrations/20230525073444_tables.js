/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("roles", (role) => {
      role.increments("role_id");
      role.string("rolename", 255).notNullable();
    })

    .createTable("users", (user) => {
      user.increments();
      user.string("username", 255).notNullable().unique();
      user.string("password", 255).notNullable();
      user
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("destekciler", (destekci) => {
      destekci.increments();
      destekci.string("adi", 255).notNullable();
      destekci.string("photo").notNullable();
    })
    .createTable("aksiyonlar", (aksiyon) => {
      aksiyon.increments();
      aksiyon.string("tarih", 255).notNullable();
      aksiyon.string("aciklama");
    })
    .createTable("gonulluler", (gonullu) => {
      gonullu.increments();
      gonullu.string("adi", 255).notNullable();
      gonullu.string("soyadi", 255).notNullable();
      gonullu.string("mail", 255).notNullable();
      gonullu.string("tel", 255).notNullable();
    })
    .createTable("etkinlikler", (etkinlik) => {
      etkinlik.increments("etkinlik_id");
      etkinlik.string("aciklama", 255);
    })
    .createTable("ulasilankisiler", (kisi) => {
      kisi.increments();
      kisi.integer("sayi").notNullable();
      kisi
        .integer("etkinlik_id")
        .unsigned()
        .notNullable()
        .references("etkinlik_id")
        .inTable("etkinlikler")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("desteksayisi", (destek) => {
      destek.increments();
      destek.bigint("sayi").notNullable();
    })

    .createTable("psikologlar", (psikolog) => {
      psikolog.increments();
      psikolog.string("adi", 255).notNullable();
      psikolog.string("soyadi", 255).notNullable();
      psikolog.string("iletişim", 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("psikologlar")
    .dropTableIfExists("desteksayisi")
    .dropTableIfExists("ulasilankisiler")
    .dropTableIfExists("etkinlikler")
    .dropTableIfExists("gonulluler")
    .dropTableIfExists("aksiyonlar")
    .dropTableIfExists("destekciler")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
