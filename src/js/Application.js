import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    let par = document.createElement("p")
    let el = document.querySelector('#emojis')
    par.textContent = '';
    let ar = this.addBananas()
     //let newPAr = this.emojis.map( el => par.textContent = par.textContent + ' ' + el)
    par.textContent = ar;
    el.appendChild(par);
  }

  addBananas() {
    let newArr = this.emojis.map(el =>  el + ' ' + this.banana);
   return  newArr

  }
}
