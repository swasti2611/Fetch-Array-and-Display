


async function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                let res = await fetch("https://dummyjson.com/posts");
                let data = await res.json();
                console.log(data.posts);
                tableData1("API1",data.posts)
                resolve(true); // Resolve the promise after fetching and displaying data
            } catch (error) {
                console.log(error);
                reject(error); // Reject the promise if there's an error
            }
        }, 1000);
    });
}

async function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                let res = await fetch("https://dummyjson.com/products");
                let data = await res.json();
                console.log(data.products);
                tableData2("API2", data.products);
                resolve(true); // Resolve the promise after fetching and displaying data
            } catch (error) {
                console.log(error);
                reject(error); // Reject the promise if there's an error
            }
        }, 2000);
    });
}

async function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                let res = await fetch("https://dummyjson.com/todos");
                let data = await res.json();
                console.log(data.todos);
                tableData3("API3", data.todos);
                resolve(true); // Resolve the promise after fetching and displaying data
            } catch (error) {
                console.log(error);
                reject(error); // Reject the promise if there's an error
            }
        }, 3000);
    });
}

// Event listener for the button click
document.getElementById("fetchButton").addEventListener("click", async function() {
    // Start promise chain
    try {
        await PromiseAPI1()
        await PromiseAPI2() // Call PromiseAPI2 after PromiseAPI1 resolves
        await PromiseAPI3() // Call PromiseAPI3 after PromiseAPI2 resolves
        
            console.log("All promises resolved successfully.");
    } catch (error) {
         console.log(error)
    }
         
        
    
}); 
let tBody = document.getElementById("table-Body");
function tableData1(API1,data){
    data.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${API1}</td>
          <td>${item.title}</td>
        `;
        tBody.appendChild(tr);
      });
  

}
function tableData2(API1,data){
    data.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${API1}</td>
          <td>${item.title}</td>
        `;
        tBody.appendChild(tr);
      });
  

}
function tableData3(API1,data){
    data.forEach((item) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td scope="row">${API1}</td>
          <td>${item.todo}</td>
        `;
        tBody.appendChild(tr);
      });
  

}