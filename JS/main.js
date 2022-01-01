function homeClick(){
    document.getElementById('home').style.display = "block";
    document.getElementById('customer').style.display = "none";
    document.getElementById('item').style.display = "none";
    document.getElementById('order').style.display = "none";

}
function customerClick(){
    document.getElementById('home').style.display = "none";
    document.getElementById('customer').style.display = "block";
    document.getElementById('item').style.display = "none";
    document.getElementById('order').style.display = "none";

}
function itemClick(){
    document.getElementById('home').style.display = "none";
    document.getElementById('customer').style.display = "none";
    document.getElementById('item').style.display = "block";
    document.getElementById('order').style.display = "none";

}
function orderClick(){
    document.getElementById('home').style.display = "none";
    document.getElementById('customer').style.display = "none";
    document.getElementById('item').style.display = "none";
    document.getElementById('order').style.display = "block";

}