(function($) {
    var $elementary = $('#edit-field-elementary input[type="checkbox"]');
    $('.form-item-elementary-all-elementor input').click(function() {
        if ($(this).prop('checked')) {
            $elementary.attr('checked', true);
        }
        else {
            $elementary.attr('checked', false);
        }
      
    });
    
    var $elementary_immersion = $('#edit-elementary-immersion input[type="checkbox"]');
    $('.form-item-elementary-immersion-all-elementor input').click(function() {
        if ($(this).prop('checked')) {
            $elementary_immersion.attr('checked', true);
        }
        else {
            $elementary_immersion.attr('checked', false);
        }
      
    });
    
    var $secondary = $('#edit-secondary input[type="checkbox"]');
    $('.form-item-secondary-all-elementor input').click(function() {
        if ($(this).prop('checked')) {
            $secondary.attr('checked', true);
        }
        else {
            $secondary.attr('checked', false);
        }
      
    });
    
    var $secondary_immersion = $('#edit-secondary-immersion input[type="checkbox"]');
    $('.form-item-secondary-immersion-all-elementor input').click(function() {
        if ($(this).prop('checked')) {
            $secondary_immersion.attr('checked', true);
        }
        else {
            $secondary_immersion.attr('checked', false);
        }
      
    });
    
    
    $('.col-3 input').click(function() {
        if ($(this).prop('checked')) {
            var sch = $(this).val();
            
            if ($.isNumeric(sch)) {
                $('.field--name-field-school input[value="'+sch+'"]').attr('checked', true);
            }
            else {
                var id = $(this).parent().parent().attr('id');
                $('#' +id +' .js-form-item').each(function( index ) {
                  var scho = $( this ).find('input').val();
                  $('.field--name-field-school input[value="'+scho+'"]').attr('checked', true);
                });
            }
            //$elementary.attr('checked', true);
        }
        else {
            if ($.isNumeric(sch)) {
                $('.field--name-field-school input[value="'+sch+'"]').attr('checked', false);
            }
            else {
                 var id = $(this).parent().parent().attr('id');
                $('#' +id +' .js-form-item').each(function( index ) {
                  var scho = $( this ).find('input').val();
                  $('.field--name-field-school input[value="'+scho+'"]').attr('checked', false);
                });
            }
        }
      
    });
  }(jQuery))