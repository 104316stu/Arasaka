const bootSequence = [
    { type: 'banner', text: 'ARASAKA CORPORATION - SECURE TERMINAL' },
    { type: 'banner', text: 'Netrunner OS v4.19.0-ARASAKA #1 SMP PREEMPT_RT' },
    { type: 'banner', text: 'Built by Arasaka Systems Division — Tokyo, 2077' },
    { type: 'ok', text: '' },
    { type: 'starting', text: 'Loading ARASAKA Netrunner OS Kernel...' },
    { type: 'ok', text: ' Linux kernel 5.15.0-ARASAKA booted in 890ms' },
    { type: 'ok', text: ' Command line: BOOT_IMAGE=/vmlinuz-5.15.0-arasaka root=/dev/mapper/arasaka-root ro quiet splash' },
    { type: 'starting', text: 'Initializing cgroups v2 hierarchy...' },
    { type: 'ok', text: ' cgroup v2: memory, cpu, io, pids controllers active.' },
    { type: 'starting', text: 'Starting Early boot Randomness...' },
    { type: 'ok', text: ' Started Early boot Randomness.' },
    { type: 'ok', text: ' Entropy pool seeded: 512 bits collected from hardware RNG.' },
    { type: 'starting', text: 'Mounting proc filesystem...' },
    { type: 'ok', text: ' Mounted proc on /proc.' },
    { type: 'starting', text: 'Mounting sysfs filesystem...' },
    { type: 'ok', text: ' Mounted sysfs on /sys.' },
    { type: 'starting', text: 'Mounting devtmpfs on /dev...' },
    { type: 'ok', text: ' Mounted devtmpfs.' },
    { type: 'starting', text: 'Mounting cgroup API filesystem...' },
    { type: 'ok', text: ' Mounted cgroup API filesystem.' },
    { type: 'starting', text: 'Mounting tmpfs on /run...' },
    { type: 'ok', text: ' Mounted tmpfs on /run.' },
    { type: 'starting', text: 'Starting Load Kernel Modules...' },
    { type: 'ok', text: ' Loaded Kernel Module: arasaka_neural [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: cyberdeck_defense [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: neural_link_v3 [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: ice_blackwall_layer [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: braindance_codec [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: arasaka_drm [sig verified]' },
    { type: 'ok', text: ' Loaded Kernel Module: hid_neuralink [sig verified]' },
    { type: 'ok', text: ' Started Load Kernel Modules.' },
    { type: 'starting', text: 'Activating swap /dev/mapper/arasaka-swap...' },
    { type: 'ok', text: ' Activated swap /dev/mapper/arasaka-swap (32GiB).' },
    { type: 'starting', text: 'Starting Remount Root and Kernel File Systems...' },
    { type: 'ok', text: ' Remounted root filesystem read/write.' },
    { type: 'ok', text: ' Kernel filesystems remounted.' },
    { type: 'starting', text: 'Running fsck on /dev/mapper/arasaka-root...' },
    { type: 'ok', text: ' /dev/mapper/arasaka-root: clean, 487291/4096000 files, 3821044/16384000 blocks.' },
    { type: 'starting', text: 'Starting Create Static Device Nodes in /dev...' },
    { type: 'ok', text: ' Created Static Device Nodes in /dev.' },
    { type: 'starting', text: 'Starting Mounting Temporary Directories...' },
    { type: 'ok', text: ' Mounted /tmp (tmpfs, 16GiB limit).' },
    { type: 'ok', text: ' Mounted /var/tmp (tmpfs).' },
    { type: 'ok', text: ' Mounted Temporary Directories.' },
    { type: 'starting', text: 'Detecting hardware platform...' },
    { type: 'ok', text: ' Detected ARASAKA Secure Enclave v9 (x86_64).' },
    { type: 'ok', text: ' CPU: Intel Xeon Arasaka-Edition 64C/128T @ 5.4GHz' },
    { type: 'ok', text: ' RAM: 256GiB ECC DDR5-6400 [all banks verified]' },
    { type: 'ok', text: ' GPU: Arasaka Neural-Render Array [VRAM: 48GiB]' },
    { type: 'starting', text: 'Starting udev Kernel Device Manager...' },
    { type: 'ok', text: ' udev: reading rules from /etc/udev/rules.d/' },
    { type: 'ok', text: ' udev: 214 rules loaded.' },
    { type: 'ok', text: ' Started udev Kernel Device Manager.' },
    { type: 'starting', text: 'Coldplug hardware devices...' },
    { type: 'ok', text: ' /dev/sda: ARASAKA-VAULT-SSD 4.0TB [NVMe, encrypted]' },
    { type: 'ok', text: ' /dev/sdb: ARASAKA-ARCHIVE 16.0TB [NVMe, encrypted]' },
    { type: 'ok', text: ' /dev/neural0: Neural Interface Controller [active]' },
    { type: 'ok', text: ' /dev/cyberdeck0: Cyberdeck Interface v7 [active]' },
    { type: 'ok', text: ' /dev/braindance0: Braindance Recorder/Playback Unit [active]' },
    { type: 'ok', text: ' Coldplug complete: 47 devices enumerated.' },
    { type: 'starting', text: 'Starting LVM2 metadata daemon...' },
    { type: 'ok', text: ' Started LVM2 metadata daemon (lvmetad).' },
    { type: 'starting', text: 'Scanning for LVM2 Volumes...' },
    { type: 'ok', text: ' LVM2 Volume Group: arasaka-vg [active]' },
    { type: 'ok', text: ' LVM2 Volumes detected: corporate-data [12.4TiB]' },
    { type: 'ok', text: ' LVM2 Volumes detected: neural-archive [3.2TiB]' },
    { type: 'ok', text: ' LVM2 Volumes detected: blacksite-classified [2.0TiB, RESTRICTED]' },
    { type: 'ok', text: ' LVM2 Volumes detected: executive-vault [500GiB, EYES ONLY]' },
    { type: 'starting', text: 'Starting LVM2 monitoring...' },
    { type: 'ok', text: ' Started LVM2 PV polling daemon.' },
    { type: 'starting', text: 'Starting LUKS encrypted volume unlock...' },
    { type: 'ok', text: ' Unlocked arasaka-root via TPM2 attestation.' },
    { type: 'ok', text: ' Unlocked corporate-data via hardware key.' },
    { type: 'ok', text: ' Unlocked neural-archive via hardware key.' },
    { type: 'ok', text: ' blacksite-classified: awaiting executive biometric.' },
    { type: 'starting', text: 'Mounting /dev/mapper/arasaka-root...' },
    { type: 'ok', text: ' Mounted /dev/mapper/arasaka-root on /.' },
    { type: 'starting', text: 'Mounting /dev/mapper/corporate-data...' },
    { type: 'ok', text: ' Mounted /dev/mapper/corporate-data on /srv/corporate.' },
    { type: 'starting', text: 'Starting Cleanup of Temporary Directories...' },
    { type: 'ok', text: ' Cleaned /tmp.' },
    { type: 'ok', text: ' Cleaned /var/tmp.' },
    { type: 'ok', text: ' Started Cleanup of Temporary Directories.' },
    { type: 'starting', text: 'Starting Forward Password Requests to Plymouth...' },
    { type: 'ok', text: ' Forwarding Password Requests.' },
    { type: 'starting', text: 'Starting D-Bus System Message Bus...' },
    { type: 'ok', text: ' Started D-Bus System Message Bus.' },
    { type: 'ok', text: ' D-Bus socket: /run/dbus/system_bus_socket [active]' },
    { type: 'starting', text: 'Starting System Logging Service (rsyslog)...' },
    { type: 'ok', text: ' rsyslog: reading config /etc/rsyslog.conf' },
    { type: 'ok', text: ' rsyslog: log targets: /var/log/syslog, arasaka-logserver.corp' },
    { type: 'ok', text: ' Started System Logging Service.' },
    { type: 'starting', text: 'Starting Audit Daemon (auditd)...' },
    { type: 'ok', text: ' auditd: 312 rules loaded.' },
    { type: 'ok', text: ' auditd: logging to /var/log/audit/audit.log' },
    { type: 'ok', text: ' Started Audit Daemon.' },
    { type: 'starting', text: 'Starting LSB: cyberdeck-ice-protection...' },
    { type: 'ok', text: ' ICE layer 1: Passive trace countermeasures [active]' },
    { type: 'ok', text: ' ICE layer 2: Active intrusion response [armed]' },
    { type: 'ok', text: ' ICE layer 3: Blackwall interface [standby]' },
    { type: 'ok', text: ' Started cyberdeck-ice-protection.' },
    { type: 'starting', text: 'Starting LSB: neural-interface-calibration...' },
    { type: 'ok', text: ' Neural link latency: 0.4ms [optimal]' },
    { type: 'ok', text: ' Synaptic buffer: 2048MB allocated.' },
    { type: 'ok', text: ' Neural codec: Arasaka NeuroCom v9 [loaded]' },
    { type: 'ok', text: ' Started neural-interface-calibration.' },
    { type: 'starting', text: 'Starting LSB: arasaka-netrunner daemon...' },
    { type: 'ok', text: ' Netrunner daemon PID: 1042' },
    { type: 'ok', text: ' Netrunner sandbox: seccomp-bpf profile loaded.' },
    { type: 'ok', text: ' Started arasaka-netrunner service.' },
    { type: 'starting', text: 'Starting Network Manager...' },
    { type: 'ok', text: ' Interface eth0: 100GbE [UP, MTU 9000]' },
    { type: 'ok', text: ' Interface eth1: 100GbE [UP, MTU 9000, bonded]' },
    { type: 'ok', text: ' Interface neural-net0: Neural Mesh [UP]' },
    { type: 'ok', text: ' Connected to Arasaka secure cluster [TLS 1.3, ECDHE-AES256]' },
    { type: 'ok', text: ' DNS: arasaka-dns-01.corp, arasaka-dns-02.corp' },
    { type: 'ok', text: ' NTP: synchronized to arasaka-ntp.corp (offset: +0.0003s)' },
    { type: 'ok', text: ' Started Network Manager.' },
    { type: 'starting', text: 'Starting LSB: SSH server (openssh-daemon)...' },
    { type: 'ok', text: ' sshd: host key RSA SHA256:aR4s4k4N3tw0rkS3cur3 [loaded]' },
    { type: 'ok', text: ' sshd: host key ED25519 [loaded]' },
    { type: 'ok', text: ' sshd: listening on 0.0.0.0:22 and :::22' },
    { type: 'ok', text: ' Started SSH server.' },
    { type: 'starting', text: 'Starting LSB: biometric-authentication...' },
    { type: 'ok', text: ' Biometric subsystem: Arasaka BioAuth v12 [init]' },
    { type: 'ok', text: ' Genetic scan: sample collected...' },
    { type: 'ok', text: ' Genetic scan: verified [match confidence: 99.97%]' },
    { type: 'ok', text: ' Retinal scan: left eye verified.' },
    { type: 'ok', text: ' Retinal scan: right eye verified.' },
    { type: 'ok', text: ' Neural signature: verified [entropy: 4096-bit]' },
    { type: 'ok', text: ' Heartbeat signature: nominal.' },
    { type: 'ok', text: ' Threat assessment: CLEAR.' },
    { type: 'ok', text: ' Initiated biometric-authentication. Access level: EXECUTIVE.' },
    { type: 'starting', text: 'Unlocking LUKS volume: blacksite-classified...' },
    { type: 'ok', text: ' blacksite-classified: unlocked via executive biometric.' },
    { type: 'ok', text: ' Mounted /dev/mapper/blacksite-classified on /srv/blacksite.' },
    { type: 'starting', text: 'Starting firewall (nftables)...' },
    { type: 'ok', text: ' nftables: 1,204 rules loaded.' },
    { type: 'ok', text: ' nftables: default policy DROP [inet, ip, ip6]' },
    { type: 'ok', text: ' nftables: corporate allowlist applied.' },
    { type: 'ok', text: ' Started firewall.' },
    { type: 'starting', text: 'Starting intrusion detection (snort3)...' },
    { type: 'ok', text: ' snort3: 22,847 signatures loaded.' },
    { type: 'ok', text: ' snort3: monitoring eth0, eth1, neural-net0.' },
    { type: 'ok', text: ' Started snort3.' },
    { type: 'starting', text: 'Starting LSB: braindance-recorder service...' },
    { type: 'ok', text: ' BD recorder: codec Arasaka-H266 [loaded]' },
    { type: 'ok', text: ' BD recorder: storage target /srv/corporate/bd-archive [mounted]' },
    { type: 'ok', text: ' BD recorder: encryption AES-256-GCM [active]' },
    { type: 'ok', text: ' Recording devices initialized.' },
    { type: 'ok', text: ' Archive systems synchronized [last sync: 0.3s ago].' },
    { type: 'starting', text: 'Starting cron daemon...' },
    { type: 'ok', text: ' cron: 47 jobs scheduled.' },
    { type: 'ok', text: ' Started cron daemon.' },
    { type: 'starting', text: 'Starting Arasaka Telemetry Agent...' },
    { type: 'ok', text: ' Telemetry: endpoint telemetry.arasaka.corp [connected]' },
    { type: 'ok', text: ' Telemetry: session ID A7-2077-EX-00419 registered.' },
    { type: 'ok', text: ' Started Arasaka Telemetry Agent.' },
    { type: 'starting', text: 'Starting PAM authentication framework...' },
    { type: 'ok', text: ' PAM: modules loaded: pam_arasaka_bio, pam_neural, pam_exec.' },
    { type: 'ok', text: ' Started PAM authentication framework.' },
    { type: 'starting', text: 'Reached target basic environment...' },
    { type: 'ok', text: ' Reached target Basic System.' },
    { type: 'starting', text: 'Reached target multi-user system...' },
    { type: 'ok', text: ' Reached target Multi-User System.' },
    { type: 'starting', text: 'Reached target graphical interface...' },
    { type: 'ok', text: ' Reached target Graphical Interface.' },
    { type: 'ok', text: '' },
    { type: 'ok', text: ' System uptime: 0d 00:00:04' },
    { type: 'ok', text: ' Load average: 0.04 0.01 0.00' },
    { type: 'ok', text: ' Active services: 94 running, 0 failed.' },
    { type: 'ok', text: '' },
    { type: 'ok', text: 'ARASAKA systems all green.' },
    { type: 'ok', text: 'Welcome back, executive.' },
]

