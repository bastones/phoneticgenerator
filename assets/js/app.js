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
            deutsch: 'Anton',
            animals: 'Anaconda'
        },

        b: {
            english: 'Bravo',
            deutsch: 'Berta',
            animals: 'Bluebird'
        },

        c: {
            english: 'Charlie',
            deutsch: 'Cäsar',
            animals: 'Chameleon'
        },

        d: {
            english: 'Delta',
            deutsch: 'Dora',
            animals: 'Dog'
        },

        e: {
            english: 'Echo',
            deutsch: 'Emil',
            animals: 'Elephant'
        },

        f: {
            english: 'Foxtrot',
            deutsch: 'Friedrich',
            animals: 'Ferret'
        },

        g: {
            english: 'Golf',
            deutsch: 'Gustav',
            animals: 'Gnu'
        },

        h: {
            english: 'Hotel',
            deutsch: 'Heinrich',
            animals: 'Hamster'
        },

        i: {
            english: 'Indigo',
            deutsch: 'Ida',
            animals: 'Ibex'
        },

        j: {
            english: 'Juliet',
            deutsch: 'Julius',
            animals: 'Kangaroo'
        },

        k: {
            english: 'Kilo',
            deutsch: 'Kaufmann',
            animals: 'Koala'
        },

        l: {
            english: 'Lima',
            deutsch: 'Ludwig',
            animals: 'Ladybug'
        },

        m: {
            english: 'Mike',
            deutsch: 'Martha',
            animals: 'Mouse'
        },

        n: {
            english: 'November',
            deutsch: 'Nordpol',
            animals: 'Nautilus'
        },

        o: {
            english: 'Oscar',
            deutsch: 'Otto',
            animals: 'Orca'
        },

        p: {
            english: 'Papa',
            deutsch: 'Paula',
            animals: 'Pigeon'
        },

        q: {
            english: 'Quebec',
            deutsch: 'Quelle',
            animals: 'Quetzal'
        },

        r: {
            english: 'Romeo',
            deutsch: 'Richard',
            animals: 'Rabbit'
        },

        s: {
            english: 'Sierra',
            deutsch: 'Siegfried',
            animals: 'Squirrel'
        },

        t: {
            english: 'Tango',
            deutsch: 'Theodor',
            animals: 'Tuna'
        },

        u: {
            english: 'Uniform',
            deutsch: 'Ulrich',
            animals: 'Urchin'
        },

        v: {
            english: 'Victor',
            deutsch: 'Viktor',
            animals: 'Viper'
        },

        w: {
            english: 'Whiskey',
            deutsch: 'Wilhelm',
            animals: 'Wasp'
        },

        x: {
            english: 'X-Ray',
            deutsch: 'Xanthippe',
            animals: 'Xerus'
        },

        y: {
            english: 'Yankee',
            deutsch: 'Ypsilon',
            animals: 'Yak'
        },

        z: {
            english: 'Zulu',
            deutsch: 'Zeppelin',
            animals: 'Zebra'
        },

        0: {
            english: 'Zero',
            deutsch: 'Null',
            animals: 'Zero'
        },

        1: {
            english: 'One',
            deutsch: 'Eins',
            animals: 'One'
        },

        2: {
            english: 'Two',
            deutsch: 'Zwei',
            animals: 'Two'
        },

        3: {
            english: 'Three',
            deutsch: 'Drei',
            animals: 'Three'
        },

        4: {
            english: 'Four',
            deutsch: 'Vier',
            animals: 'Four'
        },

        5: {
            english: 'Five',
            deutsch: 'Fünf',
            animals: 'Five'
        },

        6: {
            english: 'Six',
            deutsch: 'Sechs',
            animals: 'Six'
        },

        7: {
            english: 'Seven',
            deutsch: 'Sieben',
            animals: 'Seven'
        },

        8: {
            english: 'Eight',
            deutsch: 'Acht',
            animals: 'Eight'
        },

        9: {
            english: 'Nine',
            deutsch: 'Neun',
            animals: 'Nine'
        }
    };

    var defaultLanguage = 'english';

    var formInput = $('form input');

    var resultBox = $('div#result');

    $('form').submit(function(e) {
        e.preventDefault();
    });

    $('div#options > ul > li > a').click(function() {

        // Get parent element of selected option
        var selection = $(this).parent();

        // Set the selected option active
        selection.addClass('active').siblings().removeClass('active');

        // Change the default language
        defaultLanguage = selection.attr('data-language');

        // Switch text on labels to use the new default language
        $('.language-specific').text(
            $('.language-specific').attr('data-' + defaultLanguage)
        );

        // Trigger generation with new language
        generate(formInput);

        // Put focus on input field
        formInput.focus();
    });

    formInput.keyup(function(e) {
        if (e.keyCode != 16) {
            generate($(this));
        }
    });

    function generate(object)
    {
        var characters = object.val().toLowerCase().split('');

        var phonetic = '';

        for (i = 0; i < characters.length; i++) {
            if (typeof alphabet[characters[i]][defaultLanguage] !== 'undefined' && alphabet[characters[i]][defaultLanguage]) {
                phonetic += alphabet[characters[i]][defaultLanguage] + ', ';
            }
        }

        if (characters.length) {
            resultBox.html('<p>' + phonetic.substring(0, phonetic.length - 2) + '</p>').slideDown('medium');
        } else {
            resultBox.slideUp('fast');
        }
    }
});
