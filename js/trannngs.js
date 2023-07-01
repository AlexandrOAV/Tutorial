const divEl = document.querySelector('.js-cart');
divEl.addEventListener('click', openModal);
const URL = 'https://books-backend.p.goit.global/books/'
const objShop = {
  // 'Amazon': '<img src="./img/amazon.png" alt="logo Amazon" width="62" height="19"></img>',
  'Amazon': '<svg class="svg-shop" width="64" height="18"> <use href="./images/amazon.svg"></use></svg>',
  'Apple Books':'<img src="./img/apple.png" alt="logo Amazon" width="62" height="19"></img>',
  'Barnes and Noble': '<img src="./img/baren-nobel.png" alt="logo Barnes and Noble" width="33" height="33"></img>',
  'Books-A-Million': '<img src="./img/books-a-million.png" alt="logo Books A Million" width="62" height="28"></img>',
  'Bookshop': '<img src="./img/book-shop.png" alt="logo Bookshop" width="33" height="33"></img>',
  'IndieBound': '<img src="./img/india-book.png" alt="logo Indie Bound" width="35" height="28"></img>',
};


async function getInfoAboutBook(bookId) {
    const response = await fetch(`${URL}${bookId}`);
    const dataRespons = await response.json();
  const bookObj = {
    img: dataRespons.book_image,
    bookName: dataRespons.list_name,
    author: dataRespons.author,
    description: dataRespons.description,
    shops:dataRespons.buy_links,
  }
  console.log(bookObj.shops)
    return bookObj;
};
function getImeges(name) {
  if (name in objShop) {
    const image = objShop[name];
    return image;
  } else return '';
};
async function addConten(bookId) {
  // let pictur = '';
  const bookObj=  await getInfoAboutBook(bookId)
  const shopsName = bookObj.shops.map(({ name, url }) => {
   const pictur= getImeges(name);
    return `<li class="item item-book"><a href="${url}" class="link link-image">${pictur}
    </a></li>`
  }).join('\n');
  

  return ` <div class="container-modal js-modal">
      <button type='button' class="close-button">
      <svg class="close-svg" width="24" height="24">
                    <use href="./img/sprite.svg#icon-close"></use>
                  </svg>
                  </button>
        <div class="image-block">
     <img src="${bookObj.img}" alt="image book ${bookObj.bookName}" width="287" height="408"></img> 
      </div>
      <h2 class="name-book">${bookObj.bookName}</h2>
     <p class="text-author">${bookObj.author}</p>
     <p class="text-description">${bookObj.description}</p>
     <ul class="list shop-list">${shopsName}</ul>
    </div>
  `
}

function closeModalEscape(instance) {
     function eventHandler(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
    document.addEventListener("keydown", event => {
    if (event.key !== 'Escape') {
        return
      }
  document.removeEventListener("keydown", eventHandler); 
      instance.close();
});}
async function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  const instance = basicLightbox.create(await addConten('643282b1e85766588626a085'), {
    onShow: () => { document.addEventListener("keydown", closeModalEscape(instance)); },
    onClose: () => { document.removeEventListener("keydown", closeModalEscape(instance))},
  });
   instance.element().querySelector('.close-button').onclick = instance.close
  instance.show();

  // console.dir(event.target)
}


