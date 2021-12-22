import ModuleModal from "../core/module.modal";
import { numeralsWithNouns } from "../utils";
import DomElement from "../core/dom-element";
import "./timer.css";

export default class Timer extends ModuleModal {
  constructor() {
    super();

    this.setCloseBtn("timer");
    this.addContent();
    this.build(["header", "body", "footer"]);
    setInterval(this.renderDateTime.bind(this), 1000);
  }

  addContent() {
    this.modal.el.classList.add("modal_area__timer");
  }
  getDateTimeData() {
    let date1 = Date.now();
    let date2 = Date.parse("2022-01-01T00:00:00");
    let date = date2 - date1;
    const day = Math.trunc(date / (60 * 60 * 24 * 1000));
    const hours = Math.trunc(
      (date - day * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.trunc(
      (date - day * (1000 * 60 * 60 * 24) - hours * (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.trunc(
      (date -
        day * (1000 * 60 * 60 * 24) -
        hours * (1000 * 60 * 60) -
        minutes * (1000 * 60)) /
        1000
    );
    return {
      day,
      hours,
      minutes,
      seconds,
    };
  }

  renderDateTime() {
    let { day, hours, minutes, seconds } = this.getDateTimeData();

    this.body.el.innerHTML = `<h1>
  До Нового Года ${numeralsWithNouns(day, [
    "остался",
    "осталось",
    "осталось",
  ])}  
  ${day} ${numeralsWithNouns(day, ["день", "дня", "дней"])}
  ${hours} ${numeralsWithNouns(hours, ["час", "часа", "часов"])}
  ${minutes} ${numeralsWithNouns(minutes, ["минута", "минуты", "минут"])}
  ${seconds} ${numeralsWithNouns(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ])} </h1>`;
  }
}
