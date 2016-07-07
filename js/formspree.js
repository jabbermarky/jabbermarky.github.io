var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
    goog_snippet_vars = function() {
        var w = window;
        w.google_conversion_id = 1026466304;
        w.google_conversion_label = "PHtHCL7-_mcQgMS66QM";
        w.google_remarketing_only = false;
    };
    // DO NOT CHANGE THE CODE BELOW.
    goog_report_conversion = function(url) {
        goog_snippet_vars();
        window.google_conversion_format = "3";
        var opt = new Object();
        opt.onload_callback = function() {
            if (typeof(url) != 'undefined') {
                window.location = url;
            }
        };
        var conv_handler = window['google_trackConversion'];
        if (typeof(conv_handler) == 'function') {
            conv_handler(opt);
        }
    };
    e.preventDefault();
    $.ajax({
        url: 'https://formspree.io/mark@marklummus.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        beforeSend: function() {
            $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
        },
        success: function(data) {
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--success">Message sent!</div>');
            goog_report_conversion( /*'http://www.marklummus.com/contact/'*/ );
        },
        error: function(err) {
            console.log(err);
            $contactForm.find('.alert--loading').hide();
            $contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
        }
    });
});
