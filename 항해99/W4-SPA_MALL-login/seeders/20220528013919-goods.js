'use strict';
const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Goods',
            [
                {
                    goodsId: 2,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 3000,
                    createdAt,
                    updatedAt,
                },
                {
                    goodsId: 1,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 2000,
                    createdAt,
                    updatedAt,
                },
                {
                    goodsId: 3,
                    name: '시원한 콜라',
                    thumbnailUrl:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7JqMw7ZYZP4ZW136wcoMTmLzbrMIJzUWb1Dhu9cHwCPp0gA&usqp=CAc',
                    category: 'drink',
                    price: 1000,
                    createdAt,
                    updatedAt,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Goods', null, {});
    },
};
