const gallery = document.getElementById('gallery');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1546447147-3fc2b8181a74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    likes: 10
  },
  {
    url: 'https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    likes: 5
  },
  {
    url: 'https://images.unsplash.com/photo-1598133893847-a3b6858156d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    likes: 5
  },
  {
    url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    likes: 8
  },
  {
    url: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    likes: 4
  },
  {
    url: 'https://images.unsplash.com/photo-1555325084-b068599743c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    likes: 7
  },
  {
    url: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80',
    likes: 3
  },
  {
    url: 'https://images.unsplash.com/photo-1599744615638-804deec726e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    likes: 6
  }
];

function displayImages() {
  gallery.innerHTML = '';
  images.forEach((image, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = `Cute Dog ${index + 1}`;
    const likes = document.createElement('div');
    likes.className = 'likes';
    likes.innerHTML = `
      <span>${image.likes} likes</span>
      <button class="like-btn">Like</button>
    `;
    imgContainer.appendChild(img);
    imgContainer.appendChild(likes); 
    gallery.appendChild(imgContainer);
  });
}

displayImages();

const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    images[index].likes ++;
    displayImages();
  });
});

const imageElements = document.querySelectorAll('.gallery img');

imageElements.forEach(image => {
  image.addEventListener('click', (event) => {
   // event.stopPropagation();
    const likes = parseInt(image.getAttribute('data-likes')) || 0;
    
    const newLikes = likes++;
    image.setAttribute('data-likes', newLikes);
    
    image.nextElementSibling.textContent = `${newLikes} likes`;
  }, { once: true });
});