const terminal = document.getElementById('terminal')
let currentIndex = 0

function renderLine(lineData, index) {
    const lineEl = document.createElement('div')
    lineEl.className = 'boot-line'

    if (lineData.type === 'banner') {
        lineEl.innerHTML = `<span class="arasaka">${lineData.text}</span>`
    } else if (lineData.type === 'ok') {
        lineEl.innerHTML = `<span class="ok">[ OK ]</span><span>${lineData.text}</span>`
    } else if (lineData.type === 'done') {
        lineEl.innerHTML = `<span style="color:#22c55e;">${lineData.text}</span><span class="cursor"></span>`
    } else {
        lineEl.innerHTML = `<span style="width:48px;display:inline-block;"></span><span class="starting">Starting ${lineData.text}</span>`
    }

    terminal.appendChild(lineEl)
    terminal.scrollTop = terminal.scrollHeight
}

function animate() {
    if (currentIndex < bootSequence.length) {
        renderLine(bootSequence[currentIndex], currentIndex)

        currentIndex++


        const delay = bootSequence[currentIndex - 1].type === 'starting' ? 30 : 15

        
        setTimeout(animate, delay)
    } else {
        setTimeout(() => {
            window.location.href = './index.php'
        }, 1500)
    }
}

window.addEventListener('load', animate)