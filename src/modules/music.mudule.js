import Modal from "./modal.module";

export default class Music extends Modal {
  #player;
  constructor() {
    super();
    this.#player = `
    <iframe
      frameborder="0"
      style="border: none; width: 100%; height: 450px"
      width="100%"
      height="450"
      src="https://music.yandex.ru/iframe/#album/12415851"
      >Слушайте <a href="https://music.yandex.ru/album/12415851">канун нового года</a> —
      <a href="https://music.yandex.ru/artist/171">сборник</a> на Яндекс.Музыке</iframe
    >`;
    this.create();
    this.addContent();
  }

  addContent() {
    this.modal
      .querySelector(".sct-card__content")
      .insertAdjacentHTML("beforebegin", this.#player);
    this.modal.querySelector("*[data-btn='close_modal']").dataset.module =
      "music";
  }
}
