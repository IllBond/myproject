import VARIBLES from "../Components/VARIBLE";

const v = VARIBLES.if;
const i = VARIBLES.items;

let initialState = [

    //Уровень 2
    {
        text: [
            [0, 'Спишь'],
        ],
        img: 'https://www.vybor.biz.ua/site/assets/files/6064/14483.550x470.jpg',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Проснутся'], // [1]
                    [
                        [1, 'Что за?...'],
                        [1, '....'],
                        [1, 'Где я'],
                        [1, 'Очнуся в какой то незнакомой комнате'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                1, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },

    //Уровень 1
    {
        text: [
            [0, 'Комната 1'],
        ],
        img: 'https://kak-eto-sdelano.ru/wp-content/uploads/2017/01/Dekoratsii-dlya-kvesta.jpg',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Выйти из комнаты'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Потянулся к ручке'],
                        [1, 'Открылась...'],
                        [1, 'Хм, коридор с другими дверьми...'],
                        [1, 'И лифтом'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    [i.exp_ExitFirstRoom], //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                4, // [4] LVL
                false, // [5] INVISIBLE
                v.TRUE, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.exp_ExitFirstRoom] // SHOW false or []
                ],
                [
                    ['Выйти из комнаты'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Выше в начало коридора'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                4, // [4] LVL
                v.TRUE, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Осмотреть'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Нашел гаечный ключи'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    [i.exp_G_KAY], //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                v.TRUE, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.exp_G_KAY] // SHOW false or []
                ],
                [
                    ['Взять гаечный ключ'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Нашел гаечный ключи'],
                    ],
                    [],
                ],
                [
                    [i.G_KAY], // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                v.TRUE, // [5] INVISIBLE
                v.TRUE, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
        ]
    },


//Уровень 2
    {
        text: [
            [0, 'Комната 3'],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },

//Уровень 3
    {
        text: [
            [0, 'Комната 4 конец'],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },
    //УРВОЕНЬ 4
    {
        text: [
            [0, 'Коридор начало'],
        ],
        img: 'http://xn----7sblghfj0agdkv4a.xn--80adxhks/upload/000/u3/3d/0d/73d3eaba.jpg',
        options: [
            //////////////////////////
            [
                [
                    v.ALL,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.OTVERTKA, i.PROVODA, i.LIGHTOFF, i.exp_INSTRUKCIYA] // SHOW false or []
                ],
                [
                    ['Вызвать лифт и выйти'], // [1]
                    [
                        [2, 'Вася'],
                        [1, 'Отлично я выбрался. Но что это было?'],
                        [1, 'Но что это было?'],
                        [0, 'Продолжение следует'],
                    ],
                    [
                        [0, 'Ау. Сильно ударило током. Уажется лифт сломан'],
                        [0, 'Так как же мне выйти?'],
                        [0, 'Может найти кого то ?'],
                        [0, 'Или починить лифт самому?'],
                    ],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                -1, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Войти в комнату №1'], // [1]
                    [
                        [2, 'Вася'],
                        [1, 'Я вернулся туда где начал'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                1, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Зайти в комнату №2'], // [1]
                    [
                        [2, 'Вася'],
                        [1, 'Странная комната почему тут ничего нет'],
                        [1, 'Одна коробка и  все'],
                        [0, 'Как вы поняли комната абсолютно пуста, в ней есть лишь одна коробка'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                8, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],
            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.exp_OTVERTKA] // SHOW false or []
                ],
                [
                    ['Зайти в комнату №3'], // [1]
                    [
                        [0, 'Что ж это просто тест '],
                        [0, 'Игра еще не вышла и скорее всего не выйдет '],
                        [0, 'Но если нужно обращайтесь ) Мой инстагарм - ilya_bon '],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                true, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 5
    {
        text: [
            [0, 'Коридор середина'],

        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 6
    {
        text: [
            [0, 'Коридор конец'],

        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 7
    {
        text: [
            [0, 'Комната 4 середина'],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 8
    {
        text: [
            [0, 'Комната 5'],

        ],
        img: 'https://golbis.com/wp-content/uploads/2015/10/5-color4life-1444716091gk48n-520x311.jpg',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    ['Открыть коробку на котором нарисованна отвертка'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Не открывается. Кажется тут гайки'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    v.ONCE, // [7] SPECIAL INVISIBLE
                    [i.G_KAY]
                ]
            ],
            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.G_KAY] // SHOW false or []
                ],
                [
                    ['Открыть коробку на котором нарисованна отвертка !'], // [1]
                    [
                        [2, 'Вася'],
                        [0, 'Отлично тут лежит отвертка'],
                    ],
                    [],
                ],
                [
                    [i.OTVERTKA], // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                v.TRUE, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    true // SHOW false or []
                ],
                [
                    ['Выйти в коридор'], // [1]
                    [
                        [0, 'Коридор с лифтом'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                4, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    v.ALL, // [7] SPECIAL INVISIBLE
                    [i.OTVERTKA]
                ]
            ],

            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.OTVERTKA] // SHOW false or []
                ],
                [
                    ['Выйти в коридор'], // [1]
                    [
                        [0, 'Коридор с лифтом'],
                        [2, 'Вася'],
                        [1, 'Стоп что это за '],
                        [1, 'Откуда здесь дверт. ее раньеше не было?'],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    [i.exp_OTVERTKA], //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                4, // [4] LVL
                v.TRUE, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    v.TRUE, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 9
    {
        text: [
            [0, 'Комната 3'],
            [1, ''],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.ONCE,  // [0] v.TRUE or v.ALL or v.ONCE
                    [i.exp_OTVERTKA] // SHOW false or []
                ],
                [
                    ['Войти в комнату 3'], // [1]
                    [
                        [2, 'Что ж это просто тест '],
                        [2, 'Игра еще не вышла и скорее всего не выйдет '],
                        [2, 'Но если нужно обращайтесь ) Мой инстагарм - ilya_bon '],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                i.TRUE, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 10
    {
        text: [
            [0, 'Комната 7'],
            [1, ''],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    },


//Уровень 11
    {
        text: [
            [0, 'Комната 4 конец'],
            [1, ''],
        ],
        img: ' *** ',
        options: [
            //////////////////////////
            [
                [
                    v.TRUE,  // [0] v.TRUE or v.ALL or v.ONCE
                    false // SHOW false or []
                ],
                [
                    [''], // [1]
                    [
                        [0, ''],
                    ],
                    [],
                ],
                [
                    false, // [2] добавить предмет или предметы
                    false, //добавить опыт или опыты
                    false, // забать массив с опытами
                ],
                false, // [3] DMG
                false, // [4] LVL
                false, // [5] INVISIBLE
                false, // [6] HIDE
                [
                    false, // [7] SPECIAL INVISIBLE
                    false
                ]
            ],

        ]
    }
]
const levelReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default levelReducer