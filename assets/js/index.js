// ============== FLAGS ==============
        const FLAG_MAP = {
      // ===== AFC (9) =====
      'argentina': { code: 'ar', emoji: '🇦🇷' }, 'brazil': { code: 'br', emoji: '🇧🇷' },
      'canada': { code: 'ca', emoji: '🇨🇦' }, 'mexico': { code: 'mx', emoji: '🇲🇽' },
      'usa': { code: 'us', emoji: '🇺🇸' }, 'united states': { code: 'us', emoji: '🇺🇸' },
      'france': { code: 'fr', emoji: '🇫🇷' }, 'germany': { code: 'de', emoji: '🇩🇪' },
      'spain': { code: 'es', emoji: '🇪🇸' }, 'portugal': { code: 'pt', emoji: '🇵🇹' },
      'england': { code: 'gb-eng', emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, 'netherlands': { code: 'nl', emoji: '🇳🇱' },
      'belgium': { code: 'be', emoji: '🇧🇪' }, 'italy': { code: 'it', emoji: '🇮🇹' },
      'croatia': { code: 'hr', emoji: '🇭🇷' }, 'uruguay': { code: 'uy', emoji: '🇺🇾' },
      'colombia': { code: 'co', emoji: '🇨🇴' }, 'ecuador': { code: 'ec', emoji: '🇪🇨' },
      'chile': { code: 'cl', emoji: '🇨🇱' }, 'paraguay': { code: 'py', emoji: '🇵🇾' },
      'peru': { code: 'pe', emoji: '🇵🇪' }, 'bolivia': { code: 'bo', emoji: '🇧🇴' },
      'venezuela': { code: 've', emoji: '🇻🇪' },
      'japan': { code: 'jp', emoji: '🇯🇵' }, 'south korea': { code: 'kr', emoji: '🇰🇷' },
      'korea republic': { code: 'kr', emoji: '🇰🇷' }, 'australia': { code: 'au', emoji: '🇦🇺' },
      'iran': { code: 'ir', emoji: '🇮🇷' }, 'saudi arabia': { code: 'sa', emoji: '🇸🇦' },
      'qatar': { code: 'qa', emoji: '🇶🇦' }, 'morocco': { code: 'ma', emoji: '🇲🇦' },
      'senegal': { code: 'sn', emoji: '🇸🇳' }, 'tunisia': { code: 'tn', emoji: '🇹🇳' },
      'algeria': { code: 'dz', emoji: '🇩🇿' }, 'egypt': { code: 'eg', emoji: '🇪🇬' },
      'nigeria': { code: 'ng', emoji: '🇳🇬' }, 'cameroon': { code: 'cm', emoji: '🇨🇲' },
      'ghana': { code: 'gh', emoji: '🇬🇭' }, 'ivory coast': { code: 'ci', emoji: '🇨🇮' },
      "côte d'ivoire": { code: 'ci', emoji: '🇨🇮' }, 'costa rica': { code: 'cr', emoji: '🇨🇷' },
      'panama': { code: 'pa', emoji: '🇵🇦' }, 'honduras': { code: 'hn', emoji: '🇭🇳' },
      'jamaica': { code: 'jm', emoji: '🇯🇲' }, 'new zealand': { code: 'nz', emoji: '🇳🇿' },
      'ukraine': { code: 'ua', emoji: '🇺🇦' }, 'poland': { code: 'pl', emoji: '🇵🇱' },
      'wales': { code: 'gb-wls', emoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' }, 'scotland': { code: 'gb-sct', emoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
      'serbia': { code: 'rs', emoji: '🇷🇸' }, 'switzerland': { code: 'ch', emoji: '🇨🇭' },
      'denmark': { code: 'dk', emoji: '🇩🇰' }, 'sweden': { code: 'se', emoji: '🇸🇪' },
      'norway': { code: 'no', emoji: '🇳🇴' }, 'austria': { code: 'at', emoji: '🇦🇹' },
      'czech republic': { code: 'cz', emoji: '🇨🇿' }, 'czechia': { code: 'cz', emoji: '🇨🇿' },
      'hungary': { code: 'hu', emoji: '🇭🇺' }, 'romania': { code: 'ro', emoji: '🇷🇴' },
      'slovakia': { code: 'sk', emoji: '🇸🇰' }, 'slovenia': { code: 'si', emoji: '🇸🇮' },
      'bosnia and herzegovina': { code: 'ba', emoji: '🇧🇦' }, 'bosnia': { code: 'ba', emoji: '🇧🇦' },
      'northern ireland': { code: 'gb-nir', emoji: '🇬🇧' },
      'republic of ireland': { code: 'ie', emoji: '🇮🇪' }, 'ireland': { code: 'ie', emoji: '🇮🇪' },
      'finland': { code: 'fi', emoji: '🇫🇮' }, 'turkey': { code: 'tr', emoji: '🇹🇷' },
      'türkiye': { code: 'tr', emoji: '🇹🇷' }, 'turkiye': { code: 'tr', emoji: '🇹🇷' },
      'greece': { code: 'gr', emoji: '🇬🇷' }, 'russia': { code: 'ru', emoji: '🇷🇺' },
      'china': { code: 'cn', emoji: '🇨🇳' }, 'indonesia': { code: 'id', emoji: '🇮🇩' },
      'thailand': { code: 'th', emoji: '🇹🇭' }, 'uzbekistan': { code: 'uz', emoji: '🇺🇿' },
      'kyrgyzstan': { code: 'kg', emoji: '🇰🇬' }, 'turkmenistan': { code: 'tm', emoji: '🇹🇲' },
      'philippines': { code: 'ph', emoji: '🇵🇭' }, 'vietnam': { code: 'vn', emoji: '🇻🇳' },
      'malaysia': { code: 'my', emoji: '🇲🇾' }, 'singapore': { code: 'sg', emoji: '🇸🇬' },
      'bahrain': { code: 'bh', emoji: '🇧🇭' }, 'kuwait': { code: 'kw', emoji: '🇰🇼' },
      'lebanon': { code: 'lb', emoji: '🇱🇧' }, 'syria': { code: 'sy', emoji: '🇸🇾' },
      'oman': { code: 'om', emoji: '🇴🇲' }, 'emirates': { code: 'ae', emoji: '🇦🇪' },
      'united arab emirates': { code: 'ae', emoji: '🇦🇪' }, 'uae': { code: 'ae', emoji: '🇦🇪' },
      'south africa': { code: 'za', emoji: '🇿🇦' }, 'dr congo': { code: 'cd', emoji: '🇨🇩' },
      'democratic republic of congo': { code: 'cd', emoji: '🇨🇩' },
      'congo dr': { code: 'cd', emoji: '🇨🇩' }, 'mali': { code: 'ml', emoji: '🇲🇱' },
      'burkina faso': { code: 'bf', emoji: '🇧🇫' }, 'guinea': { code: 'gn', emoji: '🇬🇳' },
      'zambia': { code: 'zm', emoji: '🇿🇲' }, 'equatorial guinea': { code: 'gq', emoji: '🇬🇶' },
      'gabon': { code: 'ga', emoji: '🇬🇦' }, 'angola': { code: 'ao', emoji: '🇦🇴' },
      'tanzania': { code: 'tz', emoji: '🇹🇿' }, 'uganda': { code: 'ug', emoji: '🇺🇬' },
      'kenya': { code: 'ke', emoji: '🇰🇪' }, 'zimbabwe': { code: 'zw', emoji: '🇿🇼' },
      'namibia': { code: 'na', emoji: '🇳🇦' }, 'mauritania': { code: 'mr', emoji: '🇲🇷' },
      'libya': { code: 'ly', emoji: '🇱🇾' }, 'sudan': { code: 'sd', emoji: '🇸🇩' },
      'ethiopia': { code: 'et', emoji: '🇪🇹' }, 'india': { code: 'in', emoji: '🇮🇳' },
      'tajikistan': { code: 'tj', emoji: '🇹🇯' }, 'iraq': { code: 'iq', emoji: '🇮🇶' },
      'jordan': { code: 'jo', emoji: '🇯🇴' }, 'curaçao': { code: 'cw', emoji: '🇨🇼' },
      'curacao': { code: 'cw', emoji: '🇨🇼' }, 'haiti': { code: 'ht', emoji: '🇭🇹' },
      'cape verde': { code: 'cv', emoji: '🇨🇻' },
      'benin': { code: 'bj', emoji: '🇧🇯' }, 'rwanda': { code: 'rw', emoji: '🇷🇼' },
      'lesotho': { code: 'ls', emoji: '🇱🇸' }, 'eswatini': { code: 'sz', emoji: '🇸🇿' },
      'sierra leone': { code: 'sl', emoji: '🇸🇱' }, 'guinea-bissau': { code: 'gw', emoji: '🇬🇼' },
      'djibouti': { code: 'dj', emoji: '🇩🇯' }, 'togo': { code: 'tg', emoji: '🇹🇬' },
      'south sudan': { code: 'ss', emoji: '🇸🇸' }, 'liberia': { code: 'lr', emoji: '🇱🇷' },
      'madagascar': { code: 'mg', emoji: '🇲🇬' }, 'mozambique': { code: 'mz', emoji: '🇲🇿' },
      'malawi': { code: 'mw', emoji: '🇲🇼' }, 'botswana': { code: 'bw', emoji: '🇧🇼' },
      'comoros': { code: 'km', emoji: '🇰🇲' }, 'gambia': { code: 'gm', emoji: '🇬🇲' },
      'central african republic': { code: 'cf', emoji: '🇨🇫' }, 'chad': { code: 'td', emoji: '🇹🇩' },
      'congo': { code: 'cg', emoji: '🇨🇬' }, 'republic of the congo': { code: 'cg', emoji: '🇨🇬' },
      'sao tome and principe': { code: 'st', emoji: '🇸🇹' }, 'seychelles': { code: 'sc', emoji: '🇸🇨' },
      'mauritius': { code: 'mu', emoji: '🇲🇺' }, 'burundi': { code: 'bi', emoji: '🇧🇮' },
      'eritrea': { code: 'er', emoji: '🇪🇷' }, 'somalia': { code: 'so', emoji: '🇸🇴' },
      'fiji': { code: 'fj', emoji: '🇫🇯' }, 'tahiti': { code: 'pf', emoji: '🇵🇫' },
      'new caledonia': { code: 'nc', emoji: '🇳🇨' }, 'samoa': { code: 'ws', emoji: '🇼🇸' },
      'papua new guinea': { code: 'pg', emoji: '🇵🇬' }, 'solomon islands': { code: 'sb', emoji: '🇸🇧' },
      'vanuatu': { code: 'vu', emoji: '🇻🇺' },
      'guatemala': { code: 'gt', emoji: '🇬🇹' }, 'el salvador': { code: 'sv', emoji: '🇸🇻' },
      'trinidad and tobago': { code: 'tt', emoji: '🇹🇹' }, 'nicaragua': { code: 'ni', emoji: '🇳🇮' },
      'bermuda': { code: 'bm', emoji: '🇧🇲' }, 'suriname': { code: 'sr', emoji: '🇸🇷' },
      'iceland': { code: 'is', emoji: '🇮🇸' }, 'montenegro': { code: 'me', emoji: '🇲🇪' },
      'north macedonia': { code: 'mk', emoji: '🇲🇰' }, 'albania': { code: 'al', emoji: '🇦🇱' },
      'belarus': { code: 'by', emoji: '🇧🇾' }, 'estonia': { code: 'ee', emoji: '🇪🇪' },
      'latvia': { code: 'lv', emoji: '🇱🇻' }, 'lithuania': { code: 'lt', emoji: '🇱🇹' },
      'moldova': { code: 'md', emoji: '🇲🇩' }, 'kazakhstan': { code: 'kz', emoji: '🇰🇿' },
      'georgia': { code: 'ge', emoji: '🇬🇪' }, 'armenia': { code: 'am', emoji: '🇦🇲' },
      'azerbaijan': { code: 'az', emoji: '🇦🇿' }, 'israel': { code: 'il', emoji: '🇮🇱' },
      'cyprus': { code: 'cy', emoji: '🇨🇾' }, 'luxembourg': { code: 'lu', emoji: '🇱🇺' },
      'malta': { code: 'mt', emoji: '🇲🇹' }, 'andorra': { code: 'ad', emoji: '🇦🇩' },
      'liechtenstein': { code: 'li', emoji: '🇱🇮' }, 'san marino': { code: 'sm', emoji: '🇸🇲' },
      'gibraltar': { code: 'gi', emoji: '🇬🇮' }, 'faroe islands': { code: 'fo', emoji: '🇫🇴' },
      'kosovo': { code: 'xk', emoji: '🇽🇰' },
      // ===== TBD / Placeholder =====
      'tbd': { code: null, emoji: '❓' },
      'to be determined': { code: null, emoji: '❓' },
      'tbc': { code: null, emoji: '❓' },
      'to be confirmed': { code: null, emoji: '❓' }
    }

    function getFlag(name) {
    const key = (name || '').toLowerCase().trim();

    if (
        key === 'tbd' ||
        key === 'to be determined' ||
        key === 'tbc' ||
        key === 'to be confirmed'
    ) {
        return { emoji: '❓', img: null, isTbd: true };
    }

    const mapped = FLAG_MAP[key] || { code: null, emoji: '🏳️' };

    return {
        emoji: mapped.emoji,
        img: mapped.code
            ? `https://flagcdn.com/w40/${mapped.code}.png`
            : null,
        isTbd: false
    };
}

function flagHtml(name, size = 24) {
    const f = getFlag(name);
    const flagClass = size >= 32 ? 'team-flag-lg' : size >= 24 ? 'team-flag-sm' : 'team-flag-xs';

    if (f.isTbd) {
        return `
            <div
                class="${flagClass} flag-fallback shrink-0"
                style="display:inline-flex;font-size:${Math.max(10, size * 0.35)}px;"
                title="To be determined"
            >
                ?
            </div>
        `;
    }

    if (f.img) {
        // Request a higher-resolution image from flagcdn for crisp rectangular display
        const hiResImg = f.img.replace('/w40/', '/w80/');
        return `
            <img
                src="${hiResImg}"
                alt="${name}"
                class="${flagClass} shrink-0"
                onerror="this.style.display='none';this.nextElementSibling.style.display='inline-flex'"
            >
            <span
                class="${flagClass} flag-fallback shrink-0"
                style="display:none;font-size:${Math.max(10, size * 0.35)}px;"
                title="${name || 'Unknown'}"
            >
                ${f.emoji}
            </span>
        `;
    }

    return `<span class="text-xl" title="${name || 'Unknown'}">${f.emoji}</span>`;
}


// Generate initials from a name
function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ============== PROFILE AVATAR ==============
let pendingAvatarFile = null;

async function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Please upload an image file', 'error');
    input.value = '';
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    showToast('Image too large. Max 2MB.', 'error');
    input.value = '';
    return;
  }

  pendingAvatarFile = file;

  // Show preview immediately
  const previewUrl = URL.createObjectURL(file);
  const editImg = document.getElementById('profile-avatar-img');
  const editInitials = document.getElementById('profile-avatar-initials');
  if (editImg) {
    editImg.src = previewUrl;
    editImg.classList.remove('hidden');
  }
  if (editInitials) editInitials.classList.add('hidden');

  // Also update header preview
  const headerImg = document.getElementById('profile-avatar-img-header');
  const headerInitials = document.getElementById('profile-avatar-initials-header');
  if (headerImg) {
    headerImg.src = previewUrl;
    headerImg.classList.remove('hidden');
  }
  if (headerInitials) headerInitials.classList.add('hidden');

  showToast('Photo selected — save profile to upload', 'info');
}



async function uploadAvatar() {
  if (!pendingAvatarFile) return { url: null, error: null };

  const user = getUser();
  if (!user) return { url: null, error: new Error('Not authenticated') };

  try {
    const fileExt = pendingAvatarFile.name.split('.').pop().toLowerCase();
    const fileName = `avatars/${user.id}/${Date.now()}.${fileExt}`;

    // Check if bucket exists, if not try to create or use fallback
    const { error: uploadError } = await supabaseClient
      .storage
      .from('profile-photos')
      .upload(fileName, pendingAvatarFile, { 
        cacheControl: '3600', 
        upsert: true,
        contentType: pendingAvatarFile.type
      });

    if (uploadError) {
      console.error('Avatar upload error:', uploadError);
      // Try fallback: upload to public bucket if profile-photos doesn't exist
      if (uploadError.message && uploadError.message.includes('bucket')) {
        const { error: fallbackError } = await supabaseClient
          .storage
          .from('public')
          .upload(fileName, pendingAvatarFile, { 
            cacheControl: '3600', 
            upsert: true 
          });
        if (fallbackError) {
          return { url: null, error: fallbackError };
        }
        const { data: fallbackUrl } = supabaseClient
          .storage
          .from('public')
          .getPublicUrl(fileName);
        return { url: fallbackUrl?.publicUrl, error: null };
      }
      return { url: null, error: uploadError };
    }

    const { data: urlData } = supabaseClient
      .storage
      .from('profile-photos')
      .getPublicUrl(fileName);

    return { url: urlData?.publicUrl, error: null };
  } catch (e) {
    console.error('Avatar upload exception:', e);
    return { url: null, error: e };
  }
}

function updateAvatarDisplay(url, name) {
  // Update header avatar
  const headerImg = document.getElementById('profile-avatar-img-header');
  const headerInitials = document.getElementById('profile-avatar-initials-header');
  const headerAvatar = document.getElementById('profile-avatar');

  if (url && headerImg) {
    headerImg.src = url;
    headerImg.classList.remove('hidden');
    if (headerInitials) headerInitials.classList.add('hidden');
    if (headerAvatar) headerAvatar.classList.remove('bg-gradient-to-br');
  } else if (headerInitials && name) {
    headerInitials.textContent = getInitials(name);
    headerInitials.classList.remove('hidden');
    if (headerImg) headerImg.classList.add('hidden');
  }

  // Update edit panel avatar
  const editImg = document.getElementById('profile-avatar-img');
  const editInitials = document.getElementById('profile-avatar-initials');

  if (url && editImg) {
    editImg.src = url;
    editImg.classList.remove('hidden');
    if (editInitials) editInitials.classList.add('hidden');
  } else if (editInitials && name) {
    editInitials.textContent = getInitials(name);
    editInitials.classList.remove('hidden');
    if (editImg) editImg.classList.add('hidden');
  }
}

// Update leaderboard avatar to show profile picture if available
function getAvatarHtml(name, avatarUrl, rank, size = 32) {
  const initials = getInitials(name);
  const medalClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';

  if (avatarUrl) {
    return `<div class="lb-avatar ${medalClass}" style="width:${size}px;height:${size}px;padding:0;overflow:hidden;">
      <img src="${avatarUrl}" alt="${name}" class="w-full h-full object-cover" onerror="this.style.display='none';this.parentElement.textContent='${initials}'">
    </div>`;
  }
  return `<div class="lb-avatar ${medalClass}">${initials}</div>`;
}


    // ============== PWA ==============
    let deferredPrompt = null
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault(); deferredPrompt = e
      if (!localStorage.getItem('install-dismissed')) {
        setTimeout(() => document.getElementById('install-banner').classList.remove('hidden'), 2000)
      }
    })
    async function installPWA() {
      if (!deferredPrompt) { showToast('Use your browser menu → Add to Home Screen', 'info'); return }
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') { showToast('Installed!', 'success'); document.getElementById('install-banner').classList.add('hidden') }
      deferredPrompt = null
    }
    function dismissInstall() { document.getElementById('install-banner').classList.add('hidden'); localStorage.setItem('install-dismissed', 'true') }
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {})

    // ============== TOAST ==============
    function showToast(message, type = 'success') {
      const container = document.getElementById('toast-container')
      const toast = document.createElement('div')
      const icons = {
        success: '✓', error: '✕', info: 'i', warning: '!',
        payment: '$', member: '👤', fixture: '⚽', result: '🏁', general: '🔔'
      }
      const colors = {
        success: 'bg-brand-900', error: 'bg-red-600', info: 'bg-ink-900', warning: 'bg-amber-600',
        payment: 'bg-emerald-600', member: 'bg-blue-600', fixture: 'bg-violet-600', result: 'bg-orange-600', general: 'bg-slate-700'
      }
      const icon = icons[type] || icons.general
      const color = colors[type] || colors.general
      toast.className = `toast-enter ${color} text-white px-5 py-3.5 rounded-2xl shadow-lifted flex items-center gap-3 text-sm font-medium pointer-events-auto max-w-sm w-full`
      toast.innerHTML = `<span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0">${icon}</span><span class="flex-1">${message}</span>`
      container.appendChild(toast)
      requestAnimationFrame(() => { toast.classList.remove('toast-enter'); toast.classList.add('toast-shown') })
      setTimeout(() => { toast.classList.remove('toast-shown'); toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 280) }, 2800)
    }
    

    // ============== MODAL ==============
    function showModal({ icon, title, message, actions }) {
      const overlay = document.getElementById('modal-overlay')
      const panel = document.getElementById('modal-content')
      document.getElementById('modal-icon').textContent = icon
      document.getElementById('modal-title').textContent = title
      document.getElementById('modal-message').textContent = message
      document.getElementById('modal-actions').innerHTML = actions.map(b => `<button onclick="${b.onclick}" class="flex-1 py-4 rounded-2xl font-semibold text-sm tap ${b.class}">${b.text}</button>`).join('')
      overlay.classList.remove('hidden')
      requestAnimationFrame(() => panel.classList.add('shown'))
    }
    function hideModal() {
      const overlay = document.getElementById('modal-overlay')
      const panel = document.getElementById('modal-content')
      panel.classList.remove('shown')
      setTimeout(() => overlay.classList.add('hidden'), 320)
    }
    document.getElementById('modal-overlay').addEventListener('click', (e) => { if (e.target.id === 'modal-overlay') hideModal() })

    function showRulesSheet() {
  const overlay = document.getElementById('rules-overlay')
  const panel = document.getElementById('rules-panel')
  overlay.classList.remove('hidden')
  requestAnimationFrame(() => panel.classList.add('shown'))
  // Inject live values (entry fee, prize split, organizer fee) from prize_settings.
  // Defaults render in the HTML so the sheet is still readable if the fetch fails.
  hydrateRulesSheet()
}

async function hydrateRulesSheet() {
  if (typeof getPrizeSettings !== 'function') return
  try {
    const { data } = await getPrizeSettings()
    if (!data) return

    const currency = data.currency || 'Nu.'
    const fee = Number(data.entry_fee != null ? data.entry_fee : 500)
    const split1 = Number(data.split_1st != null ? data.split_1st : 50)
    const split2 = Number(data.split_2nd != null ? data.split_2nd : 30)
    const split3 = Number(data.split_3rd != null ? data.split_3rd : 20)
    const houseFee = Number(data.house_fee_pct || 0)
    const houseFeeNote = data.house_fee_note || 'Organizing & hosting'

    // Entry fee
    const feeEl = document.getElementById('rules-entry-fee')
    if (feeEl) feeEl.textContent = `${currency} ${fee.toLocaleString()}`

    // Prize splits
    const e1 = document.getElementById('rules-prize-1st')
    const e2 = document.getElementById('rules-prize-2nd')
    const e3 = document.getElementById('rules-prize-3rd')
    if (e1) e1.textContent = `${split1}% of pool`
    if (e2) e2.textContent = `${split2}% of pool`
    if (e3) e3.textContent = `${split3}% of pool`

    // Intro line + organizer fee disclosure
    const intro = document.getElementById('rules-prize-intro')
    const feeNote = document.getElementById('rules-prize-fee-note')
    if (houseFee > 0) {
      if (intro) intro.innerHTML = `After a <b>${houseFee}% organizer fee</b> (${houseFeeNote.toLowerCase()}), the remaining pool is split among the top 3 finishers on the final leaderboard:`
      if (feeNote) {
        feeNote.textContent = `Example: on a Nu. 10,000 pool, organizer keeps Nu. ${(10000 * houseFee / 100).toLocaleString()}, the rest is split ${split1}/${split2}/${split3}.`
        feeNote.classList.remove('hidden')
      }
    } else {
      if (intro) intro.textContent = 'Total pool is split among the top 3 finishers on the final leaderboard:'
      if (feeNote) feeNote.classList.add('hidden')
    }
  } catch (e) {
    console.warn('[rules] could not hydrate prize settings, showing defaults:', e)
  }
}

function hideRulesSheet() {
  const overlay = document.getElementById('rules-overlay')
  const panel = document.getElementById('rules-panel')
  panel.classList.remove('shown')
  setTimeout(() => overlay.classList.add('hidden'), 320)
}

document.getElementById('rules-overlay').addEventListener('click', e => {
  if (e.target.id === 'rules-overlay') hideRulesSheet()
})

    // ============== AUTH UI ==============
let authMode = 'login' // 'login' | 'signup'

function togglePassword() {
  const input = document.getElementById('password')
  document.getElementById('eye-icon').classList.toggle('hidden')
  document.getElementById('eye-slash-icon').classList.toggle('hidden')
  input.type = input.type === 'password' ? 'text' : 'password'
}

function toggleConfirmPassword() {
  const input = document.getElementById('confirm-password')
  document.getElementById('confirm-eye-icon').classList.toggle('hidden')
  document.getElementById('confirm-eye-slash-icon').classList.toggle('hidden')
  input.type = input.type === 'password' ? 'text' : 'password'
}

function loadRememberedEmail() {
  // Always start in login mode — the blur handler will switch to signup
  // if the number doesn't exist. This prevents the signup UI from showing
  // for existing users when the RPC check fails or is slow.
  switchToLoginUI()

  const r = localStorage.getItem('remembered-whatsapp')
  if (r) {
    document.getElementById('whatsapp').value = r
    document.getElementById('remember-me').checked = true
    // Trigger the existence check for pre-filled numbers
    handleWhatsappBlur()
  }
}

function saveRememberMe(whatsapp, checked) {
  if (checked) localStorage.setItem('remembered-whatsapp', whatsapp)
  else localStorage.removeItem('remembered-whatsapp')
}

// Check if WhatsApp number is already registered
// ============== WHATSAPP VALIDATION ==============
// Accept any international WhatsApp number. Users must include the country
// code. E.164 allows up to 15 digits; minimum 7 covers the shortest valid
// national numbering plans.
function isValidLocalWhatsapp(num) {
    const clean = num.replace(/\D/g, '')
    return clean.length >= 7 && clean.length <= 15
}

function isEligibleForSignup(num) {
  return isValidLocalWhatsapp(num)
}

// ========== MANUAL AUTH MODE TOGGLE ==========

function setAuthMode(mode) {
  const nameWrap = document.getElementById('name-wrap')
  const confirmWrap = document.getElementById('confirm-password-wrap')
  const nameInput = document.getElementById('name')
  const confirmInput = document.getElementById('confirm-password')
  const submitBtn = document.getElementById('auth-submit-btn')
  const subtitle = document.getElementById('auth-subtitle')

  if (mode === 'login') {
    nameWrap.classList.add('hidden')
    confirmWrap.classList.add('hidden')
    nameInput.required = false
    confirmInput.required = false

    submitBtn.querySelector('span').textContent = 'Enter League'
    if (subtitle) subtitle.textContent = 'Enter your WhatsApp number and password to play.'

    authMode = 'login'
  } else {
    nameWrap.classList.remove('hidden')
    confirmWrap.classList.remove('hidden')
    nameInput.required = true
    confirmInput.required = true

    submitBtn.querySelector('span').textContent = 'Create Account'
    if (subtitle) subtitle.textContent = 'Fill in your details to join the league.'

    authMode = 'signup'
  }
}

function switchToLoginUI() { setAuthMode('login') }
function switchToSignupUI(msg) { 
  setAuthMode('signup') 
  if (msg && document.getElementById('auth-subtitle')) {
    document.getElementById('auth-subtitle').textContent = msg
  }
}

// Wire up blur detection

// Restore remembered WhatsApp number (if user previously checked "Remember me")

