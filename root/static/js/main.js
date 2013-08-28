jQuery(function ($) {
    $('.company-access button').qtip({
        content: {
            title: 'Fazer Login',
            text: $('#login_form')
        },
        style: {
            classes: 'qtip-bootstrap'
        },
        position: {
            at: 'bottom center',
            my: 'top right'
        },
        show: {
            event: 'click'
        },
        hide: {
            event: 'click'
        }
    });


    $('.one-filter').each( function(){

        $( this ).qtip({
            content: {
                title: $( '.filter-title', this ).html(),
                text: $( '.filter-content', this )
            },
            style: {
                classes: 'qtip-bootstrap'
            },
            position: {
                at: 'bottom center',
                my: 'top center'
            },
            show: {
                event: 'click'
            },
            hide: {
                event: 'click'
            },
            events: {
                show: function() {
                    $('.qtip').hide();
                }
            }
        });

    });

    $( '.add-filter' ).click( function() {
        var value = $( this ).parent().find( 'input[type="text"]' ).val();

        if( value != '' ){
            var html = '<li>'+value+' <i class="icon-remove-sign"></i></li>';
            $( this ).parent().parent().find( '.selected-filters' ).append( html );

            $( '.icon-remove-sign' ).click( function() {
                $( this ).parent( 'li' ).remove();
            });
        }
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
