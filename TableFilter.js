const oTableFilter = (function(){

    var input;
    var tables = document.getElementsByTagName('table');
    var table = [];

    for (let i = 0; i < tables.length; i++) {

        table[i] = document.getElementById(tables[i].id);
        table[i].tr = table[i].getElementsByTagName('tr');

        if (table[i].tr.length > 1) {
        
            table[i].td = table[i].tr[1].getElementsByTagName('td');

        } //end if

        for (let j = 0; j < table[i].td.length; j++) {
            
            input = document.getElementById(table[i].id + j.toString());
            table[i].input = [];
            if (input != null) {

                table[i].input[j] = document.getElementById(table[i].id + j.toString());
                table[i].input[j].addEventListener("keyup", function() {
                    runFilter(table[i].id);
                });

            } //end if

        } //end loop

    } //end loop

    function runFilter(parTableName) {
    // Declare variables
    var table, tr, i, td, nMaxCol, nResult, prefixInputId;
    var td = [], input = [], filter = [], txtValue = [];
    var isDisplay = true;

    //Table
    table = document.getElementById(parTableName);
    prefixInputId = parTableName;
    tr = table.getElementsByTagName("tr");

    //Count Table Columns
    if (tr.length > 1) {

        td = tr[1].getElementsByTagName("td")
        nMaxCol = td.length;

    } //end if

    //Re-Count Table Columns
    for (i = 0; i < nMaxCol; i++) {

        if (document.getElementById(prefixInputId+i.toString()) != null) {

            input[i] = document.getElementById(prefixInputId+i.toString());
            filter[i] = input[i].value.toUpperCase();

        } else {
            nMaxCol = i;
        } //end if

    } //end loop

    // TR - Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {

        //TD
        isDisplay = true;
        for (j = 0; j < nMaxCol; j++) {

            td = tr[i].getElementsByTagName("td")[j];
            txtValue = td.textContent || td.innerText;

            if (filter[j] != "") {

                nResult = txtValue.toUpperCase().indexOf(filter[j]);
                if ( nResult <= -1) {
                    isDisplay = false;
                } //end if

            } //end if

        } //end loop

        if (isDisplay) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        } //end if

    } //end loop

    } //end method

})();
