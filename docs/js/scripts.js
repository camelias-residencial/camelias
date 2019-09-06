$ (document).ready (function () {
  $ ('.header__input').keyup (function () {
    var _this = this;
    // Show or hide items
    $.each ($ ('.card'), function () {
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
});
