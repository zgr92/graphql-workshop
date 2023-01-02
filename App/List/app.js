const appContainer = document.querySelector("#root");
const loadBtn = document.querySelector("#loadBtn");

const getProductsQuery = () => `{
    viewer
    {
        productList
        {
            productID,
            name
        }
    }
}`;

const renderProducts = ({ data }) => {
    const { productList = [] } = data.viewer;

    while (appContainer.firstChild) {
        appContainer.removeChild(appContainer.firstChild);
    }

    const productFragment = document.createDocumentFragment();
    const productsListElement = document.createElement('ul');

    productList.forEach((book) => {
        const booksListItem = document.createElement('li');
        booksListItem.textContent = `${book.productID} - ${book.name}`;
        productsListElement.appendChild(booksListItem);
    });

    productFragment.appendChild(productsListElement);
    appContainer.appendChild(productFragment);
}

const loadProducts = () => {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: getProductsQuery()
        })
    };

    fetch(`http://localhost:3000/northwind`, options)
        .then(res => res.json())
        .then(renderProducts);
}

loadBtn.addEventListener("click", loadProducts)