// Toggle between login and signup modes (replaces the old button toggle)
function toggleAuthMode() {
  if (authMode === 'login') {
    const whatsapp = document.getElementById('whatsapp').value.trim()
    if (whatsapp && !isEligibleForSignup(whatsapp)) {
      showToast('Enter a valid WhatsApp number including country code.', 'error')
      return
    }
    setAuthMode('signup')
    document.getElementById('auth-mode-toggle-link').textContent = '← Already have an account? Sign in'
    // Focus on name field if empty
    const nameInput = document.getElementById('name')
    if (nameInput && !nameInput.value) {
      setTimeout(() => nameInput.focus(), 100)
    }
  } else {
    setAuthMode('login')
    document.getElementById('auth-mode-toggle-link').textContent = 'New here? Create account →'
  }
}

// Auto-detect mode on WhatsApp blur: check if number looks like it could be new
async function handleWhatsappBlur() {
  const whatsapp = document.getElementById('whatsapp').value.trim()
  if (!whatsapp || !isValidLocalWhatsapp(whatsapp)) return

  // If already in signup mode, don't switch back
  if (authMode === 'signup') return

  // Check if user exists by trying a lightweight query
  // We use the auth RPC or just check if the number format suggests signup
  // For now, we keep it simple: valid format stays in login mode until user toggles
  // The toggle link is the primary way to switch
}

// Wire up blur detection
document.getElementById('whatsapp')?.addEventListener('blur', handleWhatsappBlur)


// ============== SMOOTH SCREEN TRANSITIONS ==============
// Adds a spinner + progressive status label to the auth button while
// we preload data, so the user sees clear progress instead of a
// "frozen" button.
let _authLoadingTimers = []
function setAuthButtonLoading(loading, initialLabel) {
  const btn = document.getElementById('auth-submit-btn')
  if (!btn) return
  // Always clear any pending label timers from a previous load
  _authLoadingTimers.forEach(t => clearTimeout(t))
  _authLoadingTimers = []

  if (loading) {
    btn.disabled = true
    btn.classList.add('auth-btn-loading')
    // Build spinner + label fresh (remove any leftover)
    btn.querySelectorAll('.auth-spinner, .auth-loading-label').forEach(n => n.remove())
    const spinner = document.createElement('span')
    spinner.className = 'auth-spinner'
    const label = document.createElement('span')
    label.className = 'auth-loading-label'
    label.textContent = initialLabel || 'Signing in…'
    btn.appendChild(spinner)
    btn.appendChild(label)
    // Progressive status — gives the user a sense that work is happening
    // even on slow connections.
    _authLoadingTimers.push(setTimeout(() => {
      if (label.isConnected) label.textContent = 'Loading your league…'
    }, 600))
    _authLoadingTimers.push(setTimeout(() => {
      if (label.isConnected) label.textContent = 'Almost there…'
    }, 1800))
  } else {
    btn.disabled = false
    btn.classList.remove('auth-btn-loading')
    btn.querySelectorAll('.auth-spinner, .auth-loading-label').forEach(n => n.remove())
  }
}

// Wait two animation frames so the browser has actually committed
// the previous style change before we start the next one. Without this,
// adding `screen-fading-in` and removing it in the same tick causes the
// transition to be skipped.
function nextFrame() {
  return new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))
}

// Crossfade from one screen element to another. The "to" element is
// mounted invisibly first, given a frame to lay out, then faded in
// while the "from" element fades out.
async function crossfadeScreens(fromEl, toEl) {
  if (!toEl) return
  // Prepare destination: visible in the DOM but transparent.
  toEl.classList.remove('hidden')
  toEl.classList.add('screen-fading-in')
  await nextFrame()
  // Trigger both fades together.
  toEl.classList.remove('screen-fading-in')
  if (fromEl) fromEl.classList.add('screen-fading-out')
  // Wait for the fade to finish, then fully detach the old screen.
  await new Promise(r => setTimeout(r, 400))
  if (fromEl) {
    fromEl.classList.add('hidden')
    fromEl.classList.remove('screen-fading-out')
  }
}

// Form submission
document.getElementById('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const whatsapp = document.getElementById('whatsapp').value.trim()
  const password = document.getElementById('password').value
  const remember = document.getElementById('remember-me').checked
  const name = document.getElementById('name').value.trim()
  const confirmPassword = document.getElementById('confirm-password').value

  const clean = whatsapp.replace(/\D/g, '')
  if (clean.length < 7 || clean.length > 15) {
    showToast('Enter a valid WhatsApp number with country code (7–15 digits)', 'error')
    return
  }

  setAuthButtonLoading(true, authMode === 'login' ? 'Signing in…' : 'Creating account…')

  if (authMode === 'signup') {
    if (!name) {
      showToast('Please enter your name', 'error')
      setAuthButtonLoading(false)
      return
    }
    if (password !== confirmPassword) {
      showToast('Passwords do not match', 'error')
      setAuthButtonLoading(false)
      return
    }
    if (password.length < 6) {
      showToast('Password must be at least 6 characters', 'error')
      setAuthButtonLoading(false)
      return
    }

    const { error } = await signUpUser(name, whatsapp, password)
    if (error) {
      if (error.message.includes('already registered') || error.message.includes('already exists')) {
        showToast('Account already exists. Switch to Sign In.', 'info')
        setAuthMode('login')
      } else {
        showToast(error.message, 'error')
      }
      setAuthButtonLoading(false)
      return
    }
  } else {
    const { error } = await signInUser(whatsapp, password)
    if (error) {
      const msg = (error.message || '').toLowerCase()
      if (msg.includes('invalid login credentials') || msg.includes('invalid_credentials')) {
        showToast('Wrong password. Try again.', 'error')
      } else if (msg.includes('user not found') || msg.includes('not found')) {
        showToast('No account found. Tap "New here?" to create one.', 'info')
      } else {
        showToast(error.message, 'error')
      }
      setAuthButtonLoading(false)
      return
    }
  }

  saveRememberMe(whatsapp, remember)
  try {
    await showApp()
  } finally {
    setAuthButtonLoading(false)
  }
})

    function confirmLogout() {
      showModal({
        icon: '👋', title: 'Log out?', message: 'You\'ll need to sign in again next time.',
        actions: [
          { text: 'Cancel', onclick: 'hideModal()', class: 'bg-paper border border-paper-border text-ink-700' },
          { text: 'Log out', onclick: 'beginLogout()', class: 'bg-red-600 text-white' }
        ]
      })
    }

    // Starts the logout fade IMMEDIATELY on tap, in parallel with the
    // modal close animation. This is what makes logout feel snappy
    // instead of "tap → modal slides down → THEN something happens."
    function beginLogout() {
      hideModal()
      // Kick the fade on the next frame so the modal close animation
      // doesn't interrupt the app-shell transition.
      requestAnimationFrame(() => { if (typeof signOut === 'function') signOut() })
    }

    // Used by the "Payment status revoked" modal. Named helper avoids putting
    // quotes inside an inline onclick string (which would close the attribute).
    function beginRevokeSignOut() {
      hideModal()
      requestAnimationFrame(() => { if (typeof signOut === 'function') signOut() })
    }

    async function handleSaveProfile() {
      const updates = {
        name: document.getElementById('profile-name').value,
        department: document.getElementById('profile-dept').value,
        phone: document.getElementById('profile-phone').value
      }

      let avatarUrl = null;

      // Upload avatar if pending
      if (pendingAvatarFile) {
        const { url, error: avatarError } = await uploadAvatar();
        if (avatarError) {
          showToast('Photo upload failed: ' + (avatarError.message || 'Unknown error'), 'error');
          console.error('Avatar upload failed:', avatarError);
          pendingAvatarFile = null;
        } else if (url) {
          avatarUrl = url;
          updates.avatar_url = url;
          pendingAvatarFile = null;
          showToast('Photo uploaded!', 'success');
        }
      }

      const { error } = await updateProfile(updates)
      if (error) {
        showToast('Could not save: ' + (error.message || 'Unknown error'), 'error');
        console.error('Profile save error:', error);
      }
      else { 
        showToast('Profile saved', 'success'); 
        document.getElementById('user-name').textContent = updates.name || 'Player';
        // Refresh avatar display with new data
        updateAvatarDisplay(avatarUrl || getProfile()?.avatar_url, updates.name);
        // Refresh profile cards to show new avatar everywhere
        await updateProfileCards();
      }
    }

    // ============== PAYMENT GATE ==============
    let pendingPaymentFile = null

function showPaymentGate() {
  console.log('[gate] enter')
  try {
    previewMode = false;
    
    // Hide the entire app shell
    const shell = document.getElementById('app-shell')
    if (shell) {
      shell.classList.add('hidden')
      shell.classList.remove('screen-preloading')
      shell.classList.remove('screen-fading-in')
      shell.style.opacity = ''
      shell.style.visibility = ''
      shell.style.position = ''
    }
    
    const gate = document.getElementById('payment-gate')
    if (!gate) { console.error('[gate] #payment-gate NOT FOUND'); return }

    // Show payment gate - must be flex to display properly
    gate.classList.remove('hidden')
    gate.style.display = 'flex'
    
    // Ensure gate has proper layout classes
    gate.classList.add('flex-col')

    // Update username in payment gate header
    const pgProfile = getProfile()
    const pgUserNameEl = document.getElementById('payment-gate-user-name')
    if (pgUserNameEl && pgProfile) {
      pgUserNameEl.textContent = pgProfile.name || 'Player'
    }
    
    loadGateFee()
    const profile = pgProfile || getProfile()
    const pf = document.getElementById('payment-form-content')
    const ps = document.getElementById('pending-state')
    if (profile?.payment_proof_url || profile?.payment_status === 'pending') {
      pf && pf.classList.add('hidden')
      ps && ps.classList.remove('hidden')
    } else {
      pf && pf.classList.remove('hidden')
      ps && ps.classList.add('hidden')
    }
    setupPaymentRealtime()
    
  } catch (e) {
    console.log({
  gateExists: !!gate,
  gateDisplay: getComputedStyle(gate).display,
  gateVisible: getComputedStyle(gate).visibility,
  gateOpacity: getComputedStyle(gate).opacity,
  gateParent: gate.parentElement?.id
})
  }
}

        function setupPaymentRealtime() {
      const user = getUser()
      if (!user) return

      // FIX: Prevent duplicate channels
      if (window._paymentChannel) {
        try { supabaseClient.removeChannel(window._paymentChannel) } catch (_) {}
      }

      window._paymentChannel = supabaseClient.channel('payment-status-' + user.id)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        }, async (payload) => {
          if (payload.new?.fee_paid === true && payload.old?.fee_paid !== true) {
            // Keep cached profile in sync so later revoke detection works
            const cachedV = (typeof getProfile === 'function') ? getProfile() : null
            if (cachedV) cachedV.fee_paid = true
            showToast('Payment verified! Welcome aboard.', 'success')
            showNormalApp().then(() => switchTab('home'))
          }
          if (payload.new?.fee_paid === false && payload.old?.fee_paid === true) {
            // Admin revoked this user's paid status — keep cached profile in sync,
            // show a blocking modal, and sign them out so they can't keep playing.
            const cached = (typeof getProfile === 'function') ? getProfile() : null
            if (cached) cached.fee_paid = false
            showModal({
              icon: '🔒',
              title: 'Payment status revoked',
              message: 'An admin has marked your entry fee as unpaid. You will be signed out. Please contact the admin if this is a mistake.',
              actions: [
                { text: 'OK', onclick: 'beginRevokeSignOut()', class: 'bg-red-600 text-white' }
              ]
            })
          }
          if (payload.new?.private_leagues_access === true && payload.old?.private_leagues_access !== true) {
            // Update cached profile so hasLeagueAccess() returns true on next render
            const cached = (typeof getProfile === 'function') ? getProfile() : null
            if (cached) cached.private_leagues_access = true
            // Defensive: force fresh DB read in case getProfile() returns a fresh copy each call
            try {
              const { data: fresh } = await supabaseClient
                .from('profiles').select('*').eq('id', user.id).single()
              if (fresh && cached) Object.assign(cached, fresh)
            } catch (e) { /* ignore */ }
            showToast('🎉 Private league access granted by admin!', 'success')
            if (typeof loadMyLeagues === 'function') loadMyLeagues()
          }
          if (payload.new?.private_leagues_access === false && payload.old?.private_leagues_access === true) {
            const cached = (typeof getProfile === 'function') ? getProfile() : null
            if (cached) cached.private_leagues_access = false
            try {
              const { data: fresh } = await supabaseClient
                .from('profiles').select('*').eq('id', user.id).single()
              if (fresh && cached) Object.assign(cached, fresh)
            } catch (e) { /* ignore */ }
            showToast('Private league access has been revoked', 'info')
            if (typeof enforceLeagueAccessLockout === 'function') enforceLeagueAccessLockout('revoked')
            if (typeof loadMyLeagues === 'function') loadMyLeagues()
          }
        })
        .subscribe()
    }

    async function showNormalApp() {
  previewMode = false;

  // Hide payment gate
  const gate = document.getElementById('payment-gate')
  if (gate) {
    gate.classList.add('hidden')
    gate.style.display = ''
    gate.classList.remove('flex')
  }

  // Show app shell
  const shell = document.getElementById('app-shell')
  shell.classList.remove('hidden')

  document.getElementById('app-main').classList.remove('hidden')
  document.getElementById('app-nav').classList.remove('hidden')

  const profile = getProfile()
  document.getElementById('profile-name').value = profile?.name || ''
  document.getElementById('profile-dept').value = profile?.department || ''
  document.getElementById('profile-phone').value = profile?.phone || ''
  if (isAdmin()) {
    document.getElementById('admin-link').classList.remove('hidden')
    const pushTestCard = document.getElementById('admin-push-test-card')
    if (pushTestCard) pushTestCard.classList.remove('hidden')
  }

  // Update profile cards
  await updateProfileCards()

  // Seed the prediction_results cache before loading home/fixtures so that
  // the "+N pts" badges and recent-results pills render correct values on
  // first paint instead of zeros. (Bug 3 expanded)
  await refreshMyResultsCache().catch(e => console.error('refreshMyResultsCache', e))

  // Social caches: needs `fixtures` to be loaded, so do this AFTER loadFixtures
  // resolves below. We just kick off the first refresh in the background here.

  // Load all home-screen data IN PARALLEL so the user doesn't wait for
  // sequential network round-trips. We wrap each call in catch() so one
  // slow/failing source can't block the rest of the home from rendering.
  await Promise.all([
    Promise.resolve().then(() => loadFixtures()).catch(e => console.error('loadFixtures', e)),
    Promise.resolve().then(() => loadLeaderboard()).catch(e => console.error('loadLeaderboard', e)),
    Promise.resolve().then(() => loadHome()).catch(e => console.error('loadHome', e)),
  ])

  // Social caches (Hot Takes + Match Preview) — `fixtures` must be populated first.
  // We refresh, then re-render the parts that depend on them.
  await refreshSocialCaches().catch(e => console.error('refreshSocialCaches', e))
  try { loadFixtures(); loadHome() } catch (e) { /* re-render to surface the new data */ }

  renderBadges()
  startCountdownTicker()
  setupRealtime()
}async function loadGateFee() {
      try {
        let fee = 500
        let currency = 'Nu.'
        if (typeof getPrizeSettings === 'function') {
          const { data } = await getPrizeSettings()
          if (data?.entry_fee) fee = data.entry_fee
          if (data?.currency) currency = data.currency
        }
        document.getElementById('gate-fee-amount').textContent = `${currency}${Number(fee).toLocaleString()}`
      } catch (e) {
        console.error('loadGateFee error', e)
      }
    }

    function handlePaymentFile(input) {
      const file = input.files[0]
      if (!file) return
      if (!file.type.startsWith('image/')) {
        showToast('Please upload an image file', 'error')
        input.value = ''
        return
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast('File too large. Max 5MB.', 'error')
        input.value = ''
        return
      }
      pendingPaymentFile = file
      const preview = document.getElementById('upload-preview')
      const placeholder = document.getElementById('upload-placeholder')
      preview.src = URL.createObjectURL(file)
      preview.classList.remove('hidden')
      placeholder.classList.add('hidden')
      document.getElementById('upload-clear').classList.remove('hidden')
    }

    function clearPaymentFile(e) {
      if (e) e.preventDefault()
      pendingPaymentFile = null
      document.getElementById('payment-screenshot').value = ''
      const preview = document.getElementById('upload-preview')
      preview.src = ''
      preview.classList.add('hidden')
      document.getElementById('upload-placeholder').classList.remove('hidden')
      document.getElementById('upload-clear').classList.add('hidden')
    }

    async function submitPaymentProof() {
      if (!pendingPaymentFile) {
        showToast('Please select a screenshot first', 'warning')
        return
      }
      const btn = document.getElementById('submit-payment-btn')
      const originalText = btn.textContent
      btn.disabled = true
      btn.textContent = 'Uploading...'

      try {
        const user = getUser()
        if (!user) throw new Error('Not authenticated')

        const fileExt = pendingPaymentFile.name.split('.').pop()
        const fileName = `${user.id}/${Date.now()}.${fileExt}`

        const { error: uploadError } = await supabaseClient
          .storage
          .from('payment-proofs')
          .upload(fileName, pendingPaymentFile, { cacheControl: '3600', upsert: false })

        if (uploadError) {
          console.error('Storage upload error:', uploadError)
          showToast('Upload failed: ' + uploadError.message, 'error')
          btn.disabled = false
          btn.textContent = originalText
          return
        }

        const { data: urlData } = supabaseClient
          .storage
          .from('payment-proofs')
          .getPublicUrl(fileName)

        const publicUrl = urlData?.publicUrl

        // Try updating profile with both fields; fallback to just URL if columns are missing
        let { error: updateError } = await supabaseClient
          .from('profiles')
          .update({ payment_proof_url: publicUrl, payment_status: 'pending' })
          .eq('id', user.id)

        if (updateError) {
          console.warn('Profile update with payment_status failed, trying URL only:', updateError)
          await supabaseClient.from('profiles').update({ payment_proof_url: publicUrl }).eq('id', user.id)
        }

                showToast('Payment proof submitted!', 'success')
        document.getElementById('payment-form-content').classList.add('hidden')
        document.getElementById('pending-state').classList.remove('hidden')
      } catch (e) {
        console.error(e)
        showToast('Something went wrong', 'error')
        btn.disabled = false
        btn.textContent = originalText
      }
    }

    async function checkPaymentStatus() {
      const user = getUser()
      if (!user) return
      const { data, error } = await supabaseClient
        .from('profiles')
        .select('fee_paid, payment_proof_url, payment_status')
        .eq('id', user.id)
        .single()
      if (error) {
        showToast('Could not check status', 'error')
        return
      }
      if (data?.fee_paid) {
        showToast('Payment verified! Welcome aboard.', 'success')
        await showNormalApp()
        switchTab('home')
      } else {
        showToast('Still pending admin verification.', 'info')
      }
    }

    // ============== STATE ==============
let fixtures = []
let predictions = []
let pendingPredictions = {}

/* ===== NEW FEATURES STATE =====
 *
 * REQUIRED DB CHANGE for prediction lock timestamp (Feature 1):
 *   ALTER TABLE predictions ADD COLUMN submitted_at TIMESTAMPTZ DEFAULT NOW();
 *
 * The code below writes `submitted_at` after each savePrediction(). If the
 * column doesn't exist, the update will fail silently and the rest of the
 * app keeps working.
 */
let previewMode = false                  // true when browsing as a guest
let countdownTickerId = null             // live countdown interval id
let prizeDashExpanded = false            // prize dashboard breakdown open/closed
const BADGES = [
  { id: 'champion',    icon: '👑', name: 'Champion',      desc: '#1 on the board' },
  { id: 'nostradamus', icon: '🔮', name: 'Nostradamus',   desc: '3+ exact scores' },
  { id: 'sharpshoot',  icon: '🎯', name: 'Sharpshooter',  desc: '5+ exact scores' },
  { id: 'earlybird',   icon: '🐦', name: 'Early Bird',    desc: 'Predict 24h+ early' },
  { id: 'underdog',    icon: '🐴', name: 'Underdog King', desc: '3+ correct draws' },
  { id: 'streak',      icon: '🔥', name: 'On Fire',       desc: '3+ in a row' },
  { id: 'centurion',   icon: '💯', name: 'Centurion',     desc: '100+ points' },
  { id: 'allin',       icon: '🎲', name: 'All In',        desc: 'Predict every match' }
]

