const appContainer = document.querySelector("#root");
const loadBtn = document.querySelector("#loadBtn");
const priceInput = document.querySelector("#priceInput");

const getProductsQuery = () => `query getPaginatedProducts($price: Float){
    viewer {
        productPagination(
            page: 1,
            perPage: 10,
            filter: {
                categoryID: 1,
                _operators: {
                    unitPrice: {
                        lte: $price
                    }
                }
            },
            sort: UNITPRICE_ASC) {
            count,
            items {
                productID,
                name,
                unitPrice
            },
            pageInfo {
                currentPage,
                perPage,
                pageCount,
                itemCount,
                hasNextPage,
                hasPreviousPage
            }
        }
    }
}`;

const queryVariables = (price) => `
    {
        "price": 10.00
    }
`

const renderProducts = ({ data }) => {
    const { items = [] } = data.viewer.productPagination;

    while (appContainer.firstChild) {
        appContainer.removeChild(appContainer.firstChild);
    }

    const productFragment = document.createDocumentFragment();
    const productsListElement = document.createElement('ul');

    items.forEach((product) => {
        const booksListItem = document.createElement('li');
        booksListItem.textContent = `${product.productID} - ${product.name} - ${product.unitPrice}`;
        productsListElement.appendChild(booksListItem);
    });

    productFragment.appendChild(productsListElement);
    appContainer.appendChild(productFragment);
}

const loadProducts = () => {
    const priceValue = priceInput.value;
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: getProductsQuery(),
            variables: queryVariables(priceValue)
        })
    };

    fetch(`http://localhost:3000/northwind`, options)
        .then(res => res.json())
        .then(renderProducts);
}

loadBtn.addEventListener("click", loadProducts)