/**
 * Copyright (c) 2016 Ben Stones, et. al. See LICENSE file.
 */

$(document).ready(function() {
    var alphabet = {
        a: {
            english: 'Alpha',
            deutsch: 'Anton',
            francais: 'Anatole',
            animals: 'Anaconda',
        },

        b: {
            english: 'Bravo',
            deutsch: 'Berta',
            francais: 'Berthe',
            animals: 'Bluebird',
        },

        c: {
            english: 'Charlie',
            deutsch: 'Cäsar',
            francais: 'Célestin',
            animals: 'Chameleon',
        },

        d: {
            english: 'Delta',
            deutsch: 'Dora',
            francais: 'Désiré',
            animals: 'Dog',
        },

        e: {
            english: 'Echo',
            deutsch: 'Emil',
            francais: 'Eugène',
            animals: 'Elephant',
        },

        f: {
            english: 'Foxtrot',
            deutsch: 'Friedrich',
            francais: 'François',
            animals: 'Ferret',
        },

        g: {
            english: 'Golf',
            deutsch: 'Gustav',
            francais: 'Gaston',
            animals: 'Gnu',
        },

        h: {
            english: 'Hotel',
            deutsch: 'Heinrich',
            francais: 'Henri',
            animals: 'Hamster',
        },

        i: {
            english: 'Indigo',
            deutsch: 'Ida',
            francais: 'Irma',
            animals: 'Ibex',
        },

        j: {
            english: 'Juliet',
            deutsch: 'Julius',
            francais: 'Joseph',
            animals: 'Kangaroo',
        },

        k: {
            english: 'Kilo',
            deutsch: 'Kaufmann',
            francais: 'Kléber',
            animals: 'Koala',
        },

        l: {
            english: 'Lima',
            deutsch: 'Ludwig',
            francais: 'Louis',
            animals: 'Ladybug',
        },

        m: {
            english: 'Mike',
            deutsch: 'Martha',
            francais: 'Marcel',
            animals: 'Mouse',
        },

        n: {
            english: 'November',
            deutsch: 'Nordpol',
            francais: 'Nicolas',
            animals: 'Nautilus',
        },

        o: {
            english: 'Oscar',
            deutsch: 'Otto',
            francais: 'Oscar',
            animals: 'Orca',
        },

        p: {
            english: 'Papa',
            deutsch: 'Paula',
            francais: 'Pierre',
            animals: 'Pigeon',
        },

        q: {
            english: 'Quebec',
            deutsch: 'Quelle',
            francais: 'Quintal',
            animals: 'Quetzal',
        },

        r: {
            english: 'Romeo',
            deutsch: 'Richard',
            francais: 'Raoul',
            animals: 'Rabbit',
        },

        s: {
            english: 'Sierra',
            deutsch: 'Siegfried',
            francais: 'Suzanne',
            animals: 'Squirrel',
        },

        t: {
            english: 'Tango',
            deutsch: 'Theodor',
            francais: 'Thérèse',
            animals: 'Tuna',
        },

        u: {
            english: 'Uniform',
            deutsch: 'Ulrich',
            francais: 'Ursule',
            animals: 'Urchin',
        },

        v: {
            english: 'Victor',
            deutsch: 'Viktor',
            francais: 'Victor',
            animals: 'Viper',
        },

        w: {
            english: 'Whiskey',
            deutsch: 'Wilhelm',
            francais: 'William',
            animals: 'Wasp',
        },

        x: {
            english: 'X-Ray',
            deutsch: 'Xanthippe',
            francais: 'Xavier',
            animals: 'Xerus',
        },

        y: {
            english: 'Yankee',
            deutsch: 'Ypsilon',
            francais: 'Yvonne',
            animals: 'Yak',
        },

        z: {
            english: 'Zulu',
            deutsch: 'Zeppelin',
            francais: 'Zoé',
            animals: 'Zebra',
        },

        0: {
            english: 'Zero',
            deutsch: 'Null',
            francais: 'Zéro',
            animals: 'Zero',
        },

        1: {
            english: 'One',
            deutsch: 'Eins',
            francais: 'Un',
            animals: 'One',
        },

        2: {
            english: 'Two',
            deutsch: 'Zwei',
            francais: 'Deux',
            animals: 'Two',
        },

        3: {
            english: 'Three',
            deutsch: 'Drei',
            francais: 'Trois',
            animals: 'Three',
        },

        4: {
            english: 'Four',
            deutsch: 'Vier',
            francais: 'Quatre',
            animals: 'Four',
        },

        5: {
            english: 'Five',
            deutsch: 'Fünf',
            francais: 'Cinq',
            animals: 'Five',
        },

        6: {
            english: 'Six',
            deutsch: 'Sechs',
            francais: 'Six',
            animals: 'Six',
        },

        7: {
            english: 'Seven',
            deutsch: 'Sieben',
            francais: 'Sept',
            animals: 'Seven',
        },

        8: {
            english: 'Eight',
            deutsch: 'Acht',
            francais: 'Huit',
            animals: 'Eight',
        },

        9: {
            english: 'Nine',
            deutsch: 'Neun',
            francais: 'Anatole',
            animals: 'Nine',
        }
    };

    var defaultLanguage = 'english';

    var formInput = $('form input');
    var phoneticValue = '';

    var resultBox = $('div#result');

    var speakButton = $('form input + a');
    var speechSynthesis = window.speechSynthesis;
    var speechSupported = true;

    /**
     * Event handler for the submit event on the form.
     */
    $('form').submit(function(e) {

        // Prevent the browser from submitting the form
        e.preventDefault();
    });

    /**
     * Event handler for the click event on the language toggles.
     */
    $('div#options > ul > li > a').click(function() {

        // Get parent element of selected option
        var selection = $(this).parent();

        // Put focus on input field
        formInput.focus();

        // Set the selected option active
        selection.addClass('active').siblings().removeClass('active');

        // Change the default language
        defaultLanguage = selection.attr('data-language');

        // Get speech support for the new language
        speechSupported = (selection.attr('data-speech') === 'true');

        // Check if speech support is enabled
        if (speechSupported && phoneticValue.replace(/[^a-z0-9.,\s]/gi, '').length) {
            speakButton.stop().fadeIn(400);
        } else {
            speakButton.stop().fadeOut(400);
        }

        // Switch text on labels to use the new default language
        $('.language-specific').each(function () {
            $(this).text(
                $(this).attr('data-' + defaultLanguage)
            );
        });

        // Trigger generation with new language
        generate(formInput);
    });

    /**
     * Event handler for the keyup event on the form input field.
     */
    formInput.keyup(function (e) {

        // Generate phonetic text
        generate($(this));

        if (speechSupported) {
            if (phoneticValue.replace(/[^a-z0-9.,\s]/gi, '').length) {
                speakButton.stop().fadeIn(400);
            } else {
                speakButton.stop().fadeOut(400);
            }
        }
    });

    /**
     * Event handler for the click event on the speaker button.
     */
    speakButton.click(function () {

        // Toggle the speak button activation status
        $(this).toggleClass('active');

        // Set speech to either enabled or disabled
        speechEnabled = ($(this).hasClass('active'));

        // Put focus on the input field
        formInput.focus();

        // As we are about to use speech, we need to cancel anything currently in the queue
        speechSynthesis.cancel();

        // Speak out phonetic translation
        speak(phoneticValue.replace(/[^a-z0-9.,\s]gi/, ''));
    });

    /**
     * Generate phonetic text.
     *
     * @param object
     */
    function generate(object)
    {
        var characters = object.val().toLowerCase().split('');

        phoneticValue = '';

        for (i = 0; i < characters.length; i++) {
            if (typeof alphabet[characters[i]] !== 'undefined' && typeof alphabet[characters[i]][defaultLanguage] !== 'undefined') {
                phoneticValue += alphabet[characters[i]][defaultLanguage] + ', ';
            }
        }

        // If there are characters to display in the result box, display the element. Otherwise, slide it out of view.
        if (characters.length) {
            resultBox.html('<p>' + phoneticValue.substring(0, phoneticValue.length - 2) + '</p>').slideDown('medium');
        } else {
            resultBox.slideUp('fast');
        }
    }

    /**
     * Handle speech synthesis.
     */
    function speak(text)
    {

        if (typeof text !== 'undefined') {
            if (text.length) {

                // Stop previous speech
                speechSynthesis.cancel();

                // Start new speech
                speechSynthesis.speak(new SpeechSynthesisUtterance(text));
            }
        }
    }
});