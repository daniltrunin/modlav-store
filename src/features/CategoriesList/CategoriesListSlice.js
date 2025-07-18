import {createSlice} from '@reduxjs/toolkit'

export const CategoriesListSlice = createSlice({
    name: 'categories',
    initialState: {
        listCategories: [
            {
                id: 1,
                name: 'Благотворительность',
                path: '/charity'
            },
            {
                id: 2,
                name: 'Все категории',
                path: '/all'
            },
            {
                id: 3,
                name: 'Новинки',
                path: '/new'
            },
            {
                id: 4,
                name: 'Распродажа',
                path: '/sale'
            },
            {
                id: 5,
                name: 'Майки',
                path: '/tank-top'
            },
            {
                id: 6,
                name: 'Футболки',
                path: '/t-shirts'
            },
            {
                id: 7,
                name: 'Рубашки',
                path: '/shirts'
            },
            {
                id: 8,
                name: 'Туники',
                path: '/tunics'
            },
            {
                id: 9,
                name: 'Худи, свитшоты',
                path: '/hoodies'
            },
            {
                id: 10,
                name: 'Блузы',
                path: '/blouses'
            },
            {
                id: 11,
                name: 'Джемперы',
                path: '/jumpers'
            },
            {
                id: 12,
                name: 'Свитеры',
                path: '/sweaters'
            },
            {
                id: 13,
                name: 'Верхняя одежда',
                path: '/outerwear'
            },
            {
                id: 14,
                name: 'Леггинсы',
                path: '/leggings'
            },
            {
                id: 15,
                name: 'Брюки',
                path: '/trousers'
            },
            {
                id: 16,
                name: 'Джинсы',
                path: '/jeans'
            },
            {
                id: 17,
                name: 'Сарафаны',
                path: '/sundresses'
            },
            {
                id: 18,
                name: 'Платья',
                path: '/dresses'
            },
            {
                id: 19,
                name: 'Юбки',
                path: '/skirts'
            },
            {
                id: 20,
                name: 'Костюмы',
                path: '/costumes'
            },
            {
                id: 21,
                name: 'Домашняя одежда',
                path: '/home-clothes'
            },
            {
                id: 22,
                name: 'Головные уборы',
                path: '/headwear'
            },
            {
                id: 23,
                name: 'Комплекты',
                path: '/kits'
            },
        ],
    },
    reducers: {},
})

export const {increment, decrement, incrementByAmount} = CategoriesListSlice.actions

export default CategoriesListSlice.reducer
