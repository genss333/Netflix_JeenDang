import $ from "jquery";

const floatField = $('#floatField');
const floatContainer = $('#floatContainer');

floatField.on('focus', function() {
  floatContainer.addClass('active');
});

floatField.on('blur', function() {
  floatContainer.removeClass('active');
});

export default floatField;