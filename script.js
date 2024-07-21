const galleryItems = [
    { src: 'Landscape.jpg', title: 'Beautiful Landscape', category: 'nature' },
    { src: 'ModernArchitecture.jpg', title: 'Modern Architecture', category: 'architecture' },
    { src: 'Tech Innovation.jpg', title: 'Tech Innovation', category: 'technology' },
    { src: '9b82cfd30e4db69aeb5ddd7e5f1b0e5a.jpg', title: 'Serene Waters', category: 'nature' },
    { src: 'Urban Skyline.jpg', title: 'Urban Skyline', category: 'architecture' },
    { src: 'Technology.jpg', title: 'Digital World', category: 'technology' },
    { src: 'rwanda-lead-.jpg', title: 'Mountain Peak', category: 'nature' },
    { src: 'Interior Design.jpg', title: 'Interior Design', category: 'architecture' },
    { src: 'Smart Device.jpg', title: 'Smart Devices', category: 'technology' },
];

const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.querySelector('.close');

function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.dataset.category = item.category;
    galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.title}">
        <div class="overlay">
            <h3>${item.title}</h3>
            <p>Category: ${item.category}</p>
        </div>
    `;
    galleryItem.addEventListener('click', () => openLightbox(item));
    return galleryItem;
}

function populateGallery() {
    galleryItems.forEach(item => {
        galleryGrid.appendChild(createGalleryItem(item));
    });
}

function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterGallery(button.dataset.filter);
    });
});

function openLightbox(item) {
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.title;
    lightbox.style.display = 'block';
}

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

populateGallery();