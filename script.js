const ALL_EMOJIS = ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🍄','🥜','🍞','🥐','🥖','🥨','🥞','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥚','🍳','🍲','🥗','🍿','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🥤','😀','😃','😄','😁','😆','😅','😂','🤣','🥲','☺️','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🐵','🐒','🦍','🦧','🐶','🐕','🦮','🐕‍🦺','🐩','🐺','🦊','🦝','🐱','🐈','🐈‍⬛','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🦬','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦣','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿','🦫','🦔','🦇','🐻','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦','🐧','🕊','🦅','🦆','🦢','🦉','🦤','🪶','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🦭','🐟','🐠','🐡','🦈','🐙','🐚','🐌','🦋','🐛','🐜','🐝','🪲','🐞','🦗','🪳','🕷','🕸','🦂','🦟','🪰','🪱','🦠','🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🦯','🦽','🦼','🛴','🚲','🛵','🏍️','🛺','✨','🔥','🎉','💰'];

function getRandomEmoji() {
    return ALL_EMOJIS[Math.floor(Math.random() * ALL_EMOJIS.length)];
}

const DYNAMIC_EMOJIS = {
    flame: getRandomEmoji(),
    skull: getRandomEmoji(),
    alien: getRandomEmoji(),
    monkey: '🐵',
    money: getRandomEmoji(),
    spark: getRandomEmoji(),
    party: getRandomEmoji()
};

let totalDonations = 0;
function donate() {
    totalDonations += 100;
    document.getElementById('donation-total').innerText = totalDonations;
    
    if (totalDonations >= 1000000) {
        alert(`${DYNAMIC_EMOJIS.party} GOAL REACHED! 1 MILLION DOLLARS! CALLIE IS SAVED! ${DYNAMIC_EMOJIS.party}`);
        document.body.style.backgroundColor = "lime";
        for (let i = 0; i < 20; i++) {
            setTimeout(spawnBonziBuddy, i * 200);
        }
    } else {
        alert('Thank you for donating $100 to Save Callie! Your virtual karma has increased.');
    }
}

let bonziCount = 0;
function spawnBonziBuddy() {
    bonziCount++;
    let bonzi = document.createElement('div');
    bonzi.id = 'bonzi-buddy-' + bonziCount;
    bonzi.style.position = 'fixed';
    
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);
    
    bonzi.style.left = Math.max(0, x) + 'px';
    bonzi.style.top = Math.max(0, y) + 'px';
    bonzi.style.zIndex = '10000';
    
    let messages = [
        "Hello there! I'm Bonzi Buddy!<br>Ready to surf the web?",
        "Did you know I can sing? Daisy, Daisy...",
        "Your computer is running slowly. I can fix that!",
        "It looks like you're trying to write a letter!",
        "I'm feeling a little lonely..."
    ];
    let msg = messages[Math.floor(Math.random() * messages.length)];
    
    bonzi.innerHTML = `
        <div style="background: white; border: 2px solid black; border-radius: 10px; padding: 10px; margin-bottom: 10px; font-family: 'Comic Sans MS', sans-serif; color: black; position: relative; font-size: 14px;">
            ${msg}
            <button onclick="this.parentElement.parentElement.remove(); spawnBonziBuddy(); spawnBonziBuddy();" style="position: absolute; top: -10px; right: -10px; background: red; color: white; border: 2px outset red; border-radius: 50%; font-weight: bold; cursor: pointer;">X</button>
        </div>
        <img src="https://media.discordapp.net/attachments/1513627374644756591/1515494102362493039/bonzibuddy__by_crash123r56_diu51h1-pre.png?ex=6a2f355e&is=6a2de3de&hm=24863103aef96a307ca0e04f7c6b11aa1b193fbce6fd90bf4d80d19f198cf97d&=&format=webp&quality=lossless" alt="Bonzi Buddy" style="height: 150px; display: block; margin: 0 auto; filter: drop-shadow(2px 4px 6px black);">
    `;
    document.body.appendChild(bonzi);
}

