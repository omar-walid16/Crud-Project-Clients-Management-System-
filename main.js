var clientsNameInput = document.getElementById("clientsNameInput");
var clientsBudgetInput = document.getElementById("clientsBudgetInput");
var clientsJobInput = document.getElementById("clientsJobInput");
var clientsOrderInput = document.getElementById("clientsOrderInput");
var ordersContainer ;

function addOrder () {

    var order = {

        name : clientsNameInput.value ,
        budget : clientsBudgetInput.value ,
        job : clientsJobInput.value ,
        order : clientsOrderInput.value ,
    }
    ordersContainer.push(order);
    localStorage.setItem("myOrders" , JSON.stringify(ordersContainer));
    clearForm() ;    
    displayOrders (ordersContainer);

}

if (localStorage.getItem("myOrders") !=null)
{
    ordersContainer = JSON.parse(localStorage.getItem("myOrders"))
    displayOrders(ordersContainer);
}
else
{
    ordersContainer = [] ;
}

function searchOrders (searchTerm) {

    var searchResult = [] ;
    for( var i = 0 ; i < ordersContainer.length ; i++ )
    {
        if(ordersContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ==true )
        {
            searchResult.push(ordersContainer[i])
        }

    }
    displayOrders(searchResult);
}

function displayOrders (list) {

    var ordersPack = `` ;

    for ( var i = 0 ; i < list.length ; i++ )
    {
        ordersPack += `
           <tr>
                <td>${i}</td>
                <td>${list[i].name}</td>
                <td>${list[i].budget}</td>
                <td>${list[i].job}</td>
                <td>${list[i].order}</td>
                <td><button onclick="deleteOrders (${i})" class="btn btn-outline-danger btn-sm">Delete</button></td>
            </tr>
        `
    }
    document.getElementById("tableBody").innerHTML = ordersPack ;
}

function deleteOrders(deletedIndex) {

    ordersContainer.splice(deletedIndex,1);
    localStorage.setItem("myOrders",JSON.stringify(ordersContainer));
    displayOrders(ordersContainer);

}

function clearForm() {

    clientsNameInput.value = "" ;
    clientsBudgetInput.value = "" ;
    clientsJobInput.value = "" ;
    clientsOrderInput.value = "" ;

}