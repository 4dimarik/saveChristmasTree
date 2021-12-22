import Modal from "./modal.module";
import "./music.css";

export default class Music extends Modal {
  #player;
  constructor() {
    super();
    this.#player = `
    <iframe
      frameborder="0"
      style="border:none;width:100%;height:450px;"
      width="100%"
      height="450"
      src="https://music.yandex.ru/iframe/#playlist/ya.playlist/1052">
        Слушайте <a href='https://music.yandex.ru/users/ya.playlist/playlists/1052'>Песни на Нoвый год</a> — <a href='https://music.yandex.ru/users/ya.playlist'>Музыкальные подборки</a> на Яндекс.Музыке
      </iframe>`;
    this.create();
    this.addContent();
  }

  addContent() {
    this.modal.classList.add("modal_area__music");
    this.modal
      .querySelector(".sct-card__content")
      .insertAdjacentHTML("afterbegin", this.#player);
    this.modal.querySelector("*[data-btn='close_modal']").dataset.module =
      "music";
  }
}
