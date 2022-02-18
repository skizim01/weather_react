import {dialogsReducer} from "../redusers/dialogsReducer";
export const store = {
    _state:{
        items : [
            {
                icon_id: 'temp',
                name: 'Температура',
                value: '20° - ощущается как 17°',
            },
            {
                icon_id: 'pressure',
                name: 'Давление',
                value: '765 мм ртутного столба - нормальное',
            },
            {
                icon_id: 'precipitation',
                name: 'Осадки',
                value: 'Без осадков',
            },
            {
                icon_id: 'wind',
                name: 'Ветер',
                value: '3 м/с юго-запад - легкий ветер',
            },
        ],
        days :[
            {
                day: 'Сегодня',
                day_info: '28 авг',
                icon_id: 'sun',
                temp_day: '+18',
                temp_night: '+15',
                info: 'Облачно',
            },
            {
                day: 'Завтра',
                day_info: '29 авг',
                icon_id: 'small_rain_sun',
                temp_day: '+18',
                temp_night: '+15',
                info: 'небольшой дождь и солнце',
            },
            {
                day: 'Ср',
                day_info: '30 авг',
                icon_id: 'small_rain',
                temp_day: '+18',
                temp_night: '+15',
                info: 'небольшой дождь',
            },
            {
                day: 'Чт',
                day_info: '28 авг',
                icon_id: 'mainly_cloudy',
                temp_day: '+18',
                temp_night: '+15',
                info: 'Облачно',
            },
            {
                day: 'Пт',
                day_info: '28 авг',
                icon_id: 'rain',
                temp_day: '+18',
                temp_night: '+15',
                info: 'Облачно',
            },
            {
                day: 'Сб',
                day_info: '28 авг',
                icon_id: 'sun',
                temp_day: '+18',
                temp_night: '+15',
                info: 'Облачно',
            },
            {
                day: 'Вс',
                day_info: '28 авг',
                icon_id: 'sun',
                temp_day: '+18',
                temp_night: '+15',
                info: 'Облачно',
            },
        ],
        tabs : [
            {
                value: 'На неделю',
            },
            {
                value: 'На 10 дней',
            },
            {
                value: 'На месяц',
            },
        ],
        Dialogs: {
            dialog: [
                {name: "Stepan", id: 0},
                {name: "Vadim", id: 1},
                {name: "Misha", id: 2}
            ],
            massages: [
                {massage: "dknnfk", id: 1},
                {massage: "dknnfk", id: 2},
                {massage: "dknnfk", id: 2}
            ],
            newMassageText: " "
        },
    },
    get_state(){
        return this._state
    },

    renderCurrentPage() {
        console.log("rerender")
    },
    subscriber(observer) {
        this.renderCurrentPage = observer
    },

    dispatch (action){
        store.get_state().Dialogs = dialogsReducer(store.get_state().Dialogs, action)
        store.renderCurrentPage(store.get_state())
    }
}

