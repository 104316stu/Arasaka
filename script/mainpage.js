const gridpattern = document.getElementById("grid-pattern")
const logo = document.getElementById("logo")
  

const divs = document.querySelectorAll('.number-load');

const biomonitor = document.getElementById("bio")
const daemons = document.getElementById("daemons")
const ice = document.getElementById("ice")
const sideText = document.getElementById("side-text")
const loginPage = document.querySelector(".login-page")
const userText = document.getElementById("user")
const systemStatusText = document.getElementById("system-status")

// make os current date
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
sideText.textContent = `ARASAKA OS V0${year-2000}.${month}.980`;



let username = "";

let isRightShiftDown = false;


function loadingto100(div) {
    return new Promise((resolve) => {
        let count = 0;
        let randomnum = 5
        if (div) {
            randomnum = -10
        }
        
        const randomSpeed = Math.floor(Math.random() * 45) + randomnum
        
        const interval = setInterval(() => {
            count++
            if (div) {
                div.innerText = count + "%"
            } else {
                let bgSize = (0.35 * count) + "px"
                gridpattern.style.backgroundSize = `${bgSize} ${bgSize}`
                logo.style.opacity = (0.35 * count) + "%"
            }
            

            if (count >= 100) {
                clearInterval(interval)
                resolve()
            }
        }, randomSpeed)
    });
}

let stopsystemStatus = false
 
function otherloading(content, text, isSystemStatus) {
    return new Promise((resolve) => {
        let step = 0
        let stopped = false
        let id
 
        function tick() {
            if (stopped) return
            step = (step % 3) + 1
            content.textContent = text + ".".repeat(step)
            id = setTimeout(tick, 300)
        }
        tick()
 
        if (isSystemStatus) {
            const checkStatus = setInterval(() => {
                if (stopsystemStatus) {
                    clearInterval(checkStatus)
                    stopped = true
                    clearTimeout(id)
                    resolve()
                }
            }, 100)
        } else {
            setTimeout(() => {
                stopped = true
                clearTimeout(id)
                resolve()
            }, Math.random() * 4000 + 2000)
        }
    })
}

const centerStatic = document.querySelector("#center-static")

async function Startup_Sequence() {
    stopsystemStatus = false 
 
    otherloading(systemStatusText, "CONNECTING", true)
 
    userText.textContent = username.toUpperCase()
    centerStatic.style.position = "static"
    loginPage.style.display = "none"
    loadingto100()
    for (const div of divs) {
      await loadingto100(div)
    }
 
    await otherloading(biomonitor, "STARTING")
    biomonitor.textContent = "ACTIVE"
    await otherloading(daemons, "WAKING")
    daemons.textContent = "READY"
    await otherloading(ice, "SENDING")
    ice.textContent = "ENGAGED"
    stopsystemStatus = true
    await otherloading(systemStatusText, "FINALIZING")
    systemStatusText.textContent = "CONNECTED"
}



window.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftRight') {
        isRightShiftDown = true;
    }
    
    const isR = event.key.toLowerCase() === 'r';

    if (isRightShiftDown && isR) {
        window.location.href = 'Startup.html';
    }
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftRight') {
        isRightShiftDown = false;
    }
});




const usernameText = document.querySelector(".uid-input")

usernameText.focus()
usernameText.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && usernameText.value.length > 0) {
        username = usernameText.value
        Startup_Sequence()
    }

})
  //Startup_Sequence()
