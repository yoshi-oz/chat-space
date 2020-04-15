$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<ul class= "mainbar__body__posts--post">
          <ls class= "mainbar__body__posts--post-1">
            <div class= "mainbar__body__posts--post-1--p1">
              <div class= "mainbar__body__posts--post-1--p1-name1">
                ${message.user_name}
              </div>
              <div class= "mainbar__body__posts--post-1--p1-date1">
                ${message.created_at}
              </div>
            </div>
            <div class="mainbar__body__posts--post-1--p2">
              <p class="mainbar__body__posts--post-1--p2__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </ls>
        </ul>`
      return html;
    } else {
      var html =
        `<ul class= "mainbar__body__posts--post">
          <ls class= "mainbar__body__posts--post-1">
            <div class= "mainbar__body__posts--post-1--p1">
              <div class= "mainbar__body__posts--post-1--p1-name1">
                ${message.user_name}
              </div>
              <div class= "mainbar__body__posts--post-1--p1-date1">
                ${message.created_at}
              </div>
            </div>
            <div class="mainbar__body__posts--post-1--p2">
              <p class="mainbar__body__posts--post-1--p2__content">
                ${message.content}
              </p>
            </div>
          </ls>
        </ul>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
    .done(function(data){
      var html = buildHTML(data);
      $('.mainbar__body').append(html);
      $('form')[0].reset();
      $('.mainbar__body').animate({ scrollTop: $('.mainbar__body')[0].scrollHeight});
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
  });
  return false;
})
});