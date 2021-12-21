class SvgBall extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.innerHTML = /*html*/ `
    <style>
        .cls-1{isolation:isolate;}
        .cls-2,.cls-4,.cls-5,.cls-6,.cls-8{fill:#4b9cbc;}
        .selected .cls-2 {
            fill:red;
            
        }
        .cls-3{fill:#e8c34b;}
        .selected .cls-3{
            fill:white;
            stroke:red;stroke-miterlimit:10;stroke-width:0.25px; }
        .cls-4,.cls-5{mix-blend-mode:multiply;}
        .cls-5,.cls-6,.cls-7{opacity:0.5;}
        .cls-6,.cls-7,.cls-8{mix-blend-mode:screen;}
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <g class="cls-1">
            <g id="Слой_2" data-name="Слой 2">
                <g id="Слой_1-2" data-name="Слой 1">
                    <path class="cls-2" d="M21.9,58.9a30,30,0,1,1,37-20.8,30,30,0,0,1-37,20.8"/>
                    <path class="cls-3" d="M24.8,56.9l-1.2-8.1-5.7,5.9-6.3-1a29.9,29.9,0,0,0,10.3,5.2"/>
                    <path class="cls-3" d="M59.7,33.9h-.2l-1.2-8.1-5.6,5.9-8-1.3,3.8,7.2-3.7,7.2,8-1.4L55.4,46a30,30,0,0,0,3.5-7.9A30.4,30.4,0,0,0,59.7,33.9Z"/>
                    <path class="cls-3" d="M8.5,26.9l7.3-3.7L8.5,19.7,7.2,11.6,4.1,14.9A30.2,30.2,0,0,0,0,29.5l1.7-.3L7.4,35Z"/>

                    <polygon class="cls-3" points="27 25 19 24 23 31 19 38 27 37 33 43 34 35 41 31 34 27 33 19 27 25"/>
                    <polygon class="cls-4" points="24 4 24 9 29 11 24 13 24 17 21 14 16 15 18 11 16 7 21 8 24 4"/>
                    <polygon class="cls-4" points="48 12 49 17 53 19 49 21 48 26 45 22 41 23 43 19 41 15 45 16 48 12"/>
                    <polyline class="cls-4" points="32 56 34 52 32 48 36 48 40 45 40 50 44 52 40 54 40 58"/>
                    <polyline class="cls-4" points="40 58 36 55 32 56"/>
                    <polygon class="cls-4" points="14 37 15 41 19 43 15 45 14 50 11 47 6 48 8 43 6 39 11 40 14 37"/>
                    <path class="cls-5" d="M22,59A30,30,0,0,0,40,2,24,24,0,1,1,3,17L1,22A30,30,0,0,0,22,59"/>
                    <path class="cls-6" d="M40,4l4,2,2,5Z"/>
                    <path class="cls-6" d="M6,29A22,22,0,0,1,6,18L4,23H4Z"/>
                    <path class="cls-6" d="M23,56A27,27,0,0,0,53,16,27,27,0,0,1,4,39,27,27,0,0,0,23,56"/>
                    <g class="cls-7">
                        <ellipse class="cls-8" cx="23" cy="8" rx="6" ry="3" transform="translate(-1 7) rotate(-17)"/>
                        <ellipse class="cls-8" cx="11" cy="15" rx="4" ry="2" transform="translate(-6 9) rotate(-35)"/>
                    </g>
                    <circle class="cls-6" cx="24" cy="22" r="18" transform="translate(-3 39) rotate(-74)"/>
                </g>
            </g>
        </g>
    </svg>
    `;
  }
  get() {
    return this.shadowRoot;
  }
  addClass(name) {
    this.shadowRoot.querySelector("#Слой_1-2").classList.add(name);
  }
  toggleClass(name) {
    this.shadowRoot.querySelector("#Слой_1-2").classList.toggle(name);
  }
}
window.customElements.define("svg-ball", SvgBall);
