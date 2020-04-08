# TableFilter
Javascript Plugin for Table Multi Columns Filter

# Installation
```html
<script type="text/javascript" src="TableFilter.min.js"></script>
```


# Usage
```html
<div style="margin-bottom: 20px;">

    <!-- Filter for table column index 0 -->
    <input type="text" id="your-table-id0" placeholder="Filter By Name">

    <!-- Filter for table column index 1 -->
    <input type="text" id="your-table-id1" placeholder="Filter By Email">
    
    <!-- Filter for table column index 2 -->
    <input type="text" id="your-table-id2" placeholder="Filter By Status">

</div>

<table id="your-table-id">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>John Doe</td>
            <td>john@gmail.com</td>
            <td>active</td>
        </tr>

        <tr>
            <td>Jane Doe</td>
            <td>jane@yahoo.com</td>
            <td>disabled</td>
        </tr>
        <tr>
            <td>Bill Doe</td>
            <td>bill@gmail.com</td>
            <td>active</td>
        </tr>
        <tr>
            <td>Jill Doe</td>
            <td>Jill@Yahoo.com</td>
            <td>disabled</td>
        </tr>
    </tbody>
</table>
```
