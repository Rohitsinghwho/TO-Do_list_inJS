let tablebody= document.getElementById('tablebody');
 add= document.getElementById("additem");
 
 
 //Pushing into local Storage
 function Getandupdate(){
     //gettting the value of title and descripiton 
     tit=document.getElementById('title').value;
     des=document.getElementById("description").value;
     //checking if any item is present in the local storage
     if(localStorage.getItem('itemsJson')==null){
        console.log("updating list");
        //intializing an empty array to push element
        itemsToPush=[];
        itemsToPush.push([tit,des]);
        //setting item to local storage with 'itemsJson' and strings array
        localStorage.setItem('itemsJson',JSON.stringify(itemsToPush));
    }
    else{
        //if items are present then...
        itemToPushString= localStorage.getItem('itemsJson');
        itemsToPush= JSON.parse(itemToPushString);
        itemsToPush.push([tit,des]);
        localStorage.setItem('itemsJson',JSON.stringify(itemsToPush));
        
    }
  
    update();
}
//Pushing Element to the Table
    function update(){
        if(localStorage.getItem('itemsJson')==null){
          
            //intializing an empty array to push element
            itemsToPush=[];
            //setting item to local storage with 'itemsJson' and strings array
            localStorage.setItem('itemsJson',JSON.stringify(itemsToPush));
        }
        else{
            //if items are present then...
            itemToPushString= localStorage.getItem('itemsJson');
            itemsToPush= JSON.parse(itemToPushString);
        }
    let str=" ";
    itemsToPush.forEach((element,index) => {
        str +=`
        <tr>
        <th scope="row" id="sno">${index+1}</th>
        <td id="itemtitle">${element[0]}</td>
        <td id="itemdescription">${element[1]}</td>
        <td><button class="btn btn-primary btn-sm "onclick="deleted(${index})">Delete</button></td>
      </tr>`;
    });
    tablebody.innerHTML=str;
}

 
 add.addEventListener("click",Getandupdate);
 update();
 //Deleting element
   function deleted(itemIndex){
    console.log("item deleting at",itemIndex+1);
    itemToPushString= localStorage.getItem('itemsJson');
    itemsToPush= JSON.parse(itemToPushString);

    itemsToPush.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemsToPush));
    update();
   }
//clear the list
function clearList(){
   localStorage.clear();
  
   update();
}

let ti= document.getElementsByTagName('title');
ti.innerHTML="TO-DO-LIST"
