jQuery(function ($) {
    $( '#jobs_form' ).submit(function () {
        var desired  = [];
        var required = [];

        $( 'ul.desired_attributes > li' ).each(function () {
            var element = $(this).clone();
            element.find('a').remove();
            desired.push(element.text());
        });
        $( 'ul.required_attributes > li' ).each(function () {
            var element = $(this).clone();
            element.find('a').remove();
            required.push(element.text());
        });

        $( '#required_attributes_field' ).val( required.join(',') );
        $( '#desired_attributes_field'  ).val(  desired.join(',') );

        return true;
    });

    $( 'form.requirements' ).submit( function() {
        var values = $(this).find( 'input[type="text"]' ).val().split(',');
        var value;
        var ul = $(this).find( 'ul.requirements' );
        var found;

        for (var i = 0; i < values.length; i++) {
            value = values[i];

            if ( value === '' ) {
                continue;
            }

            found = false;

            ul.find('li').each(function () {
                if ($(this).text() === value) {
                    found = true;
                    return false;
                }
            });

            if (found) {
                continue;
            }

            ul.append( '<li>' + value + ' <a href="#" class="remove-requirement"><i class="icon-remove-sign"></i></a></li>' );
        }

        $(this).find('.remove-requirement').unbind('click');
        $(this).find('.remove-requirement').click( function() {
            $(this).parent('li').remove();
            return false;
        });

        return false;
    });

    $('table.my_jobs td.remove a').click(function () {
        window.about_to_be_removed = $(this).data('job-id');
        $('#remove_job_modal').modal('show');
        return false;
    });

    $('#confirm_remove_button_trigger').click(function () {
        $.ajax({
            type: 'DELETE',
            url: '/account/job/' + window.about_to_be_removed,
            success: function () {
//              TODO: remove this alert and replace it with something decent
                alert('Removido com sucesso.');
                $('#remove_job_modal').modal('hide');
                location.reload();
            }
        });
    });
});