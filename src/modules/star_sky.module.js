import {random} from "../utils"
import './star_sky.module.css'
export default class StarSky {
    #selector;
    #quantityMin;
    #quantityMax;
    #starSizeMin;
    #starSizeMax;
    #skyContainerClass;
    #starClass;

    /**
     *
     * @param selector
     * @param quantityMin
     * @param quantityMax
     * @param starSizeMin
     * @param starSizeMax
     * @param skyContainerClass
     * @param starClass
     */
    constructor(selector, quantityMin, quantityMax, [starSizeMin, starSizeMax] = [5,15], [skyContainerClass, starClass] = ['sky', 'star']) {
        this.#selector = selector
        this.#quantityMin = quantityMin;
        this.#quantityMax = quantityMax;
        this.#starSizeMin = starSizeMin;
        this.#starSizeMax = starSizeMax;
        this.#skyContainerClass = skyContainerClass;
        this.#starClass = starClass;
        this.sky = document.createElement('div');
    }

    create(){
        let i = 0;
        while (this.#quantityMax - i > this.#quantityMin) {
            const star = document.createElement('div');
            star.classList.add(this.#starClass);
            star.style.cssText = this.getStartTextCss();
            this.sky.append(star);
            i++;
        }
        return this;
    }
    insert(method = 'append'){
        document.querySelector(this.#selector).innerHTML = '';
        document.querySelector(this.#selector)[method](...this.sky.childNodes);
    }
    getContainerSize({clientWidth:width , clientHeight:height }){
        return {width: Math.round(parseInt(width)), height: Math.round(parseInt(height))}
    }
    getStartTextCss(){
        // star.style.opacity = `.${getRandomNumber(1, 9)}`;
        //
        //- +this.#starSizeMax
        const size = random(5, 15);
        let {width, height} = this.getContainerSize(document.querySelector(this.#selector));
        return `width: ${size}px;` +
               `height: ${size}px;` +
                `top: ${random(5, Math.round(height - +this.#starSizeMax))}px;` +
            `left: ${random(5, Math.round(width - +this.#starSizeMax))}px;`;
    }
}