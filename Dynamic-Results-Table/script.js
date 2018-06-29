
document.addEventListener('DOMContentLoaded', function() {

        var table = document.getElementById("myTable");

        if (table != null) {

            for (var i = 0; i < table.rows.length; i++) {

                for (var j = 0; j < table.rows[i].cells.length-1; j++) {
                    if (id = i) {
                        table.rows[i].cells[j].contentEditable = true;
                        table.rows[i].cells[j].innerText = "-"; 
                     } 
                }
            }
        }

    }, false);

function addRow() {
    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow();
    //set id that dynamically changes with growing rows
    var num = table.rows.length-2;
    //sets tr id (row is) so that it can be referenced e.g. in addCell()
    //row length -2 gives the starting id number for new row => myRow_2
    row.id = "myRow_"+num;
    //First row created has row ID of "Row_2"

    for (var  i = 0; i < table.rows[0].cells.length; i++){

        var cell = row.insertCell(i);
        cell.contentEditable = true;
        cell.innerHTML = "-";
        if (i < 2) {
            cell.className = "row_t";
        } else {
            cell.className = "row_n";
        }
    }

}

function deleteRow() {
    // Find a <table> element with id="myTable"
    var table = document.getElementById("myTable");

    var num = table.rows.length - 1;

    if (num != 0){
        table.deleteRow(num);
    }
}


function addCell(){

    var table = document.getElementById("myTable");
    var row = document.getElementById("myRow");
    var num = table.rows[0].cells.length - 1;

    var a = row.insertCell(num);
    //x.className = "header";
    a.innerHTML = "Assignment " + (num - 1);
    a.className = "new_col";
    //x.setAttribute("class", "new_col");

    for (var i = 0; i < table.rows.length; i++) {

        var row2 = document.getElementById("myRow_"+i);
        var b = row2.insertCell(num);
        b.innerHTML = "-";
        b.contentEditable = true;
        b.className = "row_n";

    }
}

function deleteCell(){
    var table = document.getElementById("myTable");
    var row = document.getElementById("myRow");
    var num = table.rows[0].cells.length -1;

    row.deleteCell(num-1);

    for (var i = 0; i < table.rows.length; i++) {

        var row2 = document.getElementById("myRow_"+i);
        row2.deleteCell(-1);
    }
}

function finalGrade() {

    var table = document.getElementById("myTable");

    var col = table.rows[0].cells.length;  //number of columns

    var rows = table.rows.length;

    var final_grade = 0;

    if (table != null) {

        for (var i = 1; i < rows; i++) {
            //create var for total that will reload to 0 for each new row
            var assignments = table.rows[0].cells.length-3;
            var total = 0;
            //var final_grade = 0;

            for (var j = 2; j < col-1; j++) {

                var cell = table.rows[i].cells[j];

                if(cell.innerHTML === '-'){

                    cell.innerHTML = 0;
                }

                if (cell.innerHTML !== '0'){
                    cell.style.backgroundColor = "white";
                }

                total += parseFloat(cell.innerHTML);

                //when j reaches column length - 2 => final assignment
                if(j === (col-2)){
                    //rounds up & averages
                    final_grade = Math.round(total/assignments)+"%";
                    table.rows[i].cells[j+1].innerText = final_grade;
                }
            }
        }
    }
}


function saveTable() {

    var table = document.getElementById("myTable");
    var rows = table.rows.length;
    var col  = table.rows[0].cells.length; // amount of columns
    var data = "";

    for (var i = 0; i < rows; i++) {

        for (var j = 0; j < col - 1; j++) {

            data += table.rows[i].cells[j].innerHTML + "~";

        }
    }

    data += rows + ";" + col + ";" + data.substring(0, data.length);

    setCookie("data", data, 60);

    alert("Table saved");
}

function loadTable() {

    var table = document.getElementById("myTable");

    var data = getCookie("data");

    if (data != "") {
        alert("The table says:" + data);
        for (var i = 0; i < rows; i++) {

            for (var j = 0; j < col - 1; j++) {

                table.rows[i].cells[j].innerHTML += data;
                alert(data);

            }
        }
    } else {
        alert("No table data present");
    }
}


function getCookie(cname) {

    //var table = document.getElementById("myTable");
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function setCookie(cname,cvalue,exdays) {
    //Set date for cookie to expire
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    /*
    Expiry for cookie:
    60 * 1000 = 60 second
    60* (60 * 1000) = 60 mins which is 1 hour
    24* (60* (60 * 1000)) = 1 day which is 24 hours
    */

    var expires = "expires=" + d.toUTCString();
    // cookies are saved in this format
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

