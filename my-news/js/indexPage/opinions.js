const opinions = `
  <a href="">
    <div class="opinions-card">
      <h5></h5>
      <div class="user-info">
        <img src="" alt="...">
        <span></span>
      </div>
    </div>
  </a>
`;

class Opinions extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = opinions;
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('h5').innerHTML = this.getAttribute("text")
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))
    this.querySelector('span').innerHTML = this.getAttribute("user-name")
  }

}

window.customElements.define("my-opinion", Opinions); 