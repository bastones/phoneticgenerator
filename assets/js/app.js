/**
 * Copyright Ben Stones, 2016. All rights reserved.
 *
 * @author Ben Stones (ben@b3ns.com)
 *
 * Do not use in your own projects without prior permission.
 */

$(document).ready(function() {
    var alphabet = {
        a: {
            english: 'Alpha',
            deutsch: 'Anton'
        },

        b: {
            english: 'Bravo',
            deutsch: 'Berta'
        },

        c: {
            english: 'Charlie',
            deutsch: 'Cäsar'
        },

        d: {
            english: 'Delta',
            deutsch: 'Dora'
        },

        e: {
            english: 'Echo',
            deutsch: 'Emil'
        },

        f: {
            english: 'Foxtrot',
            deutsch: 'Friedrich'
        },

        g: {
            english: 'Golf',
            deutsch: 'Gustav'
        },

        h: {
            english: 'Hotel',
            deutsch: 'Heinrich'
        },

        i: {
            english: 'Indigo',
            deutsch: 'Ida'
        },

        j: {
            english: 'Juliet',
            deutsch: 'Julius'
        },

        k: {
            english: 'Kilo',
            deutsch: 'Kaufmann'
        },

        l: {
            english: 'Lima',
            deutsch: 'Ludwig'
        },

        m: {
            english: 'Martha',
            deutsch: 'Mike'
        },

        n: {
            english: 'November',
            deutsch: 'Nordpol'
        },

        o: {
            english: 'Oscar',
            deutsch: 'Otto'
        },

        p: {
            english: 'Papa',
            deutsch: 'Paula'
        },

        q: {
            english: 'Quebec',
            deutsch: 'Quelle'
        },

        r: {
            english: 'Romeo',
            deutsch: 'Richard'
        },

        s: {
            english: 'Sierra',
            deutsch: 'Siegfried'
        },

        t: {
            english: 'Tango',
            deutsch: 'Theodor'
        },

        u: {
            english: 'Uniform',
            deutsch: 'Ulrich'
        },

        v: {
            english: 'Victor',
            deutsch: 'Viktor'
        },

        w: {
            english: 'Whiskey',
            deutsch: 'Wilhelm'
        },

        x: {
            english: 'X-Ray',
            deutsch: 'Xanthippe'
        },

        y: {
            english: 'Yankee',
            deutsch: 'Ypsilon'
        },

        z: {
            english: 'Zulu',
            deutsch: 'Zeppelin'
        },

        0: {
            english: 'Zero',
            deutsch: 'Null'
        },

        1: {
            english: 'One',
            deutsch: 'Eins'
        },

        2: {
            english: 'Two',
            deutsch: 'Zwei'
        },

        3: {
            english: 'Three',
            deutsch: 'Drei'
        },

        4: {
            english: 'Four',
            deutsch: 'Vier'
        },

        5: {
            english: 'Fivex',
            deutsch: 'Fünf'
        },

        6: {
            english: 'Six',
            deutsch: 'Sechs'
        },

        7: {
            english: 'Seven',
            deutsch: 'Sieben'
        },

        8: {
            english: 'Eight',
            deutsch: 'Acht'
        },

        9: {
            english: 'Nine',
            deutsch: 'Neun'
        }
    };

    var defaultLanguage = 'english';

    $('form').submit(function(e) {
        e.preventDefault();
    });

    $('form input').keyup(function(e) {
        if (e.keyCode != 16) {
            var characters = $(this).val().toLowerCase().split('');

            var phonetic = '';

            var result = $('div#result');

            for (i = 0; i < characters.length; i++) {
                if (typeof alphabet[characters[i]][defaultLanguage] !== 'undefined' && alphabet[characters[i]][defaultLanguage]) {
                    phonetic += alphabet[characters[i]][defaultLanguage] + ', ';
                }
            }

            if (characters.length) {
                result.html('<p>' + phonetic.substring(0, phonetic.length - 2) + '</p>');
            } else {
                result.html(result.attr('data-default'));
            }
        }
    });
});
