const sideArticle = `
<a href="" class="article-link">
  <div class="row">
    <div class="col-5">
      <img src="" alt="">
    </div>
    <div class="col-7">
      <div class="article-text">
        <span class="article-category"></span>
        <h5 class="article-title"></h5>
        <P></P>
      </div>
    </div>
  </div>
</a>
`;

class SideArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = sideArticle;
    this.querySelector('span').innerHTML = this.getAttribute("category")
    this.querySelector('h5').innerHTML = this.getAttribute("text")
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))

    if (this.getAttribute('excerpt')) {
      this.querySelector('p').innerHTML = this.getAttribute("excerpt")
    } else {
      this.querySelector("p").style.display = "none";
    }
  }

}

window.customElements.define("side-article", SideArticle); 