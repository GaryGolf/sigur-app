export const fields = [
    {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Ваше имя',
        rules: 'required|string|between:2,25',
    },{
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Введите фамилию',
        rules: 'required|string|between:2,25',
    },{
        name: 'surname',
        label: 'Отчество',
        placeholder: 'Отчество',
        rules: 'string|between:2,25',
    },{
        name: 'city',
        label: 'Город',
        placeholder: 'Город проживания',
        rules: 'required|string|between:2,25',
    },{
        name: 'birthDate',
        label: 'Дата рождения',
        placeholder: 'Дата рождения',
        rules: 'required|date',
        
    },{
        name: 'sex',
        label: 'пол',
        placeholder: 'пол',
        value: 'male',
        rules: 'required|string|between:1,25',
    },{
        name: 'position',
        label: 'Должность',
        placeholder: 'Жклаемая должность',
        rules: 'required|string|between:3,25',
    },{
        name: 'salary',
        label: 'Зарплата',
        placeholder: 'Желаемая зарплата',
        rules: 'required|integer',
    },{
        name: 'currency',
        label: '$',
        placeholder: 'Валюта зарплаты',
        value: "BTC",
        rules: 'required|string|between:1,25',
    },{
        name: 'about',
        label: 'О себе',
        placeholder: 'Расскажите о себе',
        rules: 'required|string|between:1,12025',
    },{
        name: 'experience',
        label: 'Опыт работы',
        fields: [ {

            name: 0,
            fields: [
 
                {
                    name: 'workStartDate',
                    label: 'Работа',
                    placeholder: 'Должность',
                },
                {
                    name: 'workEndDate',
                    label: 'Работа окончание',
                    placeholder: 'Должность',
                },
                {
                    name: 'workCompany',
                    label: 'Работа',
                    placeholder: 'Должность',
                },
                {
                    name: 'workPosition',
                    label: 'Работа',
                    placeholder: 'Должность',
                },
                {
                    name: 'workDuty',
                    label: 'Работа',
                    placeholder: 'Должность',
                },
            ]
        }
        ],   
        
    }
];


export const currencies = [
    {
        value: 'RUB',
        label: '₽',
    },
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
];

export const sex = [
    {
        value: 'male',
        label: 'муж'
    },
    {
        value: 'female',
        label: 'жен'
    },
]
  

export const experienceFields = [
 
    {
        name: 'workStartDate',
        label: 'Работа',
        placeholder: 'Должность',
    },
    {
        name: 'workEndDate',
        label: 'Работа окончание',
        placeholder: 'Должность',
    },
    {
        name: 'workCompany',
        label: 'Работа',
        placeholder: 'Должность',
    },
    {
        name: 'workPosition',
        label: 'Работа',
        placeholder: 'Должность',
    },
    {
        name: 'workDuty',
        label: 'Работа',
        placeholder: 'Должность',
    },
]

export function addExperience(fields: Array<any>) {
    return fields.map((v: any) => {
        if (v.name != 'experience') return v;
        const name = v.fields.length;
        return ({ ...v, fields: [ ...v.fields,  { name, fields: experienceFields }]})

    })
}

export function forgetExperience(fields: Array<any>) {
    return fields.map((v: any) => {
        if (v.name != 'experience') return v;
        return ({ ...v, fields: []})

    })
}