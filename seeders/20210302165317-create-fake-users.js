"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@email.com",
          uuid: "3566b7b1-49dd-43bf-a42c-cb75d7d6900b",
          role: "admin",
          createdAt: "2021-03-02T16:20:18.976Z",
          updatedAt: "2021-03-02T16:20:18.976Z",
        },
        {
          name: "Jane Doe",
          email: "jane@email.com",
          uuid: "3566b7b1-49dd-43bf-a42c-cb75d7d9080b",
          role: "admin",
          createdAt: "2021-03-02T16:20:18.976Z",
          updatedAt: "2021-03-02T16:20:18.976Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
