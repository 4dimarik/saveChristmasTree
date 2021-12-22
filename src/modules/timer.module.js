import Modal from "./modal.module";

export default class Timer extends Modal {
  constructor() {
    super();

    this.create();
    this.addContent();
  }

  addContent() {
    //this.modal.classList.add("modal_area__music");
    this.modal
      .querySelector(".sct-card__content")
      .insertAdjacentHTML(
        "afterbegin",
        '<h5 class="sct-card__title">До Нового года осталось</h5>'
      );

    this.modal.querySelector("*[data-btn='close_modal']").dataset.module =
      "timer";
  }
}

//${numeralsWithNouns(hours, ['час', 'часа', 'часов'])}

// const getDateTimeData = () => {
//     let date = new Date();
//     return {
//         year: date.getFullYear(),
//         month: date.getMonth() + 1,
//         monthLong: (() => {
//             let month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
//             return month.substring(0, 1).toUpperCase() + month.substring(1, month.length - 1).toLowerCase() + 'я';
//         })(),
//         weekDay: (() => {
//             let weekDay = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date);
//             return weekDay.substring(0, 1).toUpperCase() + weekDay.substring(1).toLowerCase();
//         })(),
//         day: date.getDate(),
//         hours: date.getHours(),
//         minutes: date.getUTCMinutes(),
//         seconds: date.getUTCSeconds(),
//     };
// };
