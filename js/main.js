$('#myRange').change(function() {
      $('#myNumber').val($(this).val());
});

$('#myNumber').change(function() {
      $('#myRange').val($(this).val());
});

