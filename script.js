// ======================================
// AYesha PRIVATE MEMORIES
// PASSWORD SYSTEM
// ======================================


// 🔐 APNA PASSWORD YAHAN LIKHO

const correctPassword = "2002";


// Current entered password

let enteredPassword = "";


// ======================================
// NUMBER BUTTONS
// ======================================

const numberButtons =
    document.querySelectorAll(
        ".key[data-number]"
    );


numberButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            // Maximum 4 numbers

            if (
                enteredPassword.length < 4
            ) {

                enteredPassword +=
                    button.dataset.number;

                updateDots();

            }

        }
    );

});


// ======================================
// UPDATE PASSWORD DOTS
// ======================================

function updateDots() {

    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        const dot =
            document.getElementById(
                "dot" + i
            );


        if (
            i <= enteredPassword.length
        ) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    }

}


// ======================================
// CLEAR BUTTON
// ======================================

document
    .getElementById("clear")
    .addEventListener(
        "click",
        function() {

            enteredPassword = "";

            updateDots();

            document
                .getElementById("message")
                .textContent = "";

        }
    );


// ======================================
// ENTER BUTTON
// ======================================

document
    .getElementById("enter")
    .addEventListener(
        "click",
        function() {

            checkPassword();

        }
    );


// ======================================
// PASSWORD CHECK
// ======================================

function checkPassword() {

    const message =
        document.getElementById(
            "message"
        );


    // Nothing entered

    if (
        enteredPassword.length === 0
    ) {

        message.textContent =
            "Enter the secret code ♡";

        return;

    }


    // Correct password

    if (
        enteredPassword ===
        correctPassword
    ) {

        message.textContent =
            "Unlocking your memories... ♡";

        message.style.color =
            "#ff91bd";


        // Wait and then open Page 1

        setTimeout(
            function() {

                openWelcomePage();

            },
            700
        );

    }


    // Wrong password

    else {

        message.textContent =
            "Oops... try again ♡";

        message.style.color =
            "#ff9fc4";


        enteredPassword = "";

        updateDots();

    }

}


// ======================================
// PAGE 1
// ======================================

function openWelcomePage() {

    document.body.innerHTML = `

        <div class="welcome-screen">

            <div class="welcome-sparkle">
                ✦
            </div>


            <p class="welcome-small">
                WELCOME TO YOUR LITTLE WORLD
            </p>


            <h2>
                Hey <span>Ayesha</span> ♡
            </h2>


            <p class="welcome-message">

                You just unlocked a tiny world

                <br>

                made especially for you...

                <br>

                filled with memories,
                laughter & friendship. 💗

            </p>


            <div class="welcome-heart">
                ♡
            </div>


            <p class="ready">
                Are you ready to look back?
            </p>


            <button
                class="memory-button"
                onclick="goToMemories()">

                ENTER MY MEMORIES

                <span>→</span>

            </button>

        </div>

    `;


    // Add Page 1 CSS

    const style =
        document.createElement("style");


    style.innerHTML = `

        .welcome-screen {

            min-height: 100vh;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            text-align: center;

            padding: 20px;

            background:
                radial-gradient(
                    circle at center,
                    #54203f,
                    #1d0b1b 50%,
                    #080309
                );

            animation:
                welcomeIn 1s ease;

        }


        @keyframes welcomeIn {

            from {

                opacity: 0;

                transform:
                    scale(.9)
                    translateY(25px);

            }

            to {

                opacity: 1;

                transform:
                    scale(1)
                    translateY(0);

            }

        }


        .welcome-sparkle {

            color: #ff9ac5;

            font-size: 35px;

            margin-bottom: 15px;

            animation:
                sparkle 2s infinite;

        }


        @keyframes sparkle {

            50% {

                transform:
                    scale(1.3)
                    rotate(20deg);

            }

        }


        .welcome-small {

            color: #d0a8ba;

            font-size: 9px;

            letter-spacing: 5px;

            margin-bottom: 12px;

        }


        .welcome-screen h2 {

            font-family: Georgia, serif;

            font-size: 58px;

            font-weight: normal;

            margin-bottom: 15px;

        }


        .welcome-screen h2 span {

            color: #ff91bd;

            text-shadow:
                0 0 25px
                rgba(255,100,170,.4);

        }


        .welcome-message {

            color: #b9a6b3;

            font-size: 14px;

            line-height: 1.9;

        }


        .welcome-heart {

            width: 75px;

            height: 75px;

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            margin: 25px 0;

            color: #ff91bd;

            font-size: 40px;

            background:
                rgba(255,120,180,.08);

            border:
                1px solid
                rgba(255,140,190,.35);

            box-shadow:
                0 0 35px
                rgba(255,100,170,.2);

            animation:
                heartbeat 1.7s infinite;

        }


        @keyframes heartbeat {

            50% {

                transform: scale(1.08);

            }

        }


        .ready {

            color: #8e7887;

            font-size: 11px;

            margin-bottom: 12px;

        }


        .memory-button {

            padding: 14px 27px;

            border-radius: 30px;

            border:
                1px solid
                rgba(255,150,195,.5);

            background:
                linear-gradient(
                    135deg,
                    #bd5083,
                    #713452
                );

            color: white;

            cursor: pointer;

            font-size: 11px;

            letter-spacing: 1px;

            transition: .25s;

        }


        .memory-button:hover {

            transform:
                translateY(-3px)
                scale(1.03);

            box-shadow:
                0 15px 35px
                rgba(255,80,160,.3);

        }


        .memory-button span {

            margin-left: 10px;

            font-size: 16px;

        }

    `;


    document.head.appendChild(style);

}


// ======================================
// TEMPORARY PAGE 2 BUTTON
// ======================================
function goToMemories() {

    document.body.innerHTML = `

        <div class="memory-page">

            <!-- Floating decorations -->

            <div class="memory-heart mh1">♡</div>
            <div class="memory-heart mh2">♡</div>
            <div class="memory-heart mh3">✦</div>


            <div class="memory-content">


                <!-- TOP LABEL -->

                <p class="memory-label">
                    CHAPTER 01 · WHERE IT ALL BEGAN
                </p>


                <!-- TITLE -->

                <h2 class="memory-title">

                    It all started
                    <br>

                    with <span>two little girls</span> ♡

                </h2>


                <!-- INTRO -->

                <p class="memory-intro">

                    Before all the memories,
                    <br>
                    before all the crazy moments...
                    <br>
                    there was just <b>us.</b>

                </p>


                <!-- MEMORY CARD -->

                <div class="story-card">


                    <div class="story-icon">
                        🧸
                    </div>


                    <div class="story-text">

                        <span class="story-small">
                            A LITTLE THROWBACK
                        </span>


                        <h3>
                            Do you remember?
                        </h3>


                        <p>

                            We were just kids,
                            making memories without
                            even realizing how special
                            those little moments would
                            become.

                            <br><br>

                            Years passed, we grew up,
                            things changed...

                            <br><br>

                            but somehow,
                            <strong>
                                our friendship stayed
                                a beautiful part of the story.
                            </strong>

                        </p>

                    </div>


                </div>


                <!-- TIMELINE -->

                <div class="timeline">


                    <div class="timeline-item">

                        <div class="timeline-dot">
                            ♡
                        </div>

                        <div>

                            <span>
                                THEN
                            </span>

                            <p>
                                Little girls,
                                big imaginations.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-line"></div>


                    <div class="timeline-item">

                        <div class="timeline-dot">
                            ✦
                        </div>

                        <div>

                            <span>
                                SOMEWHERE ALONG THE WAY
                            </span>

                            <p>
                                We collected
                                countless memories.
                            </p>

                        </div>

                    </div>


                    <div class="timeline-line"></div>


                    <div class="timeline-item">

                        <div class="timeline-dot">
                            ♥
                        </div>

                        <div>

                            <span>
                                NOW
                            </span>

                            <p>
                                And here we are,
                                still making them.
                            </p>

                        </div>

                    </div>


                </div>


                <!-- BUTTON -->

                <button
                    class="next-memory"
                    onclick="goToPage3()">

                    NEXT MEMORY

                    <span>→</span>

                </button>


                <p class="chapter-number">
                    01 / 12
                </p>


            </div>

        </div>

    `;


    /* =================================
       PAGE 2 DESIGN
    ================================= */

    const pageStyle =
        document.createElement("style");


    pageStyle.innerHTML = `


        .memory-page {

            min-height: 100vh;

            width: 100%;

            overflow: hidden;

            position: relative;

            display: flex;

            justify-content: center;

            align-items: center;

            background:

                radial-gradient(
                    circle at 20% 20%,
                    #4b1c3c,
                    transparent 35%
                ),

                radial-gradient(
                    circle at 80% 80%,
                    #32142d,
                    transparent 35%
                ),

                #0b050d;

            color: white;

            animation: memoryAppear 1s ease;

        }


        @keyframes memoryAppear {

            from {

                opacity: 0;

                transform: scale(.97);

            }

            to {

                opacity: 1;

                transform: scale(1);

            }

        }


        /* STARS */

        .memory-page::before {

            content: "";

            position: absolute;

            inset: 0;

            background-image:

                radial-gradient(
                    white 1px,
                    transparent 1px
                );

            background-size: 80px 80px;

            opacity: .15;

            pointer-events: none;

        }


        /* FLOATING DECORATIONS */

        .memory-heart {

            position: absolute;

            color: #ff8fbc;

            opacity: .25;

            pointer-events: none;

            animation:
                memoryFloat 5s
                ease-in-out infinite;

        }


        .mh1 {

            left: 8%;

            top: 17%;

            font-size: 35px;

        }


        .mh2 {

            right: 9%;

            top: 23%;

            font-size: 28px;

            animation-delay: 1s;

        }


        .mh3 {

            left: 12%;

            bottom: 15%;

            font-size: 25px;

            animation-delay: 2s;

        }


        @keyframes memoryFloat {

            50% {

                transform:
                    translateY(-18px)
                    rotate(8deg);

            }

        }


        /* CONTENT */

        .memory-content {

            width: 100%;

            max-width: 850px;

            padding: 30px 20px;

            text-align: center;

            position: relative;

            z-index: 2;

        }


        /* LABEL */

        .memory-label {

            color: #c99caf;

            font-size: 8px;

            letter-spacing: 5px;

            margin-bottom: 10px;

        }


        /* TITLE */

        .memory-title {

            font-family: Georgia, serif;

            font-size: 45px;

            line-height: 1.1;

            font-weight: normal;

            margin-bottom: 13px;

        }


        .memory-title span {

            color: #ff91bd;

            text-shadow:

                0 0 25px
                rgba(255,100,170,.35);

        }


        /* INTRO */

        .memory-intro {

            color: #aa99a5;

            font-size: 11px;

            line-height: 1.7;

            margin-bottom: 18px;

        }


        .memory-intro b {

            color: #ffabc8;

            font-weight: normal;

        }


        /* STORY CARD */

        .story-card {

            max-width: 570px;

            margin: auto;

            display: flex;

            align-items: center;

            gap: 18px;

            text-align: left;

            padding: 20px 24px;

            border-radius: 22px;

            background:

                linear-gradient(
                    135deg,
                    rgba(255,140,190,.12),
                    rgba(255,255,255,.035)
                );

            border:

                1px solid
                rgba(255,145,195,.25);

            box-shadow:

                0 20px 50px
                rgba(0,0,0,.4);

            backdrop-filter: blur(15px);

        }


        /* ICON */

        .story-icon {

            width: 65px;

            height: 65px;

            min-width: 65px;

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            font-size: 30px;

            background:

                rgba(255,130,180,.08);

            border:

                1px solid
                rgba(255,150,195,.3);

            box-shadow:

                0 0 25px
                rgba(255,100,170,.12);

        }


        /* STORY */

        .story-small {

            color: #b98fa4;

            font-size: 7px;

            letter-spacing: 3px;

        }


        .story-text h3 {

            font-family: Georgia, serif;

            font-size: 20px;

            font-weight: normal;

            color: #ffabc9;

            margin: 4px 0 7px;

        }


        .story-text p {

            color: #ad9ba7;

            font-size: 10px;

            line-height: 1.55;

        }


        .story-text strong {

            color: #e4bdce;

            font-weight: normal;

        }


        /* TIMELINE */

        .timeline {

            max-width: 570px;

            margin: 17px auto;

            display: flex;

            align-items: center;

            justify-content: center;

        }


        .timeline-item {

            display: flex;

            align-items: center;

            gap: 7px;

            text-align: left;

        }


        .timeline-dot {

            width: 27px;

            height: 27px;

            border-radius: 50%;

            display: flex;

            align-items: center;

            justify-content: center;

            color: #ff9bc2;

            font-size: 12px;

            background:

                rgba(255,130,180,.08);

            border:

                1px solid
                rgba(255,140,190,.3);

        }


        .timeline-item span {

            color: #b88da1;

            font-size: 6px;

            letter-spacing: 2px;

        }


        .timeline-item p {

            color: #998894;

            font-size: 8px;

            margin-top: 3px;

            white-space: nowrap;

        }


        .timeline-line {

            width: 35px;

            height: 1px;

            margin: 0 7px;

            background:

                rgba(255,140,190,.25);

        }


        /* BUTTON */

        .next-memory {

            border: 1px solid
                rgba(255,150,195,.45);

            border-radius: 30px;

            padding: 12px 25px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #bd5084,
                    #713452
                );

            font-size: 9px;

            letter-spacing: 1.5px;

            cursor: pointer;

            transition: .25s;

            box-shadow:

                0 10px 30px
                rgba(255,70,150,.15);

        }


        .next-memory span {

            margin-left: 10px;

            font-size: 15px;

        }


        .next-memory:hover {

            transform:
                translateY(-3px)
                scale(1.03);

            box-shadow:

                0 15px 35px
                rgba(255,70,150,.3);

        }


        /* CHAPTER */

        .chapter-number {

            margin-top: 9px;

            color: #5f4b58;

            font-size: 7px;

            letter-spacing: 3px;

        }


        /* MOBILE */

        @media (max-width: 700px) {

            .memory-title {

                font-size: 35px;

            }


            .story-card {

                max-width: 430px;

            }


            .timeline {

                transform: scale(.85);

            }

        }


        @media (max-height: 700px) {

            .memory-content {

                padding: 12px 15px;

            }


            .memory-title {

                font-size: 34px;

            }


            .memory-intro {

                margin-bottom: 10px;

            }


            .story-card {

                padding: 14px 18px;

            }


            .story-icon {

                width: 52px;

                height: 52px;

                min-width: 52px;

                font-size: 24px;

            }


            .timeline {

                margin: 10px auto;

            }

        }

    `;


    document.head.appendChild(pageStyle);

}