// ============== TIME HELPERS ==============
function relativeTimeAgo(iso) {
  if (!iso) return ''
  const diff = Date.now() - new Date(iso).getTime()
  if (diff < 0) return 'just now'
  const m = Math.floor(diff / 6e4)
  if (m < 1) return 'just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}
function msToCountdown(ms) {
  if (ms <= 0) return '00:00:00'
  const totalSec = Math.floor(ms / 1000)
  const d = Math.floor(totalSec / 86400)
  const h = Math.floor((totalSec % 86400) / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  if (d > 0) return `${d}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m`
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

    // ============== FIXTURES ==============
    async function loadFixtures() {
      const { data: fxData } = await getFixtures()
      const { data: predData } = await getMyPredictions()
      fixtures = fxData || []
      predictions = predData || []
      renderFixtures()
      updatePredictionCount()
    }

    function getPrediction(id) { return predictions.find(p => p.fixture_id === id) }
    function isLocked(kickoff) { return new Date() >= new Date(kickoff) }

    function renderFixtures() {
  const c = document.getElementById('fixtures-list')
  const now = new Date()

  // Identify the single next match that should be open
  const upcoming = fixtures
    .filter(f => new Date(f.kickoff) > now && f.home_score === null)
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
  const nextMatchId = upcoming[0]?.id || null

  // ===== Lock warning banner (Feature 3) =====
  const warnHost = document.getElementById('fixtures-lock-warn')
  if (warnHost) {
    const next = upcoming[0]
    if (next) {
      const ms = new Date(next.kickoff) - now
      const mins = ms / 6e4
      if (mins <= 60) {
        const urgent = mins <= 10
        warnHost.innerHTML = `
          <div class="lock-warn ${urgent ? 'urgent' : ''} rounded-2xl px-4 py-3 flex items-center gap-3">
            <span class="text-lg">${urgent ? '🚨' : '⚠️'}</span>
            <div class="flex-1 min-w-0">
              <div class="text-[13px] font-bold leading-tight">${next.home_team} vs ${next.away_team}</div>
              <div class="text-[11px] opacity-80">Predictions lock in <span class="lock-warn-time" data-lockwarn="${next.id}">${msToCountdown(ms)}</span></div>
            </div>
          </div>`
      } else {
        warnHost.innerHTML = ''
      }
    } else {
      warnHost.innerHTML = ''
    }
  }

  if (!fixtures.length) {
    c.innerHTML = `<div class="empty-state-warm rounded-3xl p-10 text-center">
      <div class="empty-icon">⚽</div>
      <div class="empty-title">No fixtures yet</div>
      <p class="empty-desc">Matches will appear here once the schedule is released.</p>
    </div>`
    return
  }

  c.innerHTML = fixtures.map(f => {
    const pred = getPrediction(f.id)
    const hasScore = f.home_score !== null && f.away_score !== null
    const isNext = f.id === nextMatchId
    const timeLocked = isLocked(f.kickoff)
    const locked = previewMode || !isNext || timeLocked
    const hP = pred ? pred.home_prediction : ''
    const aP = pred ? pred.away_prediction : ''
    const pts = getPointsForFixture(f.id)   // Bug 3: was pred?.points_awarded (never written)

    // Status badge
    let statusClass, statusText
    if (hasScore) { statusClass = 'fixture-status-ft'; statusText = `FT ${f.home_score}–${f.away_score}`; }
    else if (locked && !previewMode) { statusClass = 'fixture-status-locked'; statusText = '🔒 Locked'; }
    else if (previewMode && !hasScore) { statusClass = 'fixture-status-preview'; statusText = 'Preview'; }
    else { statusClass = 'fixture-status-open'; statusText = 'Open'; }

    const ptsBadge = pts > 0 ? `<div class="absolute -top-2 -right-2 px-3 py-1 bg-brand-500 text-white rounded-full text-xs font-bold shadow-lifted">+${pts} pts</div>` : ''

    // Date/time formatting
    const ko = new Date(f.kickoff)
    const dateStr = ko.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
    const timeStr = ko.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()

    // Score boxes (readonly or input)
    const scoreSection = locked
      ? `<div class="fixture-score-row">
          <div class="fixture-score-box">${hP !== '' ? hP : '–'}</div>
          <span class="fixture-score-divider">:</span>
          <div class="fixture-score-box">${aP !== '' ? aP : '–'}</div>
        </div>`
      : `<div class="fixture-score-row">
          <input type="number" min="0" inputmode="numeric" pattern="[0-9]*" class="fixture-score-box active" value="${hP}" onchange="updatePrediction('${f.id}','home',this.value)">
          <span class="fixture-score-divider">:</span>
          <input type="number" min="0" inputmode="numeric" pattern="[0-9]*" class="fixture-score-box active" value="${aP}" onchange="updatePrediction('${f.id}','away',this.value)">
        </div>`

    // Save button
    const saveBtn = !locked
      ? `<button onclick="handleSavePrediction('${f.id}')" class="fixture-save-btn tap">${pred ? 'Update Prediction' : 'Save Prediction'}</button>`
      : previewMode && !hasScore
        ? `<button onclick="exitPreviewMode()" class="fixture-save-btn tap" style="background:linear-gradient(135deg,#1E3A5F,#0B1221);">🔓 Sign in to predict</button>`
        : ''

        // Submitted timestamp display
const submittedStamp = (pred?.submitted_at && !previewMode)
  ? `<div class="px-5 pb-3"><span class="submitted-stamp">Locked in ${relativeTimeAgo(pred.submitted_at)}</span></div>`
  : ''

    const isNextFixture = f.id === nextMatchId
const nextBadge = isNextFixture ? `<div class="fixture-next-badge">Next Match</div>` : ''

    // Hot Takes: once kickoff has passed, anyone (paid) can see everyone's picks.
    // Hidden by default; expands inline on tap. Only shown for locked fixtures.
    const showHotTakes = locked && !previewMode && (hotTakesByFixture[f.id]?.length > 0)
    const hotTakesBlock = showHotTakes
      ? `<div class="px-5 pb-3">
          <button id="hot-takes-btn-${f.id}" onclick="toggleHotTakes('${f.id}')"
                  class="w-full text-xs font-semibold text-ink-600 hover:text-ink-900 tap py-2 border-t border-paper-border/60">
            See all picks (${hotTakesByFixture[f.id].length})
          </button>
          <div id="hot-takes-${f.id}" class="hidden mt-1"></div>
        </div>`
      : ''

return `
    <div class="glass-fixture relative ${isNextFixture ? 'fixture-next-highlight' : ''}" id="fixture-${f.id}" data-fixture="${f.id}">
      ${nextBadge}
      ${ptsBadge}

      <div class="fixture-stage-label">
        <span>${f.stage}</span>
        ${isNextFixture ? '' : `<span class="fixture-status-badge ${statusClass}">${statusText}</span>`}
      </div>

      <div class="fixture-match-row">
        <div class="fixture-team-block">
          ${flagHtml(f.home_team, 48)}
          <div class="fixture-team-name">${f.home_team}</div>
        </div>
        <div class="fixture-vs-text">vs</div>
        <div class="fixture-team-block">
          ${flagHtml(f.away_team, 48)}
          <div class="fixture-team-name">${f.away_team}</div>
        </div>
      </div>

      <div class="fixture-datetime">${dateStr} · ${timeStr}</div>

        ${scoreSection}
      ${saveBtn}
      ${submittedStamp}
      ${hotTakesBlock}
    </div>`
  }).join('')
}

    function updatePrediction(id, side, val) {
      if (!pendingPredictions[id]) pendingPredictions[id] = {}
      pendingPredictions[id][side] = val
    }

    async function handleSavePrediction(id) {
      if (previewMode) { showToast('Sign in to make predictions', 'info'); return }
      const card = document.querySelector(`[data-fixture="${id}"]`)
      const inputs = card.querySelectorAll('input')
      const pending = pendingPredictions[id] || {}
      const h = pending.home !== undefined ? pending.home : inputs[0]?.value
      const a = pending.away !== undefined ? pending.away : inputs[1]?.value
      if (h === '' || h === undefined || a === '' || a === undefined) { showToast('Enter both scores', 'warning'); return }
      const home = parseInt(h), away = parseInt(a)
      const { error } = await savePrediction(id, home, away)
      if (error) { showToast(error.message, 'error'); return }

      // Feature 1: write submitted_at timestamp. Silent-fail if column doesn't exist.
      const submittedAt = new Date().toISOString()
      try {
        await supabaseClient
          .from('predictions')
          .update({ submitted_at: submittedAt })
          .eq('user_id', getUser().id)
          .eq('fixture_id', id)
      } catch (e) { /* column may not exist yet — ignore */ }

      // Show different toast if this prediction is being saved close to kickoff
      const fx = fixtures.find(f => f.id === id)
      const minsToKick = fx ? (new Date(fx.kickoff) - new Date()) / 60000 : Infinity
      if (minsToKick > 0 && minsToKick < 30) {
        showToast('🔒 Locked in! No changes after kickoff.', 'success')
      } else {
        showToast('Prediction saved', 'success')
      }
      const existing = getPrediction(id)
      if (existing) {
        existing.home_prediction = home
        existing.away_prediction = away
        existing.submitted_at = submittedAt
      } else {
        predictions.push({ user_id: getUser().id, fixture_id: id, home_prediction: home, away_prediction: away, points_awarded: 0, submitted_at: submittedAt })
      }
      updatePredictionCount()
      renderFixtures()  // re-render so "Locked in just now" appears immediately
    }

  function updatePredictionCount() {
  const now = new Date()
  const upcoming = fixtures
    .filter(f => new Date(f.kickoff) > now && f.home_score === null)
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
  const next = upcoming[0]
  const el = document.getElementById('prediction-count')
  if (!next) {
    el.textContent = `${predictions.length}/${fixtures.length}`
    return
  }
  const pred = getPrediction(next.id)
  el.textContent = pred ? `Next: ✓ Predicted` : `Next: Predict now`
}

    // ============== HOME ==============
    // ============== POINTS LOOKUP HELPER (Bug 3 expanded) ==============
    // Bridge cache: predictions.points_awarded is a legacy column the bonus engine
    // doesn't write to. All "+N pts" UI must read final_points / base_points from
    // prediction_results instead. Refreshed after sign-in and on realtime events.
    let myResultsByFixture = {}

    async function refreshMyResultsCache() {
      const myId = getUser()?.id
      if (!myId) { myResultsByFixture = {}; return }
      try {
        const { data } = await supabaseClient
          .from('prediction_results')
          .select('fixture_id, base_points, final_points')
          .eq('user_id', myId)
        const next = {}
        ;(data || []).forEach(r => { next[r.fixture_id] = r })
        myResultsByFixture = next
      } catch (e) {
        console.warn('[results-cache] refresh failed:', e)
      }
    }

    // Returns final_points for the current user on a given fixture, or 0.
    function getPointsForFixture(fixtureId) {
      return myResultsByFixture[fixtureId]?.final_points || 0
    }

    // ============== SOCIAL FEATURES (Hot Takes / H2H / Match Preview) ==============
    // Three shared concerns:
    //   1. All three only show paid users (fee_paid = true). Mirrors the leaderboard.
    //   2. Refreshed on boot + after score events, NOT on every render — they're caches.
    //   3. Visibility tied to per-fixture lock: a match's picks become public once its
    //      kickoff has passed, not once the WHOLE matchday locks. Independent per match.

    let hotTakesByFixture = {}   // { fixtureId: [{ user_id, name, home, away, base_points, final_points, streak_bonus, combo_bonus, submitted_at }] }
    let matchPreviewCache = null // { fixtureId, submittedCount, totalPaid, topScore, topCount, homeWin, draw, awayWin }

    async function refreshSocialCaches() {
      // Single fetch for paid profiles — shared by both refreshes.
      let paidMap = {}
      try {
        const { data: paidProfiles } = await supabaseClient
          .from('profiles').select('id, name').eq('fee_paid', true)
        ;(paidProfiles || []).forEach(p => { paidMap[p.id] = p })
      } catch (e) {
        console.warn('[social] paid profiles fetch failed:', e)
        return
      }
      await Promise.all([
        refreshHotTakes(paidMap),
        refreshMatchPreview(paidMap)
      ])
    }

    async function refreshHotTakes(paidMap) {
      if (!fixtures.length) { hotTakesByFixture = {}; return }
      const now = Date.now()
      // A fixture is "locked" once its kickoff has passed — at that point its predictions
      // become public regardless of whether the result is in yet.
      const lockedIds = fixtures.filter(f => new Date(f.kickoff).getTime() <= now).map(f => f.id)
      if (!lockedIds.length) { hotTakesByFixture = {}; return }

      try {
        const [{ data: preds }, { data: results }] = await Promise.all([
          supabaseClient.from('predictions')
            .select('user_id, fixture_id, home_prediction, away_prediction, submitted_at')
            .in('fixture_id', lockedIds),
          supabaseClient.from('prediction_results')
            .select('user_id, fixture_id, base_points, final_points, streak_bonus, combo_bonus')
            .in('fixture_id', lockedIds)
        ])

        // Index results by "userId|fixtureId" for O(1) merge
        const resultMap = {}
        ;(results || []).forEach(r => { resultMap[r.user_id + '|' + r.fixture_id] = r })

        const grouped = {}
        ;(preds || []).forEach(p => {
          if (!paidMap[p.user_id]) return                                      // unpaid users excluded
          if (p.home_prediction === null || p.away_prediction === null) return // blank predictions excluded
          const fid = p.fixture_id
          if (!grouped[fid]) grouped[fid] = []
          const r = resultMap[p.user_id + '|' + fid] || {}
          grouped[fid].push({
            user_id: p.user_id,
            name: paidMap[p.user_id].name || 'Anonymous',
            home: p.home_prediction,
            away: p.away_prediction,
            submitted_at: p.submitted_at,
            base_points: r.base_points ?? null,
            final_points: r.final_points ?? null,
            streak_bonus: r.streak_bonus || 0,
            combo_bonus: r.combo_bonus || 0
          })
        })

        // Sort each fixture's picks: finished -> by final_points desc; locked-not-finished -> by submitted_at asc
        Object.keys(grouped).forEach(fid => {
          const fixture = fixtures.find(f => f.id === fid)
          const finished = fixture && fixture.home_score !== null && fixture.away_score !== null
          if (finished) {
            grouped[fid].sort((a, b) => (b.final_points || 0) - (a.final_points || 0))
          } else {
            grouped[fid].sort((a, b) => new Date(a.submitted_at) - new Date(b.submitted_at))
          }
        })

        hotTakesByFixture = grouped
      } catch (e) {
        console.warn('[hot-takes] refresh failed:', e)
      }
    }

    function renderHotTakes(fixtureId) {
      const picks = hotTakesByFixture[fixtureId] || []
      if (!picks.length) {
        return '<div class="text-center text-sm text-ink-500 py-3">No predictions to show</div>'
      }
      const fixture = fixtures.find(f => f.id === fixtureId)
      const finished = fixture && fixture.home_score !== null && fixture.away_score !== null
      const myId = getUser()?.id

      return picks.map(p => {
        const isMe = p.user_id === myId
        const ptsBadge = finished
          ? `<span class="text-xs font-bold ${(p.final_points || 0) > 0 ? 'text-brand-700' : 'text-ink-400'}" style="font-variant-numeric:tabular-nums;">+${p.final_points || 0}</span>`
          : ''
        const bonusEmoji = (p.streak_bonus > 0 ? '🔥' : '') + (p.combo_bonus > 0 ? '⚡' : '')
        return `
          <div class="flex items-center gap-2 py-1.5 px-2 ${isMe ? 'rounded-lg' : ''}" ${isMe ? 'style="background:rgba(212,162,76,0.10);"' : ''}>
            <div class="flex-1 min-w-0 text-sm truncate ${isMe ? 'font-bold text-brand-700' : 'text-ink-700'}">
              ${isMe ? 'You' : (p.name || 'Anonymous')}
            </div>
            <div class="text-sm font-bold text-ink-900" style="font-variant-numeric:tabular-nums;">
              ${p.home}–${p.away}
            </div>
            ${bonusEmoji ? `<div class="text-xs">${bonusEmoji}</div>` : ''}
            ${ptsBadge}
          </div>`
      }).join('')
    }

    function toggleHotTakes(fixtureId) {
      const el = document.getElementById('hot-takes-' + fixtureId)
      const btn = document.getElementById('hot-takes-btn-' + fixtureId)
      if (!el) return
      if (el.classList.contains('hidden')) {
        el.innerHTML = renderHotTakes(fixtureId)
        el.classList.remove('hidden')
        if (btn) btn.textContent = 'Hide picks'
      } else {
        el.classList.add('hidden')
        if (btn) btn.textContent = 'See all picks'
      }
    }

    async function refreshMatchPreview(paidMap) {
      // Preview = the next OPEN (unlocked) match for the current user.
      const now = Date.now()
      const upcoming = fixtures
        .filter(f => new Date(f.kickoff).getTime() > now && f.home_score === null)
        .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))[0]
      if (!upcoming) { matchPreviewCache = null; return }

      try {
        const { data: preds } = await supabaseClient
          .from('predictions')
          .select('user_id, home_prediction, away_prediction')
          .eq('fixture_id', upcoming.id)
        if (!preds) { matchPreviewCache = null; return }

        const valid = preds.filter(p =>
          paidMap[p.user_id] && p.home_prediction !== null && p.away_prediction !== null
        )
        const totalPaid = Object.keys(paidMap).length
        const submittedCount = valid.length

        const scoreCounts = {}
        let homeWin = 0, draw = 0, awayWin = 0
        valid.forEach(p => {
          const key = p.home_prediction + '-' + p.away_prediction
          scoreCounts[key] = (scoreCounts[key] || 0) + 1
          if (p.home_prediction > p.away_prediction) homeWin++
          else if (p.home_prediction < p.away_prediction) awayWin++
          else draw++
        })

        let topScore = null, topCount = 0
        Object.entries(scoreCounts).forEach(([k, c]) => {
          if (c > topCount) { topScore = k; topCount = c }
        })

        matchPreviewCache = {
          fixtureId: upcoming.id,
          submittedCount, totalPaid,
          topScore, topCount,
          homeWin, draw, awayWin
        }
      } catch (e) {
        console.warn('[preview] refresh failed:', e)
        matchPreviewCache = null
      }
    }

    function renderMatchPreviewCard() {
      if (!matchPreviewCache) return ''
      const p = matchPreviewCache
      if (p.submittedCount === 0 || !p.totalPaid) return ''   // nothing interesting to show yet

      const pct = Math.round((p.submittedCount / p.totalPaid) * 100)
      const fixture = fixtures.find(f => f.id === p.fixtureId)
      if (!fixture) return ''

      // Below the minimum, just show the lock-in count without the lean/popular stats —
      // a 1-player "100% on Brazil" reads pathetic for a small league. (Polish 1)
      const MIN_FOR_STATS = 3
      const showStats = p.submittedCount >= MIN_FOR_STATS

      let statsBlock = ''
      if (showStats) {
        const total = p.homeWin + p.draw + p.awayWin
        const homePct = total ? Math.round((p.homeWin / total) * 100) : 0
        const drawPct = total ? Math.round((p.draw / total) * 100) : 0
        const awayPct = total ? Math.round((p.awayWin / total) * 100) : 0

        let leanText
        if (homePct >= drawPct && homePct >= awayPct) leanText = homePct + '% on ' + fixture.home_team
        else if (awayPct >= drawPct)                   leanText = awayPct + '% on ' + fixture.away_team
        else                                           leanText = drawPct + '% backing a draw'

        const popularScore = p.topScore
          ? 'Most picked: <b class="text-ink-900" style="font-variant-numeric:tabular-nums;">' + p.topScore.split('-').join('–') + '</b> (' + p.topCount + ' ' + (p.topCount === 1 ? 'player' : 'players') + ')'
          : ''

        statsBlock = `
          <div class="text-xs text-ink-600 leading-relaxed">
            ${popularScore ? '<div>' + popularScore + '</div>' : ''}
            <div>Crowd leans: <b class="text-ink-900">${leanText}</b></div>
          </div>`
      }

      return `
        <div class="glass-light rounded-2xl p-3 mb-3">
          <div class="flex items-center justify-between mb-2">
            <div class="text-[10px] font-bold uppercase tracking-wider text-ink-500">Crowd Preview</div>
            <div class="text-xs font-bold text-ink-700">${p.submittedCount}/${p.totalPaid} locked in</div>
          </div>
          <div class="w-full h-1.5 bg-paper rounded-full overflow-hidden mb-2">
            <div class="h-full bg-brand-500 transition-all" style="width:${pct}%"></div>
          </div>
          ${statsBlock}
        </div>`
    }

    // ============== HEAD-TO-HEAD ==============
    async function openH2H(opponentId) {
      const myId = getUser()?.id
      if (!myId || opponentId === myId) return  // no self-H2H

      showH2HModal({ loading: true })

      try {
        const [{ data: myResults }, { data: theirResults }, { data: opp }] = await Promise.all([
          supabaseClient.from('prediction_results')
            .select('fixture_id, final_points').eq('user_id', myId),
          supabaseClient.from('prediction_results')
            .select('fixture_id, final_points').eq('user_id', opponentId),
          supabaseClient.from('profiles').select('name').eq('id', opponentId).maybeSingle()
        ])

        // Only compare matches BOTH predicted AND that are now resolved
        // (presence of a prediction_results row guarantees the match was scored)
        const myMap = {}
        ;(myResults || []).forEach(r => { myMap[r.fixture_id] = r })

        const matches = []
        let myTotal = 0, theirTotal = 0, myWins = 0, theirWins = 0, ties = 0
        ;(theirResults || []).forEach(r => {
          const mine = myMap[r.fixture_id]
          if (!mine) return
          const fixture = fixtures.find(f => f.id === r.fixture_id)
          if (!fixture) return
          const myPts = mine.final_points || 0
          const theirPts = r.final_points || 0
          myTotal += myPts
          theirTotal += theirPts
          let outcome
          if      (myPts > theirPts) { myWins++;    outcome = 'win'  }
          else if (theirPts > myPts) { theirWins++; outcome = 'loss' }
          else                       { ties++;      outcome = 'tie'  }
          matches.push({ fixture, myPts, theirPts, outcome })
        })
        matches.sort((a, b) => new Date(b.fixture.kickoff) - new Date(a.fixture.kickoff))

        showH2HModal({
          opponentName: opp?.name || 'Player',
          myTotal, theirTotal, myWins, theirWins, ties, matches
        })
      } catch (e) {
        console.error('[h2h] load failed:', e)
        showToast('Could not load head-to-head', 'error')
        hideH2HModal()
      }
    }

    function showH2HModal(data) {
      let modal = document.getElementById('h2h-modal')
      let isFirstOpen = false

      // Build the modal shell ONCE (backdrop + content frame + body slot).
      // On subsequent loading→content transitions, we only swap the body slot,
      // not the whole modal — that's what kept making it jerky.
      if (!modal) {
        isFirstOpen = true
        modal = document.createElement('div')
        modal.id = 'h2h-modal'
        modal.className = 'h2h-modal'
        modal.innerHTML = `
          <div class="h2h-backdrop"></div>
          <div class="h2h-content">
            <div class="h2h-body" id="h2h-body"></div>
          </div>`
        modal.querySelector('.h2h-backdrop').addEventListener('click', hideH2HModal)
        document.body.appendChild(modal)
        // Trigger reflow so the initial closed state is committed before we
        // add the is-open class — otherwise the transition skips.
        void modal.offsetWidth
        requestAnimationFrame(() => modal.classList.add('is-open'))
      }

      const bodyEl = modal.querySelector('#h2h-body')

      // Loading skeleton: keep height stable so the content swap doesn't jump.
      if (data.loading) {
        bodyEl.innerHTML = `
          <div class="h2h-loading">
            <div class="h2h-skel-header">
              <div class="h2h-skel-title"></div>
              <div class="h2h-skel-close"></div>
            </div>
            <div class="h2h-skel-summary">
              <div class="h2h-skel-stat"></div>
              <div class="h2h-skel-stat"></div>
            </div>
            <div class="h2h-skel-row"></div>
            <div class="h2h-skel-row"></div>
            <div class="h2h-skel-row"></div>
          </div>`
        return
      }

      const { opponentName, myTotal, theirTotal, myWins, theirWins, ties, matches } = data
      const diff = myTotal - theirTotal
      const summary = diff > 0
        ? '<span class="text-brand-700 font-bold">+' + diff + '</span> ahead'
        : diff < 0
          ? '<span class="text-red-600 font-bold">' + diff + '</span> behind'
          : 'Dead even'

      // Crossfade: build new content invisible, swap in, then fade up.
      const newBody = document.createElement('div')
      newBody.className = 'h2h-content-fade'
      newBody.innerHTML = `
        <div class="p-5 border-b border-paper-border flex items-center justify-between shrink-0">
          <div class="min-w-0">
            <div class="text-[10px] font-bold uppercase tracking-wider text-ink-500">Head to head</div>
            <div class="text-lg font-bold text-ink-900 truncate">You vs ${opponentName}</div>
          </div>
          <button onclick="hideH2HModal()" class="w-9 h-9 rounded-full bg-paper border border-paper-border flex items-center justify-center text-ink-500 tap shrink-0">✕</button>
        </div>

        <div class="px-5 py-4 border-b border-paper-border shrink-0">
          <div class="flex items-center justify-around text-center">
            <div>
              <div class="text-2xl font-bold text-brand-700" style="font-variant-numeric:tabular-nums;">${myTotal}</div>
              <div class="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5">You</div>
            </div>
            <div class="text-sm text-ink-300 font-semibold">vs</div>
            <div class="min-w-0">
              <div class="text-2xl font-bold text-ink-700" style="font-variant-numeric:tabular-nums;">${theirTotal}</div>
              <div class="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5 truncate max-w-[100px]">${opponentName}</div>
            </div>
          </div>
          <div class="text-center mt-3 text-sm text-ink-600">${summary} · ${myWins}W ${ties}T ${theirWins}L · ${matches.length} match${matches.length === 1 ? '' : 'es'}</div>
        </div>

        ${matches.length === 0
          ? '<div class="p-8 text-center text-sm text-ink-500">No completed matches you have both predicted yet.</div>'
          : '<div class="flex-1 overflow-y-auto px-3 py-2">' + matches.map(m => {
              const f = m.fixture
              const dot = m.outcome === 'win' ? '🟢' : m.outcome === 'loss' ? '🔴' : '⚪'
              const dateStr = new Date(f.kickoff).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
              return `
                <div class="flex items-center gap-2 py-2 px-2 border-b border-paper-border/40 last:border-0">
                  <div class="text-base shrink-0">${dot}</div>
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-semibold text-ink-900 truncate">${f.home_team} vs ${f.away_team}</div>
                    <div class="text-[10px] text-ink-500">${dateStr} · ${f.stage}</div>
                  </div>
                  <div class="text-right shrink-0 text-xs" style="font-variant-numeric:tabular-nums;">
                    <b class="text-brand-700">${m.myPts}</b> <span class="text-ink-300">·</span> <span class="text-ink-700">${m.theirPts}</span>
                  </div>
                </div>`
            }).join('') + '</div>'
        }`

      bodyEl.innerHTML = ''
      bodyEl.appendChild(newBody)
      // Next frame: trigger the crossfade-in
      requestAnimationFrame(() => newBody.classList.add('is-visible'))
    }

    function hideH2HModal() {
      const modal = document.getElementById('h2h-modal')
      if (!modal) return
      modal.classList.add('is-closing')
      modal.classList.remove('is-open')
      // Wait for the transition to finish before removing from DOM.
      const cleanup = () => {
        modal.removeEventListener('transitionend', cleanup)
        modal.remove()
      }
      modal.addEventListener('transitionend', cleanup)
      // Safety net: if for some reason transitionend never fires, force-remove.
      setTimeout(() => { if (modal.parentNode) modal.remove() }, 400)
    }

    // ── Bonus Engine Helpers ──
async function getLeaderboardFromResults() {
  // Fetch prediction_results and profiles separately (no FK relationship between them)
  // Profiles are filtered to fee_paid=true so unpaid users (including unpaid admin) never appear on the global leaderboard.
  const [{ data: results, error: resError }, { data: profiles, error: profError }] = await Promise.all([
    supabaseClient.from('prediction_results').select('*'),
    supabaseClient.from('profiles').select('id, full_name, department, name, fee_paid').eq('fee_paid', true)
  ])

  // If prediction_results doesn't exist or is empty, fall back to profiles-based leaderboard
  if (resError || !results || results.length === 0) {
    console.log('[Leaderboard] prediction_results empty or error, falling back to profiles:', resError?.message || 'no data')

    // Try the original getLeaderboard from auth.js if available
    if (typeof getLeaderboard === 'function') {
      try {
        const fallback = await getLeaderboard()
        if (fallback?.data && fallback.data.length > 0) {
          return fallback
        }
      } catch (e) {
        console.warn('[Leaderboard] getLeaderboard fallback failed:', e)
      }
    }

    // Ultimate fallback: build from profiles with zero points
    if (profiles && profiles.length > 0) {
      const stats = profiles.map(p => ({
        user_id: p.id,
        id: p.id,
        name: p.full_name || p.name || 'Unknown',
        full_name: p.full_name || p.name || 'Unknown',
        department: p.department || '',
        points: 0,
        exact: 0,
        gd: 0,
        result: 0,
        total_predictions: 0
      }))
      return { data: stats, error: null }
    }

    return { data: [], error: resError }
  }

  const profileMap = {}
  if (profiles) {
    profiles.forEach(p => { profileMap[p.id] = p })
  }

  // Only include user_ids that belong to a paid profile.
  // This drops unpaid users (and unpaid admins) even if they have rows in prediction_results.
  const userIds = [...new Set((results || []).map(r => r.user_id))].filter(uid => profileMap[uid])
  const stats = userIds.map(uid => {
    const userResults = results.filter(r => r.user_id === uid)
    let engineStats
    try {
      if (typeof BonusEngine !== 'undefined' && BonusEngine.aggregateUserStats) {
        engineStats = BonusEngine.aggregateUserStats(uid, userResults)
      } else {
        // Fallback: calculate stats manually if BonusEngine is not loaded.
        // IMPORTANT: tier classification (exact/gd/result) must check base_points,
        // because final_points includes the stage multiplier. An exact score in the
        // Semi Final has final_points = 10 (5 × 2), not 5 — we'd miscount it as "wrong" otherwise.
        let points = 0, exact = 0, gd = 0, result = 0
        userResults.forEach(r => {
          points += r.final_points || r.points_awarded || 0
          const base = (r.base_points != null) ? r.base_points : (r.points_awarded || 0)
          if (base === 5) exact++
          else if (base === 3) gd++
          else if (base === 2) result++
        })
        engineStats = { points, exact, gd, result, total_predictions: userResults.length }
      }
    } catch (e) {
      console.warn('[Leaderboard] BonusEngine failed for user', uid, e)
      engineStats = { points: 0, exact: 0, gd: 0, result: 0, total_predictions: userResults.length }
    }
    const profile = profileMap[uid] || {}
    return {
      user_id: uid,
      name: profile.full_name || profile.name || 'Unknown',
      full_name: profile.full_name || profile.name || 'Unknown',
      department: profile.department || '',
      ...engineStats
    }
  })

  // Tiebreaker chain: points → exact → gd → result.
  // Mirrors getLeagueLeaderboard so positions stay consistent across views. (Bug 5)
  stats.sort((a, b) => {
    if ((b.points || 0) !== (a.points || 0)) return (b.points || 0) - (a.points || 0)
    if ((b.exact  || 0) !== (a.exact  || 0)) return (b.exact  || 0) - (a.exact  || 0)
    if ((b.gd     || 0) !== (a.gd     || 0)) return (b.gd     || 0) - (a.gd     || 0)
    return (b.result || 0) - (a.result || 0)
  })
  return { data: stats, error: null }
}

async function getUserResults(userId) {
  const { data, error } = await supabaseClient
    .from('prediction_results')
    .select('*, fixtures!inner(home_team, away_team, stage, kickoff, home_score, away_score)')
    .eq('user_id', userId)
    .order('kickoff', { ascending: false })

  if (error) {
    console.error('getUserResults error:', error)
    return []
  }
  return data || []
}

async function loadHome() {
  const myId = getUser()?.id
  const { data: stats } = await getLeaderboardFromResults()
  const total = stats?.length || 0

  // Try matching by user_id first, then fallback to id
  let myIdx = stats?.findIndex(s => s.user_id === myId) ?? -1
  if (myIdx === -1 && stats?.length) {
    myIdx = stats.findIndex(s => s.id === myId)
  }

  const me = myIdx >= 0 ? stats[myIdx] : null

  // Fallback: sum points from local prediction_results cache if leaderboard row is missing
  const myPredPoints = Object.values(myResultsByFixture).reduce((sum, r) => sum + (r.final_points || 0), 0)

  // Helper: set text and pulse if value changed
  const setAnimated = (id, val, cls = 'pts-pulse') => {
    const el = document.getElementById(id)
    if (!el) return
    const newStr = String(val)
    if (el.textContent !== newStr && el.textContent !== '—' && el.textContent !== '') {
      el.classList.remove(cls)
      void el.offsetWidth
      el.classList.add(cls)
      setTimeout(() => el.classList.remove(cls), 720)
    }
    el.textContent = newStr
  }

  if (me) {
    const rank = myIdx + 1
    setAnimated('home-rank', `#${rank}`)
    document.getElementById('home-rank-total').textContent = `of ${total}`
    const medals = { 1: '🥇 Top of the table', 2: '🥈 Almost there', 3: '🥉 On the podium' }
    document.getElementById('home-rank-medal').textContent = medals[rank] || `Keep climbing`
    setAnimated('home-points', me.points || myPredPoints || 0)
    const correct = (me.exact || 0) + (me.gd || 0) + (me.result || 0)
    document.getElementById('home-points-breakdown').textContent = `${me.exact || 0} exact · ${correct} correct`
  } else {
    const hasPoints = myPredPoints > 0
    document.getElementById('home-rank').textContent = '—'
    document.getElementById('home-rank-total').textContent = total ? `of ${total}` : ''
    setAnimated('home-points', myPredPoints || 0)
    document.getElementById('home-rank-medal').textContent = hasPoints ? 'Keep climbing' : 'Make your first prediction'
    document.getElementById('home-points-breakdown').textContent = hasPoints ? `${myPredPoints} points from predictions` : '—'
  }

  // Prize pool dashboard
  try {
    const breakdown = await fetchPrizeBreakdown()
    if (breakdown && breakdown.gross > 0) {
      renderPrizeDashboard(breakdown)
    } else {
      document.getElementById('home-prize-dashboard').classList.add('hidden')
    }
  } catch (e) {}

  // Next + recent
  const now = new Date()
  const upcoming = fixtures.filter(f => new Date(f.kickoff) > now && f.home_score === null).sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
  const finished = fixtures.filter(f => f.home_score !== null).sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff)).slice(0, 3)

  const nextEl = document.getElementById('home-next-match')
  const cdEl = document.getElementById('home-next-countdown')
  if (!upcoming.length) {
    cdEl.textContent = ''
    cdEl.removeAttribute('data-cd-home')
   nextEl.innerHTML = `<div class="glass-light rounded-3xl p-6 text-center">
      <div class="text-4xl mb-2">⏳</div><div class="text-sm font-semibold text-ink-700">No upcoming matches</div><p class="text-xs text-ink-500 mt-1">Check back soon</p>
    </div>`
  } else {
    const f = upcoming[0]
    const pred = getPrediction(f.id)
    const ko = new Date(f.kickoff)
    const diff = ko - now
    cdEl.dataset.cdHome = ko.toISOString()

    // Crowd Preview card injected ABOVE the next-match card.
    // Hidden if nobody has predicted yet (renderMatchPreviewCard returns '' in that case).
    const previewHtml = renderMatchPreviewCard()
    
    cdEl.textContent = `in ${msToCountdown(diff)}`
// Initial color class based on time remaining
const minsToKick = diff / 60000
cdEl.classList.remove('countdown-green', 'countdown-amber', 'countdown-red')
if (minsToKick > 120) {
  cdEl.classList.add('next-match-countdown', 'countdown-green')
} else if (minsToKick > 30) {
  cdEl.classList.add('next-match-countdown', 'countdown-amber')
} else {
  cdEl.classList.add('next-match-countdown', 'countdown-red')
}

   nextEl.innerHTML = previewHtml + `
  <div class="glass-light rounded-3xl overflow-hidden">
        <div class="px-4 pt-3 pb-2">
          <div class="text-[11px] font-bold text-ink-400 uppercase tracking-[0.15em] mb-1.5">${f.stage}</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:16px;padding:6px 4px 8px;">
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:0;">
              ${flagHtml(f.home_team, 44)}
              <div style="font-weight:700;font-size:14px;color:#0A0F0D;text-align:center;line-height:1.2;">${f.home_team}</div>
            </div>
            <div style="font-size:12px;font-weight:600;color:#B5BDC5;letter-spacing:0.05em;text-transform:uppercase;flex-shrink:0;padding:0 4px;">vs</div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:0;">
              ${flagHtml(f.away_team, 44)}
              <div style="font-weight:700;font-size:14px;color:#0A0F0D;text-align:center;line-height:1.2;">${f.away_team}</div>
            </div>
          </div>
          <div class="text-center text-xs text-ink-500 font-medium">
            ${ko.toLocaleString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} · ${ko.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()}
          </div>
        </div>
        <div class="px-4 py-2 border-t border-white/30" style="background:rgba(250,250,247,0.45);">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-[10px] font-bold text-ink-500 uppercase tracking-wider mb-0.5">Your Pick</div>
              ${pred
                ? `<div class="text-lg font-bold text-brand-700">${pred.home_prediction} – ${pred.away_prediction}</div>`
                : `<div class="flex items-center gap-2 text-sm text-ink-500"><span class="w-2 h-2 rounded-full border-2 border-dashed border-ink-300"></span>Not predicted yet</div>`}
            </div>
            <button onclick="switchToFixture('${f.id}')" class="bg-brand-900 text-white text-xs font-semibold px-3 py-2 rounded-xl tap">${pred ? 'Change' : 'Predict'}</button>
          </div>
        </div>
      </div>`
  }

  const recentEl = document.getElementById('home-recent')
  if (!finished.length) {
    recentEl.innerHTML = `<div class="empty-state-warm rounded-2xl p-6 text-center"><div class="empty-icon">📋</div><div class="empty-title">No results yet</div><p class="empty-desc">Match results will appear once games finish.</p></div>`
  } else {
   // AFTER (glass-light)
recentEl.innerHTML = finished.map(f => {
  const pred = getPrediction(f.id)
  const pts = getPointsForFixture(f.id)   // Bug 3: was pred?.points_awarded (never written)
  return `
  <div class="glass-light rounded-2xl p-3 flex items-center gap-3">
    <div class="flex items-center gap-2 shrink-0">
      ${flagHtml(f.home_team, 28)}
      <span class="font-bold text-sm">${f.home_score}</span>
    </div>
    <span class="text-ink-300 text-xs font-bold">–</span>
    <div class="flex items-center gap-2 shrink-0">
      <span class="font-bold text-sm">${f.away_score}</span>
      ${flagHtml(f.away_team, 28)}
    </div>
    <div class="flex-1 min-w-0 ml-1">
      <div class="font-semibold text-sm line-clamp-2 leading-tight">${f.home_team} vs ${f.away_team}</div>
      <div class="text-xs text-ink-500 mt-0.5">${pred ? `You predicted: ${pred.home_prediction}–${pred.away_prediction}` : 'No prediction'}</div>
    </div>
    <div class="${pts > 0 ? 'bg-brand-50 text-brand-700' : 'bg-paper text-ink-400'} text-xs font-bold px-2.5 py-1 rounded-full shrink-0">+${pts}</div>
  </div>`
}).join('')
  }
}

    // ============== LEADERBOARD ==============
    // Sub-tab state: 'overall' | 'matchday'
    let lbSubtab = 'overall'
    // Cached enrichments (computed once per loadLeaderboard call)
    let lbStreakMap = {}        // uid -> consecutive scoring predictions count
    let lbTrendMap = {}         // uid -> { dir: 'up'|'down'|'new', delta }
    let lbPrizeBreakdown = null // current prize breakdown
    let lbMatchdayInfo = null   // { label, fixtureIds[], finishedAt }

    function switchLbSubtab(tab) {
      if (tab === lbSubtab) return
      lbSubtab = tab
      document.getElementById('lb-subtab-overall').classList.toggle('active', tab === 'overall')
      document.getElementById('lb-subtab-overall').setAttribute('aria-selected', tab === 'overall')
      document.getElementById('lb-subtab-matchday').classList.toggle('active', tab === 'matchday')
      document.getElementById('lb-subtab-matchday').setAttribute('aria-selected', tab === 'matchday')
      loadLeaderboard()
    }

    // Identify the "latest matchday" — calendar day of the most recently finished fixture.
    // Returns { label, fixtureIds, finishedAt } or null if nothing finished yet.
    function getLatestMatchday() {
      if (!fixtures || !fixtures.length) return null
      const finished = fixtures.filter(f => f.home_score !== null && f.away_score !== null)
      if (!finished.length) return null
      finished.sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))
      const latest = finished[0]
      const latestDay = new Date(latest.kickoff).toDateString()
      const sameDay = finished.filter(f => new Date(f.kickoff).toDateString() === latestDay)
      const label = new Date(latest.kickoff).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
      return {
        label,
        fixtureIds: sameDay.map(f => f.id),
        finishedAt: latest.kickoff,
        matchKey: latestDay
      }
    }

    // Compute matchday-specific leaderboard from predictions on the latest matchday's fixtures.
    async function getMatchdayLeaderboard(md) {
      if (!md || !md.fixtureIds.length) return []
      try {
        // BUG 3 FIX: read from prediction_results (where the bonus engine writes)
        // instead of predictions.points_awarded (a legacy column that's always 0).
        const { data } = await supabaseClient
          .from('prediction_results')
          .select('user_id, base_points, final_points, fixture_id')
          .in('fixture_id', md.fixtureIds)
        if (!data) return []
        // Need user names — pull from profiles (paid users only, to match Overall behavior)
        const userIds = [...new Set(data.map(p => p.user_id))]
        let profMap = {}
        if (userIds.length) {
          const { data: profs } = await supabaseClient
            .from('profiles').select('id, name, department, fee_paid').in('id', userIds).eq('fee_paid', true)
          ;(profs || []).forEach(p => { profMap[p.id] = p })
        }
        const agg = {}
        data.forEach(r => {
          const uid = r.user_id
          // Skip unpaid users — they shouldn't appear on the global matchday leaderboard
          if (!profMap[uid]) return
          if (!agg[uid]) {
            agg[uid] = {
              user_id: uid, points: 0, exact: 0, gd: 0, result: 0,
              name: profMap[uid]?.name || 'Anonymous',
              department: profMap[uid]?.department || ''
            }
          }
          agg[uid].points += (r.final_points || 0)
          // Real exact/gd/result split now that we have base_points.
          if (r.base_points === 5)      agg[uid].exact++
          else if (r.base_points === 3) agg[uid].gd++
          else if (r.base_points === 2) agg[uid].result++
        })
        return Object.values(agg)
          .filter(s => s.points > 0 || s.user_id === getUser()?.id) // keep self even with 0
          .sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points
            if (b.exact  !== a.exact)  return b.exact  - a.exact
            if (b.gd     !== a.gd)     return b.gd     - a.gd
            return b.result - a.result
          })
      } catch (e) { return [] }
    }

    // Compute current scoring-streaks for everyone, in one query.
    // A streak = consecutive most-recent finished predictions where base_points > 0.
    // BUG 2 FIX: must include 0-point rows in the query so the loop can break on them.
    // Previously we filtered them out at the query level, which made the break unreachable
    // and turned "consecutive wins" into "total wins" (W L W W W incorrectly counted as 4).
    async function computeStreaks() {
      try {
        const { data } = await supabaseClient
          .from('prediction_results')
          .select('user_id, base_points, kickoff, fixture_id')
        if (!data) return {}
        const byUser = {}
        data.forEach(p => {
          if (!byUser[p.user_id]) byUser[p.user_id] = []
          byUser[p.user_id].push(p)
        })
        const streaks = {}
        Object.entries(byUser).forEach(([uid, preds]) => {
          // Newest first; deterministic tiebreaker for simultaneous kickoffs (Bug 7).
          preds.sort((a, b) => {
            const dt = new Date(b.kickoff) - new Date(a.kickoff)
            return dt !== 0 ? dt : String(b.fixture_id).localeCompare(String(a.fixture_id))
          })
          let s = 0
          for (const p of preds) {
            if ((p.base_points || 0) > 0) s++
            else break   // now reachable
          }
          if (s >= 3) streaks[uid] = s
        })
        return streaks
      } catch (e) { return {} }
    }

    // ===== Persistent rank trend snapshots =====
    // Key the snapshot to the "latest resolved matchday". When that changes, we
    // compare current ranks to the snapshot taken right BEFORE that matchday.
    function rankTrendSnapshotKey() {
      const md = getLatestMatchday()
      return md ? `lb_rank_snapshot_${md.matchKey}` : null
    }
    function getStoredTrend() {
      const key = rankTrendSnapshotKey()
      if (!key) return { ranks: null, expiresAt: 0 }
      try {
        const raw = localStorage.getItem(key)
        if (!raw) return { ranks: null, expiresAt: 0 }
        return JSON.parse(raw)
      } catch (e) { return { ranks: null, expiresAt: 0 } }
    }
    function storeTrend(snapshot) {
      const key = rankTrendSnapshotKey()
      if (!key) return
      try { localStorage.setItem(key, JSON.stringify(snapshot)) } catch (e) { /* ignore */ }
    }
    // After a new matchday resolves, capture the pre-matchday ranks so we can
    // diff once. We approximate "pre-matchday ranks" by saving on FIRST sighting
    // of a new matchday key, using whatever ranks were stored from the previous key.
    function computeTrendMap(currentStats) {
      const md = getLatestMatchday()
      if (!md) return {}
      const key = rankTrendSnapshotKey()
      const PRIOR_KEYS_LS = 'lb_rank_history'
      let history = {}
      try { history = JSON.parse(localStorage.getItem(PRIOR_KEYS_LS) || '{}') } catch(e) {}
      const priorRanks = history[key]?.ranks
      // Save current ranks for next time
      const currentRanks = {}
      currentStats.forEach((s, i) => { currentRanks[s.user_id || s.id] = i + 1 })
      // Only stamp if not already stamped for this matchday
      if (!history[key]) {
        // First time seeing this matchday -> snapshot the *previous* known ranks from history
        const lastKey = Object.keys(history).sort().pop()
        const baseline = lastKey ? history[lastKey].ranks : null
        history[key] = { ranks: currentRanks, baseline, stampedAt: Date.now() }
        try { localStorage.setItem(PRIOR_KEYS_LS, JSON.stringify(history)) } catch(e) {}
      } else {
        // Keep refreshing currentRanks but preserve baseline
        history[key].ranks = currentRanks
        try { localStorage.setItem(PRIOR_KEYS_LS, JSON.stringify(history)) } catch(e) {}
      }
      const baseline = history[key]?.baseline
      if (!baseline) return {}
      // Show trend for 24h after matchday stamped
      const ageMs = Date.now() - (history[key].stampedAt || 0)
      if (ageMs > 24 * 3600 * 1000) return {}
      const trend = {}
      Object.entries(currentRanks).forEach(([uid, newRank]) => {
        const oldRank = baseline[uid]
        if (oldRank === undefined) {
          trend[uid] = { dir: 'new', delta: 0 }
        } else if (newRank < oldRank) {
          trend[uid] = { dir: 'up', delta: oldRank - newRank }
        } else if (newRank > oldRank) {
          trend[uid] = { dir: 'down', delta: newRank - oldRank }
        }
        // equal -> nothing (no noisy dashes)
      })
      return trend
    }

    // ===== Next-match CTA card =====
    function renderLbCta() {
  // Use the compact strip instead of the big card
  const strip = document.getElementById('lb-next-strip')
  if (!strip) return

  if (previewMode) { strip.classList.add('hidden'); return }
  const now = new Date()
  const upcoming = (fixtures || [])
    .filter(f => new Date(f.kickoff) > now && f.home_score === null)
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
  const next = upcoming[0]
  const myId = getUser()?.id
  if (!next || !myId) { strip.classList.add('hidden'); return }
  const hasPred = (predictions || []).some(p => p.fixture_id === next.id)
  if (hasPred) { strip.classList.add('hidden'); return }
  const ms = new Date(next.kickoff) - now
  const cd = msToCountdown(ms)
  strip.classList.remove('hidden')
  document.getElementById('lb-next-teams').textContent = next.home_team + ' vs ' + next.away_team
  document.getElementById('lb-next-countdown').textContent = cd
  document.getElementById('lb-next-countdown').dataset.cdCard = next.id
}
async function loadLeaderboard() {
      const c = document.getElementById('leaderboard-list')
      const myId = getUser()?.id

      // Fetch core stats for current sub-tab in parallel with enrichments
      let overallRes, streaks, prizeBd
      try {
        [overallRes, streaks, prizeBd] = await Promise.all([
          getLeaderboardFromResults(),
          computeStreaks().catch(() => ({})),
          fetchPrizeBreakdown().catch(() => null)
        ])
      } catch (e) {
        console.error('[Leaderboard] Failed to load:', e)
        overallRes = { data: [] }
        streaks = {}
        prizeBd = null
      }
      lbStreakMap = streaks || {}
      lbPrizeBreakdown = prizeBd

      const overallStats = overallRes?.data || []
      // Always compute trend off the OVERALL standings (matchday tab has its own logic)
      lbTrendMap = computeTrendMap(overallStats)

      // Pick stats for current sub-tab
      let stats = overallStats
      let metaText = ''
      lbMatchdayInfo = getLatestMatchday()
      if (lbSubtab === 'matchday') {
        if (!lbMatchdayInfo) {
          metaText = ''
          stats = []
        } else {
          stats = await getMatchdayLeaderboard(lbMatchdayInfo)
          metaText = lbMatchdayInfo.label
        }
      }
      document.getElementById('lb-subtab-meta').textContent = metaText

      // Render CTA card + prize strip (use overall rank for "projected winning")
      renderLbCta()
      const myOverallIdx = overallStats.findIndex(s => (s.user_id || s.id) === myId)
      const myOverallRank = myOverallIdx >= 0 ? myOverallIdx + 1 : null
      
      if (!stats?.length) {
        // Try to show users from profiles even if no predictions exist yet
        try {
          const { data: allProfiles } = await supabaseClient
            .from('profiles')
            .select('id, full_name, department, name')
            .eq('fee_paid', true)
            .order('created_at', { ascending: false })

          if (allProfiles && allProfiles.length > 0) {
            stats = allProfiles.map(p => ({
              user_id: p.id,
              id: p.id,
              name: p.full_name || p.name || 'Unknown',
              full_name: p.full_name || p.name || 'Unknown',
              department: p.department || '',
              points: 0,
              exact: 0,
              gd: 0,
              result: 0,
              total_predictions: 0
            }))
            console.log('[Leaderboard] Showing', stats.length, 'members from profiles (no predictions yet)')
          }
        } catch (e) {
          console.warn('[Leaderboard] Could not load profiles fallback:', e)
        }

        if (!stats?.length) {
          if (lbSubtab === 'matchday') {
            c.innerHTML = `<div class="empty-state-warm p-8 text-center rounded-2xl">
              <div class="empty-icon">🏟️</div>
              <div class="empty-title">Awaiting Kickoff</div>
              <p class="empty-desc">Matchday rankings appear once the first whistle blows. Stay tuned!</p>
            </div>`
          } else {
            c.innerHTML = `<div class="empty-state-warm p-8 text-center rounded-2xl">
              <div class="empty-icon">⚽</div>
              <div class="empty-title">Kickoff Soon</div>
              <p class="empty-desc">The leaderboard will light up once matches begin. Make your predictions now!</p>
            </div>`
          }
          return
        }
      }

      // ===== FLIP: capture old positions + points BEFORE we touch the DOM =====
      const oldRects = {}
      const oldPoints = {}
      const oldRanks = {}
      c.querySelectorAll('[data-uid]').forEach((el, idx) => {
        const uid = el.dataset.uid
        oldRects[uid] = el.getBoundingClientRect()
        oldPoints[uid] = parseInt(el.dataset.points || '0', 10)
        oldRanks[uid] = parseInt(el.dataset.rank || (idx + 1), 10)
      })
      const hadAnyRows = Object.keys(oldRects).length > 0

      // Matchday MVP card: crown the #1 scorer (only on matchday tab, only if they have points)
      const mvp = stats[0]
      const mvpHtml = (lbSubtab === 'matchday' && mvp && (mvp.points || 0) > 0)
        ? `
        <div class="relative overflow-hidden rounded-2xl border border-amber-200 p-4 mb-3"
             style="background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
                    box-shadow: 0 4px 16px rgba(212, 162, 76, 0.18);">
          <div class="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-30"
               style="background: radial-gradient(circle, rgba(212, 162, 76, 0.6), transparent 70%);"></div>
          <div class="relative flex items-center gap-3">
            <div class="text-3xl shrink-0">👑</div>
            <div class="shrink-0">${getAvatarHtml(mvp.name, mvp.avatar_url, 1, 36)}</div>
            <div class="flex-1 min-w-0">
              <div class="text-[10px] font-bold uppercase tracking-wider text-amber-900/70">Matchday MVP</div>
              <div class="text-sm font-bold text-ink-900 truncate">${mvp.name || 'Anonymous'}${(mvp.user_id === myId || mvp.id === myId) ? ' <span class="text-[9px] font-bold text-brand-700 bg-white/60 px-1.5 py-0.5 rounded ml-1">YOU</span>' : ''}</div>
            </div>
            <div class="text-right shrink-0">
              <div class="text-xl font-bold text-amber-900" style="font-variant-numeric: tabular-nums;">${mvp.points || 0}</div>
              <div class="text-[10px] font-semibold text-amber-900/60 uppercase tracking-wider">pts</div>
            </div>
          </div>
        </div>`
        : ''

      // Render fresh HTML
      c.innerHTML = mvpHtml + stats.map((s, i) => {
        const rank = i + 1
        const uid = s.user_id || s.id
        const isMe = s.user_id === myId || s.id === myId
        const correct = (s.exact || 0) + (s.gd || 0) + (s.result || 0)
        const hasPoints = (s.points || 0) > 0
        // Medals ONLY when there are actual points
        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : ''
        const medalClass = rank === 1 ? 'rank-medal-gold' : rank === 2 ? 'rank-medal-silver' : rank === 3 ? 'rank-medal-bronze' : ''
        const rankDisplay = medal
          ? `<div class="${medalClass}" data-rank-wrap title="${rank}${rank===1?'st':rank===2?'nd':'rd'} Place">${medal}</div>`
          : `<div class="rank-num w-10 h-10 rounded-xl bg-paper border border-paper-border flex items-center justify-center font-bold text-sm text-ink-500" data-rank-wrap>${rank}</div>`

        // Persistent trend badge (overall tab only)
        const tr = (lbSubtab === 'overall') ? lbTrendMap[uid] : null
        const trendHtml = tr
          ? (tr.dir === 'up'
              ? `<span class="rank-trend up" title="Up ${tr.delta} since last matchday">▲${tr.delta}</span>`
              : tr.dir === 'down'
                ? `<span class="rank-trend down" title="Down ${tr.delta} since last matchday">▼${tr.delta}</span>`
                : `<span class="rank-trend new" title="New this matchday">NEW</span>`)
          : ''

        // Streak flame (overall tab only)
        const streakN = (lbSubtab === 'overall') ? (lbStreakMap[uid] || 0) : 0
        const streakHtml = streakN >= 3 ? `<span class="lb-streak" title="${streakN} in a row">🔥${streakN}</span>` : ''

        // (Projected winnings used to render here per row — moved to the Prize Pool
        // dashboard card to reduce row clutter and avoid noisy mid-tournament estimates.)

        // Matchday tab uses simpler stats
        const hasAnyStats = (s.points || 0) > 0 || (s.exact || 0) > 0 || (s.gd || 0) > 0 || (s.result || 0) > 0 || (s.wrong || 0) > 0
        const statsLineOverall = hasAnyStats
          ? `<span><b class="text-ink-900">${correct}</b> correct</span>
             <span class="text-ink-300">·</span>
             <span><b class="text-brand-700">${s.exact || 0}</b> exact</span>`
          : `<span class="text-ink-400 italic">Awaiting kickoff…</span>`
        const statsLineMatchday = (s.points || 0) > 0
          ? `<span><b class="text-brand-700">${s.points || 0}</b> on this matchday</span>`
          : `<span class="text-ink-400 italic">No points yet</span>`
        const statsLine = lbSubtab === 'matchday' ? statsLineMatchday : statsLineOverall

        return `
        <div class="lb-row lb-row-compact ${isMe ? 'is-me' : ''} flex items-center gap-3"
             data-uid="${uid}" data-points="${s.points || 0}" data-rank="${rank}">
          <div class="shrink-0">${rankDisplay}</div>
          <div class="shrink-0">
            ${getAvatarHtml(s.name, s.avatar_url, rank, 32)}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="player-name truncate">${s.name || 'Anonymous'}</span>
              ${isMe ? '<span class="you-label text-[10px] font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">YOU</span>' : ''}
              ${trendHtml}
              ${streakHtml}
              ${leaderboardBadgeIcons(s, rank)}
            </div>
            <div class="player-stats text-ink-500 flex items-center gap-2 flex-wrap">
              ${statsLine}
            </div>
          </div>
          <div class="text-right shrink-0">
            <div class="points-num font-bold text-brand-700" data-points-el>${s.points || 0}</div>
            <div class="points-label text-ink-400 uppercase tracking-wider font-semibold">pts</div>
          </div>
        </div>`
      }).join('')

      // ===== H2H tap-to-open: attach click handler to every leaderboard row =====
      // Tapping a row opens a head-to-head modal comparing you against that player.
      // Tapping your own row is a no-op (handled inside openH2H).
      // Uses addEventListener + dedup guard so realtime re-renders don't stack listeners. (Polish 3)
      c.querySelectorAll('[data-uid]').forEach(el => {
        const uid = el.dataset.uid
        if (uid === myId) return  // skip self — no rivalry with yourself
        if (el.dataset.h2hBound) return  // don't double-bind on re-renders
        el.style.cursor = 'pointer'
        el.addEventListener('click', () => openH2H(uid))
        el.dataset.h2hBound = '1'

        // Tiny chevron in the right edge to signal tappability. (Polish 2)
        if (!el.querySelector('.h2h-chevron')) {
          // Ensure parent is positioned so the absolute child anchors correctly
          if (getComputedStyle(el).position === 'static') el.style.position = 'relative'
          const chev = document.createElement('div')
          chev.className = 'h2h-chevron'
          chev.textContent = '›'
          chev.style.cssText = 'position:absolute;right:8px;top:50%;transform:translateY(-50%);color:rgba(10,15,13,0.25);font-size:18px;font-weight:bold;pointer-events:none;'
          el.appendChild(chev)
        }
      })

      // ===== FLIP: apply animations on the next frame =====
      if (!hadAnyRows) return // first paint — let the natural fade happen
      requestAnimationFrame(() => {
        let somethingChanged = false
        c.querySelectorAll('[data-uid]').forEach(el => {
          const uid = el.dataset.uid
          const newRect = el.getBoundingClientRect()
          const oldRect = oldRects[uid]
          const newRank = parseInt(el.dataset.rank, 10)
          const oldRank = oldRanks[uid]
          const newPts = parseInt(el.dataset.points, 10)
          const oldPts = oldPoints[uid]

          if (!oldRect) {
            // Newly appeared row — slide it in
            el.classList.add('lb-new')
            setTimeout(() => el.classList.remove('lb-new'), 420)
            somethingChanged = true
            return
          }

          const dy = oldRect.top - newRect.top
          if (Math.abs(dy) > 1) {
            // FLIP translate from old position back to new
            el.animate(
              [
                { transform: `translateY(${dy}px)` },
                { transform: 'translateY(0)' }
              ],
              { duration: 520, easing: 'cubic-bezier(0.32, 0.72, 0, 1)' }
            )
            somethingChanged = true
          }

          // Rank-change glow + delta badge (transient, separate from persistent trend)
          if (oldRank !== undefined && newRank !== oldRank) {
            const movedUp = newRank < oldRank
            el.classList.add(movedUp ? 'lb-up' : 'lb-down')
            const wrap = el.querySelector('[data-rank-wrap]')
            if (wrap) {
              const delta = Math.abs(newRank - oldRank)
              const badge = document.createElement('span')
              badge.className = `rank-delta ${movedUp ? 'up' : 'down'}`
              badge.textContent = (movedUp ? '▲' : '▼') + delta
              wrap.appendChild(badge)
              setTimeout(() => badge.remove(), 1300)
            }
            setTimeout(() => el.classList.remove('lb-up', 'lb-down'), 1400)
            somethingChanged = true
          }

          // Points pulse
          if (oldPts !== undefined && newPts !== oldPts) {
            const pEl = el.querySelector('[data-points-el]')
            if (pEl) {
              pEl.classList.remove('pts-pulse')
              void pEl.offsetWidth
              pEl.classList.add('pts-pulse')
            }
            somethingChanged = true
          }
        })

        // Pulse the live-dot once if anything moved
        if (somethingChanged) {
          const dot = document.getElementById('lb-live-dot')
          if (dot) {
            dot.classList.remove('flash')
            void dot.offsetWidth
            dot.classList.add('flash')
            setTimeout(() => dot.classList.remove('flash'), 950)
          }
        }
      })
    }

    // ============== REALTIME ==============
    let prizePollInterval = null

   function setupRealtime() {
  // 1) Predictions: ALL events (kept for leaderboard refresh when someone submits)
  // Also refreshes Match Preview so the "X/Y locked in" counter stays live.
  supabaseClient.channel('lb')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'predictions' }, () => {
      refreshSocialCaches().then(() => {
        loadLeaderboard(); loadFixtures(); loadHome()
      })
    })
    .subscribe((status) => {
      if (status !== 'SUBSCRIBED') console.log('LB channel status:', status)
    })

  // 1b) Results: this is where the bonus engine actually writes points.
  // Watching `predictions.points_awarded` (the old listener) was dead — that column
  // is never updated. The engine writes to prediction_results.final_points. (Bug 4)
  // REQUIRES: ALTER PUBLICATION supabase_realtime ADD TABLE prediction_results;
  //           ALTER TABLE prediction_results REPLICA IDENTITY FULL;
  supabaseClient.channel('results')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'prediction_results' }, (payload) => {
      const myId = getUser()?.id
      const newPts = payload.new?.final_points || 0
      const oldPts = payload.old?.final_points || 0
      const basePts = payload.new?.base_points || 0
      if (myId && payload.new?.user_id === myId && newPts > 0 && newPts !== oldPts) {
        showToast(`You scored ${newPts} points!`, 'success')
        // Surface a share prompt for noteworthy scores. Big points = "I want to flex".
        // Trigger on exact (base_points === 5) OR final_points >= 7 (multiplier/bonus territory).
        if (basePts === 5 || newPts >= 7) {
          const fixtureId = payload.new?.fixture_id
          const fixture = fixtures.find(f => f.id === fixtureId)
          if (fixture) {
            const matchLabel = `${fixture.home_team} vs ${fixture.away_team}`
            const score = `${payload.new?.home_prediction ?? '?'}–${payload.new?.away_prediction ?? '?'}`
            // Show a small inline prompt — non-intrusive
            setTimeout(() => promptShareScore(newPts, matchLabel, score, basePts === 5), 800)
          }
        }
      }
      // Refresh the local cache so badges, fixture cards, recent-results all update.
      // Also refresh social caches so Hot Takes pick up the new points.
      Promise.all([refreshMyResultsCache(), refreshSocialCaches()]).then(() => {
        loadLeaderboard(); loadHome(); loadFixtures()
      })
    })
    .subscribe((status) => {
      if (status !== 'SUBSCRIBED') console.log('Results channel status:', status)
    })

  // 2) Fixtures: ALL events
  supabaseClient.channel('fx')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'fixtures' }, async (payload) => {
      // Notify when a final result is first entered
      if (payload.eventType === 'UPDATE' && payload.new?.home_score !== null && payload.new?.away_score !== null) {
        const hadScoreBefore = payload.old?.home_score !== null && payload.old?.away_score !== null
        if (!hadScoreBefore) {
          showToast(`Result: ${payload.new.home_team} ${payload.new.home_score}–${payload.new.away_score} ${payload.new.away_team}`, 'result')
        }
      }
      await loadFixtures()
      loadLeaderboard()
      loadHome()
      // If admin just scored the Final (or the last unscored match),
      // celebrate. Slight delay so leaderboard / prediction_results have
      // a moment to settle before we read them.
      if (payload.eventType === 'UPDATE' && payload.new?.home_score !== null && payload.new?.away_score !== null) {
        setTimeout(() => {
          try { checkAndCelebrateTournamentEnd({ trigger: 'realtime' }) } catch (e) { console.error('[champion] realtime check failed:', e) }
        }, 1500)
      }
    })
    .subscribe((status) => {
      if (status !== 'SUBSCRIBED') console.log('FX channel status:', status)
    })

  // 3) Profiles
  supabaseClient.channel('prize-pool')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, (payload) => {
      console.log('[Realtime] Profile change detected:', payload.eventType, payload.new?.id)

      // Detect admin revoking this user's paid status while they're in the app.
      // The 'payment-status-' channel only runs while on the gate, so paid users
      // already inside the app rely on this listener to catch the revoke.
      // We don't trust payload.old (Supabase needs REPLICA IDENTITY FULL for it)
      // and we don't fully trust the cached profile either (it can lag). The
      // most reliable signal: is the user actually in the normal app right now?
      const myId = (typeof getUser === 'function') ? getUser()?.id : null
      const gateEl = document.getElementById('payment-gate')
      const userIsInApp = gateEl && gateEl.classList.contains('hidden')
      if (
        myId &&
        payload.eventType === 'UPDATE' &&
        payload.new?.id === myId &&
        payload.new?.fee_paid === false &&
        userIsInApp
      ) {
        const cached = (typeof getProfile === 'function') ? getProfile() : null
        if (cached) cached.fee_paid = false
        showModal({
          icon: '🔒',
          title: 'Payment status revoked',
          message: 'An admin has marked your entry fee as unpaid. You will be signed out. Please contact the admin if this is a mistake.',
          actions: [
            { text: 'OK', onclick: 'beginRevokeSignOut()', class: 'bg-red-600 text-white' }
          ]
        })
        return
      }

      loadHome()
      loadLeaderboard()
    })
    .subscribe((status) => {
      console.log('[Realtime] Prize pool channel status:', status)
    })

  // 4) Prize settings
  supabaseClient.channel('prize-settings')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'prize_settings' }, () => {
      loadHome()
    })
    .subscribe((status) => {
      console.log('[Realtime] Prize settings channel status:', status)
    })

  // 5) System settings — private leagues toggle (realtime sync from admin panel)
  supabaseClient.channel('system-settings')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'system_settings' }, (payload) => {
      const newVal = payload.new?.private_leagues_enabled
      if (typeof newVal !== 'boolean') return

      const oldVal = privateLeaguesEnabled
      privateLeaguesEnabled = newVal
      console.log('[Realtime] Private leagues toggled:', oldVal, '→', newVal)

      // Always re-render leagues UI if user is on profile tab
      const profileTab = document.getElementById('tab-profile')
      if (profileTab && !profileTab.classList.contains('hidden')) {
        loadMyLeagues()
      }

      // If toggled OFF, kick everyone out of league views immediately
      if (newVal === false) {
        if (typeof enforceLeagueAccessLockout === 'function') enforceLeagueAccessLockout('disabled')
      }

      // Show toast — fire whenever local cache disagreed with the new value
      // (Supabase doesn't always send accurate payload.old; we trust our own cache)
      // FIX: Only toast after initial load is complete, not on login/realtime connect
      if (_systemSettingsInitialized && oldVal !== newVal) {
        showToast(newVal ? '🎉 Private leagues are now enabled!' : '🚫 Private leagues have been disabled', 'info')
      }
    })
    .subscribe((status) => {
      console.log('[Realtime] System settings channel status:', status)
    })

  // Fallback poll for the global toggle — covers cases where realtime is
  // disabled on the system_settings table or the websocket drops
  if (window._privateLeaguesPollInterval) clearInterval(window._privateLeaguesPollInterval)
  window._privateLeaguesPollInterval = setInterval(async () => {
    if (document.visibilityState !== 'visible') return
    try {
      const { data } = await getSystemSettings()
      const dbVal = !!(data?.private_leagues_enabled)
      if (dbVal !== privateLeaguesEnabled) {
        const oldVal = privateLeaguesEnabled
        privateLeaguesEnabled = dbVal
        console.log('[Poll] Private leagues drift detected:', oldVal, '→', dbVal)
        // FIX: Only toast after initial load is complete
        if (_systemSettingsInitialized) {
          showToast(dbVal ? '🎉 Private leagues are now enabled!' : '🚫 Private leagues have been disabled', 'info')
        }
        if (dbVal === false && typeof enforceLeagueAccessLockout === 'function') {
          enforceLeagueAccessLockout('disabled')
        }
        const profileTab = document.getElementById('tab-profile')
        if (profileTab && !profileTab.classList.contains('hidden')) {
          loadMyLeagues()
        }
      }
    } catch (e) {
      // silent
    }
  }, 15000)

  // Fallback: poll prize pool every 10 seconds in case realtime fails
  if (prizePollInterval) clearInterval(prizePollInterval)
  prizePollInterval = setInterval(() => {
    if (document.visibilityState === 'visible') {
      loadHomePrizePoolOnly()
    }
  }, 10000)
}

    // Lightweight prize pool refresh without re-rendering everything
    async function loadHomePrizePoolOnly() {
      try {
        const breakdown = await fetchPrizeBreakdown()
        if (!breakdown || breakdown.gross <= 0) return
        renderPrizeDashboard(breakdown, true)
      } catch (e) { /* silent */ }
    }

    // ============== PRIZE POOL DASHBOARD ==============
    /* DB CHANGE for the transparent house-fee dashboard:
     *   ALTER TABLE prize_settings ADD COLUMN house_fee_pct NUMERIC DEFAULT 0;
     *   ALTER TABLE prize_settings ADD COLUMN house_fee_note TEXT DEFAULT 'Organizing & hosting';
     *   ALTER TABLE prize_settings ADD COLUMN split_1st NUMERIC DEFAULT 50;
     *   ALTER TABLE prize_settings ADD COLUMN split_2nd NUMERIC DEFAULT 30;
     *   ALTER TABLE prize_settings ADD COLUMN split_3rd NUMERIC DEFAULT 20;
     * If missing, the code falls back to 0% / 50-30-20 silently.
     */
    function computePrizeBreakdown(s, paidCount) {
      const fee = Number(s.entry_fee) || 0
      const gross = s.manual_override
        ? (Number(s.manual_amount) || 0)
        : paidCount * fee
      const housePct = Math.max(0, Math.min(100, Number(s.house_fee_pct) || 0))
      const houseFee = gross * (housePct / 100)
      const net = Math.max(0, gross - houseFee)
      const s1 = Number(s.split_1st) || 50
      const s2 = Number(s.split_2nd) || 30
      const s3 = Number(s.split_3rd) || 20
      const totalSplit = (s1 + s2 + s3) || 100
      return {
        currency: s.currency || 'Nu.',
        paidCount,
        entryFee: fee,
        manualOverride: !!s.manual_override,
        gross,
        housePct,
        houseFee,
        houseNote: s.house_fee_note || 'Organizing & hosting',
        net,
        splits: [
          { place: '1st', emoji: '🥇', pct: s1 / totalSplit * 100, amount: net * s1 / totalSplit },
          { place: '2nd', emoji: '🥈', pct: s2 / totalSplit * 100, amount: net * s2 / totalSplit },
          { place: '3rd', emoji: '🥉', pct: s3 / totalSplit * 100, amount: net * s3 / totalSplit }
        ]
      }
    }

    async function fetchPrizeBreakdown() {
      try {
        const { data: s } = await supabaseClient
          .from('prize_settings').select('*').eq('id', 1).single()
        const settings = s || {}
        const { data: profiles } = await supabaseClient
          .from('profiles').select('fee_paid').eq('fee_paid', true)
        const paidCount = profiles?.length || 0
        return computePrizeBreakdown(settings, paidCount)
      } catch (e) { return null }
    }

    function fmtMoney(cur, n) {
      return `${cur} ${Number(n).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    }

    function renderPrizeDashboard(b, animate = false) {
      const host = document.getElementById('home-prize-dashboard')
      if (!host) return
      host.classList.remove('hidden')

      const collectedLabel = b.manualOverride
        ? `Pool set by organizer`
        : `${b.paidCount} ${b.paidCount === 1 ? 'player' : 'players'} × ${fmtMoney(b.currency, b.entryFee)}`

      const houseRow = b.housePct > 0
        ? `
          <div class="prize-dash-row muted">
            <span>${b.houseNote}</span>
            <span>${b.housePct}%</span>
          </div>
          <div class="prize-dash-row deduct">
            <span>Organizer fee</span>
            <span>− ${fmtMoney(b.currency, b.houseFee)}</span>
          </div>`
        : `<div class="prize-dash-row muted"><span>Organizer fee</span><span>None — 100% goes to players</span></div>`

      host.innerHTML = `
        <div class="prize-dash">
          <div class="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70 mb-1">Prize Pool</div>
          <div class="prize-dash-amount ${animate ? 'prize-amount-anim' : ''}">${fmtMoney(b.currency, b.net)}</div>
          <div class="text-xs opacity-70 mt-0.5 mb-2.5">After ${b.housePct > 0 ? `${b.housePct}% organizer fee` : 'no deductions'} · ${b.paidCount} ${b.paidCount === 1 ? 'player' : 'players'} in</div>

          <!-- Top-3 quick peek (always visible — most engaging part) -->
          <div class="flex items-center gap-2 mb-2.5">
            ${b.splits.map(p => `
              <div class="flex-1 bg-white/5 border border-white/10 rounded-xl px-2 py-1.5 text-center">
                <div class="text-lg leading-none">${p.emoji}</div>
                <div class="text-[10px] opacity-60 mt-0.5">${p.place}</div>
                <div class="text-[13px] font-bold text-gold mt-0.5" style="font-variant-numeric:tabular-nums;">${fmtMoney(b.currency, p.amount)}</div>
              </div>
            `).join('')}
          </div>

          <button onclick="togglePrizeDashboard()" id="prize-dash-toggle"
              aria-label="Toggle breakdown"
              class="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white/70 rounded-full tap flex items-center justify-center z-10"
              style="width:28px;height:28px;">
              <svg id="prize-dash-toggle-icon" class="w-3.5 h-3.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>

          <div id="prize-dash-details" class="${prizeDashExpanded ? '' : 'hidden'} mt-4">
            <div class="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">Where the money goes</div>
            <div class="prize-dash-row">
              <span>Collected</span>
              <span>${fmtMoney(b.currency, b.gross)}</span>
            </div>
            <div class="prize-dash-row muted" style="font-size:11px;margin-top:-4px;">
              <span>${collectedLabel}</span>
              <span></span>
            </div>
            ${houseRow}
            <div class="prize-dash-divider solid"></div>
            <div class="prize-dash-row total">
              <span>Prize pool</span>
              <span>${fmtMoney(b.currency, b.net)}</span>
            </div>

            <div class="mt-4 space-y-0">
              ${b.splits.map(p => `
                <div class="prize-place-row">
                  <div class="prize-place-emoji">${p.emoji}</div>
                  <div class="prize-place-info">
                    <div class="prize-place-name">${p.place} Place</div>
                    <div class="prize-place-pct">${p.pct.toFixed(0)}% of prize pool</div>
                  </div>
                  <div class="prize-place-amount">${fmtMoney(b.currency, p.amount)}</div>
                </div>
              `).join('')}
            </div>

            <button onclick="loadHomePrizePoolOnly()" class="mt-3 w-full bg-white/5 hover:bg-white/10 text-white/70 text-[11px] font-semibold py-2 rounded-xl tap flex items-center justify-center gap-1.5">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h5M20 20v-5h-5M5 13a7 7 0 0011.95 4.95M19 11a7 7 0 00-11.95-4.95"/></svg>
              Refresh
            </button>
          </div>
        </div>`

      // Sync the toggle button label/icon with current state
      syncPrizeDashToggleUI()
    }

    function togglePrizeDashboard() {
      prizeDashExpanded = !prizeDashExpanded
      document.getElementById('prize-dash-details')?.classList.toggle('hidden', !prizeDashExpanded)
      syncPrizeDashToggleUI()
    }

    function syncPrizeDashToggleUI() {
      const label = document.getElementById('prize-dash-toggle-label')
      const icon = document.getElementById('prize-dash-toggle-icon')
      if (!label || !icon) return
      label.textContent = prizeDashExpanded ? 'Hide breakdown' : 'Show breakdown'
      icon.style.transform = prizeDashExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
    }

    // ============== LIVE COUNTDOWN TICKER (Feature 3) ==============
    function startCountdownTicker() {
      if (countdownTickerId) return
      countdownTickerId = setInterval(tickCountdowns, 1000)
    }
    function stopCountdownTicker() {
      if (countdownTickerId) { clearInterval(countdownTickerId); countdownTickerId = null }
    }
 function tickCountdowns() {
  const now = Date.now()

  // 1. Home page next-match countdown
  const homeCd = document.getElementById('home-next-countdown')
  if (homeCd && homeCd.dataset.cdHome) {
    const ms = new Date(homeCd.dataset.cdHome).getTime() - now
    if (ms <= 0) {
      homeCd.textContent = 'Kicking off now!'
      homeCd.className = 'next-match-countdown countdown-red'
      delete homeCd.dataset.cdHome
      setTimeout(() => { if (typeof loadHome === 'function') loadHome() }, 2000)
    } else {
      const mins = ms / 60000
      const hrs = mins / 60
      homeCd.textContent = `in ${msToCountdown(ms)}`
      
      // Color transition: green (>2h) → amber (30m-2h) → red (<30m)
      homeCd.classList.remove('countdown-green', 'countdown-amber', 'countdown-red')
      if (mins > 120) {
        homeCd.classList.add('next-match-countdown', 'countdown-green')
      } else if (mins > 30) {
        homeCd.classList.add('next-match-countdown', 'countdown-amber')
      } else {
        homeCd.classList.add('next-match-countdown', 'countdown-red')
      }
    }
  }

  // 2. Per-card mini countdowns on predictions tab
  document.querySelectorAll('[data-cd-card]').forEach(el => {
    const fId = el.dataset.cdCard
    const f = fixtures.find(x => x.id == fId)
    if (!f) return
    const ms = new Date(f.kickoff).getTime() - now
    if (ms <= 0) {
      if (typeof renderFixtures === 'function') renderFixtures()
    } else {
      el.textContent = msToCountdown(ms)
      const mins = ms / 60000
      el.classList.remove('card-countdown', 'urgent')
      if (mins > 120) {
        el.classList.add('card-countdown')
        el.style.background = '#F0FDF4'
        el.style.color = '#15803D'
      } else if (mins > 30) {
        el.classList.add('card-countdown')
        el.style.background = '#FEF3C7'
        el.style.color = '#92400E'
      } else {
        el.classList.add('card-countdown', 'urgent')
        el.style.background = '#FEE2E2'
        el.style.color = '#7F1D1D'
      }
    }
  })

  // 3. Lock-warning banner timer
  document.querySelectorAll('[data-lockwarn]').forEach(el => {
    const fId = el.dataset.lockwarn
    const f = fixtures.find(x => x.id == fId)
    if (!f) return
    const ms = new Date(f.kickoff).getTime() - now
    if (ms <= 0) {
      if (typeof renderFixtures === 'function') renderFixtures()
    } else {
      el.textContent = msToCountdown(ms)
      const banner = el.closest('.lock-warn')
      const mins = ms / 60000
      if (banner) {
        if (mins <= 30) {
          banner.classList.add('urgent')
        } else {
          banner.classList.remove('urgent')
        }
      }
    }
  })


      // 2. Per-card mini countdowns on predictions tab
      document.querySelectorAll('[data-cd-card]').forEach(el => {
        const fId = el.dataset.cdCard
        const f = fixtures.find(x => x.id == fId)
        if (!f) return
        const ms = new Date(f.kickoff).getTime() - now
        if (ms <= 0) {
          // lock just elapsed — re-render
          if (typeof renderFixtures === 'function') renderFixtures()
        } else {
          el.textContent = msToCountdown(ms)
          if (ms <= 10 * 6e4 && !el.classList.contains('urgent')) el.classList.add('urgent')
        }
      })

      // 3. Lock-warning banner timer
      document.querySelectorAll('[data-lockwarn]').forEach(el => {
        const fId = el.dataset.lockwarn
        const f = fixtures.find(x => x.id == fId)
        if (!f) return
        const ms = new Date(f.kickoff).getTime() - now
        if (ms <= 0) {
          if (typeof renderFixtures === 'function') renderFixtures()
        } else {
          el.textContent = msToCountdown(ms)
          // escalate styling on the parent banner
          const banner = el.closest('.lock-warn')
          if (banner && ms <= 10 * 6e4) banner.classList.add('urgent')
        }
      })
    }

    
// ============== PROFILE HEADER & COLLAPSIBLE EDIT ==============

function toggleEditProfile() {
  const panel = document.getElementById('profile-edit-panel')
  const isHidden = panel.classList.contains('hidden')

  if (isHidden) {
    // Populate avatar from current profile
    const profile = getProfile()
    if (profile) {
      updateAvatarDisplay(profile.avatar_url, profile.name)
    }
    panel.classList.remove('hidden')
    panel.style.animation = 'glassFadeIn 300ms cubic-bezier(0.32, 0.72, 0, 1)'
  } else {
    panel.classList.add('hidden')
    panel.style.animation = ''
  }
}

async function updateProfileHeader() {
  const profile = getProfile()
  const myId = getUser()?.id

  if (!profile || !myId) return

  const name = profile.name || 'Player'
  const initials = getInitials(name)

  // Update avatar display (image or initials)
  updateAvatarDisplay(profile.avatar_url, name)

  const nameEl = document.getElementById('profile-header-name')
  const adminBadge = document.getElementById('profile-admin-badge')
  const verifiedBadge = document.getElementById('profile-verified-badge')
  if (nameEl) nameEl.textContent = name
  if (adminBadge) {
    if (isAdmin()) adminBadge.classList.remove('hidden')
    else adminBadge.classList.add('hidden')
  }
  if (verifiedBadge) {
    if (profile.fee_paid && !previewMode) verifiedBadge.classList.remove('hidden')
    else verifiedBadge.classList.add('hidden')
  }

  const deptEl = document.getElementById('profile-header-dept')
  if (deptEl) deptEl.textContent = profile.department || 'No department'

  const phoneEl = document.getElementById('profile-header-phone')
  const phone = profile.phone || ''
  if (phoneEl) {
    // Display the full number with a leading + if it looks international.
    let display = phone
    if (display && !display.startsWith('+')) display = '+' + display.replace(/\D/g, '')
    phoneEl.textContent = display || '—'
  }

  try {
    const [{ data: stats }, { data: myPreds }] = await Promise.all([
      getLeaderboard(),
      getMyPredictions()
    ])

    let myIdx = stats?.findIndex(s => s.user_id === myId || s.id === myId) ?? -1
    if (myIdx === -1 && stats?.length) myIdx = stats.findIndex(s => s.id === myId)

    const rankEl = document.getElementById('profile-header-rank')
    const ptsEl = document.getElementById('profile-header-points')
    const predEl = document.getElementById('profile-header-predictions')

    if (rankEl) rankEl.textContent = myIdx >= 0 ? '#' + (myIdx + 1) : '—'
    if (ptsEl) ptsEl.textContent = stats?.[myIdx]?.points || '0'
    if (predEl) predEl.textContent = myPreds?.length || '0'
  } catch (e) {
    console.warn('Could not load header stats:', e)
  }
}

async function updateProfileCards() {
  const profile = getProfile()
  const myId = getUser()?.id

  await updateProfileHeader()

  // Verified badge on profile header
  const verifiedBadge = document.getElementById('profile-verified-badge')
  if (verifiedBadge) {
    if (profile?.fee_paid && !previewMode) {
      verifiedBadge.classList.remove('hidden')
    } else {
      verifiedBadge.classList.add('hidden')
    }
  }

  const shareCard = document.getElementById('share-rank-card')
  const historyCard = document.getElementById('prediction-history-card')

  if (!myId || previewMode) {
    shareCard?.classList.add('hidden')
    historyCard?.classList.add('hidden')
    return
  }

  shareCard?.classList.remove('hidden')
  historyCard?.classList.remove('hidden')

  try {
    const [{ data: stats }, { data: myPreds }] = await Promise.all([
      getLeaderboard(),
      getMyPredictions()
    ])

    if (stats?.length) {
      let myIdx = stats.findIndex(s => s.user_id === myId || s.id === myId)
      if (myIdx === -1) myIdx = stats.findIndex(s => s.id === myId)
      const me = myIdx >= 0 ? stats[myIdx] : null

      const rankEl = document.getElementById('share-rank-value')
      const ptsEl = document.getElementById('share-points-value')
      const exactEl = document.getElementById('share-exact-value')
      const streakEl = document.getElementById('share-streak-value')
      const subtitle = document.getElementById('share-rank-subtitle')

      if (rankEl) rankEl.textContent = myIdx >= 0 ? '#' + (myIdx + 1) : '—'
      if (ptsEl) ptsEl.textContent = me?.points || 0
      if (exactEl) exactEl.textContent = me?.exact || 0
      if (streakEl) {
        // Bug 3 + true streak: consecutive most-recent finished predictions with points > 0.
        // Was: filter on legacy points_awarded (always 0) and count without break-on-miss.
        const myFinished = (myPreds || [])
          .map(p => ({ p, f: fixtures.find(x => x.id === p.fixture_id) }))
          .filter(x => x.f && x.f.home_score !== null)
          .sort((a, b) => new Date(b.f.kickoff) - new Date(a.f.kickoff))   // newest first
        let streak = 0
        for (const { f } of myFinished) {
          const r = myResultsByFixture[f.id]
          if (r && (r.base_points || 0) > 0) streak++
          else break
        }
        streakEl.textContent = streak
      }
      if (subtitle) subtitle.textContent = myIdx >= 0 ? 'of ' + stats.length + ' players' : 'Make predictions to rank'
    }
  } catch (e) {
    console.warn('Could not load stats for share card:', e)
  }
}

function togglePredictionHistory() {
  const wrapper = document.getElementById('history-content-wrap')
  const chevron = document.getElementById('history-chevron')
  const isOpen = wrapper.classList.contains('open')

  if (!isOpen) {
    wrapper.classList.add('open')
    chevron.style.transform = 'rotate(180deg)'
    renderPredictionHistory()
  } else {
    wrapper.classList.remove('open')
    chevron.style.transform = 'rotate(0deg)'
  }
}

async function renderPredictionHistory() {
  const list = document.getElementById('history-list')
  const summary = document.getElementById('history-summary')
  const myId = getUser()?.id

  if (!myId) {
    list.innerHTML = '<div class="text-center text-sm text-ink-500 py-4">Sign in to view history</div>'
    return
  }

  if (!fixtures.length || !predictions.length) {
    list.innerHTML = '<div class="flex items-center justify-center py-6"><span class="auth-spinner" style="width:20px;height:20px;border-width:2px;border-color:rgba(10,15,13,0.15);border-top-color:#D4A24C;"></span></div>'
    try {
      const [{ data: fxData }, { data: predData }] = await Promise.all([
        getFixtures(),
        getMyPredictions()
      ])
      fixtures = fxData || []
      predictions = predData || []
    } catch (e) {
      list.innerHTML = '<div class="text-center text-sm text-ink-500 py-4">Failed to load history</div>'
      return
    }
  }

  // Load this user's resolved results (with bonus breakdown) and index by fixture_id.
  // Falls back silently if the table is empty / engine hasn't run yet.
  let resultsByFixture = {}
  try {
    const results = await getUserResults(myId)
    ;(results || []).forEach(r => { resultsByFixture[r.fixture_id] = r })
  } catch (e) {
    console.warn('[history] could not load prediction_results, using legacy points:', e)
  }

  const history = predictions
    .map(p => {
      const f = fixtures.find(x => x.id === p.fixture_id)
      if (!f) return null
      const hasResult = f.home_score !== null && f.away_score !== null
      const resultRow = resultsByFixture[p.fixture_id] || null
      // Prefer the engine's final_points if present; fall back to legacy points_awarded.
      const pts = resultRow?.final_points ?? p.points_awarded ?? 0
      return {
        ...p,
        fixture: f,
        hasResult,
        pts,
        resultRow,
        predicted: p.home_prediction !== null && p.away_prediction !== null
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.fixture.kickoff) - new Date(a.fixture.kickoff))

  const totalPredicted = history.filter(h => h.predicted).length
  const totalScored = history.filter(h => h.hasResult).length
  const totalPoints = history.reduce((sum, h) => sum + h.pts, 0)

  summary.textContent = totalPredicted + ' predicted · ' + totalScored + ' scored · ' + totalPoints + ' pts'

  if (!history.length) {
    list.innerHTML = '<div class="text-center py-6"><div class="text-3xl mb-2 opacity-40">📋</div><div class="text-sm font-semibold text-ink-700">No predictions yet</div><p class="text-xs text-ink-500 mt-1">Start predicting to build your history</p></div>'
    return
  }

  list.innerHTML = history.map(h => {
    const f = h.fixture
    const pts = h.pts
    const predicted = h.predicted
    const r = h.resultRow // may be null for legacy / unscored

    // NEW: Format submitted_at timestamp in Bhutan time
    const submittedAt = h.submitted_at
      ? new Date(h.submitted_at).toLocaleString('en-US', {
          timeZone: 'Asia/Thimphu',
          month: 'short', day: 'numeric',
          hour: '2-digit', minute: '2-digit'
        }) + ' (Bhutan)'
      : null

    let statusBadge, scoreDisplay, breakdownLine = ''

    if (!predicted) {
      statusBadge = '<span class="text-[10px] font-bold bg-gray-100 text-gray-400 px-2 py-1 rounded-full">MISSED</span>'
      scoreDisplay = '<span class="text-xs text-ink-400">No prediction</span>'
    } else if (!h.hasResult) {
      statusBadge = '<span class="text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-1 rounded-full">PENDING</span>'
      scoreDisplay = '<span class="text-sm font-bold text-ink-900">' + h.home_prediction + ' – ' + h.away_prediction + '</span>'
    } else {
      // Badge tier should reflect prediction skill (base_points), not the multiplied total.
      // An exact score in the Final = 12.5 final pts but still "EXACT" tier.
      const basePts = r?.base_points ?? pts
      const ptsColor = basePts === 5 ? 'bg-emerald-500 text-white'
                     : basePts === 3 ? 'bg-blue-500 text-white'
                     : basePts === 2 ? 'bg-amber-500 text-white'
                     : 'bg-gray-200 text-gray-500'
      // Show the FINAL number on the badge so players see the real points they earned
      const ptsLabel = basePts === 5 ? '+' + pts + ' EXACT'
                     : basePts === 3 ? '+' + pts + ' GD'
                     : basePts === 2 ? '+' + pts + ' WIN'
                     : '0 PTS'
      statusBadge = '<span class="text-[10px] font-bold ' + ptsColor + ' px-2 py-1 rounded-full">' + ptsLabel + '</span>'
      scoreDisplay = '<div class="flex items-center gap-2"><span class="text-sm font-bold ' + (pts > 0 ? 'text-ink-900' : 'text-ink-400') + '">' + h.home_prediction + ' – ' + h.away_prediction + '</span><span class="text-ink-300 text-xs">vs</span><span class="text-sm font-bold text-ink-900">' + f.home_score + ' – ' + f.away_score + '</span></div>'

      // Build the breakdown line — show for EVERY scored prediction so players
      // always understand where their points came from (or why they got zero).
      if (r) {
        const parts = []
        const mult = r.stage_multiplier || 1
        const multBase = r.multiplied_base ?? basePts

        // Label the base tier so it's not just a bare number
        let baseLabel
        if (basePts === 5) baseLabel = '5 (exact)'
        else if (basePts === 3) baseLabel = '3 (goal diff)'
        else if (basePts === 2) baseLabel = '2 (winner)'
        else baseLabel = '0 (wrong)'

        if (mult !== 1 && basePts > 0) {
          parts.push(baseLabel + ' × ' + mult + '× = ' + multBase)
        } else {
          parts.push(baseLabel)
        }

        // Bonuses (skip the 'stage_multiplier' entry — already shown above)
        const bonusItems = (r.bonus_breakdown || []).filter(b => b.type !== 'stage_multiplier')
        bonusItems.forEach(b => {
          parts.push((b.emoji || '') + ' ' + b.label + ' +' + b.value)
        })

        breakdownLine = '<div class="text-[10px] text-ink-500 mt-1 leading-snug">' +
          parts.join(' &nbsp;·&nbsp; ') +
          ' &nbsp;=&nbsp; <b class="' + (pts > 0 ? 'text-ink-700' : 'text-ink-400') + '">' + pts + ' pts</b>' +
          '</div>'
      }
    }

    return '<div class="flex items-center gap-3 p-3 rounded-2xl ' + (h.hasResult ? (h.pts > 0 ? 'bg-emerald-50/50 border border-emerald-100' : 'bg-gray-50 border border-gray-100') : 'bg-paper border border-paper-border') + '"><div class="flex items-center gap-1.5 shrink-0">' + flagHtml(f.home_team, 20) + '<span class="text-xs font-bold text-ink-400">vs</span>' + flagHtml(f.away_team, 20) + '</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><span class="text-xs font-semibold text-ink-700 truncate">' + f.home_team + ' vs ' + f.away_team + '</span>' + statusBadge + '</div><div class="text-[11px] text-ink-500">' + new Date(f.kickoff).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' · ' + f.stage + '</div>' + (submittedAt ? '<div class="text-[10px] text-emerald-600 font-medium mt-0.5 flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Predicted: ' + submittedAt + '</div>' : '') + (predicted ? '<div class="mt-1">' + scoreDisplay + '</div>' : '') + breakdownLine + '</div></div>'
  }).join('')
}

async function shareRankOnWhatsApp() {
  const myId = getUser()?.id
  if (!myId) {
    showToast('Sign in to share your rank', 'info')
    return
  }

  try {
    const { data: stats } = await getLeaderboardFromResults()
    if (!stats?.length) {
      showToast('Leaderboard not ready yet', 'info')
      return
    }

 let myIdx = stats.findIndex(
  s => s.user_id === myId || s.id === myId
)

if (myIdx === -1) {
  myIdx = stats.findIndex(s => s.id === myId)
}

const me = myIdx >= 0 ? stats[myIdx] : null
const rank = myIdx >= 0 ? myIdx + 1 : '?'
const points = me?.points ?? 0
const total = stats.length
const myName = (getUser()?.user_metadata?.name) || me?.name || 'Player'

// Try image share first (native Web Share API on mobile); fall back to text.
await shareAchievementCard({
  type: 'rank',
  name: myName,
  rank, total, points
}).catch(e => {
  console.warn('[share] card share failed, falling back to text:', e)
  const appUrl = window.location.origin
  const message = `🏆 WC 2026 Prediction League\n\nI'm ranked *#${rank}* of ${total} with *${points} points!*\n\nThink you can beat me? Join the league 👇\n${appUrl}`
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
  showToast('Opening WhatsApp...', 'success')
})
  } catch (e) {
    console.error('Error sharing rank:', e)
    showToast('Failed to share rank', 'error')
  }
}

