import { RandomColors } from "../utils";

export default class ChristmasTree extends HTMLElement {
  #colorChanged = false;
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        .cls-1{fill:#666568;}
        .cls-2{fill:#5b5b5f;}
        .cls-3{fill:#3f6631;}
        .cls-4{fill:#558635;}
        .cls-5{fill:#6e9c3a;}
        .cls-6{fill:#91ba3a;}
        .cls-7{opacity:0.2;}
        .cls-8{fill:#f4ef90;}
        
        circle[class^="cls"] {
          transition-property: opacity;
          transition-duration: 2s;
          transition-timing-function: linear;
          animation: light 5s infinite;
        }
        .cls-8:nth-child(odd) {
            animation-delay: 2s;
        }
        .cls-8:nth-child(even) {
            animation-delay: 3s;
        }
        .light-off .cls-8 {
        animation: none;
        }
        
        @keyframes light {
          5% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230">
        <g id="Слой_2" data-name="Слой 2">
          <g id="layer1">
           <rect class="cls-1" x="63" y="200" width="73" height="30.37" rx="1" ry="1"/>
           <polygon class="cls-2" points="137 201 63 208 63 201 137 201"/>
           <path class="cls-3" d="M96,63,1,193a5,5,0,0,0,4,8H195a5,5,0,0,0,4-8L104,63A5,5,0,0,0,96,63Z"/>
           <path class="cls-4" d="M96,37,19,142a5,5,0,0,0,4,8H176a5,5,0,0,0,4-8L104,37A5,5,0,0,0,96,37Z"/>
           <polygon class="cls-7" points="158 111 34 122 42 111 158 111"/>
           <path class="cls-5" d="M96,19,34,104a5,5,0,0,0,4,8H162a5,5,0,0,0,4-8L104,19A5,5,0,0,0,96,19Z"/>
           <path class="cls-6" d="M96,2,50,65a5,5,0,0,0,4,8h92a5,5,0,0,0,4-8L104,2A5,5,0,0,0,96,2Z"/>
           <polygon class="cls-7" points="144 73 48 84 56 73 144 73"/>
           <polygon class="cls-7" points="167 150 25 160 33 150 167 150"/>
          </g>
          <g id="layer2" class="light-off">
           <circle class="cls-8" cx="38" cy="138" r="2" transform="translate(-90 72) rotate(-47)"/>
           <circle class="cls-8" cx="53" cy="140" r="2" transform="translate(-86 84) rotate(-47)"/>
           <circle class="cls-8" cx="67" cy="131" r="2" transform="translate(-75 91) rotate(-47)"/>
           <circle class="cls-8" cx="76" cy="136" r="2" transform="translate(-76 100) rotate(-47)"/>
           <circle class="cls-8" cx="86" cy="128" r="2" transform="translate(-67 104) rotate(-47)"/>
           <circle class="cls-8" cx="92" cy="136" r="2" transform="translate(-71 111) rotate(-47)"/>
           <circle class="cls-8" cx="103" cy="126" r="2" transform="translate(-60 116) rotate(-47)"/>
           <circle class="cls-8" cx="119" cy="123" r="2" transform="translate(-52 127) rotate(-47)"/>
           <circle class="cls-8" cx="116" cy="132" r="2" transform="translate(-60 128) rotate(-47)"/>
           <circle class="cls-8" cx="136" cy="131" r="2" transform="translate(-53 142) rotate(-47)"/>
           <circle class="cls-8" cx="141" cy="119" r="2" transform="translate(-42 142) rotate(-47)"/>
           <circle class="cls-8" cx="160" cy="128" r="2" transform="translate(-43 159) rotate(-47)"/>
           <circle class="cls-8" cx="57" cy="89" r="2" transform="translate(-31 31) rotate(-24)"/>
           <circle class="cls-8" cx="63" cy="94" r="2" transform="translate(-32 33) rotate(-24)"/>
           <circle class="cls-8" cx="74" cy="89" r="2" transform="translate(-29 37) rotate(-24)"/>
           <circle class="cls-8" cx="82" cy="97" r="2" transform="translate(-32 41) rotate(-24)"/>
           <circle class="cls-8" cx="95" cy="93" r="2" transform="translate(-29 46) rotate(-24)"/>
           <circle class="cls-8" cx="108" cy="100" r="2" transform="translate(-31 52) rotate(-24)"/>
           <circle class="cls-8" cx="121" cy="94" r="2" transform="translate(-27 57) rotate(-24)"/>
           <circle class="cls-8" cx="127" cy="103" r="2" transform="translate(-31 60) rotate(-24)"/>
           <circle class="cls-8" cx="138" cy="98" r="2" transform="translate(-28 64) rotate(-24)"/>
           <circle class="cls-8" cx="149" cy="105" r="2" transform="translate(-30 69) rotate(-24)"/>
           <circle class="cls-8" cx="76" cy="56" r="2" transform="translate(-17 74) rotate(-47)"/>
           <circle class="cls-8" cx="89" cy="60" r="2" transform="translate(-15 85) rotate(-47)"/>
           <circle class="cls-8" cx="100" cy="54" r="2" transform="translate(-7 91) rotate(-47)"/>
           <circle class="cls-8" cx="112" cy="52" r="2" transform="translate(-2 99) rotate(-47)"/>
           <circle class="cls-8" cx="120" cy="45" r="2" transform="translate(6 103) rotate(-47)"/>
           <circle class="cls-8" cx="63" cy="58" r="2" transform="translate(-22 65) rotate(-47)"/>
          </g>
         </g>
     </svg>
    `;
  }
  toggle() {
    this.#colorChanged = !this.#colorChanged;
    this.changeCircleColor(this.#colorChanged);
    this.shadowRoot.querySelector("#layer2").classList.toggle("light-off");
  }
  changeCircleColor(on) {
    console.log("on", on);
    const allCircles = this.shadowRoot.querySelectorAll(".cls-8");
    if (on) {
      allCircles.forEach((circle) => {
        const randomColors = new RandomColors(30);
        circle.style.fill = randomColors.color;
      });
    } else {
      allCircles.forEach((circle) => {
        circle.style = "";
      });
    }
  }
}
window.customElements.define("svg-christmas-tree", ChristmasTree);
