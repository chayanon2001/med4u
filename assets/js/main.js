$(document).ready(() => {
  var st = "";

  $(".station").change(function () {
    var station = $(".station:checked").val();
    st = station;
  });

  $(".input-search").keyup(function (e) {
    var input = $(this).val();

    if (input != "") {
      $.ajax({
        type: "POST",
        url: "service/fetch_data.php",
        data: {
          request: "search",
          query: input,
          selection: st,
        },
        success: function (response) {
          $("#search-list").html(response);
        },
      });
    } else {
      $("#search-list").html("");
    }
  });

  $(document).on('click', '.item-search', function () {
    var id = $(this).attr("id");
    $.ajax({
      type: "POST",
      url: "service/fetch_data.php",
      data: {
        fetch_pro: 'fetch_pro',
        id: id,
        type: st
      },
      success: function (response) {
        $('.card-promotions').html(response);
      }
    });
    $("#search-list").html("");
  });
});
