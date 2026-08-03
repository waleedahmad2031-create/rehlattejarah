// sort.js

export function sortProducts(products, type){

    if(type === "new"){
        return products.sort((a,b)=>{
            return b.createdAt - a.createdAt;
        });
    }


    if(type === "cheap"){
        return products.sort((a,b)=>{
            return Number(a.price) - Number(b.price);
        });
    }


    if(type === "expensive"){
        return products.sort((a,b)=>{
            return Number(b.price) - Number(a.price);
        });
    }


    return products;
}
