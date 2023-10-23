const latestNewsRight = `
  <a href="" class="article-link">
    <img src="" alt="...">
    <div class="card-text mt-3">
      <span class="article-category"></span>
      <h5 class="article-title"></h5>
      <p></p>
    </div>
  </a>
`;

const latestNewsSide = `
<a href="" class="article-link">
  <div class="row">
    <div class="col-sm-6">
      <img src="" alt="...">
    </div>
    <div class="col-sm-6">
      <div class="card-text mt-3">
        <span class="article-category"></span>
        <h5 class="article-title"></h5>
      </div>
    </div>
  </div>
</a>
`;

const latestNewsBottom = `
<div>
  <a href="" class="article-link">
    <img src="" alt="...">
    <div class="card-text mt-3 mb-3">
      <span class="article-category"></span>
      <h5 class="article-title"></h5>
    </div>
  </a>
</div>
`;

////////////////////////////////////////

class RightArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = latestNewsRight;
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))
    this.querySelector('span').innerHTML = this.getAttribute("category")
    this.querySelector('h5').innerHTML = this.getAttribute("text")
    this.querySelector('p').innerHTML = this.getAttribute("excerpt")
  }
}
window.customElements.define("right-article", RightArticle);

//////////////////////////////////////

class TopArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = latestNewsSide;
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))
    this.querySelector('span').innerHTML = this.getAttribute("category")
    this.querySelector('h5').innerHTML = this.getAttribute("text")
  }
}
window.customElements.define("top-article", TopArticle);

//////////////////////////////////////

class BottomArticle extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = latestNewsBottom;
    this.querySelector('a').setAttribute("href", this.getAttribute("href"))
    this.querySelector('img').setAttribute("src", this.getAttribute("src"))
    this.querySelector('span').innerHTML = this.getAttribute("category")
    this.querySelector('h5').innerHTML = this.getAttribute("text")
  }
}
window.customElements.define("bottom-article", BottomArticle);

/////////////////////////////////////