let bannerClicks = 0;
function claimCruise() {
    bannerClicks++;
    if (bannerClicks === 3) {
        let popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.zIndex = '999999';
        popup.style.width = '350px';
        popup.style.backgroundColor = '#f0f0f0';
        popup.style.border = '2px outset #ffffff';
        popup.style.outline = '1px solid #707070';
        popup.style.boxShadow = '5px 5px 15px rgba(0,0,0,0.5)';
        popup.style.fontFamily = 'Tahoma, Arial, sans-serif';
        popup.style.cursor = 'default';
        
        popup.innerHTML = `
            <div style="padding: 15px; display: flex; align-items: flex-start; background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);">
                <div style="font-size: 60px; margin-right: 15px; line-height: 1; text-shadow: -2px 2px 10px rgba(0,0,255,0.5);">☄️</div>
                <div style="padding-top: 5px;">
                    <div style="text-decoration: underline; font-weight: normal; font-size: 15px; margin-bottom: 15px; color: black;">C4LL13RAT - New User !</div>
                    <div style="font-size: 13px; color: black; margin-bottom: 8px;">User ID : DimwitDog</div>
                    <div style="font-size: 13px; color: black; margin-bottom: 4px;">IP : &nbsp;&nbsp;&nbsp;<span style="color: red;">127.0.0.1</span></div>
                    <div style="font-size: 13px; color: red; margin-left: 28px;">PC-M30W</div>
                </div>
            </div>
            <div style="border-top: 1px solid #a0a0a0; background: linear-gradient(to bottom, #f5f5f5 0%, #d0d0d0 100%); padding: 10px; display: flex; justify-content: flex-end; align-items: center;">
                <button onclick="this.parentElement.parentElement.remove()" style="background: radial-gradient(circle at 30% 30%, #55ff55, #00a000); border: 2px solid #fff; border-radius: 50%; width: 35px; height: 35px; color: white; font-weight: bold; font-size: 18px; margin-right: 15px; cursor: pointer; box-shadow: 1px 1px 3px rgba(0,0,0,0.5); text-shadow: 1px 1px 1px rgba(0,0,0,0.5);">➔</button>
                <button onclick="this.parentElement.parentElement.remove()" style="background: radial-gradient(circle at 30% 30%, #ff5555, #c00000); border: 2px solid #fff; border-radius: 15%; width: 35px; height: 35px; color: white; font-weight: bold; font-size: 18px; cursor: pointer; box-shadow: 1px 1px 3px rgba(0,0,0,0.5); text-shadow: 1px 1px 1px rgba(0,0,0,0.5);">✖</button>
            </div>
        `;
        document.body.appendChild(popup);
        bannerClicks = 0; // Reset
        return;
    }

    alert("Downloading Cruise_Ship.exe...");
    setTimeout(() => {
        spawnBonziBuddy();
    }, 1000);
}

function installSmileyToolbar() {
    if (document.getElementById('smiley-toolbar')) return;
    let toolbar = document.createElement('div');
    toolbar.id = 'smiley-toolbar';
    toolbar.style.position = 'fixed';
    toolbar.style.bottom = '0';
    toolbar.style.left = '0';
    toolbar.style.width = '100%';
    toolbar.style.backgroundColor = 'silver';
    toolbar.style.borderTop = '3px outset white';
    toolbar.style.padding = '5px';
    toolbar.style.zIndex = '9999';
    
    let emojis = Array.from({length: 14}, () => getRandomEmoji());
    let html = '<b style="color: blue;">Smiley Toolbar™:</b> ';
    emojis.forEach(e => {
        html += `<span style="cursor:pointer; font-size:20px; margin:0 5px;" onclick="document.getElementById('guestbook-input').value += '${e}'" title="Insert ${e}">${e}</span>`;
    });
    html += '<button onclick="this.parentElement.remove()" style="float:right; margin-right: 10px; cursor: pointer; border: 2px outset white; font-weight: bold;">X</button>';
    
    toolbar.innerHTML = html;
    document.body.appendChild(toolbar);
}

