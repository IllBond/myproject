let initialState = [
    //Уровень 0
    {
        text: ['Обучение.'],
        img: 'https://i.ibb.co/PtCf7Gr/Screenshot-1.png',
        options: [
            [
                ['flashlight'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Что бы пройти урвоень нажми СЮДА. начнется уровень 1', // 1 Текст отрисоки
                'Игра началась', // 2 Мысль
                'Что бы кнопка заработала нужен фонарик, найди его', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                1, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['utug'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Что бы попасть в секретный уровень можно нажать сюда', // 1 Текст отрисоки
                'Что ж это тестовый секретный уровень. Тут ничего нет ', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                2, // 8 Перейти на уровень
                true, // 9 // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['flashlight'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Взять утюг', // 1 Текст отрисоки
                'Тяжеленькеий. Ох что это. Когдя я взял утюг открылась секретныя дверь', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                ['utug'], // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                true, // 9 // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                ['utug'], // 11 Скрывать если есть предмет
            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Книжка', // 1 Текст отрисоки
                'Отлично, в книге написано как правильно прыгать. Теперь я смогу прыгать дальше', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                ['superprig'], // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['utug'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Выкинуть утюг', // 1 Текст отрисоки
                'Он был тяжелый', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                ['utug'], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                true, //  9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Ударится головой об стену', // 1 Текст отрисоки
                'Ай, ебанулся', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                -1, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатиящ
                [false], // 11 Скрывать если есть предмет
            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Попить водички', // 1 Текст отрисоки
                'Мм как вкусно', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                1, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатиящ
                [false], // 11 Скрывать если есть предмет
            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Взять фонарик со стола', // 1 Текст отрисоки
                'Отлично положу его в сумку', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                ['flashlight'], // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                ['flashlight'], // 11 Скрывать если есть предмет
            ], ,
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Нож', // 1 Текст отрисоки
                'Отлично положу его в сумку', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                ['sword'], // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                ['sword'], // 11 Скрывать если есть предмет

            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Напасть на бомжа', // 1 Текст отрисоки
                'Ай, он меня ударил', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                -1, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                ['sword', 'BOMJ'], // 11 Скрывать если есть предмет
            ],
            [
                ['sword'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Напасть на бомжа с ножом', // 1 Текст отрисоки
                'Вот так, убил его. Хм из него выпал банан', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                ['banan'], // 4 Добавить предмет ?
                ['BOMJ'], // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                true, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                ['BOMJ'], // 11 Скрывать если есть предмет
            ],
        ]
    },
    //Уровень 1
    {
        text: ['Зашел в странную комнату в которорой отверстие для банана, жесть'],
        img: 'https://i.ibb.co/PF3NxC6/Screenshot-2.png',
        options: [
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Вернутся в комнату обучения', // 1 Текст отрисоки
                'Верунлся, ого', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                '0', // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['banan'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Вставить банан', // 1 Текст отрисоки
                'Вставил , из щели в стене выпала клубника', // 2 Мысль
                'Не могу вставить банан, у меня его нет', // 3 Если не хватает предмета то покажет это'Что о не так',
                ['stawbery'], // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                ['banan'], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Хм стоит какой то ОГР, похоже это главный злодей. Напасть него голыми руками?', // 1 Текст отрисоки
                'ай ебать. Он меяня побил', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                -1, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['stawbery'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Хм стоит какой то ОГР, похоже это главный злодей. Кинуть в огра клубнику??', // 1 Текст отрисоки
                'ой он здох. Кажется у него была Аллергия на клубнику', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                ['stawbery'], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                3, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],

            // ["bag.flashlight", 'Включить фонарик', 'И что должно произойти?',
            //     false, false, false],
            // // [bag.flashlight, 'Включить фонарик', 'И что должно произойти?', false, false, false],
            // [true, 'Одется', 'Я и не заметил что был совсем без одежды, что то точно не так, не помню что бы ложился голый',
            //     false, 'clothes', false], //bag.clothes,
            // ["bag.clothes", 'Открыть дверь и выйти из комнаты', 'Что за херня, я что все еще сплю?',
            //     false, false, 2],
            // [bag.clothes, 'Открыть дверь и выйти из комнаты', 'Что за херня, я что все еще сплю?', false, false, 2],
        ]
    },
    //Уровень 2
    {
        text: ['Какой то бонусный уровень. тут тупо, что за комната?'],
        img: 'https://i.ibb.co/j6D6zfp/Screenshot-3.png',
        options: [
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Какой то элексир, может выпить его?', // 1 Текст отрисоки
                'О прикольно себя чувствую', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                [false], // 4 Добавить предмет ?
                ['elex1'], // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                2, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            [
                ['elex1'], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'Перейти в следующую комнату', // 1 Текст отрисоки
                'Странно как только вышел, дверь сзади исчезла', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                [false], // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                1, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                true, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
            ],
            // [!bag.flashlight, 'Шагнуть в темноту', 'Ау что меня ударило...', true, 'is_flashlight', false], // ОТНЯТЬ ! ЖИЗНЬ
            // [bag.is_flashlight, 'Вернутся за фонарем', 'Отлично, нужно быть внимательнее', false, 'flashlight', false],
            // [bag.flashlight, 'Включить фонарик и шагнуть в темноту', 'Переход на новый уровень', false, false, 3],
            // ["!bag.flashlight", 'Шагнуть в темноту', 'Ау что меня ударило...', true, 'is_flashlight', false], // ОТНЯТЬ ! ЖИЗНЬ
            // ["bag.is_flashlight", 'Вернутся за фонарем', 'Отлично, нужно быть внимательнее', false, 'flashlight', false],
            // ["bag.flashlight", 'Включить фонарик и шагнуть в темноту', 'Переход на новый уровень', false, false, 3],
            // [true, 'Осмотреть комнату еще раз', 'Кажется ничего нет, но все какое то не естественное', false, false, false],
            // [true, 'Обдумать что происходит', 'У меян плохое предчуствие, я как будто сплю. Ничего не помню что было вчера. Меня тошнит. Не по себе', false, false, false],
        ]
    },
    //Уровень 3
    {
        text: ['Полная версия будет доступна после полной оплаты. Звонить +380956676395'],
        img: 'https://i.ibb.co/DwZ3501/Screenshot-4.png',
        options: [
            [
                [true], // 0 Предмет или элемент опыта необходимый в рюкзаке для отрисовки
                'В общем это все... Извините. нажмите что бы поддержать автора', // 1 Текст отрисоки
                'Переводить денбги на номер 123487498', // 2 Мысль
                '', // 3 Если не хватает предмета то покажет это'Что о не так',
                false, // 4 Добавить предмет ?
                false, // 5 Добавить игрвоой опыт
                [false], // 6 Какой предмет забрать при использовании?
                false, // 7 Нанести урон?
                false, // 8 Перейти на уровень
                false, // 9 Будет не серым а СПРЯТАННМ пока не нейдешь предмет
                false, // 10 Скрыть навсегда после нажатия
                [false], // 11 Скрывать если есть предмет
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