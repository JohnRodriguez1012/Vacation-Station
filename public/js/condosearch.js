$(document).ready(function() 
{
/* $(".bookCondo").on("click", function(event) 
  {//book the condo?
    var id = $(this).data("id");
    var updateDevoured = 
    {
      devoured: 1,
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, 
    {
      type: "PUT",
      data: updateDevoured
    }).then(
      function() 
      {
        console.log("change devoured to 1");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });*/

  function appendResultRow(newRow)
  {
    $("#results-dump").append(newRow);
  }

/*  var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) 
        {
          rowsToAdd.push(createResultRow(data[i]));
          console.log(rowsToAdd);
        }
        $("#results-dump").append(rowsToAdd);
      });*/

 function createResultRow(myResult) 
 {
    //var myData = data[i];
    $.ajax(
    {
      method: "POST",
      url: "/api/searchpic",
      data: myResult
    }).then(function(picurl) 
    {
      //console.log(picurl);
      if(picurl.length > 0)
      {
        myResult.picname = picurl[0].name;
      }
      else
      {
        myResult.picname = "/images/cabin.jpg";
      }
      var $newInputRow = $(
        [
          "<li class='list-group-item result-item'>",
          "<span>",
          myResult.name,
          "<img style='border:1px solid gray;width:100px;height:100px; float:right' src=" + myResult.picname +">",
          "<br>location: ",
          myResult.location,
          "<br> price: ",
          myResult.price,
          "<br>Pets OK?: ",
          myResult.pets,
          "<br> Accomodates: ",
          myResult.guests,
          " guests <br><hr> ",
          myResult.description,
          "</span>",
          
          "<button class='bookit btn btn-default' style = 'float:right'>BookIt!</button><br><br>",
          "</li><br>"
        ].join(" ")
        );
      $newInputRow.find("button.bookit").data("id", myResult.id, "name");
      appendResultRow($newInputRow);
    });
  }

// Function for retrieving results and getting them ready to be rendered to the page
  function getResults(search) 
  {
    $.ajax(
    {
      method: "POST",
      url: "/api/search",
      data: search
    }).then(function(data) 
      {
        //console.log(data);
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) 
        {
          createResultRow(data[i]);
        }
      });
    }


  $(".search-details").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newSearch = 
    {
      location: $("#location").val().trim(),
      price: $("#price").val().trim(),
      pets: $("#pets").val().trim(),
      guests: $("#guests").val().trim()
    };
    getResults(newSearch);
  });
});
