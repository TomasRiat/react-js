import products from "../data/data";

function getItems(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export default getItems; 