// ============== SHAREABLE ACHIEVEMENT CARDS ==============
// Canvas-rendered, 1080x1080 PNG. Designed for WhatsApp status / Instagram / Twitter.
// Multiple card types: 'rank', 'points', 'streak', 'badge', 'exact'.
//
// Distribution strategy:
//  1. Try navigator.share with image file (works on mobile Chrome/Safari)
//  2. Fall back to downloading PNG + opening WhatsApp text on desktop
//  3. Final fallback: pure text share
async function shareAchievementCard(opts) {
  // opts: { type, name, ...typeSpecificFields }
  // Returns Promise that resolves when share dialog opens
  const blob = await generateAchievementCardBlob(opts)
  if (!blob) throw new Error('Card generation returned no blob')

  const appUrl = window.location.origin
  const caption = buildShareCaption(opts, appUrl)
  const filename = `wcpl-${opts.type}-${Date.now()}.png`
  const file = new File([blob], filename, { type: 'image/png' })

  // Path 1: native share with files (best UX, mobile)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: 'WC 2026 Prediction League',
        text: caption
      })
      showToast('Shared!', 'success')
      return
    } catch (e) {
      // User cancelled or share failed — fall through to download path
      if (e.name === 'AbortError') return  // user cancelled, don't fall back
      console.warn('[share] native share failed:', e)
    }
  }

  // Path 2: download the image + open WhatsApp web with caption
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 5000)

  // Then offer WhatsApp text share
  setTimeout(() => {
    window.open(`https://wa.me/?text=${encodeURIComponent(caption)}`, '_blank')
  }, 200)
  showToast('Image saved · attach it in WhatsApp', 'success')
}

