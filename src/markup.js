export function makeMarkup(images) {
    return images.map(image => {
        const imgCard = 
        `<div class="photo-card">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>${image.likes}</b>
          </p>
          <p class="info-item">
            <b>${image.views}</b>
          </p>
          <p class="info-item">
            <b>${image.comments}</b>
          </p>
          <p class="info-item">
            <b>${image.downloads}</b>
          </p>
        </div>
      </div>`
      gallery.insertAdjacentHTML('beforeend', imgCard)
    }).join('');
}