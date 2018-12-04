$(document).ready(function(){
    $.fn.ajaxForm = function(options = {}){
        options.data = $(this).serialize();
        if($(this).attr('action'))
            options.url = $(this).attr('action');

        if($(this).attr('method'))
            options.type = $(this).attr('method');

        return jQuery.ajax(options);
    };
});
