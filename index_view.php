<?php
include('./Data/GetData.php')
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ARASAKA OS</title>
    <link rel="icon" type="image/x-icon" href="./imgs/ico/Logo.ico">

    <link rel="stylesheet" href="./styles/Mainpage.css">
    <script src="./script/mainpage.js" defer></script>
</head>
<body>
    <div class="center-box" id="center-static">
        <img class="logo" id="logo" src="./imgs/ArasakaLogo.webp" alt="">
        
        <div class="grid-pattern" id="grid-pattern">
            <div class="desktop-icon" special="trash" id="trash-icon">Trash</div>
            <div class="desktop-icon" special="terminal"  id="terminal-icon">Terminal</div>
            <div class="desktop-icon" redirect="./Startup.html" id="restart-icon">Restart</div>
            <div class="desktop-icon" redirect="./AboutUs.html" id="about-us-icon">About Us</div>
            <div class="desktop-icon" redirect="./Target.html" id="target-icon">Target Page</div>
        </div>

        <div class="program" draggable="true" id="terminal" style="display: none"> 
            <div class="title-bar-terminal">
                <img src="../imgs/icons/Minimize.png" alt="Minimize" class="title-button static">
                <img src="../imgs/icons/Close.svg" alt="Close" class="title-button static" id="close">
            </div>
            <textarea name="" id="terminal-textarea">
                wadddup
            </textarea>
        </div>

        <div class="program" draggable="true" id="trash" style="display: none"> 
            <div class="title-bar-trash">
                <img src="../imgs/icons/Minimize.png" alt="Minimize" class="title-button static">
                <img src="../imgs/icons/Close.svg" alt="Close" class="title-button static" id="close">
            </div>
            <textarea name="" id="terminal-textarea">
                wadddup
            </textarea>
        </div>
        
        <div class="panels-column">
            <div class="part">
                <div class="text-area">
                <?= $data[0]['entity'] ?>...<span class="number-load">0%</span><br>
                    <?= $data[2 - 1]['entity']?>...<span class="number-load">0%</span><br>
                    <?= $data[3 - 1]['entity']?>...<span class="number-load">0%</span><br>
                    <?= $data[4 - 1]['entity']?>...<span class="number-load">0%</span><br>
                    <?= $data[5 - 1]['entity']?> <span id="bio">OFFLINE</span><br>
                    <?= $data[6 - 1]['entity']?> <span id="daemons">OFFLINE</span><br>
                    <?= $data[7 - 1]['entity']?> <span id="ice">UNKOWN</span>
                </div>
            </div>

            <div class="small-part">
                <div class="text-area">
                    System Status<br>
                    <span id="system-status">CONNECTED</span><br>
                </div>
            </div>

            <div class="small-part">
                <div class="text-area">
                    User<br>
                    <span id="user">UNKNOWN</span><br>
                </div>
            </div>
        </div>
       
    </div>



    <div class="login-page">
        <div class="centered">
            <img class="arasaka-corp" src="./imgs/Cropped.png" alt="">
        </div>
        <img class="arasaka-corp-jp" src="./imgs/arasaka-japan.png" alt="">


        <div class="side-bar">
            <span class="side-text" id="side-text"></span>
        </div>

        <div class="login-panel">
        <p class="login-label">SECURITY LOGIN</p>
        <input class="uid-input" type="text" placeholder="UID_" maxlength="17" />
        <div class="login-divider">
            <span class="slashes">///////////</span>
            <div class="divider-line"></div>
        </div>
        <p class="login-status"><span class="status-key">CURR_NETWORK:</span> <span class="status-val">ACN002077</span></p>
        <p class="login-status"><span class="status-key">NL_PORT_STATUS:</span> <span class="status-val">OPEN</span></p>
</div>

    </div>

   
</body>
</html>