function punchMonkey() {
    let ad = document.getElementById('monkey-ad');
    ad.innerHTML = '<font color="lime" size="4"><blink><b>YOU PUNCHED THE MONKEY!</b></blink></font><br><font color="white">Your $20 is in the mail!</font>';
    ad.onclick = null;
    ad.style.cursor = 'default';
}

function spawnHackerPrank() {
    if (document.getElementById('hacker-prank-window')) return;
    
    let win = document.createElement('div');
    win.id = 'hacker-prank-window';
    win.style.position = 'fixed';
    win.style.top = '10%';
    win.style.left = '50%';
    win.style.transform = 'translateX(-50%)';
    win.style.width = '500px';
    win.style.backgroundColor = 'black';
    win.style.border = '4px solid #00FF00';
    win.style.zIndex = '10001';
    win.style.color = '#00FF00';
    win.style.fontFamily = 'Courier, monospace';
    win.style.boxShadow = '0 0 20px #00FF00';
    
    let html = `
        <div style="background: #00FF00; color: black; padding: 5px; font-weight: bold; display: flex; justify-content: space-between;">
            <span>[LOIC / TUPACBOOTER v0.9b - FOR DESTRUCTIVE PURPOSES ONLY]</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: black; color: #00FF00; border: 1px solid #00FF00; cursor: pointer;">X</button>
        </div>
        <div style="padding: 15px; font-size: 14px;">
            <p>Gathering target IP data...</p>
            <p id="prank-ip-display">IP: [WAITING...]</p>
            <br>
            <p>Target: bleepas</p>
            <p>Method: UDP FLOOD</p>
            <p>Port: <input type="number" value="9001" style="background: black; color: #00FF00; border: 1px solid #00FF00; width: 60px;"></p>
            <p>Bots: ${Math.floor(Math.random() * 126) + 1}</p>
            <br>
            <button onclick="document.getElementById('prank-console').innerHTML += '<br>> FIRING MAH LAZER... (DDOS attack started)'; spawnFakePinger();" style="background: #00FF00; color: black; border: 2px solid white; font-weight: bold; padding: 10px; cursor: pointer; width: 100%;">IMMA CHARGIN MAH LAZER</button>
            <div id="prank-console" style="margin-top: 15px; height: 100px; overflow-y: auto; border: 1px dashed #00FF00; padding: 5px; font-size: 12px;">
                > Ready.
            </div>
        </div>
    `;
    
    win.innerHTML = html;
    document.body.appendChild(win);
    
    // Fetch the user's actual IP using a free API
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            let ipDisplay = document.getElementById('prank-ip-display');
            if(ipDisplay) {
                ipDisplay.innerHTML = `TARGET ACQUIRED: <b><blink>${data.ip}</blink></b>`;
            }
        })
        .catch(err => {
            let ipDisplay = document.getElementById('prank-ip-display');
            if(ipDisplay) {
                ipDisplay.innerHTML = `TARGET ACQUIRED: <b><blink>127.0.0.1</blink></b>`;
            }
        });
}

function loadGuestbook() {
    let saved = localStorage.getItem('guestbook_entries');
    let entriesDiv = document.getElementById('guestbook-entries');
    if (!entriesDiv) return;
    
    entriesDiv.innerHTML = ''; 
    let entriesArray = saved ? JSON.parse(saved) : [
        {name: 'xX_meowpilled_nyaggot_Xx', text: 'Wow what a cool site!!! I love the colors!'}
    ];
    
    entriesArray.forEach(entry => {
        let newEntry = document.createElement('p');
        newEntry.innerHTML = '<b>' + entry.name + ':</b> ' + entry.text;
        entriesDiv.appendChild(newEntry);
    });
}

