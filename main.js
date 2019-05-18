$(document).ready(function() {
  //select first paragraph and add link
  $('article > p:first-of-type').append(
    ' <a href ="#" id="readMore">Click to read more</a>'
  )
  //hide the rest of the graphs
  $('article > p:not(:first-of-type)').hide()

  $('#readMore').click(function(event) {
    //Do preventDefault if the link is not going anywhere.
    event.preventDefault()
    $('article > p:not(:first-of-type)').show()
    $('#readMore').hide()
  })
})