function buildShareCaption(opts, appUrl) {
  switch (opts.type) {
    case 'rank':
      return `🏆 I'm ranked #${opts.rank} of ${opts.total} on WC 2026 Predictions with ${opts.points} pts!\n\nThink you can beat me? 👇\n${appUrl}`
    case 'points':
      return `⚽ Just scored ${opts.points} points on ${opts.match} 🔥\n\nJoin the league 👇\n${appUrl}`
    case 'streak':
      return `🔥 ${opts.streak}-match prediction streak on WC 2026 Predictions!\n\nThink you can do better? 👇\n${appUrl}`
    case 'badge':
      return `🎯 Just earned the "${opts.badge}" badge on WC 2026 Predictions!\n\nJoin the league 👇\n${appUrl}`
    case 'exact':
      return `🎯 Predicted ${opts.match} exactly — ${opts.score}! +${opts.points} pts 🔥\n\nJoin the league 👇\n${appUrl}`
    default:
      return `🏆 WC 2026 Prediction League\n\nJoin 👇\n${appUrl}`
  }
}

// Renders the achievement card to a 1080x1080 canvas and returns a PNG Blob.
async function generateAchievementCardBlob(opts) {
  const SIZE = 1080
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')

  // ===== Background: deep navy gradient with subtle pattern =====
  const bgGrad = ctx.createLinearGradient(0, 0, SIZE, SIZE)
  bgGrad.addColorStop(0, '#0B1221')
  bgGrad.addColorStop(0.5, '#152849')
  bgGrad.addColorStop(1, '#1E3A5F')
  ctx.fillStyle = bgGrad
  ctx.fillRect(0, 0, SIZE, SIZE)

  // Subtle dot pattern overlay
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)'
  for (let y = 0; y < SIZE; y += 32) {
    for (let x = 0; x < SIZE; x += 32) {
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Gold accent corner glow (top-right)
  const glow = ctx.createRadialGradient(SIZE - 100, 100, 0, SIZE - 100, 100, 500)
  glow.addColorStop(0, 'rgba(212, 162, 76, 0.35)')
  glow.addColorStop(1, 'rgba(212, 162, 76, 0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, SIZE, SIZE)

  // ===== Header: League brand =====
  ctx.fillStyle = '#D4A24C'
  ctx.font = 'bold 32px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('🏆  WC 2026 PREDICTION LEAGUE', SIZE / 2, 90)

  // Decorative line under header
  ctx.strokeStyle = 'rgba(212, 162, 76, 0.4)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(SIZE / 2 - 200, 115)
  ctx.lineTo(SIZE / 2 + 200, 115)
  ctx.stroke()

  // ===== Main card content (varies by type) =====
  await drawCardContent(ctx, opts, SIZE)

  // ===== Footer: URL =====
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.font = '24px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('wcpredictionleague.vercel.app', SIZE / 2, SIZE - 50)

  // Convert to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob)
      else reject(new Error('toBlob returned null'))
    }, 'image/png', 0.95)
  })
}

