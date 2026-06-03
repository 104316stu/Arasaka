const gridpattern = document.getElementById("grid-pattern")
const logo = document.getElementById("logo")
  

const divs = document.querySelectorAll('.number-load');


const nano = document.getElementById("bio")
const holo = document.getElementById("daemons")
const shield = document.getElementById("ice")
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





async function getData(id) {
    const response = await fetch("./Data/GetData.php?id=" + id);
    return await response.json();
}

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
    let total = 0
    for (const div of divs) {
        total++
      await loadingto100(div, total)
    }
    
    await otherloading(nano, "Searching")
    nano.textContent = (await getData(5))['status']
    await otherloading(holo, "Loading")
    holo.textContent = (await getData(6))['status']
    await otherloading(shield, "Loading")
    shield.textContent = (await getData(7))['status']
    stopsystemStatus = true
    await otherloading(systemStatusText, "FINALIZING")
    systemStatusText.textContent = "CONNECTED"
}



dragElement(document.querySelector(".title-bar"), document.getElementById("terminal"));

function dragElement(elmnt, elmntToDrag) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmntToDrag.style.top = (elmntToDrag.offsetTop - pos2) + "px";
    elmntToDrag.style.left = (elmntToDrag.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
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



document.addEventListener("mouseover", (event) => {
    if (event.target.closest('.desktop-icon')) {
        event.target.style.backgroundColor = "rgba(128, 128, 128, 0.3)";
    }
})

document.addEventListener("mouseout", (event) => {
    if (event.target.closest('.desktop-icon')) {
        event.target.style.backgroundColor = "rgba(128, 128, 128, 0)";
    }
})

const terminal = document.getElementById("terminal")
let min = false

document.addEventListener("click", (event) => {
    const target = event.target
    if (target.closest('.desktop-icon')) {
        if (target.getAttribute("redirect")) {
            window.location.href = new URL(target.getAttribute("redirect"), window.location.href).href
        } else if (target.getAttribute("special") == "terminal") {
            terminal.style.display = "block"
            if (!min) {
                terminalInit()
            }
        }
    } else if (target.closest('.title-button')) {
        terminal.style.display = "none"
        if (target.closest("#close")) {
            terminal.style.removeProperty("top")
            terminal.style.removeProperty("left")
            min = false
        } else {
            min = true
        }
    }
})


const usernameText = document.querySelector(".uid-input")

usernameText.focus()
usernameText.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && usernameText.value.length > 0 && 
        usernameText.value.trim().length > 0 && usernameText.value.length <= 17
) {
        username = usernameText.value
        Startup_Sequence()
    }

})


async function fetchAllData() {
    let statuses = ""
    
    const response = await fetch("./Data/GetData.php?all=true");
    let jsonResponse = (await response.json())["scienceFictionInterface"];


    for (const element of jsonResponse) {
        statuses = statuses+element.entity+": "+element.status+`\n`
    }
    return statuses;
}

console.log(fetchAllData())




//   Startup_Sequence()



  /// terminal ////


document.getElementById('close').addEventListener('click', () => {
    document.getElementById('terminal').style.display = 'none';
});

// Draggable window 
const terminalWindow = document.getElementById('terminal');
const titleBar = terminalWindow.querySelector('.title-bar');
let isDragging = false, offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - terminalWindow.getBoundingClientRect().left;
    offsetY = e.clientY - terminalWindow.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    terminalWindow.style.left = (e.clientX - offsetX) + 'px';
    terminalWindow.style.top  = (e.clientY - offsetY) + 'px';
    terminalWindow.style.position = 'absolute';
});

document.addEventListener('mouseup', () => isDragging = false);

const textarea = document.getElementById('terminal-textarea');

let history = [];
let historyIndex = -1;
let inputBuffer = '';
let prompt = 'arasaka@os:~$ ';

function terminalInit() {
    if (username) {
        prompt = username+"@os:~$ "
    }
    textarea.value = 'ARASAKA OS v2077 — Type "help" for commands\n' + prompt;
    textarea.focus();
    moveCursorToEnd();
}

function moveCursorToEnd() {
    textarea.selectionStart = textarea.value.length;
    textarea.selectionEnd   = textarea.value.length;
}

function getPromptLineStart() {
    return textarea.value.lastIndexOf(prompt) + prompt.length;
}

textarea.addEventListener('keydown', (e) => {
    const promptStart = getPromptLineStart();

    // prevent moving cursor before the prompt
    if ((e.key === 'ArrowLeft' || e.key === 'Backspace') &&
        textarea.selectionStart <= promptStart) {
        e.preventDefault();
        return;
    }

    // prevent selecting before prompt
    if (e.key === 'Home') {
        e.preventDefault();
        textarea.selectionStart = promptStart;
        textarea.selectionEnd   = promptStart;
        return;
    }

    // history up
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex < history.length - 1) historyIndex++;
        replaceInput(history[historyIndex] || '');
        return;
    }

    // history down
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > -1) historyIndex--;
        replaceInput(historyIndex === -1 ? '' : history[historyIndex]);
        return;
    }

 //run command
    if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = textarea.value.substring(promptStart).trim();

        if (cmd) { history.unshift(cmd); historyIndex = -1; }

        runCommand(cmd).then(output => {
            if (output === null) {
                moveCursorToEnd();
            } else {
                textarea.value += '\n' + (output ? output + '\n' : '') + prompt;
                moveCursorToEnd();
            }
            textarea.scrollTop = textarea.scrollHeight;
        });

        return;
    }
});

// block paste before prompt
textarea.addEventListener('paste', (e) => {
    if (textarea.selectionStart < getPromptLineStart()) e.preventDefault();
});

textarea.addEventListener('cut', (e) => {
    if (textarea.selectionStart < getPromptLineStart()) e.preventDefault();
});

// prevent click from placing cursor before prompt
textarea.addEventListener('click', () => {
    if (textarea.selectionStart < getPromptLineStart()) moveCursorToEnd();
});

function replaceInput(text) {
    const base = textarea.value.substring(0, getPromptLineStart());
    textarea.value = base + text;
    moveCursorToEnd();
}

function trauma() {
    const song = new Audio('../sounds/house.mp3')
    song.currentTime = 20
    song.play()

    const img = document.createElement('img')
    img.src = '../imgs/house.jpeg'
    img.classList.add("house")

    document.body.appendChild(img)


    setTimeout(() => {
        img.style.opacity = '1'
    }, 50)

    setTimeout(() => {
        img.style.opacity = '0'
    }, 20000)

    setTimeout(() => {
        img.remove()
    }, 55000)
}



const commands = {
    help: () =>
        'Commands: help, clear, echo [text], whoami, date, status, cls',

    clear: () => {
        textarea.value = 'ARASAKA OS v2077 — Type "help" for commands\n' + prompt;
        return null;
    },
    
    cls: () => {
        textarea.value = 'ARASAKA OS v2077 — Type "help" for commands\n' + prompt;
        return null;
    },

    whoami: () => username,

    date: () => new Date().toString(),

    status: async () => {
        const data = await fetchAllData();
        return data;
    },


    echo: (args) => args.join(' '),

    ireallywannastayatyourhouse: () => {
        trauma()
        return "David's dead."
    },
};

async function runCommand(raw) {
    if (!raw) return '';
    const [cmd, ...args] = raw.trim().split(' ');
    if (commands[cmd]) return await commands[cmd](args);
    return `bash: ${cmd}: command not found`;
}