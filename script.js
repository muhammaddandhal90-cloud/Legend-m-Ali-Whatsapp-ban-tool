// Toggle 3-dots dropdown menu
function toggleMenu() {
    document.getElementById('infoDropdown').classList.toggle('show');
}

// Close menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.three-dots-btn') && !event.target.matches('.fa-ellipsis-vertical')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Main Hacking Logger Script Sequence
function executeSystemAttack() {
    const phone = document.getElementById('victimPhone').value;
    if (!phone) {
        alert("Error: Target entry field cannot be empty!");
        return;
    }

    // GUI Shift
    document.getElementById('panelInput').style.display = "none";
    const consoleEl = document.getElementById('logConsole');
    consoleEl.style.display = "flex";

    // Multi-color logs sequence
    const scriptSequence = [
        { text: "[*] Initializing Legend M Ali Automated Stack...", class: "txt-blue" },
        { text: "[+] Accessing WhatsApp Cloud API Servers...", class: "txt-green" },
        { text: `[!] TARGET LOCKED ON: ${phone}`, class: "txt-yellow" },
        { text: "[*] Bootstrapping Multi-Thread Proxy Rotator...", class: "txt-blue" },
        { text: "[+] Connection established via proxy server node-779X", class: "txt-green" },
        { text: "[DANGER] Injecting mass abuse reporting vector...", class: "txt-red" },
        { text: "[+] Progress: 100 reports sent (Category: TOS Violation)...", class: "txt-green" },
        { text: "[+] Progress: 250 reports sent (Category: Spam Distribution)...", class: "txt-green" },
        { text: "[*] Bypassing meta security firewall rules...", class: "txt-blue" },
        { text: "[CRITICAL] Target number flagged on master server queue!", class: "txt-red" },
        { text: "[+] Progress: 500+ reports submitted successfully.", class: "txt-green" },
        { text: "[*] Finalizing automated reporting script sequence...", class: "txt-blue" },
        { text: "[SUCCESS] WhatsApp report sending process fully completed.", class: "txt-green" },
        { text: "[✔] STATUS: Account flagged for review ban sequence.", class: "txt-yellow" },
        { text: "[!] OVERRIDE COMPLETE. LOGS CONCLUDED BY LEGEND M ALI.", class: "txt-red" }
    ];

    let lineCounter = 0;

    function renderLogs() {
        if (lineCounter < scriptSequence.length) {
            const lineData = scriptSequence[lineCounter];
            const p = document.createElement('p');
            p.className = `log-row ${lineData.class}`;
            p.innerText = lineData.text;
            consoleEl.appendChild(p);
            
            consoleEl.scrollTop = consoleEl.scrollHeight;
            
            lineCounter++;
            setTimeout(renderLogs, Math.random() * 600 + 300);
        }
    }

    renderLogs();
}