async function drawCardContent(ctx, opts, SIZE) {
  const cx = SIZE / 2
  ctx.textAlign = 'center'

  switch (opts.type) {
    case 'rank': {
      // Big rank number
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 88px system-ui, -apple-system, sans-serif'
      ctx.fillText('#' + opts.rank, cx, 280)

      // "OF N PLAYERS" caption
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      ctx.font = '32px system-ui, -apple-system, sans-serif'
      ctx.fillText(`OF ${opts.total} PLAYERS`, cx, 340)

      // Trophy emoji panel
      ctx.font = '180px system-ui, -apple-system, sans-serif'
      const trophyEmoji = opts.rank === 1 ? '🥇' : opts.rank === 2 ? '🥈' : opts.rank === 3 ? '🥉' : '🏆'
      ctx.fillText(trophyEmoji, cx, 540)

      // Name
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 52px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.name, cx, 660)

      // Points panel
      drawStatPanel(ctx, cx, 760, opts.points + ' pts', 'TOTAL SCORE')
      break
    }
    case 'points': {
      // "+N POINTS" big
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 220px system-ui, -apple-system, sans-serif'
      ctx.fillText('+' + opts.points, cx, 380)

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.font = '40px system-ui, -apple-system, sans-serif'
      ctx.fillText('POINTS', cx, 440)

      // Match label
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 44px system-ui, -apple-system, sans-serif'
      wrapText(ctx, opts.match || '', cx, 600, SIZE - 200, 56)

      // Score
      if (opts.score) {
        ctx.fillStyle = '#D4A24C'
        ctx.font = 'bold 80px system-ui, -apple-system, sans-serif'
        ctx.fillText(opts.score, cx, 760)
      }

      // Name
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.font = '32px system-ui, -apple-system, sans-serif'
      ctx.fillText('— ' + opts.name, cx, 880)
      break
    }
    case 'streak': {
      // Fire emoji row scales with streak
      const fireCount = Math.min(opts.streak, 5)
      const fires = '🔥'.repeat(fireCount)
      ctx.font = '120px system-ui, -apple-system, sans-serif'
      ctx.fillText(fires, cx, 320)

      // Big streak number
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 260px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.streak, cx, 560)

      // Label
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 50px system-ui, -apple-system, sans-serif'
      ctx.fillText('MATCH WIN STREAK', cx, 660)

      // Tier label (e.g., "On Fire", "Legendary")
      if (opts.tier) {
        ctx.fillStyle = '#D4A24C'
        ctx.font = 'italic 38px system-ui, -apple-system, sans-serif'
        ctx.fillText('· ' + opts.tier + ' ·', cx, 720)
      }

      // Name
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 48px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.name, cx, 860)
      break
    }
    case 'badge': {
      // Badge emoji huge
      ctx.font = '260px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.emoji || '🎯', cx, 430)

      // "UNLOCKED" label
      ctx.fillStyle = 'rgba(212, 162, 76, 0.7)'
      ctx.font = 'bold 32px system-ui, -apple-system, sans-serif'
      ctx.fillText('BADGE UNLOCKED', cx, 540)

      // Badge name
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 72px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.badge, cx, 640)

      // Badge description
      if (opts.description) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.font = '32px system-ui, -apple-system, sans-serif'
        wrapText(ctx, opts.description, cx, 720, SIZE - 200, 42)
      }

      // Name
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 48px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.name, cx, 880)
      break
    }
    case 'exact': {
      // 🎯 EXACT! big
      ctx.font = '160px system-ui, -apple-system, sans-serif'
      ctx.fillText('🎯', cx, 320)

      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 88px system-ui, -apple-system, sans-serif'
      ctx.fillText('EXACT SCORE!', cx, 430)

      // Match
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 44px system-ui, -apple-system, sans-serif'
      wrapText(ctx, opts.match || '', cx, 540, SIZE - 200, 56)

      // Predicted score
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 96px system-ui, -apple-system, sans-serif'
      ctx.fillText(opts.score, cx, 700)

      // Points earned
      drawStatPanel(ctx, cx, 800, '+' + opts.points + ' pts', 'EARNED')
      break
    }
  }
}

// Rounded stat panel with big number + small label underneath
function drawStatPanel(ctx, cx, y, bigText, label) {
  const w = 360, h = 110
  const x = cx - w / 2
  ctx.fillStyle = 'rgba(212, 162, 76, 0.15)'
  ctx.strokeStyle = 'rgba(212, 162, 76, 0.5)'
  ctx.lineWidth = 2
  roundRect(ctx, x, y, w, h, 16)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = '#D4A24C'
  ctx.font = 'bold 50px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(bigText, cx, y + 60)

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.font = '20px system-ui, -apple-system, sans-serif'
  ctx.fillText(label, cx, y + 92)
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = (text || '').split(' ')
  let line = ''
  let curY = y
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' '
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      ctx.fillText(line, x, curY)
      line = words[n] + ' '
      curY += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), x, curY)
}

// Convenience wrappers — call these from feature code to fire share flows.
async function sharePointsAchievement(points, matchLabel, score) {
  const myName = (getUser()?.user_metadata?.name) || 'Player'
  return shareAchievementCard({ type: 'points', name: myName, points, match: matchLabel, score })
}

async function shareStreakAchievement(streak, tier) {
  const myName = (getUser()?.user_metadata?.name) || 'Player'
  return shareAchievementCard({ type: 'streak', name: myName, streak, tier })
}

async function shareBadgeAchievement(badge, emoji, description) {
  const myName = (getUser()?.user_metadata?.name) || 'Player'
  return shareAchievementCard({ type: 'badge', name: myName, badge, emoji, description })
}

async function shareExactAchievement(matchLabel, score, points) {
  const myName = (getUser()?.user_metadata?.name) || 'Player'
  return shareAchievementCard({ type: 'exact', name: myName, match: matchLabel, score, points })
}

// Expose globally so onclick="..." handlers work
window.sharePointsAchievement = sharePointsAchievement
window.shareStreakAchievement = shareStreakAchievement
window.shareBadgeAchievement = shareBadgeAchievement
window.shareExactAchievement = shareExactAchievement
window.shareAchievementCard = shareAchievementCard

// Non-intrusive floating prompt that appears after a noteworthy score.
// "You scored N pts — share?" with a dismiss × button. Auto-dismisses after 12s.
function promptShareScore(points, matchLabel, score, isExact) {
  // Remove any existing prompt
  const existing = document.getElementById('share-prompt')
  if (existing) existing.remove()

  const banner = document.createElement('div')
  banner.id = 'share-prompt'
  banner.style.cssText = `
    position: fixed; left: 50%; bottom: 90px; transform: translateX(-50%) translateY(20px);
    background: linear-gradient(135deg, #1E3A5F, #0B1221);
    color: #fff; padding: 14px 18px; border-radius: 18px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,162,76,0.4);
    z-index: 60; max-width: calc(100vw - 24px); width: 360px;
    display: flex; align-items: center; gap: 12px;
    opacity: 0; transition: opacity 240ms ease-out, transform 240ms ease-out;
    font-family: system-ui, -apple-system, sans-serif;
  `
  banner.innerHTML = `
    <div style="font-size: 32px; flex-shrink: 0;">${isExact ? '🎯' : '🔥'}</div>
    <div style="flex: 1; min-width: 0;">
      <div style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">+${points} pts ${isExact ? '— exact score!' : 'scored!'}</div>
      <div style="font-size: 11px; opacity: 0.75; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${matchLabel}</div>
    </div>
    <button id="share-prompt-btn" style="background: #D4A24C; color: #0B1221; border: 0; padding: 9px 14px; border-radius: 12px; font-weight: 700; font-size: 12px; cursor: pointer; flex-shrink: 0;">Share 🚀</button>
    <button id="share-prompt-close" style="background: rgba(255,255,255,0.1); color: #fff; border: 0; width: 28px; height: 28px; border-radius: 50%; cursor: pointer; flex-shrink: 0; font-size: 14px;">✕</button>
  `
  document.body.appendChild(banner)

  // Slide up
  requestAnimationFrame(() => {
    banner.style.opacity = '1'
    banner.style.transform = 'translateX(-50%) translateY(0)'
  })

  const close = () => {
    banner.style.opacity = '0'
    banner.style.transform = 'translateX(-50%) translateY(20px)'
    setTimeout(() => banner.remove(), 250)
  }

  banner.querySelector('#share-prompt-btn').onclick = () => {
    if (isExact) {
      shareExactAchievement(matchLabel, score, points).catch(e => console.warn('[share]', e))
    } else {
      sharePointsAchievement(points, matchLabel, score).catch(e => console.warn('[share]', e))
    }
    close()
  }
  banner.querySelector('#share-prompt-close').onclick = close

  // Auto-dismiss after 12s
  setTimeout(close, 12000)
}

window.promptShareScore = promptShareScore

// ============== BADGES (Feature 2) ==============
    // resultsByFixture (optional): { [fixture_id]: prediction_results row }
    // When provided, we use the engine's real points (base_points / final_points)
    // for streak detection. Without it, we fall back to legacy predictions.points_awarded.
    function computeMyBadges(resultsByFixture = {}) {
      // Inputs: predictions[] (current user), fixtures[], + leaderboard stats fetched separately
      const earned = new Set()
      const myId = getUser()?.id

      // Match each prediction to its fixture
      const finishedPreds = predictions
        .map(p => ({ p, f: fixtures.find(f => f.id === p.fixture_id) }))
        .filter(x => x.f && x.f.home_score !== null && x.f.away_score !== null)
        .sort((a, b) => new Date(a.f.kickoff) - new Date(b.f.kickoff))

      const exactCount = finishedPreds.filter(({ p, f }) =>
        p.home_prediction === f.home_score && p.away_prediction === f.away_score
      ).length

      if (exactCount >= 3) earned.add('nostradamus')
      if (exactCount >= 5) earned.add('sharpshoot')

      // Underdog King: 3+ correctly predicted draws
      const correctDraws = finishedPreds.filter(({ p, f }) =>
        f.home_score === f.away_score && p.home_prediction === p.away_prediction
      ).length
      if (correctDraws >= 3) earned.add('underdog')

      // Early Bird: any prediction submitted 24h+ before kickoff
      const earlyBird = predictions.some(p => {
        if (!p.submitted_at) return false
        const f = fixtures.find(x => x.id === p.fixture_id)
        if (!f) return false
        return new Date(f.kickoff) - new Date(p.submitted_at) >= 24 * 3600 * 1000
      })
      if (earlyBird) earned.add('earlybird')

      // On Fire: current streak of 3+ point-scoring predictions in finished matches.
      // FIX: prefer prediction_results.base_points (the engine's source of truth).
      // Falls back to legacy predictions.points_awarded only if no result row exists.
      let streak = 0
      for (let i = finishedPreds.length - 1; i >= 0; i--) {
        const { p, f } = finishedPreds[i]
        const r = resultsByFixture[f.id]
        const scored = r
          ? (r.base_points || 0) > 0
          : (p.points_awarded || 0) > 0
        if (scored) streak++
        else break
      }
      if (streak >= 3) earned.add('streak')

      // All In: predicted every FINISHED match (relaxed from "every fixture ever").
      // FIX: original required predictions.length === fixtures.length, which broke
      // whenever knockout fixtures were added mid-tournament. Now: if every match
      // that has resolved has a prediction from this user, they've gone all in so far.
      if (finishedPreds.length > 0) {
        const missedAny = finishedPreds.some(({ p }) =>
          p.home_prediction === null || p.away_prediction === null
        )
        if (!missedAny) earned.add('allin')
      }

      return { earned, streak, exactCount }
    }

    async function renderBadges() {
      const host = document.getElementById('profile-badges')
      const streakEl = document.getElementById('profile-streak')
      if (!host) return

      // Load this user's prediction_results so On Fire / streak use the engine's
      // real points (base_points), not the legacy predictions.points_awarded field.
      const myId = getUser()?.id
      let resultsByFixture = {}
      if (myId) {
        try {
          const results = await getUserResults(myId)
          ;(results || []).forEach(r => { resultsByFixture[r.fixture_id] = r })
        } catch (e) {
          console.warn('[badges] could not load prediction_results, using legacy points:', e)
        }
      }

      const { earned, streak } = computeMyBadges(resultsByFixture)

      // Champion + Centurion need leaderboard data
      try {
        const { data: stats } = await getLeaderboardFromResults()
        if (stats?.length) {
          const sorted = [...stats].sort((a, b) => (b.points || 0) - (a.points || 0))
          const me = sorted.find(s => s.user_id === myId || s.id === myId)
          if (me) {
            if ((me.points || 0) >= 100) earned.add('centurion')
            if (sorted[0] && (sorted[0].user_id === myId || sorted[0].id === myId) && (me.points || 0) > 0) earned.add('champion')
          }
        }
      } catch (e) { /* leaderboard not available */ }

      host.innerHTML = BADGES.map(b => {
        const got = earned.has(b.id)
        const shareAttr = got
          ? ` onclick="shareBadgeAchievement('${b.name.replace(/'/g, "\\'")}', '${b.icon.replace(/'/g, "\\'")}', '${b.desc.replace(/'/g, "\\'")}').catch(e => console.warn(e))" style="cursor:pointer;" title="Tap to share"`
          : ''
        return `
          <div class="badge-card ${got ? 'earned' : 'locked'}"${shareAttr}>
            ${got ? '<div class="badge-earned-tick">✓</div>' : ''}
            ${got ? '<div class="badge-share-hint" style="position:absolute;top:6px;left:6px;font-size:11px;background:rgba(212,162,76,0.9);color:#0B1221;padding:2px 6px;border-radius:8px;font-weight:bold;">SHARE</div>' : ''}
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
          </div>`
      }).join('')

      if (streak >= 2) {
        streakEl.className = 'streak-chip'
        // Make streak chip tappable to share for streaks ≥ 3 (real achievement)
        if (streak >= 3) {
          const tier = streak >= 8 ? 'Legendary' : streak >= 5 ? 'On Fire' : 'Hot Streak'
          streakEl.innerHTML = `🔥 <span>${streak} in a row</span> <span style="margin-left:6px;background:rgba(212,162,76,0.9);color:#0B1221;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:bold;">SHARE</span>`
          streakEl.style.cursor = 'pointer'
          streakEl.onclick = () => shareStreakAchievement(streak, tier).catch(e => console.warn(e))
        } else {
          streakEl.innerHTML = `🔥 <span>${streak} in a row</span>`
          streakEl.style.cursor = ''
          streakEl.onclick = null
        }
      } else {
        streakEl.className = 'hidden'
      }
    }

    // Compute small badge icons to show next to a user's name in the leaderboard
    function leaderboardBadgeIcons(s, rank) {
      const icons = []
      if (rank === 1 && (s.points || 0) > 0) icons.push('👑')
      if ((s.exact || 0) >= 5) icons.push('🎯')
      else if ((s.exact || 0) >= 3) icons.push('🔮')
      if ((s.points || 0) >= 100) icons.push('💯')
      return icons.map(i => `<span class="lb-badge" title="badge">${i}</span>`).join('')
    }

    // ============== PREVIEW MODE (Feature 4) ==============
    async function enterPreviewMode() {
      previewMode = true;
      document.getElementById('auth-screen').classList.add('hidden')
      document.getElementById('app-shell').classList.remove('hidden')
      document.getElementById('preview-banner').classList.remove('hidden')

      // Hide stuff that doesn't apply to guests
      document.getElementById('user-name').textContent = 'Guest'
      const logoutBtn = document.querySelector('[onclick="confirmLogout()"]')
      if (logoutBtn) logoutBtn.style.display = ''
      const profileNav = document.querySelector('[data-tab="profile"]')
      if (profileNav) profileNav.style.display = ''
      // Hide the personal-stats hero card (no user data to show)
      const hero = document.querySelector('#tab-home .hero-card')
      if (hero) hero.style.display = ''

      // Fetch fixtures anonymously
      try {
        if (typeof supabaseClient === 'undefined' || !supabaseClient) {
          fixtures = []
        } else {
          const { data } = await supabaseClient
            .from('fixtures')
            .select('*')
            .order('kickoff', { ascending: true })
          fixtures = data || []
        }
      } catch (e) {
        console.warn('[Preview] Could not load fixtures:', e)
        fixtures = []
      }
      predictions = []

      renderFixtures()
      updatePredictionCount()
      await loadHome()
      renderPreviewLeaderboard()
      startCountdownTicker()
      switchTab('predictions')
    }