// ======================================
// PAGE 3 TEMPORARY
// ======================================
function goToPage3() {

    document.body.innerHTML = `

        <div class="letter-page">

            <div class="letter-star star-one">✦</div>
            <div class="letter-star star-two">♡</div>
            <div class="letter-star star-three">✦</div>


            <div class="letter-wrapper">

                <p class="letter-label">
                    CHAPTER 02 · A LETTER FOR YOU
                </p>


                <div class="envelope-icon">
                    ♡
                </div>


                <h2 class="letter-title">

                    Things I never
                    <br>

                    <span>say enough...</span>

                </h2>


                <div class="letter-card">

                    <p class="dear">
                        Dear Ayesha,
                    </p>


                    <p>
                        I don't think I have ever properly
                        told you how much your presence
                        means to me.
                    </p>


                    <p>
                        We've grown up together, laughed
                        over the smallest things, made
                        memories we probably didn't even
                        realize we'd miss one day...
                    </p>


                    <p>
                        And when I look back at all those
                        little moments, I realize something:
                        <br><br>

                        <span class="highlight">
                            some of the best parts of my
                            childhood have your name written
                            all over them.
                        </span>
                    </p>


                    <p>
                        Life keeps changing.
                        People grow up.
                        Everything around us keeps moving.
                    </p>


                    <p>
                        But I hope that no matter how much
                        life changes, whenever you think
                        about those old days...
                        <br><br>

                        you remember that there was someone
                        who was genuinely grateful to have
                        you as a friend.
                    </p>


                    <p class="last-line">
                        And that someone is me. ♡
                    </p>


                    <div class="signature-line"></div>


                    <p class="signature">
                        Always cheering for you,
                        <br>
                        <span>your childhood friend ♡</span>
                    </p>

                </div>


                <button
                    class="letter-next"
                    onclick="goToPage4()">

                    THERE'S MORE →

                </button>


                <p class="page-count">
                    02 / 12
                </p>

            </div>

        </div>

    `;


    const style =
        document.createElement("style");


    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {
            margin: 0;
            overflow: hidden;
            font-family: Arial, sans-serif;
        }


        .letter-page {

            min-height: 100vh;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;

            padding: 20px;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 35%,
                    #54213f 0%,
                    #2b1027 38%,
                    #110711 72%,
                    #070308 100%
                );

            animation:
                letterIn 1s ease;

        }


        @keyframes letterIn {

            from {
                opacity: 0;
                transform: scale(.97);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }

        }


        /* subtle stars */

        .letter-page::before {

            content: "";

            position: absolute;
            inset: 0;

            background-image:

                radial-gradient(
                    white 1px,
                    transparent 1px
                );

            background-size: 75px 75px;

            opacity: .13;

            pointer-events: none;

        }


        /* floating decoration */

        .letter-star {

            position: absolute;

            color: #ff8fb9;

            opacity: .35;

            animation:
                letterFloat 5s infinite ease-in-out;

        }


        .star-one {

            left: 10%;
            top: 17%;
            font-size: 25px;

        }


        .star-two {

            right: 11%;
            top: 23%;
            font-size: 31px;

            animation-delay: 1s;

        }


        .star-three {

            left: 13%;
            bottom: 15%;
            font-size: 18px;

            animation-delay: 2s;

        }


        @keyframes letterFloat {

            50% {
                transform:
                    translateY(-15px)
                    rotate(8deg);
            }

        }


        /* main content */

        .letter-wrapper {

            width: 100%;
            max-width: 700px;

            text-align: center;

            position: relative;
            z-index: 2;

        }


        .letter-label {

            font-size: 8px;

            letter-spacing: 5px;

            color: #c79bad;

            margin-bottom: 10px;

        }


        /* heart */

        .envelope-icon {

            width: 50px;
            height: 50px;

            margin: 0 auto 10px;

            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ff91bd;

            font-size: 27px;

            border:
                1px solid
                rgba(255,145,190,.35);

            background:
                rgba(255,130,180,.07);

            box-shadow:
                0 0 30px
                rgba(255,90,160,.16);

            animation:
                softPulse 2s infinite;

        }


        @keyframes softPulse {

            50% {
                transform: scale(1.07);
            }

        }


        /* heading */

        .letter-title {

            font-family: Georgia, serif;

            font-size: 38px;

            line-height: 1.1;

            font-weight: normal;

            margin: 0 0 15px;

        }


        .letter-title span {

            color: #ff91bd;

            text-shadow:
                0 0 22px
                rgba(255,100,170,.3);

        }


        /* letter */

        .letter-card {

            max-width: 590px;

            margin: auto;

            padding: 23px 32px;

            text-align: left;

            border-radius: 22px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,235,245,.075),
                    rgba(255,130,180,.055)
                );

            border:
                1px solid
                rgba(255,170,205,.25);

            box-shadow:

                0 25px 70px
                rgba(0,0,0,.45),

                inset 0 0 35px
                rgba(255,130,180,.035);

            backdrop-filter: blur(18px);

        }


        .dear {

            font-family: Georgia, serif;

            color: #ff9fc4;

            font-size: 19px !important;

            margin-bottom: 13px !important;

        }


        .letter-card p {

            color: #bcaab4;

            font-size: 10px;

            line-height: 1.55;

            margin: 8px 0;

        }


        .highlight {

            color: #f0c1d3;

            font-family: Georgia, serif;

            font-size: 12px;

        }


        .last-line {

            color: #ffb0cb !important;

            font-family: Georgia, serif;

            font-size: 14px !important;

            text-align: center;

            margin-top: 14px !important;

        }


        .signature-line {

            width: 80px;

            height: 1px;

            background:
                rgba(255,150,195,.3);

            margin: 13px 0 7px;

        }


        .signature {

            color: #897582 !important;

            font-size: 8px !important;

            line-height: 1.5 !important;

        }


        .signature span {

            color: #c58da6;

        }


        /* button */

        .letter-next {

            margin-top: 16px;

            padding: 11px 25px;

            border-radius: 30px;

            border:
                1px solid
                rgba(255,150,195,.4);

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b94e80,
                    #713453
                );

            font-size: 9px;

            letter-spacing: 1.5px;

            cursor: pointer;

            transition: .25s;

        }


        .letter-next:hover {

            transform:
                translateY(-3px)
                scale(1.03);

            box-shadow:
                0 12px 30px
                rgba(255,70,150,.25);

        }


        .page-count {

            color: #594652;

            font-size: 7px;

            letter-spacing: 3px;

            margin-top: 8px;

        }


        /* smaller screens */

        @media (max-height: 700px) {

            .letter-page {
                padding: 10px;
            }


            .envelope-icon {

                width: 42px;
                height: 42px;

                font-size: 22px;

                margin-bottom: 5px;

            }


            .letter-title {

                font-size: 30px;

                margin-bottom: 9px;

            }


            .letter-card {

                padding: 15px 22px;

            }


            .letter-card p {

                font-size: 9px;

                line-height: 1.4;

                margin: 5px 0;

            }


            .dear {

                font-size: 16px !important;

                margin-bottom: 7px !important;

            }


            .last-line {

                margin-top: 8px !important;

            }


            .letter-next {

                margin-top: 9px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ======================================
// PAGE 4 TEMPORARY
// ======================================
// ======================================
// PAGE 4
// BESTIE KUCHU PUCHU
// ======================================

function goToPage4() {

    document.body.innerHTML = `

        <div class="question-page">

            <!-- Floating hearts -->

            <div class="q-heart qh1">♡</div>
            <div class="q-heart qh2">♡</div>
            <div class="q-heart qh3">✦</div>
            <div class="q-heart qh4">♡</div>


            <div class="question-content">


                <p class="question-label">
                    CHAPTER 03 · A LITTLE GAME
                </p>


                <div class="question-icon">
                    💗
                </div>


                <h1 class="question-title">

                    Bestie...

                    <br>

                    <span>kuchu puchu? 🥺</span>

                </h1>


                <p class="question-subtitle">

                    Promise gussa nahi karogi? 🤭

                    <br>

                    Sirf kuch dil wali baatein hain...

                </p>


                <!-- QUESTION CARD -->

                <div class="question-card">


                    <p class="question-number">
                        QUESTION 01
                    </p>


                    <h2>

                        Humari friendship mein
                        <br>

                        sabse precious kya hai?

                    </h2>


                    <div class="answer-buttons">


                        <button
                            onclick="answerOne('memories')">

                            📸

                            <span>
                                Our memories
                            </span>

                        </button>


                        <button
                            onclick="answerOne('pagalpan')">

                            😂

                            <span>
                                Our pagalpan
                            </span>

                        </button>


                        <button
                            onclick="answerOne('together')">

                            🤍

                            <span>
                                The fact that we're
                                still here
                            </span>

                        </button>


                    </div>


                    <p
                        id="question-response">
                    </p>


                </div>


                <p class="question-footer">

                    03 / 12 · MADE WITH A LOT OF LOVE FOR MY BESTIE ♡

                </p>


            </div>

        </div>

    `;


    // ==================================
    // PAGE 4 STYLE
    // ==================================

    const style =
        document.createElement("style");


    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            font-family: Arial, sans-serif;

            overflow: hidden;

        }


        .question-page {

            min-height: 100vh;

            width: 100%;

            position: relative;

            display: flex;

            align-items: center;

            justify-content: center;

            text-align: center;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 30%,
                    #67264e 0%,
                    #35142f 35%,
                    #160915 70%,
                    #080308 100%
                );

            animation:
                questionIn 1s ease;

        }


        @keyframes questionIn {

            from {

                opacity: 0;

                transform: scale(.96);

            }

            to {

                opacity: 1;

                transform: scale(1);

            }

        }


        /* STARS */

        .question-page::before {

            content: "";

            position: absolute;

            inset: 0;

            background-image:

                radial-gradient(
                    white 1px,
                    transparent 1px
                );

            background-size: 75px 75px;

            opacity: .14;

            pointer-events: none;

        }


        /* FLOATING HEARTS */

        .q-heart {

            position: absolute;

            color: #ff8fbb;

            opacity: .3;

            pointer-events: none;

            animation:
                qFloat 5s infinite ease-in-out;

        }


        .qh1 {

            left: 8%;

            top: 17%;

            font-size: 38px;

        }


        .qh2 {

            right: 8%;

            top: 20%;

            font-size: 28px;

            animation-delay: 1s;

        }


        .qh3 {

            left: 13%;

            bottom: 15%;

            font-size: 25px;

            animation-delay: 2s;

        }


        .qh4 {

            right: 12%;

            bottom: 16%;

            font-size: 35px;

            animation-delay: 3s;

        }


        @keyframes qFloat {

            50% {

                transform:
                    translateY(-18px)
                    rotate(8deg);

            }

        }


        /* CONTENT */

        .question-content {

            width: 100%;

            max-width: 750px;

            padding: 20px;

            position: relative;

            z-index: 2;

        }


        /* LABEL */

        .question-label {

            color: #d2a4b8;

            font-size: 10px;

            letter-spacing: 5px;

            margin-bottom: 12px;

        }


        /* ICON */

        .question-icon {

            width: 65px;

            height: 65px;

            margin: auto;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            font-size: 30px;

            background:
                rgba(255,130,180,.08);

            border:
                1px solid
                rgba(255,150,195,.35);

            box-shadow:

                0 0 35px
                rgba(255,90,160,.18);

            animation:
                questionBeat 1.8s infinite;

        }


        @keyframes questionBeat {

            50% {

                transform: scale(1.08);

            }

        }


        /* TITLE */

        .question-title {

            font-family: Georgia, serif;

            font-size: 48px;

            line-height: 1.12;

            font-weight: normal;

            margin: 12px 0;

        }


        .question-title span {

            color: #ff91bd;

            text-shadow:

                0 0 25px
                rgba(255,100,170,.4);

        }


        /* SUBTITLE */

        .question-subtitle {

            color: #c1aeb9;

            font-size: 15px;

            line-height: 1.7;

            margin-bottom: 18px;

        }


        /* CARD */

        .question-card {

            width: 100%;

            max-width: 570px;

            margin: auto;

            padding: 24px 28px;

            border-radius: 25px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,145,195,.12),
                    rgba(255,255,255,.045)
                );

            border:
                1px solid
                rgba(255,160,200,.3);

            box-shadow:

                0 25px 70px
                rgba(0,0,0,.5);

            backdrop-filter: blur(18px);

        }


        /* NUMBER */

        .question-number {

            color: #bc8da4;

            font-size: 9px;

            letter-spacing: 4px;

            margin-bottom: 12px;

        }


        /* QUESTION */

        .question-card h2 {

            font-family: Georgia, serif;

            font-size: 25px;

            line-height: 1.35;

            font-weight: normal;

            color: #f1d9e4;

            margin-bottom: 18px;

        }


        /* ANSWERS */

        .answer-buttons {

            display: flex;

            flex-direction: column;

            gap: 10px;

        }


        .answer-buttons button {

            width: 100%;

            min-height: 52px;

            display: flex;

            align-items: center;

            justify-content: flex-start;

            gap: 15px;

            padding: 10px 18px;

            border-radius: 16px;

            border:
                1px solid
                rgba(255,150,195,.2);

            background:
                rgba(255,255,255,.045);

            color: #d9c5ce;

            font-size: 14px;

            cursor: pointer;

            transition: .25s;

        }


        .answer-buttons button:hover {

            transform:
                translateX(5px);

            border-color:
                rgba(255,145,190,.55);

            background:
                rgba(255,120,180,.1);

        }


        .answer-buttons button:first-child {

            font-size: 14px;

        }


        .answer-buttons button span {

            color: #d6c1cc;

        }


        /* RESPONSE */

        #question-response {

            min-height: 20px;

            margin: 14px 0 0;

            color: #ff9fc5;

            font-family: Georgia, serif;

            font-size: 15px;

        }


        /* FOOTER */

        .question-footer {

            color: #695363;

            font-size: 8px;

            letter-spacing: 2px;

            margin-top: 12px;

        }


        /* SMALL HEIGHT */

        @media (max-height: 700px) {

            .question-content {

                padding: 8px 15px;

            }


            .question-icon {

                width: 48px;

                height: 48px;

                font-size: 23px;

            }


            .question-title {

                font-size: 36px;

                margin: 7px 0;

            }


            .question-subtitle {

                font-size: 12px;

                margin-bottom: 10px;

            }


            .question-card {

                padding: 16px 20px;

            }


            .question-card h2 {

                font-size: 19px;

                margin-bottom: 12px;

            }


            .answer-buttons {

                gap: 6px;

            }


            .answer-buttons button {

                min-height: 43px;

                font-size: 12px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ======================================
// ANSWER FUNCTION
// ======================================

function answerOne(answer) {

    const response =
        document.getElementById(
            "question-response"
        );


    if (answer === "memories") {

        response.textContent =
            "Exactlyyy 🥹💗 You understood the assignment.";

    }


    else if (answer === "pagalpan") {

        response.textContent =
            "HAHAHA 😂 Obviously! Warna hum hum kaise hote?";

    }


    else if (answer === "together") {

        response.textContent =
            "Okayyy... this one actually made me emotional. 🥹🤍";

    }


    setTimeout(function() {

        showNextQuestion();

    }, 1300);

}


// ======================================
// QUESTION 2
// ======================================

function showNextQuestion() {

    const card =
        document.querySelector(
            ".question-card"
        );


    card.innerHTML = `

        <p class="question-number">
            QUESTION 02
        </p>


        <h2>

            Agar humari friendship
            <br>

            ek word hoti...

            <br>

            woh kya hoti? 🥹

        </h2>


        <div class="answer-buttons">

            <button
                onclick="finishQuestions('crazy')">

                😂

                <span>
                    Crazy
                </span>

            </button>


            <button
                onclick="finishQuestions('forever')">

                ♡

                <span>
                    One of a kind
                </span>

            </button>


            <button
                onclick="finishQuestions('memories')">

                ✨

                <span>
                    Full of memories
                </span>

            </button>

        </div>


        <p id="question-response"></p>

    `;

}


// ======================================
// FINISH PAGE 4
// ======================================

function finishQuestions(answer) {

    const response =
        document.getElementById(
            "question-response"
        );


    if (answer === "crazy") {

        response.textContent =
            "Correct 😂 and honestly... no explanation needed.";

    }


    else if (answer === "forever") {

        response.textContent =
            "Awww 🥹🤍 now you're making this too emotional.";

    }


    else {

        response.textContent =
            "YESSS ✨ because we have way too many of them.";

    }


    setTimeout(function() {

        showPage4Ending();

    }, 1500);

}


// ======================================
// PAGE 4 ENDING
// ======================================

function showPage4Ending() {

    const card =
        document.querySelector(
            ".question-card"
        );


    card.innerHTML = `

        <div style="
            text-align:center;
            padding:15px 5px;
        ">

            <div style="
                font-size:45px;
                margin-bottom:12px;
            ">
                🥹💗
            </div>


            <h2 style="
                color:#ff9fc5;
                margin-bottom:12px;
            ">

                Okay bestie...

            </h2>


            <p style="
                color:#c5b0bb;
                font-size:15px;
                line-height:1.7;
            ">

                Ab aur questions nahi...

                <br>

                warna main khud ro dungi. 😂

                <br><br>

                But trust me...

                <br>

                <strong style="color:#f1cada;">
                    the best part is still waiting.
                </strong>

            </p>


            <button
                onclick="goToPage5()"
                style="
                    margin-top:15px;
                    padding:13px 25px;
                    border-radius:30px;
                    border:1px solid rgba(255,150,195,.4);
                    background:linear-gradient(135deg,#bd5084,#713452);
                    color:white;
                    cursor:pointer;
                    font-size:11px;
                    letter-spacing:1px;
                "
            >

                SHOW ME THE NEXT ONE →

            </button>

        </div>

    `;

}


// ======================================
// PAGE 5 TEMPORARY
// ======================================
// ======================================
// PAGE 5
// THE LITTLE THINGS I REMEMBER
// ======================================

function goToPage5() {

    document.body.innerHTML = `

        <div class="vault-page">

            <!-- Decorative elements -->

            <div class="vault-orb orb-one"></div>
            <div class="vault-orb orb-two"></div>

            <div class="vault-symbol symbol-one">♡</div>
            <div class="vault-symbol symbol-two">✦</div>


            <main class="vault-content">


                <!-- HEADER -->

                <div class="vault-header">

                    <p class="vault-label">
                        CHAPTER 04 · MEMORY VAULT
                    </p>

                    <h1>
                        The little things
                        <br>
                        <span>I remember</span>
                    </h1>

                    <p class="vault-intro">

                        Some memories are not big enough
                        <br>
                        to become stories...

                        <br>

                        but somehow, they stay with us
                        forever. ♡

                    </p>

                </div>


                <!-- MEMORY GRID -->

                <div class="memory-grid">


                    <!-- CARD 1 -->

                    <article class="vault-card">

                        <div class="card-top">

                            <span class="memory-number">
                                01
                            </span>

                            <span class="memory-icon">
                                ☁
                            </span>

                        </div>


                        <div class="memory-line"></div>


                        <h2>
                            The silly moments
                        </h2>


                        <p>

                            The moments that made
                            absolutely no sense...

                            <br>

                            yet somehow made us laugh
                            until we couldn't breathe. 😂

                        </p>


                        <span class="card-tag">
                            LAUGHTER
                        </span>

                    </article>


                    <!-- CARD 2 -->

                    <article class="vault-card featured">

                        <div class="card-top">

                            <span class="memory-number">
                                02
                            </span>

                            <span class="memory-icon">
                                ♡
                            </span>

                        </div>


                        <div class="memory-line"></div>


                        <h2>
                            The little talks
                        </h2>


                        <p>

                            Random conversations,
                            endless stories,

                            <br>

                            and those talks where
                            somehow time just disappeared.

                        </p>


                        <span class="card-tag">
                            OUR TALKS
                        </span>

                    </article>


                    <!-- CARD 3 -->

                    <article class="vault-card">

                        <div class="card-top">

                            <span class="memory-number">
                                03
                            </span>

                            <span class="memory-icon">
                                ✦
                            </span>

                        </div>


                        <div class="memory-line"></div>


                        <h2>
                            Growing up together
                        </h2>


                        <p>

                            We didn't realize it then...

                            <br>

                            but while growing up,
                            we were quietly collecting
                            memories.

                        </p>


                        <span class="card-tag">
                            YEARS
                        </span>

                    </article>


                    <!-- CARD 4 -->

                    <article class="vault-card">

                        <div class="card-top">

                            <span class="memory-number">
                                04
                            </span>

                            <span class="memory-icon">
                                ♡
                            </span>

                        </div>


                        <div class="memory-line"></div>


                        <h2>
                            Still us
                        </h2>


                        <p>

                            And maybe that's my
                            favorite part...

                            <br>

                            after everything,
                            we're still making memories.

                        </p>


                        <span class="card-tag">
                            ALWAYS
                        </span>

                    </article>


                </div>


                <!-- BOTTOM MESSAGE -->

                <div class="vault-note">

                    <span>♡</span>

                    <p>

                        Maybe one day we'll look back
                        at these days and smile...

                        <br>

                        because we had no idea
                        how beautiful they were.

                    </p>

                    <span>♡</span>

                </div>


                <!-- NEXT -->

                <button
                    class="vault-next"
                    onclick="goToPage6()">

                    OPEN THE NEXT MEMORY

                    <span>→</span>

                </button>


                <p class="vault-count">
                    04 / 12
                </p>


            </main>

        </div>

    `;


    // ==================================
    // PAGE 5 CSS
    // ==================================

    const style =
        document.createElement("style");


    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            font-family:
                Arial,
                sans-serif;

            overflow: hidden;

        }


        /* ==============================
           MAIN PAGE
        ============================== */

        .vault-page {

            min-height: 100vh;

            width: 100%;

            position: relative;

            display: flex;

            align-items: center;

            justify-content: center;

            overflow: hidden;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 20%,
                    #4b1d3c 0%,
                    #2b1128 35%,
                    #120711 72%,
                    #070308 100%
                );

            animation:
                vaultIn .8s ease;

        }


        @keyframes vaultIn {

            from {

                opacity: 0;

                transform: scale(.98);

            }

            to {

                opacity: 1;

                transform: scale(1);

            }

        }


        /* ==============================
           SOFT BACKGROUND LIGHT
        ============================== */

        .vault-page::before {

            content: "";

            position: absolute;

            inset: 0;

            background:

                radial-gradient(
                    circle at 50% 50%,
                    rgba(255,120,180,.06),
                    transparent 45%
                );

            pointer-events: none;

        }


        /* ==============================
           ORBS
        ============================== */

        .vault-orb {

            position: absolute;

            border-radius: 50%;

            filter: blur(60px);

            pointer-events: none;

            opacity: .25;

        }


        .orb-one {

            width: 220px;

            height: 220px;

            background:
                rgba(255,80,170,.16);

            left: -100px;

            top: 20%;

        }


        .orb-two {

            width: 260px;

            height: 260px;

            background:
                rgba(170,70,150,.12);

            right: -120px;

            bottom: 10%;

        }


        /* ==============================
           DECORATIONS
        ============================== */

        .vault-symbol {

            position: absolute;

            color: #ff8db9;

            opacity: .22;

            pointer-events: none;

            animation:
                vaultFloat 5s ease-in-out infinite;

        }


        .symbol-one {

            left: 7%;

            top: 18%;

            font-size: 38px;

        }


        .symbol-two {

            right: 8%;

            top: 20%;

            font-size: 25px;

            animation-delay: 1.5s;

        }


        @keyframes vaultFloat {

            50% {

                transform:
                    translateY(-15px)
                    rotate(7deg);

            }

        }


        /* ==============================
           CONTENT
        ============================== */

        .vault-content {

            width: 100%;

            max-width: 950px;

            padding: 22px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* ==============================
           HEADER
        ============================== */

        .vault-label {

            margin: 0 0 8px;

            color: #c69caf;

            font-size: 9px;

            letter-spacing: 5px;

        }


        .vault-header h1 {

            margin: 0 0 10px;

            font-family:
                Georgia,
                serif;

            font-size: 42px;

            line-height: 1.08;

            font-weight: normal;

        }


        .vault-header h1 span {

            color: #ff91bd;

            text-shadow:
                0 0 25px
                rgba(255,90,160,.3);

        }


        .vault-intro {

            margin: 0 auto 20px;

            color: #aa98a5;

            font-size: 13px;

            line-height: 1.65;

        }


        /* ==============================
           GRID
        ============================== */

        .memory-grid {

            width: 100%;

            max-width: 760px;

            margin: auto;

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap: 12px;

        }


        /* ==============================
           CARD
        ============================== */

        .vault-card {

            padding: 15px 18px;

            min-height: 145px;

            text-align: left;

            border-radius: 18px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,145,195,.095),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,160,200,.18);

            box-shadow:
                0 15px 40px
                rgba(0,0,0,.3);

            backdrop-filter:
                blur(14px);

            transition:
                transform .25s,
                border-color .25s,
                background .25s;

        }


        .vault-card:hover {

            transform:
                translateY(-5px);

            border-color:
                rgba(255,145,195,.4);

            background:

                linear-gradient(
                    145deg,
                    rgba(255,145,195,.14),
                    rgba(255,255,255,.05)
                );

        }


        .vault-card.featured {

            border-color:
                rgba(255,145,195,.32);

            box-shadow:

                0 15px 45px
                rgba(255,70,150,.08);

        }


        /* ==============================
           CARD TOP
        ============================== */

        .card-top {

            display: flex;

            align-items: center;

            justify-content: space-between;

        }


        .memory-number {

            color: #806273;

            font-size: 8px;

            letter-spacing: 2px;

        }


        .memory-icon {

            color: #ff9bc1;

            font-size: 19px;

        }


        /* ==============================
           LINE
        ============================== */

        .memory-line {

            width: 32px;

            height: 1px;

            margin: 7px 0;

            background:
                rgba(255,145,190,.3);

        }


        /* ==============================
           CARD TEXT
        ============================== */

        .vault-card h2 {

            margin: 0 0 6px;

            color: #efd5e1;

            font-family:
                Georgia,
                serif;

            font-size: 18px;

            font-weight: normal;

        }


        .vault-card p {

            margin: 0 0 9px;

            color: #a997a4;

            font-size: 10px;

            line-height: 1.55;

        }


        .card-tag {

            color: #bc829e;

            font-size: 7px;

            letter-spacing: 3px;

        }


        /* ==============================
           NOTE
        ============================== */

        .vault-note {

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 14px;

            margin: 15px auto 12px;

            max-width: 620px;

        }


        .vault-note span {

            color: #ff8fb9;

            font-size: 18px;

        }


        .vault-note p {

            margin: 0;

            color: #9f8b97;

            font-family:
                Georgia,
                serif;

            font-size: 11px;

            line-height: 1.5;

        }


        /* ==============================
           BUTTON
        ============================== */

        .vault-next {

            border:

                1px solid
                rgba(255,150,195,.4);

            border-radius: 30px;

            padding: 11px 24px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b84d80,
                    #703452
                );

            font-size: 9px;

            letter-spacing: 1.5px;

            cursor: pointer;

            transition: .25s;

        }


        .vault-next span {

            margin-left: 9px;

            font-size: 14px;

        }


        .vault-next:hover {

            transform:
                translateY(-3px);

            box-shadow:

                0 12px 30px
                rgba(255,70,150,.25);

        }


        /* ==============================
           PAGE NUMBER
        ============================== */

        .vault-count {

            margin: 7px 0 0;

            color: #5b4553;

            font-size: 7px;

            letter-spacing: 3px;

        }


        /* ==============================
           RESPONSIVE
        ============================== */

        @media (max-width: 650px) {

            .vault-header h1 {

                font-size: 34px;

            }


            .vault-intro {

                font-size: 11px;

            }


            .memory-grid {

                grid-template-columns:
                    1fr;

                max-width: 430px;

            }


            .vault-card {

                min-height: auto;

            }


            .vault-note {

                display: none;

            }

        }


        @media (max-height: 700px) {

            .vault-content {

                padding: 10px 18px;

            }


            .vault-header h1 {

                font-size: 32px;

            }


            .vault-intro {

                margin-bottom: 10px;

                font-size: 10px;

            }


            .memory-grid {

                gap: 7px;

            }


            .vault-card {

                min-height: 115px;

                padding: 10px 14px;

            }


            .vault-card h2 {

                font-size: 15px;

                margin-bottom: 4px;

            }


            .vault-card p {

                font-size: 8px;

                margin-bottom: 5px;

            }


            .vault-note {

                margin: 8px auto;

            }

        }

    `;


    document.head.appendChild(style);

}


// ======================================
// PAGE 6 TEMPORARY
// ======================================

// ======================================
// PAGE 6
// IF I COULD KEEP ONE THING
// ======================================

function goToPage6() {

    document.body.innerHTML = `

        <div class="memory-page">


            <!-- BACKGROUND DECORATION -->

            <div class="memory-glow glow-left"></div>

            <div class="memory-glow glow-right"></div>


            <div class="floating-heart heart-left">
                ♡
            </div>

            <div class="floating-heart heart-right">
                ✦
            </div>


            <!-- MAIN CONTENT -->

            <main class="memory-content">


                <p class="chapter-label">
                    CHAPTER 05 · ONE LITTLE THOUGHT
                </p>


                <div class="memory-mark">
                    ✦
                </div>


                <h1 class="memory-title">

                    If I could keep
                    <br>

                    <span>one thing...</span>

                </h1>


                <p class="memory-intro">

                    from all the years we've spent
                    <br>

                    growing up together...

                </p>


                <!-- MAIN CARD -->

                <section class="memory-letter">


                    <div class="quote-mark">
                        “
                    </div>


                    <p class="memory-question">

                        I think I'd keep
                        <span>the feeling</span>
                        of knowing...

                    </p>


                    <p class="memory-text">

                        that somewhere in this huge world,
                        there was always a girl who knew me
                        from the days when we were both
                        still figuring life out.

                    </p>


                    <div class="divider">
                        <span>♡</span>
                    </div>


                    <p class="memory-text">

                        Before everything became complicated.
                        Before life got busy.
                        Before we started growing up...

                    </p>


                    <p class="memory-highlight">

                        there was just us,
                        our silly conversations,
                        our random laughs,
                        and a thousand little moments
                        that became memories.

                    </p>


                    <div class="small-note">

                        And honestly...

                        <br>

                        <strong>
                            I'd choose those moments
                            all over again.
                        </strong>

                    </div>


                </section>


                <!-- BOTTOM -->

                <div class="memory-bottom">


                    <p>

                        Some people become memories.

                        <br>

                        <span>
                            Some become a part of them.
                        </span>

                    </p>


                    <button
                        onclick="goToPage7()">

                        SHOW ME THE MEMORIES

                        <b>→</b>

                    </button>


                    <div class="page-number">
                        05 / 12
                    </div>


                </div>


            </main>

        </div>

    `;


    // ==================================
    // PAGE 6 CSS
    // ==================================

    const style =
        document.createElement("style");


    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            font-family:
                Arial,
                sans-serif;

            overflow-x: hidden;

            overflow-y: auto;

            background: #0b040a;

        }


        /* ==============================
           MAIN BACKGROUND
        ============================== */

        .memory-page {

            min-height: 100vh;

            width: 100%;

            position: relative;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 50px 25px;

            color: white;

            overflow: hidden;

            background:

                radial-gradient(
                    circle at 50% 25%,
                    #642748 0%,
                    #37152f 30%,
                    #180a17 65%,
                    #080308 100%
                );

            animation:
                memoryAppear .8s ease;

        }


        @keyframes memoryAppear {

            from {

                opacity: 0;

                transform:
                    translateY(15px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        /* ==============================
           BACKGROUND GLOW
        ============================== */

        .memory-glow {

            position: absolute;

            width: 350px;

            height: 350px;

            border-radius: 50%;

            filter: blur(100px);

            opacity: .16;

            pointer-events: none;

        }


        .glow-left {

            background: #e96b9f;

            left: -180px;

            top: 20%;

        }


        .glow-right {

            background: #a64c9b;

            right: -180px;

            bottom: 15%;

        }


        /* ==============================
           FLOATING DECORATION
        ============================== */

        .floating-heart {

            position: absolute;

            color: #ff8eb9;

            opacity: .3;

            font-size: 32px;

            animation:
                slowFloat 5s ease-in-out infinite;

        }


        .heart-left {

            left: 8%;

            top: 22%;

        }


        .heart-right {

            right: 9%;

            top: 28%;

            animation-delay: 1.5s;

        }


        @keyframes slowFloat {

            50% {

                transform:
                    translateY(-18px)
                    rotate(8deg);

            }

        }


        /* ==============================
           CONTENT
        ============================== */

        .memory-content {

            width: 100%;

            max-width: 850px;

            text-align: center;

            position: relative;

            z-index: 2;

        }


        /* ==============================
           LABEL
        ============================== */

        .chapter-label {

            margin: 0 0 14px;

            color: #d0a1b7;

            font-size: 11px;

            letter-spacing: 5px;

        }


        /* ==============================
           SYMBOL
        ============================== */

        .memory-mark {

            width: 62px;

            height: 62px;

            margin: auto;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            color: #ff9bc2;

            font-size: 25px;

            border:
                1px solid
                rgba(255,150,195,.3);

            background:
                rgba(255,140,190,.07);

            box-shadow:
                0 0 35px
                rgba(255,90,160,.12);

        }


        /* ==============================
           TITLE
        ============================== */

        .memory-title {

            margin: 18px 0 10px;

            font-family:
                Georgia,
                serif;

            font-size: 52px;

            line-height: 1.1;

            font-weight: normal;

        }


        .memory-title span {

            color: #ff91bd;

            text-shadow:
                0 0 25px
                rgba(255,90,160,.3);

        }


        /* ==============================
           INTRO
        ============================== */

        .memory-intro {

            color: #bdaab6;

            font-size: 16px;

            line-height: 1.7;

            margin: 0 0 25px;

        }


        /* ==============================
           LETTER CARD
        ============================== */

        .memory-letter {

            width: 100%;

            max-width: 680px;

            margin: auto;

            padding: 35px 45px;

            position: relative;

            text-align: left;

            border-radius: 28px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,150,195,.12),
                    rgba(255,255,255,.045)
                );

            border:
                1px solid
                rgba(255,165,205,.28);

            box-shadow:

                0 30px 80px
                rgba(0,0,0,.5),

                inset 0 0 40px
                rgba(255,120,180,.03);

            backdrop-filter:
                blur(20px);

        }


        /* ==============================
           QUOTE
        ============================== */

        .quote-mark {

            position: absolute;

            right: 30px;

            top: 12px;

            color: #ff91bb;

            opacity: .2;

            font-family:
                Georgia,
                serif;

            font-size: 80px;

            line-height: 1;

        }


        /* ==============================
           QUESTION
        ============================== */

        .memory-question {

            color: #ead3de;

            font-family:
                Georgia,
                serif;

            font-size: 25px;

            line-height: 1.5;

            margin: 0 0 18px;

        }


        .memory-question span {

            color: #ff9bc1;

        }


        /* ==============================
           TEXT
        ============================== */

        .memory-text {

            color: #c1adb8;

            font-size: 15px;

            line-height: 1.8;

            margin: 0 0 17px;

        }


        /* ==============================
           HIGHLIGHT
        ============================== */

        .memory-highlight {

            color: #e2c5d3;

            font-family:
                Georgia,
                serif;

            font-size: 17px;

            line-height: 1.75;

            margin: 15px 0;

        }


        /* ==============================
           DIVIDER
        ============================== */

        .divider {

            display: flex;

            align-items: center;

            gap: 12px;

            margin: 18px 0;

            color: #ff91b9;

        }


        .divider::before,
        .divider::after {

            content: "";

            height: 1px;

            flex: 1;

            background:
                rgba(255,150,195,.18);

        }


        /* ==============================
           NOTE
        ============================== */

        .small-note {

            margin-top: 20px;

            padding-top: 17px;

            border-top:
                1px solid
                rgba(255,150,195,.13);

            color: #9f8b97;

            font-family:
                Georgia,
                serif;

            font-size: 14px;

            line-height: 1.7;

        }


        .small-note strong {

            color: #ff9fc3;

            font-weight: normal;

        }


        /* ==============================
           BOTTOM
        ============================== */

        .memory-bottom {

            margin-top: 22px;

            text-align: center;

        }


        .memory-bottom p {

            color: #8e7987;

            font-family:
                Georgia,
                serif;

            font-size: 13px;

            line-height: 1.6;

            margin: 0 0 14px;

        }


        .memory-bottom p span {

            color: #bd91a7;

        }


        /* ==============================
           BUTTON
        ============================== */

        .memory-bottom button {

            padding: 13px 27px;

            border-radius: 30px;

            border:
                1px solid
                rgba(255,150,195,.42);

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b64c7f,
                    #703451
                );

            font-size: 10px;

            letter-spacing: 1.5px;

            cursor: pointer;

            transition: .25s;

        }


        .memory-bottom button b {

            margin-left: 10px;

            font-size: 15px;

        }


        .memory-bottom button:hover {

            transform:
                translateY(-3px);

            box-shadow:

                0 12px 35px
                rgba(255,70,150,.25);

        }


        /* ==============================
           PAGE NUMBER
        ============================== */

        .page-number {

            margin-top: 10px;

            color: #5e4856;

            font-size: 8px;

            letter-spacing: 3px;

        }


        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 650px) {

            .memory-page {

                padding: 35px 17px;

                align-items: flex-start;

            }


            .chapter-label {

                font-size: 8px;

                letter-spacing: 3px;

            }


            .memory-title {

                font-size: 38px;

            }


            .memory-intro {

                font-size: 14px;

            }


            .memory-letter {

                padding: 28px 23px;

            }


            .memory-question {

                font-size: 21px;

            }


            .memory-text {

                font-size: 14px;

            }


            .memory-highlight {

                font-size: 15px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ======================================
// PAGE 7 TEMPORARY
// ======================================
// ======================================
// PAGE 7
// OUR MEMORY WALL
// ======================================

// ==========================================
// PAGE 7
// TWO MEMORIES
// ==========================================

function goToPage7() {

    document.body.innerHTML = `

        <div class="memories-page">

            <!-- BACKGROUND DECORATION -->

            <div class="memory-glow glow-left"></div>
            <div class="memory-glow glow-right"></div>

            <div class="tiny-star star-one">✦</div>
            <div class="tiny-star star-two">✦</div>
            <div class="tiny-heart heart-one">♡</div>
            <div class="tiny-heart heart-two">♡</div>


            <!-- MAIN CONTENT -->

            <main class="memories-content">


                <!-- HEADER -->

                <div class="memories-header">

                    <p class="chapter">
                        CHAPTER 06 · OUR MEMORIES
                    </p>


                    <h1>
                        A few moments
                        <br>
                        <span>worth keeping.</span>
                    </h1>


                    <p class="header-text">

                        Two pictures...
                        <br>

                        but a thousand little memories
                        hiding inside them. ♡

                    </p>

                </div>


                <!-- PHOTO SECTION -->

                <section class="memory-gallery">


                    <!-- PHOTO ONE -->

                    <article class="memory-frame frame-one">

                        <div class="photo-box">

                            <img
                                src="photo1.jpg"
                                alt="A beautiful memory"
                            >

                            <div class="photo-overlay">
                                <span>♡</span>
                            </div>

                        </div>


                        <div class="photo-caption">

                            <p class="photo-number">
                                MEMORY · 01
                            </p>

                            <h2>
                                The beginning ♡
                            </h2>

                            <p>
                                One picture,
                                one beautiful memory,
                                and a moment I'll always keep.
                            </p>

                        </div>

                    </article>


                    <!-- PHOTO TWO -->

                    <article class="memory-frame frame-two">

                        <div class="photo-box">

                            <img
                                src="photo2.jpg"
                                alt="A beautiful memory"
                            >

                            <div class="photo-overlay">
                                <span>✦</span>
                            </div>

                        </div>


                        <div class="photo-caption">

                            <p class="photo-number">
                                MEMORY · 02
                            </p>

                            <h2>
                                Still us ✨
                            </h2>

                            <p>
                                Different days,
                                different moments,
                                but the same old friendship.
                            </p>

                        </div>

                    </article>


                </section>


                <!-- LITTLE MESSAGE -->

                <div class="memory-message">

                    <div class="message-line"></div>

                    <div class="message-center">

                        <span class="message-heart">
                            ♡
                        </span>

                        <p>

                            Some pictures capture a moment.

                            <br>

                            <strong>
                                These ones captured a piece of us.
                            </strong>

                        </p>

                    </div>

                    <div class="message-line"></div>

                </div>


                <!-- NEXT BUTTON -->

                <button
                    class="next-memory"
                    onclick="goToPage8()">

                    <span>
                        THERE'S MORE TO THIS STORY
                    </span>

                    <b>→</b>

                </button>


                <p class="page-count">
                    06 / 12
                </p>


            </main>

        </div>

    `;


    // ==========================================
    // PAGE 7 CSS
    // ==========================================

    const style = document.createElement("style");


    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            overflow-x: hidden;

            overflow-y: auto;

            font-family:
                Arial,
                sans-serif;

            background: #090309;

        }


        /* ======================================
           MAIN PAGE
        ====================================== */

        .memories-page {

            min-height: 100vh;

            width: 100%;

            position: relative;

            padding: 50px 25px;

            display: flex;

            justify-content: center;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 10%,
                    #67294b 0%,
                    #3b1732 30%,
                    #1c0b19 62%,
                    #090309 100%
                );

            animation:
                pageEnter .8s ease;

        }


        @keyframes pageEnter {

            from {

                opacity: 0;

                transform:
                    translateY(20px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        /* ======================================
           GLOW
        ====================================== */

        .memory-glow {

            position: absolute;

            width: 330px;

            height: 330px;

            border-radius: 50%;

            filter: blur(100px);

            opacity: .16;

            pointer-events: none;

        }


        .glow-left {

            left: -170px;

            top: 25%;

            background: #ff72ad;

        }


        .glow-right {

            right: -170px;

            bottom: 20%;

            background: #a44d9b;

        }


        /* ======================================
           FLOATING DECORATION
        ====================================== */

        .tiny-star,
        .tiny-heart {

            position: absolute;

            color: #ff91bb;

            opacity: .3;

            pointer-events: none;

            animation:
                floating 5s ease-in-out infinite;

        }


        .star-one {

            right: 9%;

            top: 17%;

            font-size: 25px;

        }


        .star-two {

            left: 12%;

            bottom: 18%;

            font-size: 18px;

            animation-delay: 1.5s;

        }


        .heart-one {

            left: 7%;

            top: 28%;

            font-size: 38px;

        }


        .heart-two {

            right: 7%;

            bottom: 22%;

            font-size: 35px;

            animation-delay: 2s;

        }


        @keyframes floating {

            50% {

                transform:
                    translateY(-15px)
                    rotate(7deg);

            }

        }


        /* ======================================
           CONTENT
        ====================================== */

        .memories-content {

            width: 100%;

            max-width: 950px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* ======================================
           HEADER
        ====================================== */

        .chapter {

            margin: 0 0 13px;

            color: #d4a4b9;

            font-size: 10px;

            letter-spacing: 5px;

        }


        .memories-header h1 {

            margin: 0;

            font-family:
                Georgia,
                serif;

            font-size: 50px;

            line-height: 1.08;

            font-weight: normal;

        }


        .memories-header h1 span {

            color: #ff91bd;

            text-shadow:
                0 0 30px
                rgba(255,90,160,.25);

        }


        .header-text {

            margin: 15px 0 30px;

            color: #bca8b5;

            font-size: 15px;

            line-height: 1.7;

        }


        /* ======================================
           GALLERY
        ====================================== */

        .memory-gallery {

            width: 100%;

            max-width: 820px;

            margin: auto;

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap: 35px;

            align-items: start;

        }


        /* ======================================
           MEMORY FRAME
        ====================================== */

        .memory-frame {

            padding: 12px;

            border-radius: 22px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,170,205,.13),
                    rgba(255,255,255,.045)
                );

            border:
                1px solid
                rgba(255,160,200,.25);

            box-shadow:

                0 25px 60px
                rgba(0,0,0,.45);

            backdrop-filter:
                blur(18px);

            transition:
                transform .35s ease,
                border-color .35s ease,
                box-shadow .35s ease;

        }


        .frame-one {

            transform:
                rotate(-1.5deg);

        }


        .frame-two {

            transform:
                rotate(1.5deg);

        }


        .memory-frame:hover {

            transform:
                translateY(-9px)
                rotate(0deg);

            border-color:
                rgba(255,150,195,.5);

            box-shadow:

                0 30px 70px
                rgba(0,0,0,.55),

                0 0 30px
                rgba(255,80,160,.08);

        }


        /* ======================================
           PHOTO BOX
        ====================================== */

        .photo-box {

            width: 100%;

            aspect-ratio: 4 / 3;

            position: relative;

            overflow: hidden;

            border-radius: 15px;

            background: #241324;

        }


        .photo-box img {

            width: 100%;

            height: 100%;

            display: block;

            object-fit: cover;

            transition:
                transform .5s ease;

        }


        .memory-frame:hover
        .photo-box img {

            transform:
                scale(1.06);

        }


        /* ======================================
           PHOTO OVERLAY
        ====================================== */

        .photo-overlay {

            position: absolute;

            inset: 0;

            display: flex;

            align-items: flex-start;

            justify-content: flex-end;

            padding: 13px;

            background:
                linear-gradient(
                    180deg,
                    rgba(0,0,0,.25),
                    transparent 35%
                );

            pointer-events: none;

        }


        .photo-overlay span {

            width: 36px;

            height: 36px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            color: white;

            font-size: 18px;

            background:
                rgba(40,10,30,.5);

            border:
                1px solid
                rgba(255,255,255,.25);

            backdrop-filter:
                blur(8px);

        }


        /* ======================================
           CAPTION
        ====================================== */

        .photo-caption {

            padding:
                17px 8px 8px;

            text-align: left;

        }


        .photo-number {

            margin: 0 0 6px;

            color: #ad7793;

            font-size: 8px;

            letter-spacing: 3px;

        }


        .photo-caption h2 {

            margin: 0 0 7px;

            color: #efd4e1;

            font-family:
                Georgia,
                serif;

            font-size: 24px;

            font-weight: normal;

        }


        .photo-caption p:last-child {

            margin: 0;

            color: #a994a1;

            font-size: 13px;

            line-height: 1.65;

        }


        /* ======================================
           MESSAGE
        ====================================== */

        .memory-message {

            width: 100%;

            max-width: 720px;

            margin: 28px auto 20px;

            display: flex;

            align-items: center;

            gap: 18px;

        }


        .message-line {

            height: 1px;

            flex: 1;

            background:
                rgba(255,150,195,.17);

        }


        .message-center {

            display: flex;

            align-items: center;

            gap: 12px;

        }


        .message-heart {

            color: #ff91bb;

            font-size: 22px;

        }


        .message-center p {

            margin: 0;

            color: #98828f;

            font-family:
                Georgia,
                serif;

            font-size: 13px;

            line-height: 1.6;

        }


        .message-center strong {

            color: #d9b4c6;

            font-weight: normal;

        }


        /* ======================================
           BUTTON
        ====================================== */

        .next-memory {

            padding:
                14px 28px;

            border-radius: 40px;

            border:
                1px solid
                rgba(255,150,195,.4);

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #bd4f83,
                    #733653
                );

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 1.5px;

            box-shadow:
                0 10px 30px
                rgba(0,0,0,.25);

            transition:
                transform .25s ease,
                box-shadow .25s ease;

        }


        .next-memory b {

            margin-left: 12px;

            font-size: 16px;

        }


        .next-memory:hover {

            transform:
                translateY(-4px);

            box-shadow:
                0 15px 35px
                rgba(255,70,150,.25);

        }


        /* ======================================
           PAGE NUMBER
        ====================================== */

        .page-count {

            margin: 10px 0 0;

            color: #5e4654;

            font-size: 8px;

            letter-spacing: 3px;

        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 700px) {

            .memories-page {

                padding:
                    40px 17px;

            }


            .memories-header h1 {

                font-size: 38px;

            }


            .header-text {

                font-size: 14px;

                margin-bottom: 25px;

            }


            .memory-gallery {

                grid-template-columns: 1fr;

                max-width: 450px;

                gap: 25px;

            }


            .frame-one,
            .frame-two {

                transform: none;

            }


            .photo-caption h2 {

                font-size: 22px;

            }


            .photo-caption p:last-child {

                font-size: 13px;

            }


            .memory-message {

                gap: 8px;

            }


            .message-center p {

                font-size: 11px;

            }


            .message-line {

                display: none;

            }

        }


        /* ======================================
           SHORT LAPTOP SCREEN
        ====================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .memories-page {

                padding:
                    28px 20px;

            }


            .memories-header h1 {

                font-size: 42px;

            }


            .header-text {

                margin:
                    10px 0 20px;

            }


            .memory-gallery {

                gap: 25px;

            }


            .photo-caption {

                padding-top: 12px;

            }


            .photo-caption h2 {

                font-size: 20px;

            }


            .photo-caption p:last-child {

                font-size: 11px;

            }


            .memory-message {

                margin:
                    17px auto 13px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// PAGE 8 TEMPORARY
// ==========================================

// ==========================================
// PAGE 8 — A LETTER FOR MY BESTIE
// ==========================================

function goToPage8() {

    document.body.innerHTML = `

        <div class="letter-page">

            <!-- Background decoration -->
            <div class="letter-glow glow-one"></div>
            <div class="letter-glow glow-two"></div>

            <div class="floating-heart heart-a">♡</div>
            <div class="floating-heart heart-b">♡</div>
            <div class="floating-star star-a">✦</div>
            <div class="floating-star star-b">✧</div>


            <main class="letter-content">

                <!-- TOP -->

                <p class="letter-chapter">
                    CHAPTER 07 · A LITTLE LETTER
                </p>


                <div class="envelope-icon">
                    ♡
                </div>


                <h1>
                    For my
                    <span>bestie.</span>
                </h1>


                <p class="intro-text">
                    There are some things we don't say
                    <br>
                    often enough...
                </p>


                <!-- LETTER CARD -->

                <section class="letter-card">

                    <div class="letter-top">

                        <span>TO:</span>

                        <strong>
                            AYESHA ♡
                        </strong>

                    </div>


                    <div class="letter-divider"></div>


                    <div class="letter-body">

                        <p class="hello">
                            Dear bestie,
                        </p>


                        <p>
                            I don't really know where to begin,
                            because how do you put years of
                            friendship into a few little paragraphs?
                        </p>


                        <p>
                            We've grown up together, laughed over
                            the most random things, made memories
                            without even realizing they would one
                            day become some of our favorite ones.
                        </p>


                        <p>
                            And honestly, I'm just really grateful
                            that somewhere along the way,
                            <strong>
                                I found a friend like you.
                            </strong>
                        </p>


                        <p>
                            You are one of those people whose place
                            in my life doesn't need an explanation.
                            Some friendships just quietly become
                            a part of who we are.
                        </p>


                        <p class="special-line">
                            And yours is one of those friendships
                            I hope I get to keep for a very,
                            very long time. ♡
                        </p>


                        <p class="ending">
                            So today, on your birthday,
                            I just want you to know...
                        </p>


                        <div class="highlight">

                            <span>♡</span>

                            <p>
                                You are genuinely special
                                to me, Ayesha.
                            </p>

                        </div>


                    </div>


                    <!-- SIGNATURE -->

                    <div class="letter-signature">

                        <p>
                            With lots of love & prayers,
                        </p>

                        <strong>
                            Your forever bestie ♡
                        </strong>

                    </div>

                </section>


                <!-- BOTTOM MESSAGE -->

                <div class="bottom-message">

                    <span>✦</span>

                    <p>
                        Some people become memories.
                        <br>
                        <strong>
                            Some become a part of your story.
                        </strong>
                    </p>

                    <span>✦</span>

                </div>


                <!-- NEXT -->

                <button
                    class="letter-next"
                    onclick="goToPage9()">

                    <span>
                        KEEP READING
                    </span>

                    <b>→</b>

                </button>


                <p class="page-number">
                    07 / 12
                </p>

            </main>

        </div>

    `;


    // ==========================================
    // PAGE 8 CSS
    // ==========================================

    const style = document.createElement("style");

    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            overflow-x: hidden;

            font-family:
                Arial,
                sans-serif;

            background: #0b050b;

        }


        /* =====================================
           PAGE
        ===================================== */

        .letter-page {

            min-height: 100vh;

            position: relative;

            display: flex;

            justify-content: center;

            padding: 55px 20px;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 20%,
                    #57223f 0%,
                    #321328 38%,
                    #170914 70%,
                    #090309 100%
                );

            animation:
                letterEnter .8s ease;

        }


        @keyframes letterEnter {

            from {

                opacity: 0;

                transform:
                    translateY(25px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        /* =====================================
           GLOW
        ===================================== */

        .letter-glow {

            position: absolute;

            width: 350px;

            height: 350px;

            border-radius: 50%;

            filter: blur(110px);

            opacity: .13;

            pointer-events: none;

        }


        .glow-one {

            top: 10%;

            left: -180px;

            background: #ff72ad;

        }


        .glow-two {

            right: -180px;

            bottom: 15%;

            background: #b85a9d;

        }


        /* =====================================
           FLOATING DECOR
        ===================================== */

        .floating-heart,
        .floating-star {

            position: absolute;

            color: #ff91bc;

            opacity: .28;

            pointer-events: none;

            animation:
                floatLetter 5s ease-in-out infinite;

        }


        .heart-a {

            left: 7%;

            top: 25%;

            font-size: 38px;

        }


        .heart-b {

            right: 8%;

            top: 55%;

            font-size: 34px;

            animation-delay: 1.5s;

        }


        .star-a {

            right: 12%;

            top: 18%;

            font-size: 27px;

        }


        .star-b {

            left: 13%;

            bottom: 18%;

            font-size: 22px;

            animation-delay: 2s;

        }


        @keyframes floatLetter {

            50% {

                transform:
                    translateY(-13px)
                    rotate(6deg);

            }

        }


        /* =====================================
           CONTENT
        ===================================== */

        .letter-content {

            width: 100%;

            max-width: 760px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* =====================================
           HEADER
        ===================================== */

        .letter-chapter {

            margin: 0 0 18px;

            color: #c995ae;

            font-size: 10px;

            letter-spacing: 5px;

        }


        .envelope-icon {

            width: 58px;

            height: 58px;

            margin: 0 auto 18px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            color: #ff91bd;

            font-size: 28px;

            border:
                1px solid
                rgba(255,145,190,.35);

            background:
                rgba(255,120,175,.08);

            box-shadow:
                0 0 35px
                rgba(255,90,160,.12);

        }


        .letter-content h1 {

            margin: 0;

            font-family:
                Georgia,
                serif;

            font-size: 52px;

            font-weight: normal;

            line-height: 1.1;

        }


        .letter-content h1 span {

            color: #ff91bd;

        }


        .intro-text {

            margin: 15px 0 30px;

            color: #bba5b3;

            font-size: 15px;

            line-height: 1.7;

        }


        /* =====================================
           LETTER CARD
        ===================================== */

        .letter-card {

            width: 100%;

            text-align: left;

            padding: 30px 38px;

            border-radius: 25px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,235,245,.10),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,160,200,.25);

            box-shadow:

                0 30px 80px
                rgba(0,0,0,.48);

            backdrop-filter:
                blur(18px);

            position: relative;

            overflow: hidden;

        }


        .letter-card::before {

            content: "";

            position: absolute;

            top: 0;

            left: 0;

            width: 100%;

            height: 2px;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    #ff91bd,
                    transparent
                );

            opacity: .7;

        }


        /* =====================================
           LETTER TOP
        ===================================== */

        .letter-top {

            display: flex;

            justify-content: space-between;

            align-items: center;

            color: #9d7188;

            font-size: 9px;

            letter-spacing: 3px;

        }


        .letter-top strong {

            color: #e7b5cb;

            font-size: 11px;

            letter-spacing: 2px;

        }


        .letter-divider {

            width: 100%;

            height: 1px;

            margin: 20px 0 25px;

            background:
                rgba(255,160,200,.15);

        }


        /* =====================================
           LETTER TEXT
        ===================================== */

        .letter-body {

            color: #c5b2bd;

            font-family:
                Georgia,
                serif;

            font-size: 16px;

            line-height: 1.9;

        }


        .letter-body p {

            margin:
                0 0 18px;

        }


        .letter-body .hello {

            color: #f0c8da;

            font-size: 22px;

            margin-bottom: 20px;

        }


        .letter-body strong {

            color: #efb2cd;

            font-weight: normal;

        }


        .special-line {

            color: #d8b5c7;

            padding-left: 20px;

            border-left:
                2px solid
                rgba(255,145,190,.35);

        }


        .ending {

            margin-top: 25px !important;

            color: #b89aaa;

        }


        /* =====================================
           HIGHLIGHT
        ===================================== */

        .highlight {

            margin: 25px 0 5px;

            padding: 18px 20px;

            display: flex;

            align-items: center;

            gap: 15px;

            border-radius: 16px;

            background:
                rgba(255,100,165,.08);

            border:
                1px solid
                rgba(255,140,190,.16);

        }


        .highlight span {

            color: #ff8fb9;

            font-size: 25px;

        }


        .highlight p {

            margin: 0;

            color: #e6bfd1;

            font-size: 17px;

        }


        /* =====================================
           SIGNATURE
        ===================================== */

        .letter-signature {

            margin-top: 30px;

            text-align: right;

        }


        .letter-signature p {

            margin: 0 0 5px;

            color: #917385;

            font-family:
                Georgia,
                serif;

            font-size: 13px;

        }


        .letter-signature strong {

            color: #edb2ca;

            font-family:
                Georgia,
                serif;

            font-size: 17px;

            font-weight: normal;

        }


        /* =====================================
           BOTTOM MESSAGE
        ===================================== */

        .bottom-message {

            margin: 25px auto 20px;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 18px;

        }


        .bottom-message span {

            color: #d675a2;

            font-size: 17px;

        }


        .bottom-message p {

            margin: 0;

            color: #806473;

            font-family:
                Georgia,
                serif;

            font-size: 12px;

            line-height: 1.7;

        }


        .bottom-message strong {

            color: #ad8398;

            font-weight: normal;

        }


        /* =====================================
           BUTTON
        ===================================== */

        .letter-next {

            padding:
                14px 27px;

            border:
                1px solid
                rgba(255,150,195,.38);

            border-radius: 40px;

            background:
                linear-gradient(
                    135deg,
                    #a94373,
                    #69304e
                );

            color: white;

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 2px;

            transition:
                .3s ease;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.25);

        }


        .letter-next b {

            margin-left: 12px;

            font-size: 16px;

        }


        .letter-next:hover {

            transform:
                translateY(-4px);

            box-shadow:
                0 15px 35px
                rgba(255,70,150,.22);

        }


        .page-number {

            margin: 11px 0 0;

            color: #553c4b;

            font-size: 8px;

            letter-spacing: 3px;

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 700px) {

            .letter-page {

                padding:
                    40px 15px;

            }


            .letter-content h1 {

                font-size: 40px;

            }


            .letter-card {

                padding:
                    23px 20px;

            }


            .letter-body {

                font-size: 15px;

                line-height: 1.8;

            }


            .letter-body .hello {

                font-size: 20px;

            }


            .highlight p {

                font-size: 15px;

            }


            .bottom-message {

                gap: 8px;

            }


            .heart-a,
            .heart-b,
            .star-a,
            .star-b {

                opacity: .18;

            }

        }


        /* =====================================
           SHORT LAPTOP
        ===================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .letter-page {

                padding:
                    30px 20px;

            }


            .letter-content h1 {

                font-size: 43px;

            }


            .intro-text {

                margin:
                    10px 0 20px;

            }


            .letter-card {

                padding:
                    22px 30px;

            }


            .letter-body {

                font-size: 14px;

                line-height: 1.7;

            }


            .letter-body p {

                margin-bottom: 12px;

            }


            .letter-signature {

                margin-top: 18px;

            }


            .bottom-message {

                margin:
                    15px auto;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// PAGE 9
// ==========================================
// ==========================================
// PAGE 9 — LITTLE THINGS I LOVE ABOUT US
// ==========================================

function goToPage9() {

    document.body.innerHTML = `

        <div class="reasons-page">

            <!-- BACKGROUND -->
            <div class="reason-glow glow-left"></div>
            <div class="reason-glow glow-right"></div>

            <div class="floating-symbol symbol-1">♡</div>
            <div class="floating-symbol symbol-2">✦</div>
            <div class="floating-symbol symbol-3">♡</div>


            <main class="reasons-content">

                <!-- HEADER -->

                <p class="reason-chapter">
                    CHAPTER 08 · OUR FRIENDSHIP
                </p>

                <h1>
                    Little things
                    <br>
                    <span>that mean a lot.</span>
                </h1>

                <p class="reason-intro">
                    Maybe I've never said all of these things...
                    <br>
                    but I hope you always know them. ♡
                </p>


                <!-- REASONS -->

                <section class="reason-grid">

                    <div class="reason-card">
                        <div class="reason-icon">♡</div>
                        <div>
                            <small>01</small>
                            <h2>Your presence</h2>
                            <p>
                                Somehow, even ordinary moments
                                become better when you're around.
                            </p>
                        </div>
                    </div>


                    <div class="reason-card">
                        <div class="reason-icon">✦</div>
                        <div>
                            <small>02</small>
                            <h2>Our random talks</h2>
                            <p>
                                The conversations that make absolutely
                                no sense but somehow mean everything.
                            </p>
                        </div>
                    </div>


                    <div class="reason-card">
                        <div class="reason-icon">♡</div>
                        <div>
                            <small>03</small>
                            <h2>The laughter</h2>
                            <p>
                                The kind of laughter that makes
                                even a normal day unforgettable.
                            </p>
                        </div>
                    </div>


                    <div class="reason-card">
                        <div class="reason-icon">✦</div>
                        <div>
                            <small>04</small>
                            <h2>Our memories</h2>
                            <p>
                                So many little moments that became
                                memories without us even realizing.
                            </p>
                        </div>
                    </div>


                    <div class="reason-card">
                        <div class="reason-icon">♡</div>
                        <div>
                            <small>05</small>
                            <h2>Being ourselves</h2>
                            <p>
                                No pretending, no trying too hard.
                                Just being completely ourselves.
                            </p>
                        </div>
                    </div>


                    <div class="reason-card">
                        <div class="reason-icon">✦</div>
                        <div>
                            <small>06</small>
                            <h2>Growing together</h2>
                            <p>
                                We've changed so much, yet somehow
                                our friendship still feels familiar.
                            </p>
                        </div>
                    </div>


                </section>


                <!-- CENTER QUOTE -->

                <div class="reason-quote">

                    <span>“</span>

                    <p>
                        It's not about having
                        <strong>perfect days.</strong>
                        <br>
                        It's about having someone
                        who makes the ordinary ones special.
                    </p>

                    <span>”</span>

                </div>


                <!-- BUTTON -->

                <button
                    class="reason-next"
                    onclick="goToPage10()">

                    <span>
                        NEXT CHAPTER
                    </span>

                    <b>→</b>

                </button>


                <p class="reason-page-number">
                    08 / 12
                </p>


            </main>

        </div>
    `;


    // ==========================================
    // PAGE 9 CSS
    // ==========================================

    const style = document.createElement("style");

    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            background: #090309;

            font-family: Arial, sans-serif;

            overflow-x: hidden;

        }


        /* ======================================
           MAIN
        ====================================== */

        .reasons-page {

            min-height: 100vh;

            position: relative;

            display: flex;

            justify-content: center;

            padding: 55px 20px;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 0%,
                    #642747 0%,
                    #3a162d 34%,
                    #1d0a19 68%,
                    #090309 100%
                );

            animation:
                reasonsEnter .8s ease;

        }


        @keyframes reasonsEnter {

            from {
                opacity: 0;
                transform: translateY(25px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }

        }


        /* ======================================
           GLOW
        ====================================== */

        .reason-glow {

            position: absolute;

            width: 380px;

            height: 380px;

            border-radius: 50%;

            filter: blur(120px);

            opacity: .13;

            pointer-events: none;

        }


        .glow-left {

            left: -200px;

            top: 20%;

            background: #ff6fae;

        }


        .glow-right {

            right: -200px;

            bottom: 15%;

            background: #c05ca3;

        }


        /* ======================================
           FLOATING SYMBOLS
        ====================================== */

        .floating-symbol {

            position: absolute;

            color: #ff8fba;

            opacity: .25;

            pointer-events: none;

            animation:
                reasonFloat 5s ease-in-out infinite;

        }


        .symbol-1 {

            left: 7%;

            top: 25%;

            font-size: 42px;

        }


        .symbol-2 {

            right: 8%;

            top: 20%;

            font-size: 28px;

            animation-delay: 1s;

        }


        .symbol-3 {

            right: 9%;

            bottom: 20%;

            font-size: 38px;

            animation-delay: 2s;

        }


        @keyframes reasonFloat {

            50% {

                transform:
                    translateY(-15px)
                    rotate(8deg);

            }

        }


        /* ======================================
           CONTENT
        ====================================== */

        .reasons-content {

            width: 100%;

            max-width: 920px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* ======================================
           HEADER
        ====================================== */

        .reason-chapter {

            margin: 0 0 15px;

            color: #d09bb3;

            font-size: 11px;

            letter-spacing: 5px;

        }


        .reasons-content h1 {

            margin: 0;

            font-family: Georgia, serif;

            font-size: 52px;

            line-height: 1.08;

            font-weight: normal;

        }


        .reasons-content h1 span {

            color: #ff91bd;

            text-shadow:
                0 0 30px
                rgba(255,100,170,.2);

        }


        .reason-intro {

            margin: 17px 0 35px;

            color: #c3adb9;

            font-size: 16px;

            line-height: 1.75;

        }


        /* ======================================
           CARDS
        ====================================== */

        .reason-grid {

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

            gap: 18px;

            text-align: left;

        }


        .reason-card {

            min-height: 145px;

            display: flex;

            align-items: flex-start;

            gap: 18px;

            padding: 23px;

            border-radius: 20px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,180,210,.11),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,160,200,.20);

            box-shadow:
                0 18px 45px
                rgba(0,0,0,.32);

            backdrop-filter:
                blur(15px);

            transition:
                transform .3s ease,
                border-color .3s ease,
                background .3s ease;

            animation:
                cardAppear .6s ease both;

        }


        .reason-card:nth-child(2) {
            animation-delay: .08s;
        }

        .reason-card:nth-child(3) {
            animation-delay: .16s;
        }

        .reason-card:nth-child(4) {
            animation-delay: .24s;
        }

        .reason-card:nth-child(5) {
            animation-delay: .32s;
        }

        .reason-card:nth-child(6) {
            animation-delay: .40s;
        }


        @keyframes cardAppear {

            from {

                opacity: 0;

                transform:
                    translateY(20px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        .reason-card:hover {

            transform:
                translateY(-6px);

            border-color:
                rgba(255,145,190,.42);

            background:

                linear-gradient(
                    145deg,
                    rgba(255,170,205,.16),
                    rgba(255,255,255,.05)
                );

        }


        /* ======================================
           ICON
        ====================================== */

        .reason-icon {

            min-width: 47px;

            width: 47px;

            height: 47px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 14px;

            color: #ff8fb9;

            font-size: 22px;

            background:
                rgba(255,100,165,.09);

            border:
                1px solid
                rgba(255,145,190,.18);

        }


        /* ======================================
           CARD TEXT
        ====================================== */

        .reason-card small {

            display: block;

            margin-bottom: 5px;

            color: #9a7187;

            font-size: 9px;

            letter-spacing: 3px;

        }


        .reason-card h2 {

            margin: 0 0 7px;

            color: #efd0df;

            font-family: Georgia, serif;

            font-size: 23px;

            font-weight: normal;

        }


        .reason-card p {

            margin: 0;

            color: #ae99a6;

            font-size: 14px;

            line-height: 1.65;

        }


        /* ======================================
           QUOTE
        ====================================== */

        .reason-quote {

            margin: 32px auto 27px;

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 12px;

            max-width: 700px;

        }


        .reason-quote span {

            color: #d36b9b;

            font-family: Georgia, serif;

            font-size: 38px;

        }


        .reason-quote p {

            margin: 0;

            color: #a98c9d;

            font-family: Georgia, serif;

            font-size: 16px;

            line-height: 1.7;

        }


        .reason-quote strong {

            color: #e2b1c7;

            font-weight: normal;

        }


        /* ======================================
           BUTTON
        ====================================== */

        .reason-next {

            padding: 15px 30px;

            border: 1px solid
                rgba(255,150,195,.38);

            border-radius: 40px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b44779,
                    #71314f
                );

            cursor: pointer;

            font-size: 11px;

            letter-spacing: 2px;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.3);

            transition:
                .3s ease;

        }


        .reason-next b {

            margin-left: 14px;

            font-size: 17px;

        }


        .reason-next:hover {

            transform:
                translateY(-4px);

            box-shadow:
                0 18px 38px
                rgba(255,70,150,.22);

        }


        /* ======================================
           PAGE NUMBER
        ====================================== */

        .reason-page-number {

            margin: 11px 0 0;

            color: #5d4352;

            font-size: 9px;

            letter-spacing: 3px;

        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 700px) {

            .reasons-page {

                padding:
                    40px 15px;

            }


            .reasons-content h1 {

                font-size: 40px;

            }


            .reason-intro {

                font-size: 14px;

            }


            .reason-grid {

                grid-template-columns: 1fr;

            }


            .reason-card {

                min-height: auto;

                padding: 20px;

            }


            .reason-card h2 {

                font-size: 22px;

            }


            .reason-card p {

                font-size: 14px;

            }


            .reason-quote p {

                font-size: 14px;

            }


            .floating-symbol {

                opacity: .15;

            }

        }


        /* ======================================
           LAPTOP HEIGHT FIX
        ====================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .reasons-page {

                padding:
                    30px 20px;

            }


            .reasons-content h1 {

                font-size: 44px;

            }


            .reason-intro {

                margin:
                    10px 0 22px;

            }


            .reason-grid {

                gap: 13px;

            }


            .reason-card {

                min-height: 120px;

                padding: 17px;

            }


            .reason-card h2 {

                font-size: 20px;

            }


            .reason-card p {

                font-size: 12px;

            }


            .reason-quote {

                margin:
                    20px auto;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// PAGE 10 — TEMPORARY
// ==========================================
// ==========================================
// PAGE 10 — A LITTLE SURPRISE
// ==========================================

function goToPage10() {

    document.body.innerHTML = `

        <div class="surprise-page">

            <!-- BACKGROUND DECOR -->
            <div class="surprise-glow glow-one"></div>
            <div class="surprise-glow glow-two"></div>

            <div class="surprise-heart heart-one">♡</div>
            <div class="surprise-heart heart-two">♡</div>
            <div class="surprise-star star-one">✦</div>
            <div class="surprise-star star-two">✧</div>


            <main class="surprise-content">

                <p class="surprise-chapter">
                    CHAPTER 09 · A LITTLE SURPRISE
                </p>


                <div class="surprise-icon">
                    ✦
                </div>


                <h1>
                    I saved a few
                    <br>
                    <span>little words for you.</span>
                </h1>


                <p class="surprise-intro">
                    Some things are better when you
                    <br>
                    discover them yourself. ♡
                </p>


                <!-- MESSAGE BOX -->

                <section class="surprise-box">

                    <div class="box-top">

                        <span class="box-label">
                            FOR AYESHA
                        </span>

                        <span class="box-dots">
                            · · ·
                        </span>

                    </div>


                    <div class="hidden-message" id="hiddenMessage">

                        <span class="message-number">
                            01
                        </span>

                        <p id="surpriseText">
                            There's something waiting here...
                        </p>

                    </div>


                    <button
                        class="reveal-button"
                        id="revealButton"
                        onclick="revealSurprise()">

                        <span id="buttonText">
                            OPEN A LITTLE NOTE
                        </span>

                        <b>♡</b>

                    </button>


                    <div class="progress-dots">

                        <span class="active-dot"></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </section>


                <!-- SMALL QUOTE -->

                <div class="surprise-quote">

                    <span>“</span>

                    <p>
                        If this page made you smile,
                        <br>
                        then it already did its job. ♡
                    </p>

                    <span>”</span>

                </div>


                <!-- NEXT -->

                <button
                    class="surprise-next"
                    onclick="goToPage11()">

                    <span>
                        THERE'S ONE MORE THING
                    </span>

                    <b>→</b>

                </button>


                <p class="surprise-page-number">
                    09 / 12
                </p>

            </main>

        </div>

    `;


    // ==========================================
    // PAGE 10 CSS
    // ==========================================

    const style = document.createElement("style");

    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            background: #090309;

            font-family: Arial, sans-serif;

            overflow-x: hidden;

        }


        /* ======================================
           PAGE
        ====================================== */

        .surprise-page {

            min-height: 100vh;

            position: relative;

            display: flex;

            justify-content: center;

            padding: 60px 20px;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 15%,
                    #632744 0%,
                    #3b152e 35%,
                    #1c0918 70%,
                    #090309 100%
                );

            animation:
                surpriseEnter .8s ease;

        }


        @keyframes surpriseEnter {

            from {

                opacity: 0;

                transform:
                    translateY(25px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        /* ======================================
           GLOW
        ====================================== */

        .surprise-glow {

            position: absolute;

            width: 360px;

            height: 360px;

            border-radius: 50%;

            filter: blur(120px);

            opacity: .14;

            pointer-events: none;

        }


        .glow-one {

            left: -180px;

            top: 25%;

            background: #ff72ae;

        }


        .glow-two {

            right: -180px;

            bottom: 15%;

            background: #b8589c;

        }


        /* ======================================
           DECORATION
        ====================================== */

        .surprise-heart,
        .surprise-star {

            position: absolute;

            color: #ff91bc;

            opacity: .25;

            pointer-events: none;

            animation:
                surpriseFloat 5s ease-in-out infinite;

        }


        .heart-one {

            left: 8%;

            top: 27%;

            font-size: 42px;

        }


        .heart-two {

            right: 8%;

            bottom: 22%;

            font-size: 38px;

            animation-delay: 1.5s;

        }


        .star-one {

            right: 13%;

            top: 18%;

            font-size: 27px;

        }


        .star-two {

            left: 13%;

            bottom: 18%;

            font-size: 22px;

            animation-delay: 2s;

        }


        @keyframes surpriseFloat {

            50% {

                transform:
                    translateY(-14px)
                    rotate(7deg);

            }

        }


        /* ======================================
           CONTENT
        ====================================== */

        .surprise-content {

            width: 100%;

            max-width: 720px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* ======================================
           HEADER
        ====================================== */

        .surprise-chapter {

            margin: 0 0 18px;

            color: #d09ab3;

            font-size: 10px;

            letter-spacing: 5px;

        }


        .surprise-icon {

            width: 62px;

            height: 62px;

            margin: 0 auto 18px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            color: #ff91bc;

            font-size: 27px;

            background:
                rgba(255,120,175,.08);

            border:
                1px solid
                rgba(255,145,190,.35);

            box-shadow:
                0 0 35px
                rgba(255,80,160,.13);

        }


        .surprise-content h1 {

            margin: 0;

            font-family: Georgia, serif;

            font-size: 50px;

            line-height: 1.1;

            font-weight: normal;

        }


        .surprise-content h1 span {

            color: #ff91bd;

        }


        .surprise-intro {

            margin: 17px 0 32px;

            color: #c1aab8;

            font-size: 16px;

            line-height: 1.75;

        }


        /* ======================================
           SURPRISE BOX
        ====================================== */

        .surprise-box {

            width: 100%;

            padding: 28px;

            border-radius: 26px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,190,220,.12),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,160,200,.25);

            box-shadow:

                0 30px 80px
                rgba(0,0,0,.45);

            backdrop-filter:
                blur(18px);

        }


        .box-top {

            display: flex;

            justify-content: space-between;

            align-items: center;

            color: #956b82;

            font-size: 9px;

            letter-spacing: 3px;

        }


        .box-dots {

            color: #bc789a;

            letter-spacing: 4px;

        }


        /* ======================================
           MESSAGE
        ====================================== */

        .hidden-message {

            min-height: 190px;

            margin: 20px 0;

            padding: 30px 25px;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            border-radius: 19px;

            background:

                radial-gradient(
                    circle at center,
                    rgba(255,110,170,.10),
                    rgba(255,255,255,.025)
                );

            border:
                1px solid
                rgba(255,145,190,.13);

            transition:
                .4s ease;

        }


        .message-number {

            color: #d06d9b;

            font-size: 10px;

            letter-spacing: 3px;

            margin-bottom: 15px;

        }


        .hidden-message p {

            max-width: 560px;

            margin: 0;

            color: #d8bdca;

            font-family: Georgia, serif;

            font-size: 23px;

            line-height: 1.65;

            transition:
                opacity .35s ease,
                transform .35s ease;

        }


        /* ======================================
           BUTTON
        ====================================== */

        .reveal-button {

            min-width: 235px;

            padding: 15px 24px;

            border:
                1px solid
                rgba(255,150,195,.38);

            border-radius: 40px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b64b7d,
                    #71324f
                );

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 1.8px;

            box-shadow:
                0 12px 30px
                rgba(0,0,0,.28);

            transition:
                .3s ease;

        }


        .reveal-button b {

            margin-left: 12px;

            font-size: 16px;

        }


        .reveal-button:hover {

            transform:
                translateY(-4px);

            box-shadow:
                0 18px 38px
                rgba(255,70,150,.22);

        }


        /* ======================================
           DOTS
        ====================================== */

        .progress-dots {

            margin-top: 20px;

            display: flex;

            justify-content: center;

            gap: 7px;

        }


        .progress-dots span {

            width: 6px;

            height: 6px;

            border-radius: 50%;

            background: #604252;

            transition: .3s ease;

        }


        .progress-dots .active-dot {

            width: 20px;

            border-radius: 10px;

            background: #c76491;

        }


        /* ======================================
           QUOTE
        ====================================== */

        .surprise-quote {

            margin: 28px auto 25px;

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 12px;

        }


        .surprise-quote > span {

            color: #d16b9b;

            font-family: Georgia, serif;

            font-size: 36px;

        }


        .surprise-quote p {

            margin: 0;

            color: #9e8291;

            font-family: Georgia, serif;

            font-size: 14px;

            line-height: 1.7;

        }


        /* ======================================
           NEXT BUTTON
        ====================================== */

        .surprise-next {

            padding: 15px 29px;

            border:
                1px solid
                rgba(255,150,195,.36);

            border-radius: 40px;

            color: white;

            background:
                rgba(255,100,165,.08);

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 2px;

            transition:
                .3s ease;

        }


        .surprise-next b {

            margin-left: 13px;

            font-size: 16px;

        }


        .surprise-next:hover {

            transform:
                translateY(-4px);

            background:
                rgba(255,100,165,.14);

            border-color:
                rgba(255,150,195,.55);

        }


        /* ======================================
           PAGE NUMBER
        ====================================== */

        .surprise-page-number {

            margin: 11px 0 0;

            color: #59404e;

            font-size: 8px;

            letter-spacing: 3px;

        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 700px) {

            .surprise-page {

                padding:
                    45px 15px;

            }


            .surprise-content h1 {

                font-size: 40px;

            }


            .surprise-intro {

                font-size: 14px;

            }


            .surprise-box {

                padding: 20px;

            }


            .hidden-message {

                min-height: 210px;

                padding: 25px 17px;

            }


            .hidden-message p {

                font-size: 19px;

            }


            .floating-symbol {

                opacity: .15;

            }

        }


        /* ======================================
           SHORT LAPTOP
        ====================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .surprise-page {

                padding:
                    30px 20px;

            }


            .surprise-icon {

                width: 50px;

                height: 50px;

                margin-bottom: 12px;

            }


            .surprise-content h1 {

                font-size: 43px;

            }


            .surprise-intro {

                margin:
                    10px 0 20px;

            }


            .surprise-box {

                padding: 20px;

            }


            .hidden-message {

                min-height: 150px;

                margin: 13px 0;

                padding: 20px;

            }


            .hidden-message p {

                font-size: 18px;

            }


            .surprise-quote {

                margin:
                    17px auto;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// INTERACTIVE MESSAGE
// ==========================================

let surpriseStep = 0;

function revealSurprise() {

    const messages = [

        "No matter how much life changes, I hope we always find our way back to the same old laughter. ♡",

        "You deserve so many beautiful things in life — happiness, peace, success and countless reasons to smile. ✨",

        "I'm really lucky to have memories with you that I can look back at and smile about. ♡",

        "And if we ever get too busy with life... I hope we never become strangers. 💗"

    ];


    const message =
        document.getElementById("surpriseText");

    const number =
        document.querySelector(".message-number");

    const button =
        document.getElementById("buttonText");

    const dots =
        document.querySelectorAll(".progress-dots span");


    surpriseStep++;


    if (surpriseStep < messages.length) {

        message.style.opacity = "0";

        message.style.transform =
            "translateY(10px)";


        setTimeout(() => {

            message.innerText =
                messages[surpriseStep];

            number.innerText =
                "0" + (surpriseStep + 1);

            message.style.opacity = "1";

            message.style.transform =
                "translateY(0)";

        }, 250);


        button.innerText =
            "OPEN THE NEXT NOTE";


        dots.forEach((dot, index) => {

            dot.classList.remove("active-dot");

            if (index === surpriseStep) {

                dot.classList.add("active-dot");

            }

        });

    }

    else {

        message.style.opacity = "0";

        setTimeout(() => {

            message.innerText =
                "Happy Birthday, Ayesha. ♡ May this new chapter of your life be filled with beautiful moments, genuine happiness and everything your heart deserves.";

            number.innerText =
                "♡";

            message.style.opacity = "1";

        }, 250);


        button.innerText =
            "ONE LAST LITTLE WISH ♡";


        dots.forEach(dot => {

            dot.classList.add("active-dot");

        });

    }

}


// ==========================================
// PAGE 11
// ==========================================
// ==========================================
// PAGE 11 — THE LETTER
// ==========================================

function goToPage11() {

    document.body.innerHTML = `

        <div class="letter-page">

            <!-- BACKGROUND DECOR -->

            <div class="letter-glow letter-glow-one"></div>
            <div class="letter-glow letter-glow-two"></div>

            <div class="letter-decor decor-one">♡</div>
            <div class="letter-decor decor-two">✦</div>
            <div class="letter-decor decor-three">♡</div>


            <main class="letter-content">

                <p class="letter-chapter">
                    CHAPTER 10 · A LETTER FOR YOU
                </p>


                <h1>
                    A few words
                    <br>
                    <span>I really mean.</span>
                </h1>


                <p class="letter-intro">
                    Not a long speech...
                    <br>
                    just something from my heart. ♡
                </p>


                <!-- LETTER -->

                <section class="letter-card">

                    <div class="letter-top">

                        <span>
                            TO MY BESTIE
                        </span>

                        <span>
                            ♡
                        </span>

                    </div>


                    <div class="letter-line"></div>


                    <div class="letter-body">

                        <p class="letter-greeting">
                            Dear Ayesha,
                        </p>


                        <p>
                            I don't think I say it enough,
                            but having you in my life is
                            something I genuinely treasure.
                        </p>


                        <p>
                            We've grown up, changed,
                            laughed over the most random things,
                            and made so many little memories
                            along the way.
                        </p>


                        <p>
                            And when I look back at all those
                            moments, I realize that the best
                            memories were never about where we were
                            or what we were doing...
                        </p>


                        <p class="highlight-letter">
                            They were about who I was with. ♡
                        </p>


                        <p>
                            I hope life gives you every beautiful
                            thing you deserve. I hope you keep
                            smiling, keep dreaming, and never forget
                            how special you are.
                        </p>


                        <p>
                            And no matter how much life changes,
                            I hope there will always be a little
                            place in our lives for the friendship
                            we grew up with.
                        </p>


                        <p class="letter-ending">
                            Happy Birthday, bestie. ♡
                            <br>
                            I'm really glad it was you.
                        </p>

                    </div>


                    <div class="letter-bottom">

                        <span>
                            WITH LOTS OF LOVE
                        </span>

                        <span class="signature">
                            ♡
                        </span>

                    </div>

                </section>


                <!-- BUTTON -->

                <button
                    class="letter-next"
                    onclick="goToPage12()">

                    <span>
                        ONE LAST SURPRISE
                    </span>

                    <b>→</b>

                </button>


                <p class="letter-page-number">
                    10 / 12
                </p>

            </main>

        </div>

    `;


    // ==========================================
    // PAGE 11 CSS
    // ==========================================

    const style = document.createElement("style");

    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            background: #080308;

            font-family: Arial, sans-serif;

            overflow-x: hidden;

        }


        /* ======================================
           MAIN PAGE
        ====================================== */

        .letter-page {

            min-height: 100vh;

            position: relative;

            display: flex;

            justify-content: center;

            padding: 55px 20px;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 0%,
                    #6b294b 0%,
                    #40172f 32%,
                    #210b1c 68%,
                    #080308 100%
                );

            animation:
                letterPageIn .8s ease;

        }


        @keyframes letterPageIn {

            from {

                opacity: 0;

                transform:
                    translateY(25px);

            }

            to {

                opacity: 1;

                transform:
                    translateY(0);

            }

        }


        /* ======================================
           GLOW
        ====================================== */

        .letter-glow {

            position: absolute;

            width: 400px;

            height: 400px;

            border-radius: 50%;

            filter: blur(130px);

            opacity: .13;

            pointer-events: none;

        }


        .letter-glow-one {

            left: -220px;

            top: 20%;

            background: #ff70ac;

        }


        .letter-glow-two {

            right: -220px;

            bottom: 15%;

            background: #c05b9e;

        }


        /* ======================================
           FLOATING DECOR
        ====================================== */

        .letter-decor {

            position: absolute;

            color: #ff91bd;

            opacity: .23;

            pointer-events: none;

            animation:
                letterFloat 5s ease-in-out infinite;

        }


        .decor-one {

            left: 8%;

            top: 24%;

            font-size: 42px;

        }


        .decor-two {

            right: 10%;

            top: 18%;

            font-size: 28px;

            animation-delay: 1s;

        }


        .decor-three {

            right: 8%;

            bottom: 18%;

            font-size: 40px;

            animation-delay: 2s;

        }


        @keyframes letterFloat {

            50% {

                transform:
                    translateY(-15px)
                    rotate(8deg);

            }

        }


        /* ======================================
           CONTENT
        ====================================== */

        .letter-content {

            width: 100%;

            max-width: 800px;

            position: relative;

            z-index: 2;

            text-align: center;

        }


        /* ======================================
           HEADER
        ====================================== */

        .letter-chapter {

            margin: 0 0 17px;

            color: #d39ab5;

            font-size: 10px;

            letter-spacing: 5px;

        }


        .letter-content h1 {

            margin: 0;

            font-family: Georgia, serif;

            font-size: 51px;

            line-height: 1.08;

            font-weight: normal;

        }


        .letter-content h1 span {

            color: #ff91bd;

        }


        .letter-intro {

            margin: 16px 0 30px;

            color: #c3aab8;

            font-size: 16px;

            line-height: 1.7;

        }


        /* ======================================
           LETTER CARD
        ====================================== */

        .letter-card {

            width: 100%;

            text-align: left;

            padding: 28px 34px;

            border-radius: 24px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,190,220,.13),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,160,200,.27);

            box-shadow:

                0 30px 90px
                rgba(0,0,0,.45);

            backdrop-filter:
                blur(18px);

        }


        /* ======================================
           LETTER TOP
        ====================================== */

        .letter-top {

            display: flex;

            justify-content: space-between;

            align-items: center;

            color: #a97891;

            font-size: 9px;

            letter-spacing: 4px;

        }


        .letter-top span:last-child {

            color: #ff91bd;

            font-size: 20px;

        }


        .letter-line {

            width: 100%;

            height: 1px;

            margin: 18px 0 25px;

            background:

                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,145,190,.35),
                    transparent
                );

        }


        /* ======================================
           LETTER TEXT
        ====================================== */

        .letter-body {

            max-width: 690px;

            margin: auto;

        }


        .letter-body p {

            margin: 0 0 20px;

            color: #d0b9c6;

            font-family: Georgia, serif;

            font-size: 17px;

            line-height: 1.85;

        }


        .letter-greeting {

            color: #f0cede !important;

            font-size: 25px !important;

            margin-bottom: 22px !important;

        }


        .highlight-letter {

            padding: 17px 20px;

            border-left:
                2px solid
                #c75b8d;

            color: #f0c7d8 !important;

            background:
                rgba(255,100,165,.055);

            border-radius: 0 12px 12px 0;

        }


        .letter-ending {

            margin-top: 28px !important;

            color: #f0c8d8 !important;

            font-size: 19px !important;

        }


        /* ======================================
           LETTER BOTTOM
        ====================================== */

        .letter-bottom {

            display: flex;

            justify-content: space-between;

            align-items: center;

            margin-top: 25px;

            padding-top: 18px;

            border-top:
                1px solid
                rgba(255,145,190,.12);

            color: #80566d;

            font-size: 8px;

            letter-spacing: 3px;

        }


        .signature {

            color: #ff91bd;

            font-size: 23px;

        }


        /* ======================================
           NEXT BUTTON
        ====================================== */

        .letter-next {

            margin-top: 28px;

            padding: 15px 30px;

            border:
                1px solid
                rgba(255,150,195,.4);

            border-radius: 40px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #b64a7c,
                    #71314f
                );

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 2px;

            box-shadow:
                0 14px 35px
                rgba(0,0,0,.3);

            transition:
                .3s ease;

        }


        .letter-next b {

            margin-left: 13px;

            font-size: 17px;

        }


        .letter-next:hover {

            transform:
                translateY(-4px);

            box-shadow:
                0 20px 40px
                rgba(255,70,150,.22);

        }


        /* ======================================
           PAGE NUMBER
        ====================================== */

        .letter-page-number {

            margin: 11px 0 0;

            color: #5b4050;

            font-size: 8px;

            letter-spacing: 3px;

        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 700px) {

            .letter-page {

                padding:
                    40px 14px;

            }


            .letter-content h1 {

                font-size: 39px;

            }


            .letter-intro {

                font-size: 14px;

            }


            .letter-card {

                padding:
                    23px 20px;

            }


            .letter-body p {

                font-size: 16px;

                line-height: 1.8;

            }


            .letter-greeting {

                font-size: 23px !important;

            }


            .letter-ending {

                font-size: 18px !important;

            }


            .letter-decor {

                opacity: .13;

            }

        }


        /* ======================================
           SHORT LAPTOP
        ====================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .letter-page {

                padding:
                    28px 20px;

            }


            .letter-content h1 {

                font-size: 42px;

            }


            .letter-intro {

                margin:
                    8px 0 18px;

            }


            .letter-card {

                padding:
                    20px 28px;

            }


            .letter-body p {

                margin-bottom: 12px;

                font-size: 15px;

                line-height: 1.65;

            }


            .letter-greeting {

                font-size: 22px !important;

                margin-bottom: 14px !important;

            }


            .highlight-letter {

                padding:
                    11px 15px;

            }


            .letter-ending {

                margin-top: 16px !important;

            }


            .letter-next {

                margin-top: 17px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// PAGE 12 — TEMPORARY
// ==========================================
// ==========================================
// PAGE 12 — GRAND BIRTHDAY FINALE 🎂
// ==========================================

function goToPage12() {

    document.body.innerHTML = `

        <div class="final-page">

            <!-- FLOATING HEARTS -->

            <div class="final-heart heart-1">♡</div>
            <div class="final-heart heart-2">♥</div>
            <div class="final-heart heart-3">♡</div>
            <div class="final-heart heart-4">♡</div>
            <div class="final-heart heart-5">♥</div>


            <!-- STARS -->

            <div class="final-star star-1">✦</div>
            <div class="final-star star-2">✧</div>
            <div class="final-star star-3">✦</div>
            <div class="final-star star-4">✧</div>


            <main class="final-content">

                <p class="final-small">
                    THE FINAL CHAPTER
                </p>


                <div class="birthday-crown">
                    ✦
                </div>


                <p class="final-pretitle">
                    TODAY IS ALL ABOUT
                </p>


                <h1>
                    AYESHA
                </h1>


                <div class="birthday-line">

                    <span></span>

                    <p>
                        ♡

                        HAPPY BIRTHDAY

                        ♡
                    </p>

                    <span></span>

                </div>


                <p class="final-year">
                    Another beautiful year of your story begins...
                </p>


                <!-- BIRTHDAY CARD -->

                <section class="final-card">

                    <div class="card-decoration">
                        ♡
                    </div>


                    <h2>
                        To my beautiful bestie,
                    </h2>


                    <p class="final-message">

                        May this new chapter bring you
                        countless reasons to smile,
                        beautiful memories to keep,
                        dreams that come true,
                        and people who always remind you
                        how loved and special you are.

                    </p>


                    <p class="final-message">

                        I hope when you look back at this year,
                        you remember it as one of the happiest
                        chapters of your life.

                    </p>


                    <div class="final-wish">

                        <span>♡</span>

                        <p>
                            Stay happy.
                            <br>
                            Stay blessed.
                            <br>
                            And always stay the same
                            wonderful Ayesha.
                        </p>

                        <span>♡</span>

                    </div>


                    <p class="final-signature">
                        Happy Birthday, Bestie ♡
                    </p>

                </section>


                <!-- FINAL BUTTON -->

                <button
                    class="final-button"
                    onclick="celebrateBirthday()">

                    <span>
                        MAKE A WISH
                    </span>

                    <b>♡</b>

                </button>


                <p class="final-number">
                    12 / 12
                </p>


            </main>

        </div>

    `;


    // ==========================================
    // FINAL PAGE CSS
    // ==========================================

    const style = document.createElement("style");

    style.innerHTML = `

        * {
            box-sizing: border-box;
        }


        body {

            margin: 0;

            background: #080208;

            font-family: Arial, sans-serif;

            overflow-x: hidden;

        }


        /* ======================================
           MAIN PAGE
        ====================================== */

        .final-page {

            min-height: 100vh;

            position: relative;

            display: flex;

            justify-content: center;

            align-items: center;

            padding: 60px 20px;

            overflow: hidden;

            color: white;

            background:

                radial-gradient(
                    circle at 50% 35%,
                    #7a2b51 0%,
                    #491832 35%,
                    #260b20 68%,
                    #080208 100%
                );

            animation:
                finalAppear 1s ease;

        }


        @keyframes finalAppear {

            from {

                opacity: 0;

                transform:
                    scale(.97);

            }

            to {

                opacity: 1;

                transform:
                    scale(1);

            }

        }


        /* ======================================
           CENTER GLOW
        ====================================== */

        .final-page::before {

            content: "";

            position: absolute;

            width: 600px;

            height: 600px;

            border-radius: 50%;

            background: #ff75ad;

            filter: blur(170px);

            opacity: .11;

            pointer-events: none;

        }


        /* ======================================
           FLOATING HEARTS
        ====================================== */

        .final-heart {

            position: absolute;

            color: #ff91bd;

            opacity: .35;

            pointer-events: none;

            animation:
                finalFloat 6s ease-in-out infinite;

        }


        .heart-1 {

            left: 7%;

            top: 18%;

            font-size: 50px;

        }


        .heart-2 {

            left: 15%;

            bottom: 20%;

            font-size: 24px;

            animation-delay: 1s;

        }


        .heart-3 {

            right: 8%;

            top: 22%;

            font-size: 43px;

            animation-delay: 2s;

        }


        .heart-4 {

            right: 15%;

            bottom: 18%;

            font-size: 30px;

            animation-delay: 3s;

        }


        .heart-5 {

            left: 50%;

            top: 8%;

            font-size: 22px;

            animation-delay: 1.5s;

        }


        @keyframes finalFloat {

            50% {

                transform:
                    translateY(-18px)
                    rotate(8deg);

            }

        }


        /* ======================================
           STARS
        ====================================== */

        .final-star {

            position: absolute;

            color: #f3bad1;

            opacity: .28;

            animation:
                starTwinkle 3s ease-in-out infinite;

        }


        .star-1 {

            left: 23%;

            top: 14%;

        }


        .star-2 {

            right: 23%;

            top: 15%;

            animation-delay: 1s;

        }


        .star-3 {

            left: 11%;

            bottom: 35%;

            animation-delay: 1.5s;

        }


        .star-4 {

            right: 12%;

            bottom: 32%;

            animation-delay: 2s;

        }


        @keyframes starTwinkle {

            50% {

                opacity: .75;

                transform:
                    scale(1.3);

            }

        }


        /* ======================================
           CONTENT
        ====================================== */

        .final-content {

            width: 100%;

            max-width: 850px;

            position: relative;

            z-index: 5;

            text-align: center;

        }


        /* ======================================
           TOP
        ====================================== */

        .final-small {

            margin: 0 0 18px;

            color: #d5a0b8;

            font-size: 10px;

            letter-spacing: 6px;

        }


        .birthday-crown {

            width: 62px;

            height: 62px;

            margin: 0 auto 18px;

            display: flex;

            align-items: center;

            justify-content: center;

            border-radius: 50%;

            color: #ff91bd;

            font-size: 27px;

            background:
                rgba(255,120,175,.08);

            border:
                1px solid
                rgba(255,150,195,.35);

            box-shadow:
                0 0 40px
                rgba(255,90,160,.18);

        }


        .final-pretitle {

            margin: 0 0 7px;

            color: #a77b91;

            font-size: 10px;

            letter-spacing: 4px;

        }


        /* ======================================
           AYESHA
        ====================================== */

        .final-content h1 {

            margin: 0;

            font-family: Georgia, serif;

            font-size: 82px;

            line-height: 1;

            letter-spacing: 7px;

            font-weight: normal;

            color: #f4d8e4;

            text-shadow:

                0 0 35px
                rgba(255,120,175,.25);

        }


        /* ======================================
           BIRTHDAY LINE
        ====================================== */

        .birthday-line {

            margin: 18px auto 10px;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 15px;

        }


        .birthday-line span {

            width: 65px;

            height: 1px;

            background:

                linear-gradient(
                    90deg,
                    transparent,
                    #b85b88
                );

        }


        .birthday-line span:last-child {

            background:

                linear-gradient(
                    90deg,
                    #b85b88,
                    transparent
                );

        }


        .birthday-line p {

            margin: 0;

            color: #ff91bd;

            font-family: Georgia, serif;

            font-size: 17px;

            letter-spacing: 3px;

        }


        .final-year {

            margin: 0 0 28px;

            color: #ae91a0;

            font-family: Georgia, serif;

            font-size: 15px;

        }


        /* ======================================
           FINAL CARD
        ====================================== */

        .final-card {

            position: relative;

            padding: 35px 42px;

            border-radius: 28px;

            background:

                linear-gradient(
                    145deg,
                    rgba(255,200,225,.13),
                    rgba(255,255,255,.035)
                );

            border:
                1px solid
                rgba(255,170,205,.28);

            box-shadow:

                0 35px 100px
                rgba(0,0,0,.50);

            backdrop-filter:
                blur(20px);

            overflow: hidden;

        }


        .final-card::before {

            content: "";

            position: absolute;

            top: 0;

            left: 15%;

            width: 70%;

            height: 1px;

            background:

                linear-gradient(
                    90deg,
                    transparent,
                    #ff91bd,
                    transparent
                );

        }


        .card-decoration {

            color: #ff91bd;

            font-size: 24px;

            margin-bottom: 13px;

        }


        .final-card h2 {

            margin: 0 0 18px;

            color: #f0cadb;

            font-family: Georgia, serif;

            font-size: 28px;

            font-weight: normal;

        }


        .final-message {

            max-width: 670px;

            margin: 0 auto 17px;

            color: #cbb4c1;

            font-family: Georgia, serif;

            font-size: 17px;

            line-height: 1.8;

        }


        /* ======================================
           WISH
        ====================================== */

        .final-wish {

            max-width: 500px;

            margin: 25px auto;

            padding: 19px;

            display: flex;

            justify-content: center;

            align-items: center;

            gap: 18px;

            border-radius: 17px;

            background:
                rgba(255,100,165,.06);

            border:
                1px solid
                rgba(255,145,190,.15);

        }


        .final-wish span {

            color: #ff91bd;

            font-size: 20px;

        }


        .final-wish p {

            margin: 0;

            color: #dfbfd0;

            font-family: Georgia, serif;

            font-size: 16px;

            line-height: 1.7;

        }


        .final-signature {

            margin: 20px 0 0;

            color: #edabc6;

            font-family: Georgia, serif;

            font-size: 20px;

        }


        /* ======================================
           BUTTON
        ====================================== */

        .final-button {

            margin-top: 28px;

            padding: 16px 32px;

            border:
                1px solid
                rgba(255,160,200,.45);

            border-radius: 50px;

            color: white;

            background:

                linear-gradient(
                    135deg,
                    #bd4e82,
                    #71314f
                );

            cursor: pointer;

            font-size: 10px;

            letter-spacing: 3px;

            box-shadow:

                0 15px 35px
                rgba(0,0,0,.3);

            transition:
                .3s ease;

        }


        .final-button b {

            margin-left: 13px;

            font-size: 17px;

        }


        .final-button:hover {

            transform:
                translateY(-5px)
                scale(1.02);

            box-shadow:

                0 20px 45px
                rgba(255,70,150,.25);

        }


        .final-number {

            margin: 12px 0 0;

            color: #604453;

            font-size: 8px;

            letter-spacing: 4px;

        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 700px) {

            .final-page {

                padding:
                    45px 14px;

            }


            .final-content h1 {

                font-size: 55px;

                letter-spacing: 4px;

            }


            .final-small {

                font-size: 8px;

                letter-spacing: 4px;

            }


            .final-card {

                padding:
                    27px 20px;

            }


            .final-card h2 {

                font-size: 24px;

            }


            .final-message {

                font-size: 15px;

                line-height: 1.75;

            }


            .final-wish {

                padding: 15px;

            }


            .final-wish p {

                font-size: 14px;

            }


            .final-signature {

                font-size: 18px;

            }


            .birthday-line {

                gap: 8px;

            }


            .birthday-line span {

                width: 30px;

            }


            .birthday-line p {

                font-size: 13px;

            }


            .final-year {

                font-size: 13px;

            }


            .final-heart {

                opacity: .16;

            }


            .final-star {

                opacity: .15;

            }

        }


        /* ======================================
           SHORT LAPTOP
        ====================================== */

        @media (min-width: 701px)
        and (max-height: 750px) {

            .final-page {

                padding:
                    30px 20px;

            }


            .birthday-crown {

                width: 48px;

                height: 48px;

                margin-bottom: 10px;

            }


            .final-content h1 {

                font-size: 58px;

            }


            .final-year {

                margin-bottom: 18px;

            }


            .final-card {

                padding:
                    23px 30px;

            }


            .final-card h2 {

                font-size: 23px;

                margin-bottom: 12px;

            }


            .final-message {

                font-size: 14px;

                line-height: 1.6;

                margin-bottom: 10px;

            }


            .final-wish {

                margin: 15px auto;

                padding: 12px;

            }


            .final-wish p {

                font-size: 14px;

            }


            .final-signature {

                margin-top: 12px;

                font-size: 17px;

            }


            .final-button {

                margin-top: 16px;

            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// BIRTHDAY CELEBRATION
// ==========================================

function celebrateBirthday() {

    const button =
        document.querySelector(".final-button");


    button.innerHTML =
        "HAPPY BIRTHDAY AYESHA ♡";


    button.style.transform =
        "scale(1.08)";


    // Create hearts

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            Math.random() > .5 ? "♡" : "♥";


        heart.style.position =
            "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            "-30px";

        heart.style.zIndex =
            "100";

        heart.style.fontSize =
            (14 + Math.random() * 20) + "px";

        heart.style.color =
            "#ff91bd";

        heart.style.pointerEvents =
            "none";


        document.body.appendChild(heart);


        const duration =
            2500 + Math.random() * 2500;


        heart.animate(

            [

                {
                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 0

                },

                {

                    transform:
                        "translateY(-50vh) rotate(120deg)",

                    opacity: 1

                },

                {

                    transform:
                        "translateY(-110vh) rotate(260deg)",

                    opacity: 0

                }

            ],

            {

                duration: duration,

                easing: "ease-out"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, duration);

    }


    // Final message

    setTimeout(() => {

        const message =
            document.createElement("div");


        message.innerHTML = `

            <div class="wish-popup">

                <div class="popup-heart">
                    ♡
                </div>

                <h2>
                    Once again...
                </h2>

                <p>
                    Happy Birthday, Ayesha! 🎂
                    <br><br>
                    May your smile always be bigger
                    than your problems,
                    and may your life always be
                    full of beautiful moments. ♡
                </p>

                <strong>
                    With love, always. ♡
                </strong>

            </div>

        `;


        document.body.appendChild(message);


        const popupStyle =
            document.createElement("style");


        popupStyle.innerHTML = `

            .wish-popup {

                position: fixed;

                z-index: 200;

                left: 50%;

                top: 50%;

                transform:
                    translate(-50%, -50%)
                    scale(.8);

                width: min(500px, 88%);

                padding: 35px 28px;

                text-align: center;

                border-radius: 25px;

                background:

                    linear-gradient(
                        145deg,
                        #42162f,
                        #210b1c
                    );

                border:
                    1px solid
                    rgba(255,160,200,.35);

                box-shadow:
                    0 30px 100px
                    rgba(0,0,0,.7);

                animation:
                    popupIn .5s ease forwards;

            }


            @keyframes popupIn {

                to {

                    transform:
                        translate(-50%, -50%)
                        scale(1);

                }

            }


            .popup-heart {

                color: #ff91bd;

                font-size: 38px;

                margin-bottom: 10px;

            }


            .wish-popup h2 {

                margin: 0 0 15px;

                color: #f0cadb;

                font-family: Georgia, serif;

                font-size: 30px;

                font-weight: normal;

            }


            .wish-popup p {

                margin: 0 0 20px;

                color: #cbb1bf;

                font-family: Georgia, serif;

                font-size: 16px;

                line-height: 1.8;

            }


            .wish-popup strong {

                color: #edabc6;

                font-family: Georgia, serif;

                font-size: 17px;

                font-weight: normal;

            }

        `;


        document.head.appendChild(popupStyle);

    }, 900);

}