$ (document).ready (function () {
  $ ('.header__input').keyup (function () {
    var _this = this;
    // Show or hide items
    if ($(_this).focus().length > 0 && $(_this).focus().val() != '') {
      $('.card--modal').hide();
    } else {
      $('.card--modal').show();
    }
    $.each ($ ('[data-card]'), function () {
      console.log ($ (this).text ());
      if (
        $ (this)
          .text ()
          .toLowerCase ()
          .indexOf ($ (_this).val ().toLowerCase ()) == -1
      )
        $ (this).hide ();
      else $ (this).show ();
    });
  });

  // Sort by Name
  $(function() {
    $("[data-card]").sort(sort_li).appendTo('.container');
    function sort_li(a, b) {
      return ($(b).data('name')) < ($(a).data('name')) ? 1 : -1;
    }
  });

  // Clear Modal Form
  $("[data-clear]").on("click", function(){
    $('#modal-form')[0].reset();
  });
});
