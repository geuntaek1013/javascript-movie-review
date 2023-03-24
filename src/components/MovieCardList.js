import { $ } from '../utils/Dom';
import { MOVIE_LiST_ITEM } from '../constant/variables';
export default class MovieCardList extends HTMLElement {
  #movieList = [];

  get header() {
    return this.getAttribute('header');
  }

  connectedCallback() {
    this.innerHTML = /*html*/ `
        <h2>${this.header}</h2>
        <ul id="movie-list" class="item-list">
        </ul>
        <skeleton-list class="none"></skeleton-list>
        `;
  }

  setMovieList(movieList) {
    this.#movieList = movieList;
    const moreButtonElement = $('more-button');
    if (this.#movieList.length < MOVIE_LiST_ITEM.MAX_NUMBER)
      moreButtonElement.classList.toggle('none');

    const movieListElement = $('#movie-list');
    this.#movieList.forEach((item) => {
      movieListElement.insertAdjacentHTML(
        'beforeend',
        `<movie-card title='${item.title}' poster='${item.poster}' rating='${item.rating}'></movie-card>`,
      );
    });
  }

  toggleSkeletonList() {
    const $skeletonList = $('skeleton-list');
    $skeletonList.classList.toggle('none');
  }
}

customElements.define('card-list', MovieCardList);
