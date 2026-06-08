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
function isValidLocalWhatsapp(num) {
    const clean = num.replace(/\D/g, '')
    return /^\d{8}$/.test(clean)
}

function isEligibleForSignup(num) {
  const clean = num.replace(/\D/g, '')
  return /^\d{8}$/.test(clean) && /^(16|17|77)/.test(clean)
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
      showToast('This number is not eligible for registration. Must start with 16, 17, or 77.', 'error')
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
  if (!/^\d{8}$/.test(clean)) {
    showToast('Enter a valid 8-digit WhatsApp number', 'error')
    return
  }

  setAuthButtonLoading(true, authMode === 'login' ? 'Signing in…' : 'Creating account…')

  if (authMode === 'signup') {
    if (!/^(16|17|77)/.test(clean)) {
      showToast('This number is not eligible. Must start with 16, 17, or 77.', 'error')
      setAuthButtonLoading(false)
      return
    }
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
      supabaseClient.channel('payment-status-' + user.id)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        }, (payload) => {
          if (payload.new?.fee_paid === true && payload.old?.fee_paid !== true) {
            showToast('Payment verified! Welcome aboard.', 'success')
            showNormalApp().then(() => switchTab('home'))
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
  if (isAdmin()) document.getElementById('admin-link').classList.remove('hidden')

  // Update profile cards
  await updateProfileCards()

  // Load all home-screen data IN PARALLEL so the user doesn't wait for
  // sequential network round-trips. We wrap each call in catch() so one
  // slow/failing source can't block the rest of the home from rendering.
  await Promise.all([
    Promise.resolve().then(() => loadFixtures()).catch(e => console.error('loadFixtures', e)),
    Promise.resolve().then(() => loadLeaderboard()).catch(e => console.error('loadLeaderboard', e)),
    Promise.resolve().then(() => loadHome()).catch(e => console.error('loadHome', e)),
  ])

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
    const pts = pred?.points_awarded || 0

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
    const timeStr = ko.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })

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

    return `
    <div class="glass-fixture relative" data-fixture="${f.id}">
      ${ptsBadge}

      <div class="fixture-stage-label">
        <span>${f.stage}</span>
        <span class="fixture-status-badge ${statusClass}">${statusText}</span>
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

      showToast('Prediction saved', 'success')
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
    // ── Bonus Engine Helpers ──
async function getLeaderboardFromResults() {
  // Fetch prediction_results and profiles separately (no FK relationship between them)
  const [{ data: results, error: resError }, { data: profiles, error: profError }] = await Promise.all([
    supabaseClient.from('prediction_results').select('*'),
    supabaseClient.from('profiles').select('id, full_name, department')
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
        name: p.full_name || 'Unknown',
        full_name: p.full_name || 'Unknown',
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

  const userIds = [...new Set((results || []).map(r => r.user_id))]
  const stats = userIds.map(uid => {
    const userResults = results.filter(r => r.user_id === uid)
    let engineStats
    try {
      if (typeof BonusEngine !== 'undefined' && BonusEngine.aggregateUserStats) {
        engineStats = BonusEngine.aggregateUserStats(uid, userResults)
      } else {
        // Fallback: calculate stats manually if BonusEngine is not loaded
        let points = 0, exact = 0, gd = 0, result = 0
        userResults.forEach(r => {
          points += r.final_points || r.points_awarded || 0
          if (r.final_points === 5 || r.points_awarded === 5) exact++
          else if (r.final_points === 3 || r.points_awarded === 3) gd++
          else if (r.final_points === 2 || r.points_awarded === 2) result++
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
      name: profile.full_name || 'Unknown',
      full_name: profile.full_name || 'Unknown',
      department: profile.department || '',
      ...engineStats
    }
  })

  stats.sort((a, b) => b.points - a.points)
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

  // Fallback: sum points from local predictions if leaderboard row is missing
  const myPredPoints = predictions.reduce((sum, p) => sum + (p.points_awarded || 0), 0)

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
    cdEl.textContent = `in ${msToCountdown(diff)}`

   nextEl.innerHTML = `
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
            ${ko.toLocaleString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} · ${ko.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
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
            <button onclick="switchTab('predictions')" class="bg-brand-900 text-white text-xs font-semibold px-3 py-2 rounded-xl tap">${pred ? 'Change' : 'Predict'}</button>
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
  const pts = pred?.points_awarded || 0
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
        const { data } = await supabaseClient
          .from('predictions')
          .select('user_id, points_awarded, fixture_id')
          .in('fixture_id', md.fixtureIds)
        if (!data) return []
        // Need user names — pull from profiles (or fall back to "Anonymous")
        const userIds = [...new Set(data.map(p => p.user_id))]
        let profMap = {}
        if (userIds.length) {
          const { data: profs } = await supabaseClient
            .from('profiles').select('id, name, department').in('id', userIds)
          ;(profs || []).forEach(p => { profMap[p.id] = p })
        }
        const agg = {}
        data.forEach(p => {
          const uid = p.user_id
          if (!agg[uid]) agg[uid] = { user_id: uid, points: 0, exact: 0, gd: 0, result: 0, name: profMap[uid]?.name || 'Anonymous', department: profMap[uid]?.department || '' }
          agg[uid].points += (p.points_awarded || 0)
          // crude bucketing — exact = full match points, others lumped into "result"
          // (real exact/gd/result split would need fixture-aware scoring rules; we don't need it here)
        })
        return Object.values(agg)
          .filter(s => s.points > 0 || s.user_id === getUser()?.id) // keep self even with 0
          .sort((a, b) => b.points - a.points)
      } catch (e) { return [] }
    }

    // Compute current scoring-streaks for everyone, in one query.
    // A streak = consecutive most-recent finished predictions where points_awarded > 0.
    async function computeStreaks() {
      try {
        const { data } = await supabaseClient
          .from('prediction_results')
          .select('user_id, final_points, kickoff')
          .gt('final_points', 0)
        if (!data) return {}
        // Keep only resolved fixtures
        const resolved = data
        // Group by user, sort each user's predictions by kickoff desc, then count consecutive >0 from start
        const byUser = {}
        resolved.forEach(p => {
          if (!byUser[p.user_id]) byUser[p.user_id] = []
          byUser[p.user_id].push(p)
        })
        const streaks = {}
        Object.entries(byUser).forEach(([uid, preds]) => {
          preds.sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))
          let s = 0
          for (const p of preds) {
            if ((p.final_points || 0) > 0) s++
            else break
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

      // Render fresh HTML
      c.innerHTML = stats.map((s, i) => {
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

        // Projected winnings inline for top 3 in overall tab
        let projectedHtml = ''
        if (lbSubtab === 'overall' && lbPrizeBreakdown && rank >= 1 && rank <= 3 && hasPoints) {
          const amt = lbPrizeBreakdown.splits[rank - 1]?.amount || 0
          if (amt > 0) projectedHtml = `<span class="lb-projected">Projected: ${fmtMoney(lbPrizeBreakdown.currency, amt)}</span>`
        }

        // Matchday tab uses simpler stats
        const hasAnyStats = (s.points || 0) > 0 || (s.exact || 0) > 0 || (s.gd || 0) > 0 || (s.result || 0) > 0
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
            ${projectedHtml}
          </div>
          <div class="text-right shrink-0">
            <div class="points-num font-bold text-brand-700" data-points-el>${s.points || 0}</div>
            <div class="points-label text-ink-400 uppercase tracking-wider font-semibold">pts</div>
          </div>
        </div>`
      }).join('')

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
  // 1) Predictions: ALL events
  supabaseClient.channel('lb')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'predictions' }, (payload) => {
      // Notify current user when their points change
      if (payload.eventType === 'UPDATE' && payload.new?.points_awarded > 0) {
        const myId = getUser()?.id
        const oldPts = payload.old?.points_awarded || 0
        if (myId && payload.new.user_id === myId && payload.new.points_awarded !== oldPts) {
          showToast(`You scored ${payload.new.points_awarded} points!`, 'success')
        }
      }
      loadLeaderboard(); loadFixtures(); loadHome()
    })
    .subscribe((status) => {
      if (status !== 'SUBSCRIBED') console.log('LB channel status:', status)
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
    })
    .subscribe((status) => {
      if (status !== 'SUBSCRIBED') console.log('FX channel status:', status)
    })

  // 3) Profiles
  supabaseClient.channel('prize-pool')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, (payload) => {
      console.log('[Realtime] Profile change detected:', payload.eventType, payload.new?.id)
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
      if (typeof newVal === 'boolean') {
        const oldVal = privateLeaguesEnabled
        privateLeaguesEnabled = newVal
        console.log('[Realtime] Private leagues toggled:', oldVal, '→', newVal)
        // If user is on profile tab, re-render leagues section immediately
        const profileTab = document.getElementById('tab-profile')
        if (profileTab && !profileTab.classList.contains('hidden')) {
          loadMyLeagues()
        }
        // Show toast if value actually changed
        if (oldVal !== newVal) {
          showToast(newVal ? 'Private leagues are now enabled!' : 'Private leagues have been disabled', 'info')
        }
      }
    })
    .subscribe((status) => {
      console.log('[Realtime] System settings channel status:', status)
    })

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
          homeCd.textContent = 'kicking off'
          delete homeCd.dataset.cdHome
          // refresh the home view so the now-locked match transitions correctly
          setTimeout(() => { if (typeof loadHome === 'function') loadHome() }, 2000)
        } else {
          homeCd.textContent = `in ${msToCountdown(ms)}`
        }
      }

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
  if (phoneEl) phoneEl.textContent = phone.replace('+975', '') || '—'

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
        const finished = (myPreds || []).filter(p => {
          const f = fixtures.find(x => x.id === p.fixture_id)
          return f && f.home_score !== null && (p.points_awarded || 0) > 0
        }).length
        streakEl.textContent = finished > 0 ? finished : 0
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

  const history = predictions
    .map(p => {
      const f = fixtures.find(x => x.id === p.fixture_id)
      if (!f) return null
      const hasResult = f.home_score !== null && f.away_score !== null
      const pts = p.points_awarded || 0
      return {
        ...p,
        fixture: f,
        hasResult,
        pts,
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

    let statusBadge, scoreDisplay

    if (!predicted) {
      statusBadge = '<span class="text-[10px] font-bold bg-gray-100 text-gray-400 px-2 py-1 rounded-full">MISSED</span>'
      scoreDisplay = '<span class="text-xs text-ink-400">No prediction</span>'
    } else if (!h.hasResult) {
      statusBadge = '<span class="text-[10px] font-bold bg-brand-50 text-brand-700 px-2 py-1 rounded-full">PENDING</span>'
      scoreDisplay = '<span class="text-sm font-bold text-ink-900">' + h.home_prediction + ' – ' + h.away_prediction + '</span>'
    } else {
      const ptsColor = pts === 5 ? 'bg-emerald-500 text-white' : pts === 3 ? 'bg-blue-500 text-white' : pts === 2 ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-500'
      const ptsLabel = pts === 5 ? '+5 EXACT' : pts === 3 ? '+3 GD' : pts === 2 ? '+2 WIN' : '0 PTS'
      statusBadge = '<span class="text-[10px] font-bold ' + ptsColor + ' px-2 py-1 rounded-full">' + ptsLabel + '</span>'
      scoreDisplay = '<div class="flex items-center gap-2"><span class="text-sm font-bold ' + (pts > 0 ? 'text-ink-900' : 'text-ink-400') + '">' + h.home_prediction + ' – ' + h.away_prediction + '</span><span class="text-ink-300 text-xs">vs</span><span class="text-sm font-bold text-ink-900">' + f.home_score + ' – ' + f.away_score + '</span></div>'
    }

    return '<div class="flex items-center gap-3 p-3 rounded-2xl ' + (h.hasResult ? (h.pts > 0 ? 'bg-emerald-50/50 border border-emerald-100' : 'bg-gray-50 border border-gray-100') : 'bg-paper border border-paper-border') + '"><div class="flex items-center gap-1.5 shrink-0">' + flagHtml(f.home_team, 20) + '<span class="text-xs font-bold text-ink-400">vs</span>' + flagHtml(f.away_team, 20) + '</div><div class="flex-1 min-w-0"><div class="flex items-center gap-2 mb-0.5"><span class="text-xs font-semibold text-ink-700 truncate">' + f.home_team + ' vs ' + f.away_team + '</span>' + statusBadge + '</div><div class="text-[11px] text-ink-500">' + new Date(f.kickoff).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' · ' + f.stage + '</div>' + (predicted ? '<div class="mt-1">' + scoreDisplay + '</div>' : '') + '</div></div>'
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

const appUrl = window.location.origin // cleaner than /index.html

const message = `🏆 WC 2026 Prediction League

I'm ranked *#${rank}* of ${total} with *${points} points!*

Think you can beat me? Join the league 👇
${appUrl}`

const encoded = encodeURIComponent(message)

window.open(`https://wa.me/?text=${encoded}`, '_blank')

showToast('Opening WhatsApp...', 'success')
  } catch (e) {
    console.error('Error sharing rank:', e)
    showToast('Failed to share rank', 'error')
  }
}

// ============== BADGES (Feature 2) ==============
    function computeMyBadges() {
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

      // On Fire: current streak of 3+ point-scoring predictions in finished matches
      let streak = 0
      for (let i = finishedPreds.length - 1; i >= 0; i--) {
        if ((finishedPreds[i].p.points_awarded || 0) > 0) streak++
        else break
      }
      if (streak >= 3) earned.add('streak')

      // All In: predicted every match that has either finished or has a prediction window
      const predictableFixtures = fixtures.filter(f => predictions.find(p => p.fixture_id === f.id))
      if (fixtures.length > 0 && predictableFixtures.length === fixtures.length) earned.add('allin')

      return { earned, streak, exactCount }
    }

    async function renderBadges() {
      const host = document.getElementById('profile-badges')
      const streakEl = document.getElementById('profile-streak')
      if (!host) return

      const { earned, streak } = computeMyBadges()

      // Champion + Centurion need leaderboard data
      try {
        const { data: stats } = await getLeaderboardFromResults()
        const myId = getUser()?.id
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
        return `
          <div class="badge-card ${got ? 'earned' : 'locked'}">
            ${got ? '<div class="badge-earned-tick">✓</div>' : ''}
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
          </div>`
      }).join('')

      if (streak >= 2) {
        streakEl.className = 'streak-chip'
        streakEl.innerHTML = `🔥 <span>${streak} in a row</span>`
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
async function showApp() {
  try {
    document.getElementById('auth-screen').classList.add('hidden')
    document.getElementById('app-shell').classList.remove('hidden')

    const profile = getProfile()
    document.getElementById('user-name').textContent = profile?.name || 'Player'

    if (!profile?.fee_paid && !isAdmin()) {
      showPaymentGate()
      return
    }

    await showNormalApp()
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
    function switchTab(tab) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'))
      const target = document.getElementById(`tab-${tab}`)
      target.classList.remove('hidden')
      // re-trigger animation
      target.style.animation = 'none'; target.offsetHeight; target.style.animation = ''
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab))
      if (tab === 'home') loadHome()
      if (tab === 'leaderboard') previewMode ? renderPreviewLeaderboard() : loadLeaderboard()
      if (tab === 'predictions') previewMode ? renderFixtures() : loadFixtures()
      if (tab === 'profile' && !previewMode) {
    renderBadges()
    updateProfileCards()
  }
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

  // Generate a unique 6-character invite code
  let inviteCode;
  let attempts = 0;
  do {
    inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    const { data: existing } = await supabaseClient
      .from('leagues')
      .select('id')
      .eq('invite_code', inviteCode)
      .single();
    if (!existing) break;
    attempts++;
  } while (attempts < 10);

  if (attempts >= 10) throw new Error('Failed to generate unique code');

  const { data, error } = await supabaseClient
    .from('leagues')
    .insert({
      name: name,
      invite_code: inviteCode,
      created_by: user.id,
    })
    .select()
    .single();

  if (error) throw error;
  return { data, error: null };
}

async function joinLeagueByCode(inviteCode) {
  const user = getUser();
  if (!user) throw new Error('Not authenticated');

  // Find the league
  const { data: league, error: leagueError } = await supabaseClient
    .from('leagues')
    .select('*')
    .eq('invite_code', inviteCode.toUpperCase())
    .single();

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

async function handleCreateLeagueClick() {
    const profile = getProfile()

    // Check if private leagues are enabled globally
    const enabled = await checkPrivateLeaguesEnabled()
    if (!enabled) {
        showToast('Private leagues are coming soon! Stay tuned.', 'info')
        return
    }

    // Only paid users can create
    if (!profile?.fee_paid) {
        showToast('Complete your entry fee to create private leagues', 'warning')
        return
    }

    showCreateLeagueModal()
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
    // Payment gate: unpaid users cannot join leagues
    const profile = getProfile()
    if (!profile?.fee_paid) {
        showToast('Complete your entry fee to join private leagues', 'warning')
        return
    }
    const enabled = await checkPrivateLeaguesEnabled()
    if (!enabled) {
        showToast('Private leagues are coming soon! Stay tuned.', 'info')
        return
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

    // Payment gate: unpaid users cannot create or join leagues
    const profile = getProfile()
    if (!profile?.fee_paid) {
        if (createBtn) {
            createBtn.textContent = 'Pay to Create'
            createBtn.classList.add('opacity-50', 'cursor-not-allowed')
            createBtn.classList.remove('tap')
            createBtn.onclick = () => showToast('Complete your entry fee first', 'warning')
        }
        if (joinWrap) {
            joinWrap.innerHTML = `
                <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                    <div class="text-2xl mb-2">🔒</div>
                    <div class="text-sm font-bold text-amber-800">Payment Required</div>
                    <p class="text-xs text-amber-700 mt-1">Pay Nu. 500 entry fee to join private leagues</p>
                    <button onclick="switchTab('home')" class="mt-2 bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-xl tap">Go to Payment</button>
                </div>
            `
        }
        container.innerHTML = `
            <div class="text-center py-4">
                <div class="text-3xl mb-2 opacity-40">🏆</div>
                <div class="text-sm font-semibold text-ink-700">Private Leagues</div>
                <p class="text-xs text-ink-500 mt-1">Available after payment verification</p>
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
    const { data, error } = await supabaseClient
        .from('league_memberships')
        .select('user_id, profiles:user_id (id, full_name, name, department, avatar_url)')
        .eq('league_id', leagueId);
    if (error) return { data: null, error };
    const members = (data || []).map(row => ({
        id: row.user_id,
        name: row.profiles?.full_name || row.profiles?.name || 'Anonymous',
        department: row.profiles?.department || '',
        avatar_url: row.profiles?.avatar_url || null
    }));
    return { data: members, error: null };
}


// ============== LEAGUE LEADERBOARD ==============

async function getLeagueLeaderboard(leagueId) {
    // Get all members of this league
    const { data: members, error: membersError } = await getLeagueMembers(leagueId)
    if (membersError || !members?.length) return []

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
        if ((r.final_points || r.points_awarded || 0) === 5) s.exact++
        else if ((r.final_points || r.points_awarded || 0) === 3) s.gd++
        else if ((r.final_points || r.points_awarded || 0) === 2) s.result++
        s.total_predictions++
    })

    // Sort by points desc, then exact, then gd, then result
    return Object.values(stats).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points
        if (b.exact !== a.exact) return b.exact - a.exact
        if (b.gd !== a.gd) return b.gd - a.gd
        return b.result - a.result
    })
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
    if (tab === 'profile' && !previewMode) {
        loadMyLeagues()
    }
    _originalSwitchTab(tab)
}

// ============== INIT: LOAD SYSTEM SETTINGS ==============

const _originalInitApp = initApp
initApp = async function() {
    // Pre-check system settings
    await checkPrivateLeaguesEnabled()
    await _originalInitApp()
}

// ============== LEAGUE MANAGEMENT ==============

async function deleteMyLeague(leagueId) {
    if (!confirm('Delete this league? All members will be removed. This cannot be undone.')) return

    const { error } = await supabaseClient
        .from('leagues')
        .delete()
        .eq('id', leagueId)
        .eq('created_by', getUser()?.id)

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
            .single()
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