function exitPreviewMode() {
  previewMode = false;
  
  // Restore all hidden elements
  const logoutBtn = document.querySelector('[onclick="confirmLogout()"]');
  if (logoutBtn) logoutBtn.style.display = '';
  
  const profileNav = document.querySelector('[data-tab="profile"]');
  if (profileNav) profileNav.style.display = '';
  
  const hero = document.querySelector('#tab-home .hero-card');
  if (hero) hero.style.display = '';
  
  const subOv = document.getElementById('lb-subtab-overall');
  if (subOv) subOv.closest('.flex.items-center.justify-between')?.classList.remove('hidden');
  
  // Hide preview-specific elements
  document.getElementById('preview-banner').classList.add('hidden');
  
  // Hide app shell and show auth
  document.getElementById('app-shell').classList.add('hidden');
  const gate = document.getElementById('payment-gate');
  if (gate) {
    gate.classList.add('hidden');
    gate.style.display = ''; // Clear inline display
  }
  stopCountdownTicker();
  showAuth();
}
    function renderPreviewLeaderboard() {
      const c = document.getElementById('leaderboard-list')
      if (!c) return
      // Hide strip, CTA, prize strip, and sub-tabs in preview mode (no real data)
      const strip = document.getElementById('lb-next-strip'); if (strip) strip.classList.add('hidden')
      const cta = document.getElementById('lb-cta'); if (cta) { cta.classList.add('hidden'); cta.innerHTML = '' }
      const prize = document.getElementById('lb-prize'); if (prize) { prize.classList.add('hidden'); prize.innerHTML = '' }
      const subOv = document.getElementById('lb-subtab-overall'); const subMd = document.getElementById('lb-subtab-matchday')
      if (subOv) subOv.closest('.flex.items-center.justify-between')?.classList.add('hidden')
      // Mock leaderboard data — blurred, just to show the structure
      const fake = [
        { name: 'Karma D.',     points: 87, exact: 6, dept: 'Operations'    },
        { name: 'Sonam W.',     points: 74, exact: 4, dept: 'Engineering'   },
        { name: 'Pema T.',      points: 68, exact: 3, dept: 'Finance'       },
        { name: 'Tashi N.',     points: 55, exact: 2, dept: 'HR'            },
        { name: 'Jigme P.',     points: 41, exact: 2, dept: 'Sales'         },
        { name: 'Tenzin K.',    points: 33, exact: 1, dept: 'Marketing'     }
      ]
      c.innerHTML = `
        <div class="preview-leaderboard-wrap">
          <div class="preview-blur">
            ${fake.map((s, i) => {
              const rank = i + 1
              const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : ''
              const medalClass = rank === 1 ? 'rank-medal-gold' : rank === 2 ? 'rank-medal-silver' : rank === 3 ? 'rank-medal-bronze' : ''
              const rankDisp = medal
                ? `<div class="${medalClass}">${medal}</div>`
                : `<div class="rank-num w-10 h-10 rounded-xl bg-paper border border-paper-border flex items-center justify-center font-bold text-sm text-ink-500">${rank}</div>`
              return `
                <div class="lb-row-compact flex items-center gap-3">
                  ${rankDisp}
                  <div class="shrink-0">
                    ${getAvatarHtml(s.name, null, rank, 32)}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="player-name truncate">${s.name}</div>
                    <div class="player-stats text-ink-500">${s.exact} exact · ${s.dept}</div>
                  </div>
                  <div class="text-right shrink-0">
                    <div class="points-num font-bold text-brand-700">${s.points}</div>
                    <div class="points-label text-ink-400 uppercase tracking-wider font-semibold">pts</div>
                  </div>
                </div>`
            }).join('')}
          </div>
          <div class="preview-leaderboard-overlay">
            <div class="text-4xl mb-2">🔒</div>
            <div class="font-bold text-ink-900 text-base mb-1">Sign in to see the real rankings</div>
            <p class="text-xs text-ink-500 mb-4 max-w-xs">Compete with real players for the prize pool. Join the league to see live scores and your rank.</p>
            <button onclick="exitPreviewMode()" class="bg-brand-900 text-white font-semibold px-5 py-2.5 rounded-xl text-sm tap">Sign in</button>
          </div>
        </div>`
    }

    // ============== NAV ==============
    function showAuth() {
      document.getElementById('auth-screen').classList.remove('hidden')
      document.getElementById('app-shell').classList.add('hidden')
      loadAuthStats()
    }

    // Load Matches / Teams counts from Supabase for the login screen.
    // The real table is `fixtures` (not `matches`), and there is no `teams`
    // table — teams are stored as home_team/away_team strings on fixture
    // rows, so we derive the team count by collecting distinct names.
    async function loadAuthStats() {
      const mEl = document.getElementById('auth-stat-matches')
      const tEl = document.getElementById('auth-stat-teams')
      if (!mEl || !tEl) return
      try {
        // Pull team names so we can both count matches and derive teams.
        const { data, count, error } = await supabaseClient
          .from('fixtures')
          .select('home_team, away_team', { count: 'exact' })

        if (error) {
          console.warn('[loadAuthStats] fixtures query error:', error)
          throw error
        }

        const matchCount = (typeof count === 'number') ? count : (data?.length || 0)
        mEl.textContent = matchCount

        // Normalize team names to prevent duplicates like "USA" vs "United States"
        // and filter out all placeholder/TBD variants
        const normalizeTeam = (name) => {
          if (!name || typeof name !== 'string') return null
          const n = name.toLowerCase().trim()
          // Reject placeholders and empty strings
          if (
            n === '' ||
            n === 'tbd' ||
            n === 'tbc' ||
            n === 'to be determined' ||
            n === 'to be confirmed' ||
            n === '???' ||
            n === 'unknown' ||
            n === 'n/a' ||
            n === '-' ||
            n.startsWith('tbd') ||
            n.startsWith('team ') ||
            /\?$/.test(n) // ends with ?
          ) return null
          // Normalize common aliases
          const aliases = {
            'united states': 'usa',
            'united states of america': 'usa',
            'us': 'usa',
            'america': 'usa',
            'korea republic': 'south korea',
            'republic of korea': 'south korea',
            'korea': 'south korea',
            'russian federation': 'russia',
            'england': 'england',
            'great britain': 'england',
            'scotland': 'scotland',
            'wales': 'wales',
            'northern ireland': 'northern ireland',
            'czech republic': 'czechia',
            'czechia': 'czechia',
            'trinidad and tobago': 'trinidad & tobago',
            'bosnia and herzegovina': 'bosnia',
            'north macedonia': 'macedonia',
            'curaçao': 'curacao',
            "côte d'ivoire": 'ivory coast',
            'dr congo': 'congo dr',
            'democratic republic of congo': 'congo dr',
            'congo dr': 'congo dr',
            'republic of the congo': 'congo',
            'congo': 'congo',
            'south africa': 'south africa',
            'costa rica': 'costa rica',
            'saudi arabia': 'saudi arabia',
            'new zealand': 'new zealand',
            'united arab emirates': 'uae',
            'emirates': 'uae',
            'uae': 'uae'
          }
          return aliases[n] || n
        }

        const teamSet = new Set()
        ;(data || []).forEach(f => {
          const home = normalizeTeam(f.home_team)
          const away = normalizeTeam(f.away_team)
          if (home) teamSet.add(home)
          if (away) teamSet.add(away)
        })

        const teamCount = teamSet.size
        // Sanity check: WC 2026 has 48 teams maximum.
        // If we exceed that, the database has polluted/duplicate data.
        if (teamCount > 48) {
          console.warn(`[loadAuthStats] Found ${teamCount} teams after normalization — database has duplicate/polluted data. Capping display at 48.`)
          tEl.textContent = 48
        } else {
          tEl.textContent = teamCount
        }

        console.log('[loadAuthStats] matches:', matchCount, 'teams:', teamCount, 'capped:', teamCount > 48)
      } catch (e) {
        // Last-ditch: try a head-only count so we at least show matches.
        try {
          const { count } = await supabaseClient
            .from('fixtures')
            .select('*', { count: 'exact', head: true })
          if (typeof count === 'number') {
            mEl.textContent = count
            tEl.textContent = 48
            return
          }
        } catch (e2) { /* fall through */ }
        // Final fallback to official WC 2026 numbers.
        console.warn('[loadAuthStats] using static fallback:', e)
        mEl.textContent = 64
        tEl.textContent = 48
      }
    }

    function handleForgotPassword() {
  const whatsapp = document.getElementById('whatsapp').value.trim()
  const clean = whatsapp.replace(/\D/g, '')
  const message = 'Hi, I need help resetting my password for the WC Predictions League.' +
    (clean ? ' My registered number is: ' + clean : ' My registered WhatsApp number is: [your number]') +
    '\n\nCould you please assist me with a password reset?'

  const encoded = encodeURIComponent(message)
  window.open('https://wa.me/?text=' + encoded, '_blank')
  showToast('Opening WhatsApp to message admin...', 'info')
}



//AUTO LOGOUT USERS IF ADMIN DELETES THE ACCOUNT
let _deletionChannel = null;

function subscribeToOwnDeletion() {
  const user = (typeof getUser === 'function') ? getUser() : null;
  if (!user?.id) return;
  if (_deletionChannel) return; // already subscribed

  _deletionChannel = supabaseClient
    .channel(`profile-self-${user.id}`)
    .on(
      'postgres_changes',
      {
        event: 'DELETE',
        schema: 'public',
        table: 'profiles',
        filter: `id=eq.${user.id}`
      },
      async () => {
        try {
          localStorage.removeItem('wc-user');
          localStorage.removeItem('remembered-whatsapp');
        } catch (_) {}

        showModal({
          icon: '👋',
          title: 'Account removed',
          message: 'Your account was removed by the admin. You will be signed out.',
          actions: [
            { text: 'OK', onclick: 'hideModal(); location.reload()', class: 'bg-ink-900 text-white' }
          ]
        });

        setTimeout(() => location.reload(), 4000);

        try { await supabaseClient.removeChannel(_deletionChannel); } catch (_) {}
        _deletionChannel = null;
      }
    )
    .subscribe();
}


// ============== CHAMPION CELEBRATION ==============
// Runs when the tournament ends (Final scored AND no other unscored matches).
// Shows a one-time fullscreen celebration with confetti, crowned champion,
// podium with prize amounts, and the user's personal tournament result.
// Idempotent: uses localStorage to avoid re-firing automatically.

const CHAMPION_SEEN_KEY = 'wc_champion_celebrated_v1'

async function checkAndCelebrateTournamentEnd({ trigger = 'manual', force = false } = {}) {
  // Don't re-fire automatically once seen (user can re-open via a button)
  if (!force && localStorage.getItem(CHAMPION_SEEN_KEY) === '1') return

  // Don't fire while the overlay is already showing
  if (!document.getElementById('champion-overlay')?.classList.contains('hidden') && !force) return

  // 1. Confirm tournament is actually complete
  const { data: fixtures, error: fxErr } = await supabaseClient
    .from('fixtures')
    .select('id, stage, kickoff, home_score, away_score')
  if (fxErr || !fixtures?.length) return

  const totalCount = fixtures.length
  const scoredCount = fixtures.filter(f => f.home_score !== null && f.away_score !== null).length
  if (scoredCount < totalCount) return // Still matches to play

  // Sanity: a fixture flagged 'Final' must exist and be scored
  const finalFixture = fixtures.find(f =>
    /^final$/i.test((f.stage || '').trim()) ||
    /3rd place|third place/i.test((f.stage || '').trim()) === false && /final/i.test((f.stage || '').trim())
  )
  // If no clear "Final" stage label exists, we still proceed because all matches are scored.

  // 2. Pull the final leaderboard
  let stats = []
  try {
    const lb = await getLeaderboardFromResults()
    stats = lb?.data || []
  } catch (e) {
    console.error('[champion] leaderboard load failed:', e)
    return
  }
  if (!stats.length) return

  // Sort by points desc (defensive; getLeaderboardFromResults already does this in most paths)
  stats.sort((a, b) => (b.points || 0) - (a.points || 0))

  // Need an actual scorer to crown
  const top = stats[0]
  if (!top || (top.points || 0) <= 0) return

  // 3. Build prize amounts from current prize settings
  let prizeBreakdown = null
  try {
    const { data: settings } = await supabaseClient.from('prize_settings').select('*').eq('id', 1).single()
    const paidCount = stats.length
    if (settings) prizeBreakdown = computePrizeBreakdownForChampion(settings, paidCount)
  } catch (e) {
    console.warn('[champion] prize settings fetch failed:', e)
  }

  // 4. Render overlay
  renderChampionCelebration(stats, prizeBreakdown)
  showChampionOverlay()
  // Remember we showed it so it doesn't re-fire on every page open
  localStorage.setItem(CHAMPION_SEEN_KEY, '1')
  console.log('[champion] celebration shown, trigger:', trigger)
}

// Lightweight clone of the admin's prize math, so the celebration can show
// money figures without depending on admin.html
function computePrizeBreakdownForChampion(s, paidCount) {
  const fee = Number(s.entry_fee) || 0
  const gross = s.manual_override ? (Number(s.manual_amount) || 0) : paidCount * fee
  const housePct = Math.max(0, Math.min(100, Number(s.house_fee_pct) || 0))
  const houseFee = gross * (housePct / 100)
  const net = Math.max(0, gross - houseFee)
  const s1 = Number(s.split_1st) || 50
  const s2 = Number(s.split_2nd) || 30
  const s3 = Number(s.split_3rd) || 20
  const totalSplit = (s1 + s2 + s3) || 100
  return {
    currency: s.currency || 'Nu.',
    splits: [
      { place: '1st', emoji: '🥇', amount: net * s1 / totalSplit },
      { place: '2nd', emoji: '🥈', amount: net * s2 / totalSplit },
      { place: '3rd', emoji: '🥉', amount: net * s3 / totalSplit }
    ]
  }
}

function renderChampionCelebration(stats, prizeBreakdown) {
  const champion = stats[0]
  const champName = champion.full_name || champion.name || 'Champion'
  const champDept = champion.department || ''

  document.getElementById('champ-name').textContent = champName
  document.getElementById('champ-dept').textContent = champDept || ' '
  document.getElementById('champ-points').textContent = Math.round(champion.points || 0)
  document.getElementById('champ-exact').textContent = champion.exact || 0
  document.getElementById('champ-streak').textContent = champion.best_streak || champion.current_streak || 0

  // Podium top 3 with prizes
  const podiumEl = document.getElementById('champ-podium')
  const top3 = stats.slice(0, 3)
  const emojis = ['🥇', '🥈', '🥉']
  podiumEl.innerHTML = top3.map((s, i) => {
    const prize = prizeBreakdown?.splits?.[i]
    const prizeAmt = prize ? `${prizeBreakdown.currency} ${Math.round(prize.amount).toLocaleString()}` : ''
    const name = s.full_name || s.name || 'Player'
    const dept = s.department || ''
    return `
      <div class="champ-podium-row flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
        <div class="text-2xl shrink-0">${emojis[i]}</div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-white truncate">${escapeHtml(name)}</div>
          ${dept ? `<div class="text-[11px] text-white/50 truncate">${escapeHtml(dept)}</div>` : ''}
        </div>
        <div class="text-right shrink-0">
          <div class="text-base font-bold text-amber-300">${Math.round(s.points || 0)} pts</div>
          ${prizeAmt ? `<div class="text-[11px] font-bold text-emerald-300/90">${prizeAmt}</div>` : ''}
        </div>
      </div>
    `
  }).join('')

  // User's personal stats
  const myId = (typeof getUser === 'function') ? getUser()?.id : null
  if (myId) {
    const meIdx = stats.findIndex(s => s.user_id === myId || s.id === myId)
    if (meIdx >= 0) {
      const me = stats[meIdx]
      document.getElementById('champ-mystats').classList.remove('hidden')
      document.getElementById('champ-my-rank').textContent = `#${meIdx + 1}`
      document.getElementById('champ-total-players').textContent = stats.length
      document.getElementById('champ-my-points').textContent = `${Math.round(me.points || 0)} pts`
      document.getElementById('champ-my-exact').textContent = me.exact || 0
      document.getElementById('champ-my-best-streak').textContent = me.best_streak || 0
    }
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function showChampionOverlay() {
  const overlay = document.getElementById('champion-overlay')
  if (!overlay) return
  overlay.classList.remove('hidden')
  overlay.classList.add('show')
  document.body.style.overflow = 'hidden'
  fireConfetti()
  // Second burst for sustained effect
  setTimeout(() => fireConfetti(), 800)
  setTimeout(() => fireConfetti(), 1800)
}

function closeChampionCelebration() {
  const overlay = document.getElementById('champion-overlay')
  if (!overlay) return
  overlay.classList.add('hidden')
  overlay.classList.remove('show')
  document.body.style.overflow = ''
  // Clear confetti
  const container = document.getElementById('confetti-container')
  if (container) container.innerHTML = ''
}

function fireConfetti() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const container = document.getElementById('confetti-container')
  if (!container) return
  const colors = ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#95E1D3', '#F38181', '#AA96DA', '#FCBAD3']
  const count = 60
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    piece.style.left = Math.random() * 100 + '%'
    piece.style.background = colors[Math.floor(Math.random() * colors.length)]
    piece.style.animationDuration = (2.5 + Math.random() * 2) + 's'
    piece.style.animationDelay = Math.random() * 0.5 + 's'
    piece.style.transform = `rotate(${Math.random() * 360}deg)`
    piece.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%'
    container.appendChild(piece)
    // Clean up after fall
    setTimeout(() => piece.remove(), 5000)
  }
}

async function shareChampionOnWhatsApp() {
  const champName = document.getElementById('champ-name')?.textContent?.trim() || 'the Champion'
  const champPts = document.getElementById('champ-points')?.textContent?.trim() || '0'
  const appUrl = window.location.origin
  const msg = `🏆 *WC 2026 Predictions — CHAMPION CROWNED!* 🏆\n\n👑 *${champName}* takes the crown with *${champPts} points*!\n\nThanks to everyone who played. See you next tournament!\n\n${appUrl}`
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`
  window.open(url, '_blank')
}

// Expose to admin/debug — let an admin re-trigger the celebration manually
window.replayChampionCelebration = function() {
  localStorage.removeItem(CHAMPION_SEEN_KEY)
  checkAndCelebrateTournamentEnd({ trigger: 'manual', force: true })
}


async function showApp() {
  try {
    document.getElementById('auth-screen').classList.add('hidden')
    document.getElementById('app-shell').classList.remove('hidden')
     subscribeToOwnDeletion()

    const profile = getProfile()
    document.getElementById('user-name').textContent = profile?.name || 'Player'

    if (!profile?.fee_paid && !isAdmin()) {
      showPaymentGate()
      return
    }

    await showNormalApp()
    // After the app is up, check whether the tournament has ended.
    // Fires the champion celebration if so (once per user, on this device).
    try { checkAndCelebrateTournamentEnd({ trigger: 'app-load' }) } catch (e) { console.error('[champion] check on load failed:', e) }
  } catch (err) {
    console.error('showApp error:', err)
    showToast('Something went wrong loading the app. Please refresh.', 'error')
  }
}

// Smooth logout: fade the app shell out first, then sign out. Wrapping
// auth.js's signOut() means we don't have to touch that file.
window.__rawSignOut = window.__rawSignOut || window.signOut
window.signOut = async function smoothSignOut() {
  try {

    if (_deletionChannel) {
      try { await supabase.removeChannel(_deletionChannel); } catch (_) {}
      _deletionChannel = null;
    }
    
    const shell = document.getElementById('app-shell')
    const authScreen = document.getElementById('auth-screen')
    // Fade the shell out before we tear down the session, so the user
    // sees a clean exit instead of a flash to the login screen.
    // 240ms feels snappier than 380ms for an exit.
    if (shell && !shell.classList.contains('hidden')) {
      shell.style.transition = 'opacity 240ms cubic-bezier(0.32, 0.72, 0, 1)'
      shell.classList.add('screen-fading-out')
      await new Promise(r => setTimeout(r, 240))
      shell.classList.add('hidden')
      shell.classList.remove('screen-fading-out')
      shell.style.transition = ''
    }
    // Pre-mount the auth screen invisibly so it fades in cleanly after
    // the session is cleared.
    if (authScreen) {
      authScreen.classList.remove('hidden')
      authScreen.classList.add('screen-fading-in')
    }
    // Now actually sign out. auth.js's signOut typically clears the
    // session and either reloads or triggers showAuth().
    if (typeof window.__rawSignOut === 'function') {
      await window.__rawSignOut()
    }
    // If we're still on the page (no reload happened), fade the auth in.
    if (authScreen) {
      await nextFrame()
      authScreen.classList.remove('screen-fading-in')
      // Refresh login-screen stats so they're up to date.
      if (typeof loadAuthStats === 'function') loadAuthStats()
    }
  } catch (err) {
    console.error('smoothSignOut error:', err)
  }
}
    
// Switch to predictions tab and scroll to a specific fixture
function switchToFixture(fixtureId) {
  switchTab('predictions')
  // After tab switch and render, scroll to the fixture
  setTimeout(() => {
    const el = document.getElementById(`fixture-${fixtureId}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // Brief highlight to draw attention
      el.style.transition = 'box-shadow 300ms ease'
      el.style.boxShadow = '0 0 0 3px rgba(212,162,76,0.4), 0 8px 24px rgba(10,15,13,0.08)'
      setTimeout(() => { el.style.boxShadow = '' }, 1500)
    }
  }, 150)
}

    function switchTab(tab) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'))
      const target = document.getElementById(`tab-${tab}`)
      target.classList.remove('hidden')
      // re-trigger animation
      target.style.animation = 'none'; target.offsetHeight; target.style.animation = ''
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab))
      if (tab === 'home') loadHome()
      if (tab === 'leaderboard') previewMode ? renderPreviewLeaderboard() : loadLeaderboard()
      if (tab === 'predictions') {
        previewMode ? renderFixtures() : loadFixtures()
        // Auto-scroll to the next open fixture after a short delay for render
        setTimeout(() => {
          const now = new Date()
          const nextFixture = fixtures
            .filter(f => new Date(f.kickoff) > now && f.home_score === null)
            .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))[0]
          if (nextFixture) {
            const el = document.getElementById(`fixture-${nextFixture.id}`)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 100)
      }
      if (tab === 'extras' && !previewMode) {
        if (typeof loadMyLeagues === 'function') loadMyLeagues()
      }
      if (tab === 'profile' && !previewMode) {
    renderBadges()
    updateProfileCards()
  }
      if (tab !== 'predictions') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    // ============== COPY TO CLIPBOARD ==============
    async function copyToClipboard(text, btn) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const ta = document.createElement('textarea')
          ta.value = text
          ta.style.position = 'fixed'
          ta.style.opacity = '0'
          document.body.appendChild(ta)
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }
        const label = btn.querySelector('.copy-label')
        const original = label.textContent
        label.textContent = 'Copied!'
        btn.classList.add('bg-emerald-600')
        btn.classList.remove('bg-ink-900')
        setTimeout(() => {
          label.textContent = original
          btn.classList.remove('bg-emerald-600')
          btn.classList.add('bg-ink-900')
        }, 1800)
      } catch (e) {
        showToast('Copy failed', 'error')
      }
    }

    // Fallback: ensure getPrizePool works even if auth.js doesn't define it.
    // Always read settings from Supabase so the player view matches what the
    // admin saved. (Previously this read from localStorage, which only
    // contained the admin's own browser state — players saw stale/empty data.)
if (typeof getPrizePool !== 'function') {
  window.getPrizePool = async function() {
    try {
      const { data: settings } = await supabaseClient
        .from('prize_settings')
        .select('*')
        .eq('id', 1)
        .single()
      const s = settings || { currency: 'Nu.', entry_fee: 0, manual_override: false, manual_amount: 0 }
      const { data: profiles, error } = await supabaseClient
        .from('profiles')
        .select('fee_paid')
        .eq('fee_paid', true)
      if (error) throw error
      const paidCount = profiles?.length || 0
      const fee = Number(s.entry_fee) || 0
      const amount = s.manual_override ? (Number(s.manual_amount) || 0) : paidCount * fee
      return {
        data: { amount, currency: s.currency || 'Nu.', paid_count: paidCount },
        error: null
      }
    } catch (e) {
      return { data: null, error: e }
    }
  }
}

  async function initApp() {
  await initAuth(); 
  async function waitForUser(maxMs = 1500, stepMs = 50) {
    const start = Date.now();
    while (Date.now() - start < maxMs) {
      const u = (typeof getUser === 'function') ? getUser() : null;
      if (u) return u;
      await new Promise(r => setTimeout(r, stepMs));
    }
    return (typeof getUser === 'function') ? getUser() : null;
  }

  function looksLikeSavedSession() {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i) || '';
        if (/auth|session|user|token|sb-/i.test(k)) {
          const v = localStorage.getItem(k);
          if (v && v.length > 2) return true;
        }
      }
    } catch (e) { /* ignore */ }
    return false;
  }

  let user = (typeof getUser === 'function') ? getUser() : null;
  if (!user && looksLikeSavedSession()) {
    user = await waitForUser(1500);
  }

  if (user) {
    document.getElementById('auth-screen').classList.add('hidden')
    await showApp();
  } else {
    if (typeof showAuth === 'function') showAuth();
    else if (typeof loadAuthStats === 'function') loadAuthStats();
  }

  // ALWAYS finish the splash — whether logged in or not
  if (typeof window.finishSplash === 'function') window.finishSplash();
}
// Wait for DOM before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ============== SYSTEM SETTINGS (Private leagues toggle) ==============
async function getSystemSettings() {
  try {
    const { data, error } = await supabaseClient
      .from('system_settings')
      .select('private_leagues_enabled')
      .eq('id', 1)
      .single();
    if (error) throw error;
    return { data: data || { private_leagues_enabled: false }, error: null };
  } catch (err) {
    console.warn('getSystemSettings failed, defaulting to false:', err);
    return { data: { private_leagues_enabled: false }, error: err };
  }
}

// ============== PRIVATE LEAGUE FUNCTIONS ==============
async function createLeague(name) {
    const user = getUser();
    if (!user) throw new Error('Not authenticated');

    // Generate unique invite code
    let inviteCode;
    let attempts = 0;
    do {
        inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        const { data: existing } = await supabaseClient
            .from('leagues')
            .select('id')
            .eq('invite_code', inviteCode)
            .maybeSingle();  // FIXED: .single() throws when no row found
        if (!existing) break;
        attempts++;
    } while (attempts < 10);

    if (attempts >= 10) throw new Error('Failed to generate unique code');

    // Create league
    const { data: league, error: leagueError } = await supabaseClient
        .from('leagues')
        .insert({
            name: name,
            invite_code: inviteCode,
            created_by: user.id,
        })
        .select()
        .single();

    if (leagueError) throw leagueError;

    // CRITICAL: Add creator as first member so they can see their own league
    const { error: memberError } = await supabaseClient
        .from('league_memberships')
        .insert({
            league_id: league.id,
            user_id: user.id
        });

    if (memberError) {
        console.error('Auto-membership failed:', memberError);
        // League exists but creator can't see it — warn but don't fail
        showToast('League created! Refresh if not visible.', 'warning');
    }

    return { data: league, error: null };
}

async function joinLeagueByCode(inviteCode) {
  const user = getUser();
  if (!user) throw new Error('Not authenticated');

  // Find the league
  const { data: league, error: leagueError } = await supabaseClient
    .from('leagues')
    .select('*')
    .eq('invite_code', inviteCode.toUpperCase())
    .maybeSingle();  // FIXED: Use maybeSingle to avoid throwing on not found

  if (leagueError || !league) throw new Error('Invalid invite code');

  // Check if already a member
  const { data: existing, error: existingError } = await supabaseClient
    .from('league_memberships')
    .select('id')
    .eq('league_id', league.id)
    .eq('user_id', user.id)
    .single();

  if (existing) throw new Error('You are already a member of this league');

  // Add membership
  const { data, error } = await supabaseClient
    .from('league_memberships')
    .insert({ league_id: league.id, user_id: user.id })
    .select()
    .single();

  if (error) throw error;
  return { data: league, error: null };
}

async function getMyLeagues() {
  const user = getUser();
  if (!user) return { data: [], error: null };

  const { data, error } = await supabaseClient
    .from('league_memberships')
    .select(`
      league_id,
      leagues:league_id (
        id,
        name,
        invite_code,
        created_by
      )
    `)
    .eq('user_id', user.id);

  if (error) return { data: [], error };
  // Flatten the result
  const leagues = data.map(row => row.leagues).filter(Boolean);
  return { data: leagues, error: null };
}

async function leaveLeague(leagueId) {
  const user = getUser();
  if (!user) throw new Error('Not authenticated');

  // FIX: Prevent creator from leaving their own league (orphaning it)
  const { data: league } = await supabaseClient
    .from('leagues')
    .select('created_by')
    .eq('id', leagueId)
    .maybeSingle();

  if (league?.created_by === user.id) {
    throw new Error('You cannot leave a league you created. Delete it instead.');
  }

  const { error } = await supabaseClient
    .from('league_memberships')
    .delete()
    .eq('league_id', leagueId)
    .eq('user_id', user.id);

  if (error) throw error;
  return { error: null };
}

// ============== PRIVATE LEAGUES ==============

let myLeagues = []
let activeLeagueId = null
let privateLeaguesEnabled = false
let _systemSettingsInitialized = false  // prevents toast on first load / login

async function checkPrivateLeaguesEnabled() {
    const { data } = await getSystemSettings()
    privateLeaguesEnabled = data?.private_leagues_enabled || false
    return privateLeaguesEnabled
}

function showCreateLeagueModal() {
    const overlay = document.getElementById('league-modal-overlay')
    const panel = document.getElementById('league-modal-content')
    overlay.classList.remove('hidden')
    requestAnimationFrame(() => panel.classList.add('shown'))
    document.getElementById('new-league-name').focus()
}

function hideLeagueModal() {
    const overlay = document.getElementById('league-modal-overlay')
    const panel = document.getElementById('league-modal-content')
    panel.classList.remove('shown')
    setTimeout(() => overlay.classList.add('hidden'), 320)
}

document.getElementById('league-modal-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'league-modal-overlay') hideLeagueModal()
})

// ============== ACCESS HELPERS ==============

/**
 * Check if user has been explicitly granted private league access by admin.
 * This does NOT check payment status - use canAccessLeagues() for full check.
 */
function hasAdminLeagueAccess(profile) {
    if (!profile) return false;
    return profile.private_leagues_access === true
        || (typeof isAdmin === 'function' && isAdmin());
}

/**
 * Centralized access control for private leagues.
 * Returns { allowed, reason } where reason explains why access was granted/denied.
 */
async function canAccessLeagues() {
    const profile = getProfile();
    if (!profile) return { allowed: false, reason: 'not_authenticated' };

    const enabled = await checkPrivateLeaguesEnabled();
    if (!enabled) return { allowed: false, reason: 'disabled' };

    if (isAdmin()) return { allowed: true, reason: 'admin' };
    if (profile.private_leagues_access === true) return { allowed: true, reason: 'granted' };

    return { allowed: false, reason: 'not_granted' };
}

// DEPRECATED: Use hasAdminLeagueAccess() or canAccessLeagues() instead
function hasLeagueAccess(profile) {
    return hasAdminLeagueAccess(profile);
}

