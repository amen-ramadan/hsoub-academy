import { API_URL } from '../urls.js';

console.log(API_URL)
async function sliderFetch() {
  let res = await fetch(API_URL + 'slider');
  let data = await res.json();

  data.map(slide => {
    const el = document.createElement('slider-component');

    el.setAttribute("src", slide.img_uri)
    el.setAttribute('text', slide.title)
    el.setAttribute("href", slide.link)

    document.getElementById("carousel-inner").appendChild(el)
  })

  let slides = document.getElementsByClassName("carousel-item");
  slides[0].classList.add("active");
}

async function sideHeaderArticleFetch() {

  let res = await fetch(API_URL + 'header-articles');
  let data = await res.json();

  data.map(article => {
    const el = document.createElement('side-article');

    el.setAttribute('text', article.title)
    el.setAttribute('src', article.img_uri)
    el.setAttribute('href', article.link)
    el.setAttribute('category', article.category)

    document.getElementById("header-articles").appendChild(el)
  })

}



async function newsArticleFetch() {

  let res = await fetch(API_URL + 'news');
  let data = await res.json();

  data.map(article => {
    const el = document.createElement('article-component');

    el.setAttribute('text', article.title)
    el.setAttribute('src', article.img_uri)
    el.setAttribute('href', article.link)
    el.setAttribute('category', article.category)
    el.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mt-4")

    document.getElementById("news").appendChild(el)
  })

}



async function mostReadCardFetch() {

  let res = await fetch(API_URL + 'most-read');
  let data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      const el = document.createElement('most-read-card');

      el.setAttribute('title', data[i].title)
      el.setAttribute('src', data[i].img_uri)
      el.setAttribute('href', data[i].link)
      el.setAttribute('excerpt', data[i].paragraph)
      el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('LL'))

      document.getElementById("most-read").appendChild(el)
    }
    else {
      const el = document.createElement('big-most-read-card');

      el.setAttribute('title', data[i].title)
      el.setAttribute('src', data[i].img_uri)
      el.setAttribute('href', data[i].link)
      el.setAttribute('datetime', moment(parseInt(data[i].date)).format('dddd') + ', ' + moment(parseInt(data[i].date)).format('LL'))

      document.getElementById("most-read").appendChild(el)
    }
  }
}




async function opinions() {

  let res = await fetch(API_URL + 'opinion-articles');
  let data = await res.json();

  data.map(opinion => {
    const el = document.createElement('my-opinion');

    el.setAttribute('href', opinion.link)
    el.setAttribute('text', opinion.title)
    el.setAttribute('src', opinion.user_uri)
    el.setAttribute('user-name', opinion.user_name)
    el.classList.add("col-lg-3", "col-md-4", "col-sm-6")


    document.getElementById("opinions").appendChild(el)
  })

}

///////////////////////////////////////////////////////

async function latestNewsArticle() {

  let res = await fetch(API_URL + 'latest-news');
  let data = await res.json();

  for (let i = 0; i < data.length; i++) {

    // console.log(data[i].position);

    if (data[i].position == "right") {
      const el = document.createElement('right-article');

      el.setAttribute('text', data[i].title)
      el.setAttribute('src', data[i].img_uri)
      el.setAttribute('href', data[i].link)
      el.setAttribute('excerpt', data[i].paragraph)
      el.setAttribute('category', data[i].category)

      document.getElementById("firstArticle").appendChild(el)

    }
    else if (data[i].position == "bottom") {
      const el = document.createElement('bottom-article');

      el.setAttribute('text', data[i].title)
      el.setAttribute('src', data[i].img_uri)
      el.setAttribute('href', data[i].link)
      el.setAttribute('category', data[i].category)
      el.classList.add("col-sm-6")

      document.getElementById("latestNewsBottom").appendChild(el)

    }
    else if (data[i].position == "side") {
      const el = document.createElement('top-article');

      el.setAttribute('text', data[i].title)
      el.setAttribute('src', data[i].img_uri)
      el.setAttribute('href', data[i].link)
      el.setAttribute('category', data[i].category)

      document.getElementById("latestNewsSide").appendChild(el)

    }
  }
}


///////////////////////////////////////////////////////


sliderFetch();
sideHeaderArticleFetch();
newsArticleFetch();
mostReadCardFetch();
opinions();
latestNewsArticle();