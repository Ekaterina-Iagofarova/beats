const validateFields = (form, fieldsArray) =>{

  fieldsArray.forEach((field) =>{
    field.removeClass('form__input_error');
    if (field.val().trim() === "") {
      field.addClass('form__input_error');
    }
  });

  const errorFields = form.find('form__input_error');

  return errorFields.length === 0;
}

$('.form').submit(e => {
  event.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");

  const modal = $('#modal');
  const content = modal.find('.modal__message');

  modal.removeClass('modal__message_error');

  const isVailid = validateFields(form, [name, phone, comment, to]);

  if (isVailid){
    const request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data:{
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
    });

    request.done((data) =>{
      content.text(data.message);

    });

    request.fail((data) =>{
      const message = data.responseJSON.message;
      content.text(message);
      modal.addClass('modal__message_error')
    });

    request.always(() =>{
      $.fancybox.open({
        src: "#modal",
        type: "inline"
      });
    });
  }

});

$('.js-submit-btn').click(e => {
  event.preventDefault();

  $.fancybox.close();
});