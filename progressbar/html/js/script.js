var cancelledTimer = null;

$('document').ready(function() {
    Progressbar = {};

    Progressbar.Progress = function(data) {

        if (data.canCancel) {
            $('.letter-x').css('opacity', '100%');

        }


        clearTimeout(cancelledTimer);
        $("#progress-label").text(data.label);
    
        $(".progress-container").fadeIn('fast', function() {
            $("#progress-bar").stop().css({"width": 0, "background-color": "#1787e2a6"}).animate({
                width: '100%'
            }, {
                
                duration: parseInt(data.duration),
                
                complete: function() {
                    $(".progress-container").fadeOut('fast', function() {
                        $('#progress-bar').removeClass('cancellable');
                        $("#progress-bar").css("width", 0);
                        $.post('https://progressbar/FinishAction', JSON.stringify({}));
                    });
    
                    // Add "E" to the progress bar
                    $("#progress-bar2").addClass('upscale-progress-bar');
                    setTimeout(function () {
                        $("#progress-bar2").addClass('finished-progress-bar');
                        setTimeout(function () {
                            $("#progress-bar2").removeClass('upscale-progress-bar');
                            $("#progress-bar2").removeClass('finished-progress-bar');
                        }, 500);
                    }, 100);
                    $('.letter-x').css('opacity', '0%');
                }
            });
        });
    };
    
    

    Progressbar.ProgressCancel = function() {

        $('.letter-x').css('opacity', '0%');

        $("#progress-label").text("CANCELLED");
        $("#progress-bar").stop().css( {"width": "100%", "background-color": "rgba(71, 0, 0, 0.8)"});
        $('#progress-bar').removeClass('cancellable');

        cancelledTimer = setTimeout(function () {
            $(".progress-container").fadeOut('fast', function() {
                $("#progress-bar").css("width", 0);
                $.post('https://progressbar/CancelAction', JSON.stringify({
                    })
                );
            });
        }, 1000);
    };

    Progressbar.CloseUI = function() {
        $('.main-container').fadeOut('fast');
    };
    
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case 'progress':
                Progressbar.Progress(event.data);
                break;
            case 'cancel':
                Progressbar.ProgressCancel();
                break;
        }
    });
});