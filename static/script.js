// ── TASKS ───────────────────────────────────────────────

var TASKS = {
    notes: [
        { v:'1', l:'Summary',          icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>' },
        { v:'2', l:'Explain',          icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
        { v:'3', l:'Quiz',             icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' },
        { v:'4', l:'Key Points',       icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
        { v:'5', l:'Viva Questions',   icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' }
    ],
    youtube: [
        { v:'1', l:'Video Summary',        icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>' },
        { v:'2', l:'Timestamp Breakdown', icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
        { v:'3', l:'Video Quiz',           icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' },
        { v:'4', l:'Video Key Points',    icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' },
        { v:'5', l:'Video Viva',           icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' }
    ]
};

// ── RENDER TASKS ────────────────────────────────────────

function renderTasks(set) {
    var list = document.getElementById('task-list');
    var sel  = document.getElementById('task-choice');
    list.innerHTML = '';
    sel.innerHTML  = '';

    TASKS[set].forEach(function(t, i) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'task-btn' + (i === 0 ? ' active' : '');
        btn.innerHTML = t.icon + '<span>' + t.l + '</span>';
        btn.onclick = function() {
            document.querySelectorAll('.task-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            sel.value = t.v;
        };
        list.appendChild(btn);

        var opt = document.createElement('option');
        opt.value = t.v;
        opt.textContent = t.l;
        sel.appendChild(opt);
    });

    sel.value = TASKS[set][0].v;
}

// ── SOURCE SWITCH ───────────────────────────────────────

function switchSource(src) {
    document.getElementById('panel-paste').style.display = src === 'paste'   ? '' : 'none';
    document.getElementById('panel-file').style.display  = src === 'file'    ? '' : 'none';
    document.getElementById('panel-yt').style.display    = src === 'youtube' ? '' : 'none';
    renderTasks(src === 'youtube' ? 'youtube' : 'notes');
}

// ── FILE SELECTION ──────────────────────────────────────

function onFileChange(input) {
    var nameEl = document.getElementById('file-name');
    var zone   = document.getElementById('file-zone');
    if (input.files && input.files[0]) {
        nameEl.textContent = input.files[0].name;
        zone.classList.add('selected');
    } else {
        nameEl.textContent = 'Click to select a file';
        zone.classList.remove('selected');
    }
}

// ── SIDEBAR TOGGLE ──────────────────────────────────────

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var tab     = document.getElementById('expand-tab');
    var open    = !sidebar.classList.contains('collapsed');
    sidebar.classList.toggle('collapsed', open);
    tab.style.display = open ? 'flex' : 'none';
}

// ── SUBMIT STATE ────────────────────────────────────────

function onSubmit() {
    document.getElementById('loading').style.display = 'flex';
    var btn  = document.getElementById('btn-gen');
    var lbl  = document.getElementById('btn-label');
    var icon = document.getElementById('btn-icon');
    var spin = document.getElementById('btn-spin');
    btn.disabled = true;
    lbl.textContent = 'Generating…';
    icon.classList.add('hidden');
    spin.classList.remove('hidden');
    var empty = document.querySelector('.empty-hint');
    if (empty) empty.style.display = 'none';
}

// ── COPY RESULT ─────────────────────────────────────────

function copyResult() {
    var body = document.getElementById('result-body');
    if (!body) return;
    navigator.clipboard.writeText(body.innerText || '').then(function() {
        var lbl = document.getElementById('copy-label');
        lbl.textContent = 'Copied';
        setTimeout(function() { lbl.textContent = 'Copy'; }, 2000);
    });
}

// ── INIT ────────────────────────────────────────────────

renderTasks('notes');

// Scroll to result on page load if present
var result = document.getElementById('result-body');
if (result) result.scrollIntoView({ behavior: 'smooth', block: 'start' });