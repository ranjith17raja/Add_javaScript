function add()
{
    var firstnum = parseInt(document.getElementById('firstnumber').value);
    var secnum = parseInt(document.getElementById('secondnumber').value);
    document.getElementById('total').value = firstnum + secnum;
    if(isNaN(firstnum) || firstnum === "")
    {
        alert('check the value');
    } 
    if(isNaN(secnum)|| secnum === "")
    {
        alert('check the sec number');
    }
}
