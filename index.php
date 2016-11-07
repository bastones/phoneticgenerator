<!DOCTYPE html>
<html>
<head>
    <title>Phonetic Generator &ndash; Police Alphabet</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200,300">

    <link rel="stylesheet" href="assets/css/app.css">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta charset="utf-8">
</head>
<body>
    <div id="main">
        <h1 class="language-specific" data-english="Phonetic Generator" data-deutsch="Phonetischer Generator" data-animals="Meow Meow">Phonetic Generator</h1>

        <form>
            <p>
                <input type="text" name="characters" class="form-control" autofocus>
            </p>
        </form>

        <div id="result"></div>

        <div id="options">
            <ul>
                <li class="active" data-language="english">
                    <a href="javascript:;" accesskey="e">
                        English
                    </a>
                </li>

                <li data-language="deutsch">
                    <a href="javascript:;" accesskey="d">
                        Deutsch
                    </a>
                </li>
            </ul>
        </div>

        <div id="copyright">
            <p>
                Copyright &copy; 2016 Ben Stones, et. al. Contribute on <a href="https://github.com/bastones/phoneticgenerator" target="blank">GitHub</a>.
            </p>

            <p>
                <a href="mailto:feedback@phoneticgenerator.com">Have Feedback?</a>
            </p>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <script src="assets/js/app.js"></script>
</body>
</html>