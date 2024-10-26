let productList = document.querySelector(".productList");
let cartList = document.querySelector(".cartList");
let totalCost = document.querySelector(".totalCost");

let totalCount = 0;

let totalCount_row = document.createElement("tr");
let totalText = document.createElement("td");
let total = document.createElement("td");

totalText.innerText = "Total :";
total.innerText = totalCount;

totalCount_row.appendChild(totalText);
totalCount_row.appendChild(total);

totalCost.appendChild(totalCount_row);

function displayProducts(){
    let product = Products.forEach((element) => {
        // console.log(element);
        let initialCount = 0;
        let new_row = document.createElement("tr");
        let product_name = document.createElement("td");
        let product_cost = document.createElement("td");
        let subStractBtn = document.createElement("td");
        let count = document.createElement("td");
        let addBtn = document.createElement("td");

        product_name.innerText = element.name;
        product_cost.innerText = element.price;
        subStractBtn.innerText = "-";
        count.innerText = initialCount;
        addBtn.innerText = "+";

        new_row.appendChild(product_name);
        new_row.appendChild(product_cost);
        new_row.appendChild(subStractBtn);
        new_row.appendChild(count);
        new_row.appendChild(addBtn);

        productList.appendChild(new_row);

        let new_row1 = document.createElement("tr");
        let product_name1 = document.createElement("td");
        let product_cost1 = document.createElement("td");
        let multi = document.createElement("td");
        let addBtn1 = document.createElement("td");

        multi.innerText = "x";
        product_name1.innerText = element.name;
        product_cost1.innerText = element.price;

        new_row1.appendChild(product_name1);
        new_row1.appendChild(addBtn1);
        new_row1.appendChild(multi);
        new_row1.appendChild(product_cost1);

        addBtn.addEventListener("click", addProducts);
        function addProducts(){
            initialCount ++;
            count.innerText = initialCount;
            addBtn1.innerText = initialCount;
            if (!cartList.contains(new_row1)) {
                cartList.appendChild(new_row1);
            }
            totalCount += element.price;
            total.innerText = totalCount;
        }

        subStractBtn.addEventListener("click", removeProducts);
        function removeProducts(){
            if(initialCount > 0){
                initialCount --;
                count.innerText = initialCount;
                addBtn1.innerText = initialCount;
                if(initialCount === 0 && cartList.contains(new_row1)){
                    cartList.removeChild(new_row1);
                }
            }
            totalCount -= element.price;
            total.innerText = totalCount;
        }
        
        total.innerText = totalCount;
        
    });
}

window.addEventListener("load", displayProducts);