//declaring and initializing object
let initialmembers=[
    {
        name:"RM",
        age:26,
        city:"Seoul",
        salary:8000000,
    },
    {
        name:"Suga",
        age:27,
        city:"Daegu",
        salary:9287960000,
    },
    {
        name:"Jungkook",
        age:23,
        city:"Busan",
        salary:586876000,
    },
    {
        name:"V",
        age:24,
        city:"Bisan-dong",
        salary:6161904,
    },
    {
        name:"J-hope",
        age:26,
        city:"Gwangju",
        salary:6748000,
    }
];
//display function
function display(array){
    let tabledata="";

    array.forEach(function (members,index){ 
    let thisrow=  `<tr>
                  <td>${members.name}</td>
                  <td>${members.age}</td>
                  <td>${members.city}</td>
                  <td>${members.salary}</td>
                  <td>
                      <button onclick="deletemember(${index})">Delete</button>
                  </td>
                  </tr>`;
    tabledata+=thisrow;
});
document.getElementsByClassName("tdata")[0].innerHTML=tabledata;
}
//calling display function
display(initialmembers);

//search functionality
function searchmember(){
    let svalue=document.getElementsByClassName("search")[0].value;
    let found = initialmembers.filter(function (members) {
        return (
          members.name.toUpperCase().indexOf(svalue.toUpperCase()) != -1 || members.city.toUpperCase().indexOf(svalue.toUpperCase()) != -1
        );
      });
    display(found);
}


//delete functionality
function deletemember(index){
    initialmembers.splice(index,1);
    display(initialmembers);
}