const article = `
<a href="" class="article-link">
  <img src="" alt="...">
  <div class="article-text mt-3">
    <span class="article-category"></span>
    <h5 class="article-title"></h5>
    <p></p>
  </div>
</a>
`

class ArticleComponent extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = article;
    this.querySelector('span').innerHTML = this.getAttribute("category")
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('h5').innerHTML = this.getAttribute("text")

    if (this.getAttribute('excerpt')) {
      this.querySelector('p').innerHTML = this.getAttribute("excerpt")
    } else {
      this.querySelector("p").style.display = "none";
    }
  }
}

window.customElements.define("article-component", ArticleComponent); 