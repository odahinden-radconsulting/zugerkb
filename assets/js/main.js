/**
 * Created by olivier.dahinden on 13.10.2015.
 */

(function($){

    $.fn.iconState = function(state){

        var adding = '';
        switch (state) {
            case 'refresh':
                adding = ' spin';
                break;
        }

        return $.each(this, function(){
            $(this).removeAttr('class');
            $(this).addClass('glyphicon glyphicon-' + state + adding);
            $(this).parent().removeClass('ok remove').addClass(state);
        });
    };

    $.fn.login = function(options){
        var settings = $.extend({
        }, options);

        return $.each(this, function(){
            var self = $(this);

            var trigger = self.find('button');
            trigger.on('click', function(e){
                e.preventDefault();

                var icon = $(this).find('span');
                icon.iconState('refresh');

                var text = self.find('input[type="text"]');
                if ('' != text.val()){
                    setTimeout(function(){
                        icon.iconState('remove');
                    }, 1200);
                    return;
                }

                setTimeout(function(){
                    icon.iconState('ok');
                }, 800);
            });

            $(this).find('input').on('focus', function(){
                var icon = self.find('button').find('span');
                icon.iconState('log-in');
            });

        });
    }
})(jQuery);

jQuery(document).ready(function($){
    $('#zgkb-login-form').login();
});