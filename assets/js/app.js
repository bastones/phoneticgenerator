/**
 * Copyright (c) 2016, 2017 Ben Stones, et. al. See LICENSE file.
 */

$(document).ready(function() {
    var alphabet = {
        a: {
            english: 'Alpha',
            deutsch: 'Anton',
            francais: 'Anatole',
        },

        b: {
            english: 'Bravo',
            deutsch: 'Berta',
            francais: 'Berthe',
        },

        c: {
            english: 'Charlie',
            deutsch: 'Cäsar',
            francais: 'Célestin',
        },

        d: {
            english: 'Delta',
            deutsch: 'Dora',
            francais: 'Désiré',
        },

        e: {
            english: 'Echo',
            deutsch: 'Emil',
            francais: 'Eugène',
        },

        f: {
            english: 'Foxtrot',
            deutsch: 'Friedrich',
            francais: 'François',
        },

        g: {
            english: 'Golf',
            deutsch: 'Gustav',
            francais: 'Gaston',
        },

        h: {
            english: 'Hotel',
            deutsch: 'Heinrich',
            francais: 'Henri',
        },

        i: {
            english: 'Indigo',
            deutsch: 'Ida',
            francais: 'Irma',
        },

        j: {
            english: 'Juliet',
            deutsch: 'Julius',
            francais: 'Joseph',
        },

        k: {
            english: 'Kilo',
            deutsch: 'Kaufmann',
            francais: 'Kléber',
        },

        l: {
            english: 'Lima',
            deutsch: 'Ludwig',
            francais: 'Louis',
        },

        m: {
            english: 'Mike',
            deutsch: 'Martha',
            francais: 'Marcel',
        },

        n: {
            english: 'November',
            deutsch: 'Nordpol',
            francais: 'Nicolas',
        },

        o: {
            english: 'Oscar',
            deutsch: 'Otto',
            francais: 'Oscar',
        },

        p: {
            english: 'Papa',
            deutsch: 'Paula',
            francais: 'Pierre',
        },

        q: {
            english: 'Quebec',
            deutsch: 'Quelle',
            francais: 'Quintal',
        },

        r: {
            english: 'Romeo',
            deutsch: 'Richard',
            francais: 'Raoul',
        },

        s: {
            english: 'Sierra',
            deutsch: 'Siegfried',
            francais: 'Suzanne',
        },

        t: {
            english: 'Tango',
            deutsch: 'Theodor',
            francais: 'Thérèse',
        },

        u: {
            english: 'Uniform',
            deutsch: 'Ulrich',
            francais: 'Ursule',
        },

        v: {
            english: 'Victor',
            deutsch: 'Viktor',
            francais: 'Victor',
        },

        w: {
            english: 'Whiskey',
            deutsch: 'Wilhelm',
            francais: 'William',
        },

        x: {
            english: 'X-Ray',
            deutsch: 'Xanthippe',
            francais: 'Xavier',
        },

        y: {
            english: 'Yankee',
            deutsch: 'Ypsilon',
            francais: 'Yvonne',
        },

        z: {
            english: 'Zulu',
            deutsch: 'Zeppelin',
            francais: 'Zoé',
        },

        0: {
            english: 'Zero',
            deutsch: 'Null',
            francais: 'Zéro',
        },

        1: {
            english: 'One',
            deutsch: 'Eins',
            francais: 'Un',
        },

        2: {
            english: 'Two',
            deutsch: 'Zwei',
            francais: 'Deux',
        },

        3: {
            english: 'Three',
            deutsch: 'Drei',
            francais: 'Trois',
        },

        4: {
            english: 'Four',
            deutsch: 'Vier',
            francais: 'Quatre',
        },

        5: {
            english: 'Five',
            deutsch: 'Fünf',
            francais: 'Cinq',
        },

        6: {
            english: 'Six',
            deutsch: 'Sechs',
            francais: 'Six',
        },

        7: {
            english: 'Seven',
            deutsch: 'Sieben',
            francais: 'Sept',
        },

        8: {
            english: 'Eight',
            deutsch: 'Acht',
            francais: 'Huit',
        },

        9: {
            english: 'Nine',
            deutsch: 'Neun',
            francais: 'Anatole',
        }
    };

    var defaultLanguage = 'english';
    var defaultSpeech = 'en';

    var formInput = $('form input');
    var phoneticValue = '';

    var resultBox = $('div#result');

    var speakButton = $('form input + a');
    var speechSynthesis = window.speechSynthesis;
    var speechEnabled = (typeof speechSynthesis !== typeof undefined && speechSynthesis !== false) ? true : false;

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

        // Change the default phonetic language
        defaultLanguage = selection.attr('data-language');

        // Check if speech support works in this browser
        if (typeof speechSynthesis !== typeof undefined) {

            // Check if speech is supported for the given language
            if (typeof selection.attr('data-speech') !== typeof undefined && selection.attr('data-speech') !== false) {

                // Change the default speech language
                defaultSpeech = selection.attr('data-speech');

                // Enable speech support, if disabled
                speechEnabled = true;

                // Display the speech button, if hidden (but only if there is translated text to speak)
                if (phoneticValue.length) {
                    speakButton.stop().fadeIn(400);
                }
            } else {

                // Speech is not supported for the given language
                speechEnabled = false;

                // Hide the speech button, if visible
                speakButton.stop().fadeOut(400);
            }
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

        // Check if the value in the text field has been translated phonetically (but only if speech is enabled for the current language)
        if (speechEnabled) {
            if (phoneticValue.length) {
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

        // Put focus on the input field
        formInput.focus();

        // As we are about to use speech, we need to cancel anything currently in the queue
        speechSynthesis.cancel();

        // Speak out phonetic translation
        speak(phoneticValue);
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
            if (typeof alphabet[characters[i]] !== typeof undefined && alphabet[characters[i]] !== false && typeof alphabet[characters[i]][defaultLanguage] !== typeof undefined && alphabet[characters[i]][defaultLanguage] !== false) {
                phoneticValue += alphabet[characters[i]][defaultLanguage] + ', ';
            }
        }

        // If there are characters to display in the result box, display the element. Otherwise, slide it out of view.
        if (phoneticValue.length) {
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
        if (typeof text !== typeof undefined && text !== false) {
            if (text.length) {

                // Create new speech utterance instance
                var speechUtterance = new SpeechSynthesisUtterance(text);

                // Set the language for the speech utterance
                speechUtterance.lang = defaultSpeech;

                // Stop previous speech
                speechSynthesis.cancel();

                // Start new speech
                speechSynthesis.speak(speechUtterance);
            }
        }
    }
});
