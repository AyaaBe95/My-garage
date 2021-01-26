
"use strict"

var ourForm=document.getElementById('ourForm');
var images=['bmw.png','chevrolet.png','hyundai.png','hia.png','lexus.png','tesla.png','toyota.png'];
var parrentTable=document.getElementById('information');
var clearData = document.getElementById('clearData');
var listArray=[]

function Garage(carName,category,carYear){
    this.carName=carName;
    this.category=category;
    this.carYear=carYear;

    listArray.push(this);

}

Garage.prototype.renderList= function(){

    var rowItem = document.createElement('tr')

    var itemName= document.createElement('td');
    itemName.textContent="Car name: " + this.carName;
    rowItem.appendChild(itemName);


    var itemCategory= document.createElement('td');
    itemCategory.textContent=this.category;
    rowItem.appendChild(itemCategory);


    var img = document.createElement('img');

    for (let index = 0; index < images.length; index++) {

        if (itemCategory== 'BMW'){

        }

     


        
    }

    

    var itemYear= document.createElement('td');
    itemYear.textContent="Model Year: " + this.carYear;
    rowItem.appendChild(itemYear);

    parrentTable.appendChild(rowItem)






}





function submitData(event){
    event.preventDefault();


    var carName=event.target.carName.value;
    var carCategory= event.target.carCategory.value;
    var carYear= event.target.carYear.value;

    var newItems = new Garage (carName,carCategory,carYear);

    newItems.renderList();

    localStorage.setItem('garagcar',JSON.stringify(listArray));

}


function checkList (){

        if (localStorage.getItem('garagcar')){
            var obj=JSON.parse(localStorage.getItem('garagcar'));

            for (let index = 0; index < obj.length; index++) {
                var newObj = new Garage (obj[index].carName,obj[index].category,obj[index].carYear);

                newObj.renderList();
                
            }
        }

    }


    function clearData(){

        localStorage.clear();
        listArray=[];


    }












clearData.addEventListener('submit',clearData);
ourForm.addEventListener('submit',submitData);
checkList();