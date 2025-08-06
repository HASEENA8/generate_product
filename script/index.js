const productContainer = document.querySelector('#displayProduct');

async function getProduct() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    generateProduct(data.products);
}

function handleFormSubmit(event) {
    event.preventDefault();
    getProduct();  
}

document.querySelector('#product-form').addEventListener("submit", handleFormSubmit);

function generateProduct(data) {
    productContainer.innerHTML = '';
    const index = Math.floor(Math.random() * data.length);
    const product = data[index];

    const productTitle = document.createElement('h1');
    productTitle.innerText = product.title;
    productTitle.classList.add('product-title');

    const productImage = document.createElement('img');
    productImage.src = product.thumbnail;
    productImage.alt = product.title;
    productImage.classList.add('product-image');

    const descriptionHeading = document.createElement('h2');
    descriptionHeading.innerText = 'Description:';

    const descriptionPara = document.createElement('p');
    descriptionPara.innerText = product.description;

    const moreInfoBtn = document.createElement('button');
    moreInfoBtn.innerText = 'More Info';
    moreInfoBtn.classList.add('more-info-btn');

    const moreInfoDiv = document.createElement('div');
    moreInfoDiv.style.display = 'none';
    moreInfoDiv.innerHTML = `
        <p><strong>💰 Price:</strong> $${product.price}</p>
        <p><strong>⭐ Rating:</strong> ${product.rating}</p>
        <p><strong>🏷️ Brand:</strong> ${product.brand}</p>
        <p><strong>📦 Category:</strong> ${product.category}</p>
    `;

    moreInfoBtn.addEventListener('click', () => {
        moreInfoDiv.style.display = moreInfoDiv.style.display === 'none' ? 'block' : 'none';
    });

    productContainer.append(productTitle);
    productContainer.append(productImage);
    productContainer.append(descriptionHeading);
    productContainer.append(descriptionPara);
    productContainer.append(moreInfoBtn);
    productContainer.append(moreInfoDiv);
}