function signGuestbook() {
    let input = document.getElementById('guestbook-input');
    let text = input.value.trim();
    if (text) {
        let name = 'Anonymous_User_' + Math.floor(Math.random() * 9000 + 1000);
        let safeText = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        let saved = localStorage.getItem('guestbook_entries');
        let entriesArray = saved ? JSON.parse(saved) : [
            {name: 'xX_meowpilled_nyaggot_Xx', text: 'Wow what a cool site!!! I love the colors!'}
        ];
        
        entriesArray.unshift({name: name, text: safeText});
        localStorage.setItem('guestbook_entries', JSON.stringify(entriesArray));
        
        loadGuestbook();
        input.value = '';
    } else {
        alert('Please write something before signing!');
    }
}

// Call loadGuestbook on load
loadGuestbook();

// Make the title scroll like an old 90s/2000s site in the browser tab
var titleText = "Save Callie - Please Donate! - ";
function scrollTitle() {
    titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
    document.title = titleText;
    setTimeout(scrollTitle, 250);
}
scrollTitle();

window.addEventListener('DOMContentLoaded', (event) => {
    // Populate dynamic emojis
    document.querySelectorAll('.flame-text').forEach(el => el.innerText = DYNAMIC_EMOJIS.flame);
    document.querySelectorAll('.flame-divider').forEach(el => el.innerText = Array(16).fill(DYNAMIC_EMOJIS.flame).join(' '));
    document.querySelectorAll('.spinny-skull').forEach(el => el.innerText = DYNAMIC_EMOJIS.skull);
    document.querySelectorAll('.spinny-alien').forEach(el => el.innerText = DYNAMIC_EMOJIS.alien);
    document.querySelectorAll('.emoji-monkey').forEach(el => el.innerText = DYNAMIC_EMOJIS.monkey);
    document.querySelectorAll('.emoji-money').forEach(el => el.innerText = DYNAMIC_EMOJIS.money);
    
    const smileysMarquee = document.querySelector('.emoji-smileys-marquee');
    if (smileysMarquee) {
        smileysMarquee.innerText = Array.from({length: 8}, () => getRandomEmoji()).join(' ');
    }

    let monkeyAd = document.getElementById('monkey-ad');
    if (monkeyAd) {
        monkeyAd.onmouseover = function() {
            if (this.style.position !== 'fixed') {
                this.style.position = 'fixed';
                this.style.zIndex = '9999';
            }
            let maxX = window.innerWidth - this.offsetWidth;
            let maxY = window.innerHeight - this.offsetHeight;
            let newX = Math.random() * maxX;
            let newY = Math.random() * maxY;
            this.style.left = Math.max(0, newX) + 'px';
            this.style.top = Math.max(0, newY) + 'px';
        };
    }

    // Spawn initial Bonzi Buddy after 3 seconds
    setTimeout(spawnBonziBuddy, 3000);
});

// Cursor Trail
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.3) return; // lower frequency
    let spark = document.createElement('div');
    spark.innerHTML = DYNAMIC_EMOJIS.spark;
    spark.style.position = 'fixed';
    spark.style.left = (e.clientX + 5) + 'px';
    spark.style.top = (e.clientY + 5) + 'px';
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '99999';
    spark.style.transition = 'top 1s, opacity 1s';
    document.body.appendChild(spark);
    
    setTimeout(() => {
        spark.style.top = (e.clientY + 50) + 'px';
        spark.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        spark.remove();
    }, 1050);
});

// Fake Error Alerts
setInterval(() => {
    let alerts = [
        "WARNING: VIRUS DATABASE IS OUT OF DATE!",
        "Are you sure you want to navigate away from this page?",
        "CONGRATULATIONS! You have been selected for a free iPod Nano!",
        "Your internet connection is currently being optimized...",
        "Error 0x00000000: Task completed successfully."
    ];
    let alertMsg = alerts[Math.floor(Math.random() * alerts.length)];
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    let x = Math.random() * (window.innerWidth - 300);
    let y = Math.random() * (window.innerHeight - 150);
    popup.style.left = Math.max(0, x) + 'px';
    popup.style.top = Math.max(0, y) + 'px';
    popup.style.width = '300px';
    popup.style.backgroundColor = 'silver';
    popup.style.border = '3px outset white';
    popup.style.zIndex = '9998';
    popup.style.color = 'black';
    popup.style.fontFamily = 'Arial, sans-serif';
    
    popup.innerHTML = `
        <div style="background: darkblue; color: white; padding: 2px 5px; font-weight: bold; display: flex; justify-content: space-between;">
            <span>System Message</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: silver; border: 2px outset white; cursor: pointer; font-weight: bold;">X</button>
        </div>
        <div style="padding: 15px; text-align: center;">
            <p>${alertMsg}</p>
            <button onclick="this.parentElement.parentElement.remove()" style="margin-top: 10px; padding: 5px 15px; border: 2px outset white; cursor: pointer;">OK</button>
        </div>
    `;
    document.body.appendChild(popup);
}, 10000); // Every 10 seconds

