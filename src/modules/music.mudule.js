import ModuleModal from "../core/module.modal";
import "./music.css";

export default class Music extends ModuleModal {
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
    this.setCloseBtn("music");
    this.addContent();
    this.build(["header", "body", "footer"]);
  }

  addContent() {
    this.modal.el.classList.add("modal_area__music");
    this.content.el.insertAdjacentHTML("afterbegin", this.#player);
    this.body.el.append(this.content.el);
  }
}
