let totalDonations = 0;
function donate() {
    totalDonations += 100;
    document.getElementById('donation-total').innerText = totalDonations;
    
    if (totalDonations >= 1000000) {
        alert('🎉 GOAL REACHED! 1 MILLION DOLLARS! CALLIE IS SAVED! 🎉');
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

function claimCruise() {
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
    
    let emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '😋', '😌', '😍'];
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

function loadGuestbook() {
    let saved = localStorage.getItem('guestbook_entries');
    let entriesDiv = document.getElementById('guestbook-entries');
    if (!entriesDiv) return;
    
    entriesDiv.innerHTML = ''; 
    let entriesArray = saved ? JSON.parse(saved) : [
        {name: 'xX_Dark_Hacker_Xx', text: 'Wow what a cool site!!! I love the colors!'}
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
            {name: 'xX_Dark_Hacker_Xx', text: 'Wow what a cool site!!! I love the colors!'}
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
    spark.innerHTML = '✨';
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
