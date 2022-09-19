var namev,datev,phonev,parentv,collegev,yearv,emailv,cityv;
function readForm()
{
    namev=document.getElementById("name").value;
    datev=document.getElementById("date").value;
    phonev=document.getElementById("phone").value;
    parentv=document.getElementById("parent").value;
    collegev=document.getElementById("college").value;
    yearv=document.getElementById("year").value;
    emailv=document.getElementById("email").value;
    cityv=document.getElementById("city").value;
    console.log(namev,datev,phonev,parentv,collegev,yearv,emailv,cityv);
}
document.getElementById("insert").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).set({name:namev,date:datev,phone:phonev,parent:parentv,college:collegev,year:yearv,email:emailv,city:cityv,});
    alert("data inserted");
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("phone").value="";
    document.getElementById("parent").value="";
    document.getElementById("college").value="";
    document.getElementById("year").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
};

document.getElementById("read").onclick=function()
{
    readForm();
    firebase.database().ref("student/"+namev).on("value",function(snap){
    document.getElementById("name").value=snap.val().name;
    document.getElementById("date").value=snap.val().date;
    document.getElementById("phone").value=snap.val().phone;
    document.getElementById("parent").value=snap.val().parent;
    document.getElementById("college").value=snap.val().college;
    document.getElementById("year").value=snap.val().year;
    document.getElementById("email").value=snap.val().email;
    document.getElementById("city").value=snap.val().city;

    });
};

document.getElementById("update").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).update({name:namev,date:datev,phone:phonev,parent:parentv,college:collegev,year:yearv,email:emailv,city:cityv,});
    alert("data updated");
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("phone").value="";
    document.getElementById("parent").value="";
    document.getElementById("college").value="";
    document.getElementById("year").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
};


document.getElementById("delete").onclick=function(){
    readForm();
    firebase.database().ref("student/"+namev).remove();
    alert("data deleted");
    document.getElementById("name").value="";
    document.getElementById("date").value="";
    document.getElementById("phone").value="";
    document.getElementById("parent").value="";
    document.getElementById("college").value="";
    document.getElementById("year").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
};