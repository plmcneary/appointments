app.show = function (templateId, model) {
  var templateHtml = $('#' + templateId).html();
  var templateFn = _.template(templateHtml, { variable: 'm' });
  var result = templateFn(model);

  $('.main-content').html(result);
};

app.filter = function (model) {
  var templateHtml = $('#search-list').html();
  var templateFn = _.template(templateHtml, { variable: 'm' });
  var result = templateFn(model);

  $('.appt-list').html(result);
}
