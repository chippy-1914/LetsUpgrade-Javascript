 
window.onload=function(){
    //declaring object
    let initialbus=[]; 
    if(localStorage.getItem("initialbus") == null) {
        let stringbuses=JSon.stringify(initialbus);
        localStorage.setItem("initialbus",initialbus);
        console.log(stringbuses);
      }
    
};

//display functionality
function display(array=undefined){
    let array1;
    if (array == undefined) {
        array1 = JSON.parse(localStorage.getItem("initialbus"));
      } else {
        array1 = array;
      }
    let tabledata="";

    array1.forEach(function (bus,index){ 
    let thisrow=  `<tr>
                  <td>${bus.name}</td>
                  <td>${bus.source}</td>
                  <td>${bus.destination}</td>
                  <td>${bus.number}</td>
                  <td>${bus.passenger}</td>
                  </tr>`;
    tabledata+=thisrow;
});
document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
}


//add functionality
function addbus(e){
    e.preventDefault();
    let bus={};
    let name=document.getElementById("addname").value;
    let source=document.getElementById("addsource").value;
    let destination=document.getElementById("adddestination").value;
    let number=document.getElementById("addnumber").value;
    let passenger=document.getElementById("addpassenger").value;
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=Number(number);
    bus.passenger=Number(passenger);

    
    

    let newbus = JSON.parse(localStorage.getItem("initialbus"));
    newbus.push(bus);
    localStorage.setItem("initialbus", JSON.stringify(newbus));
    let newbus1 = JSON.parse(localStorage.getItem("initialbus"));
    display(newbus1);

}

display();
//Search functionality
function searchbus(){
    let initialbus= JSON.parse(localStorage.getItem("initialbus"));
    let svalue=document.getElementsByClassName("search")[0].value;
    let found = initialbus.filter(function (bus) {
        return (
          bus.source.toUpperCase().indexOf(svalue.toUpperCase()) != -1 || bus.destination.toUpperCase().indexOf(svalue.toUpperCase()) != -1
        );
      });
    display(found);
}