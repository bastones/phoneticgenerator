/**
 * Copyright Ben Stones, 2016. All rights reserved.
 *
 * @author Ben Stones (ben@b3ns.com)
 *
 * Do not use in your own projects without prior permission.
 */

$(document).ready(function() {
    alphabet = Array();

    alphabet['a'] = 'Alpha';
    alphabet['b'] = 'Bravo';
    alphabet['c'] = 'Charlie';
    alphabet['d'] = 'Delta';
    alphabet['e'] = 'Echo';
    alphabet['f'] = 'Foxtrot';
    alphabet['g'] = 'Golf';
    alphabet['h'] = 'Hotel';
    alphabet['i'] = 'India';
    alphabet['j'] = 'Juliet';
    alphabet['k'] = 'Kilo';
    alphabet['l'] = 'Lima';
    alphabet['m']= 'Mike';
    alphabet['n'] = 'November';
    alphabet['o'] = 'Oscar';
    alphabet['p'] = 'Papa';
    alphabet['q'] = 'Quebec';
    alphabet['r'] = 'Romeo';
    alphabet['s'] = 'Sierra';
    alphabet['t'] = 'Tango';
    alphabet['u'] = 'Uniform';
    alphabet['v']= 'Victor';
    alphabet['w'] = 'Whisky';
    alphabet['x'] = 'X-Ray';
    alphabet['y'] = 'Yankee';
    alphabet['z'] = 'Zulu';
    alphabet['0'] = 'Zero';
    alphabet['1'] = 'One';
    alphabet['2'] = 'Two';
    alphabet['3'] = 'Three';
    alphabet['4'] = 'Four';
    alphabet['5'] = 'Five';
    alphabet['6'] = 'Six';
    alphabet['7'] = 'Seven';
    alphabet['8'] = 'Eight';
    alphabet['9'] = 'Nine';

    $('form').submit(function(e) {
        e.preventDefault();
    });

    $('form input').keyup(function(e) {
        if (e.keyCode != 16) {
            var characters = $(this).val().toLowerCase().split('');

            var phonetic = '';

            for (i = 0; i < characters.length; i++) {
                if (typeof alphabet[characters[i]] !== 'undefined' && alphabet[characters[i]]) {
                    //phonetic += characters[i].toUpperCase() + ' for <span>' + alphabet[characters[i]] + '</span>, ';
                    phonetic += alphabet[characters[i]] + ', ';
                }
            }

            if (characters.length) {
                $('div#result').html('<p>' + phonetic.substring(0, phonetic.length - 2) + '</p>');
            } else {
                $('div#result').html($('div#result').attr('data-default'));
            }
        }
    });
});