// Forcibly evict the user from any league view they're currently in.
// Called when (a) global toggle goes OFF, or (b) admin revokes per-user access.
function enforceLeagueAccessLockout(reason) {
    // Reset in-memory state
    activeLeagueId = null
    myLeagues = []

    // If they're currently viewing the league leaderboard, hide the back button
    // and force a switch to the global leaderboard view
    const backBtn = document.getElementById('lb-back-to-global')
    if (backBtn) backBtn.classList.add('hidden')

    const subOv = document.getElementById('lb-subtab-overall')
    const subMd = document.getElementById('lb-subtab-matchday')
    if (subOv) subOv.classList.remove('hidden')
    if (subMd) subMd.classList.remove('hidden')

    const subMeta = document.getElementById('lb-subtab-meta')
    if (subMeta) subMeta.textContent = ''

    // Refresh whichever view they happen to be on
    const leaderboardTab = document.getElementById('tab-leaderboard')
    const profileTab = document.getElementById('tab-profile')
    if (leaderboardTab && !leaderboardTab.classList.contains('hidden')) {
        if (typeof loadLeaderboard === 'function') loadLeaderboard()
    }
    if (profileTab && !profileTab.classList.contains('hidden')) {
        if (typeof loadMyLeagues === 'function') loadMyLeagues()
    }
}

function askAdminForLeagueAccess() {
    const profile = getProfile()
    const name = profile?.full_name || profile?.name || 'A player'
    const dept = profile?.department ? ` from ${profile.department}` : ''
    const message = `Hi Admin 👋\n\nThis is ${name}${dept}. Could I please get early access to private leagues in the WC 2026 Predictions app?\n\nThanks! 🙏🏆`

    const overlay = document.getElementById('ask-admin-overlay')
    const panel = document.getElementById('ask-admin-content')
    const textarea = document.getElementById('ask-admin-message')
    if (!overlay || !panel || !textarea) {
        // Fallback if the modal isn't in the DOM for any reason
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
        return
    }
    textarea.value = message
    overlay.classList.remove('hidden')
    requestAnimationFrame(() => panel.classList.add('shown'))
}

function hideAskAdminModal() {
    const overlay = document.getElementById('ask-admin-overlay')
    const panel = document.getElementById('ask-admin-content')
    if (!overlay || !panel) return
    panel.classList.remove('shown')
    setTimeout(() => overlay.classList.add('hidden'), 320)
}

function sendAskAdminWhatsApp() {
    const textarea = document.getElementById('ask-admin-message')
    const message = (textarea?.value || '').trim()
    if (!message) {
        showToast('Message cannot be empty', 'warning')
        return
    }
    // No phone number → WhatsApp opens contact picker so user chooses admin
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
    hideAskAdminModal()
}

// Close modal when tapping the backdrop
document.addEventListener('DOMContentLoaded', () => {
    const askOverlay = document.getElementById('ask-admin-overlay')
    if (askOverlay) {
        askOverlay.addEventListener('click', e => {
            if (e.target.id === 'ask-admin-overlay') hideAskAdminModal()
        })
    }
})

async function handleCreateLeagueClick() {
    const access = await canAccessLeagues();

    if (!access.allowed) {
        if (access.reason === 'disabled') {
            showToast('Private leagues are coming soon! Stay tuned.', 'info');
        } else if (access.reason === 'not_granted') {
            showToast('League access not yet granted. Tap "Ask admin" to request access.', 'warning');
        } else {
            showToast('Access denied. Please sign in to continue.', 'error');
        }
        return;
    }

    showCreateLeagueModal();
}

async function handleCreateLeague() {
    const name = document.getElementById('new-league-name').value.trim()
    if (!name) {
        showToast('Enter a league name', 'warning')
        return
    }

    const btn = document.querySelector('#league-modal-content button[onclick="handleCreateLeague()"]')
    btn.disabled = true
    btn.textContent = 'Creating...'

    const { data, error } = await createLeague(name)

    btn.disabled = false
    btn.textContent = 'Create League'

    if (error) {
        showToast(error.message, 'error')
        return
    }

    hideLeagueModal()
    showToast(`League created! Code: ${data.invite_code}`, 'success')
    await loadMyLeagues()
    activeLeagueId = data.id
    switchTab('leaderboard')
}

async function handleJoinLeague() {
    const access = await canAccessLeagues();
    if (!access.allowed) {
        if (access.reason === 'disabled') {
            showToast('Private leagues are coming soon! Stay tuned.', 'info');
        } else if (access.reason === 'not_granted') {
            showToast('League access not yet granted. Ask the admin to unlock private leagues for you.', 'warning');
        } else {
            showToast('Access denied. Please sign in to continue.', 'error');
        }
        return;
    }

    const code = document.getElementById('league-join-code').value.trim()
    if (!code) {
        showToast('Enter an invite code', 'warning')
        return
    }

    const { data, error } = await joinLeagueByCode(code)
    if (error) {
        showToast(error.message, 'error')
        return
    }

    showToast(`Joined "${data.name}"!`, 'success')
    document.getElementById('league-join-code').value = ''
    await loadMyLeagues()
    activeLeagueId = data.id
    switchTab('leaderboard')
}

async function loadMyLeagues() {
    const container = document.getElementById('my-leagues-list')
    const createBtn = document.getElementById('create-league-btn')
    const joinWrap = document.getElementById('league-join-wrap')

    // Check system setting
    const enabled = await checkPrivateLeaguesEnabled()

    if (!enabled) {
        // Show Coming Soon state
        if (createBtn) {
            createBtn.textContent = 'Coming Soon'
            createBtn.classList.add('opacity-50', 'cursor-not-allowed')
            createBtn.classList.remove('tap')
            createBtn.onclick = () => showToast('Private leagues are coming soon!', 'info')
        }
        if (joinWrap) joinWrap.classList.add('hidden')
        container.innerHTML = `
            <div class="text-center py-6">
                <div class="text-3xl mb-2">🔜</div>
                <div class="text-sm font-semibold text-ink-700">Coming Soon</div>
                <p class="text-xs text-ink-500 mt-1">Private leagues will be available soon. Stay tuned!</p>
            </div>`
        return
    }

    // Reset button state when enabled
    if (createBtn) {
        createBtn.textContent = '+ Create'
        createBtn.classList.remove('opacity-50', 'cursor-not-allowed')
        createBtn.classList.add('tap')
        createBtn.onclick = handleCreateLeagueClick
    }

    // Access gate using centralized helper
    const access = await canAccessLeagues();
    if (!access.allowed) {
        if (createBtn) {
            createBtn.textContent = '🔒 Locked'
            createBtn.classList.add('opacity-50', 'cursor-not-allowed')
            createBtn.classList.remove('tap')
            createBtn.onclick = () => showToast('League access not yet granted — ask the admin', 'warning')
        }
        if (joinWrap) {
            const profile = (typeof getProfile === 'function') ? getProfile() : null
            const isPaid = profile?.fee_paid === true
            if (isPaid) {
                // Paid users: only need admin grant — no pay button, no fee mention
                joinWrap.innerHTML = `
                    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                        <div class="text-2xl mb-2">🔒</div>
                        <div class="text-sm font-bold text-amber-800">Awaiting Admin Approval</div>
                        <p class="text-xs text-amber-700 mt-1">Private leagues are unlocked individually. Tap below to ask the admin for access.</p>
                        <div class="flex gap-2 mt-2 justify-center">
                            <button onclick="askAdminForLeagueAccess()" class="bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl tap">Ask Admin</button>
                        </div>
                    </div>
                `
            } else {
                // Unpaid users: read dynamic fee instead of hardcoding 500
                let feeLine = 'Pay your entry fee, or request early access from the admin.'
                try {
                    if (typeof getPrizeSettings === 'function') {
                        const { data } = await getPrizeSettings()
                        if (data?.entry_fee) {
                            const cur = data.currency || 'Nu.'
                            feeLine = `Pay ${cur} ${Number(data.entry_fee).toLocaleString()} entry fee, or request early access from the admin.`
                        }
                    }
                } catch (e) { /* fall back to generic copy */ }
                joinWrap.innerHTML = `
                    <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                        <div class="text-2xl mb-2">🔒</div>
                        <div class="text-sm font-bold text-amber-800">Invite-Only Access</div>
                        <p class="text-xs text-amber-700 mt-1">${feeLine}</p>
                        <div class="flex gap-2 mt-2 justify-center">
                            <button onclick="switchTab('home')" class="bg-amber-600 text-white text-xs font-bold px-3 py-2 rounded-xl tap">Pay Entry Fee</button>
                            <button onclick="askAdminForLeagueAccess()" class="bg-white border border-amber-300 text-amber-800 text-xs font-bold px-3 py-2 rounded-xl tap">Ask Admin</button>
                        </div>
                    </div>
                `
            }
        }
        container.innerHTML = `
            <div class="text-center py-4">
                <div class="text-3xl mb-2 opacity-40">🏆</div>
                <div class="text-sm font-semibold text-ink-700">Private Leagues</div>
                <p class="text-xs text-ink-500 mt-1">Locked — admin-granted users only</p>
            </div>`
        return
    }

    if (joinWrap) joinWrap.classList.remove('hidden')

    const { data, error } = await getMyLeagues()
    if (error) {
        console.error('loadMyLeagues error:', error)
        return
    }

    myLeagues = data || []

    if (!myLeagues.length) {
        container.innerHTML = `
            <div class="text-center py-6">
                <div class="text-3xl mb-2 opacity-40">🏆</div>
                <div class="text-sm font-semibold text-ink-700">No leagues yet</div>
                <p class="text-xs text-ink-500 mt-1">Create one or join with a code</p>
            </div>`
        return
    }

    container.innerHTML = myLeagues.map(l => `
        <div class="flex items-center gap-3 p-3 rounded-2xl border ${activeLeagueId === l.id ? 'border-brand-500 bg-brand-50' : 'border-paper-border bg-paper'} tap" onclick="selectLeague('${l.id}')">
            <div class="w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shrink-0">${(l.name || 'L').substring(0, 2).toUpperCase()}</div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">${l.name}</div>
                <div class="text-[11px] text-ink-500 font-mono tracking-wider">${l.invite_code}</div>
            </div>
            ${activeLeagueId === l.id ? '<span class="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">ACTIVE</span>' : ''}
            <button onclick="event.stopPropagation(); shareLeagueCode('${l.id}', '${l.invite_code}', '${l.name.replace(/'/g, "\'")}')" class="text-ink-400 p-1.5 tap">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
        </div>
    `).join('')
}

// ============== ADMIN LEAGUE BROWSER ==============

async function loadAdminLeagueBrowser() {
    if (!isAdmin()) return;
    
    const container = document.getElementById('admin-league-browser');
    if (!container) return;
    
    container.classList.remove('hidden');
    
    const { data: leagues, error } = await supabaseClient
        .from('leagues')
        .select(`
            *,
            league_memberships(count),
            creator:created_by (full_name, name)
        `)
        .order('created_at', { ascending: false });
    
    if (error) {
        container.innerHTML = `<div class="text-center py-4 text-red-500 text-sm">Failed to load leagues</div>`;
        return;
    }
    
    if (!leagues?.length) {
        container.innerHTML = `
            <div class="text-center py-6">
                <div class="text-3xl mb-2 opacity-40">🏆</div>
                <div class="text-sm font-semibold text-ink-700">No private leagues yet</div>
            </div>`;
        return;
    }
    
    // Query 2: Get member counts per league
    const leagueIds = leagues.map(l => l.id);
    const { data: memberships } = await supabaseClient
        .from('league_memberships')
        .select('league_id')
        .in('league_id', leagueIds);

    const memberCounts = {};
    (memberships || []).forEach(m => {
        memberCounts[m.league_id] = (memberCounts[m.league_id] || 0) + 1;
    });

    // Query 3: Get creator profiles
    const creatorIds = [...new Set(leagues.map(l => l.created_by))];
    const { data: creators } = await supabaseClient
        .from('profiles')
        .select('id, full_name, name')
        .in('id', creatorIds);

    const creatorMap = {};
    (creators || []).forEach(c => {
        creatorMap[c.id] = c.full_name || c.name || 'Unknown';
    });

    container.innerHTML = leagues.map(l => {
        const memberCount = memberCounts[l.id] || 0;
        const creatorName = creatorMap[l.created_by] || 'Unknown';
        const isActive = activeLeagueId === l.id;
        
        return `
        <div class="flex items-center gap-3 p-3 rounded-2xl border ${isActive ? 'border-brand-500 bg-brand-50' : 'border-paper-border bg-paper'} tap" 
             onclick="adminViewLeague('${l.id}')">
            <div class="w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                ${(l.name || 'L').substring(0, 2).toUpperCase()}
            </div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">${l.name}</div>
                <div class="text-[11px] text-ink-500">
                    ${memberCount} member${memberCount !== 1 ? 's' : ''} · Code: ${l.invite_code} · by ${creatorName}
                </div>
            </div>
            ${isActive ? '<span class="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">VIEWING</span>' : ''}
            <svg class="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
        </div>`;
    }).join('');
}

async function adminViewLeague(leagueId) {
    if (!isAdmin()) {
        showToast('Admin access only', 'error');
        return;
    }
    
    activeLeagueId = leagueId;
    switchTab('leaderboard');
    showToast('Viewing league as admin', 'info');
}

function selectLeague(leagueId) {
    activeLeagueId = activeLeagueId === leagueId ? null : leagueId
    loadMyLeagues()
    if (activeLeagueId) {
        showToast('Switched to league leaderboard', 'success')
        switchTab('leaderboard')
    }
}

function shareLeagueCode(leagueId, code, name) {
    const appUrl = window.location.origin
    const message = `🏆 Join my WC 2026 Prediction League: *"${name}"*\n\nUse code: *${code}*\n👉 ${appUrl}\n\nLet's see who predicts better! ⚽`
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encoded}`, '_blank')
}


async function getLeagueMembers(leagueId) {
    const user = getUser();
    if (!user) return { data: [], error: null };

    // Admin can view any league; others only if they're members
    if (!isAdmin()) {
        const { data: myMembership } = await supabaseClient
            .from('league_memberships')
            .select('id')
            .eq('league_id', leagueId)
            .eq('user_id', user.id)
            .single();
        
        if (!myMembership) {
            return { data: [], error: new Error('Not a member of this league') };
        }
    }

    const { data: memberships, error: membershipError } = await supabaseClient
        .from('league_memberships')
        .select('user_id')
        .eq('league_id', leagueId);
    
    if (membershipError) {
        console.error('getLeagueMembers: membership error', membershipError);
        return { data: null, error: membershipError };
    }
    
    if (!memberships || memberships.length === 0) {
        return { data: [], error: null };
    }
    
    const userIds = memberships.map(m => m.user_id);
    
    const { data: profiles, error: profileError } = await supabaseClient
        .from('profiles')
        .select('id, full_name, name, department, avatar_url')
        .in('id', userIds);
    
    if (profileError) {
        console.error('getLeagueMembers: profile error', profileError);
        return { data: null, error: profileError };
    }
    
    const profileMap = {};
    (profiles || []).forEach(p => {
        profileMap[p.id] = p;
    });
    
    const members = memberships.map(row => {
        const p = profileMap[row.user_id] || {};
        return {
            id: row.user_id,
            name: p.full_name || p.name || 'Anonymous',
            department: p.department || '',
            avatar_url: p.avatar_url || null
        };
    });
    
    return { data: members, error: null };
}


// ============== LEAGUE LEADERBOARD ==============

async function getLeagueLeaderboard(leagueId) {
    // Get all members of this league
    const { data: members, error: membersError } = await getLeagueMembers(leagueId)
    if (membersError || !members?.length) return { data: [], error: membersError }

    const userIds = members.map(m => m.id)

    // Fetch prediction results for these users
    const { data: results, error: resultsError } = await supabaseClient
        .from('prediction_results')
        .select('*')
        .in('user_id', userIds)

    if (resultsError) {
        console.error('getLeagueLeaderboard: results error', resultsError)
    }

    // Aggregate stats per user
    const stats = {}
    members.forEach(m => {
        stats[m.id] = {
            ...m,
            points: 0,
            exact: 0,
            gd: 0,
            result: 0,
            total_predictions: 0
        }
    })

    ;(results || []).forEach(r => {
        const s = stats[r.user_id]
        if (!s) return
        s.points += r.final_points || r.points_awarded || 0
        // Tier classification must use base_points (final_points includes stage multiplier)
        const base = (r.base_points != null) ? r.base_points : (r.points_awarded || 0)
        if (base === 5) s.exact++
        else if (base === 3) s.gd++
        else if (base === 2) s.result++
        s.total_predictions++
    })

    // Sort by points desc, then exact, then gd, then result
    const result = Object.values(stats).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points
        if (b.exact !== a.exact) return b.exact - a.exact
        if (b.gd !== a.gd) return b.gd - a.gd
        return b.result - a.result
    })

    return { data: result, error: null }
}

// ============== LEAGUE LEADERBOARD OVERRIDE ==============

const _originalLoadLeaderboard = loadLeaderboard
loadLeaderboard = async function() {
    if (activeLeagueId && !previewMode) {
        await loadLeagueLeaderboardView(activeLeagueId)
        return
    }
    // Restore global sub-tabs when not in league mode
    const subOv = document.getElementById('lb-subtab-overall')
    const subMd = document.getElementById('lb-subtab-matchday')
    const backBtn = document.getElementById('lb-back-to-global')
    if (subOv) subOv.classList.remove('hidden')
    if (subMd) subMd.classList.remove('hidden')
    if (backBtn) backBtn.classList.add('hidden')
    if (document.getElementById('lb-subtab-meta')) {
        document.getElementById('lb-subtab-meta').textContent = ''
    }
    await _originalLoadLeaderboard()
}

async function loadLeagueLeaderboardView(leagueId) {
    // Re-verify access — covers the case where admin revoked access or disabled
    // private leagues while the user was already inside a league view.
    const access = await canAccessLeagues();
    if (!access.allowed) {
        activeLeagueId = null
        myLeagues = []
        showToast('Your access to private leagues is no longer available', 'warning')
        const backBtn = document.getElementById('lb-back-to-global')
        if (backBtn) backBtn.classList.add('hidden')
        const subOv = document.getElementById('lb-subtab-overall')
        const subMd = document.getElementById('lb-subtab-matchday')
        if (subOv) subOv.classList.remove('hidden')
        if (subMd) subMd.classList.remove('hidden')
        if (typeof _originalLoadLeaderboard === 'function') await _originalLoadLeaderboard()
        return
    }

    const c = document.getElementById('leaderboard-list')
    const myId = getUser()?.id

    const [{ data: stats }, { data: league }] = await Promise.all([
        getLeagueLeaderboard(leagueId),
        supabaseClient.from('leagues').select('name, invite_code').eq('id', leagueId).single()
    ])

    // Hide global sub-tabs, show back button
    const subOv = document.getElementById('lb-subtab-overall')
    const subMd = document.getElementById('lb-subtab-matchday')
    if (subOv) subOv.classList.add('hidden')
    if (subMd) subMd.classList.add('hidden')

    // Create or show back button
    let backBtn = document.getElementById('lb-back-to-global')
    if (!backBtn) {
        backBtn = document.createElement('button')
        backBtn.id = 'lb-back-to-global'
        backBtn.className = 'lb-subtab tap active'
        backBtn.textContent = '← Global'
        backBtn.onclick = () => { activeLeagueId = null; loadMyLeagues(); switchTab('leaderboard') }
        document.querySelector('.lb-subtabs')?.prepend(backBtn)
    } else {
        backBtn.classList.remove('hidden')
    }

    if (document.getElementById('lb-subtab-meta')) {
        document.getElementById('lb-subtab-meta').textContent = league?.name || 'League'
    }

    // Hide CTA and prize strip in league mode
    const cta = document.getElementById('lb-cta')
    if (cta) { cta.classList.add('hidden'); cta.innerHTML = '' }
    const prize = document.getElementById('lb-prize')
    if (prize) { prize.classList.add('hidden'); prize.innerHTML = '' }

    if (!stats?.length) {
        c.innerHTML = `<div class="bg-white rounded-2xl border border-paper-border p-8 text-center mx-0">
            <div class="text-4xl mb-2">👥</div>
            <div class="font-semibold">No members yet</div>
            <p class="text-sm text-ink-500 mt-1">Invite friends with code: ${league?.invite_code || '---'}</p>
        </div>`
        return
    }

    // Render league leaderboard using existing styles
    c.innerHTML = stats.map((s, i) => {
        const rank = i + 1
        const uid = s.user_id || s.id
        const isMe = uid === myId
        const correct = (s.exact || 0) + (s.gd || 0) + (s.result || 0)
        const hasPoints = (s.points || 0) > 0
        const medal = hasPoints && rank === 1 ? '🥇' : hasPoints && rank === 2 ? '🥈' : hasPoints && rank === 3 ? '🥉' : ''
        const rankDisplay = medal
            ? `<div class="rank-medal">${medal}</div>`
            : `<div class="rank-num w-10 h-10 rounded-xl bg-paper border border-paper-border flex items-center justify-center font-bold text-sm text-ink-500">${rank}</div>`

        return `
        <div class="lb-row lb-row-compact ${isMe ? 'is-me' : ''} flex items-center gap-3">
            <div class="shrink-0">${rankDisplay}</div>
            <div class="shrink-0">
                ${getAvatarHtml(s.name, s.avatar_url, rank, 32)}
            </div>
            <div class="flex-1 min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                    <span class="player-name truncate">${s.name || 'Anonymous'}</span>
                    ${isMe ? '<span class="you-label text-[10px] font-bold text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">YOU</span>' : ''}
                </div>
                <div class="player-stats text-ink-500 flex items-center gap-2 flex-wrap">
                    <span><b class="text-ink-900">${correct}</b> correct</span>
                    <span class="text-ink-300">·</span>
                    <span><b class="text-brand-700">${s.exact || 0}</b> exact</span>
                </div>
            </div>
            <div class="text-right shrink-0">
                <div class="points-num font-bold text-brand-700">${s.points || 0}</div>
                <div class="points-label text-ink-400 uppercase tracking-wider font-semibold">pts</div>
            </div>
        </div>`
    }).join('')
}

// ============== PROFILE TAB: LOAD LEAGUES ==============

const _originalSwitchTab = switchTab
switchTab = function(tab) {
    if (tab === 'extras' && !previewMode) {
        loadMyLeagues()
    }
    _originalSwitchTab(tab)
}

// ============== INIT: LOAD SYSTEM SETTINGS ==============

const _originalInitApp = initApp
initApp = async function() {
    // Pre-check system settings
    await checkPrivateLeaguesEnabled()
    _systemSettingsInitialized = true  // mark baseline as set; toasts may now fire on actual changes
    await _originalInitApp()
}

// ============== LEAGUE MANAGEMENT ==============

async function deleteMyLeague(leagueId) {
    if (!confirm('Delete this league? All members will be removed. This cannot be undone.')) return

    const user = getUser();
    if (!user) return;

    // FIX: Delete memberships FIRST to avoid FK constraint violation
    const { error: membershipError } = await supabaseClient
        .from('league_memberships')
        .delete()
        .eq('league_id', leagueId);

    if (membershipError) {
        console.error('Failed to delete memberships:', membershipError);
        showToast('Could not delete league memberships', 'error');
        return;
    }

    // Now delete the league
    const { error } = await supabaseClient
        .from('leagues')
        .delete()
        .eq('id', leagueId)
        .eq('created_by', user.id)

    if (error) {
        showToast(error.message, 'error')
        return
    }

    activeLeagueId = null
    await loadMyLeagues()
    showToast('League deleted', 'success')
}

async function leaveLeagueHandler(leagueId) {
    if (!confirm('Leave this league?')) return

    const { error } = await leaveLeague(leagueId)
    if (error) {
        showToast(error.message, 'error')
        return
    }

    if (activeLeagueId === leagueId) activeLeagueId = null
    await loadMyLeagues()
    showToast('Left league', 'success')
}

async function regenerateLeagueCode(leagueId) {
    let newCode
    let attempts = 0
    do {
        newCode = Math.random().toString(36).substring(2, 8).toUpperCase()
        attempts++
        const { data: existing } = await supabaseClient
            .from('leagues')
            .select('id')
            .eq('invite_code', newCode)
            .maybeSingle()  // FIXED: Use maybeSingle
        if (!existing) break
    } while (attempts < 10)

    if (attempts >= 10) {
        showToast('Failed to generate new code. Try again.', 'error')
        return
    }

    const { error } = await supabaseClient
        .from('leagues')
        .update({ invite_code: newCode })
        .eq('id', leagueId)
        .eq('created_by', getUser()?.id)

    if (error) {
        showToast(error.message, 'error')
        return
    }

    await loadMyLeagues()
    showToast(`New invite code: ${newCode}`, 'success')
}
loadRememberedEmail()

/* ========== PUSH NOTIFICATIONS (Deploy 2 - admin test) ========== */

// VAPID public key (safe to expose — used by browser to verify push origin)
const VAPID_PUBLIC_KEY = 'BLXv3rq5RyUSq1VRHtJs9OuGcRyDhwjhO9JnXnM1epfigtLEyhX4r80sq1DyKkaUIqnJ7jylhh6UseTKRmPOf8Q'

// Endpoint slug for the send-push Edge Function
const SEND_PUSH_SLUG = 'dynamic-service'

// Convert VAPID public key from base64url to Uint8Array (browser requirement)
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

async function enablePushNotifications() {
  try {
    // 1. Check browser support
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      if (typeof showToast === 'function') showToast('Push notifications not supported on this device', 'error')
      return { ok: false, reason: 'unsupported' }
    }

    // 2. Get the user
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      if (typeof showToast === 'function') showToast('Please sign in first', 'error')
      return { ok: false, reason: 'no_user' }
    }

    // 3. Request permission
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      if (typeof showToast === 'function') showToast('Notification permission denied', 'error')
      return { ok: false, reason: 'permission_denied' }
    }

    // 4. Get the service worker registration
    const registration = await navigator.serviceWorker.ready

    // 5. Subscribe (or get existing subscription)
    let subscription = await registration.pushManager.getSubscription()
    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      })
    }

    // 6. Extract the keys we need to send pushes
    const subJson = subscription.toJSON()
    const endpoint = subJson.endpoint
    const p256dh = subJson.keys?.p256dh
    const auth = subJson.keys?.auth

    if (!endpoint || !p256dh || !auth) {
      throw new Error('Subscription missing required keys')
    }

    // 7. Save to Supabase (upsert in case device already subscribed)
    const { error } = await supabaseClient
      .from('push_subscriptions')
      .upsert({
        user_id: user.id,
        endpoint,
        p256dh,
        auth,
        user_agent: navigator.userAgent
      }, { onConflict: 'user_id,endpoint' })

    if (error) throw error

    if (typeof showToast === 'function') showToast('🔔 Notifications enabled!', 'success')
    console.log('[push] subscribed successfully')
    return { ok: true, user_id: user.id }

  } catch (err) {
    console.error('[push] enable failed:', err)
    if (typeof showToast === 'function') showToast('Failed to enable notifications: ' + (err.message || 'unknown'), 'error')
    return { ok: false, reason: 'error', error: err }
  }
}

// Test helper — sends a push to the currently-signed-in user
async function testPushToSelf() {
  try {
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      if (typeof showToast === 'function') showToast('Sign in first', 'error')
      return
    }

    const { data: { session } } = await supabaseClient.auth.getSession()
    if (!session) {
      if (typeof showToast === 'function') showToast('No session', 'error')
      return
    }

    

    const SUPABASE_FUNCTIONS_URL = supabaseClient.supabaseUrl + '/functions/v1/' + SEND_PUSH_SLUG

    const res = await fetch(SUPABASE_FUNCTIONS_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + session.access_token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_ids: [user.id],
        title: '🎉 Test notification',
        body: 'If you see this, push works!',
        tag: 'test'
      })
    })

    const result = await res.json()
    console.log('[push] test result:', result)

    if (result.sent > 0) {
      if (typeof showToast === 'function') showToast(`Test sent (${result.sent} device${result.sent > 1 ? 's' : ''})`, 'success')
    } else {
      if (typeof showToast === 'function') showToast('No subscriptions found — enable notifications first', 'error')
    }
  } catch (err) {
    console.error('[push] test failed:', err)
    if (typeof showToast === 'function') showToast('Test failed: ' + (err.message || 'unknown'), 'error')
  }
}

// Expose for the admin test button
window.enablePushNotifications = enablePushNotifications
window.testPushToSelf = testPushToSelf

