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

  $("[data-clear]").on("click", function(){
    $('#modal-form')[0].reset();
  });
});
