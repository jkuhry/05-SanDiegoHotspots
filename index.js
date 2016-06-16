
$(document).ready(function() {
    $.getJSON("topspots.json", function(data) {
        var items = [];

        $.each(data, function(key, value) {
            items.push("<tr>");
            items.push("<td>" + value.name + "</td>");
            items.push("<td>" + value.description + "</td>");
            items.push("<td><a href='https://www.google.com/maps?q=" + value.location + "' class='btn btn-info'>GOOGLE MAPS</a></td>");
            items.push("</tr>");




            $("<tbody/>", { html: items.join("") }).appendTo("table")



        })
    });
});



// <button>+a href="https://www.google.com/maps?q=">Go to Google</a>"+value.location+"</td>"</butto
//<a href="https://www.google.com/maps?q=[]" class="btn btn-default">Go to Google</a>

//<a> href=https://www.google.com/maps?q=
//<button type="button" class="btn btn-info btn-lg">Large Info Button</button>