function spawnFakePinger() {
    if (document.getElementById('fake-pinger-window')) return;
    
    let win = document.createElement('div');
    win.id = 'fake-pinger-window';
    win.style.position = 'fixed';
    win.style.top = '15%';
    win.style.left = '60%';
    win.style.transform = 'translateX(-50%)';
    win.style.width = '600px';
    win.style.backgroundColor = '#050505';
    win.style.border = '2px solid #00FF00';
    win.style.zIndex = '10002';
    win.style.color = '#00FF00';
    win.style.fontFamily = 'Courier, monospace';
    win.style.boxShadow = '0 0 30px #00FF00, inset 0 0 15px #00FF00';
    
    let html = `
        <div id="pinger-header" style="background: #00FF00; color: black; padding: 5px; font-weight: bold; display: flex; justify-content: space-between;">
            <span>[ C:\\WINDOWS\\system32\\ping.exe -t 192.168.1.1 ]</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: black; color: #00FF00; border: 1px solid #00FF00; cursor: pointer;" id="pinger-close-btn">X</button>
        </div>
        <div id="pinger-console" style="padding: 15px; font-size: 14px; height: 300px; overflow-y: auto; text-shadow: 0 0 5px #00FF00;">
            <p style="color: #00FF00;">Pinging 192.168.1.1 with 32 bytes of data:</p>
            <br>
        </div>
    `;
    
    win.innerHTML = html;
    document.body.appendChild(win);
    
    let consoleDiv = document.getElementById('pinger-console');
    let pingsSent = 0;
    let hitOff = false;
    
    let pingerInterval = setInterval(() => {
        if(!document.getElementById('fake-pinger-window')) {
            clearInterval(pingerInterval);
            return;
        }
        
        pingsSent++;
        let p = document.createElement('p');
        p.style.margin = '2px 0';
        
        if (!hitOff && pingsSent > 4 + Math.random() * 6) {
            hitOff = true;
            win.style.border = '2px solid #FF0000';
            win.style.color = '#FF3333';
            win.style.boxShadow = '0 0 30px #FF0000, inset 0 0 15px #FF0000';
            document.getElementById('pinger-header').style.background = '#FF0000';
            let closeBtn = document.getElementById('pinger-close-btn');
            closeBtn.style.color = '#FF0000';
            closeBtn.style.borderColor = '#FF0000';
            consoleDiv.style.textShadow = '0 0 5px #FF0000';
        }
        
        if (!hitOff) {
            let time = Math.floor(Math.random() * 30) + 10;
            p.innerHTML = `<span style="color: #00FF00;">Reply from 192.168.1.1: bytes=32 time=${time}ms TTL=54</span>`;
        } else {
            let rand = Math.random();
            if (rand > 0.4) {
                p.innerHTML = '<span style="color: #FF0000; font-weight: bold;">Request timed out.</span>';
            } else if (rand > 0.15) {
                p.innerHTML = '<span style="color: #FF5500;">Reply from 192.168.1.1: Destination net unreachable.</span>';
            } else {
                p.innerHTML = '<span style="color: #FFFF00; text-decoration: underline;">General failure.</span>';
            }
        }
        
        consoleDiv.appendChild(p);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }, 800);
}
