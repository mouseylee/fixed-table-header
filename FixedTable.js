/*
NOTES:
<table> must have id="fixedHeader", <thead>, and <tbody> 
Add a dummy header row <tr id="hiddenHeader"><th></th></tr> as the last <tbody> element.
This ensures the columns calculations take into account the header text.

Script reference should be added after the <table> and jQuery reference.
<script src="/Scripts/FixedTable.js"></script>
*/

/*Globally declare for performance*/
$headFixed = $('#fixedHeader thead tr:first-child th');
$bodyFixed = $('#hiddenHeader th');

$(window).ready(function () {
    //When page is first loaded, adjust thead to account for scroll bar width.
    var h = $("#fixedHeader thead")
    var b = $("#fixedHeader tbody")
    
    var dif = b.width() - h.width();
    h.css("padding-right", dif);

    adjustColumns()
});

//Update columns when browser window is resized.
$(window).resize( adjustColumns );
        
function adjustColumns() {
    //set header column's width to the width of the corresponding dummy header row column's
    $bodyFixed.each(function (i) {
        $headFixed.eq(i).width($(this).width());
    });
}
