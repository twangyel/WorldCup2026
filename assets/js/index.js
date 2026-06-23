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
    const safeName = escapeHtml(name || 'Unknown');

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
                alt="${safeName}"
                class="${flagClass} shrink-0"
                onerror="this.style.display='none';this.nextElementSibling.style.display='inline-flex'"
            >
            <span
                class="${flagClass} flag-fallback shrink-0"
                style="display:none;font-size:${Math.max(10, size * 0.35)}px;"
                title="${safeName}"
            >
                ${f.emoji}
            </span>
        `;
    }

    return `<span class="text-xl" title="${safeName}">${f.emoji}</span>`;
}


// Generate initials from a name
function getInitials(name) {
  if (!name || typeof name !== 'string') return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}


// ============== APP THEME / DARK MODE ==============
const WCPL_THEME_STORAGE_KEY = 'wcpl-theme';

function getSavedThemeMode() {
  try {
    return localStorage.getItem(WCPL_THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch (_) {
    return 'light';
  }
}

function updateDarkModeToggleUI(isDark) {
  const toggle = document.getElementById('dark-mode-toggle');
  const status = document.getElementById('dark-mode-status-text');
  const knob = toggle?.querySelector('.dark-theme-switch-knob');

  if (toggle) {
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.classList.toggle('is-on', !!isDark);
  }
  if (status) {
    status.textContent = isDark
      ? 'Night theme is active — easy on the eyes'
      : 'Premium night theme for match days';
  }
  if (knob) {
    knob.textContent = isDark ? '☀' : '✦';
  }
}

function applyThemeMode(mode, options = {}) {
  const isDark = mode === 'dark';
  document.documentElement.classList.toggle('dark-mode', isDark);
  if (document.body) document.body.classList.toggle('dark-mode', isDark);

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDark ? '#070A12' : '#FAFAF7');

  if (options.persist !== false) {
    try { localStorage.setItem(WCPL_THEME_STORAGE_KEY, isDark ? 'dark' : 'light'); } catch (_) {}
  }

  updateDarkModeToggleUI(isDark);
}

function toggleDarkMode() {
  const nextMode = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
  applyThemeMode(nextMode);
  if (typeof showToast === 'function') {
    showToast(nextMode === 'dark' ? 'Dark mode enabled' : 'Light mode enabled', 'info');
  }
}

function initThemeMode() {
  applyThemeMode(getSavedThemeMode(), { persist: false });
}

document.addEventListener('DOMContentLoaded', initThemeMode);

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
  const initials = escapeHtml(getInitials(name));
  const safeName = escapeHtml(name || '');
  const medalClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';

  if (avatarUrl) {
    // Render initials as the base layer; layer the <img> on top. If the image
    // fails to load, onerror just removes it and the initials show through —
    // no user-controlled data is interpolated into the onerror handler.
    return `<div class="lb-avatar ${medalClass}" style="width:${size}px;height:${size}px;padding:0;overflow:hidden;position:relative;">
      <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">${initials}</span>
      <img src="${escapeHtml(avatarUrl)}" alt="${safeName}" class="w-full h-full object-cover" style="position:relative;z-index:1;" onerror="this.remove()">
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
      // Build with safe DOM APIs so caller-supplied `message` can never inject HTML
      const iconSpan = document.createElement('span')
      iconSpan.className = 'w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0'
      iconSpan.textContent = icon
      const msgSpan = document.createElement('span')
      msgSpan.className = 'flex-1'
      msgSpan.textContent = String(message ?? '')
      toast.appendChild(iconSpan)
      toast.appendChild(msgSpan)
      container.appendChild(toast)
      requestAnimationFrame(() => { toast.classList.remove('toast-enter'); toast.classList.add('toast-shown') })
      setTimeout(() => { toast.classList.remove('toast-shown'); toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 280) }, 2800)
    }


    // ============== PUSH NOTIFICATIONS ==============


function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}


const VAPID_PUBLIC_KEY = 'BKm0WC3YIjEiw2CSBANy61L3EEsIt8wQfvYTCzgPak1vuUHazry42ac8H3MysBKaWTcgyREM9_prFBgToYgvGKI';

async function enablePushNotifications(role = 'user') {
  try {
    if (!('serviceWorker' in navigator)) {
      showToast('Push not supported on this browser', 'error');
      return;
    }

    if (!('PushManager' in window)) {
      showToast('Push notifications not supported', 'error');
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      showToast('Notification permission denied', 'warning');
      return;
    }

    const registration = await navigator.serviceWorker.ready;

    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });
    }

    const subJson = subscription.toJSON();
    const user = typeof getUser === 'function' ? getUser() : null;

    if (!user?.id) {
      showToast('Please login first to enable push', 'error');
      return;
    }

    const { error } = await supabaseClient
      .from('push_subscriptions')
      .upsert({
        user_id: user.id,
        endpoint: subJson.endpoint,
        p256dh: subJson.keys?.p256dh,
        auth: subJson.keys?.auth,
        role,
        user_agent: navigator.userAgent,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'endpoint'
      });

    if (error) {
      console.error('Push subscription save failed:', error);
      showToast('Could not save push subscription', 'error');
      return;
    }

    localStorage.setItem('push-enabled', 'true');
    showToast('Push notifications enabled', 'success');

  } catch (err) {
    console.error('Enable push failed:', err);
    showToast('Push setup failed', 'error');
  }
}
    

    // ============== MODAL ==============
    function showModal({ icon, title, message, messageHtml, actions }) {
      const overlay = document.getElementById('modal-overlay')
      const panel = document.getElementById('modal-content')
      document.getElementById('modal-icon').textContent = icon
      document.getElementById('modal-title').textContent = title
      const msgEl = document.getElementById('modal-message')
      if (messageHtml !== undefined) {
        msgEl.innerHTML = messageHtml
      } else {
        msgEl.textContent = message
      }
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

  // Stage v3: when a valid invite code is in flight, signup carries the
  // entered_via_private flag so the new profile bypasses the global gate.
  const isInviteSignup = v3InviteLinkEnabled
                         && authMode === 'signup'
                         && _pendingInvite?.league != null
  const signUpOpts = isInviteSignup ? { enteredViaPrivate: true } : {}

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

    const { error } = await signUpUser(name, whatsapp, password, signUpOpts)
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
    // Issue starter inventory cards after successful login
    console.log('[Inventory] About to call checkAndIssueStarterCards, currentUser:', currentUser?.id)
    if (typeof checkAndIssueStarterCards === 'function') {
      await checkAndIssueStarterCards()
    }
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
              icon: 'lock',
              title: 'Payment status revoked',
              message: 'An admin has marked your entry fee as unpaid. You will be signed out. Please contact the admin if this is a mistake.',
              actions: [
                { text: 'OK', onclick: 'beginRevokeSignOut()', class: 'bg-red-600 text-white' }
              ]
            })
          }
          // Stage 6: removed realtime handlers for profiles.private_leagues_access.
          // The column is dropped. In v2/v3, access is per-membership and handled
          // by the v2-memberships channel above.
        })
        .subscribe()
    }

    // Realtime subscription for inventory feature state
// Realtime subscription for inventory feature state
function subscribeToInventorySettings() {
  supabaseClient
    .channel('inventory-settings')
    .on('postgres_changes', 
      { event: '*', schema: 'public', table: 'system_settings', filter: 'key=eq.inventory_enabled' },
      (payload) => {
        console.log('[Inventory] Settings changed:', payload);
        // Re-render inventory card with new state
        renderInventoryCard();
      }
    )
    .subscribe((status) => {
      console.log('[Inventory] Realtime subscription status:', status);
    });
}

// Call this during app initialization
document.addEventListener('DOMContentLoaded', function() {
  // ... existing init code ...
  subscribeToInventorySettings();
});

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
  }

  // Update profile cards
  await updateProfileCards()

  // Seed the prediction_results cache before loading home/fixtures so that
  // the "+N pts" badges and recent-results pills render correct values on
  // first paint instead of zeros. (Bug 3 expanded)
  await refreshMyResultsCache().catch(e => console.error('refreshMyResultsCache', e))

  // Load this user's active card plays so the prediction form knows whether
  // to render alt-score inputs / DOUBLE POINTS badges, then subscribe to changes.
  await loadMyCardPlays().catch(e => console.error('loadMyCardPlays', e))
  subscribeToMyCardPlays()

  // Social caches: needs `fixtures` to be loaded, so do this AFTER loadFixtures
  // resolves below. We just kick off the first refresh in the background here.

  // Stage v3 fix: resolve scopes BEFORE the parallel data loads. Otherwise
  // the first loadLeaderboard() runs with activeLeagueId=null and briefly
  // renders the global leaderboard into the DOM, which a private-only user
  // shouldn't see at all. By moving this up, activeLeagueId is already set
  // when the parallel loads kick off → loadLeaderboard immediately routes
  // to loadLeagueLeaderboardView for private-scope users.
  try {
    if (typeof checkPrivateLeaguesV2Enabled === 'function') {
      await checkPrivateLeaguesV2Enabled()
    }
    if (typeof initScopeOnLogin === 'function') {
      await initScopeOnLogin()
    }
  } catch (e) {
    console.warn('[Stage v3] early scope init failed:', e)
  }

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

// Cache of this user's non-refunded card plays, keyed by fixture_id.
// Refreshed on login + after executeCardPlay + via realtime subscription.
let myCardPlaysByFixture = {};

async function loadMyCardPlays() {
  myCardPlaysByFixture = {};
  const u = (typeof getUser === 'function' ? getUser() : null);
  if (!u?.id) return;
  try {
    const { data, error } = await supabaseClient
      .from('card_plays')
      .select('fixture_id, card_type, status, result_summary')
      .eq('user_id', u.id)
      .neq('status', 'refunded');
    if (error) { console.error('[card_plays] load failed:', error); return; }
    (data || []).forEach(p => { myCardPlaysByFixture[p.fixture_id] = p; });
  } catch (e) { console.error('[card_plays] load exception:', e); }
}

function subscribeToMyCardPlays() {
  const u = (typeof getUser === 'function' ? getUser() : null);
  if (!u?.id) return;
  supabaseClient
    .channel('my-card-plays')
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'card_plays',
        filter: `user_id=eq.${u.id}` },
      async () => {
        await loadMyCardPlays();
        if (typeof renderFixtures === 'function') renderFixtures();
      }
    )
    .subscribe();
}

// ============== NAVIGATION HISTORY ==============
let navHistory = []           // Stack of visited tabs for back navigation
let currentNavIndex = -1      // Current position in history
let isNavigatingBack = false  // Flag to prevent pushing during popstate handling

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
  { id: 'nostradamus', icon: '🔮', name: 'Nostradamus',   desc: '2+ exact scores total' },
  { id: 'sharpshoot',  icon: '🎯', name: 'Sharpshooter',  desc: '5+ exact scores' },
  { id: 'combo',       icon: '🔗', name: 'Combo King',     desc: '3+ exact combos' },
  { id: 'earlybird',   icon: '🐦', name: 'Early Bird',    desc: 'Predict 72h+ early' },
  { id: 'underdog',    icon: '🐴', name: 'Draw Master', desc: '3+ correct draws' },
  { id: 'streak',      icon: 'flame', name: 'Hot Streak',     desc: '3+ scoring in a row' },
  { id: 'centurion',   icon: '🏅', name: 'Centurion',     desc: '100+ points' },
  { id: 'allin',       icon: '🎲', name: 'All In',        desc: 'Predict every match' }
]

// Premium PNG achievement icons.
// Keeps badges dynamic: logic still uses badge IDs; only the UI image changes.
// Put the PNG files in: /image/badges/
const BADGE_VISUALS = {
  champion: {
    emoji: '👑',
    img: '/image/badges/champion.png'
  },
  nostradamus: {
    emoji: '🔮',
    img: '/image/badges/nostradamus.png'
  },
  sharpshoot: {
    emoji: '🎯',
    img: '/image/badges/sharpshooter.png'
  },
  combo: {
    emoji: '🔗',
    img: '/image/badges/combo-king.png'
  },
  earlybird: {
    emoji: '🐦',
    img: '/image/badges/early-bird.png'
  },
  underdog: {
    emoji: '🐴',
    img: '/image/badges/underdog-king.png'
  },
  streak: {
    emoji: '🔥',
    img: '/image/badges/hot-streak.png'
  },
  centurion: {
    emoji: '🏅',
    img: '/image/badges/centurion.png'
  },
  allin: {
    emoji: '🎲',
    img: '/image/badges/all-in.png'
  },
  overflow: {
    emoji: '🏆',
    img: '/image/badges/overflow.png'
  }
}

function normalizeBadgeIconId(id) {
  if (id === 'streak-chip') return 'streak'
  if (id === 'combo-chip') return 'combo'
  return id || 'overflow'
}

function badgeShareEmoji(id) {
  return (BADGE_VISUALS[normalizeBadgeIconId(id)] || BADGE_VISUALS.overflow).emoji
}

function badgeIconHtml(id, className = 'badge-icon-art') {
  const key = normalizeBadgeIconId(id)
  const visual = BADGE_VISUALS[key] || BADGE_VISUALS.overflow
  const isLeaderboard = className.includes('lb-badge')
  const isInfoPopup = className.includes('info-popup')

  const size = isLeaderboard ? 18 : (isInfoPopup ? 78 : 58)
  const margin = isLeaderboard ? '0' : '0 auto 8px'
  const wrapperStyle = `display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;`
  const imgStyle = `width:${size}px;height:${size}px;object-fit:contain;display:block;margin:${margin};`

  return `
    <span class="${className} badge-${key}" aria-hidden="true" style="${wrapperStyle}">
      <img
        src="${visual.img}"
        alt=""
        class="badge-img-asset ${isLeaderboard ? 'lb-badge-img' : 'badge-img'}"
        loading="lazy"
        style="${imgStyle}"
        onerror="this.replaceWith(document.createTextNode('${visual.emoji || '🏆'}'))"
      >
    </span>`
}

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

  // BATCH PREDICTION WINDOW: keep multiple upcoming matches open
  // so users can predict night games in advance and not forget.
  // Strategy: next 3 matches OR all matches within 48h, whichever covers more.
  const upcoming = fixtures
    .filter(f => new Date(f.kickoff) > now && f.home_score === null)
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))

  // Build the set of open match IDs
  const openMatchIds = new Set()
  const BATCH_SIZE = 3           // minimum number of open matches
  const BATCH_HOURS = 48         // hours ahead to keep open
  const batchDeadline = new Date(now.getTime() + BATCH_HOURS * 3600 * 1000)

  upcoming.forEach((f, i) => {
    // Always include the first BATCH_SIZE matches
    if (i < BATCH_SIZE) openMatchIds.add(f.id)
    // Also include any match within BATCH_HOURS
    if (new Date(f.kickoff) <= batchDeadline) openMatchIds.add(f.id)
  })

  // The "next" match is the earliest one (for warning banner focus)
  const nextMatchId = upcoming[0]?.id || null

  // ===== Lock warning banner (Feature 3) =====
  // Warn about the EARLIEST closing match among ALL open matches
  const warnHost = document.getElementById('fixtures-lock-warn')
  if (warnHost) {
    const openMatches = upcoming.filter(f => openMatchIds.has(f.id))
    if (openMatches.length > 0) {
      const mostUrgent = openMatches[0]
      const ms = new Date(mostUrgent.kickoff) - now
      const mins = ms / 6e4
      const urgent = mins <= 10
      const closingSoon = openMatches.filter(f => (new Date(f.kickoff) - now) <= 60 * 60 * 1000)
      if (closingSoon.length > 0) {
        const multi = closingSoon.length > 1
        warnHost.innerHTML = `
          <div class="lock-warn ${urgent ? 'urgent' : ''} rounded-2xl px-4 py-3 flex items-center gap-3">
            <span class="text-lg">${urgent ? '🚨' : '⚠️'}</span>
            <div class="flex-1 min-w-0">
              <div class="text-[13px] font-bold leading-tight">${mostUrgent.home_team} vs ${mostUrgent.away_team}${multi ? ' <span class="opacity-70">(+' + (closingSoon.length - 1) + ' more)</span>' : ''}</div>
              <div class="text-[11px] opacity-80">Predictions lock in <span class="lock-warn-time" data-lockwarn="${mostUrgent.id}">${msToCountdown(ms)}</span></div>
            </div>
          </div>`
      } else {
        // Gentle reminder: X matches are open
        warnHost.innerHTML = `
          <div class="lock-warn rounded-2xl px-4 py-3 flex items-center gap-3" style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border-color: #86EFAC; color: #15803D;">
            <span class="text-lg">🔓</span>
            <div class="flex-1 min-w-0">
              <div class="text-[13px] font-bold leading-tight">${openMatches.length} match${openMatches.length !== 1 ? 'es' : ''} open for prediction</div>
              <div class="text-[11px] opacity-80">Next lock: ${mostUrgent.home_team} vs ${mostUrgent.away_team} · <span class="lock-warn-time" data-lockwarn="${mostUrgent.id}">${msToCountdown(ms)}</span></div>
            </div>
          </div>`
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
    const isOpen = openMatchIds.has(f.id)
    const isNextFixture = f.id === nextMatchId
    const timeLocked = isLocked(f.kickoff)
    const locked = previewMode || !isOpen || timeLocked
    const hP = pred ? pred.home_prediction : ''
    const aP = pred ? pred.away_prediction : ''
    const altH = pred?.alt_home_prediction ?? ''
    const altA = pred?.alt_away_prediction ?? ''
    const cardOnThisMatch = (typeof myCardPlaysByFixture !== 'undefined') ? myCardPlaysByFixture[f.id] : null
    const hasDoublePick   = cardOnThisMatch?.card_type === 'double_pick'
    const hasDoublePoints = cardOnThisMatch?.card_type === 'double_points'
    const pts = getPointsForFixture(f.id)   // Bug 3: was pred?.points_awarded (never written)

    // Status badge
    let statusClass, statusText
    if (hasScore) { statusClass = 'fixture-status-ft'; statusText = `FT ${f.home_score}–${f.away_score}`; }
    else if (locked && !previewMode) { statusClass = 'fixture-status-locked'; statusText = '🔒 Locked'; }
    else if (previewMode && !hasScore) { statusClass = 'fixture-status-preview'; statusText = 'Preview'; }
    else { statusClass = 'fixture-status-open'; statusText = isNextFixture ? 'Open — Next' : 'Open'; }

    const ptsBadge = pts > 0 ? `<div class="absolute -top-2 -right-2 px-3 py-1 bg-brand-500 text-white rounded-full text-xs font-bold shadow-lifted">+${pts} pts</div>` : ''

    // Date/time formatting
    const ko = new Date(f.kickoff)
    const dateStr = ko.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
    const timeStr = ko.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()

    // Score boxes (readonly or input) — with card badges + optional alt pick row
    const cardBadge = hasDoublePoints
      ? '<div style="display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg,#FFC964,#E07A1F);color:#3A2410;font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;letter-spacing:0.05em;margin-bottom:8px;">⚡ DOUBLE POINTS ACTIVE</div>'
      : hasDoublePick
        ? '<div style="display:inline-flex;align-items:center;gap:4px;background:linear-gradient(135deg,#7EC8FF,#2E6FBF);color:#fff;font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;letter-spacing:0.05em;margin-bottom:8px;">🎯 DOUBLE PICK ACTIVE</div>'
        : ''

    const primaryRow = locked
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

    const altRow = hasDoublePick
      ? (locked
          ? `<div style="font-size:10px;color:#6B7280;text-transform:uppercase;letter-spacing:0.1em;margin-top:12px;margin-bottom:4px;font-weight:700;">Alt pick</div>
             <div class="fixture-score-row">
               <div class="fixture-score-box">${altH !== '' ? altH : '–'}</div>
               <span class="fixture-score-divider">:</span>
               <div class="fixture-score-box">${altA !== '' ? altA : '–'}</div>
             </div>`
          : `<div style="font-size:10px;color:#6B7280;text-transform:uppercase;letter-spacing:0.1em;margin-top:12px;margin-bottom:4px;font-weight:700;">Alt pick (Double Pick)</div>
             <div class="fixture-score-row">
               <input type="number" min="0" inputmode="numeric" pattern="[0-9]*" class="fixture-score-box active" value="${altH}" onchange="updatePrediction('${f.id}','alt_home',this.value)">
               <span class="fixture-score-divider">:</span>
               <input type="number" min="0" inputmode="numeric" pattern="[0-9]*" class="fixture-score-box active" value="${altA}" onchange="updatePrediction('${f.id}','alt_away',this.value)">
             </div>`)
      : ''

    // -- Knockout advance pick (player side) ----------------------------------
    // For knockout fixtures, if the player's prediction (primary OR alt) is a draw,
    // they also need to pick which team wins on penalties. Hidden by default;
    // toggled by JS whenever the score inputs change. Pre-seeds pendingPredictions
    // from any saved advance_pick so existing state survives a re-render.
    const _isKnockoutFix = (typeof window !== 'undefined' && window.KnockoutScoring)
      ? window.KnockoutScoring.isKnockoutStage(f.stage)
      : false
    const _primaryDrawNow = hP !== '' && aP !== '' && Number(hP) === Number(aP)
    const _altDrawNow = hasDoublePick && altH !== '' && altA !== '' && altH !== null && altA !== null && Number(altH) === Number(altA)
    const _showAdvNow = _isKnockoutFix && (_primaryDrawNow || _altDrawNow)
    const _savedAdvPick = pred?.advance_pick || null

    // Pre-seed pending so visual state mirrors saved state on re-render.
    if (_isKnockoutFix && _savedAdvPick) {
      if (!pendingPredictions[f.id]) pendingPredictions[f.id] = {}
      if (pendingPredictions[f.id].advance_pick === undefined) {
        pendingPredictions[f.id].advance_pick = _savedAdvPick
      }
    }

    // Locked summary: when the fixture is locked and player has an advance pick,
    // show it inline so they remember what they picked.
    const advLockedSummary = (locked && _isKnockoutFix && _savedAdvPick && !previewMode)
      ? `<div class="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-2.5 py-1">
           <span>🥅</span>
           <span>Pen pick: ${_savedAdvPick === 'home' ? f.home_team : f.away_team}</span>
         </div>`
      : ''

    // Editable advance-pick panel — only for unlocked knockout fixtures.
    const advEditableHtml = (!locked && _isKnockoutFix)
      ? `<div id="adv-row-${f.id}" class="${_showAdvNow ? '' : 'hidden'}" style="margin-top:12px;padding:12px;background:#FEF3C7;border:1px solid #FDE68A;border-radius:12px;">
           <div style="font-size:11px;font-weight:800;color:#78350F;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
             <span>🥅</span><span>Who wins on penalties?</span>
           </div>
           <div style="display:flex;gap:8px;">
             <button id="adv-btn-home-${f.id}" onclick="setAdvancePick('${f.id}','home')"
                     class="tap" style="flex:1;padding:10px 8px;border-radius:8px;font-size:12px;font-weight:700;border:1px solid ${_savedAdvPick === 'home' ? '#D97706' : '#FCD34D'};background:${_savedAdvPick === 'home' ? '#D97706' : '#FFFFFF'};color:${_savedAdvPick === 'home' ? '#FFFFFF' : '#78350F'};transition:all 0.15s;">
               ${f.home_team}
             </button>
             <button id="adv-btn-away-${f.id}" onclick="setAdvancePick('${f.id}','away')"
                     class="tap" style="flex:1;padding:10px 8px;border-radius:8px;font-size:12px;font-weight:700;border:1px solid ${_savedAdvPick === 'away' ? '#D97706' : '#FCD34D'};background:${_savedAdvPick === 'away' ? '#D97706' : '#FFFFFF'};color:${_savedAdvPick === 'away' ? '#FFFFFF' : '#78350F'};transition:all 0.15s;">
               ${f.away_team}
             </button>
           </div>
           <div style="margin-top:6px;font-size:10px;color:#92400E;">If the match goes to pens, the team you pick is your winner.</div>
         </div>`
      : ''

    const scoreSection = cardBadge + (hasDoublePick
      ? `<div style="font-size:10px;color:#6B7280;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;font-weight:700;">Primary pick</div>${primaryRow}${altRow}`
      : primaryRow) + advEditableHtml + advLockedSummary

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

    const nextBadge = isNextFixture ? `<div class="fixture-next-badge">Next Match</div>` : isOpen ? `<div class="fixture-next-badge" style="background: linear-gradient(135deg, #10B981, #059669);">Open</div>` : ''

    // Hot Takes / Pick list: once kickoff has passed, anyone (paid) can see everyone's picks.
    // Render the action row for EVERY locked/past fixture. The actual list is now
    // fetched on-demand in toggleHotTakes(), so a stale cache can never hide buttons
    // or show a partial list.
    const picksCount = hotTakesByFixture[f.id]?.length || 0
    const showHotTakes = locked && !previewMode
    const hotTakesBlock = showHotTakes
      ? `<div class="px-5 pb-3">
          <div class="flex items-center gap-2 border-t border-paper-border/60 pt-1">
            <button id="hot-takes-btn-${f.id}" data-pick-count="${picksCount}" onclick="toggleHotTakes('${f.id}')"
                    class="flex-1 text-xs font-semibold text-ink-600 hover:text-ink-900 tap py-2">
              ${picksCount > 0 ? `See all picks (${picksCount})` : 'See all picks'}
            </button>
           ${isAdmin() ? `<button onclick="sharePickList('${f.id}')"
                    class="text-xs font-bold text-brand-700 hover:text-brand-900 tap py-2 px-3 rounded-lg"
                    style="background:rgba(212,162,76,0.10);"
                    title="Share pick list to WhatsApp">
              📤 Picks
            </button>
            ${(f.home_score !== null && f.away_score !== null) ? `<button onclick="shareMatchReport('${f.id}')"
                    class="text-xs font-bold text-emerald-700 hover:text-emerald-900 tap py-2 px-3 rounded-lg"
                    style="background:rgba(74,222,128,0.12);"
                    title="Share scoring breakdown to WhatsApp">
              📊 Report
            </button>` : ''}` : ''}
          </div>
          <div id="hot-takes-${f.id}" class="hidden mt-1"></div>
        </div>`
      : ''

return `
    <div class="glass-fixture relative ${isNextFixture ? 'fixture-next-highlight' : ''}" id="fixture-${f.id}" data-fixture="${f.id}">
      ${nextBadge}
      ${ptsBadge}

      <div class="fixture-stage-label">
        <span>${f.stage}</span>
        ${(isNextFixture || isOpen) ? '' : `<span class="fixture-status-badge ${statusClass}">${statusText}</span>`}
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
      // Knockout: show/hide pen-winner panel based on whether current state is a draw.
      _refreshAdvancePickUI(id)
    }

    // -- Knockout advance-pick helpers ------------------------------------------
    // The pen-winner panel below the score inputs shows when (a) the fixture is a
    // knockout and (b) the player's primary OR alt prediction is currently a draw.
    // It hides the moment scores are no longer a draw and clears the pending pick.

    function _scoreFor(id, key) {
      // pending value wins; falls back to the saved prediction value.
      const p = pendingPredictions[id] || {}
      if (p[key] !== undefined && p[key] !== '') return p[key]
      const pred = (typeof getPrediction === 'function') ? getPrediction(id) : null
      if (!pred) return ''
      const map = {
        home: 'home_prediction',
        away: 'away_prediction',
        alt_home: 'alt_home_prediction',
        alt_away: 'alt_away_prediction'
      }
      const v = pred[map[key]]
      return (v === null || v === undefined) ? '' : String(v)
    }

    function _refreshAdvancePickUI(id) {
      const f = (typeof fixtures !== 'undefined') ? fixtures.find(x => x.id === id) : null
      if (!f) return
      const row = document.getElementById('adv-row-' + id)
      if (!row) return  // not a knockout fixture or locked — no panel rendered
      const isKnockout = window.KnockoutScoring && window.KnockoutScoring.isKnockoutStage(f.stage)
      if (!isKnockout) { row.classList.add('hidden'); return }

      const ph = _scoreFor(id, 'home'),  pa = _scoreFor(id, 'away')
      const ah = _scoreFor(id, 'alt_home'), aa = _scoreFor(id, 'alt_away')
      const primaryDraw = ph !== '' && pa !== '' && Number(ph) === Number(pa)

      // Only consider alt-draw if Double Pick is armed on this match.
      const cp = (typeof myCardPlaysByFixture !== 'undefined') ? myCardPlaysByFixture[id] : null
      const hasDoublePick = cp?.card_type === 'double_pick'
      const altDraw = hasDoublePick && ah !== '' && aa !== '' && Number(ah) === Number(aa)

      if (primaryDraw || altDraw) {
        row.classList.remove('hidden')
      } else {
        row.classList.add('hidden')
        // Drop the pending pen pick when scores are no longer a draw — keeps the
        // save payload coherent. The DB CHECK constraint would also reject an
        // inconsistent state.
        if (pendingPredictions[id]) pendingPredictions[id].advance_pick = null
      }
    }

    function setAdvancePick(id, side) {
      if (!pendingPredictions[id]) pendingPredictions[id] = {}
      pendingPredictions[id].advance_pick = side  // 'home' or 'away'
      // Visual update on the two buttons (active gets amber-600 bg, idle gets white).
      const homeBtn = document.getElementById('adv-btn-home-' + id)
      const awayBtn = document.getElementById('adv-btn-away-' + id)
      if (!homeBtn || !awayBtn) return
      const activeBg = '#D97706', activeFg = '#FFFFFF', activeBorder = '#D97706'
      const idleBg   = '#FFFFFF', idleFg   = '#78350F', idleBorder   = '#FCD34D'
      const winnerBtn = side === 'home' ? homeBtn : awayBtn
      const otherBtn  = side === 'home' ? awayBtn : homeBtn
      winnerBtn.style.background = activeBg
      winnerBtn.style.color = activeFg
      winnerBtn.style.borderColor = activeBorder
      otherBtn.style.background = idleBg
      otherBtn.style.color = idleFg
      otherBtn.style.borderColor = idleBorder
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

      // -- Knockout validation: a draw prediction on a knockout fixture requires
      // an advance_pick (pen winner). Same rule applies to the alt prediction if
      // Double Pick is armed and the alt is also a draw. One advance_pick covers
      // both scenarios — the player picks the team that wins pens.
      const fxForCheck = (typeof fixtures !== 'undefined') ? fixtures.find(x => x.id === id) : null
      const isKnockout = fxForCheck && window.KnockoutScoring && window.KnockoutScoring.isKnockoutStage(fxForCheck.stage)
      if (isKnockout) {
        const primaryDraw = home === away
        const cpCheck = (typeof myCardPlaysByFixture !== 'undefined') ? myCardPlaysByFixture[id] : null
        const altDraw = (cpCheck?.card_type === 'double_pick')
          && pending.alt_home !== undefined && pending.alt_home !== ''
          && pending.alt_away !== undefined && pending.alt_away !== ''
          && Number(pending.alt_home) === Number(pending.alt_away)
        if ((primaryDraw || altDraw) && !pending.advance_pick) {
          showToast('Knockout draw — pick which team wins on penalties', 'warning')
          return
        }
      }

      const { error } = await savePrediction(id, home, away)
      if (error) { showToast(error.message, 'error'); return }

      // If Double Pick is armed on this match, persist alt scores
      const cpForSave = (typeof myCardPlaysByFixture !== 'undefined') ? myCardPlaysByFixture[id] : null
      let altHomeSaved = null, altAwaySaved = null
      if (cpForSave?.card_type === 'double_pick') {
        const pp = pendingPredictions[id] || {}
        const altHraw = pp.alt_home
        const altAraw = pp.alt_away
        if (altHraw !== undefined && altHraw !== '' && altAraw !== undefined && altAraw !== '') {
          altHomeSaved = parseInt(altHraw, 10)
          altAwaySaved = parseInt(altAraw, 10)
          try {
            await supabaseClient
              .from('predictions')
              .update({
                alt_home_prediction: altHomeSaved,
                alt_away_prediction: altAwaySaved
              })
              .eq('user_id', getUser().id)
              .eq('fixture_id', id)
          } catch (e) { console.error('[double-pick] alt save failed:', e) }
        } else {
          showToast('Double Pick is armed — enter your alt scoreline too', 'warning')
        }
      }

      // -- Knockout: persist advance_pick (or clear it).
      // - Knockout draw AND player chose a pen winner → write the pick.
      // - Anything else (group stage, knockout non-draw, knockout draw + no pick after
      //   alt logic also cleared) → clear the pick. Keeps state coherent with the
      //   DB CHECK constraints and ensures stale picks don't survive an overwrite.
      let advancePickSaved = null
      if (isKnockout) {
        const primaryDrawFinal = home === away
        const altDrawFinal = (cpForSave?.card_type === 'double_pick')
          && altHomeSaved !== null && altAwaySaved !== null
          && altHomeSaved === altAwaySaved
        const shouldWritePick = (primaryDrawFinal || altDrawFinal) && pending.advance_pick
        advancePickSaved = shouldWritePick ? pending.advance_pick : null
        try {
          await supabaseClient
            .from('predictions')
            .update({ advance_pick: advancePickSaved })
            .eq('user_id', getUser().id)
            .eq('fixture_id', id)
        } catch (e) { console.error('[knockout] advance_pick save failed:', e) }
      }

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
        if (altHomeSaved !== null) {
          existing.alt_home_prediction = altHomeSaved
          existing.alt_away_prediction = altAwaySaved
        }
        // Knockout: mirror the advance_pick we just wrote (or cleared).
        existing.advance_pick = advancePickSaved
        existing.submitted_at = submittedAt
      } else {
        predictions.push({
          user_id: getUser().id,
          fixture_id: id,
          home_prediction: home,
          away_prediction: away,
          alt_home_prediction: altHomeSaved,
          alt_away_prediction: altAwaySaved,
          advance_pick: advancePickSaved,
          points_awarded: 0,
          submitted_at: submittedAt
        })
      }
      updatePredictionCount()
      patchFixtureCardAfterPredictionSave(id, submittedAt)
    }

  function patchFixtureCardAfterPredictionSave(id, submittedAt) {
    // Do NOT re-render the whole fixture list after a save.
    // renderFixtures() rebuilds #fixtures-list via innerHTML, which destroys every
    // card and makes the Predict tab visibly flicker. This tiny DOM patch updates
    // only the card that was just saved.
    const safeId = String(id).replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    const card = document.querySelector(`[data-fixture="${safeId}"]`)
    if (!card) return

    const saveButton = card.querySelector('.fixture-save-btn')
    if (saveButton && !saveButton.textContent.toLowerCase().includes('sign in')) {
      saveButton.textContent = 'Update Prediction'
    }

    const stampText = 'Locked in just now'
    const existingStamp = card.querySelector('.submitted-stamp')
    if (existingStamp) {
      existingStamp.textContent = stampText
      return
    }

    const stampWrap = document.createElement('div')
    stampWrap.className = 'px-5 pb-3'
    const stamp = document.createElement('span')
    stamp.className = 'submitted-stamp'
    stamp.textContent = stampText
    stampWrap.appendChild(stamp)

    if (saveButton) {
      saveButton.insertAdjacentElement('afterend', stampWrap)
    } else {
      card.appendChild(stampWrap)
    }
  }

  function updatePredictionCount() {
  const now = new Date()
  const upcoming = fixtures
    .filter(f => new Date(f.kickoff) > now && f.home_score === null)
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))

  // Same batch window logic as renderFixtures
  const BATCH_SIZE = 3
  const BATCH_HOURS = 48
  const batchDeadline = new Date(now.getTime() + BATCH_HOURS * 3600 * 1000)
  const openMatchIds = new Set()
  upcoming.forEach((f, i) => {
    if (i < BATCH_SIZE) openMatchIds.add(f.id)
    if (new Date(f.kickoff) <= batchDeadline) openMatchIds.add(f.id)
  })

  const openMatches = upcoming.filter(f => openMatchIds.has(f.id))
  const predictedCount = openMatches.filter(f => getPrediction(f.id)).length
  const el = document.getElementById('prediction-count')

  if (!openMatches.length) {
    el.textContent = `${predictions.length}/${fixtures.length}`
    return
  }
  el.textContent = `${predictedCount}/${openMatches.length} predicted`
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
          .from('profiles').select('id, name').eq('fee_paid', true).neq('entered_via_private', true)
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
      // Refresh only the lightweight cache used for the button counts / first render.
      // The full list is also fetched on demand by loadHotTakesForFixture() whenever
      // the user opens a fixture card. This prevents the fixture card from showing
      // a partial/stale list while the Match Report shows the correct full list.
      if (!fixtures.length) { hotTakesByFixture = {}; return }
      const now = Date.now()
      const lockedFixtures = fixtures.filter(f => new Date(f.kickoff).getTime() <= now)
      if (!lockedFixtures.length) { hotTakesByFixture = {}; return }

      try {
        const next = {}
        await Promise.all(lockedFixtures.map(async f => {
          try {
            const picks = await loadHotTakesForFixture(f.id, { force: true, silent: true })
            if (picks && picks.length) next[f.id] = picks
          } catch (e) {
            console.warn('[hot-takes] fixture refresh failed:', f.id, e)
          }
        }))
        hotTakesByFixture = next
      } catch (e) {
        console.warn('[hot-takes] refresh failed:', e)
      }
    }

    async function loadHotTakesForFixture(fixtureId, options = {}) {
      const force = !!options.force
      const silent = !!options.silent
      const existing = hotTakesByFixture[fixtureId]
      if (!force && Array.isArray(existing) && existing.length) return existing

      const fixture = fixtures.find(f => f.id === fixtureId)
      if (!fixture) return []

      const finished = fixture.home_score !== null && fixture.away_score !== null
      const locked = new Date(fixture.kickoff).getTime() <= Date.now()
      if (!locked && !finished) return []

      try {
        // For finished matches, prediction_results is the source of truth for both
        // points and the prediction values (same source used by the Match Report).
        // Raw predictions are fetched as a fallback only, so the list still opens
        // while admin scoring/recalculation is catching up.
        const [{ data: scoredRows, error: scoredError }, { data: rawPreds, error: rawError }] = await Promise.all([
          finished
            ? supabaseClient.from('prediction_results')
                .select('user_id, fixture_id, home_prediction, away_prediction, base_points, final_points, streak_bonus, combo_bonus')
                .eq('fixture_id', fixtureId)
            : Promise.resolve({ data: [], error: null }),
          supabaseClient.from('predictions')
            .select('user_id, fixture_id, home_prediction, away_prediction, submitted_at')
            .eq('fixture_id', fixtureId)
        ])

        if (scoredError) console.warn('[hot-takes] result rows fetch failed:', scoredError)
        if (rawError) console.warn('[hot-takes] raw predictions fetch failed:', rawError)

        const userIds = new Set()
        ;(scoredRows || []).forEach(r => userIds.add(r.user_id))
        ;(rawPreds || []).forEach(p => userIds.add(p.user_id))

        const nameMap = {}
        if (userIds.size) {
          const { data: profiles, error: profileError } = await supabaseClient
            .from('profiles')
            .select('id, name, full_name, fee_paid, entered_via_private')
            .in('id', [...userIds])
          if (profileError) console.warn('[hot-takes] profile fetch failed:', profileError)
          ;(profiles || []).forEach(p => {
            // Match Report parity: paid users only, NULL-safe private-league check.
            if (p.fee_paid && !p.entered_via_private) {
              nameMap[p.id] = p.full_name || p.name || 'Anonymous'
            }
          })
        }

        const picks = []
        const scoredPickKeys = new Set()

        ;(scoredRows || []).forEach(r => {
          if (!nameMap[r.user_id]) return
          if (r.home_prediction === null || r.away_prediction === null) return
          scoredPickKeys.add(`${r.fixture_id}:${r.user_id}`)
          picks.push({
            user_id: r.user_id,
            name: nameMap[r.user_id],
            home: r.home_prediction,
            away: r.away_prediction,
            submitted_at: null,
            base_points: r.base_points ?? null,
            final_points: r.final_points ?? null,
            streak_bonus: r.streak_bonus || 0,
            combo_bonus: r.combo_bonus || 0,
            has_result_row: true
          })
        })

        ;(rawPreds || []).forEach(p => {
          if (!nameMap[p.user_id]) return
          if (p.home_prediction === null || p.away_prediction === null) return
          if (scoredPickKeys.has(`${p.fixture_id}:${p.user_id}`)) return
          picks.push({
            user_id: p.user_id,
            name: nameMap[p.user_id],
            home: p.home_prediction,
            away: p.away_prediction,
            submitted_at: p.submitted_at,
            base_points: null,
            final_points: null,
            streak_bonus: 0,
            combo_bonus: 0,
            has_result_row: false
          })
        })

        picks.sort((a, b) => {
          // Scored rows first. Fallback-only rows never get fake +0 points.
          const aScored = a.has_result_row === true
          const bScored = b.has_result_row === true
          if (aScored !== bScored) return bScored - aScored
          if (aScored && bScored) {
            if ((b.final_points || 0) !== (a.final_points || 0)) return (b.final_points || 0) - (a.final_points || 0)
            if ((b.base_points || 0) !== (a.base_points || 0)) return (b.base_points || 0) - (a.base_points || 0)
          }
          const at = a.submitted_at ? new Date(a.submitted_at).getTime() : 0
          const bt = b.submitted_at ? new Date(b.submitted_at).getTime() : 0
          if (at !== bt) return at - bt
          return String(a.name || '').localeCompare(String(b.name || ''))
        })

        hotTakesByFixture[fixtureId] = picks
        return picks
      } catch (e) {
        if (!silent) console.warn('[hot-takes] on-demand fetch failed:', e)
        return hotTakesByFixture[fixtureId] || []
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
        const hasFinalPoints = p.has_result_row === true && p.final_points !== null && p.final_points !== undefined
        const ptsBadge = finished && hasFinalPoints
          ? `<span class="text-xs font-bold ${(Number(p.final_points) || 0) > 0 ? 'text-brand-700' : 'text-ink-400'}" style="font-variant-numeric:tabular-nums;">+${Number(p.final_points) || 0}</span>`
          : ''
        const bonusEmoji = (p.streak_bonus > 0 ? '🔥' : '') + (p.combo_bonus > 0 ? '⚡' : '')
        return `
          <div class="flex items-center gap-2 py-1.5 px-2 ${isMe ? 'rounded-lg' : ''}" ${isMe ? 'style="background:rgba(212,162,76,0.10);"' : ''}>
            <div class="flex-1 min-w-0 text-sm truncate ${isMe ? 'font-bold text-brand-700' : 'text-ink-700'}">
              ${isMe ? 'You' : escapeHtml(p.name || 'Anonymous')}
            </div>
            <div class="text-sm font-bold text-ink-900" style="font-variant-numeric:tabular-nums;">
              ${p.home}–${p.away}
            </div>
            ${bonusEmoji ? `<div class="text-xs">${bonusEmoji}</div>` : ''}
            ${ptsBadge}
          </div>`
      }).join('')
    }

    async function toggleHotTakes(fixtureId) {
      const el = document.getElementById('hot-takes-' + fixtureId)
      const btn = document.getElementById('hot-takes-btn-' + fixtureId)
      if (!el) return

      if (el.classList.contains('hidden')) {
        el.innerHTML = '<div class="text-center text-xs text-ink-500 py-3">Loading picks…</div>'
        el.classList.remove('hidden')
        if (btn) btn.textContent = 'Loading picks…'

        const picks = await loadHotTakesForFixture(fixtureId, { force: true })
        el.innerHTML = renderHotTakes(fixtureId)
        if (btn) {
          btn.dataset.pickCount = String(picks.length || 0)
          btn.textContent = 'Hide picks'
        }
      } else {
        el.classList.add('hidden')
        if (btn) {
          const count = Number(btn.dataset.pickCount || hotTakesByFixture[fixtureId]?.length || 0)
          btn.textContent = count > 0 ? `See all picks (${count})` : 'See all picks'
        }
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
    // ===== Info popup (player / badge) =====
    // Lightweight bottom-sheet that opens when an avatar or badge is tapped on
    // the leaderboard. Two variants share one DOM element and toggle styling.
    // Restores focus to the trigger when closed (a11y parity with country modal).
    let _infoPopupLastFocus = null
    let _infoPopupKeyHandler = null

    function showInfoPopup(headerHtml, bodyHtml, variant) {
      const modal = document.getElementById('info-popup')
      if (!modal) return
      _infoPopupLastFocus = document.activeElement
      const headerEl = document.getElementById('info-popup-header')
      const headerContentEl = document.getElementById('info-popup-header-content')
      const bodyEl = document.getElementById('info-popup-body')
      headerEl.classList.remove('variant-player', 'variant-badge')
      headerEl.classList.add('variant-' + variant)
      headerContentEl.innerHTML = headerHtml
      bodyEl.innerHTML = bodyHtml
      modal.classList.remove('hidden')
      void modal.offsetWidth // force reflow so transition runs
      modal.classList.add('is-open')
      modal.classList.remove('is-closing')
      document.body.style.overflow = 'hidden'

      // Focus the close button so keyboard/screen-reader users land in-modal
      const closeBtn = modal.querySelector('.info-popup-close')
      if (closeBtn) setTimeout(() => closeBtn.focus(), 50)

      // Escape closes
      _infoPopupKeyHandler = (e) => { if (e.key === 'Escape') hideInfoPopup() }
      document.addEventListener('keydown', _infoPopupKeyHandler)
    }

    function hideInfoPopup() {
      const modal = document.getElementById('info-popup')
      if (!modal) return
      modal.classList.add('is-closing')
      modal.classList.remove('is-open')
      setTimeout(() => {
        modal.classList.add('hidden')
        modal.classList.remove('is-closing')
        document.body.style.overflow = ''
        if (_infoPopupLastFocus && typeof _infoPopupLastFocus.focus === 'function') {
          try { _infoPopupLastFocus.focus() } catch (e) {}
          _infoPopupLastFocus = null
        }
      }, 280)
      if (_infoPopupKeyHandler) {
        document.removeEventListener('keydown', _infoPopupKeyHandler)
        _infoPopupKeyHandler = null
      }
    }

    function showPlayerInfo(uid) {
      const stats = window.__lbCachedStats || []
      const s = stats.find(x => (x.user_id || x.id) === uid)
      if (!s) return
      const myId = getUser()?.id
      const isSelf = uid === myId
      // Recompute rank from sorted stats (stats is already sorted in render order)
      const idx = stats.findIndex(x => (x.user_id || x.id) === uid)
      const rank = idx + 1
      const total = stats.length
      const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : ''
      const correct = (s.exact || 0) + (s.gd || 0) + (s.result || 0)
      const combos = s.combo_count || 0
      const streak = (typeof lbStreakMap !== 'undefined' && lbStreakMap[uid]) || 0
      const name = escapeHtml(s.name || s.full_name || 'Anonymous')
      const dept = s.department ? escapeHtml(s.department) : ''
      const avatarBig = getAvatarHtml(s.name, s.avatar_url, rank, 64)
        .replace(/class="lb-avatar/, 'class="lb-avatar" style="width:64px;height:64px;font-size:22px;border-radius:18px;" data-temp')
      // The above style override is a quick way to upsize without touching getAvatarHtml.

      const headerHtml = `
        <div class="flex items-center gap-3 relative z-[1]">
          <div style="flex-shrink:0;">${avatarBig}</div>
          <div class="flex-1 min-w-0">
            <h3 id="info-popup-title" class="text-lg font-bold tracking-tight truncate">${name}${isSelf ? ' <span class="text-[10px] font-bold text-white/70 ml-1">(YOU)</span>' : ''}</h3>
            ${dept ? `<p class="text-xs text-white/60 mt-0.5 truncate">${dept}</p>` : ''}
            <p class="text-xs text-white/70 mt-1">${medal ? medal + ' ' : ''}Rank #${rank} of ${total}</p>
          </div>
        </div>
      `

      // Build small "highlight" chips for active states
      const highlights = []
      if (streak >= 3) highlights.push(`<span class="info-popup-pill">🔥 ${streak}-match streak</span>`)
      if (combos >= 1) highlights.push(`<span class="info-popup-pill">⚡ ${combos} exact combo${combos > 1 ? 's' : ''}</span>`)
      if (rank === 1 && (s.points || 0) > 0) highlights.push(`<span class="info-popup-pill">👑 Reigning champion</span>`)
      if (rank >= 2 && rank <= 3) highlights.push(`<span class="info-popup-pill">🏆 In the prize zone</span>`)
      const highlightsHtml = highlights.length
        ? `<div class="info-popup-section-title">Right now</div><div class="info-popup-chip-row">${highlights.join('')}</div>`
        : ''

      const ctaHtml = !isSelf
        ? `<button class="info-popup-cta" onclick="hideInfoPopup(); setTimeout(() => openH2H('${uid}'), 280);">⚔️ Compare head-to-head</button>`
        : ''

      const bodyHtml = `
        <div class="info-popup-stat-grid">
          <div class="info-popup-stat-box">
            <div class="label">Points</div>
            <div class="value">${s.points || 0}</div>
          </div>
          <div class="info-popup-stat-box">
            <div class="label">Correct</div>
            <div class="value">${correct}</div>
          </div>
          <div class="info-popup-stat-box">
            <div class="label">Exact</div>
            <div class="value">${s.exact || 0}</div>
          </div>
        </div>
        ${highlightsHtml}
        ${ctaHtml}
      `

      showInfoPopup(headerHtml, bodyHtml, 'player')
    }

    function showBadgeInfo(badgeId, uid) {
      const stats = window.__lbCachedStats || []
      const s = stats.find(x => (x.user_id || x.id) === uid)
      if (!s) return
      const exact = s.exact || 0
      const points = s.points || 0
      const combos = s.combo_count || 0
      const streak = (typeof lbStreakMap !== 'undefined' && lbStreakMap[uid]) || 0
      const playerName = escapeHtml(s.name || 'Anonymous')
      const myId = getUser()?.id
      const isSelf = uid === myId

      // Each entry: { icon, name, criteria, progress(s), earned(s) }
      // progress: short string showing how far along they are (e.g. "7 exact scores")
      // earned:  boolean
      const ALL = {
        'champion':    { icon: '👑', name: 'Champion',     criteria: 'Sit at the top of the leaderboard with at least 1 point.',
                         progress: () => `Currently ranked #${(stats.findIndex(x => (x.user_id || x.id) === uid) + 1)} of ${stats.length}`,
                         earned: () => (stats.findIndex(x => (x.user_id || x.id) === uid) === 0) && points > 0 },
        'sharpshoot':  { icon: '🎯', name: 'Sharpshooter', criteria: 'Predict 5 or more exact scores across the tournament.',
                         progress: () => `${exact} exact score${exact === 1 ? '' : 's'} so far`,
                         earned: () => exact >= 5 },
        'nostradamus': { icon: '🔮', name: 'Nostradamus',  criteria: 'Predict 2 or more exact scores in total (any time, any matches).',
                         progress: () => `${exact} exact score${exact === 1 ? '' : 's'} so far`,
                         earned: () => exact >= 2 },
        'centurion':   { icon: '💯', name: 'Centurion',    criteria: 'Reach 100 or more total points.',
                         progress: () => `${points} pts so far`,
                         earned: () => points >= 100 },
        'streak-chip': { icon: 'flame', name: 'Hot Streak',   criteria: 'Score points in 3 or more consecutive resolved matches.',
                         progress: () => `${streak} match${streak === 1 ? '' : 'es'} in a row`,
                         earned: () => streak >= 3 },
        'combo-chip':  { icon: '⚡', name: 'Exact Combo',   criteria: '2 exact scores back-to-back. +3 bonus per combo. Earn 3+ combos to unlock the Combo King badge.',
                         progress: () => `${combos} combo${combos === 1 ? '' : 's'} so far`,
                         earned: () => combos >= 1 },
        'combo':       { icon: '⚡', name: 'Combo King',    criteria: 'Earn 3 or more exact combos (back-to-back exact scores) across the tournament.',
                         progress: () => `${combos} combo${combos === 1 ? '' : 's'} so far`,
                         earned: () => combos >= 3 },
        'overflow':    { icon: 'cup', name: 'More badges',  criteria: 'Other achievements earned by this player. Tap the player to see their full profile.',
                         progress: () => '',
                         earned: () => true }
      }
      const def = ALL[badgeId]
      if (!def) {
        console.warn('[showBadgeInfo] unknown badge id:', badgeId)
        return
      }
      const isEarned = def.earned()
      const progressText = def.progress()

      const headerHtml = `
        <div class="info-popup-badge-display relative z-[1]">
          <div class="info-popup-badge-icon">${badgeIconHtml(badgeId, 'info-popup-badge-art')}</div>
          <div>
            <h3 id="info-popup-title" class="text-xl font-bold tracking-tight text-center">${escapeHtml(def.name)}</h3>
            <div class="flex justify-center mt-2">
              <span class="info-popup-badge-status ${isEarned ? 'earned' : 'not-earned'}">
                ${isEarned ? '✓ Earned' : 'Not yet earned'}
              </span>
            </div>
          </div>
        </div>
      `

      const bodyHtml = `
        <div class="info-popup-section-title">How to earn it</div>
        <p class="text-sm text-ink-700 leading-relaxed">${escapeHtml(def.criteria)}</p>

        ${progressText ? `
          <div class="info-popup-section-title">${isSelf ? 'Your progress' : escapeHtml(playerName) + "'s progress"}</div>
          <div class="info-popup-pill" style="background:${isEarned ? 'rgba(34,197,94,0.12)' : '#F4F3EE'};color:${isEarned ? '#15803D' : '#1F2A35'};">
            ${escapeHtml(progressText)}
          </div>
        ` : ''}
      `

      showInfoPopup(headerHtml, bodyHtml, 'badge')
    }

    // Expose to global scope so onclick handlers in the modal work
    window.hideInfoPopup = hideInfoPopup
    window.showPlayerInfo = showPlayerInfo
    window.showBadgeInfo = showBadgeInfo

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
            <div class="text-lg font-bold text-ink-900 truncate">You vs ${escapeHtml(opponentName)}</div>
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
              <div class="text-[10px] uppercase tracking-wider text-ink-500 mt-0.5 truncate max-w-[100px]">${escapeHtml(opponentName)}</div>
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
async function fetchAllPredictionResults(selectColumns = '*', pageSize = 1000) {
  // Supabase/PostgREST returns a capped page by default. Once the league grows
  // beyond that cap, an uncapped select('*') silently misses later scored rows,
  // which makes the leaderboard look stale even though prediction_results is correct.
  const allRows = []
  let from = 0

  while (true) {
    const to = from + pageSize - 1
    const { data, error } = await supabaseClient
      .from('prediction_results')
      .select(selectColumns)
      .order('kickoff', { ascending: true, nullsFirst: true })
      .order('created_at', { ascending: true, nullsFirst: true })
      .range(from, to)

    if (error) throw error
    const page = data || []
    allRows.push(...page)
    if (page.length < pageSize) break
    from += pageSize
  }

  return allRows
}

async function getLeaderboardFromResults() {
  // Fetch prediction_results and profiles separately (no FK relationship between them)
  // Profiles are filtered to fee_paid=true so unpaid users (including unpaid admin) never appear on the global leaderboard.
  let results = []
  let resError = null
  let profiles = []
  let profError = null
  try {
    ;[results, { data: profilesData, error: profilesError }] = await Promise.all([
      fetchAllPredictionResults('*'),
      supabaseClient.from('profiles').select('id, full_name, department, name, fee_paid, avatar_url').eq('fee_paid', true).neq('entered_via_private', true)
    ])
    profiles = profilesData || []
    profError = profilesError || null
  } catch (e) {
    resError = e
    console.warn('[Leaderboard] full prediction_results fetch failed:', e?.message || e)
    const { data: profilesData, error: profilesError } = await supabaseClient
      .from('profiles')
      .select('id, full_name, department, name, fee_paid, avatar_url')
      .eq('fee_paid', true)
      .neq('entered_via_private', true)
    profiles = profilesData || []
    profError = profilesError || null
  }

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
        avatar_url: p.avatar_url || null,
        points: 0,
        exact: 0,
        gd: 0,
        result: 0,
        combo_count: 0,
        form: [],
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
 const stats = profiles.map(profile => {
    const uid = profile.id
    const userResults = (results || []).filter(r => r.user_id === uid)
    // Count combo bonuses earned (2 exact scores in a row → combo_bonus > 0).
    // Cheap because we're already iterating these rows below.
    const comboCount = userResults.filter(r => (r.combo_bonus || 0) > 0).length
    const form = userResults
      .slice()
      .sort((a, b) => {
        const ad = new Date(a.kickoff || a.created_at || 0).getTime()
        const bd = new Date(b.kickoff || b.created_at || 0).getTime()
        return bd - ad
      })
      .slice(0, 5)
      .map(r => {
        const base = Number((r.base_points != null) ? r.base_points : (r.points_awarded || r.final_points || 0))
        if (base === 5) return 'exact'
        if (base > 0) return 'correct'
        return 'miss'
      })
    // The leaderboard must use prediction_results.final_points as the source of truth.
    // Do not delegate this aggregation to bonus-engine.js; that file is responsible
    // for WRITING scored rows, while this UI should only READ the already-final points.
    let points = 0, exact = 0, gd = 0, result = 0
    userResults.forEach(r => {
      points += Number(r.final_points ?? r.points_awarded ?? 0) || 0
      const base = Number(r.base_points ?? 0) || 0
      if (base === 5) exact++
      else if (base === 3) gd++
      else if (base === 2) result++
    })
    const engineStats = { points, exact, gd, result, total_predictions: userResults.length }
return {
      user_id: uid,
      name: profile.full_name || profile.name || 'Unknown',
      full_name: profile.full_name || profile.name || 'Unknown',
      department: profile.department || '',
      avatar_url: profile.avatar_url || null,
      combo_count: comboCount,
      form,
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



// ============== BRACKET CHALLENGE HOME CARD ==============
// This card is injected by JS so it still appears even if the home HTML was not updated.
// It now reads bracket_settings.status from Supabase so live/locked/completed are not controlled by the countdown.
let homeBracketStatusCache = null;
let homeBracketStatusLoadedAt = 0;
let homeBracketRealtimeChannel = null;
let homeBracketRealtimePollTimer = null;
let homeBracketRealtimeRefreshTimer = null;

function invalidateHomeBracketStatusCache() {
  homeBracketStatusCache = null;
  homeBracketStatusLoadedAt = 0;
}

function scheduleHomeBracketRealtimeRefresh(source = 'event') {
  if (homeBracketRealtimeRefreshTimer) clearTimeout(homeBracketRealtimeRefreshTimer);
  homeBracketRealtimeRefreshTimer = setTimeout(() => {
    invalidateHomeBracketStatusCache();
    ensureBracketChallengeHomeCard(true).catch(e => console.warn('[Bracket] Home realtime refresh failed:', source, e));
  }, 120);
}

function setupHomeBracketStatusRealtime() {
  if (window.__homeBracketStatusRealtimeReady) return;

  if (typeof supabaseClient === 'undefined' || !supabaseClient) {
    setTimeout(setupHomeBracketStatusRealtime, 500);
    return;
  }

  window.__homeBracketStatusRealtimeReady = true;

  try {
    if (supabaseClient?.channel) {
      homeBracketRealtimeChannel = supabaseClient
        .channel('home-bracket-settings-watch')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'bracket_settings' }, (payload) => {
          console.log('[Bracket] Home realtime settings change:', payload?.new?.status || payload?.eventType);
          scheduleHomeBracketRealtimeRefresh('supabase-realtime');
        })
        .subscribe((status) => {
          console.log('[Bracket] Home realtime subscription:', status);
        });
    }
  } catch (err) {
    console.warn('[Bracket] Home realtime setup failed:', err);
  }

  try {
    if ('BroadcastChannel' in window) {
      const bc = new BroadcastChannel('bracket-status');
      bc.onmessage = (event) => {
        if (event?.data?.type === 'BRACKET_STATUS_CHANGED') {
          scheduleHomeBracketRealtimeRefresh('broadcast-channel');
        }
      };
      window.__homeBracketStatusBroadcastChannel = bc;
    }
  } catch (err) {
    console.warn('[Bracket] Home BroadcastChannel setup failed:', err);
  }

  window.addEventListener('storage', (event) => {
    if (event.key === 'bracket_status_changed_at' || event.key === 'bracket_status_value') {
      scheduleHomeBracketRealtimeRefresh('local-storage');
    }
  });

  window.addEventListener('bracket-status-changed', () => {
    scheduleHomeBracketRealtimeRefresh('same-window-event');
  });

  window.addEventListener('focus', () => scheduleHomeBracketRealtimeRefresh('window-focus'));
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) scheduleHomeBracketRealtimeRefresh('tab-visible');
  });

  // Guaranteed fallback: even if Supabase realtime is disabled for bracket_settings,
  // users will still see status changes without reopening the app.
  if (!homeBracketRealtimePollTimer) {
    homeBracketRealtimePollTimer = setInterval(() => {
      if (document.hidden) return;
      scheduleHomeBracketRealtimeRefresh('poll');
    }, 5000);
  }
}

function getBracketHomeDefaultLockAt() {
  return new Date('2026-06-28T18:50:00.000Z'); // 29 Jun 2026 12:50 AM BTT (UTC+6)
}

function normalizeBracketHomeStatus(status) {
  return String(status || 'coming_soon').trim().toLowerCase();
}

function canPreviewHiddenBracketHome() {
  const profile = (typeof getProfile === 'function') ? getProfile() : null;

  return Boolean(
    profile?.role === 'admin' ||
    profile?.user_role === 'admin' ||
    profile?.is_admin === true ||
    ((typeof isAdmin === 'function') && isAdmin()) ||
    ((typeof window.canPreviewHiddenBracket === 'function') && window.canPreviewHiddenBracket()) ||
    (window.location.search || '').includes('preview=admin')
  );
}

function isPublicBracketHomeStatus(status) {
  return ['locked', 'live', 'completed'].includes(normalizeBracketHomeStatus(status));
}

function isEntryOpenBracketHomeStatus(status) {
  return normalizeBracketHomeStatus(status) === 'open';
}

function formatBracketHomeCountdown(lockAt) {
  const lockDate = lockAt instanceof Date && !Number.isNaN(lockAt.getTime())
    ? lockAt
    : getBracketHomeDefaultLockAt();

  const now = new Date();
  const diff = Math.max(0, lockDate.getTime() - now.getTime());

  if (diff <= 0) return 'Lock reached';

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);

  if (days > 0) return `${days}d ${hours}h ${mins}m left`;
  if (hours > 0) return `${hours}h ${mins}m left`;
  return `${mins}m left`;
}

function getBracketHomeMetaRenderKey(meta) {
  const lockAt = meta?.lockAt instanceof Date && !Number.isNaN(meta.lockAt.getTime())
    ? meta.lockAt.toISOString()
    : String(meta?.lockAt || '');

  return [
    normalizeBracketHomeStatus(meta?.status),
    lockAt,
    meta?.isPaid ? 'paid' : 'unpaid',
    meta?.hasSubmitted ? 'submitted' : 'draft',
    Number(meta?.entryCount || 0),
    meta?.canPreviewHidden ? 'admin-preview' : 'public'
  ].join('|');
}

async function fetchHomeBracketMeta(force = false) {
  const now = Date.now();
  if (!force && homeBracketStatusCache && now - homeBracketStatusLoadedAt < 12000) {
    return homeBracketStatusCache;
  }

  const fallback = {
    status: 'coming_soon',
    lockAt: getBracketHomeDefaultLockAt(),
    isPaid: false,
    hasSubmitted: false,
    entryCount: 0,
    canPreviewHidden: canPreviewHiddenBracketHome()
  };

  try {
    const [{ data: settings }, entryCountResult] = await Promise.all([
      supabaseClient.from('bracket_settings').select('*').single(),
      supabaseClient.from('bracket_entries').select('*', { count: 'exact', head: true }).eq('payment_status', 'paid')
    ]);

    const user = typeof getUser === 'function' ? getUser() : null;
    let entry = null;
    if (user?.id) {
      const { data } = await supabaseClient
        .from('bracket_entries')
        .select('payment_status, submitted_at')
        .eq('user_id', user.id)
        .maybeSingle();
      entry = data || null;
    }

    const parsedLockAt = new Date(settings?.lock_at || getBracketHomeDefaultLockAt());
    const meta = {
      status: normalizeBracketHomeStatus(settings?.status),
      lockAt: Number.isNaN(parsedLockAt.getTime()) ? getBracketHomeDefaultLockAt() : parsedLockAt,
      isPaid: entry?.payment_status === 'paid',
      hasSubmitted: !!entry?.submitted_at,
      entryCount: entryCountResult?.count || 0,
      canPreviewHidden: canPreviewHiddenBracketHome()
    };

    homeBracketStatusCache = meta;
    homeBracketStatusLoadedAt = now;
    return meta;
  } catch (e) {
    console.warn('[Bracket] Failed to fetch home bracket status:', e);
    return homeBracketStatusCache || fallback;
  }
}

function getHomeBracketCopy(meta) {
  const status = normalizeBracketHomeStatus(meta?.status);
  const hasSubmitted = !!meta?.hasSubmitted;
  const countdown = formatBracketHomeCountdown(meta?.lockAt);

  if (status === 'hidden') {
    if (meta?.canPreviewHidden) {
      return {
        icon: 'cup',
        kicker: 'Admin Preview',
        title: 'Bracket Challenge',
        subtitle: 'Hidden from players · Test safely',
        statusLabel: 'Mode',
        statusValue: 'Hidden',
        statusClass: 'text-amber-200',
        button: 'Open Preview',
        buttonDisabled: false,
        footer: 'Only admins can see this preview. Normal users still see nothing.'
      };
    }

    // Bracket is admin-hidden. Card is also hidden via CSS (body.bracket-status-hidden),
    // but return an empty-ish copy so nothing misleading flashes if CSS hasn't loaded.
    return {
      icon: 'cup',
      kicker: '',
      title: '',
      subtitle: '',
      statusLabel: '',
      statusValue: '',
      statusClass: '',
      button: '',
      buttonDisabled: true,
      footer: ''
    };
  }

  if (status === 'coming_soon') {
    return {
      icon: 'flag',
      kicker: 'Mystery Game',
      title: 'Coming Soon',
      subtitle: 'A new game mode will be revealed soon.',
      statusLabel: 'Reveal',
      statusValue: countdown,
      statusClass: 'text-amber-200',
      button: 'Opening Soon',
      buttonDisabled: true,
      footer: 'Stay ready. The bracket challenge will open once admin activates it.'
    };
  }

  if (status === 'open') {
    return {
      icon: 'cup',
      kicker: 'Fantasy Bracket League',
      title: hasSubmitted ? 'Bracket Submitted' : 'Bracket Challenge',
      subtitle: hasSubmitted ? 'You can still edit before lock.' : 'R32 → Champion · Max 119 pts',
      statusLabel: 'Open',
      statusValue: countdown,
      statusClass: 'text-emerald-200',
      button: hasSubmitted ? 'Edit Bracket' : 'Enter Bracket',
      buttonDisabled: false,
      footer: 'Bracket entry is open now. Before lock, only your own bracket is visible.'
    };
  }

  if (status === 'locked') {
    return {
      icon: 'lock',
      kicker: 'Entries Closed',
      title: 'Bracket Locked',
      subtitle: 'Picks are sealed. Public leaderboard is available.',
      statusLabel: 'Status',
      statusValue: 'Locked',
      statusClass: 'text-slate-200',
      button: hasSubmitted ? 'View My Picks' : 'View Leaderboard',
      buttonDisabled: false,
      footer: hasSubmitted ? 'Your bracket is sealed. You can view your picks and the leaderboard.' : 'Entries are closed. You can now view the public leaderboard.'
    };
  }

  if (status === 'live') {
    return {
      icon: 'flame',
      kicker: 'Live Now',
      title: 'Bracket Challenge Live',
      subtitle: 'Public leaderboard is now active.',
      statusLabel: 'Status',
      statusValue: 'Live',
      statusClass: 'text-emerald-200',
      button: hasSubmitted ? 'View Bracket' : 'View Leaderboard',
      buttonDisabled: false,
      footer: 'Scoring is active. Countdown is bypassed while the bracket is live.'
    };
  }

  if (status === 'completed') {
    return {
      icon: 'flag',
      kicker: 'Final Results',
      title: 'Bracket Completed',
      subtitle: 'Final leaderboard is ready.',
      statusLabel: 'Status',
      statusValue: 'Completed',
      statusClass: 'text-slate-200',
      button: 'View Results',
      buttonDisabled: false,
      footer: 'The bracket challenge is completed. View the final standings and champion picks.'
    };
  }

  return {
    icon: 'cup',
    kicker: 'Fantasy Bracket League',
    title: 'Bracket Challenge',
    subtitle: 'R32 → Champion · Max 119 pts',
    statusLabel: 'Status',
    statusValue: status || 'Unknown',
    statusClass: 'text-white/70',
    button: 'Open Bracket',
    buttonDisabled: false,
    footer: 'Bracket Challenge is separate from the main league leaderboard.'
  };
}


function bracketHomeIconHtml(type = 'cup') {
  const icons = {
    cup: `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="homeBracketCup" x1="10" y1="4" x2="54" y2="58"><stop stop-color="#FDE68A"/><stop offset=".45" stop-color="#F59E0B"/><stop offset="1" stop-color="#7C2D12"/></linearGradient></defs><path d="M18 12h28v10c0 11-5.8 19-14 19S18 33 18 22V12Z" fill="url(#homeBracketCup)"/><path d="M18 17H9v5c0 7 4.9 12 11 12" fill="none" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/><path d="M46 17h9v5c0 7-4.9 12-11 12" fill="none" stroke="#FBBF24" stroke-width="4" stroke-linecap="round"/><path d="M28 41h8v8h9v6H19v-6h9v-8Z" fill="#F59E0B"/></svg>`,
    lock: `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="homeBracketLock" x1="12" y1="8" x2="52" y2="56"><stop stop-color="#C084FC"/><stop offset="1" stop-color="#7C3AED"/></linearGradient></defs><rect x="14" y="28" width="36" height="26" rx="8" fill="url(#homeBracketLock)"/><path d="M22 28v-7c0-7 4.5-12 10-12s10 5 10 12v7" fill="none" stroke="#F5F3FF" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="40" r="4" fill="#fff"/></svg>`,
    flame: `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="homeBracketFlame" x1="16" y1="6" x2="48" y2="58"><stop stop-color="#FDE68A"/><stop offset=".45" stop-color="#F97316"/><stop offset="1" stop-color="#7C2D12"/></linearGradient></defs><path d="M34 4c4 11-7 15 3 25 2-5 7-8 8-15 8 8 11 17 8 27-3 11-12 18-25 17C16 57 8 48 10 37c2-10 10-15 15-22 3-4 5-7 9-11Z" fill="url(#homeBracketFlame)"/><path d="M30 54c-8-2-11-9-8-16 2-4 6-7 9-12 1 6 8 9 6 17-1 5-3 8-7 11Z" fill="#FDE68A" opacity=".85"/></svg>`,
    flag: `<svg viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="homeBracketFlag" x1="12" y1="8" x2="52" y2="56"><stop stop-color="#A78BFA"/><stop offset="1" stop-color="#312E81"/></linearGradient></defs><path d="M18 52V11" stroke="#E9D5FF" stroke-width="5" stroke-linecap="round"/><path d="M21 12h28l-5 10 5 10H21V12Z" fill="url(#homeBracketFlag)"/></svg>`
  };
  return `<span class="bracket-home-svg-icon">${icons[type] || icons.cup}</span>`;
}

function renderHomeBracketCard(card, meta) {
  const copy = getHomeBracketCopy(meta);
  const normalizedStatus = normalizeBracketHomeStatus(meta?.status);
  const isLive = normalizedStatus === 'live';
  const isCompleted = normalizedStatus === 'completed';
  const isPublic = isPublicBracketHomeStatus(meta?.status);
  const isHiddenPreview = normalizedStatus === 'hidden' && !!meta?.canPreviewHidden;
  const isSecureCovered = normalizedStatus === 'coming_soon' || normalizedStatus === 'locked';
  const entryCount = Number(meta?.entryCount || 0);
  const hasSubmitted = !!meta?.hasSubmitted;

  card.classList.toggle('admin-bracket-preview', isHiddenPreview);
  card.toggleAttribute('data-bracket-secure-covered', isSecureCovered);

  const bg = isLive
    ? 'radial-gradient(circle at top right, rgba(16,185,129,.30), transparent 38%), radial-gradient(circle at 80% 0%, rgba(168,85,247,.28), transparent 36%), linear-gradient(145deg, #06251f 0%, #070612 78%)'
    : isCompleted
      ? 'radial-gradient(circle at top right, rgba(251,191,36,.25), transparent 38%), linear-gradient(145deg, #140a2e 0%, #070612 76%)'
      : 'radial-gradient(circle at top right, rgba(168,85,247,.42), transparent 38%), radial-gradient(circle at 8% 0%, rgba(56,189,248,.10), transparent 26%), linear-gradient(145deg, #140a2e 0%, #070612 76%)';

  // No-flash safety: render the suspense/locked cover in the same DOM write as the card.
  // This prevents users from briefly seeing the hidden bracket content before the
  // bracket-challenge.js overlay function re-runs.
  const secureCoverOverlay = isSecureCovered ? `
    <div class="bracket-home-status-overlay bracket-status-cover-overlay" data-status="${normalizedStatus}" data-overlay-key="${normalizedStatus}:${hasSubmitted ? 'submitted' : 'not-submitted'}:${meta?.lockAt ? new Date(meta.lockAt).toISOString() : ''}">
      <div class="bracket-overlay-foreground">
        <div class="bracket-overlay-icon">${normalizedStatus === 'coming_soon' ? '⏳' : '🔒'}</div>
        <div class="bracket-overlay-title">${normalizedStatus === 'coming_soon' ? 'Coming Soon' : 'Entries Locked'}</div>
        <div class="bracket-overlay-subtitle">${normalizedStatus === 'coming_soon' ? 'A new game mode will be revealed soon. Stay ready.' : 'Entries are closed. Leaderboard opens when scoring goes live.'}</div>
        ${normalizedStatus === 'coming_soon' ? `
          <div class="bracket-status-countdown" data-countdown-prefix="home-status" style="margin-top:16px;width:min(260px,100%);">
            <div style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:1.4px;color:#64748b;margin-bottom:8px;">Reveals in</div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:7px;">
              <div class="status-count-box"><span class="status-count-num" id="home-status-days">--</span><span class="status-count-label">Days</span></div>
              <div class="status-count-box"><span class="status-count-num" id="home-status-hours">--</span><span class="status-count-label">Hrs</span></div>
              <div class="status-count-box"><span class="status-count-num" id="home-status-minutes">--</span><span class="status-count-label">Min</span></div>
              <div class="status-count-box"><span class="status-count-num" id="home-status-seconds">--</span><span class="status-count-label">Sec</span></div>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  ` : '';

  card.innerHTML = `
    <div class="absolute inset-0 pointer-events-none" style="background:${bg};"></div>
    <div class="relative text-white">
      <div class="flex items-start justify-between gap-3 mb-4">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-12 h-12 rounded-2xl bg-white/12 border border-white/15 flex items-center justify-center text-2xl shadow-soft shrink-0">${bracketHomeIconHtml(copy.icon)}</div>
          <div class="min-w-0">
            <div class="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-100/80">${copy.kicker}</div>
            <h3 class="text-lg font-extrabold leading-tight truncate">${copy.title}</h3>
            <p class="text-xs text-white/70 mt-0.5">${copy.subtitle}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <div class="text-[10px] uppercase tracking-wider text-white/55 font-bold">${copy.statusLabel}</div>
          <div class="text-xs font-extrabold ${copy.statusClass}">${copy.statusValue}</div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2 mb-4">
        <div class="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
          <div class="text-lg font-extrabold">32</div>
          <div class="text-[10px] text-white/60 font-bold uppercase tracking-wider">Teams</div>
        </div>
        <div class="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
          <div class="text-lg font-extrabold">6</div>
          <div class="text-[10px] text-white/60 font-bold uppercase tracking-wider">Rounds</div>
        </div>
        <div class="rounded-2xl bg-white/10 border border-white/10 p-3 text-center">
          <div class="text-lg font-extrabold">119</div>
          <div class="text-[10px] text-white/60 font-bold uppercase tracking-wider">Max Pts</div>
        </div>
      </div>

      ${isPublic ? `
        <div class="mb-3 rounded-2xl bg-white/10 border border-white/10 px-3 py-2 flex items-center justify-between text-xs">
          <span class="text-white/65 font-bold">Public leaderboard</span>
          <span class="font-extrabold ${isLive ? 'text-emerald-200' : 'text-brand-100'}">${entryCount.toLocaleString()} paid entries</span>
        </div>
      ` : ''}

      <div class="flex items-center gap-2">
        <button type="button" onclick="openBracketChallengeFromHome()" class="flex-1 py-3 rounded-2xl bg-white text-brand-900 font-extrabold text-sm tap shadow-soft ${copy.buttonDisabled ? 'opacity-70 cursor-not-allowed' : ''}" ${copy.buttonDisabled ? 'disabled' : ''}>
          ${copy.button}
        </button>
        <button type="button" onclick="showBracketChallengeInfo()" class="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center font-extrabold tap">?</button>
      </div>

      <p class="text-[11px] text-white/58 mt-3 leading-relaxed">
        ${copy.footer}
      </p>
    </div>
    ${secureCoverOverlay}
  `;
}

async function ensureBracketChallengeHomeCard(force = false) {
  try {
    setupHomeBracketStatusRealtime();
    const homeTab = document.getElementById('tab-home');
    if (!homeTab) return;

    let card = document.getElementById('home-bracket-challenge-card');
    if (!card) {
      card = document.createElement('div');
      card.id = 'home-bracket-challenge-card';
      card.className = 'card p-5 overflow-hidden relative bracket-home-card';

      const prizeDash = document.getElementById('home-prize-dashboard');
      const nextMatch = document.getElementById('home-next-match');
      const nextBlock = nextMatch ? nextMatch.closest('.card, section, div') : null;

      if (prizeDash && prizeDash.parentNode) {
        prizeDash.insertAdjacentElement('afterend', card);
      } else if (nextBlock && nextBlock.parentNode) {
        nextBlock.parentNode.insertBefore(card, nextBlock);
      } else {
        homeTab.prepend(card);
      }
    }

    // No-flash safety: cover ONLY the very first empty render.
    // Do not cover/repaint the card on every realtime poll, because that creates
    // the repeated white flash users were seeing on the Home tab.
    const hasExistingCardMarkup = !!card.innerHTML.trim();
    const shouldUseInitialRenderCover = !hasExistingCardMarkup;
    if (shouldUseInitialRenderCover) {
      card.setAttribute('data-bracket-rendering', 'true');
      card.innerHTML = '<div class="bracket-home-safe-placeholder" aria-hidden="true"></div>';
    } else {
      card.removeAttribute('data-bracket-rendering');
    }

    const meta = await fetchHomeBracketMeta(force);

    const normalizedStatus = normalizeBracketHomeStatus(meta?.status);
    const shouldSecureCover = normalizedStatus === 'coming_soon' || normalizedStatus === 'locked';

    if (normalizedStatus === 'hidden' && !meta?.canPreviewHidden) {
      document.body.classList.add('bracket-status-hidden');
      card.style.setProperty('display', 'none', 'important');
      card.classList.add('hidden');
      card.setAttribute('data-bracket-hidden-by-status', 'true');
      card.removeAttribute('data-bracket-rendering');
      card.removeAttribute('data-bracket-secure-covered');
      delete card.dataset.bracketMetaKey;
      return;
    }

    document.body.classList.remove('bracket-status-hidden');
    card.style.removeProperty('display');
    card.classList.remove('hidden');
    card.removeAttribute('data-bracket-hidden-by-status');
    card.toggleAttribute('data-bracket-secure-covered', shouldSecureCover);

    const metaRenderKey = getBracketHomeMetaRenderKey(meta);
    if (card.dataset.bracketMetaKey === metaRenderKey && card.innerHTML.trim()) {
      card.removeAttribute('data-bracket-rendering');
      try {
        if (typeof window.applyHomeBracketStatusOverlay === 'function') {
          window.applyHomeBracketStatusOverlay();
        } else {
          document.body.classList.add('bracket-status-ready');
        }
      } catch (_) {
        document.body.classList.add('bracket-status-ready');
      }
      return;
    }

    card.dataset.bracketMetaKey = metaRenderKey;
    renderHomeBracketCard(card, meta);

    if (normalizeBracketHomeStatus(meta?.status) === 'hidden' && meta?.canPreviewHidden && !card.querySelector(':scope > .admin-preview-badge')) {
      const badge = document.createElement('div');
      badge.className = 'admin-preview-badge';
      badge.textContent = 'Admin Preview';
      card.prepend(badge);
    }

    // Apply the bracket overlay (blur cover for coming_soon/locked, etc.) SYNCHRONOUSLY
    // right after innerHTML is set. Defers to a no-op when bracket-challenge.js hasn't
    // loaded yet. This prevents the brief flash of un-overlaid content on refresh.
    try {
      if (typeof window.applyHomeBracketStatusOverlay === 'function') {
        window.applyHomeBracketStatusOverlay();
      }
    } catch (e) {
      // Silent — overlay is a best-effort visual.
    } finally {
      // Remove the temporary render cover only after the real card/overlay exists.
      if (typeof window.applyHomeBracketStatusOverlay !== 'function') {
        document.body.classList.add('bracket-status-ready');
      }
      card.removeAttribute('data-bracket-rendering');
    }
  } catch (e) {
    console.warn('[Bracket] home card render failed:', e);
    const card = document.getElementById('home-bracket-challenge-card');
    if (card) card.removeAttribute('data-bracket-rendering');
  }
}

function openBracketChallengeFromHome() {
  try {
    // Your Bracket Challenge is an in-page panel from bracket-challenge.js
    if (typeof window.openBracketPanel === 'function') {
      if (typeof window.initBracketChallenge === 'function') {
        Promise.resolve(window.initBracketChallenge()).finally(() => window.openBracketPanel())
      } else {
        window.openBracketPanel()
      }
      return
    }

    if (document.getElementById('tab-bracket') && typeof switchTab === 'function') {
      switchTab('bracket')
      return
    }

    if (typeof showToast === 'function') {
      showToast('Bracket panel not loaded. Check bracket-challenge.js script path.', 'warning')
    }

    console.warn('[Bracket] openBracketPanel is missing. Do not redirect to bracket-challenge.html because that file does not exist.')
  } catch (e) {
    console.warn('[Bracket] open failed:', e)
    if (typeof showToast === 'function') showToast('Bracket Challenge could not open', 'warning')
  }
}

function showBracketChallengeInfo() {
  const html = `
    <div class="text-left space-y-2 text-sm leading-relaxed">
      <p><b>Scoring:</b> R32 2 · R16 3 · QF 5 · SF 8 · Final 12 · Champion 15.</p>
      <p><b>Lock:</b> 29 June 2026, 12:50 AM BTT.</p>
      <p>No boosters, insurance, or streak bonuses. This is a separate paid competition.</p>
      <p><b>Status rules:</b> Open shows the deadline countdown. Live bypasses countdown and opens the public leaderboard.</p>
    </div>
  `
  if (typeof showModal === 'function') {
    showModal({
      icon: 'cup',
      title: 'Bracket Challenge',
      messageHtml: html,
      actions: [{ text: 'Got it', onclick: 'hideModal()', class: 'bg-brand-900 text-white' }]
    })
  } else if (typeof showToast === 'function') {
    showToast('Bracket Challenge: R32 to Champion. Live mode opens the public leaderboard.', 'info')
  }
}

window.ensureBracketChallengeHomeCard = ensureBracketChallengeHomeCard;
window.scheduleHomeBracketRealtimeRefresh = scheduleHomeBracketRealtimeRefresh;

(function bootHomeBracketStatusRealtime(){
  const boot = () => {
    try {
      setupHomeBracketStatusRealtime();
      ensureBracketChallengeHomeCard(true);
    } catch (e) {
      console.warn('[Bracket] Home realtime boot failed:', e);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    setTimeout(boot, 0);
  }
  window.addEventListener('load', () => setTimeout(boot, 250));
})();

async function loadHome() {
  setupHomeBracketStatusRealtime()
  ensureBracketChallengeHomeCard()
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
    // Stage 4d: scope-aware breakdown. Falls back to global if helper missing.
    const breakdown = (typeof fetchPrizeBreakdownForScope === 'function')
      ? await fetchPrizeBreakdownForScope(currentScope)
      : await fetchPrizeBreakdown()
    // For private scopes, render even at zero so users see "0 paid yet" state.
    // For global, keep the original "gross > 0" guard.
    const shouldRender = breakdown && (
      breakdown._scopeType === 'private' || breakdown.gross > 0
    )
    if (shouldRender) {
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
      ;['overall', 'highlights'].forEach(t => {
        const el = document.getElementById('lb-subtab-' + t)
        if (!el) return
        el.classList.toggle('active', tab === t)
        el.setAttribute('aria-selected', tab === t ? 'true' : 'false')
      })
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
            .from('profiles').select('id, name, department, fee_paid').in('id', userIds).eq('fee_paid', true).neq('entered_via_private', true)
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
        const data = await fetchAllPredictionResults('user_id, base_points, kickoff, fixture_id')
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
  // ===== Server-backed rank trend snapshots =====
    // Single source of truth: public.rank_snapshots. Every user diffs against
    // the same row, so badges are deterministic across devices and sessions.

    let _snapshotCache = null
    let _snapshotCacheAt = 0
    const SNAPSHOT_CACHE_MS = 60 * 1000  // refetch at most once a minute

    async function getLatestRankSnapshot() {
      if (_snapshotCache && Date.now() - _snapshotCacheAt < SNAPSHOT_CACHE_MS) {
        return _snapshotCache
      }

      // Determine which baseline the leaderboard SHOULD diff against:
      // it's the baseline keyed to the CURRENT matchday — i.e. the date of
      // the latest finished fixture. The forward-stamp step at end of each
      // publish creates baselines for FUTURE matchdays; we must not pick
      // those, or every trend would be (current vs current) = no arrows.
      let currentMatchKey = null
      try {
        const latestFinished = (fixtures || [])
          .filter(f => f.home_score !== null && f.away_score !== null)
          .sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))[0]
        if (latestFinished) {
          currentMatchKey = new Date(latestFinished.kickoff).toDateString()
        }
      } catch (e) { /* fixtures not loaded yet — fall through to fallback */ }

      let snapshot = null

      if (currentMatchKey) {
        const { data, error } = await supabaseClient
          .from('rank_snapshots')
          .select('match_key, ranks, stamped_at')
          .eq('match_key', currentMatchKey)
          .maybeSingle()
        if (error) {
          console.warn('[trend] snapshot fetch by match_key failed:', error.message)
        } else if (data) {
          snapshot = data
        }
      }

      // Fallback: legacy "latest by stamped_at" — only when we can't determine
      // the current matchday (e.g. fixtures not yet loaded) or no matching
      // baseline exists. Logs a warning so the missing baseline is visible.
      if (!snapshot) {
        const { data, error } = await supabaseClient
          .from('rank_snapshots')
          .select('match_key, ranks, stamped_at')
          .order('stamped_at', { ascending: false })
          .limit(1)
          .maybeSingle()
        if (error) {
          console.warn('[trend] snapshot fetch (fallback) failed:', error.message)
          return null
        }
        snapshot = data || null
        if (snapshot && currentMatchKey) {
          console.warn(
            `[trend] no baseline for current matchday "${currentMatchKey}"; ` +
            `falling back to most recent stamp "${snapshot.match_key}". ` +
            `Arrows may be off until the missing baseline is created.`
          )
        }
      }

      _snapshotCache = snapshot
      _snapshotCacheAt = Date.now()
      return _snapshotCache
    }

    function invalidateSnapshotCache() {
      _snapshotCache = null
      _snapshotCacheAt = 0
    }

    // Pure builder. Takes the same `overallStats` array used to render the
    // leaderboard, plus the fetched snapshot. Returns { uid: { dir, delta } }.

    function normalizeRankTrend(raw) {
      if (!raw) return null
      if (typeof raw === 'object') {
        const dir = raw.dir || raw.direction || raw.type
        const delta = Number(raw.delta ?? raw.value ?? raw.change ?? 0)
        if ((dir === 'up' || dir === 'down') && delta > 0) return { dir, delta }
        if (dir === 'new') return { dir: 'new', delta: 0 }
      }
      if (typeof raw === 'number') {
        if (raw > 0) return { dir: 'up', delta: raw }
        if (raw < 0) return { dir: 'down', delta: Math.abs(raw) }
      }
      if (typeof raw === 'string') {
        const m = raw.match(/(up|down|new|▲|▼)\s*([0-9]+)?/i)
        if (m) {
          const token = m[1].toLowerCase()
          const delta = Number(m[2] || 1)
          if (token === 'up' || token === '▲') return { dir: 'up', delta }
          if (token === 'down' || token === '▼') return { dir: 'down', delta }
          if (token === 'new') return { dir: 'new', delta: 0 }
        }
      }
      return null
    }

    function buildTrendMap(currentStats, snapshot) {
      if (!snapshot || !snapshot.ranks) return {}
      const ageMs = Date.now() - new Date(snapshot.stamped_at).getTime()
      if (ageMs > 7 * 24 * 3600 * 1000) return {}

      const baseline = snapshot.ranks
      const trend = {}
      currentStats.forEach((s, i) => {
        const uid = s.user_id || s.id
        const newRank = i + 1
        const oldRank = baseline[uid]
        if (oldRank === undefined) {
          trend[uid] = { dir: 'new', delta: 0 }
        } else if (newRank < oldRank) {
          trend[uid] = { dir: 'up', delta: oldRank - newRank }
        } else if (newRank > oldRank) {
          trend[uid] = { dir: 'down', delta: newRank - oldRank }
        }
      })
      return trend
    }


    // Fallback trend builder: if rank_snapshots is empty/missing, compare the
    // current table against the table BEFORE the latest finished matchday.
    // This keeps ▲/▼ movement visible without needing an admin snapshot first.
    async function buildLatestMatchdayTrendMap(currentStats) {
      try {
        const md = getLatestMatchday()
        if (!md || !md.fixtureIds || !md.fixtureIds.length || !currentStats?.length) return {}

        const { data, error } = await supabaseClient
          .from('prediction_results')
          .select('user_id, base_points, final_points, points_awarded, fixture_id')
          .in('fixture_id', md.fixtureIds)
        if (error || !data || !data.length) return {}

        const changes = {}
        data.forEach(r => {
          const uid = r.user_id
          if (!uid) return
          if (!changes[uid]) changes[uid] = { points: 0, exact: 0, gd: 0, result: 0 }
          changes[uid].points += Number(r.final_points ?? r.points_awarded ?? 0) || 0
          const base = Number(r.base_points ?? 0) || 0
          if (base === 5) changes[uid].exact++
          else if (base === 3) changes[uid].gd++
          else if (base === 2) changes[uid].result++
        })

        const previousStats = currentStats.map((s, idx) => {
          const uid = s.user_id || s.id
          const ch = changes[uid] || { points: 0, exact: 0, gd: 0, result: 0 }
          return {
            user_id: uid,
            _idx: idx,
            points: Math.max(0, (Number(s.points) || 0) - ch.points),
            exact: Math.max(0, (Number(s.exact) || 0) - ch.exact),
            gd: Math.max(0, (Number(s.gd) || 0) - ch.gd),
            result: Math.max(0, (Number(s.result) || 0) - ch.result)
          }
        })

        previousStats.sort((a, b) => {
          if ((b.points || 0) !== (a.points || 0)) return (b.points || 0) - (a.points || 0)
          if ((b.exact  || 0) !== (a.exact  || 0)) return (b.exact  || 0) - (a.exact  || 0)
          if ((b.gd     || 0) !== (a.gd     || 0)) return (b.gd     || 0) - (a.gd     || 0)
          if ((b.result || 0) !== (a.result || 0)) return (b.result || 0) - (a.result || 0)
          return a._idx - b._idx
        })

        const oldRanks = {}
        previousStats.forEach((s, i) => { oldRanks[s.user_id] = i + 1 })

        const trend = {}
        currentStats.forEach((s, i) => {
          const uid = s.user_id || s.id
          const newRank = i + 1
          const oldRank = oldRanks[uid]
          if (!oldRank) return
          if (newRank < oldRank) trend[uid] = { dir: 'up', delta: oldRank - newRank }
          else if (newRank > oldRank) trend[uid] = { dir: 'down', delta: newRank - oldRank }
        })
        return trend
      } catch (e) {
        console.warn('[trend] latest-matchday fallback failed:', e)
        return {}
      }
    }

    // Realtime: when admin stamps, everyone's badges refresh without manual reload.
    try {
      supabaseClient
        .channel('rank_snapshots_changes')
        .on('postgres_changes',
            { event: '*', schema: 'public', table: 'rank_snapshots' },
            () => {
              invalidateSnapshotCache()
              if (typeof loadLeaderboard === 'function') loadLeaderboard()
            })
        .subscribe()
    } catch (e) {
      console.warn('[trend] realtime subscribe failed (non-fatal):', e)
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


function buildLeaderboardShareText(stats, subtab) {
  const top = stats.slice(0, 21)
  const medals = ['🥇', '🥈', '🥉']
  const title = subtab === 'matchday'
    ? '🏆 WC Predictions — Matchday Standings'
    : '🏆 WC Predictions League — Overall'

  const lines = top.map((s, i) => {
    const rank = i < 3 ? medals[i] : `${i + 1}.`
    return `${rank} ${s.name || 'Anonymous'} — ${s.points || 0} pts`
  })

  const url = window.location.origin
  return `${title}\n\n${lines.join('\n')}\n\nPredict next match: ${url}`
}

async function shareLeaderboard() {
  const stats = window.__lbCachedStats || []
  const subtab = window.__lbSubtab || 'overall'

  if (stats.length === 0) {
    showToast('No standings to share yet', 'info')
    return
  }

  // Try to generate the image card. If anything in canvas-land fails, fall back
  // to the original text-based share so users never end up with nothing.
  let blob = null
  try {
    blob = await generateLeaderboardCardBlob(stats, subtab)
  } catch (e) {
    console.warn('[shareLeaderboard] image generation failed, falling back to text:', e)
  }

  const text = buildLeaderboardShareText(stats, subtab)

  // Path 1: native share with the image file (best UX — WhatsApp shows it inline)
  if (blob && navigator.canShare) {
    const filename = `wcpl-leaderboard-${subtab}-${Date.now()}.png`
    const file = new File([blob], filename, { type: 'image/png' })
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'WC 2026 Prediction League',
          text
        })
        showToast('Shared!', 'success')
        return
      } catch (e) {
        if (e.name === 'AbortError') return // user cancelled — don't fall back
        console.warn('[shareLeaderboard] native share failed:', e)
      }
    }
  }

  // Path 2: download the image, then open WhatsApp with the caption text
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wcpl-leaderboard-${Date.now()}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
    showToast('Image saved · attach it in WhatsApp', 'success')
    setTimeout(() => {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
    }, 250)
    return
  }

  // Path 3: pure text fallback (no canvas / no share API at all)
  if (navigator.share) {
    try {
      await navigator.share({ title: 'WC Predictions League', text })
      return
    } catch (e) {
      if (e.name === 'AbortError') return
    }
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}

// ===== Leaderboard share image generator =====
// Renders the current standings to a portrait PNG card following the same
// visual language as the achievement cards (deep navy + gold accents +
// dot pattern). Returns a Blob ready for navigator.share or download.
async function generateLeaderboardCardBlob(stats, subtab) {
  const WIDTH = 1080
  const MAX_ROWS = 40                                   // show everyone, with headroom
  const rowsToShow = Math.min(stats.length, MAX_ROWS)
  const showTrend = subtab !== 'matchday'               // trend only valid on overall

  // ----- Layout constants -----
  const HEADER_H = 200
  const PROGRESS_H = 78
  const ROW_H = 60
  const FOOTER_H = 110
  const PAD = 30

  // Two columns: left holds the first half (incl. top 3), right holds the rest.
  const half = Math.ceil(rowsToShow / 2)
  const colRows = half                                  // tallest column = left
  const LIST_H = colRows * ROW_H

  // Column geometry
  const SIDE = 50
  const COL_GAP = 30
  const colW = (WIDTH - SIDE * 2 - COL_GAP) / 2         // 475 at 1080
  const colX = [SIDE, SIDE + colW + COL_GAP]            // left edge of each column

  const HEIGHT = HEADER_H + PROGRESS_H + LIST_H + FOOTER_H + PAD

  const canvas = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  const ctx = canvas.getContext('2d')

  // ===== Background: deep navy gradient =====
  const bgGrad = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)
  bgGrad.addColorStop(0, '#0B1221')
  bgGrad.addColorStop(0.5, '#152849')
  bgGrad.addColorStop(1, '#1E3A5F')
  ctx.fillStyle = bgGrad
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  // Subtle dot pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)'
  for (let yy = 0; yy < HEIGHT; yy += 32) {
    for (let xx = 0; xx < WIDTH; xx += 32) {
      ctx.beginPath(); ctx.arc(xx, yy, 1.5, 0, Math.PI * 2); ctx.fill()
    }
  }

  // Gold corner glow
  const glow = ctx.createRadialGradient(WIDTH - 100, 100, 0, WIDTH - 100, 100, 600)
  glow.addColorStop(0, 'rgba(212, 162, 76, 0.30)')
  glow.addColorStop(1, 'rgba(212, 162, 76, 0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  const cx = WIDTH / 2

  // ===== Header =====
  ctx.fillStyle = '#D4A24C'
  ctx.font = 'bold 36px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('🏆  WC 2026 PREDICTION LEAGUE', cx, 90)

  ctx.strokeStyle = 'rgba(212, 162, 76, 0.4)'
  ctx.lineWidth = 2
  ctx.beginPath(); ctx.moveTo(cx - 220, 115); ctx.lineTo(cx + 220, 115); ctx.stroke()

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 56px system-ui, -apple-system, sans-serif'
  ctx.fillText(subtab === 'matchday' ? 'Matchday Standings' : 'Overall Standings', cx, 180)

  // ===== Tournament progress strip =====
  const progressY = HEADER_H + 10
  const rows = window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || []
  const totalMatches = rows.length
  const playedMatches = rows.filter(f => f.home_score !== null && f.away_score !== null).length
  const pct = totalMatches > 0 ? (playedMatches / totalMatches) : 0

  if (totalMatches > 0) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)'
    ctx.font = '26px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText(`${playedMatches} of ${totalMatches} matches played`, 80, progressY + 10)
    ctx.fillStyle = '#D4A24C'
    ctx.font = 'bold 26px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(`${Math.round(pct * 100)}%`, WIDTH - 80, progressY + 10)

    const barY = progressY + 35, barX = 80, barW = WIDTH - 160, barH = 10
    ctx.fillStyle = 'rgba(255, 255, 255, 0.10)'
    roundRect(ctx, barX, barY, barW, barH, 5); ctx.fill()
    const fillGrad = ctx.createLinearGradient(barX, barY, barX + barW, barY)
    fillGrad.addColorStop(0, '#F4C430'); fillGrad.addColorStop(1, '#D4A24C')
    ctx.fillStyle = fillGrad
    roundRect(ctx, barX, barY, Math.max(8, barW * pct), barH, 5); ctx.fill()
  }

  // ===== Two-column rows =====
  const listTop = HEADER_H + PROGRESS_H
  const medals = ['🥇', '🥈', '🥉']

  for (let i = 0; i < rowsToShow; i++) {
    const s = stats[i]
    if (!s) continue
    const rank = i + 1
    const top3 = i < 3

    // Place: first `half` go in column 0, the rest in column 1.
    const col = i < half ? 0 : 1
    const idxInCol = i < half ? i : i - half
    const xBase = colX[col]
    const rowY = listTop + idxInCol * ROW_H
    const cyl = rowY + ROW_H / 2

    // Row panel
    if (top3) {
      ctx.fillStyle = 'rgba(212, 162, 76, 0.13)'
      ctx.strokeStyle = 'rgba(212, 162, 76, 0.45)'
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'
      ctx.strokeStyle = 'rgba(255, 255, 255, 0)'
    }
    ctx.lineWidth = 1.5
    roundRect(ctx, xBase, rowY + 4, colW, ROW_H - 8, 10)
    ctx.fill()
    if (top3) ctx.stroke()

    ctx.textBaseline = 'middle'

    // Rank slot (medal for top 3, else number tile)
    ctx.textAlign = 'center'
    if (top3) {
      ctx.font = '30px system-ui, -apple-system, sans-serif'
      ctx.fillText(medals[i], xBase + 26, cyl)
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)'
      roundRect(ctx, xBase + 8, cyl - 18, 40, 36, 9); ctx.fill()
      ctx.fillStyle = '#D4A24C'
      ctx.font = 'bold 22px system-ui, -apple-system, sans-serif'
      ctx.fillText(String(rank), xBase + 28, cyl)
    }

    // Trend chip
    const trendX = xBase + 56
    ctx.textAlign = 'left'
    if (showTrend) {
      const tr = (typeof lbTrendMap !== 'undefined' && lbTrendMap) ? lbTrendMap[s.user_id || s.id] : null
      if (tr && tr.dir === 'up') {
        ctx.fillStyle = '#4ADE80'; ctx.font = 'bold 20px system-ui, -apple-system, sans-serif'
        ctx.fillText('▲' + tr.delta, trendX, cyl)
      } else if (tr && tr.dir === 'down') {
        ctx.fillStyle = '#F87171'; ctx.font = 'bold 20px system-ui, -apple-system, sans-serif'
        ctx.fillText('▼' + tr.delta, trendX, cyl)
      } else if (tr && tr.dir === 'new') {
        ctx.fillStyle = '#D4A24C'; ctx.font = 'bold 16px system-ui, -apple-system, sans-serif'
        ctx.fillText('NEW', trendX, cyl)
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.22)'; ctx.font = '20px system-ui, -apple-system, sans-serif'
        ctx.fillText('–', trendX + 4, cyl)
      }
    }

    // Name (truncated to leave room for points)
    const nameX = xBase + 104
    const pointsRight = xBase + colW - 14
    const nameMax = (pointsRight - 46) - nameX
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 28px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'left'
    const name = truncateForCanvas(ctx, s.name || 'Anonymous', nameMax)
    ctx.fillText(name, nameX, cyl)

    // Points (right of column)
    ctx.fillStyle = top3 ? '#F4C430' : '#D4A24C'
    ctx.font = 'bold 32px system-ui, -apple-system, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(String(s.points || 0), pointsRight, cyl)

    ctx.textBaseline = 'alphabetic'
  }

  // ===== Footer =====
  const footerY = HEIGHT - 70
  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
  ctx.font = '24px system-ui, -apple-system, sans-serif'
  ctx.fillText('Think you can do better? Join the league:', cx, footerY - 30)
  ctx.fillStyle = '#D4A24C'
  ctx.font = 'bold 28px system-ui, -apple-system, sans-serif'
  ctx.fillText('wcpredictionleague.vercel.app', cx, footerY + 5)

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob)
      else reject(new Error('toBlob returned null'))
    }, 'image/png', 0.95)
  })
}


// ---- Fallback 3-letter code for canvas when a flag image can't load ----
function teamCodeFallback(name) {
  if (!name) return '?'
  const w = name.trim().split(/\s+/)
  if (w.length >= 2) return (w[0][0] + w[1][0] + (w[1][1] || '')).toUpperCase()
  return name.slice(0, 3).toUpperCase()
}

// Format a kickoff ISO string as "SUN 14 JUN 2026"
function fmtMatchDate(iso) {
  const d = new Date(iso)
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  const mons = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
  return `${days[d.getDay()]} ${d.getDate()} ${mons[d.getMonth()]} ${d.getFullYear()}`
}

// Build everything the highlight card needs from data already in memory.
// Returns null if the fixture isn't finished.
function buildMatchHighlightData(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture || fixture.home_score === null || fixture.away_score === null) return null

  const picks = (hotTakesByFixture[fixtureId] || []) // sorted by final_points desc when finished
  const exact = picks.filter(p => p.base_points === 5).length
  const correctResult = picks.filter(p => p.base_points === 2 || p.base_points === 3).length
 const pointsWon = picks.reduce((sum, p) => sum + (p.final_points || 0), 0)

  // Only show players who actually scored on the podium (was: picks.slice(0,3))
  const scorers = picks.filter(p => (p.final_points || 0) > 0)
  const topPicks = scorers.slice(0, 3)

  // Maverick / biggest upset: the scorer whose exact scoreline was predicted by
  // the fewest players. Exclude the MVP (top pick) when 2+ players scored, so we
  // don't surface the same person twice.
  let maverick = null, maverickPop = 0
  if (scorers.length) {
    const freq = {}
    picks.forEach(p => { const k = p.home + '-' + p.away; freq[k] = (freq[k] || 0) + 1 })
    const pool = scorers.length >= 2 ? scorers.filter(p => p !== topPicks[0]) : scorers
    maverick = pool.slice().sort((a, b) => {
      const fa = freq[a.home + '-' + a.away], fb = freq[b.home + '-' + b.away]
      if (fa !== fb) return fa - fb
      return (b.final_points || 0) - (a.final_points || 0)
    })[0] || null
    if (maverick) maverickPop = freq[maverick.home + '-' + maverick.away]
  }

  return {
    fixture,
    summary: { predictions: picks.length, exact, correctResult, pointsWon },
    topPicks,
    maverick,
    maverickPop
  }
}

// Small bonus chips (🔥 streak, ⚡ combo) for a pick.
function bonusChips(p) {
  let s = ''
  if ((p.combo_bonus || 0) > 0) s += '<span style="margin-left:5px;">⚡</span>'
  if ((p.streak_bonus || 0) > 0) s += '<span style="margin-left:3px;">🔥</span>'
  return s
}

// ---- DOM renderer: the in-app Highlights tab (view-only; admin gets share) ----
async function renderMatchHighlights() {
  const c = document.getElementById('leaderboard-list')
  if (!c) return
  c.innerHTML = '<div class="skel h-40 rounded-2xl"></div>'

  try {
    if (!Object.keys(hotTakesByFixture).length && typeof refreshSocialCaches === 'function') {
      await refreshSocialCaches()
    }
  } catch (e) { console.warn('[highlights] refresh failed:', e) }

  const all = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
  const finished = all
    .filter(f => f.home_score !== null && f.away_score !== null)
    .sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))

  if (!finished.length) {
    c.innerHTML = '<div style="text-align:center; padding:40px 16px; color:rgba(255,255,255,.5);">No finished matches yet.</div>'
    return
  }

  const admin = (typeof isAdmin === 'function') ? isAdmin() : false
  const medals = ['🥇', '🥈', '🥉']

  c.innerHTML = finished.map(f => {
    const d = buildMatchHighlightData(f.id)
    if (!d) return ''
    const { fixture, summary, topPicks, maverick, maverickPop } = d

    const topRows = topPicks.map((p, i) => {
      const win = (p.final_points || 0) > 0
      const mvp = i === 0 && win
        ? '<span style="margin-left:6px; background:#D4A24C; color:#0B1221; font-size:10px; font-weight:800; padding:2px 8px; border-radius:10px; display:inline-flex; align-items:center; gap:4px;"><svg width="11" height="11" viewBox="0 0 24 24" fill="#0B1221" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>MATCH MVP</span>'
        : ''
      return `<div style="display:flex; align-items:center; gap:8px; padding:7px 9px; margin:3px 0; border-radius:8px; background:${win ? 'rgba(212,162,76,.13)' : 'rgba(255,255,255,.05)'}; ${win ? 'border:1px solid rgba(212,162,76,.4);' : ''}">
        <span style="font-size:14px;">${medals[i] || ''}</span>
        <span style="flex:1; color:#fff; font-size:13px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${p.name}${bonusChips(p)}${mvp}</span>
        <span style="color:rgba(255,255,255,.85); font-size:14px; font-weight:700;">${p.home}&nbsp;–&nbsp;${p.away}</span>
        <span style="color:${win ? '#4ADE80' : '#F87171'}; font-size:11px; font-weight:700; width:34px; text-align:right;">+${p.final_points || 0}</span>
      </div>`
    }).join('')

    const upsetBlock = maverick
      ? `<div style="margin-top:8px; padding:9px 11px; border-radius:10px; background:rgba(96,165,250,.12); border:1px solid rgba(96,165,250,.35);">
          <div style="color:#93C5FD; font-size:10px; font-weight:700; letter-spacing:.5px; margin-bottom:3px;">🎯 BOLDEST CALL</div>
          <div style="color:#fff; font-size:12px;"><b>${maverick.name}</b> called <b>${maverick.home}–${maverick.away}</b> when only ${maverickPop} ${maverickPop === 1 ? 'player' : 'players'} did · <span style="color:#4ADE80; font-weight:700;">+${maverick.final_points || 0}</span></div>
        </div>`
      : ''

    const shareBtn = admin
      ? `<button onclick="shareMatchHighlight('${f.id}')" style="width:100%; margin-top:10px; background:#D4A24C; color:#0B1221; font-weight:700; font-size:14px; border:none; border-radius:12px; padding:12px; cursor:pointer;">📤 Share to WhatsApp</button>`
      : ''

    return `<div style="background:linear-gradient(135deg,#0B1221,#152849); border:1px solid rgba(212,162,76,.18); border-radius:18px; padding:16px; margin-bottom:14px;">
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <span style="color:#D4A24C; font-size:13px; font-weight:700;">🏆 ${fixture.stage || 'Match'} · Highlights</span>
        <span style="color:rgba(255,255,255,.5); font-size:10px; letter-spacing:.5px;">${fmtMatchDate(fixture.kickoff)}</span>
      </div>
      <div style="display:flex; align-items:center; justify-content:center; gap:18px; padding:14px 0 8px;">
        <div style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:5px;">
          ${flagHtml(fixture.home_team, 32)}
          <div style="color:#fff; font-size:11px;">${fixture.home_team}</div>
        </div>
        <div style="text-align:center;">
          <div style="color:#F4C430; font-size:36px; font-weight:800; line-height:1;">${fixture.home_score} <span style="color:rgba(255,255,255,.3);">–</span> ${fixture.away_score}</div>
          <div style="color:#4ADE80; font-size:10px; font-weight:700; margin-top:3px;">FULL TIME</div>
        </div>
        <div style="text-align:center; display:flex; flex-direction:column; align-items:center; gap:5px;">
          ${flagHtml(fixture.away_team, 32)}
          <div style="color:#fff; font-size:11px;">${fixture.away_team}</div>
        </div>
      </div>
      <div style="display:flex; justify-content:space-around; padding:12px 4px; margin:8px 0; border-top:1px solid rgba(255,255,255,.08); border-bottom:1px solid rgba(255,255,255,.08);">
        <div style="text-align:center;"><div style="color:#fff; font-size:18px; font-weight:700;">${summary.predictions}</div><div style="color:rgba(255,255,255,.45); font-size:9px;">PREDICTIONS</div></div>
        <div style="text-align:center;"><div style="color:#fff; font-size:18px; font-weight:700;">${summary.exact}</div><div style="color:rgba(255,255,255,.45); font-size:9px;">EXACT</div></div>
        <div style="text-align:center;"><div style="color:#fff; font-size:18px; font-weight:700;">${summary.correctResult}</div><div style="color:rgba(255,255,255,.45); font-size:9px;">RESULT</div></div>
        <div style="text-align:center;"><div style="color:#F4C430; font-size:18px; font-weight:700;">${summary.pointsWon}</div><div style="color:rgba(255,255,255,.45); font-size:9px;">POINTS</div></div>
      </div>
      <div style="color:#D4A24C; font-size:11px; font-weight:700; letter-spacing:.5px; margin:6px 0;">⚡ TOP PREDICTIONS</div>
      ${topRows || '<div style="color:rgba(255,255,255,.4); font-size:12px; padding:4px 0;">No predictions.</div>'}
      ${upsetBlock}
      ${shareBtn}
    </div>`
  }).join('')
}

// Load a flag PNG for canvas use (CORS-safe so toBlob still works). Resolves null on failure.
function loadFlagImage(url) {
  return new Promise(res => {
    if (!url) return res(null)
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => res(img)
    img.onerror = () => res(null)
    img.src = url
  })
}

// Draw a filled 5-point star centred at (cx, cy) with outer radius r.
function drawCanvasStar(ctx, cx, cy, r, color) {
  const spikes = 5, inner = r * 0.42
  ctx.beginPath()
  for (let i = 0; i < spikes * 2; i++) {
    const ang = (Math.PI / spikes) * i - Math.PI / 2
    const rr = i % 2 === 0 ? r : inner
    const x = cx + Math.cos(ang) * rr, y = cy + Math.sin(ang) * rr
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = color
  ctx.fill()
}

// ---- Canvas PNG generator for the admin share ----

// ============================================================
// MATCH REPORT CARD v4 — WC 2026 Prediction League
// ============================================================
// Drop-in replacement for generateMatchReportCardBlob().
//
// Changes vs v3:
//   • Removed TOP PREDICTIONS + BOLDEST CALL block
//     (generated separately by the Match Highlights card)
//   • Bumped breakdown-table TOTAL font from 19px → 24px
//   • Slight row-height bump (58 → 62) to accommodate larger total
//
// shareMatchReport() does not change.
// ============================================================


async function generateMatchReportCardBlob(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture) throw new Error('Fixture not found')

  const finished = fixture.home_score !== null && fixture.away_score !== null
  if (!finished) throw new Error('Match report is only available for finished matches')

  const { data: rows, error: resErr } = await supabaseClient
    .from('prediction_results')
    .select('user_id, base_points, stage_multiplier, multiplied_base, streak_bonus, combo_bonus, total_bonus, final_points, streak_count, streak_tier, combos_earned, bonus_breakdown, home_prediction, away_prediction')
    .eq('fixture_id', fixtureId)
  if (resErr) throw resErr
  if (!rows || !rows.length) throw new Error('No scored predictions found for this match')

  const userIds = [...new Set(rows.map(r => r.user_id))]
  const { data: profiles } = await supabaseClient
    .from('profiles')
    .select('id, name, fee_paid, entered_via_private')
    .in('id', userIds)
  const nameMap = {}
  ;(profiles || []).forEach(p => {
    if (p.fee_paid && !p.entered_via_private) nameMap[p.id] = p.name || 'Anonymous'
  })

  const picks = rows
    .filter(r => nameMap[r.user_id])
    .map(r => ({
      name: nameMap[r.user_id],
      home: r.home_prediction,
      away: r.away_prediction,
      base_points: r.base_points || 0,
      stage_mult: r.stage_multiplier || 1,
      multiplied_base: r.multiplied_base || 0,
      streak_bonus: r.streak_bonus || 0,
      combo_bonus: r.combo_bonus || 0,
      final_points: r.final_points || 0,
      streak_tier: r.streak_tier || null,
      combos_earned: r.combos_earned || [],
      breakdown: r.bonus_breakdown || []
    }))
    .sort((a, b) => {
      if (b.final_points !== a.final_points) return b.final_points - a.final_points
      if (b.base_points !== a.base_points) return b.base_points - a.base_points
      return String(a.name || '').localeCompare(String(b.name || ''))
    })

  if (!picks.length) throw new Error('No eligible predictions for this report')

  const exactCount   = picks.filter(p => p.base_points === 5).length
  const correctCount = picks.filter(p => p.base_points === 3).length
  const gdOnlyCount  = picks.filter(p => p.base_points === 2).length
  const wrongCount   = picks.filter(p => p.base_points === 0).length
  const totalPoints  = picks.reduce((s, p) => s + p.final_points, 0)
  const streakAwards = picks.filter(p => p.streak_bonus > 0).length
  const comboAwards  = picks.filter(p => p.combo_bonus > 0).length
  const stageMult    = picks[0]?.stage_mult || 1

  const hf = getFlag(fixture.home_team), af = getFlag(fixture.away_team)
  const [homeImg, awayImg] = await Promise.all([
    loadFlagImage(hf.img ? hf.img.replace('/w40/', '/w160/') : null),
    loadFlagImage(af.img ? af.img.replace('/w40/', '/w160/') : null)
  ])

  // Clean phone-first card: no tiny per-row chips. Bonus details are grouped
  // in one readable band, while each player row stays large and sharp.
  const WIDTH        = 1080
  const SIDE_PAD     = 54
  const HEADER_H     = 124
  const SCORE_H      = 220
  const STATS_H      = 124
  // Taller bonus band so the award title, winner chips and summary never sit on
  // the border. This is intentionally only a canvas layout change.
  const BONUS_H      = (streakAwards || comboAwards) ? 142 : 0
  const SEC_LABEL_H  = 64
  const COL_HDR_H    = 36
  const ROW_H        = 72
  const COL_GUTTER   = 22
  const SUMMARY_H    = 198
  const FOOTER_H     = 72
  const PAD_BOTTOM   = 28

  const INNER_W      = WIDTH - SIDE_PAD * 2
  const COL_W        = (INNER_W - COL_GUTTER) / 2
  const COL1_X       = SIDE_PAD
  const COL2_X       = SIDE_PAD + COL_W + COL_GUTTER
  const ROWS_PER_COL = Math.ceil(picks.length / 2)

  const HEIGHT = HEADER_H + SCORE_H + STATS_H + BONUS_H + SEC_LABEL_H + COL_HDR_H
              + (ROWS_PER_COL * ROW_H) + SUMMARY_H + FOOTER_H + PAD_BOTTOM

  const canvas = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  const ctx = canvas.getContext('2d')

  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)
  bg.addColorStop(0, '#08111F')
  bg.addColorStop(0.46, '#102542')
  bg.addColorStop(1, '#183B63')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.fillStyle = 'rgba(255,255,255,0.028)'
  for (let yy = 0; yy < HEIGHT; yy += 38) {
    for (let xx = 0; xx < WIDTH; xx += 38) {
      ctx.beginPath()
      ctx.arc(xx, yy, 1.4, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const topGlow = ctx.createRadialGradient(WIDTH - 90, 95, 0, WIDTH - 90, 95, 580)
  topGlow.addColorStop(0, 'rgba(212,162,76,0.30)')
  topGlow.addColorStop(1, 'rgba(212,162,76,0)')
  ctx.fillStyle = topGlow
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  const cx = WIDTH / 2

  function reasonLabel(p) {
    if (p.base_points === 5) return 'Exact'
    if (p.base_points === 3) return 'GD'
    if (p.base_points === 2) return 'Result'
    return 'Wrong'
  }

  function bonusAwardParts() {
    const bonusPlayers = picks.filter(p => (p.streak_bonus || 0) > 0 || (p.combo_bonus || 0) > 0)
    return bonusPlayers.map(p => {
      const bits = []
      if ((p.streak_bonus || 0) > 0) bits.push(`🔥 +${p.streak_bonus}`)
      if ((p.combo_bonus || 0) > 0) bits.push(`⚡ +${p.combo_bonus}`)
      return `${p.name} ${bits.join(' ')}`.trim()
    })
  }

  function bonusSummaryLines(ctx, maxWidth) {
    const parts = bonusAwardParts()
    const lines = []
    let current = ''
    let used = 0

    for (const part of parts) {
      const candidate = current ? `${current}  •  ${part}` : part
      if (!current || ctx.measureText(candidate).width <= maxWidth) {
        current = candidate
        used += 1
        continue
      }
      lines.push(current)
      current = part
      used += 1
      if (lines.length === 1) break
    }

    if (current) lines.push(current)
    const remaining = Math.max(0, parts.length - used)
    if (remaining > 0 && lines.length) lines[lines.length - 1] += `  •  +${remaining} more`
    return lines.slice(0, 2)
  }

  // Header
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 34px system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.fillText(`📊 ${fixture.stage || 'Match'} · Match Report`, SIDE_PAD, 72)

  ctx.fillStyle = 'rgba(255,255,255,0.66)'
  ctx.font = '700 22px system-ui, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText(fmtMatchDate(fixture.kickoff), WIDTH - SIDE_PAD, 72)
  ctx.textBaseline = 'alphabetic'

  // Score block
  let y = HEADER_H
  const flagY = y + 32
  const fw = 104
  const fh = 70
  const leftFX = cx - 230
  const rightFX = cx + 230

  function drawFlag(img, name, x) {
    if (img) {
      ctx.save()
      roundRect(ctx, x - fw / 2, flagY, fw, fh, 12)
      ctx.clip()
      ctx.drawImage(img, x - fw / 2, flagY, fw, fh)
      ctx.restore()
      ctx.strokeStyle = 'rgba(255,255,255,0.32)'
      ctx.lineWidth = 2
      roundRect(ctx, x - fw / 2, flagY, fw, fh, 12)
      ctx.stroke()
    } else {
      ctx.strokeStyle = 'rgba(255,255,255,0.26)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, flagY + fh / 2, 40, 0, Math.PI * 2)
      ctx.stroke()
      ctx.fillStyle = '#fff'
      ctx.font = '900 30px system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(teamCodeFallback(name), x, flagY + fh / 2)
      ctx.textBaseline = 'alphabetic'
    }

    ctx.fillStyle = '#fff'
    ctx.font = '800 26px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(truncateForCanvas(ctx, name, 300), x, flagY + fh + 38)
  }

  drawFlag(homeImg, fixture.home_team, leftFX)
  drawFlag(awayImg, fixture.away_team, rightFX)

  ctx.fillStyle = '#F4C430'
  ctx.font = '900 90px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`${fixture.home_score}  –  ${fixture.away_score}`, cx, flagY + fh / 2 + 24)
  ctx.fillStyle = '#4ADE80'
  ctx.font = '900 23px system-ui, sans-serif'
  ctx.fillText('FULL TIME', cx, flagY + fh / 2 + 64)

  // Stats strip
  y = HEADER_H + SCORE_H
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(SIDE_PAD, y)
  ctx.lineTo(WIDTH - SIDE_PAD, y)
  ctx.stroke()

  const avgPts = picks.length ? (totalPoints / picks.length) : 0
  const topStats = [
    ['PLAYERS', picks.length, '#fff'],
    ['EXACT', exactCount, '#F4C430'],
    ['CORRECT', correctCount + gdOnlyCount, '#4ADE80'],
    ['POINTS', totalPoints, '#F4C430'],
    ['AVG', avgPts.toFixed(1), 'rgba(255,255,255,0.92)']
  ]
  const stepW = (WIDTH - SIDE_PAD * 2) / topStats.length
  topStats.forEach((st, i) => {
    const sx = SIDE_PAD + stepW * i + stepW / 2
    ctx.fillStyle = st[2]
    ctx.font = '900 48px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(String(st[1]), sx, y + 56)
    ctx.fillStyle = 'rgba(255,255,255,0.60)'
    ctx.font = '900 17px system-ui, sans-serif'
    ctx.fillText(st[0], sx, y + 92)
  })
  ctx.beginPath()
  ctx.moveTo(SIDE_PAD, y + STATS_H - 6)
  ctx.lineTo(WIDTH - SIDE_PAD, y + STATS_H - 6)
  ctx.stroke()
  y += STATS_H

  // One clear bonus band instead of tiny chips in every row
  if (BONUS_H) {
    const boxY = y + 10
    ctx.fillStyle = 'rgba(251,146,60,0.10)'
    ctx.strokeStyle = 'rgba(251,146,60,0.28)'
    ctx.lineWidth = 1.2
    roundRect(ctx, SIDE_PAD, boxY, INNER_W, BONUS_H - 20, 16)
    ctx.fill()
    ctx.stroke()

    ctx.fillStyle = '#FB923C'
    ctx.font = '900 22px system-ui, sans-serif'
    ctx.textAlign = 'left'
    ctx.fillText('🔥 BONUS AWARDS', SIDE_PAD + 18, boxY + 30)

    // Winner names are allowed to wrap into two readable lines. This keeps the
    // band clean even when several players receive bonus points.
    ctx.fillStyle = 'rgba(255,255,255,0.94)'
    ctx.font = '850 21px system-ui, sans-serif'
    const awardLines = bonusSummaryLines(ctx, INNER_W - 38)
    awardLines.forEach((line, i) => {
      ctx.fillText(truncateForCanvas(ctx, line, INNER_W - 38), SIDE_PAD + 18, boxY + 58 + i * 25)
    })

    ctx.fillStyle = 'rgba(255,255,255,0.62)'
    ctx.font = '800 17px system-ui, sans-serif'
    const detailY = boxY + (awardLines.length > 1 ? 113 : 101)
    ctx.fillText(`Streak awards: ${streakAwards}   •   Combo awards: ${comboAwards}`, SIDE_PAD + 18, detailY)
    y += BONUS_H
  }

  // Section label
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 25px system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText(`🏅 PLAYER POINTS · Stage ×${stageMult}`, SIDE_PAD, y + 38)
  y += SEC_LABEL_H

  function colGeometry(colX) {
    return {
      rankR:  colX + 32,
      nameL:  colX + 50,
      reasonL: colX + 50,
      pickR:  colX + COL_W - 96,
      totalR: colX + COL_W - 16
    }
  }

  function drawColHeader(colX) {
    const g = colGeometry(colX)
    const hY = y + COL_HDR_H / 2
    ctx.fillStyle = 'rgba(255,255,255,0.56)'
    ctx.font = '900 14px system-ui, sans-serif'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'right'
    ctx.fillText('#', g.rankR, hY)
    ctx.textAlign = 'left'
    ctx.fillText('PLAYER', g.nameL, hY)
    ctx.textAlign = 'right'
    ctx.fillText('PICK', g.pickR, hY)
    ctx.fillText('PTS', g.totalR, hY)
    ctx.textBaseline = 'alphabetic'

    ctx.strokeStyle = 'rgba(255,255,255,0.14)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(colX, y + COL_HDR_H)
    ctx.lineTo(colX + COL_W, y + COL_HDR_H)
    ctx.stroke()
  }

  drawColHeader(COL1_X)
  drawColHeader(COL2_X)
  y += COL_HDR_H

  function drawRow(p, displayIdx, colX, rowTopY) {
    const g = colGeometry(colX)
    const win = p.final_points > 0
    const isExact = p.base_points === 5
    const hasBonus = (p.streak_bonus || 0) > 0 || (p.combo_bonus || 0) > 0
    const rowFill = isExact
      ? 'rgba(244,196,48,0.14)'
      : (win ? 'rgba(255,255,255,0.070)' : 'rgba(255,255,255,0.028)')

    ctx.fillStyle = rowFill
    ctx.strokeStyle = isExact ? 'rgba(244,196,48,0.56)' : (hasBonus ? 'rgba(251,146,60,0.36)' : (win ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)'))
    ctx.lineWidth = isExact || hasBonus ? 1.7 : 1
    roundRect(ctx, colX, rowTopY + 5, COL_W, ROW_H - 10, 12)
    ctx.fill()
    ctx.stroke()

    const cy = rowTopY + ROW_H / 2
    ctx.textBaseline = 'middle'

    ctx.font = '900 17px system-ui, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillStyle = 'rgba(255,255,255,0.58)'
    ctx.fillText(String(displayIdx + 1), g.rankR, cy)

    ctx.textAlign = 'left'
    ctx.font = win ? '900 23px system-ui, sans-serif' : '800 22px system-ui, sans-serif'
    ctx.fillStyle = win ? '#FFFFFF' : 'rgba(255,255,255,0.82)'
    const nameMaxW = g.pickR - g.nameL - 58
    ctx.fillText(truncateForCanvas(ctx, p.name, nameMaxW), g.nameL, cy - 8)

    let reason = reasonLabel(p)
    if (hasBonus) {
      const bonusBits = []
      if ((p.streak_bonus || 0) > 0) bonusBits.push(`🔥 +${p.streak_bonus}`)
      if ((p.combo_bonus || 0) > 0) bonusBits.push(`⚡ +${p.combo_bonus}`)
      reason += `  •  ${bonusBits.join(' ')}`
    }
    ctx.font = '800 15px system-ui, sans-serif'
    ctx.fillStyle = hasBonus ? '#FB923C' : (isExact ? '#F4C430' : (win ? 'rgba(74,222,128,0.82)' : 'rgba(255,255,255,0.46)'))
    ctx.fillText(truncateForCanvas(ctx, reason, nameMaxW), g.reasonL, cy + 17)

    ctx.font = '900 25px system-ui, sans-serif'
    ctx.fillStyle = isExact ? '#F4C430' : (win ? '#F8FAFC' : 'rgba(255,255,255,0.55)')
    ctx.textAlign = 'right'
    ctx.fillText(`${p.home}–${p.away}`, g.pickR, cy)

    ctx.font = '900 31px system-ui, sans-serif'
    ctx.fillStyle = isExact ? '#F4C430' : (win ? '#4ADE80' : 'rgba(255,255,255,0.34)')
    ctx.fillText(`+${p.final_points || 0}`, g.totalR, cy)
    ctx.textBaseline = 'alphabetic'
  }

  picks.forEach((p, i) => {
    const inLeft = i < ROWS_PER_COL
    const colX = inLeft ? COL1_X : COL2_X
    const rowIdx = inLeft ? i : (i - ROWS_PER_COL)
    drawRow(p, i, colX, y + rowIdx * ROW_H)
  })
  y += ROWS_PER_COL * ROW_H

  // Footer breakdown
  ctx.strokeStyle = 'rgba(255,255,255,0.14)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(SIDE_PAD, y + 10)
  ctx.lineTo(WIDTH - SIDE_PAD, y + 10)
  ctx.stroke()

  ctx.fillStyle = '#F2C766'
  ctx.font = '900 24px system-ui, sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('📈 BREAKDOWN', SIDE_PAD, y + 50)

  const sumY = y + 84
  const colAx = SIDE_PAD + 20
  const colBx = SIDE_PAD + INNER_W / 2 + 20
  const valGap = INNER_W / 2 - 34

  function drawBreakdownLine(label, value, valColor, lx, ly) {
    ctx.font = '800 21px system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.76)'
    ctx.textAlign = 'left'
    ctx.fillText(label, lx, ly)
    ctx.font = '900 23px system-ui, sans-serif'
    ctx.fillStyle = valColor
    ctx.textAlign = 'right'
    ctx.fillText(String(value), lx + valGap, ly)
  }

  drawBreakdownLine('⭐ Exact score', exactCount, '#F4C430', colAx, sumY)
  drawBreakdownLine('✅ Result only', gdOnlyCount, '#4ADE80', colAx, sumY + 34)
  drawBreakdownLine('🎯 GD points', correctCount, '#7DD3FC', colAx, sumY + 68)
  drawBreakdownLine('❌ Wrong', wrongCount, 'rgba(255,255,255,0.54)', colAx, sumY + 102)

  drawBreakdownLine('🔥 Streak bonus', streakAwards, '#FB923C', colBx, sumY)
  drawBreakdownLine('⚡ Combo bonus', comboAwards, '#A78BFA', colBx, sumY + 34)
  drawBreakdownLine('🎯 Stage multiplier', `×${stageMult}`, '#fff', colBx, sumY + 68)
  drawBreakdownLine('💰 Total awarded', totalPoints, '#F4C430', colBx, sumY + 102)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 28px system-ui, sans-serif'
  ctx.fillText('wcpredictionleague.vercel.app', cx, HEIGHT - 38)

  return new Promise((resolve, reject) => {
    canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob null')), 'image/png', 0.98)
  })
}

async function shareMatchReport(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture) { showToast('Match not found', 'info'); return }

  const finished = fixture.home_score !== null && fixture.away_score !== null
  if (!finished) { showToast('Match not finished yet', 'info'); return }

  let blob = null
  try { blob = await generateMatchReportCardBlob(fixtureId) }
  catch (e) {
    console.warn('[shareMatchReport] image gen failed:', e)
    showToast(e.message || 'Report generation failed', 'error')
    return
  }

  const scoreLine = `${fixture.home_team} ${fixture.home_score}–${fixture.away_score} ${fixture.away_team}`
  const text = `📊 WC 2026 Prediction League — Match Report
${scoreLine} (${fixture.stage || ''})
Full scoring breakdown with bonuses 👇

https://wcpredictionleague.vercel.app`

  let captionCopied = false
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      captionCopied = true
    }
  } catch (e) { console.warn('[shareMatchReport] clipboard copy failed:', e) }

  if (blob && navigator.canShare) {
    const file = new File([blob], `wcpl-report-${Date.now()}.png`, { type: 'image/png' })
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'WC 2026 Prediction League · Match Report', text })
        showToast(captionCopied ? 'Shared · caption copied, long-press to paste' : 'Shared!', 'success')
        return
      } catch (e) {
        if (e.name === 'AbortError') return
        console.warn('[shareMatchReport] native share failed:', e)
      }
    }
  }
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `wcpl-report-${Date.now()}.png`
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
    showToast('Image saved · attach it in WhatsApp', 'success')
    setTimeout(() => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'), 250)
    return
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}

async function generateMatchHighlightCardBlob(fixtureId) {
  const d = buildMatchHighlightData(fixtureId)
  if (!d) throw new Error('Highlight not available for this match')
  const { fixture, summary, topPicks, maverick, maverickPop } = d

  const hf = getFlag(fixture.home_team), af = getFlag(fixture.away_team)
  const [homeImg, awayImg] = await Promise.all([
    loadFlagImage(hf.img ? hf.img.replace('/w40/', '/w160/') : null),
    loadFlagImage(af.img ? af.img.replace('/w40/', '/w160/') : null)
  ])

  // Reverted to the earlier clean square Highlights card layout:
  // no explanation chips, balanced spacing, and a simple premium top-3 card.
  const WIDTH = 1080
  const HEIGHT = 1080
  const PAD = 60
  const canvas = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = HEIGHT
  const ctx = canvas.getContext('2d')

  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)
  bg.addColorStop(0, '#08111F')
  bg.addColorStop(0.45, '#102542')
  bg.addColorStop(1, '#183B63')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.fillStyle = 'rgba(255,255,255,0.032)'
  for (let yy = 0; yy < HEIGHT; yy += 34) {
    for (let xx = 0; xx < WIDTH; xx += 34) {
      ctx.beginPath()
      ctx.arc(xx, yy, 1.45, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const glow = ctx.createRadialGradient(WIDTH - 120, 90, 0, WIDTH - 120, 90, 560)
  glow.addColorStop(0, 'rgba(255,255,255,0.15)')
  glow.addColorStop(0.34, 'rgba(212,162,76,0.14)')
  glow.addColorStop(1, 'rgba(212,162,76,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  const cx = WIDTH / 2

  // Header
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'left'
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 34px system-ui, sans-serif'
  ctx.fillText(`🏆 ${fixture.stage || 'Match'} · Highlights`, PAD, 76)

  ctx.textAlign = 'right'
  ctx.fillStyle = 'rgba(255,255,255,0.62)'
  ctx.font = '800 22px system-ui, sans-serif'
  ctx.fillText(fmtMatchDate(fixture.kickoff), WIDTH - PAD, 76)

  // Score area
  const flagY = 164
  const fw = 110
  const fh = 74
  const leftX = cx - 245
  const rightX = cx + 245

  function drawFlagBlock(img, name, x) {
    if (img) {
      ctx.save()
      roundRect(ctx, x - fw / 2, flagY, fw, fh, 12)
      ctx.clip()
      ctx.drawImage(img, x - fw / 2, flagY, fw, fh)
      ctx.restore()
      ctx.strokeStyle = 'rgba(255,255,255,0.30)'
      ctx.lineWidth = 2
      roundRect(ctx, x - fw / 2, flagY, fw, fh, 12)
      ctx.stroke()
    } else {
      ctx.strokeStyle = 'rgba(255,255,255,0.26)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(x, flagY + fh / 2, 42, 0, Math.PI * 2)
      ctx.stroke()
      ctx.fillStyle = '#fff'
      ctx.font = '900 30px system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(teamCodeFallback(name), x, flagY + fh / 2)
    }

    ctx.fillStyle = '#fff'
    ctx.font = '800 27px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(truncateForCanvas(ctx, name, 270), x, flagY + fh + 42)
  }

  drawFlagBlock(homeImg, fixture.home_team, leftX)
  drawFlagBlock(awayImg, fixture.away_team, rightX)

  ctx.fillStyle = '#F4C430'
  ctx.font = '900 94px system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`${fixture.home_score}  –  ${fixture.away_score}`, cx, flagY + fh / 2 + 10)
  ctx.fillStyle = '#4ADE80'
  ctx.font = '900 22px system-ui, sans-serif'
  ctx.fillText('FULL TIME', cx, flagY + fh / 2 + 58)

  // Stats strip
  let y = 396
  ctx.strokeStyle = 'rgba(255,255,255,0.12)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(PAD, y)
  ctx.lineTo(WIDTH - PAD, y)
  ctx.stroke()

  const stats = [
    ['PREDICTIONS', summary.predictions, '#FFFFFF'],
    ['EXACT', summary.exact, '#FFFFFF'],
    ['RESULT', summary.correctResult, '#FFFFFF'],
    ['POINTS', summary.pointsWon, '#F4C430']
  ]
  const statW = (WIDTH - PAD * 2) / stats.length
  stats.forEach((st, i) => {
    const sx = PAD + statW * i + statW / 2
    ctx.fillStyle = st[2]
    ctx.font = '900 52px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(String(st[1]), sx, y + 48)
    ctx.fillStyle = 'rgba(255,255,255,0.50)'
    ctx.font = '900 18px system-ui, sans-serif'
    ctx.fillText(st[0], sx, y + 92)
  })

  ctx.beginPath()
  ctx.moveTo(PAD, y + 124)
  ctx.lineTo(WIDTH - PAD, y + 124)
  ctx.stroke()

  // Section label
  y = 558
  ctx.textAlign = 'left'
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 26px system-ui, sans-serif'
  ctx.fillText('⚡ TOP PREDICTIONS', PAD, y)

  // Top 3 rows
  const rowX = PAD
  const rowW = WIDTH - PAD * 2
  const rowH = 68
  const rowGap = 16
  const medals = ['🥇', '🥈', '🥉']

  function drawMvpChip(x, y) {
    const label = '★ MATCH MVP'
    ctx.save()
    ctx.font = '900 19px system-ui, sans-serif'
    const w = Math.ceil(ctx.measureText(label).width + 26)
    const h = 36
    ctx.fillStyle = '#D4A24C'
    roundRect(ctx, x, y - h / 2, w, h, 18)
    ctx.fill()
    ctx.fillStyle = '#0B1221'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    ctx.fillText(label, x + 13, y)
    ctx.restore()
    return w
  }

  topPicks.slice(0, 3).forEach((p, i) => {
    const rowY = 590 + i * (rowH + rowGap)
    const win = (p.final_points || 0) > 0
    ctx.fillStyle = i === 0 ? 'rgba(255,255,255,0.105)' : 'rgba(255,255,255,0.075)'
    ctx.strokeStyle = i === 0 ? 'rgba(212,162,76,0.55)' : 'rgba(212,162,76,0.36)'
    ctx.lineWidth = i === 0 ? 1.8 : 1.4
    roundRect(ctx, rowX, rowY, rowW, rowH, 12)
    ctx.fill()
    ctx.stroke()

    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.font = '900 29px system-ui, sans-serif'
    ctx.fillStyle = '#FFFFFF'
    ctx.fillText(medals[i] || '•', rowX + 50, rowY + rowH / 2)

    ctx.textAlign = 'left'
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '900 30px system-ui, sans-serif'
    const nameX = rowX + 92
    const nameLabel = truncateForCanvas(ctx, p.name, 380)
    ctx.fillText(nameLabel, nameX, rowY + rowH / 2)

    let afterNameX = nameX + Math.min(ctx.measureText(nameLabel).width, 380) + 16
    if ((p.streak_bonus || 0) > 0) {
      ctx.font = '900 28px system-ui, sans-serif'
      ctx.fillText('🔥', afterNameX, rowY + rowH / 2)
      afterNameX += 40
    }
    if (i === 0 && win) {
      drawMvpChip(afterNameX, rowY + rowH / 2)
    }

    ctx.textAlign = 'right'
    ctx.fillStyle = 'rgba(255,255,255,0.92)'
    ctx.font = '900 30px system-ui, sans-serif'
    ctx.fillText(`${p.home} – ${p.away}`, rowX + rowW - 108, rowY + rowH / 2)

    ctx.fillStyle = win ? '#4ADE80' : 'rgba(255,255,255,0.36)'
    ctx.font = '900 28px system-ui, sans-serif'
    ctx.fillText(`+${p.final_points || 0}`, rowX + rowW - 24, rowY + rowH / 2)
  })

  // Boldest call block
  const boldY = 844
  ctx.fillStyle = 'rgba(96,165,250,0.13)'
  ctx.strokeStyle = 'rgba(96,165,250,0.34)'
  ctx.lineWidth = 1.6
  roundRect(ctx, PAD, boldY, WIDTH - PAD * 2, 104, 14)
  ctx.fill()
  ctx.stroke()

  ctx.textAlign = 'left'
  ctx.fillStyle = '#93C5FD'
  ctx.font = '900 21px system-ui, sans-serif'
  ctx.fillText('🎯 BOLDEST CALL', PAD + 26, boldY + 34)

  if (maverick) {
    const callText = `${maverick.name} called ${maverick.home}–${maverick.away} when only ${maverickPop} ${maverickPop === 1 ? 'player' : 'players'} did`
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '800 25px system-ui, sans-serif'
    ctx.fillText(truncateForCanvas(ctx, callText, WIDTH - PAD * 2 - 160), PAD + 26, boldY + 72)
    ctx.textAlign = 'right'
    ctx.fillStyle = (maverick.final_points || 0) > 0 ? '#4ADE80' : 'rgba(255,255,255,0.48)'
    ctx.font = '900 27px system-ui, sans-serif'
    ctx.fillText(`+${maverick.final_points || 0}`, WIDTH - PAD - 24, boldY + 72)
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.70)'
    ctx.font = '800 23px system-ui, sans-serif'
    ctx.fillText('No boldest call for this match.', PAD + 26, boldY + 72)
  }

  ctx.textAlign = 'center'
  ctx.fillStyle = '#F2C766'
  ctx.font = '900 28px system-ui, sans-serif'
  ctx.fillText('wcpredictionleague.vercel.app', cx, HEIGHT - 44)

  return new Promise((resolve, reject) => {
    canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob null')), 'image/png', 0.98)
  })
}

async function shareMatchHighlight(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture) { showToast('Match not found', 'info'); return }

  let blob = null
  try { blob = await generateMatchHighlightCardBlob(fixtureId) }
  catch (e) {
    console.warn('[shareMatchHighlight] image gen failed:', e)
    showToast(e.message || 'Highlight generation failed', 'error')
    return
  }

  const scoreLine = `${fixture.home_team} ${fixture.home_score}–${fixture.away_score} ${fixture.away_team}`
  const text = `🏆 WC 2026 Prediction League — Match Highlights
${scoreLine} (${fixture.stage || ''})
Top winners and best calls 👇

https://wcpredictionleague.vercel.app`

  let captionCopied = false
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      captionCopied = true
    }
  } catch (e) { console.warn('[shareMatchHighlight] clipboard copy failed:', e) }

  if (blob && navigator.canShare) {
    const file = new File([blob], `wcpl-highlight-${Date.now()}.png`, { type: 'image/png' })
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'WC 2026 Prediction League · Match Highlights', text })
        showToast(captionCopied ? 'Shared · caption copied, long-press to paste' : 'Shared!', 'success')
        return
      } catch (e) {
        if (e.name === 'AbortError') return
        console.warn('[shareMatchHighlight] native share failed:', e)
      }
    }
  }
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `wcpl-highlight-${Date.now()}.png`
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
    showToast('Image saved · attach it in WhatsApp', 'success')
    setTimeout(() => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'), 250)
    return
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}

// ---- Admin share (mirrors sharePickList's 3-path fallback) ----------------
async function shareMatchReport(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture) { showToast('Match not found', 'info'); return }
 
  const finished = fixture.home_score !== null && fixture.away_score !== null
  if (!finished) { showToast('Match not finished yet', 'info'); return }
 
  let blob = null
  try { blob = await generateMatchReportCardBlob(fixtureId) }
  catch (e) {
    console.warn('[shareMatchReport] image gen failed:', e)
    showToast(e.message || 'Report generation failed', 'error')
    return
  }
 
  const scoreLine = `${fixture.home_team} ${fixture.home_score}–${fixture.away_score} ${fixture.away_team}`
  const text = `📊 WC 2026 Prediction League — Match Report
${scoreLine} (${fixture.stage || ''})
Full scoring breakdown with bonuses 👇
 
https://wcpredictionleague.vercel.app`
 
  // Copy caption first — WhatsApp drops captions when files are attached
  let captionCopied = false
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      captionCopied = true
    }
  } catch (e) { console.warn('[shareMatchReport] clipboard copy failed:', e) }
 
  if (blob && navigator.canShare) {
    const file = new File([blob], `wcpl-report-${Date.now()}.png`, { type: 'image/png' })
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'WC 2026 Prediction League · Match Report', text })
        showToast(captionCopied ? 'Shared · caption copied, long-press to paste' : 'Shared!', 'success')
        return
      } catch (e) {
        if (e.name === 'AbortError') return
        console.warn('[shareMatchReport] native share failed:', e)
      }
    }
  }
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `wcpl-report-${Date.now()}.png`
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
    showToast('Image saved · attach it in WhatsApp', 'success')
    setTimeout(() => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'), 250)
    return
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}
 
 
// ---- Admin share (mirrors shareMatchHighlight's 3-path fallback) ----
async function sharePickList(fixtureId) {
  const fixture = (window.fixtures || (typeof fixtures !== 'undefined' ? fixtures : []) || [])
    .find(f => f.id === fixtureId)
  if (!fixture) { showToast('Match not found', 'info'); return }
 
  const picks = typeof loadHotTakesForFixture === 'function'
    ? await loadHotTakesForFixture(fixtureId, { force: true })
    : (hotTakesByFixture[fixtureId] || [])
  if (!picks.length) { showToast('No picks to share yet', 'info'); return }
 
  let blob = null
  try { blob = await generatePickListCardBlob(fixtureId) }
  catch (e) { console.warn('[sharePickList] image gen failed:', e) }
 
  const finished = fixture.home_score !== null && fixture.away_score !== null
  const scoreLine = finished
    ? `${fixture.home_team} ${fixture.home_score}–${fixture.away_score} ${fixture.away_team}`
    : `${fixture.home_team} vs ${fixture.away_team} (locked)`
  const text = `📋 WC 2026 Prediction League — Pick List\n${scoreLine} (${fixture.stage || ''})\n${picks.length} picks in\n\nJoin 👇\nhttps://wcpredictionleague.vercel.app`
 
  // WhatsApp drops captions when files are attached — copy first so admin can paste.
  let captionCopied = false
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      captionCopied = true
    }
  } catch (e) { console.warn('[sharePickList] clipboard copy failed:', e) }
 
  if (blob && navigator.canShare) {
    const file = new File([blob], `wcpl-picks-${Date.now()}.png`, { type: 'image/png' })
    if (navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'WC 2026 Prediction League · Pick List', text })
        showToast(captionCopied ? 'Shared · caption copied, long-press to paste' : 'Shared!', 'success')
        return
      }
      catch (e) { if (e.name === 'AbortError') return; console.warn('[sharePickList] native share failed:', e) }
    }
  }
  if (blob) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = `wcpl-picks-${Date.now()}.png`
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 5000)
    showToast('Image saved · attach it in WhatsApp', 'success')
    setTimeout(() => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank'), 250)
    return
  }
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}
 
 
// Canvas helper: rounded rectangle path (canvas roundRect isn't universal yet)
function roundRect(ctx, x, y, w, h, r) {
  if (w < 2 * r) r = w / 2
  if (h < 2 * r) r = h / 2
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

// Canvas helper: truncate text with ellipsis to fit a max pixel width.
// Uses ctx.measureText which respects current font.
function truncateForCanvas(ctx, text, maxWidth) {
  if (!text) return ''
  if (ctx.measureText(text).width <= maxWidth) return text
  const ellipsis = '…'
  let lo = 0
  let hi = text.length
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    const candidate = text.slice(0, mid) + ellipsis
    if (ctx.measureText(candidate).width <= maxWidth) lo = mid
    else hi = mid - 1
  }
  return text.slice(0, lo) + ellipsis
}

// ===== Tournament Progress Strip =====
// Slim progress bar above the leaderboard sub-tabs showing how far through
// the tournament we are. Pure derived data from the existing `fixtures`
// array — no schema changes. Hides itself if data isn't ready.
function renderTournamentProgress() {
  const strip = document.getElementById('lb-tournament-progress')
  const labelEl = document.getElementById('lb-progress-label')
  const pctEl = document.getElementById('lb-progress-pct')
  const fillEl = document.getElementById('lb-progress-fill')
  if (!strip || !labelEl || !pctEl || !fillEl) return

  const rows = fixtures || []
  if (rows.length === 0) {
    strip.classList.add('hidden')
    return
  }

  const total = rows.length
  const played = rows.filter(f => f.home_score !== null && f.away_score !== null).length
  const pct = total > 0 ? Math.round((played / total) * 100) : 0

  // Phase label — gives context based on where we are in the tournament arc.
  // Thresholds are rough: ~46% (48/104) marks end of group stage in WC 2026.
  let phase = 'Tournament'
  if (pct === 0) phase = 'Kickoff incoming'
  else if (pct < 46) phase = 'Group Stage'
  else if (pct < 77) phase = 'Knockouts'
  else if (pct < 96) phase = 'Quarter / Semi Final stage'
  else if (pct < 100) phase = 'The Final'
  else phase = 'Tournament complete'

  labelEl.textContent = `${phase} · ${played} of ${total} matches played`
  pctEl.textContent = `${pct}%`
  // RAF so the transition runs from 0 to target on first render
  requestAnimationFrame(() => {
    fillEl.style.width = `${pct}%`
  })
  strip.classList.remove('hidden')
}

// ===== "Almost there" row hint =====
// Computes one motivating caption for the user's own leaderboard row.
// Priority: actionable badge nudge → close-rival overtake → prize-zone status.
// Returns null when nothing meaningful applies, so the row stays clean.
function computeRowHint(s, rank, prevPlayer) {
  const exact = s.exact || 0
  const points = s.points || 0
  const combos = s.combo_count || 0

  // Badge-close nudges (most actionable — the user can DO something about them next)
  if (exact === 4) return '1 more exact for 🎯 Sharpshooter'
  if (exact === 1) return '1 more exact for 🔮 Nostradamus'
  if (combos === 2) return '1 more combo for ⚡ Combo King'
  if (points >= 80 && points < 100) return `${100 - points} pt${(100 - points) > 1 ? 's' : ''} to 💯 Centurion`

  // Close-rival overtake (only meaningful when someone's actually ahead by a little)
  if (rank > 1 && prevPlayer) {
    const gap = (prevPlayer.points || 0) - points
    const needed = gap + 1 // +1 because matching points only ties — overtaking requires one more
    if (gap >= 0 && needed <= 5) {
      const name = (prevPlayer.full_name || prevPlayer.name || 'them').split(' ')[0]
      return `${needed} pt${needed > 1 ? 's' : ''} to overtake ${name}`
    }
  }

  // Prize-zone status — celebratory if in, motivational if just outside
  if (rank === 1) return "Reigning champion 👑"
  if (rank <= 3) return "You're in the prize zone 🏆"
  if (rank === 4 && prevPlayer) {
    const gap = (prevPlayer.points || 0) - points
    if (gap > 0 && gap <= 10) return `${gap} pt${gap > 1 ? 's' : ''} to the prize zone`
  }

  return null
}


// Premium 3D crown for the current leaderboard leader.
// Uses inline SVG so it does not depend on emoji rendering or any external image asset.
function leaderCrownHtml() {
  return `
    <span class="lb-v2-leader-crown" data-badge-id="champion" title="Current league leader" aria-label="Current league leader">
      <svg class="leader-crown-svg" viewBox="0 0 112 82" role="img" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="lbCrownGoldFace" x1="10" y1="6" x2="92" y2="68" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#FFF9C7"/>
            <stop offset="0.22" stop-color="#FDE68A"/>
            <stop offset="0.42" stop-color="#F59E0B"/>
            <stop offset="0.64" stop-color="#D97706"/>
            <stop offset="0.84" stop-color="#FBBF24"/>
            <stop offset="1" stop-color="#FFF1A8"/>
          </linearGradient>
          <linearGradient id="lbCrownGoldDepth" x1="34" y1="12" x2="106" y2="76" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#B45309"/>
            <stop offset="0.55" stop-color="#78350F"/>
            <stop offset="1" stop-color="#451A03"/>
          </linearGradient>
          <linearGradient id="lbCrownBase3D" x1="18" y1="50" x2="88" y2="72" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#92400E"/>
            <stop offset="0.24" stop-color="#F59E0B"/>
            <stop offset="0.52" stop-color="#FDE68A"/>
            <stop offset="0.78" stop-color="#D97706"/>
            <stop offset="1" stop-color="#78350F"/>
          </linearGradient>
          <linearGradient id="lbCrownSideShine" x1="16" y1="12" x2="92" y2="62" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#FFFFFF" stop-opacity=".95"/>
            <stop offset=".30" stop-color="#FFFFFF" stop-opacity=".30"/>
            <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
          </linearGradient>
          <filter id="lbCrown3DShadow" x="-35%" y="-35%" width="175%" height="190%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" flood-color="#78350F" flood-opacity="0.30"/>
            <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#FACC15" flood-opacity="0.45"/>
          </filter>
        </defs>

        <g filter="url(#lbCrown3DShadow)">
          <!-- dark offset layer creates the 3D thickness -->
          <g class="crown-depth">
            <path d="M20 54L14 18l24 20L56 9l16 29 24-20-7 36H20z" fill="url(#lbCrownGoldDepth)" stroke="#451A03" stroke-width="2.1" stroke-linejoin="round"/>
            <path d="M23 52h66v13c0 4-3 7-7 7H30c-4 0-7-3-7-7V52z" fill="#78350F" stroke="#451A03" stroke-width="2"/>
          </g>

          <!-- small side faces for a stronger 3D look -->
          <path d="M88 54l7-36 5 4-7 36z" fill="#92400E" opacity=".74"/>
          <path d="M89 52v13c0 4-3 7-7 7l6 5c4 0 7-3 7-7V57z" fill="#78350F" opacity=".82"/>

          <!-- front crown face -->
          <g class="crown-face">
            <path d="M20 54L14 18l24 20L56 9l16 29 24-20-7 36H20z" fill="url(#lbCrownGoldFace)" stroke="#92400E" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M23 52h66v13c0 4-3 7-7 7H30c-4 0-7-3-7-7V52z" fill="url(#lbCrownBase3D)" stroke="#92400E" stroke-width="2"/>
            <path class="crown-highlight" d="M20 54L14 18l24 20L56 9l16 29 24-20-7 36H20z" fill="url(#lbCrownSideShine)"/>
            <circle cx="14" cy="18" r="5" fill="#FFF7B8" stroke="#92400E" stroke-width="1.8"/>
            <circle cx="56" cy="9" r="5.7" fill="#FFF7B8" stroke="#92400E" stroke-width="1.8"/>
            <circle cx="96" cy="18" r="5" fill="#FFF7B8" stroke="#92400E" stroke-width="1.8"/>
            <circle cx="42" cy="41" r="4.2" fill="#EF4444" stroke="#7F1D1D" stroke-width="1.25"/>
            <circle cx="70" cy="41" r="4.2" fill="#3B82F6" stroke="#1E3A8A" stroke-width="1.25"/>
            <path d="M33 59h46" stroke="#FFF7B8" stroke-width="3" stroke-linecap="round" opacity=".82"/>
            <path d="M29 65h54" stroke="#78350F" stroke-width="1.4" stroke-linecap="round" opacity=".38"/>
          </g>
        </g>
      </svg>
      <span class="leader-crown-sparkle s1" aria-hidden="true">✦</span>
      <span class="leader-crown-sparkle s2" aria-hidden="true">✧</span>
    </span>`
}


function buildLeaderboardFormDots(form = []) {
  const values = Array.isArray(form) ? form.slice(0, 5) : []
  while (values.length < 5) values.push('idle')
  const label = 'Recent form: gold = exact score, green = points, red = no points, grey = pending'
  return `<span class="lb-form-dots" title="${label}" aria-label="${label}">${values.map(v => `<span class="lb-form-dot ${escapeHtml(v || 'idle')}"></span>`).join('')}</span>`
}

function podiumName(name) {
  // Podium has enough space for the real name. Keep it full and let CSS wrap to 2 lines.
  const clean = String(name || 'Anonymous').trim() || 'Anonymous'
  return clean.split(/\s+/).map(part => {
    if (!part) return part
    if (part.length <= 2 && part === part.toUpperCase()) return part
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  }).join(' ')
}

function leaderboardDisplayName(name) {
  const clean = String(name || 'Anonymous').trim() || 'Anonymous'
  const parts = clean.split(/\s+/).filter(Boolean)

  // Keep short names and emoji-style names readable.
  // Example: "Wolf 🐺 Prince" stays full because only 2 real word tokens exist.
  const wordLike = token => /[A-Za-zÀ-ÖØ-öø-ÿĀ-ſƀ-ɏ一-龯가-힣ぁ-ゟ゠-ヿ]/.test(token)
  const wordIndexes = parts
    .map((token, index) => ({ token, index }))
    .filter(item => wordLike(item.token))
    .map(item => item.index)

  if (wordIndexes.length <= 2) return clean

  const shortened = parts.map((token, index) => {
    const wordPosition = wordIndexes.indexOf(index)
    if (wordPosition <= 1) return token

    // For the 3rd real word onward, show initial only.
    const first = Array.from(token)[0] || ''
    return first ? `${first.toUpperCase()}.` : token
  })

  return shortened.join(' ')
}

function leaderboardTop3Html(stats, myId) {
  if (lbSubtab !== 'overall' || !Array.isArray(stats) || stats.length === 0) return ''
  const ordered = [
    { player: stats[1], rank: 2, cls: 'rank-2' },
    { player: stats[0], rank: 1, cls: 'rank-1' },
    { player: stats[2], rank: 3, cls: 'rank-3' }
  ].filter(x => x.player)

  if (!ordered.length) return ''

  return `
    <section class="lb-top3-podium" aria-label="Top three leaderboard podium">
      <div class="lb-top3-title">Top 3 Podium</div>
      <div class="lb-top3-grid">
        ${ordered.map(({ player, rank, cls }) => {
          const uid = player.user_id || player.id || ''
          const isMe = uid && uid === myId
          const hasPoints = (player.points || 0) > 0
          const directTrend = normalizeRankTrend(player.trend || player.rank_trend || player.rankTrend || player.rank_change || player.rankChange || player.movement)
          const tr = lbTrendMap?.[uid] || directTrend
          const podiumTrendHtml = tr
            ? (tr.dir === 'up'
                ? `<span class="rank-trend up" title="Up ${tr.delta} since last matchday">▲ ${tr.delta}</span>`
                : tr.dir === 'down'
                  ? `<span class="rank-trend down" title="Down ${tr.delta} since last matchday">▼ ${tr.delta}</span>`
                  : tr.dir === 'new'
                    ? `<span class="rank-trend new" title="New this matchday">NEW</span>`
                    : `<span class="rank-trend flat" title="No rank change">–</span>`)
            : `<span class="rank-trend flat" title="No rank change">–</span>`
         const pCorrect = (player.exact || 0) + (player.gd || 0) + (player.result || 0)
          const pExact = player.exact || 0
          const pPoints = player.points || 0
          return `
            <button type="button" class="lb-podium-player ${cls}" onclick="showPlayerInfo('${escapeHtml(uid)}')" title="View ${escapeHtml(player.name || 'player')}">
              <span class="lb-podium-avatar-wrap">
                ${rank === 1 && hasPoints ? `<span class="lb-podium-crown">${leaderCrownHtml()}</span>` : ''}
                ${getAvatarHtml(player.name, player.avatar_url, rank, rank === 1 ? 72 : 58)}
                <span class="lb-podium-medal">${rankMedalSvg(rank)}</span>
                <span class="lb-podium-trend">${podiumTrendHtml}</span>
              </span>
              <span class="lb-podium-name">${escapeHtml(podiumName(player.name || 'Anonymous'))}${isMe ? ' · YOU' : ''}</span>
              <span class="lb-podium-stats"><b>${pCorrect}</b>C · <b>${pExact}</b>E</span>
              <span class="lb-podium-scoreline">
                <span class="lb-podium-points">${pPoints}<span>PTS</span></span>
              </span>
            </button>`
        }).join('')}
      </div>
    </section>`
}

function competitionZoneHeaderHtml(stats, myIdx) {
  if (lbSubtab !== 'overall' || myIdx < 0) return ''
  return `
    <div class="lb-zone-label" aria-label="Your competition zone">
      <span class="lb-zone-label-title">Your Competition Zone</span>
    </div>`
}

async function loadLeaderboard() {
      const c = document.getElementById('leaderboard-list')
      const myId = getUser()?.id

      if (lbSubtab === 'highlights') {
        document.getElementById('lb-subtab-meta').textContent = ''
        await renderMatchHighlights()
        return
      }

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
      const _trendSnapshot = await getLatestRankSnapshot()
      lbTrendMap = buildTrendMap(overallStats, _trendSnapshot)
      if (!lbTrendMap || Object.keys(lbTrendMap).length === 0) {
        lbTrendMap = await buildLatestMatchdayTrendMap(overallStats)
      }

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

      // Cache for shareLeaderboard()
      window.__lbCachedStats = stats
      window.__lbSubtab = lbSubtab

      // Render CTA card + prize strip (use overall rank for "projected winning")
      renderLbCta()
      const myOverallIdx = overallStats.findIndex(s => (s.user_id || s.id) === myId)
      const myOverallRank = myOverallIdx >= 0 ? myOverallIdx + 1 : null
      
      if (!stats?.length) {
        // Try to show users from profiles even if no predictions exist yet
        try {
          const { data: allProfiles } = await supabaseClient
            .from('profiles')
            .select('id, full_name, department, name, avatar_url')
            .eq('fee_paid', true).neq('entered_via_private', true)
            .order('created_at', { ascending: false })

          if (allProfiles && allProfiles.length > 0) {
            stats = allProfiles.map(p => ({
              user_id: p.id,
              id: p.id,
              name: p.full_name || p.name || 'Unknown',
              full_name: p.full_name || p.name || 'Unknown',
              department: p.department || '',
              avatar_url: p.avatar_url || null,
              form: [],
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
              <div class="text-sm font-bold text-ink-900 truncate">${escapeHtml(mvp.name || 'Anonymous')}${(mvp.user_id === myId || mvp.id === myId) ? ' <span class="text-[9px] font-bold text-brand-700 bg-white/60 px-1.5 py-0.5 rounded ml-1">YOU</span>' : ''}</div>
            </div>
            <div class="text-right shrink-0">
              <div class="text-xl font-bold text-amber-900" style="font-variant-numeric: tabular-nums;">${mvp.points || 0}</div>
              <div class="text-[10px] font-semibold text-amber-900/60 uppercase tracking-wider">pts</div>
            </div>
          </div>
        </div>`
        : ''

      // Render fresh HTML — Leaderboard V2 list layout
      c.classList.add('lb-v2-list')
      const leaderboardHead = `
        <div class="lb-v2-table-head" aria-hidden="true">
          <span>Rank</span>
          <span>Predictions</span>
          <span>Trend</span>
          <span>Pts</span>
        </div>`
      const leaderboardLegend = `
        <div class="lb-v2-legend" aria-label="Leaderboard legend">
          <span>⚡ Streak</span>
          <span>👑 Top Predictor</span>
          <span>🔮 Nostradamus</span>
          <span>Correct = right result</span>
          <span>Exact = exact score</span>
        </div>`

      const top3Html = leaderboardTop3Html(stats, myId)
      const myIdxInStats = stats.findIndex(s => (s.user_id || s.id) === myId)
      const hideTop3Rows = lbSubtab === 'overall'
      // Do not repeat the same Top 3 players below the podium.
      const visibleRows = stats
        .map((s, i) => ({ s, i }))
        .filter(({ i }) => !(hideTop3Rows && i < 3))

      // Gap column: points behind the row directly above.
      // Rank 1 shows an em dash. Ties below Rank 1 show 0 because they are
      // separated by tie-breakers, not points.
      // (Note: the Global Activity feed uses a different "X points from the
      // podium" semantic via computeRowHint — that's the +1 overtake framing
      // and intentionally differs from this raw row-to-row gap.)

      // Only show Your Competition Zone when the current user is outside the podium.
      // If the player is already top 3, the podium itself is the spotlight.
      const showCompetitionZone = lbSubtab === 'overall' && myIdxInStats >= 3
      const zoneStartIdx = showCompetitionZone ? Math.max(3, myIdxInStats - 1) : -1
      const zoneEndIdx = showCompetitionZone ? Math.min(stats.length - 1, myIdxInStats + 1) : -1
      const zoneLabelIdx = zoneStartIdx

      c.innerHTML = top3Html + leaderboardHead + mvpHtml + visibleRows.map(({ s, i }) => {
        const rank = i + 1
        const uid = s.user_id || s.id
        const isMe = s.user_id === myId || s.id === myId
        const correct = (s.exact || 0) + (s.gd || 0) + (s.result || 0)
        const exact = s.exact || 0
        const hasPoints = (s.points || 0) > 0
        const prevPlayer = i > 0 ? stats[i - 1] : null
        const rankClass = (rank <= 3 && hasPoints) ? `lb-row-rank-${rank}` : ''
        const rankTone = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : ''
        const rankDisplay = (rank <= 3 && hasPoints)
          ? `<div class="lb-v2-medal-shiny ${rankTone}" data-rank-wrap title="${rank}${rank===1?'st':rank===2?'nd':'rd'} Place">${rankMedalSvg(rank)}</div>`
          : `<div class="lb-v2-rank-tile" data-rank-wrap title="Rank ${rank}">${rank}</div>`

        // Persistent trend badge (overall tab only). A neutral dash keeps the
        // movement column aligned, matching the V2 mockup.
        const directTrend = normalizeRankTrend(s.trend || s.rank_trend || s.rankTrend || s.rank_change || s.rankChange || s.movement)
        const tr = (lbSubtab === 'overall') ? (lbTrendMap[uid] || directTrend) : null
        const trendHtml = tr
          ? (tr.dir === 'up'
              ? `<span class="rank-trend up" title="Up ${tr.delta} since last matchday">▲ ${tr.delta}</span>`
              : tr.dir === 'down'
                ? `<span class="rank-trend down" title="Down ${tr.delta} since last matchday">▼ ${tr.delta}</span>`
                : `<span class="rank-trend new" title="New this matchday">NEW</span>`)
          : `<span class="rank-trend flat" title="No rank change">–</span>`

        // Compact progress chips. They are purely presentational and reuse the
        // already-computed leaderboard stats, so bonus-engine wiring remains intact.
        const streakN = (lbSubtab === 'overall') ? (lbStreakMap[uid] || s.current_streak || 0) : 0
        const streakProgress = Math.max(0, Math.min(streakN || (correct > 0 ? 1 : 0), 5))
        const streakChip = (lbSubtab === 'overall' && (streakProgress > 0 || correct > 0))
          ? `<span class="lb-v2-chip streak is-compact" title="Scoring streak progress" data-badge-id="streak-chip">⚡ ${streakProgress}/5</span>`
          : ''

        const nostradamusProgress = Math.max(0, Math.min(exact, 3))
        const nostradamusChip = (lbSubtab === 'overall' && exact > 0)
          ? `<span class="lb-v2-chip nostradamus is-compact" title="Nostradamus progress: ${nostradamusProgress}/3 exact scores" data-badge-id="nostradamus">${badgeIconHtml('nostradamus', 'lb-v2-chip-icon')} ${nostradamusProgress}/3</span>`
          : ''

        const comboN = (lbSubtab === 'overall') ? (s.combo_count || 0) : 0
        const comboChip = comboN > 0
          ? `<span class="lb-v2-chip bonus is-compact" title="${comboN} exact combo${comboN > 1 ? 's' : ''}" data-badge-id="combo-chip">${badgeIconHtml('combo', 'lb-v2-chip-icon')} +${comboN}</span>`
          : ''

       const topChip = (rank === 1 && hasPoints)
          ? `<span class="lb-v2-chip top is-compact" title="Current league leader" data-badge-id="champion">${badgeIconHtml('champion', 'lb-v2-chip-icon')} +1</span>`
          : ''

       // V2.3: use the new custom achievement badge icons on the leaderboard,
        // but cap progress chips so top players do not slide under the trend/points column.
        const progressChips = [streakChip, nostradamusChip, comboChip, topChip].filter(Boolean)
        // V2.4: show only the two most useful progress chips on the row.
        // Anything extra goes into a compact +N chip so it cannot slide under trend/points.
        const visibleProgressChips = progressChips.slice(0, 2).join('')
        const hiddenProgressCount = Math.max(0, progressChips.length - 2)
        const moreProgressChip = hiddenProgressCount > 0
          ? `<span class="lb-v2-chip more" title="${hiddenProgressCount} more progress item${hiddenProgressCount > 1 ? 's' : ''}">+${hiddenProgressCount}</span>`
          : ''
        // Form dots were removed from the row because they competed with bonus badges on smaller phones.
        const formDotsHtml = ''
        // Keep the row clean: show progress chips only. Full earned badges remain available in the profile/badge views.
        const chipsHtml = `${visibleProgressChips}${moreProgressChip}${formDotsHtml}`

        const now = Date.now()
        const anyKickedOff = (fixtures || []).some(f => new Date(f.kickoff).getTime() <= now)
        const anyScored    = (fixtures || []).some(f => f.home_score !== null && f.away_score !== null)
        const emptyLabel = !anyKickedOff
          ? 'Awaiting kickoff…'
          : !anyScored
            ? 'Match in progress…'
            : 'No points yet'

        const statsLine = lbSubtab === 'matchday'
          ? ((s.points || 0) > 0
              ? `<span class="lb-v2-stat"><b>${s.points || 0}</b> on this matchday</span>`
              : `<span class="text-ink-400 italic">${emptyLabel}</span>`)
          : ((hasPoints || correct > 0 || exact > 0)
              ? `<span class="lb-v2-stat"><b>${correct}</b> Correct</span>
                 <span class="lb-v2-stat"><b>${exact}</b> Exact</span>`
              : `<span class="text-ink-400 italic">${emptyLabel}</span>`)

        const hint = (isMe && lbSubtab === 'overall') ? computeRowHint(s, rank, prevPlayer) : null

        const zoneLabelHtml = (showCompetitionZone && i === zoneLabelIdx) ? competitionZoneHeaderHtml(stats, myIdxInStats) : ''
        const zoneClass = (showCompetitionZone && i >= zoneStartIdx && i <= zoneEndIdx) ? 'in-competition-zone' : ''

        return `${zoneLabelHtml}
        <div class="lb-row lb-v2-row ${isMe ? 'is-me' : ''} ${zoneClass} ${rankClass}"
             data-uid="${uid}" data-points="${s.points || 0}" data-rank="${rank}">
          <div class="lb-v2-rank-avatar">
            ${rankDisplay}
            <div data-avatar-wrap>${getAvatarHtml(s.name, s.avatar_url, rank, 42)}</div>
          </div>

          <div class="lb-v2-main min-w-0">
            <div class="lb-v2-name-line">
              <span class="lb-v2-name" title="${escapeHtml(s.name || 'Anonymous')}">${escapeHtml(leaderboardDisplayName(s.name || 'Anonymous'))}</span>
              ${rank === 1 && hasPoints ? leaderCrownHtml() : ''}
              ${isMe ? '<span class="lb-v2-you">YOU</span>' : ''}
            </div>
            <div class="lb-v2-stats">${statsLine}</div>
            ${chipsHtml.trim() ? `<div class="lb-v2-chips">${chipsHtml}</div>` : ''}
            ${hint ? `<div class="lb-v2-hint">${escapeHtml(hint)}</div>` : ''}
          </div>

          <div class="lb-v2-trend shrink-0">${trendHtml}</div>
          <div class="lb-v2-points shrink-0">
            <div class="points-num" data-points-el>${s.points || 0}</div>
            <div class="points-label uppercase tracking-wider font-semibold">PTS</div>
          </div>
        </div>`
      }).join('') + leaderboardLegend

      // Update tournament progress strip — derived from current fixtures state.
      // Called on every leaderboard render so it stays in sync after realtime updates.
      renderTournamentProgress()

      // Keep the floating Global Activity Feed in sync with the freshest
      // leaderboard render without adding extra blocking queries.
      window.__wcplLatestLeaderboardStats = stats
      window.__wcplLatestLeaderboardSubtab = lbSubtab
      if (typeof updateGlobalActivityFeed === 'function') {
        updateGlobalActivityFeed({ stats, subtab: lbSubtab })
      }

      // ===== Row tap routing =====
      // Clicks are now context-aware:
      //   • Avatar OR rank tile  → showPlayerInfo (basic profile + "Compare H2H" CTA)
      //   • Badge / chip         → showBadgeInfo  (badge name, criteria, earned status)
      //   • Anywhere else        → openH2H        (original behavior)
      // Self-row stays interactive for avatar/badge taps but skips the H2H fallback.
      c.querySelectorAll('[data-uid]').forEach(el => {
        const uid = el.dataset.uid
        if (el.dataset.rowBound) return  // dedup on re-renders
        el.style.cursor = 'pointer'
        el.addEventListener('click', (e) => {
          // Badge or chip click → badge info
          const badgeEl = e.target.closest('[data-badge-id]')
          if (badgeEl && el.contains(badgeEl)) {
            e.stopPropagation()
            showBadgeInfo(badgeEl.dataset.badgeId, uid)
            return
          }
          // Avatar or rank tile click → player info
          const avatarEl = e.target.closest('[data-avatar-wrap], [data-rank-wrap]')
          if (avatarEl && el.contains(avatarEl)) {
            e.stopPropagation()
            showPlayerInfo(uid)
            return
          }
          // Everything else → H2H (skip self)
          if (uid === myId) return
          openH2H(uid)
        })
        el.dataset.rowBound = '1'

        // Tiny chevron in the right edge to signal tappability. (Polish 2)
        // Skip for self-row — H2H isn't meaningful with yourself, and avatar/badge
        // taps are still available without the row-level chevron suggesting otherwise.
        if (uid !== myId && !el.querySelector('.h2h-chevron')) {
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


function schedulePostResultRefresh(reason = 'result') {
  // Publishing a result updates fixtures first, then prediction_results shortly
  // after. Refresh in waves so the leaderboard reads the final scored rows,
  // not the pre-engine state. Also clears rank snapshot cache for fresh trends.
  const waves = [250, 1200, 3000, 6500]
  waves.forEach(delay => {
    setTimeout(async () => {
      try {
        if (typeof invalidateSnapshotCache === 'function') invalidateSnapshotCache()
        await Promise.all([
          (typeof refreshMyResultsCache === 'function' ? refreshMyResultsCache() : Promise.resolve()),
          (typeof refreshSocialCaches === 'function' ? refreshSocialCaches() : Promise.resolve())
        ])
        if (typeof loadLeaderboard === 'function') await loadLeaderboard()
        if (typeof loadHome === 'function') loadHome()
        if (delay >= 1200 && typeof loadFixtures === 'function') loadFixtures()
      } catch (e) {
        console.warn('[post-result-refresh] failed:', reason, e)
      }
    }, delay)
  })
}

   function setupRealtime() {
  // Track the most recent refresh-trigger so we can collapse bursts (own save
  // fires multiple events: the prediction INSERT/UPSERT then a separate UPDATE
  // for `submitted_at`). Without debouncing this re-renders fixtures 2-3 times
  // back-to-back which the user sees as a flicker.
  let _predRefreshTimer = null

  // 1) Predictions: ALL events (kept for leaderboard refresh when someone submits)
  // Also refreshes Match Preview so the "X/Y locked in" counter stays live.
  supabaseClient.channel('lb')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'predictions' }, (payload) => {
      // Skip echoes from the current user's own save — handleSavePrediction
      // already updates local state and re-renders directly, so realtime
      // bouncing back the same change just causes a visible flicker.
      const myId = getUser()?.id
      const changedUid = payload?.new?.user_id || payload?.old?.user_id
      if (myId && changedUid && changedUid === myId) return

      // Debounce other users' bursts (e.g. an admin doing bulk updates) so we
      // refresh at most once per 300ms window.
      clearTimeout(_predRefreshTimer)
      _predRefreshTimer = setTimeout(() => {
        refreshSocialCaches().then(() => {
          loadLeaderboard(); loadFixtures(); loadHome()
        })
      }, 300)
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
        invalidateSnapshotCache()
        loadLeaderboard(); loadHome(); loadFixtures()
        schedulePostResultRefresh('prediction_results')
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
      invalidateSnapshotCache()
      loadLeaderboard()
      loadHome()
      if (payload.eventType === 'UPDATE' && payload.new?.home_score !== null && payload.new?.away_score !== null) {
        schedulePostResultRefresh('fixtures')
      }
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
          icon: 'lock',
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
      // Stage 4a: track both v1 and v2 flags. v2 has its own master gate, so
      // v1 going off should NOT lock users out of v2.
      const newV1 = payload.new?.private_leagues_enabled
      const newV2 = payload.new?.private_leagues_v2_enabled

      if (typeof newV1 === 'boolean') {
        const oldV1 = privateLeaguesEnabled
        privateLeaguesEnabled = newV1
        if (oldV1 !== newV1) console.log('[Realtime] v1 private leagues:', oldV1, '→', newV1)

        // Show toast only when v2 is NOT taking over (avoids confusing toast spam when admin is mid-flipping flags)
        if (_systemSettingsInitialized && oldV1 !== newV1 && !privateLeaguesV2Enabled) {
          showToast(newV1 ? '🎉 Private leagues are now enabled!' : '🚫 Private leagues have been disabled', 'info')
        }
      }

      if (typeof newV2 === 'boolean') {
        const oldV2 = privateLeaguesV2Enabled
        privateLeaguesV2Enabled = newV2
        if (oldV2 !== newV2) console.log('[Realtime] v2 private leagues:', oldV2, '→', newV2)
      }

      // Always re-render leagues UI if user is on profile/extras tab
      const profileTab = document.getElementById('tab-profile')
      const extrasTab  = document.getElementById('tab-extras')
      if ((profileTab && !profileTab.classList.contains('hidden')) ||
          (extrasTab  && !extrasTab.classList.contains('hidden'))) {
        loadMyLeagues()
      }

      // Lockout only if v1 went off AND v2 is also off. If v2 is on, users keep their access.
      if (newV1 === false && !privateLeaguesV2Enabled) {
        if (typeof enforceLeagueAccessLockout === 'function') enforceLeagueAccessLockout('disabled')
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
      const dbV1 = !!(data?.private_leagues_enabled)
      const dbV2 = !!(data?.private_leagues_v2_enabled)

      const v1Changed = dbV1 !== privateLeaguesEnabled
      const v2Changed = dbV2 !== privateLeaguesV2Enabled

      if (v1Changed) {
        const oldV1 = privateLeaguesEnabled
        privateLeaguesEnabled = dbV1
        console.log('[Poll] v1 drift:', oldV1, '→', dbV1)
        if (_systemSettingsInitialized && !dbV2) {
          showToast(dbV1 ? '🎉 Private leagues are now enabled!' : '🚫 Private leagues have been disabled', 'info')
        }
      }
      if (v2Changed) {
        const oldV2 = privateLeaguesV2Enabled
        privateLeaguesV2Enabled = dbV2
        console.log('[Poll] v2 drift:', oldV2, '→', dbV2)
      }

      // Lockout only if BOTH flags are off
      if (v1Changed && dbV1 === false && !dbV2 && typeof enforceLeagueAccessLockout === 'function') {
        enforceLeagueAccessLockout('disabled')
      }

      if (v1Changed || v2Changed) {
        const profileTab = document.getElementById('tab-profile')
        const extrasTab  = document.getElementById('tab-extras')
        if ((profileTab && !profileTab.classList.contains('hidden')) ||
            (extrasTab  && !extrasTab.classList.contains('hidden'))) {
          loadMyLeagues()
        }
      }
    } catch (e) {
      // silent
    }
  }, 15000)

  // ============================================================
  // Stage 4a: realtime channels for v2 private leagues
  // ============================================================
  // These keep the user-facing UI fresh when:
  //   - Admin activates / archives / edits / deletes a league
  //   - Admin marks a membership paid / unpaid
  //   - A new member joins or leaves
  //
  // Both channels re-render whatever league surface is currently visible.
  // They run regardless of which flag (v1/v2) is on; the renderers themselves
  // decide what to show.
  if (window._v2LeaguesChannel) {
    try { window._v2LeaguesChannel.unsubscribe() } catch (_) {}
  }
  window._v2LeaguesChannel = supabaseClient.channel('v2-leagues')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'leagues' }, (payload) => {
      const changedId = payload.new?.id || payload.old?.id
      console.log('[Realtime] leagues change:', payload.eventType, changedId)

      // Refresh the user's leagues list if visible
      const profileTab = document.getElementById('tab-profile')
      const extrasTab  = document.getElementById('tab-extras')
      if ((profileTab && !profileTab.classList.contains('hidden')) ||
          (extrasTab  && !extrasTab.classList.contains('hidden'))) {
        if (typeof loadMyLeagues === 'function') loadMyLeagues()
      }

      // Stage 4c: a status flip (active ↔ archived/draft) or league delete
      // can add/remove a scope from this user's list. Refresh scopes so the
      // switcher stays accurate.
      if (typeof refreshScopes === 'function') refreshScopes()

      // Stage 4d: if the changed league IS the user's current private scope,
      // refresh Home prize pool when visible (covers entry_fee / prize_pool_override edits).
      if (changedId && currentScope?.type === 'private' && currentScope.id === changedId) {
        const homeTab = document.getElementById('tab-home')
        if (homeTab && !homeTab.classList.contains('hidden') &&
            typeof loadHomePrizePoolOnly === 'function') {
          loadHomePrizePoolOnly()
        }
      }

      // If user is currently viewing this specific league, refresh that view too
      if (changedId && activeLeagueId === changedId) {
        if (typeof loadLeagueLeaderboardView === 'function') {
          loadLeagueLeaderboardView(activeLeagueId)
        }
      }
    })
    .subscribe((status) => {
      console.log('[Realtime] v2 leagues channel status:', status)
    })

  if (window._v2MembershipsChannel) {
    try { window._v2MembershipsChannel.unsubscribe() } catch (_) {}
  }
  window._v2MembershipsChannel = supabaseClient.channel('v2-memberships')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'league_memberships' }, async (payload) => {
      const me = (typeof getUser === 'function') ? getUser() : null
      const leagueId  = payload.new?.league_id || payload.old?.league_id
      const memberUid = payload.new?.user_id  || payload.old?.user_id
      const concernsMe =
        (me && memberUid === me.id) ||
        (Array.isArray(myLeagues) && leagueId && myLeagues.some(l => l && l.id === leagueId))

      if (!concernsMe) return

      console.log('[Realtime] memberships change concerns me:', payload.eventType, leagueId)

      // Notify the user when their own payment status flips to paid
      if (me && memberUid === me.id &&
          payload.eventType === 'UPDATE' &&
          payload.new?.payment_status === 'paid' &&
          payload.old?.payment_status !== 'paid') {
        showToast('✅ Your league entry has been verified', 'success')
      }

      // Stage v3: when MY membership changes payment state, re-evaluate the
      // app gate. Three scenarios drive a full reload:
      //   (a) Just-approved: I was on the pending screen / payment modal,
      //       now I have access → reload so showApp lets me in.
      //   (b) Just-unpaid AND I have no other paid memberships AND no
      //       global access → I'm orphaned → reload kicks me back to the
      //       payment screen.
      //   (c) Deleted AND same orphaning conditions → same as (b).
      //
      // We always check the live DB count rather than trust local state,
      // because the user could have stale myLeagues in memory.
      if (me && memberUid === me.id) {
        const profile = (typeof getProfile === 'function') ? getProfile() : null
        const isAdminUser = (typeof isAdmin === 'function') && isAdmin()
        const hasGlobal   = profile?.fee_paid === true
        const justPaid    = payload.eventType === 'UPDATE'
                            && payload.new?.payment_status === 'paid'
                            && payload.old?.payment_status !== 'paid'
        const justUnpaid  = payload.eventType === 'UPDATE'
                            && payload.old?.payment_status === 'paid'
                            && payload.new?.payment_status !== 'paid'
        const justDeleted = payload.eventType === 'DELETE'
                            && payload.old?.payment_status === 'paid'

        try {
          if (justPaid) {
            // (a) Reload so the gate lets me into the app. Small delay
            // so the success toast is readable first.
            setTimeout(() => { try { location.reload() } catch (_) {} }, 1500)
            return
          }
          if ((justUnpaid || justDeleted) && !hasGlobal && !isAdminUser) {
            // Check live DB: do I have ANY other paid memberships?
            const { count } = await supabaseClient
              .from('league_memberships')
              .select('id', { count: 'exact', head: true })
              .eq('user_id', me.id)
              .eq('payment_status', 'paid')
            if ((count || 0) === 0) {
              // Orphaned — kick back to gate.
              showToast(
                justDeleted
                  ? 'You have been removed from your league'
                  : 'Your league access has been revoked',
                'warning'
              )
              setTimeout(() => { try { location.reload() } catch (_) {} }, 1500)
              return
            }
          }
        } catch (e) {
          console.warn('[Realtime] orphan check failed:', e)
        }
      }

      // Stage 4c: refresh scopes when MY membership row changes — covers
      // newly-paid (adds a scope), unmarked-paid (removes a scope), and
      // delete (removes a scope).
      if (me && memberUid === me.id) {
        if (typeof refreshScopes === 'function') refreshScopes()
      }

      // Stage 4d: if this membership change affects the user's current
      // private scope league, refresh Home prize pool (paid count moved).
      if (leagueId && currentScope?.type === 'private' && currentScope.id === leagueId) {
        const homeTab = document.getElementById('tab-home')
        if (homeTab && !homeTab.classList.contains('hidden') &&
            typeof loadHomePrizePoolOnly === 'function') {
          loadHomePrizePoolOnly()
        }
      }

      // Refresh visible league surface
      const profileTab = document.getElementById('tab-profile')
      const extrasTab  = document.getElementById('tab-extras')
      if ((profileTab && !profileTab.classList.contains('hidden')) ||
          (extrasTab  && !extrasTab.classList.contains('hidden'))) {
        if (typeof loadMyLeagues === 'function') loadMyLeagues()
      }

      if (leagueId && activeLeagueId === leagueId) {
        if (typeof loadLeagueLeaderboardView === 'function') {
          loadLeagueLeaderboardView(activeLeagueId)
        }
      }
    })
    .subscribe((status) => {
      console.log('[Realtime] v2 memberships channel status:', status)
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
        // Stage 4d: pull breakdown for the active scope (global by default, or
        // the user's currently-selected private league).
        const breakdown = (typeof fetchPrizeBreakdownForScope === 'function')
          ? await fetchPrizeBreakdownForScope(currentScope)
          : await fetchPrizeBreakdown()
        if (!breakdown) return
        // Allow zero-pool private leagues to render (e.g. brand new, no paid members yet);
        // for global we keep the original "gross > 0" guard to avoid flashing an empty pool.
        if (breakdown._scopeType !== 'private' && (!breakdown.gross || breakdown.gross <= 0)) return
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
          .from('profiles').select('fee_paid').eq('fee_paid', true).neq('entered_via_private', true)
        const paidCount = profiles?.length || 0
        return computePrizeBreakdown(settings, paidCount)
      } catch (e) { return null }
    }

    // ============================================================
    // Stage 4d: scope-aware prize breakdown
    // ============================================================
    // Returns the SAME breakdown shape as fetchPrizeBreakdown() so the existing
    // renderPrizeDashboard() can display it without changes. The breakdown is
    // adjusted per-scope:
    //   - global  → identical to fetchPrizeBreakdown()
    //   - private → uses the league's entry_fee + paid member count, or the
    //               admin's prize_pool_override if set. Splits come from global
    //               prize_settings (no per-league split config in 4d).
    //               No house fee deducted (private leagues are pure-pot).
    async function fetchPrizeBreakdownForScope(scope) {
      const s = scope || currentScope || { type: 'global' };
      if (s.type !== 'private' || !s.id) {
        // Default / global → legacy path.
        const b = await fetchPrizeBreakdown();
        if (b) b._scopeName = 'Prize Pool';
        return b;
      }

      try {
        // Pull league + paid member count + global splits + house fee in parallel.
        const [
          { data: league },
          { count: paidCount },
          { data: settings }
        ] = await Promise.all([
          supabaseClient.from('leagues').select('id, name, entry_fee, prize_pool_override, house_fee_pct').eq('id', s.id).maybeSingle(),
          supabaseClient.from('league_memberships').select('id', { count: 'exact', head: true })
            .eq('league_id', s.id).eq('payment_status', 'paid'),
          supabaseClient.from('prize_settings').select('currency, split_1st, split_2nd, split_3rd, house_fee_pct').eq('id', 1).maybeSingle()
        ]);

        if (!league) return null;

        const fee = Number(league.entry_fee) || 0;
        const count = Number(paidCount) || 0;
        const hasOverride = league.prize_pool_override !== null && league.prize_pool_override !== undefined;
        const gross = hasOverride ? (Number(league.prize_pool_override) || 0) : (count * fee);

        // Lever 3: per-league house fee override.
        //   league.house_fee_pct (when not null) overrides the global default.
        //   Falls back to prize_settings.house_fee_pct (admin-configurable).
        //   This lets some leagues be pure-pot (0%) while others take a cut.
        const hasOwnFee = league.house_fee_pct !== null && league.house_fee_pct !== undefined;
        const housePctRaw = hasOwnFee ? Number(league.house_fee_pct) : Number(settings?.house_fee_pct);
        const housePct = Math.max(0, Math.min(100, Number(housePctRaw) || 0));
        const houseFee = gross * (housePct / 100);
        const net = gross - houseFee;

        const cur = (settings && settings.currency) || 'Nu.';
        const s1 = Number(settings?.split_1st) || 50;
        const s2 = Number(settings?.split_2nd) || 30;
        const s3 = Number(settings?.split_3rd) || 20;
        const totalSplit = (s1 + s2 + s3) || 100;

        return {
          currency: cur,
          paidCount: count,
          entryFee: fee,
          manualOverride: hasOverride,
          gross,
          housePct,
          houseFee,
          houseNote: hasOwnFee ? 'Organizing & hosting (custom)' : 'Organizing & hosting',
          net,
          splits: [
            { place: '1st', emoji: '🥇', pct: s1 / totalSplit * 100, amount: net * s1 / totalSplit },
            { place: '2nd', emoji: '🥈', pct: s2 / totalSplit * 100, amount: net * s2 / totalSplit },
            { place: '3rd', emoji: '🥉', pct: s3 / totalSplit * 100, amount: net * s3 / totalSplit }
          ],
          _scopeName: `${league.name || 'League'} Prize Pool`,
          _scopeType: 'private'
        };
      } catch (e) {
        console.warn('[Stage 4d] fetchPrizeBreakdownForScope error:', e);
        return null;
      }
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
          <div class="text-[11px] font-bold uppercase tracking-[0.18em] opacity-70 mb-1">${b._scopeName || 'Prize Pool'}</div>
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
  let shouldRefreshFixtureLockState = false

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
      // Mark for one batched render after all countdown DOM updates finish.
      el.textContent = 'Locked'
      delete el.dataset.cdCard
      shouldRefreshFixtureLockState = true
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
      el.textContent = 'locked'
      delete el.dataset.lockwarn
      shouldRefreshFixtureLockState = true
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

  // If one or more countdowns crossed zero, refresh the fixture cards once,
  // not once per countdown element. This removes the occasional lock-time blink.
  if (shouldRefreshFixtureLockState && typeof renderFixtures === 'function') {
    requestAnimationFrame(() => renderFixtures())
  }
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
  if (deptEl) {
    const realDepartment = String(profile.department || '').trim()
    const fallbackTitle = (typeof isAdmin === 'function' && isAdmin())
      ? 'Prediction League Host'
      : 'Prediction League Player'

    deptEl.textContent = realDepartment || fallbackTitle
    deptEl.classList.toggle('profile-title-fallback', !realDepartment)
  }

  const phoneEl = document.getElementById('profile-header-phone')
  const phone = profile.phone || ''
  if (phoneEl) {
    // Display the full number with a leading + if it looks international.
    let display = phone
    if (display && !display.startsWith('+')) display = '+' + display.replace(/\D/g, '')
    phoneEl.textContent = display || ''
    const phoneRow = phoneEl.parentElement
    if (phoneRow) phoneRow.classList.toggle('hidden', !display)
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

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    if (!src) return reject(new Error('Missing image source'))

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
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
      try {
  const imgSrc = opts.badgeImg || BADGE_VISUALS[normalizeBadgeIconId(opts.badgeId)]?.img
  const badgeImg = await loadCanvasImage(imgSrc)

  const maxW = 260
  const maxH = 260
  const ratio = Math.min(maxW / badgeImg.width, maxH / badgeImg.height)
  const drawW = badgeImg.width * ratio
  const drawH = badgeImg.height * ratio

  ctx.drawImage(
    badgeImg,
    cx - drawW / 2,
    250,
    drawW,
    drawH
  )
} catch (e) {
  console.warn('[share] badge image failed, using emoji fallback:', e)
  ctx.font = '220px system-ui, -apple-system, sans-serif'
  ctx.fillText(opts.emoji || '🎯', cx, 430)
}

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

async function shareBadgeAchievement(badgeId, badge, description) {
  const myName = (getUser()?.user_metadata?.name) || 'Player'
  const visual = BADGE_VISUALS[normalizeBadgeIconId(badgeId)] || BADGE_VISUALS.overflow

  return shareAchievementCard({
    type: 'badge',
    name: myName,
    badgeId,
    badge,
    description,
    emoji: visual.emoji,
    badgeImg: visual.img
  })
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

      if (exactCount >= 2) earned.add('nostradamus')
      if (exactCount >= 5) earned.add('sharpshoot')

      // Combo King: combo_bonus fires when a player lands 2 exact scores in a row.
      // 3+ combos = at least 4 exact scores arranged into back-to-back pairs,
      // which is a distinct skill (timing/consistency) from Sharpshooter's lifetime count.
      const comboCount = Object.values(resultsByFixture)
        .filter(r => (r.combo_bonus || 0) > 0).length
      if (comboCount >= 3) earned.add('combo')

      // Underdog King: 3+ correctly predicted draws
      const correctDraws = finishedPreds.filter(({ p, f }) =>
        f.home_score === f.away_score && p.home_prediction === p.away_prediction
      ).length
      if (correctDraws >= 3) earned.add('underdog')

      // Early Bird: any prediction submitted 72h+ before kickoff
      const earlyBird = predictions.some(p => {
        if (!p.submitted_at) return false
        const f = fixtures.find(x => x.id === p.fixture_id)
        if (!f) return false
        return new Date(f.kickoff) - new Date(p.submitted_at) >= 72 * 3600 * 1000
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
        const safeName = b.name.replace(/'/g, "\\'")
        const safeDesc = b.desc.replace(/'/g, "\\'")
        const shareBtn = got
          ? `<button type="button" class="badge-back-share" onclick="event.stopPropagation(); shareBadgeAchievement('${b.id}', '${safeName}', '${safeDesc}').catch(e => console.warn(e))">↗ Share</button>`
          : `<div class="badge-back-locked">🔒 Locked</div>`
        return `
          <div class="badge-flip ${got ? 'earned' : 'locked'}" onclick="this.classList.toggle('flipped')">
            <div class="badge-flip-inner">
              <div class="badge-flip-face badge-flip-front badge-card ${got ? 'earned' : 'locked'}">
                ${got ? '<div class="badge-earned-tick">✓</div>' : ''}
                <div class="badge-icon">${badgeIconHtml(b.id)}</div>
                <div class="badge-name">${b.name}</div>
                <div class="badge-flip-hint">Tap</div>
              </div>
              <div class="badge-flip-face badge-flip-back">
                <div class="badge-back-name">${b.name}</div>
                <div class="badge-back-desc">${b.desc}</div>
                ${shareBtn}
              </div>
            </div>
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

    // Compute small badge icons to show next to a user's name in the leaderboard.
    // Aligned with the BADGES array (single source of truth for icons/thresholds).
    // Skipped on the row:
    //   • On Fire 🔥 — already shown as the separate lb-streak chip
    //   • Combo King ⚡ — already shown as the separate lb-combo chip (which fires
    //     from 1 combo, vs. badge at 3+; chip is the active indicator, badge is
    //     the profile-wall achievement)
    //   • Early Bird / Underdog / All In — require per-prediction data not in `s`;
    //     they still show on the profile badge wall.
    // The 🥇 medal in the rank tile and the 👑 Champion badge here are intentionally
    // separate signals: medal = current standing (live), crown = celebrating that
    // they're the reigning champion of the league.
    // Capped at 2 visible icons + "+N" overflow chip so rows stay readable on mobile.
    function leaderboardBadgeIcons(s, rank) {
      const earned = []
      const exact = s.exact || 0
      const points = s.points || 0
      const combos = s.combo_count || 0

      // Priority order: rarest / most prestigious first.
      if (rank === 1 && points > 0) earned.push({ id: 'champion' })
      if (exact >= 5)               earned.push({ id: 'sharpshoot' })
      if (points >= 100)            earned.push({ id: 'centurion' })
      // Nostradamus is the entry tier of the exact-score axis — suppress it
      // whenever a higher exact-score achievement (Sharpshooter or Combo King-
      // level combo activity) is already shown via badge or chip, so we don't
      // double-represent the same skill on the row.
      const hasHigherExactSignal = exact >= 5 || combos >= 3
      if (exact >= 2 && !hasHigherExactSignal) earned.push({ id: 'nostradamus' })

      if (earned.length === 0) return ''

      // V2.4: keep the list readable. Show one premium badge icon, then +N.
      // Full badge wall remains available in the Extras/Me badge area.
      const MAX = 1
      const visible = earned.slice(0, MAX)
      const overflow = earned.length - visible.length

      const iconsHtml = visible
        .map(b => `<span class="lb-badge" title="${b.id}" data-badge-id="${b.id}">${badgeIconHtml(b.id, 'lb-badge-art')}</span>`)
        .join('')
      const overflowHtml = overflow > 0
        ? `<span class="lb-badge lb-badge-more" title="${overflow} more badge${overflow > 1 ? 's' : ''}" data-badge-id="overflow">+${overflow}</span>`
        : ''
      return iconsHtml + overflowHtml
    }

    // Custom SVG medals for top-3 ranks. Replaces 🥇🥈🥉 emoji which render
// inconsistently across platforms and look like placeholders on Apple devices.
function rankMedalSvg(rank) {
  const presets = {
    1: { a: '#FFF7B8', b: '#F6C343', c: '#B77905', ring: '#F2B72E', text: '#5C3900', ribbonA: '#EF4444', ribbonB: '#B91C1C' },
    2: { a: '#F8FAFC', b: '#CBD5E1', c: '#64748B', ring: '#94A3B8', text: '#1E293B', ribbonA: '#60A5FA', ribbonB: '#1D4ED8' },
    3: { a: '#FFE6C7', b: '#D98B3A', c: '#8A4617', ring: '#C26A24', text: '#4A2408', ribbonA: '#F97316', ribbonB: '#9A3412' }
  }
  const p = presets[rank]
  if (!p) return ''
  const id = `rankCrest${rank}`
  const label = rank === 1 ? '1st place' : rank === 2 ? '2nd place' : '3rd place'
  return `<svg width="34" height="38" viewBox="0 0 34 38" xmlns="http://www.w3.org/2000/svg" aria-label="${label}" role="img" style="display:block">
    <defs>
      <linearGradient id="${id}r" x1="9" y1="2" x2="25" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${p.ribbonA}"/>
        <stop offset="100%" stop-color="${p.ribbonB}"/>
      </linearGradient>
      <linearGradient id="${id}m" x1="7" y1="11" x2="27" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${p.a}"/>
        <stop offset="52%" stop-color="${p.b}"/>
        <stop offset="100%" stop-color="${p.c}"/>
      </linearGradient>
      <radialGradient id="${id}shine" cx="34%" cy="25%" r="70%">
        <stop offset="0%" stop-color="#fff" stop-opacity=".95"/>
        <stop offset="42%" stop-color="#fff" stop-opacity=".20"/>
        <stop offset="100%" stop-color="#000" stop-opacity=".08"/>
      </radialGradient>
      <filter id="${id}shadow" x="-30%" y="-20%" width="160%" height="170%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.2" flood-color="#0F172A" flood-opacity=".18"/>
      </filter>
    </defs>
    <path d="M10 3h6.8l-2.6 11.5H6.4L10 3Z" fill="url(#${id}r)" opacity=".98"/>
    <path d="M24 3h-6.8l2.6 11.5h7.8L24 3Z" fill="url(#${id}r)" opacity=".86"/>
    <circle cx="17" cy="22" r="12.2" fill="url(#${id}m)" stroke="${p.ring}" stroke-width="1.25" filter="url(#${id}shadow)"/>
    <circle cx="17" cy="22" r="8.7" fill="url(#${id}shine)" stroke="rgba(255,255,255,.72)" stroke-width=".9"/>
    <path d="M10.5 19.3c1-3 3.45-4.75 6.5-4.75s5.5 1.75 6.5 4.75" fill="none" stroke="rgba(255,255,255,.58)" stroke-width="1.2" stroke-linecap="round"/>
    <text x="17" y="25.5" text-anchor="middle" font-family="Plus Jakarta Sans, system-ui, -apple-system, sans-serif" font-size="11" font-weight="900" fill="${p.text}">${rank}</text>
  </svg>`
}
    // ============== PREVIEW MODE (Feature 4) ==============
    async function enterPreviewMode() {
      previewMode = true;
      document.getElementById('auth-screen').classList.add('hidden')
      document.getElementById('app-shell').classList.remove('hidden')
      document.getElementById('preview-banner').classList.remove('hidden')

        // Initialize navigation history for preview mode
  navHistory = ['predictions']
  currentNavIndex = 0
  history.replaceState({ tab: 'predictions', navIndex: 0 }, '', '#predictions')

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
              const medal = rank <= 3 && hasPoints ? rankMedalSvg(rank) : ''
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
    // Semantics:
    //   • Matches = REMAINING fixtures (kickoff in the future or no score yet).
    //     Total − finished. So "102" means there are 102 games left to predict.
    //   • Teams = ACTIVE teams = teams that still appear in at least one
    //     unfinished fixture. In group stage all 48 will be active; after groups
    //     conclude and the admin assigns knockout brackets, eliminated teams
    //     naturally drop out because they're no longer in any future fixture.
    // The `fixtures` table holds matches; teams are home_team/away_team strings.
    async function loadAuthStats() {
      const mEl = document.getElementById('auth-stat-matches')
      const tEl = document.getElementById('auth-stat-teams')
      if (!mEl || !tEl) return
      try {
        // Pull team names + scores so we can compute remaining + active sets.
        const { data, error } = await supabaseClient
          .from('fixtures')
          .select('home_team, away_team, home_score, away_score')

        if (error) {
          console.warn('[loadAuthStats] fixtures query error:', error)
          throw error
        }

        const rows = data || []

        // A fixture is "finished" only when BOTH scores are recorded.
        // (Either null = not played yet; covers in-progress / postponed too.)
        const isFinished = (f) => f.home_score !== null && f.away_score !== null
        const remainingFixtures = rows.filter(f => !isFinished(f))
        const remainingCount = remainingFixtures.length
        mEl.textContent = remainingCount

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

        // Active teams = teams appearing in any UNFINISHED fixture.
        const activeTeams = new Set()
        remainingFixtures.forEach(f => {
          const home = normalizeTeam(f.home_team)
          const away = normalizeTeam(f.away_team)
          if (home) activeTeams.add(home)
          if (away) activeTeams.add(away)
        })

        let teamCount = activeTeams.size
        // Sanity cap: WC 2026 has 48 teams maximum. If normalization yields
        // more, data is polluted — cap visually but log the issue.
        if (teamCount > 48) {
          console.warn(`[loadAuthStats] ${teamCount} active teams after normalization — data may be polluted. Capping display at 48.`)
          teamCount = 48
        }
        tEl.textContent = teamCount

        console.log('[loadAuthStats] remaining matches:', remainingCount, '/ total:', rows.length, '| active teams:', activeTeams.size)
      } catch (e) {
        // Honest fallback: leave whatever was there (typically "—") rather than
        // showing static WC 2026 totals that look dynamic but aren't.
        console.warn('[loadAuthStats] could not compute stats, leaving placeholders:', e)
        if (mEl.textContent === '' || mEl.textContent == null) mEl.textContent = '—'
        if (tEl.textContent === '' || tEl.textContent == null) tEl.textContent = '—'
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
    
    // Initialize navigation history
    navHistory = ['home']
    currentNavIndex = 0
    history.replaceState({ tab: 'home', navIndex: 0 }, '', '#home')

    const profile = getProfile()
    document.getElementById('user-name').textContent = profile?.name || 'Player'

    // Stage v3: gate allows entry if any of these is true:
    //   - fee_paid (today's behavior — paid the global Nu. 499)
    //   - admin
    //   - has at least one PAID private league membership (the real proof of payment)
    //
    // entered_via_private alone does NOT grant entry — the user still has to
    // pay into at least one private league. The flag just tells us to route
    // them to the private payment screen instead of the global one.
    let hasPaidPrivateMembership = false
    if (v3InviteLinkEnabled && profile?.id) {
      try {
        const { count } = await supabaseClient
          .from('league_memberships')
          .select('id', { count: 'exact', head: true })
          .eq('user_id', profile.id)
          .eq('payment_status', 'paid')
        hasPaidPrivateMembership = (count || 0) > 0
      } catch (_) { /* ignore — fall through to gate */ }
    }

    const allowEntry = profile?.fee_paid
                       || isAdmin()
                       || (v3InviteLinkEnabled && hasPaidPrivateMembership)

    if (!allowEntry) {
      // Stage v3: private-entry users get the league payment modal instead
      // of the global payment screen. Three cases that route to private:
      //   1. They just signed up via invite link (entered_via_private=true,
      //      _pendingInvite.league still in memory)
      //   2. They signed up via invite link earlier and reloaded (profile
      //      has entered_via_private=true; recover the pending league from
      //      their pending membership, if any)
      //   3. Pending membership exists but no entered_via_private flag —
      //      show a "waiting verification" screen rather than re-prompt for payment
      if (v3InviteLinkEnabled && profile?.entered_via_private === true) {
        // Try to recover a pending league for this user.
        let leagueToShow = _pendingInvite?.league || null
        if (!leagueToShow) {
          try {
            const { data: pending } = await supabaseClient
              .from('league_memberships')
              .select('league_id, payment_status, leagues:league_id(id, name, entry_fee, status, prize_pool_override, is_private)')
              .eq('user_id', profile.id)
              .order('joined_at', { ascending: false })
              .limit(1)
              .maybeSingle()
            if (pending?.leagues) {
              // If user already submitted payment proof, show pending state instead of payment modal.
              if (pending.payment_status === 'pending') {
                showPaymentGate()  // reuses the gate UI; user sees "Pending verification" state once flow lands
                return
              }
              leagueToShow = pending.leagues
            }
          } catch (_) {}
        }
        if (leagueToShow && typeof showLeaguePaymentModal === 'function') {
          // Hide app shell, show only the modal (it's already overlay-positioned).
          const shell = document.getElementById('app-shell')
          if (shell) shell.classList.add('hidden')
          const gate = document.getElementById('payment-gate')
          if (gate) gate.classList.add('hidden')
          showLeaguePaymentModal(leagueToShow)
          return
        }
        // Fall through to global gate as a safety net if no pending league found.
      }
      showPaymentGate()
      return
    }

    await showNormalApp()
    
    // ✅ ADD THIS LINE: Explicitly activate the Home tab in the UI
    switchTab('home', false)

    // After the app is up, check whether the tournament has ended.
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
  switchTab('predictions', true)
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

function switchTab(tab, pushHistory = true) {
  // Don't push duplicate consecutive entries
  if (pushHistory && !isNavigatingBack && navHistory[currentNavIndex] !== tab) {
    // If we navigated back and then switched, truncate forward history
    if (currentNavIndex < navHistory.length - 1) {
      navHistory = navHistory.slice(0, currentNavIndex + 1)
    }
    navHistory.push(tab)
    currentNavIndex++
    // Push to browser history so swipe-back works
    history.pushState({ tab: tab, navIndex: currentNavIndex }, '', `#${tab}`)
  }

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
    // Auto-scroll to the first OPEN (predictable) fixture after render
    setTimeout(() => {
      const now = new Date()
      const upcoming = fixtures
        .filter(f => new Date(f.kickoff) > now && f.home_score === null)
        .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
      const BATCH_SIZE = 3
      const BATCH_HOURS = 48
      const batchDeadline = new Date(now.getTime() + BATCH_HOURS * 3600 * 1000)
      const openMatchIds = new Set()
      upcoming.forEach((f, i) => {
        if (i < BATCH_SIZE) openMatchIds.add(f.id)
        if (new Date(f.kickoff) <= batchDeadline) openMatchIds.add(f.id)
      })
      const firstOpen = upcoming.find(f => openMatchIds.has(f.id))
      if (firstOpen) {
        const el = document.getElementById(`fixture-${firstOpen.id}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }
  if (tab === 'extras' && !previewMode) {
    if (typeof loadMyLeagues === 'function') loadMyLeagues()
    if (typeof renderInventoryCard === 'function') renderInventoryCard()
    // Stage 4c: ensure switcher state matches latest scopes when user opens Extras.
    if (typeof renderScopeSwitcher === 'function') renderScopeSwitcher()
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
        .eq('fee_paid', true).neq('entered_via_private', true)
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
  // Stage v3: parse and validate the invite code (if present) BEFORE auth runs.
  // This lets the auth screen render with league-specific branding and route
  // the new signup to the private payment flow.
  //
  // Bootstrap uses an RPC (public_lookup_league_by_code) instead of the
  // regular leagues SELECT, because Stage 5 RLS blocks anon users from
  // querying the leagues table directly. The RPC is SECURITY DEFINER and
  // returns only public-safe fields (name, fee, status) for active leagues.
  try {
    await checkV3InviteLinkEnabled()
    const code = _extractInviteCodeFromUrl()
    if (code && v3InviteLinkEnabled) {
      _pendingInvite.code = code
      try {
        const { data: rows, error } = await supabaseClient
          .rpc('public_lookup_league_by_code', { p_code: code })
        if (error) throw error
        const league = Array.isArray(rows) ? rows[0] : rows
        if (!league) {
          _pendingInvite.error = 'This invite link is invalid or the league is no longer accepting new members'
        } else {
          _pendingInvite.league = league
        }
      } catch (e) {
        _pendingInvite.error = e?.message || 'Invalid invite link'
        console.warn('[v3 invite] lookup failed:', _pendingInvite.error)
      }
      // Apply branding to the auth screen if a landing/affordance exists
      if (typeof renderInviteBranding === 'function') {
        renderInviteBranding()
      }
    } else if (code && !v3InviteLinkEnabled) {
      // Flag is off — silently ignore the code; user goes through normal flow
      console.log('[v3 invite] feature disabled, ignoring code')
    }
  } catch (e) {
    console.warn('[v3 invite] bootstrap failed:', e)
  }

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
      .select('private_leagues_enabled, private_leagues_v2_enabled, v3_invite_link_enabled')
      .eq('id', 1)
      .single();
    if (error) throw error;
    return { data: data || { private_leagues_enabled: false, private_leagues_v2_enabled: false, v3_invite_link_enabled: false }, error: null };
  } catch (err) {
    console.warn('getSystemSettings failed, defaulting to false:', err);
    return { data: { private_leagues_enabled: false, private_leagues_v2_enabled: false, v3_invite_link_enabled: false }, error: err };
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

  // Stage 4a: when v2 is enabled, only active leagues are joinable.
  // Draft/archived leagues remain invisible to users even if they know the code.
  if (privateLeaguesV2Enabled && league.status && league.status !== 'active') {
    throw new Error('This league is not currently open for joining');
  }

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

// ============================================================
// Stage 4b: pay-to-join flow for v2 private leagues
// ============================================================
// Validation-only lookup. Returns the league row if it can be joined,
// otherwise throws a user-friendly error. Does NOT create a membership row;
// that happens in submitLeaguePayment() after proof upload.
async function lookupLeagueByCodeForJoin(inviteCode) {
  const user = getUser();
  if (!user) throw new Error('Not authenticated');
  if (!inviteCode) throw new Error('Enter an invite code');

  const { data: league, error: leagueError } = await supabaseClient
    .from('leagues')
    .select('*')
    .eq('invite_code', String(inviteCode).toUpperCase())
    .maybeSingle();

  if (leagueError) throw leagueError;
  if (!league) throw new Error('Invalid invite code');
  if (league.status && league.status !== 'active') {
    throw new Error('This league is not currently open for joining');
  }

  const { data: existing } = await supabaseClient
    .from('league_memberships')
    .select('id, payment_status')
    .eq('league_id', league.id)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    if (existing.payment_status === 'paid')    throw new Error('You are already a paid member of this league');
    if (existing.payment_status === 'pending') throw new Error('Your payment is awaiting verification');
    throw new Error('You are already a member of this league');
  }

  return league;
}

// Holds the league + file the user is about to submit. Reset on modal close.
let _pendingLeaguePayment = { league: null, file: null };

function showLeaguePaymentModal(league) {
  if (!league) return;
  _pendingLeaguePayment = { league, file: null };

  // Populate league info.
  const nameEl = document.getElementById('lp-league-name');
  const feeEl  = document.getElementById('lp-fee-amount');
  if (nameEl) nameEl.textContent = league.name || 'Untitled league';
  const fee = Number(league.entry_fee) || 0;
  if (feeEl) feeEl.textContent = 'Nu. ' + fee.toLocaleString('en-IN');

  // Reset file picker UI.
  const fileInput = document.getElementById('lp-payment-file');
  if (fileInput) fileInput.value = '';
  const preview = document.getElementById('lp-upload-preview');
  if (preview) { preview.src = ''; preview.classList.add('hidden'); }
  const placeholder = document.getElementById('lp-upload-placeholder');
  if (placeholder) placeholder.classList.remove('hidden');
  const clearBtn = document.getElementById('lp-upload-clear');
  if (clearBtn) clearBtn.classList.add('hidden');

  // Re-enable submit in case it was disabled from a previous attempt.
  const submitBtn = document.getElementById('lp-submit-btn');
  if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Submit for Verification'; }

  // Show modal.
  const overlay = document.getElementById('league-payment-modal-overlay');
  const panel   = document.getElementById('league-payment-modal-content');
  if (!overlay) return;
  overlay.classList.remove('hidden');
  if (panel) requestAnimationFrame(() => panel.classList.add('shown'));
}

function hideLeaguePaymentModal() {
  const overlay = document.getElementById('league-payment-modal-overlay');
  const panel   = document.getElementById('league-payment-modal-content');
  if (panel) panel.classList.remove('shown');
  if (overlay) overlay.classList.add('hidden');
  _pendingLeaguePayment = { league: null, file: null };
}

// Backdrop tap closes the modal.
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('league-payment-modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target.id === 'league-payment-modal-overlay') hideLeaguePaymentModal();
    });
  }
});

function handleLeaguePaymentFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    showToast('Please upload an image file', 'error');
    input.value = '';
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast('File too large. Max 5MB.', 'error');
    input.value = '';
    return;
  }
  _pendingLeaguePayment.file = file;

  const preview     = document.getElementById('lp-upload-preview');
  const placeholder = document.getElementById('lp-upload-placeholder');
  const clearBtn    = document.getElementById('lp-upload-clear');
  if (preview)     { preview.src = URL.createObjectURL(file); preview.classList.remove('hidden'); }
  if (placeholder) placeholder.classList.add('hidden');
  if (clearBtn)    clearBtn.classList.remove('hidden');
}

function clearLeaguePaymentFile(e) {
  if (e) e.preventDefault();
  _pendingLeaguePayment.file = null;
  const fileInput   = document.getElementById('lp-payment-file');
  const preview     = document.getElementById('lp-upload-preview');
  const placeholder = document.getElementById('lp-upload-placeholder');
  const clearBtn    = document.getElementById('lp-upload-clear');
  if (fileInput)   fileInput.value = '';
  if (preview)     { preview.src = ''; preview.classList.add('hidden'); }
  if (placeholder) placeholder.classList.remove('hidden');
  if (clearBtn)    clearBtn.classList.add('hidden');
}

// Upload proof + create the membership row with payment_status='pending'.
// Uses bucket 'league-payment-proofs' (separate from global 'payment-proofs').
async function submitLeaguePayment() {
  const league = _pendingLeaguePayment.league;
  const file   = _pendingLeaguePayment.file;
  const btn    = document.getElementById('lp-submit-btn');
  if (btn?.disabled) return;
  if (!league) { showToast('Something went wrong, try again', 'error'); return; }
  if (!file)   { showToast('Please attach a payment screenshot', 'warning'); return; }

  const user = getUser();
  if (!user) { showToast('Not authenticated', 'error'); return; }

  btn.disabled = true;
  const origLabel = btn.textContent;
  btn.textContent = 'Uploading...';

  try {
    // Re-validate at submit time so we fail loudly if the league was archived /
    // the user got auto-joined another way mid-flow.
    const { data: freshLeague } = await supabaseClient
      .from('leagues')
      .select('id, status, entry_fee, name')
      .eq('id', league.id)
      .maybeSingle();
    if (!freshLeague) { showToast('League no longer exists', 'error'); btn.disabled = false; btn.textContent = origLabel; return; }
    if (freshLeague.status !== 'active') { showToast('League is no longer open', 'error'); btn.disabled = false; btn.textContent = origLabel; return; }

    const { data: dup } = await supabaseClient
      .from('league_memberships')
      .select('id')
      .eq('league_id', league.id)
      .eq('user_id', user.id)
      .maybeSingle();
    if (dup) { showToast('You already have a membership for this league', 'warning'); btn.disabled = false; btn.textContent = origLabel; return; }

    // Upload proof. Path: {leagueId}/{userId}/{timestamp}.{ext}
    const fileExt  = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
    const fileName = `${league.id}/${user.id}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabaseClient
      .storage
      .from('league-payment-proofs')
      .upload(fileName, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      console.error('[Stage 4b] proof upload error:', uploadError);
      showToast('Upload failed: ' + (uploadError.message || 'unknown'), 'error');
      btn.disabled = false; btn.textContent = origLabel;
      return;
    }

    const { data: urlData } = supabaseClient
      .storage
      .from('league-payment-proofs')
      .getPublicUrl(fileName);
    const publicUrl = urlData?.publicUrl || null;

    btn.textContent = 'Submitting...';

    // Insert membership in pending state. entry_fee_paid is captured at the
    // fee in effect when the user submitted, even if admin edits it later.
    const { error: insertError } = await supabaseClient
      .from('league_memberships')
      .insert({
        league_id: league.id,
        user_id: user.id,
        payment_status: 'pending',
        payment_proof_url: publicUrl,
        entry_fee_paid: Number(freshLeague.entry_fee) || 0,
        payment_pending: new Date().toISOString()
      });

    if (insertError) {
      console.error('[Stage 4b] membership insert error:', insertError);
      showToast(insertError.message || 'Could not submit, try again', 'error');
      btn.disabled = false; btn.textContent = origLabel;
      // Note: the proof file may now be orphaned in storage. Admin can clean
      // up later. A SECURITY DEFINER RPC in a future stage will make this
      // transactional.
      return;
    }

    showToast(`Submitted! Admin will verify your payment for "${freshLeague.name}".`, 'success');
    hideLeaguePaymentModal();
    if (typeof loadMyLeagues === 'function') await loadMyLeagues();
  } catch (e) {
    console.error('[Stage 4b] submitLeaguePayment error:', e);
    showToast('Something went wrong', 'error');
    btn.disabled = false;
    btn.textContent = origLabel;
  }
}

async function getMyLeagues() {
  const user = getUser();
  if (!user) return { data: [], error: null };

  const { data, error } = await supabaseClient
    .from('league_memberships')
    .select(`
      league_id,
      payment_status,
      payment_proof_url,
      joined_at,
      leagues:league_id (
        id,
        name,
        invite_code,
        created_by,
        entry_fee,
        status,
        prize_pool_override,
        is_private
      )
    `)
    .eq('user_id', user.id);

  if (error) return { data: [], error };
  // Flatten: merge membership payment fields onto each league object using
  // underscore-prefixed names so they don't collide with league columns.
  const leagues = data.map(row => row.leagues ? ({
    ...row.leagues,
    _payment_status: row.payment_status || null,
    _payment_proof_url: row.payment_proof_url || null,
    _joined_at: row.joined_at || null
  }) : null).filter(Boolean);
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
let privateLeaguesV2Enabled = false  // Stage 4a: admin-only create + per-league payments
let v3InviteLinkEnabled = false       // Stage v3: invite-link signup (private-only entry)
let _systemSettingsInitialized = false  // prevents toast on first load / login

// Stage v3: holds the invite code parsed from the URL on page load.
// Resolved league info gets cached here once validated.
let _pendingInvite = {
    code: null,   // raw code from URL
    league: null, // league row (null until lookupLeagueByCodeForJoin succeeds)
    error: null   // error message (null until validation completes)
}

async function checkPrivateLeaguesEnabled() {
    const { data } = await getSystemSettings()
    privateLeaguesEnabled = data?.private_leagues_enabled || false
    return privateLeaguesEnabled
}

// Stage 4a: read the v2 master switch from system_settings.
// When TRUE, the new private league behaviour is active (admin-only create,
// active-only league visibility, per-league payments coming in 4b).
// When FALSE, everything runs the legacy path — zero user-visible change.
async function checkPrivateLeaguesV2Enabled() {
    const { data } = await getSystemSettings()
    privateLeaguesV2Enabled = data?.private_leagues_v2_enabled === true
    return privateLeaguesV2Enabled
}

// Stage v3: read the invite-link signup master switch.
async function checkV3InviteLinkEnabled() {
    const { data } = await getSystemSettings()
    v3InviteLinkEnabled = data?.v3_invite_link_enabled === true
    return v3InviteLinkEnabled
}

// Stage v3: parse ?invite=CODE from the URL on page load. Idempotent.
// Strips the param from the visible URL afterwards so a reload doesn't
// retrigger the invite flow.
function _extractInviteCodeFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search)
        const code = (params.get('invite') || '').trim().toUpperCase()
        if (!code) return null
        // Clean it out so reload doesn't retrigger
        params.delete('invite')
        const newSearch = params.toString()
        const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash
        window.history.replaceState({}, '', newUrl)
        return code
    } catch (_) { return null }
}

// Stage v3: paint the invite-link banner onto the auth screen. Inserts a
// banner above the form when a valid invite is in flight, or an error chip
// if the code was invalid. No-op if the auth screen DOM isn't mounted yet.
function renderInviteBranding() {
    const host = document.getElementById('auth-screen')
    if (!host) return
    // Remove any prior banner so this function is idempotent.
    const existing = document.getElementById('invite-banner')
    if (existing) existing.remove()

    if (!_pendingInvite.code) return

    let bannerHtml = ''
    if (_pendingInvite.league) {
        const lg = _pendingInvite.league
        const fee = Number(lg.entry_fee) || 0
        const feeStr = 'Nu. ' + fee.toLocaleString('en-IN')
        bannerHtml = `
          <div id="invite-banner" class="mx-auto mb-4 max-w-sm bg-gradient-to-br from-brand-50 to-brand-100 border border-brand-200 rounded-2xl p-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shrink-0">🎟️</div>
              <div class="flex-1 min-w-0">
                <div class="text-[10px] font-bold text-brand-700 uppercase tracking-wider">You're invited</div>
                <div class="font-bold text-sm text-ink-900 truncate">${escapeHtml(lg.name || 'League')}</div>
                <div class="text-[11px] text-ink-600 mt-0.5">Entry fee ${feeStr} · sign up below to join</div>
              </div>
            </div>
          </div>`
    } else if (_pendingInvite.error) {
        bannerHtml = `
          <div id="invite-banner" class="mx-auto mb-4 max-w-sm bg-red-50 border border-red-200 rounded-2xl p-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shrink-0">⚠️</div>
              <div class="flex-1 min-w-0">
                <div class="text-[10px] font-bold text-red-700 uppercase tracking-wider">Invite link</div>
                <div class="font-semibold text-sm text-ink-900">${escapeHtml(_pendingInvite.error)}</div>
                <div class="text-[11px] text-ink-600 mt-0.5">You can still sign up normally below.</div>
              </div>
            </div>
          </div>`
    }

    if (!bannerHtml) return

    // Insert at the top of the auth screen, above the form
    const form = document.getElementById('auth-form')
    if (form && form.parentNode) {
        form.insertAdjacentHTML('beforebegin', bannerHtml)
    } else {
        host.insertAdjacentHTML('afterbegin', bannerHtml)
    }
}

// ============================================================
// Stage 4c: scope state + switcher
// ============================================================
// A "scope" is one of:
//   { type: 'global', name: 'Global League' }
//   { type: 'private', id: '<leagueId>', name: '<leagueName>' }
//
// On login (when v2 is on), we resolve which scopes the user belongs to:
//   - global: they're paid for the global league (profile.fee_paid === true)
//   - private: they have a paid membership in an active private league
//
// `currentScope` drives which leaderboard view the switcher routes to.
// `availableScopes` drives whether the switcher is shown (hidden if 0 or 1).
let currentScope = { type: 'global', name: 'Global League' };
let availableScopes = [];

const SCOPE_STORAGE_KEY = 'wc_current_scope_v1';

// Resolve the set of scopes the current user has access to.
async function resolveUserScopes() {
  const scopes = [];
  const user = (typeof getUser === 'function') ? getUser() : null;
  const profile = (typeof getProfile === 'function') ? getProfile() : null;
  if (!user) return scopes;

  // Global scope — gated by fee_paid (same gate the rest of the app uses).
  if (profile?.fee_paid === true) {
    scopes.push({ type: 'global', name: 'Global League' });
  }

  // Private scopes — only paid memberships in active leagues count.
  try {
    const { data, error } = await supabaseClient
      .from('league_memberships')
      .select(`
        league_id, payment_status,
        leagues:league_id ( id, name, status )
      `)
      .eq('user_id', user.id)
      .eq('payment_status', 'paid');

    if (error) {
      console.warn('[Stage 4c] resolveUserScopes error:', error);
    } else {
      (data || []).forEach(row => {
        const lg = row.leagues;
        if (lg && lg.status === 'active') {
          scopes.push({ type: 'private', id: lg.id, name: lg.name || 'Untitled' });
        }
      });
    }
  } catch (e) {
    console.warn('[Stage 4c] resolveUserScopes exception:', e);
  }

  return scopes;
}

// Save current scope to localStorage (survives reload).
function _persistScope(scope) {
  try {
    localStorage.setItem(SCOPE_STORAGE_KEY, JSON.stringify(scope));
  } catch (_) { /* private browsing or quota: ignore */ }
}

function _loadPersistedScope() {
  try {
    const raw = localStorage.getItem(SCOPE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) { return null; }
}

// Switch active scope. If switching to a private scope, jumps to its leaderboard
// using the existing selectLeague pathway. If switching to global, clears the
// active league and re-renders the global leaderboard if visible.
function setCurrentScope(scope) {
  if (!scope || !scope.type) return;
  currentScope = scope;
  _persistScope(scope);

  if (scope.type === 'private' && scope.id) {
    activeLeagueId = scope.id;
    if (typeof switchTab === 'function') {
      switchTab('leaderboard');
    }
  } else {
    // Global
    activeLeagueId = null;
    const lbTab = document.getElementById('tab-leaderboard');
    if (lbTab && !lbTab.classList.contains('hidden')) {
      if (typeof loadLeaderboard === 'function') loadLeaderboard();
    }
  }

  // Stage 4d: refresh Home prize pool to reflect the new scope.
  // If Home tab is currently visible we trigger a full reload; otherwise the
  // next switchTab('home') will pick up the new scope automatically.
  const homeTab = document.getElementById('tab-home');
  if (homeTab && !homeTab.classList.contains('hidden')) {
    if (typeof loadHome === 'function') loadHome();
  }

  renderScopeSwitcher();
}

// Pick a sensible default scope: prefer last-persisted (if still valid),
// else first available, else global.
function _pickDefaultScope() {
  const saved = _loadPersistedScope();
  if (saved) {
    const stillValid = availableScopes.find(s =>
      s.type === saved.type && (s.type === 'global' || s.id === saved.id)
    );
    if (stillValid) return stillValid;
  }
  if (availableScopes.length > 0) return availableScopes[0];
  return { type: 'global', name: 'Global League' };
}

// Refresh available scopes (called from realtime hooks too).
async function refreshScopes() {
  if (!privateLeaguesV2Enabled) {
    availableScopes = [];
    renderScopeSwitcher();
    return;
  }
  availableScopes = await resolveUserScopes();

  // If current scope is no longer valid (e.g. league archived), fall back to default.
  const stillValid = availableScopes.find(s =>
    s.type === currentScope.type && (currentScope.type === 'global' || s.id === currentScope.id)
  );
  if (!stillValid) {
    currentScope = _pickDefaultScope();
    _persistScope(currentScope);
  }
  renderScopeSwitcher();
}

// One-time init on login. Picks default scope and renders the switcher.
async function initScopeOnLogin() {
  if (!privateLeaguesV2Enabled) {
    // v2 off → hide switcher entirely, leave state as default global.
    const card = document.getElementById('scope-switcher-card');
    if (card) card.classList.add('hidden');
    return;
  }
  availableScopes = await resolveUserScopes();
  currentScope = _pickDefaultScope();
  _persistScope(currentScope);

  // Stage v3: sync activeLeagueId with the chosen scope. Without this, a
  // private-only user lands with scope=private but activeLeagueId=null, so
  // the leaderboard tab still renders the global view. Setting it here means
  // the first time they tap Ranks, they see their league's leaderboard.
  if (currentScope?.type === 'private' && currentScope.id) {
    activeLeagueId = currentScope.id;
  } else {
    activeLeagueId = null;
  }

  renderScopeSwitcher();
}

// Show/hide the switcher card based on count of available scopes,
// and populate the dropdown menu.
function renderScopeSwitcher() {
  const card = document.getElementById('scope-switcher-card');
  const nameEl = document.getElementById('scope-current-name');
  const iconEl = document.getElementById('scope-current-icon');
  const menu = document.getElementById('scope-menu');
  if (!card || !nameEl || !menu) return;

  // Update current scope label regardless of switcher visibility.
  nameEl.textContent = currentScope.name || (currentScope.type === 'global' ? 'Global League' : 'League');
  if (iconEl) iconEl.textContent = currentScope.type === 'global' ? '🌐' : '🏆';

  // Show switcher only if 2+ scopes available and v2 is on.
  if (!privateLeaguesV2Enabled || availableScopes.length < 2) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');

  // Build menu items.
  menu.innerHTML = availableScopes.map(s => {
    const isCurrent = s.type === currentScope.type &&
                      (s.type === 'global' || s.id === currentScope.id);
    const icon = s.type === 'global' ? '🌐' : '🏆';
    const safeName = (s.name || '').replace(/'/g, "\\'");
    const scopeArg = s.type === 'global'
      ? `{type:'global',name:'${safeName}'}`
      : `{type:'private',id:'${s.id}',name:'${safeName}'}`;
    return `
      <button onclick="_selectScopeFromMenu(${scopeArg})"
        class="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl tap text-left transition ${isCurrent ? 'bg-brand-50 border border-brand-100' : 'bg-paper hover:bg-white border border-paper-border'}">
        <span class="text-base">${icon}</span>
        <span class="flex-1 font-semibold text-sm truncate">${escapeHtml(s.name || '')}</span>
        ${isCurrent ? '<span class="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded-full">CURRENT</span>' : ''}
      </button>`;
  }).join('');
}

// Internal helper used by menu buttons (keeps onclick payloads safe).
function _selectScopeFromMenu(scope) {
  hideScopeMenu();
  setCurrentScope(scope);
}

function toggleScopeMenu() {
  const menu = document.getElementById('scope-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

function hideScopeMenu() {
  const menu = document.getElementById('scope-menu');
  if (menu) menu.classList.add('hidden');
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
    // Stage 6: private_leagues_access column dropped. Admin-only check now.
    if (!profile) return false;
    return (typeof isAdmin === 'function' && isAdmin());
}

/**
 * Centralized access control for private leagues.
 * Returns { allowed, reason } where reason explains why access was granted/denied.
 */
async function canAccessLeagues() {
    const profile = getProfile();
    if (!profile) return { allowed: false, reason: 'not_authenticated' };

    // v2 (active mode): access is per-membership, enforced by Stage 5 RLS on
    // league_memberships. Any authenticated user can interact; the per-league
    // membership checks downstream do the real gating.
    if (privateLeaguesV2Enabled) {
        return { allowed: true, reason: 'v2' };
    }

    // Stage 6: legacy v1 path simplified. With the private_leagues_access
    // column removed, v1 mode now only grants access to admins. If v2 is
    // off and you're not an admin, you can't use private leagues — which
    // matches your current production setup.
    const enabled = await checkPrivateLeaguesEnabled();
    if (!enabled) return { allowed: false, reason: 'disabled' };
    if (isAdmin()) return { allowed: true, reason: 'admin' };
    return { allowed: false, reason: 'not_granted' };
}

// Stage 6: hasLeagueAccess() kept as a thin shim. It's still referenced
// in a few places downstream; removing it would force a larger surface
// of edits. Just delegate to the simplified admin check.
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
    // Stage 4a: in v2 mode, league creation is admin-only. Use the admin panel.
    if (privateLeaguesV2Enabled) {
        if (typeof isAdmin === 'function' && isAdmin()) {
            showToast('Use the Admin → Leagues panel to create private leagues', 'info');
        } else {
            showToast('Only the admin can create private leagues. Ask for an invite code to join an existing one.', 'info');
        }
        return;
    }

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
    // Stage 4b: v2 path uses payment modal instead of immediate join.
    if (privateLeaguesV2Enabled) {
        const code = (document.getElementById('league-join-code').value || '').trim();
        if (!code) {
            showToast('Enter an invite code', 'warning');
            return;
        }
        try {
            const league = await lookupLeagueByCodeForJoin(code);
            // Clear the input so a re-attempt isn't pre-filled with a stale code.
            document.getElementById('league-join-code').value = '';
            showLeaguePaymentModal(league);
        } catch (err) {
            showToast(err.message || 'Could not join', 'error');
        }
        return;
    }

    // ---- Legacy v1 path below (unchanged) ----
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

// Activate a private league and jump to its leaderboard view. Called from
// the inline onclick handlers rendered by loadMyLeagues (each league card).
// Without this, clicking a league throws "selectLeague is not defined".
function selectLeague(leagueId) {
  if (!leagueId) return
  activeLeagueId = leagueId
  switchTab('leaderboard')
}

// Stage 4a: shared renderer for the "My Leagues" list inside the Extras card.
// Used by the v2 path in loadMyLeagues. Mirrors the legacy v1 rendering so
// users see a consistent visual.
// Stage 4b: extended to show payment status badges (PENDING / UNPAID) when v2
// is enabled and the membership carries a non-paid status.
async function _renderMyLeaguesList(container) {
  if (!container) return
  const { data, error } = await getMyLeagues()
  if (error) {
    console.error('_renderMyLeaguesList error:', error)
    container.innerHTML = `<div class="text-center text-xs text-ink-500 py-4">Couldn't load your leagues. Try refresh.</div>`
    return
  }
  myLeagues = data || []
  if (!myLeagues.length) {
    container.innerHTML = `
      <div class="text-center py-6">
        <div class="text-3xl mb-2 opacity-40">🏆</div>
        <div class="text-sm font-semibold text-ink-700">You're not in any private league yet</div>
        <p class="text-xs text-ink-500 mt-1">Enter an invite code above to join one.</p>
      </div>`
    return
  }
  container.innerHTML = myLeagues.map(l => {
    // Stage 4b: payment status badge (only when v2 is on AND membership isn't paid)
    let payBadge = ''
    if (privateLeaguesV2Enabled) {
      if (l._payment_status === 'pending') {
        payBadge = '<span class="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full ml-2">PENDING</span>'
      } else if (l._payment_status === 'unpaid' || l._payment_status == null) {
        payBadge = '<span class="text-[10px] font-bold text-ink-500 bg-ink-100 px-2 py-0.5 rounded-full ml-2">UNPAID</span>'
      }
    }
    return `
    <div class="flex items-center gap-3 p-3 rounded-2xl border ${activeLeagueId === l.id ? 'border-brand-500 bg-brand-50' : 'border-paper-border bg-paper'} tap" onclick="selectLeague('${l.id}')">
      <div class="w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shrink-0">${escapeHtml((l.name || 'L').substring(0, 2).toUpperCase())}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center flex-wrap">
          <span class="font-semibold text-sm truncate">${escapeHtml(l.name || '')}</span>${payBadge}
        </div>
        <div class="text-[11px] text-ink-500 font-mono tracking-wider">${escapeHtml(l.invite_code || '')}</div>
      </div>
      ${activeLeagueId === l.id ? '<span class="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">ACTIVE</span>' : ''}
      <button onclick="event.stopPropagation(); shareLeagueById('${l.id}')" class="text-ink-400 p-1.5 tap" title="Share">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
      </button>
    </div>`
  }).join('')
}

async function loadMyLeagues() {
    const container = document.getElementById('my-leagues-list')
    const createBtn = document.getElementById('create-league-btn')
    const joinWrap = document.getElementById('league-join-wrap')

    // Check system setting
    const enabled = await checkPrivateLeaguesEnabled()
    // Stage 4a: independent v2 flag read alongside the master enable flag.
    const v2 = await checkPrivateLeaguesV2Enabled()

    // Stage 4a: when v2 is ON, it is its own master switch — completely independent
    // of the legacy v1 flag. Take the v2 path FIRST, before any v1 gating runs.
    // This means admins can disable v1 (the legacy "Coming Soon" mode) without
    // breaking the v2 feature.
    if (v2) {
        if (createBtn) {
            const userIsAdmin = (typeof isAdmin === 'function') && isAdmin()
            if (userIsAdmin) {
                // Admin keeps a visible affordance but it routes them to admin panel.
                createBtn.textContent = '⚙ Admin'
                createBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hidden')
                createBtn.classList.add('tap')
                createBtn.onclick = () => showToast('Use Admin → Leagues to create', 'info')
            } else {
                // Non-admin: button hidden entirely.
                createBtn.classList.add('hidden')
                createBtn.onclick = null
            }
        }
        if (joinWrap) joinWrap.classList.remove('hidden')
        // Render the user's leagues list (no v1 access gate; anyone authenticated can browse their own).
        await _renderMyLeaguesList(container)
        return
    }

    // ---- Legacy v1 path below (only runs when v2 is OFF) ----

    if (!enabled) {
        // Show Coming Soon state
        if (createBtn) {
            createBtn.textContent = 'Coming Soon'
            createBtn.classList.add('opacity-50', 'cursor-not-allowed')
            createBtn.classList.remove('tap', 'hidden')
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
        createBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'hidden')
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
            <div class="w-10 h-10 rounded-xl bg-ink-900 text-white flex items-center justify-center font-bold text-sm shrink-0">${escapeHtml((l.name || 'L').substring(0, 2).toUpperCase())}</div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">${escapeHtml(l.name || '')}</div>
                <div class="text-[11px] text-ink-500 font-mono tracking-wider">${escapeHtml(l.invite_code || '')}</div>
            </div>
            ${activeLeagueId === l.id ? '<span class="text-[10px] font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded-full">ACTIVE</span>' : ''}
            <button onclick="event.stopPropagation(); shareLeagueById('${l.id}')" class="text-ink-400 p-1.5 tap">
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
                ${escapeHtml((l.name || 'L').substring(0, 2).toUpperCase())}
            </div>
            <div class="flex-1 min-w-0">
                <div class="font-semibold text-sm truncate">${escapeHtml(l.name || '')}</div>
                <div class="text-[11px] text-ink-500">
                    ${memberCount} member${memberCount !== 1 ? 's' : ''} · Code: ${escapeHtml(l.invite_code || '')} · by ${escapeHtml(creatorName)}
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
    switchTab('leaderboard', true);
    showToast('Viewing league as admin', 'info');
}

function shareLeagueCode(leagueId, code, name) {
    const appUrl = window.location.origin
    const message = `🏆 Join my WC 2026 Prediction League: *"${name}"*\n\nUse code: *${code}*\n👉 ${appUrl}\n\nLet's see who predicts better! ⚽`
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/?text=${encoded}`, '_blank')
}

// Safer share entry point: looks up the league from in-memory `myLeagues` by id.
// This avoids interpolating user-controlled `name` into an HTML attribute or JS string.
function shareLeagueById(leagueId) {
    const l = (typeof myLeagues !== 'undefined' && myLeagues || []).find(x => x.id === leagueId)
    if (!l) { showToast('League not found', 'error'); return }
    shareLeagueCode(l.id, l.invite_code, l.name || 'Untitled League')
}
window.shareLeagueById = shareLeagueById


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
        .select('user_id, joined_at')
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
            avatar_url: p.avatar_url || null,
            joined_at: row.joined_at || null
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

    // ===== Option A: only count predictions for matches that kicked off
    // after the member joined this league. Late joiners aren't credited for
    // matches that happened before they were in the league.
    //
    // Build a per-user join cutoff map. If joined_at is missing for any
    // reason, fall back to epoch (i.e. count everything) — failing open is
    // safer than zeroing out a real player.
    const joinedAt = {}
    members.forEach(m => {
        joinedAt[m.id] = m.joined_at ? new Date(m.joined_at).getTime() : 0
    })

    // Build a fixture_id → kickoff_ms map from the global fixtures array.
    // If a fixture isn't in the local cache, we skip the row (safer than
    // counting it without knowing whether it qualifies).
    const allFixtures = (typeof window !== 'undefined' && window.fixtures)
        ? window.fixtures
        : (typeof fixtures !== 'undefined' ? fixtures : [])
    const kickoffById = {}
    ;(allFixtures || []).forEach(f => {
        kickoffById[f.id] = f.kickoff ? new Date(f.kickoff).getTime() : null
    })

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
        // Only count this prediction if the fixture's kickoff is at or after
        // the user's join time for this league.
        const ko = kickoffById[r.fixture_id]
        if (ko == null) return                  // unknown fixture → skip
        if (ko < joinedAt[r.user_id]) return    // pre-join match → skip

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
    }
    // Stage v3: hide the "← Global" affordance for users who don't have a
    // global scope (private-only signups). It would be confusing to offer a
    // path back to a league they're not a member of.
    const myProfile = (typeof getProfile === 'function') ? getProfile() : null
    const hasGlobalAccess = myProfile?.fee_paid === true
                            || (typeof isAdmin === 'function' && isAdmin())
    if (!hasGlobalAccess) {
        backBtn.classList.add('hidden')
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
            <p class="text-sm text-ink-500 mt-1">Invite friends with code: ${escapeHtml(league?.invite_code || '---')}</p>
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
                    <span class="player-name truncate">${escapeHtml(s.name || 'Anonymous')}</span>
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


// ============================================================
// GLOBAL ACTIVITY FEED — League Pulse UI + draggable circle FAB
// ============================================================
// Source of truth: public.activity_feed.
// The client only renders what RLS allows it to see. Fallback events remain
// safe and intentionally omit sensitive card/bracket inference.
// ============================================================
(function () {
  const FEED_ROOT_ID = 'global-activity-feed-root';
  const FAB_POS_KEY = 'wcpl-ga-fab-position-v2';
  const FILTERS = [
    { id: 'all',     label: 'All',          types: null },
    { id: 'results', label: 'Result',       types: ['result_published'] },
    { id: 'rank',    label: 'Ranks',        types: ['rank_movement', 'podium_pressure'] },
    { id: 'bracket', label: 'Bracket',      types: ['bracket_status_changed', 'bracket_submitted', 'bracket_payment_pending', 'bracket_payment_verified', 'bracket_points_updated'] },
    { id: 'badges',  label: 'Achievement',  types: ['badge_unlocked', 'centurion_unlocked', 'exact_hunter'] },
    { id: 'system',  label: 'System',       types: ['admin_announcement', 'prediction_locked', 'system_update', 'deadline_warning'] },
    { id: 'cards',   label: 'Cards',        types: ['inventory_card_used', 'inventory_card_impact'] }
  ];
  const TYPE_TO_FILTER_ID = (() => {
    const m = {};
    FILTERS.forEach(f => { (f.types || []).forEach(t => { m[t] = f.id; }); });
    return m;
  })();

  const FEED_PAGE_SIZE = 50;
  let activeFeedFilter = 'all';
  let feedOpen = false;
  let lastFeedContext = { stats: [], subtab: 'overall' };
  let backendEvents = [];
  let backendLoaded = false;
  let backendChannel = null;
  let pendingFetchTimer = null;

  function activityEsc(value) {
    if (typeof escapeHtml === 'function') return escapeHtml(value == null ? '' : String(value));
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  function activityRegexEsc(value) {
    return String(value || '').replace(/[.*+?^${}()|[\\\\]]/g, '\\$&');
  }

  function collectActivityNames(text, item) {
    const names = [];
    const meta = (item && item.metadata) || {};
    const directKeys = ['actor_name', 'player_name', 'user_name', 'display_name', 'name', 'profile_name'];
    directKeys.forEach(key => {
      const v = meta[key] || (key === 'actor_name' ? item?.actorName : '');
      if (v && String(v).trim().length >= 3) names.push(String(v).trim());
    });

    const raw = String(text || '').trim();
    const actionMatch = raw.match(/^([A-Za-zÀ-ÖØ-öø-ÿ'’.-]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ'’.-]+){0,3})(?=\s+(got|is|moved|dropped|activated|used|climbed|joined|earned|submitted|entered|unlocked)\b)/i);
    if (actionMatch && actionMatch[1]) names.push(actionMatch[1].trim());

    return [...new Set(names)]
      .filter(name => name && name.length >= 3)
      .sort((a, b) => b.length - a.length);
  }

  function activityTextHtml(text, item) {
    const raw = String(text == null ? '' : text);
    if (!raw) return '';
    let html = activityEsc(raw);
    const names = collectActivityNames(raw, item);
    names.forEach(name => {
      const safeName = activityEsc(name);
      if (!safeName || !html.includes(safeName)) return;
      const re = new RegExp(`(^|[^A-Za-zÀ-ÖØ-öø-ÿ])(${activityRegexEsc(safeName)})(?=$|[^A-Za-zÀ-ÖØ-öø-ÿ])`, 'i');
      html = html.replace(re, `$1<span class="ga-player-name">$2</span>`);
    });
    return html;
  }

  function activityIcon(name) {
    const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const icons = {
      zap: `<svg ${attrs}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>`,
      bolt: `<svg ${attrs}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>`,
      trendingUp: `<svg ${attrs}><path d="M3 17 9 11l4 4 7-7"/><path d="M14 8h6v6"/></svg>`,
      trendingDown: `<svg ${attrs}><path d="M3 7l6 6 4-4 7 7"/><path d="M14 16h6v-6"/></svg>`,
      crown: `<svg ${attrs}><path d="m2 7 5 5 5-9 5 9 5-5-2 13H4L2 7Z"/><path d="M4 20h16"/></svg>`,
      target: `<svg ${attrs}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
      award: `<svg ${attrs}><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/></svg>`,
      medal: `<svg ${attrs}><path d="M7 2h10l-2 6H9L7 2Z"/><circle cx="12" cy="15" r="5"/><path d="M12 13v4"/><path d="M10 15h4"/></svg>`,
      shield: `<svg ${attrs}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M12 8v5"/><path d="M12 17h.01"/></svg>`,
      flame: `<svg ${attrs}><path d="M8.5 14.5A4.5 4.5 0 0 0 13 22a7 7 0 0 0 7-7c0-4-3-6-4-9-1 3-3 4-5 6-1.5-2-1-4 0-6-4 3-6 6-2.5 8.5Z"/></svg>`,
      cards: `<svg ${attrs}><rect x="7" y="3" width="10" height="14" rx="2"/><path d="M5 7 3.5 17.5A2 2 0 0 0 5.2 20L14 21.2"/><path d="M10 7h4M10 11h4"/></svg>`,
      bracket: `<svg ${attrs}><path d="M6 4h6v5H6zM6 15h6v5H6zM16 9h4v6h-4z"/><path d="M12 6.5h2a2 2 0 0 1 2 2V12M12 17.5h2a2 2 0 0 0 2-2V12"/></svg>`,
      trophy: `<svg ${attrs}><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 7H4a3 3 0 0 0 3 3"/><path d="M17 7h3a3 3 0 0 1-3 3"/></svg>`,
      lock: `<svg ${attrs}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><path d="M12 15v2"/></svg>`,
      chart: `<svg ${attrs}><path d="M4 19V5"/><path d="M4 19h16"/><rect x="7" y="12" width="3" height="4" rx="1"/><rect x="12" y="9" width="3" height="7" rx="1"/><rect x="17" y="6" width="3" height="10" rx="1"/></svg>`,
      check: `<svg ${attrs}><path d="M20 6 9 17l-5-5"/></svg>`,
      x: `<svg ${attrs}><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>`,
      megaphone: `<svg ${attrs}><path d="M3 11v2a3 3 0 0 0 3 3l9 4V4L6 8H6a3 3 0 0 0-3 3Z"/><path d="M18 8a4 4 0 0 1 0 8"/></svg>`
    };
    return icons[name] || icons.zap;
  }

  function timeAgo(iso) {
    try {
      const d = new Date(iso);
      const diff = Date.now() - d.getTime();
      if (!Number.isFinite(diff)) return 'Just now';
      const s = Math.floor(diff / 1000);
      if (s < 30) return 'Just now';
      if (s < 60) return s + 's ago';
      const m = Math.floor(s / 60);
      if (m < 60) return m + 'm ago';
      const h = Math.floor(m / 60);
      if (h < 24) return h + 'h ago';
      const days = Math.floor(h / 24);
      if (days < 7) return days + 'd ago';
      return d.toLocaleDateString();
    } catch (_) { return 'Just now'; }
  }

  function getPlayerIdSafe() {
    try {
      const u = (typeof getUser === 'function') ? getUser() : (typeof currentUser !== 'undefined' ? currentUser : null);
      return u?.id || null;
    } catch (_) { return null; }
  }

  function pointsText(n) {
    const x = Number(n || 0);
    return `${x} pt${x === 1 ? '' : 's'}`;
  }

  function initialsFromName(name) {
    try {
      if (typeof getInitials === 'function') return getInitials(name || '');
      const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return '•';
      return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
    } catch (_) { return '•'; }
  }

  function metadataValue(meta, keys) {
    if (!meta || typeof meta !== 'object') return '';
    for (const key of keys) {
      const value = meta[key];
      if (value !== undefined && value !== null && String(value).trim()) return String(value);
    }
    return '';
  }

  function extractScoreBadge(item) {
    const meta = item.metadata || {};
    const direct = metadataValue(meta, ['score', 'scoreline', 'result_score']);
    if (direct) return direct.replace(/[–—]/g, '-');
    const text = `${item.title || ''} ${item.body || ''}`;
    const m = text.match(/\b(\d{1,2})\s*[–-]\s*(\d{1,2})\b/);
    return m ? `${m[1]} - ${m[2]}` : '';
  }

  function rowToEvent(row) {
    const meta = row.metadata || {};
    const actorName = metadataValue(meta, ['actor_name', 'player_name', 'name', 'user_name', 'display_name']);
    const avatarUrl = metadataValue(meta, ['actor_avatar_url', 'avatar_url', 'profile_image_url', 'profile_url', 'photo_url']);
    return {
      id: row.id,
      type: row.type,
      filterId: TYPE_TO_FILTER_ID[row.type] || 'all',
      icon: row.icon || defaultIconFor(row.type, row.tone, row.title),
      tone: row.tone || defaultToneFor(row.type),
      title: row.title || '',
      body: row.message || '',
      meta: meta.meta_label || timeAgo(row.created_at),
      metadata: meta,
      actorName,
      avatarUrl,
      source: 'backend'
    };
  }

  function defaultToneFor(type) {
    switch (type) {
      case 'rank_movement': return 'gold';
      case 'podium_pressure': return 'rose';
      case 'badge_unlocked':
      case 'centurion_unlocked':
      case 'exact_hunter': return 'green';
      case 'result_published': return 'red';
      case 'inventory_card_used':
      case 'inventory_card_impact': return 'blue';
      case 'bracket_status_changed':
      case 'bracket_submitted':
      case 'bracket_payment_pending':
      case 'bracket_payment_verified':
      case 'bracket_points_updated': return 'violet';
      case 'admin_announcement': return 'orange';
      default: return 'blue';
    }
  }

  function defaultIconFor(type, tone, title) {
    const t = String(title || '').toLowerCase();
    switch (type) {
      case 'rank_movement': return t.includes('#1') || t.includes('rank #1') ? 'crown' : 'chart';
      case 'podium_pressure': return 'shield';
      case 'badge_unlocked': return 'award';
      case 'centurion_unlocked': return 'medal';
      case 'exact_hunter': return 'target';
      case 'result_published': return 'trophy';
      case 'inventory_card_used': return t.includes('insurance') ? 'shield' : 'zap';
      case 'inventory_card_impact': return 'bolt';
      case 'bracket_status_changed':
      case 'bracket_submitted':
      case 'bracket_payment_pending':
      case 'bracket_payment_verified':
      case 'bracket_points_updated': return 'bracket';
      case 'admin_announcement': return 'megaphone';
      case 'prediction_locked': return 'lock';
      default: return tone === 'gold' ? 'crown' : 'zap';
    }
  }

  function feedEvent({ type='zap', filterId='all', icon='zap', tone='blue', title, body, meta='Just now', actorName='', avatarUrl='', metadata={} }) {
    return { type, filterId, icon, tone, title, body, meta, actorName, avatarUrl, metadata, source: 'fallback' };
  }

  async function fetchBackendEvents() {
    if (typeof supabaseClient === 'undefined' || !supabaseClient?.from) return;
    try {
      const { data, error } = await supabaseClient
        .from('activity_feed')
        .select('id, type, title, message, icon, tone, scope, user_id, actor_id, fixture_id, metadata, created_at, visible_after, is_admin_only')
        .order('created_at', { ascending: false })
        .limit(FEED_PAGE_SIZE);
      if (error) {
        if (String(error.code || '') !== '42P01') console.warn('[activity_feed] fetch failed:', error.message || error);
        backendLoaded = true;
        backendEvents = [];
        return;
      }
      const nowMs = Date.now();
      backendEvents = (data || []).filter(r => !r.visible_after || new Date(r.visible_after).getTime() <= nowMs);
      backendLoaded = true;
    } catch (e) {
      console.warn('[activity_feed] fetch exception:', e);
      backendLoaded = true;
      backendEvents = [];
    }
  }

  function scheduleBackendFetch(delayMs = 200) {
    clearTimeout(pendingFetchTimer);
    pendingFetchTimer = setTimeout(() => fetchBackendEvents().then(renderIfVisible), delayMs);
  }

  function renderIfVisible() {
    if (document.getElementById(FEED_ROOT_ID)) updateGlobalActivityFeed(lastFeedContext);
  }

  function ensureBackendChannel() {
    if (backendChannel || typeof supabaseClient === 'undefined' || !supabaseClient?.channel) return;
    try {
      backendChannel = supabaseClient
        .channel('activity_feed')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'activity_feed' }, () => scheduleBackendFetch(150))
        .subscribe((status) => {
          if (status !== 'SUBSCRIBED') console.log('[activity_feed] channel status:', status);
        });
    } catch (e) {
      console.warn('[activity_feed] realtime setup failed:', e);
    }
  }

  function fallbackRankEvents(stats, subtab) {
    const events = [];
    if (!Array.isArray(stats) || !stats.length || subtab === 'matchday') return events;
    const myId = getPlayerIdSafe();
    const leader = stats[0];
    const leaderPoints = Number(leader?.points || 0);
    if (leader && leaderPoints > 0) {
      events.push(feedEvent({
        type: 'rank_movement', filterId: 'rank', icon: 'crown', tone: 'gold',
        title: 'Leader watch',
        body: `${leader.name || 'The leader'} is setting the pace with ${pointsText(leaderPoints)}.`,
        meta: 'Live leaderboard',
        actorName: leader.name || '',
        avatarUrl: leader.avatar_url || ''
      }));
    }
    const myIdx = myId ? stats.findIndex(s => (s.user_id || s.id) === myId) : -1;
    if (myIdx > 0) {
      const me = stats[myIdx];
      const target = stats[myIdx - 1];
      const need = Math.max(1, Number(target.points || 0) - Number(me.points || 0) + 1);
      events.push(feedEvent({
        type: 'podium_pressure', filterId: 'rank', icon: 'target', tone: 'rose',
        title: 'Podium pressure',
        body: `You need ${pointsText(need)} to overtake ${target.name || 'the player above you'}.`,
        meta: `Rank ${myIdx + 1} pressure`,
        actorName: me.name || '',
        avatarUrl: me.avatar_url || ''
      }));
    }
    return events;
  }

  function fallbackBadgeEvents(stats, subtab) {
    const events = [];
    if (!Array.isArray(stats) || !stats.length || subtab === 'matchday') return events;
    const exactHunter = stats.slice().sort((a, b) => Number(b.exact || 0) - Number(a.exact || 0))[0];
    if (exactHunter && Number(exactHunter.exact || 0) >= 3) {
      events.push(feedEvent({
        type: 'exact_hunter', filterId: 'badges', icon: 'target', tone: 'green',
        title: 'Exact hunter alert',
        body: `${exactHunter.name || 'A player'} leads precision with ${exactHunter.exact} exact score${Number(exactHunter.exact) === 1 ? '' : 's'}.`,
        meta: 'Precision matters',
        actorName: exactHunter.name || '',
        avatarUrl: exactHunter.avatar_url || ''
      }));
    }
    const centurion = stats.find(s => Number(s.points || 0) >= 100);
    if (centurion) {
      events.push(feedEvent({
        type: 'centurion_unlocked', filterId: 'badges', icon: 'medal', tone: 'gold',
        title: '100 Club unlocked',
        body: `${centurion.name || 'A player'} has crossed ${pointsText(100)}.`,
        meta: 'Milestone badge',
        actorName: centurion.name || '',
        avatarUrl: centurion.avatar_url || ''
      }));
    }
    return events;
  }

  function fallbackResultEvents() {
    const events = [];
    try {
      const scored = (typeof fixtures !== 'undefined' && Array.isArray(fixtures) ? fixtures : [])
        .filter(f => f && f.home_score !== null && f.away_score !== null)
        .sort((a, b) => new Date(b.kickoff || 0) - new Date(a.kickoff || 0));
      if (scored[0]) {
        const f = scored[0];
        events.push(feedEvent({
          type: 'result_published', filterId: 'results', icon: 'trophy', tone: 'red',
          title: `Admin published results for ${f.home_team || 'Home'} vs ${f.away_team || 'Away'}`,
          body: `${f.stage || 'Match'} result.`,
          meta: timeAgo(f.kickoff),
          metadata: { score: `${f.home_score} - ${f.away_score}` }
        }));
      }
    } catch (_) {}
    return events;
  }

  function buildFallbackEvents(context) {
    const stats = Array.isArray(context.stats) ? context.stats : (window.__wcplLatestLeaderboardStats || []);
    const subtab = context.subtab || window.__wcplLatestLeaderboardSubtab || 'overall';
    return [
      ...fallbackRankEvents(stats, subtab),
      ...fallbackBadgeEvents(stats, subtab),
      ...fallbackResultEvents()
    ];
  }

  function buildGlobalActivityEvents(context = lastFeedContext) {
    const backend = backendEvents.map(rowToEvent);
    if (backend.length > 0) return backend.slice(0, FEED_PAGE_SIZE);
    return buildFallbackEvents(context).slice(0, 18);
  }

  function avatarHtml(item) {
    const name = item.actorName || metadataValue(item.metadata, ['player_name', 'actor_name', 'name']);
    if (!name && !item.avatarUrl) return '';
    const safeName = activityEsc(name || 'Player');
    const initials = activityEsc(initialsFromName(name));
    if (item.avatarUrl) {
      return `<div class="ga-feed-avatar" title="${safeName}"><img src="${activityEsc(item.avatarUrl)}" alt="${safeName}" loading="lazy" onerror="this.remove();this.parentElement.textContent='${initials}'"></div>`;
    }
    return `<div class="ga-feed-avatar ga-feed-avatar-initials" title="${safeName}">${initials}</div>`;
  }

  function feedItemHtml(item) {
    const av = avatarHtml(item);
    const score = item.filterId === 'results' ? extractScoreBadge(item) : '';
    const hasAvatarClass = av ? ' has-avatar' : '';
    return `
      <article class="ga-feed-item ga-tone-${activityEsc(item.tone)}${hasAvatarClass}" data-feed-type="${activityEsc(item.filterId || item.type)}">
        <div class="ga-feed-icon">${activityIcon(item.icon)}</div>
        ${av}
        <div class="ga-feed-copy">
          <div class="ga-feed-title">${activityTextHtml(item.title, item)}</div>
          ${item.body ? `<div class="ga-feed-body">${activityTextHtml(item.body, item)}</div>` : ''}
          <div class="ga-feed-meta">${activityEsc(item.meta || 'Live')}</div>
        </div>
        ${score ? `<div class="ga-score-pill">${activityEsc(score)}</div>` : ''}
      </article>`;
  }

  function emptyFeedHtml() {
    return `
      <div class="ga-empty-state">
        <div class="ga-empty-icon">${activityIcon('zap')}</div>
        <div class="ga-empty-title">No activity yet</div>
        <p>Rank moves, achievements, cards, bracket updates and results will appear here.</p>
      </div>`;
  }

  function readSavedFabPosition() {
    try {
      const raw = localStorage.getItem(FAB_POS_KEY);
      if (!raw) return null;
      const pos = JSON.parse(raw);
      if (!Number.isFinite(pos.left) || !Number.isFinite(pos.top)) return null;
      return pos;
    } catch (_) { return null; }
  }

  function fabEdgeMargin() {
    return Math.max(14, Number(getComputedStyle(document.documentElement).getPropertyValue('--safe-fab-margin').replace('px', '')) || 14);
  }

  function clampFabPosition(pos, fab) {
    const rect = fab.getBoundingClientRect();
    const w = rect.width || 46;
    const h = rect.height || 46;
    const margin = fabEdgeMargin();
    const maxLeft = Math.max(margin, window.innerWidth - w - margin);
    const maxTop = Math.max(margin, window.innerHeight - h - margin);
    return {
      left: Math.min(Math.max(Number(pos.left) || margin, margin), maxLeft),
      top: Math.min(Math.max(Number(pos.top) || margin, margin), maxTop)
    };
  }

  function applyFabPosition(fab, pos, persist) {
    const safe = clampFabPosition(pos, fab);
    fab.style.left = safe.left + 'px';
    fab.style.top = safe.top + 'px';
    fab.style.right = 'auto';
    fab.style.bottom = 'auto';
    fab.dataset.positioned = 'true';
    if (persist) {
      try { localStorage.setItem(FAB_POS_KEY, JSON.stringify(safe)); } catch (_) {}
    }
  }

  function snapFabPosition(fab, pos, persist, animate) {
    const safe = clampFabPosition(pos, fab);
    const rect = fab.getBoundingClientRect();
    const w = rect.width || 46;
    const margin = fabEdgeMargin();
    const snapLeft = (safe.left + w / 2) < (window.innerWidth / 2)
      ? margin
      : Math.max(margin, window.innerWidth - w - margin);
    const target = { left: snapLeft, top: safe.top };
    if (animate) {
      fab.classList.add('snapping');
      window.setTimeout(() => fab.classList.remove('snapping'), 260);
    }
    applyFabPosition(fab, target, persist);
  }

  function restoreFabPosition(fab) {
    const saved = readSavedFabPosition();
    if (saved) snapFabPosition(fab, saved, true, false);
  }

  function isGlobalActivityAppOpen() {
    const shell = document.getElementById('app-shell');
    const auth = document.getElementById('auth-screen');
    const shellVisible = !!shell && !shell.classList.contains('hidden') && getComputedStyle(shell).display !== 'none';
    const authVisible = !!auth && !auth.classList.contains('hidden') && getComputedStyle(auth).display !== 'none';
    return shellVisible && !authVisible;
  }

  function closeGlobalActivityPanelSilently() {
    feedOpen = false;
    const panel = document.getElementById('global-activity-panel');
    const backdrop = document.getElementById('global-activity-backdrop');
    const fab = document.getElementById('global-activity-fab');
    panel?.classList.remove('open');
    panel?.setAttribute('aria-hidden', 'true');
    if (backdrop) { backdrop.classList.remove('open'); backdrop.hidden = true; }
    fab?.classList.remove('is-open');
    document.body.classList.remove('ga-feed-open');
  }

  function syncGlobalActivityFeedVisibility() {
    const root = document.getElementById(FEED_ROOT_ID);
    if (!root) return false;
    const allowed = isGlobalActivityAppOpen();
    root.classList.toggle('ga-feed-auth-hidden', !allowed);
    if (!allowed) closeGlobalActivityPanelSilently();
    return allowed;
  }

  function setupGlobalActivityFabDrag(fab) {
    if (!fab || fab.__gaDragBound) return;
    fab.__gaDragBound = true;
    restoreFabPosition(fab);

    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let moved = false;
    let rafId = null;
    let queuedPos = null;

    function flushDragFrame() {
      rafId = null;
      if (!queuedPos) return;
      applyFabPosition(fab, queuedPos, false);
      queuedPos = null;
    }

    function queueFabPosition(pos) {
      queuedPos = pos;
      if (rafId) return;
      rafId = requestAnimationFrame(flushDragFrame);
    }

    fab.addEventListener('click', (e) => {
      if (fab.__gaDragJustEnded) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      setGlobalActivityFeedOpen(true);
    });

    fab.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      pointerId = e.pointerId;
      moved = false;
      queuedPos = null;
      const rect = fab.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;
      fab.classList.add('dragging');
      try { fab.setPointerCapture(pointerId); } catch (_) {}
    });

    fab.addEventListener('pointermove', (e) => {
      if (pointerId !== e.pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
      if (!moved) return;
      e.preventDefault();
      queueFabPosition({ left: startLeft + dx, top: startTop + dy });
    }, { passive: false });

    function finishDrag(e) {
      if (pointerId !== null && e.pointerId !== pointerId) return;
      try { fab.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
        flushDragFrame();
      }
      fab.classList.remove('dragging');
      if (moved) {
        const rect = fab.getBoundingClientRect();
        snapFabPosition(fab, { left: rect.left, top: rect.top }, true, true);
        fab.__gaDragJustEnded = true;
        setTimeout(() => { fab.__gaDragJustEnded = false; }, 240);
      }
      queuedPos = null;
    }

    fab.addEventListener('pointerup', finishDrag);
    fab.addEventListener('pointercancel', finishDrag);

    window.addEventListener('resize', () => {
      if (!fab.dataset.positioned) return;
      const rect = fab.getBoundingClientRect();
      snapFabPosition(fab, { left: rect.left, top: rect.top }, true, false);
    });
  }

  function ensureGlobalActivityFeedUI() {
    if (document.getElementById(FEED_ROOT_ID)) {
      syncGlobalActivityFeedVisibility();
      return;
    }
    const root = document.createElement('div');
    root.id = FEED_ROOT_ID;
    root.innerHTML = `
      <button type="button" id="global-activity-fab" class="ga-fab tap" aria-label="Open League Pulse">
        ${activityIcon('zap')}
        <span class="ga-fab-dot" aria-hidden="true"></span>
      </button>
      <div id="global-activity-backdrop" class="ga-backdrop" hidden></div>
      <aside id="global-activity-panel" class="ga-panel" aria-hidden="true" aria-label="League Pulse">
        <header class="ga-panel-header">
          <div>
            <h3><span aria-hidden="true">🔥</span> League Pulse</h3>
            <p>Live updates from the league</p>
          </div>
          <button type="button" id="global-activity-close" class="ga-close tap" aria-label="Close League Pulse">${activityIcon('x')}</button>
        </header>
        <nav class="ga-filters" aria-label="Activity filters">
          ${FILTERS.map(f => `<button type="button" class="ga-filter ${f.id === activeFeedFilter ? 'active' : ''}" data-ga-filter="${f.id}">${f.label}</button>`).join('')}
        </nav>
        <div id="global-activity-list" class="ga-list"></div>
      </aside>`;
    document.body.appendChild(root);
    syncGlobalActivityFeedVisibility();

    ['app-shell', 'auth-screen'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      try {
        new MutationObserver(syncGlobalActivityFeedVisibility).observe(el, { attributes: true, attributeFilter: ['class', 'style'] });
      } catch (_) {}
    });

    setupGlobalActivityFabDrag(root.querySelector('#global-activity-fab'));
    root.querySelector('#global-activity-close')?.addEventListener('click', () => setGlobalActivityFeedOpen(false));
    root.querySelector('#global-activity-backdrop')?.addEventListener('click', () => setGlobalActivityFeedOpen(false));
    root.querySelectorAll('[data-ga-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFeedFilter = btn.dataset.gaFilter || 'all';
        root.querySelectorAll('[data-ga-filter]').forEach(x => x.classList.toggle('active', x === btn));
        updateGlobalActivityFeed(lastFeedContext);
      });
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && feedOpen) setGlobalActivityFeedOpen(false);
    });
    updateGlobalActivityFeed(lastFeedContext);
  }

  function setGlobalActivityFeedOpen(open) {
    ensureGlobalActivityFeedUI();
    if (open && !syncGlobalActivityFeedVisibility()) return;
    feedOpen = !!open;
    const panel = document.getElementById('global-activity-panel');
    const backdrop = document.getElementById('global-activity-backdrop');
    const fab = document.getElementById('global-activity-fab');
    if (panel) {
      panel.classList.toggle('open', feedOpen);
      panel.setAttribute('aria-hidden', feedOpen ? 'false' : 'true');
    }
    if (backdrop) {
      backdrop.hidden = !feedOpen;
      requestAnimationFrame(() => backdrop.classList.toggle('open', feedOpen));
    }
    if (fab) fab.classList.toggle('is-open', feedOpen);
    document.body.classList.toggle('ga-feed-open', feedOpen);
    if (feedOpen) scheduleBackendFetch(0);
  }

  function updateGlobalActivityFeed(context = {}) {
    lastFeedContext = {
      stats: Array.isArray(context.stats) ? context.stats : (lastFeedContext.stats || []),
      subtab: context.subtab || lastFeedContext.subtab || 'overall'
    };
    ensureGlobalActivityFeedUI();
    syncGlobalActivityFeedVisibility();
    const list = document.getElementById('global-activity-list');
    const fab = document.getElementById('global-activity-fab');
    if (!list) return;
    const allEvents = buildGlobalActivityEvents(lastFeedContext);
    const filtered = activeFeedFilter === 'all'
      ? allEvents
      : allEvents.filter(e => (e.filterId || TYPE_TO_FILTER_ID[e.type] || e.type) === activeFeedFilter);
    list.innerHTML = filtered.length ? filtered.map(feedItemHtml).join('') : emptyFeedHtml();
    if (fab) fab.classList.toggle('has-activity', allEvents.length > 0);
  }

  window.ensureGlobalActivityFeedUI = ensureGlobalActivityFeedUI;
  window.updateGlobalActivityFeed = updateGlobalActivityFeed;
  window.setGlobalActivityFeedOpen = setGlobalActivityFeedOpen;
  window.refreshActivityFeed = () => scheduleBackendFetch(0);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureGlobalActivityFeedUI, { once: true });
  } else {
    ensureGlobalActivityFeedUI();
  }

  (function bootBackend(attempt = 0) {
    if (typeof supabaseClient !== 'undefined' && supabaseClient?.from) {
      fetchBackendEvents().then(renderIfVisible);
      ensureBackendChannel();
    } else if (attempt < 20) {
      setTimeout(() => bootBackend(attempt + 1), 250);
    }
  })();

  setInterval(() => {
    syncGlobalActivityFeedVisibility();
    if (document.getElementById(FEED_ROOT_ID) && feedOpen) updateGlobalActivityFeed(lastFeedContext);
  }, 30000);

  setInterval(() => {
    syncGlobalActivityFeedVisibility();
    if (document.getElementById(FEED_ROOT_ID)) scheduleBackendFetch(0);
  }, 60000);
})();

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
// ─────────────────────────────────────────────────────────────
// Auto-hide bottom nav AND top header on scroll (X / Twitter style)
//   - scroll down  → hide
//   - scroll up    → show
//   - near top     → always show
//   - small jitters ignored via threshold
// ─────────────────────────────────────────────────────────────
;(function setupAutoHideNav() {
  const nav = document.getElementById('app-nav')
  const headers = document.querySelectorAll('.app-header')
  if (!nav && !headers.length) return

  if (nav) {
    nav.style.transition = 'transform 220ms ease-in-out'
    nav.style.willChange = 'transform'
  }
  headers.forEach(h => {
    h.style.transition = 'transform 220ms ease-in-out'
    h.style.willChange = 'transform'
  })

  let lastY = window.scrollY || 0
  let hidden = false
  let ticking = false
  const THRESHOLD = 8       // ignore tiny scrolls
  const TOP_BUFFER = 40     // always show near the top

  function setHidden(shouldHide) {
    if (shouldHide === hidden) return
    if (shouldHide) {
      if (nav) nav.style.transform = 'translateY(110%)'
      headers.forEach(h => { h.style.transform = 'translateY(-110%)' })
    } else {
      if (nav) nav.style.transform = 'translateY(0)'
      headers.forEach(h => { h.style.transform = 'translateY(0)' })
    }
    hidden = shouldHide
  }

  function update() {
    const y = window.scrollY || 0
    const delta = y - lastY

    if (Math.abs(delta) < THRESHOLD) { ticking = false; return }

    if (y < TOP_BUFFER)         setHidden(false)
    else if (delta > 0)         setHidden(true)
    else if (delta < 0)         setHidden(false)

    lastY = y
    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true }
  }, { passive: true })

  // ───────────────────────────────────────────────────────────
  // Auto-hide header for in-panel scroll containers.
  // Fixed-position overlays (e.g. #bracket-panel) scroll their own
  // inner div, NOT window. Mirror the same behavior for each one.
  // Hides only the header element *inside* that panel.
  // ───────────────────────────────────────────────────────────
  function attachPanelScrollAutoHide(scrollContainerId) {
    const container = document.getElementById(scrollContainerId)
    if (!container) return
    const panel = container.closest('.fixed') || container.parentElement
    if (!panel) return
    const localHeader = panel.querySelector('.app-header, header')
    if (!localHeader) return

    localHeader.style.transition = 'transform 220ms ease-in-out'
    localHeader.style.willChange = 'transform'

    let lastLocalY = container.scrollTop || 0
    let localHidden = false
    let localTicking = false

    function setLocalHidden(shouldHide) {
      if (shouldHide === localHidden) return
      localHeader.style.transform = shouldHide ? 'translateY(-110%)' : 'translateY(0)'
      localHidden = shouldHide
    }

    function localUpdate() {
      const y = container.scrollTop || 0
      const delta = y - lastLocalY
      if (Math.abs(delta) < THRESHOLD) { localTicking = false; return }
      if (y < TOP_BUFFER)      setLocalHidden(false)
      else if (delta > 0)      setLocalHidden(true)
      else if (delta < 0)      setLocalHidden(false)
      lastLocalY = y
      localTicking = false
    }

    container.addEventListener('scroll', () => {
      if (!localTicking) { requestAnimationFrame(localUpdate); localTicking = true }
    }, { passive: true })

    // Reset header on panel open (in case it was previously translated off-screen
    // and the user re-opens the panel at the top).
    const observer = new MutationObserver(() => {
      const isOpen = !panel.classList.contains('hidden')
      if (isOpen) {
        lastLocalY = container.scrollTop || 0
        setLocalHidden(false)
      }
    })
    observer.observe(panel, { attributes: true, attributeFilter: ['class'] })
  }

  attachPanelScrollAutoHide('bracket-content')
  // Other panels can be added here later if needed:
  // attachPanelScrollAutoHide('some-other-panel-content')
})()

/* ============================================================
   LEADERBOARD READABILITY + PERFORMANCE POLISH
   Added 2026-06-21
   Keeps this as a JS-only patch: injects final CSS after index.html styles.
   ============================================================ */
(function installLeaderboardReadabilityPolish() {
  const STYLE_ID = 'wcpl-leaderboard-readability-polish';

  function injectPolishStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* ---------- Leaderboard rows: more name space, smaller avatars, trend closer to points ---------- */
      #leaderboard-list.lb-v2-list,
      #leaderboard-list {
        gap: 8px !important;
        -webkit-overflow-scrolling: touch !important;
        transform: translateZ(0) !important;
        will-change: scroll-position !important;
      }

      .lb-row.lb-v2-row {
        /* 5 grid tracks: Rank/Avatar | Name/Badges | SPACER (1fr) | Trend | Points
           Name column sizes to content; spacer eats all slack so trend+pts
           hug the right edge instead of drifting next to the name. */
        display: grid !important;
        grid-template-columns: 66px minmax(0, auto) 1fr 42px 48px !important;
        min-height: 88px !important;
        padding: 10px 10px 10px 7px !important;
        column-gap: 5px !important;
        align-items: center !important;
        contain: layout paint style !important;
        transform: translateZ(0) !important;
        backface-visibility: hidden !important;
        transition: box-shadow 160ms ease, border-color 160ms ease, background 160ms ease !important;
      }

      .lb-v2-table-head {
        display: grid !important;
        grid-template-columns: 66px minmax(0, auto) 1fr 42px 48px !important;
        padding-left: 8px !important;
        padding-right: 10px !important;
        column-gap: 5px !important;
        align-items: center !important;
      }

      .lb-v2-table-head span {
        display: block !important;
        min-width: 0 !important;
        white-space: nowrap !important;
        overflow: visible !important;
        text-overflow: clip !important;
        font-size: 7.8px !important;
        letter-spacing: 0.055em !important;
        line-height: 1.05 !important;
      }

      /* Header label positions must mirror the row cell positions so labels
         sit directly above their values — never stacked over each other.
         Trend sits in col 4, Pts in col 5 (col 3 is the spacer). */
      .lb-v2-table-head span:nth-child(3) {  /* Trend */
        grid-column: 4 !important;
        justify-self: center !important;
        text-align: center !important;
      }
      .lb-v2-table-head span:nth-child(4) {  /* Pts */
        grid-column: 5 !important;
        justify-self: end !important;
        text-align: right !important;
        padding-right: 2px !important;
      }

      .lb-v2-rank-avatar {
        grid-template-columns: 28px 48px !important;
        gap: 7px !important;
        align-items: center !important;
      }

      .lb-v2-row .lb-avatar {
        width: 48px !important;
        height: 48px !important;
        min-width: 48px !important;
        min-height: 48px !important;
        font-size: 14px !important;
        border-width: 2.5px !important;
        box-shadow: 0 7px 15px rgba(15,23,42,.12) !important;
      }

      .lb-v2-main {
        min-width: 0 !important;
        padding-left: 5px !important;
        padding-right: 4px !important;
        overflow: hidden !important;
      }

      .lb-v2-name-line {
        display: flex !important;
        align-items: flex-start !important;
        gap: 5px !important;
        width: 100% !important;
        min-width: 0 !important;
        overflow: visible !important;
      }

      .lb-v2-name {
        display: block !important;
        flex: 1 1 auto !important;
        min-width: 0 !important;
        max-width: none !important;
        white-space: normal !important;
        overflow: visible !important;
        text-overflow: clip !important;
        word-break: normal !important;
        overflow-wrap: anywhere !important;
        font-size: 13.6px !important;
        line-height: 1.12 !important;
        letter-spacing: -0.035em !important;
      }

      .lb-v2-stats {
        margin-top: 4px !important;
        font-size: 9.6px !important;
        gap: 7px !important;
      }

      .lb-v2-chips {
        margin-top: 5px !important;
        max-height: 20px !important;
        max-width: 100% !important;
        overflow: hidden !important;
      }

      .lb-v2-trend {
        grid-column: 4 !important;
        width: 42px !important;
        min-width: 42px !important;
        justify-self: center !important;
        display: flex !important;
        justify-content: center !important;
        transform: none !important;
        z-index: 4 !important;
      }

      .lb-v2-trend .rank-trend {
        min-width: 34px !important;
        width: 34px !important;
        justify-content: center !important;
        height: 22px !important;
        line-height: 20px !important;
        padding: 0 5px !important;
        font-size: 9px !important;
        font-variant-numeric: tabular-nums !important;
        box-shadow: 0 3px 8px rgba(15,23,42,.08) !important;
      }

      .lb-v2-points {
        grid-column: 5 !important;
        width: 48px !important;
        min-width: 48px !important;
        justify-self: end !important;
        padding-right: 0 !important;
        padding-left: 2px !important;
        text-align: right !important;
      }

     .lb-row.lb-v2-row[data-rank="1"] .lb-v2-points .points-num,
      .lb-podium-player.rank-1 .lb-podium-points {
        transform-origin: center !important;
      }

      @keyframes lbPointsBreath {
        0%, 100% { transform: translateZ(0) scale(1); text-shadow: 0 0 0 rgba(18,52,90,0); }
        50% { transform: translateZ(0) scale(1.045); text-shadow: 0 5px 14px rgba(18,52,90,.20); }
      }

      .pts-pulse,
      .points-num.pts-pulse {
        animation: lbPointsPop 720ms cubic-bezier(.2,.85,.2,1) 1 !important;
      }

      @keyframes lbPointsPop {
        0% { transform: scale(1); }
        38% { transform: scale(1.24); text-shadow: 0 0 18px rgba(212,162,76,.55); }
        100% { transform: scale(1); }
      }

      /* ---------- Less jank while the user is actively scrolling ---------- */
      body.is-scrolling-leaderboard .lb-row.lb-v2-row,
      body.is-scrolling-leaderboard .lb-row.lb-v2-row *,
      body.is-scrolling-leaderboard .lb-v2-points .points-num,
      body.is-scrolling-leaderboard .leader-crown-svg,
      body.is-scrolling-leaderboard .lb-v2-leader-crown,
      body.is-scrolling-leaderboard .leader-crown-sparkle {
        animation-play-state: paused !important;
        transition: none !important;
      }

      body.is-scrolling-leaderboard .lb-row.lb-v2-row {
        box-shadow: 0 3px 10px rgba(15,23,42,.045), inset 0 1px 0 rgba(255,255,255,.92) !important;
      }

      /* ---------- Achievement icons: slightly bigger without stretching the card ---------- */
      .badge-flip-front .badge-icon-art,
      .badge-flip-front .badge-img-asset {
        width: 54px !important;
        height: 54px !important;
      }

      .badge-flip-front .badge-icon {
        margin-bottom: 5px !important;
      }

      .badge-flip-front .badge-name {
        font-size: 11.5px !important;
        line-height: 1.12 !important;
      }

      .badge-icon-art {
        width: 68px !important;
        height: 68px !important;
      }

      /* Profile header avatar: a touch smaller so the header breathes better. */
      .profile-premium-avatar {
        width: 76px !important;
        height: 76px !important;
        font-size: 27px !important;
      }
      .profile-premium-online {
        width: 21px !important;
        height: 21px !important;
        border-width: 3px !important;
      }

      /* Dark mode versions for the new overrides. */
      html.dark-mode .lb-v2-points .points-num,
      html.dark-mode .points-num[data-points-el] {
        color: #EAF0FA !important;
      }
      html.dark-mode .lb-v2-name { color: #F8FAFC !important; }

      @media (min-width: 390px) and (max-width: 460px) {
        .lb-row.lb-v2-row,
        .lb-v2-table-head {
          grid-template-columns: 66px minmax(0, auto) 1fr 42px 48px !important;
          column-gap: 5px !important;
        }
        .lb-v2-name { font-size: 13.6px !important; }
        .lb-v2-trend { transform: none !important; }
      }

      @media (max-width: 380px) {
        .lb-row.lb-v2-row,
        .lb-v2-table-head {
          grid-template-columns: 60px minmax(0, auto) 1fr 38px 44px !important;
          column-gap: 4px !important;
          padding-right: 9px !important;
        }
        .lb-v2-table-head span { font-size: 7.2px !important; letter-spacing: 0.045em !important; }
        .lb-row.lb-v2-row { min-height: 84px !important; }
        .lb-v2-rank-avatar { grid-template-columns: 24px 41px !important; gap: 5px !important; }
        .lb-v2-row .lb-avatar {
          width: 41px !important;
          height: 41px !important;
          min-width: 41px !important;
          min-height: 41px !important;
          font-size: 13px !important;
        }
        .lb-v2-main { padding-left: 4px !important; padding-right: 2px !important; }
        .lb-v2-name { font-size: 12.2px !important; line-height: 1.12 !important; }
        .lb-v2-stats { font-size: 8.5px !important; gap: 5px !important; }
        .lb-v2-trend { width: 38px !important; min-width: 38px !important; transform: none !important; }
        .lb-v2-trend .rank-trend { width: 32px !important; min-width: 32px !important; height: 20px !important; line-height: 18px !important; font-size: 8.2px !important; padding: 0 4px !important; }
        .lb-v2-points { width: 44px !important; min-width: 44px !important; padding-right: 0 !important; padding-left: 1px !important; }
        .lb-v2-points .points-num { font-size: 22px !important; }
        .badge-flip-front .badge-icon-art,
        .badge-flip-front .badge-img-asset { width: 50px !important; height: 50px !important; }
        .badge-icon-art { width: 64px !important; height: 64px !important; }
        .profile-premium-avatar { width: 72px !important; height: 72px !important; font-size: 25px !important; }
      }

      @media (prefers-reduced-motion: reduce) {
        .lb-v2-points .points-num,
        .points-num[data-points-el],
        .pts-pulse,
        .points-num.pts-pulse {
          animation: none !important;
        }
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  function markLeaderboardScroll() {
    const active = document.getElementById('tab-leaderboard');
    if (!active || active.classList.contains('hidden')) return;
    document.body.classList.add('is-scrolling-leaderboard');
    clearTimeout(markLeaderboardScroll._timer);
    markLeaderboardScroll._timer = setTimeout(() => {
      document.body.classList.remove('is-scrolling-leaderboard');
    }, 140);
  }

  function bindScrollPerformanceGuard() {
    if (bindScrollPerformanceGuard._bound) return;
    bindScrollPerformanceGuard._bound = true;
    window.addEventListener('scroll', markLeaderboardScroll, { passive: true });
    window.addEventListener('touchmove', markLeaderboardScroll, { passive: true });
    const main = document.getElementById('app-main');
    if (main) main.addEventListener('scroll', markLeaderboardScroll, { passive: true });
  }

  function init() {
    injectPolishStyles();
    bindScrollPerformanceGuard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();

/* ============================================================
   FINAL FIX — Leaderboard Trend + Points column alignment
   Injected after the readability polish so it wins the cascade.
   ============================================================ */
(function installLeaderboardColumnFinalFix() {
  const STYLE_ID = 'wcpl-leaderboard-columns-final-fix';
  const CSS = `

/* ============================================================
   FINAL FIX — Leaderboard Trend + Points column alignment
   2026-06-23
   Locks Trend and Pts into fixed right-side columns, with a real
   flexible spacer between prediction chips and the trend pill.
   ============================================================ */
#leaderboard-list {
  --lb-rank-col: 66px;
  --lb-main-col: clamp(132px, 38vw, 152px);
  --lb-spacer-col: minmax(14px, 1fr);
  --lb-trend-col: 40px;
  --lb-pts-col: 56px;
  --lb-grid-gap: 5px;
}

#leaderboard-list .lb-v2-table-head,
#leaderboard-list .lb-row.lb-v2-row,
.lb-v2-table-head,
.lb-row.lb-v2-row {
  display: grid !important;
  grid-template-columns:
    var(--lb-rank-col)
    var(--lb-main-col)
    var(--lb-spacer-col)
    var(--lb-trend-col)
    var(--lb-pts-col) !important;
  column-gap: var(--lb-grid-gap) !important;
  align-items: center !important;
}

#leaderboard-list .lb-v2-table-head,
.lb-v2-table-head {
  padding-left: 8px !important;
  padding-right: 10px !important;
}

#leaderboard-list .lb-row.lb-v2-row,
.lb-row.lb-v2-row {
  padding-left: 7px !important;
  padding-right: 10px !important;
  overflow: hidden !important;
}

#leaderboard-list .lb-v2-table-head span,
.lb-v2-table-head span {
  min-width: 0 !important;
  white-space: nowrap !important;
  overflow: visible !important;
  text-overflow: clip !important;
}

#leaderboard-list .lb-v2-table-head span:nth-child(1),
.lb-v2-table-head span:nth-child(1) {
  grid-column: 1 !important;
  justify-self: start !important;
  text-align: left !important;
}

#leaderboard-list .lb-v2-table-head span:nth-child(2),
.lb-v2-table-head span:nth-child(2) {
  grid-column: 2 !important;
  justify-self: start !important;
  text-align: left !important;
}

#leaderboard-list .lb-v2-table-head span:nth-child(3),
.lb-v2-table-head span:nth-child(3) {
  grid-column: 4 !important;
  justify-self: center !important;
  text-align: center !important;
}

#leaderboard-list .lb-v2-table-head span:nth-child(4),
.lb-v2-table-head span:nth-child(4) {
  grid-column: 5 !important;
  justify-self: end !important;
  text-align: right !important;
  padding-right: 2px !important;
}

#leaderboard-list .lb-v2-rank-avatar,
.lb-v2-rank-avatar {
  grid-column: 1 !important;
  min-width: 0 !important;
}

#leaderboard-list .lb-v2-main,
.lb-v2-main {
  grid-column: 2 !important;
  min-width: 0 !important;
  max-width: 100% !important;
  overflow: hidden !important;
  padding-right: 0 !important;
}

#leaderboard-list .lb-v2-name-line,
.lb-v2-name-line,
#leaderboard-list .lb-v2-stats,
.lb-v2-stats,
#leaderboard-list .lb-v2-chips,
.lb-v2-chips {
  max-width: 100% !important;
  min-width: 0 !important;
}

#leaderboard-list .lb-v2-chips,
.lb-v2-chips {
  display: flex !important;
  align-items: center !important;
  flex-wrap: nowrap !important;
  overflow: hidden !important;
  padding-right: 0 !important;
}

#leaderboard-list .lb-v2-chip,
.lb-v2-chip {
  flex: 0 0 auto !important;
}

#leaderboard-list .lb-v2-trend,
.lb-v2-trend {
  grid-column: 4 !important;
  width: var(--lb-trend-col) !important;
  min-width: var(--lb-trend-col) !important;
  justify-self: center !important;
  align-self: center !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 !important;
  transform: none !important;
  position: static !important;
  z-index: 4 !important;
  pointer-events: none !important;
}

#leaderboard-list .lb-v2-trend .rank-trend,
.lb-v2-trend .rank-trend {
  width: 34px !important;
  min-width: 34px !important;
  height: 20px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 !important;
  padding: 0 5px !important;
  line-height: 1 !important;
  font-size: 8.8px !important;
  font-weight: 900 !important;
  font-variant-numeric: tabular-nums !important;
}

#leaderboard-list .lb-v2-points,
.lb-v2-points {
  grid-column: 5 !important;
  width: var(--lb-pts-col) !important;
  min-width: var(--lb-pts-col) !important;
  justify-self: end !important;
  align-self: center !important;
  margin: 0 !important;
  padding: 0 !important;
  text-align: right !important;
  position: static !important;
  transform: none !important;
  z-index: 4 !important;
}

#leaderboard-list .lb-v2-points .points-num,
.lb-v2-points .points-num {
  display: block !important;
  text-align: right !important;
  font-variant-numeric: tabular-nums !important;
  line-height: .95 !important;
}

#leaderboard-list .lb-v2-points .points-label,
.lb-v2-points .points-label {
  display: block !important;
  text-align: right !important;
  padding-right: 1px !important;
}

@media (min-width: 390px) and (max-width: 460px) {
  #leaderboard-list {
    --lb-rank-col: 66px;
    --lb-main-col: clamp(142px, 37vw, 154px);
    --lb-spacer-col: minmax(16px, 1fr);
    --lb-trend-col: 40px;
    --lb-pts-col: 56px;
    --lb-grid-gap: 5px;
  }
}

@media (max-width: 380px) {
  #leaderboard-list {
    --lb-rank-col: 60px;
    --lb-main-col: clamp(122px, 38vw, 140px);
    --lb-spacer-col: minmax(12px, 1fr);
    --lb-trend-col: 38px;
    --lb-pts-col: 50px;
    --lb-grid-gap: 4px;
  }
  #leaderboard-list .lb-v2-table-head,
  .lb-v2-table-head {
    padding-left: 7px !important;
    padding-right: 9px !important;
  }
  #leaderboard-list .lb-row.lb-v2-row,
  .lb-row.lb-v2-row {
    padding-left: 6px !important;
    padding-right: 9px !important;
  }
  #leaderboard-list .lb-v2-trend .rank-trend,
  .lb-v2-trend .rank-trend {
    width: 32px !important;
    min-width: 32px !important;
    font-size: 8.2px !important;
    padding: 0 4px !important;
  }
}
`;

  function inject() {
    const old = document.getElementById(STYLE_ID);
    if (old) old.remove();
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject, { once: true });
  } else {
    inject();
  }
})();



/* ============================================================
   MOBILE SAFE FIX — Leaderboard Trend + Points columns
   Injected last so runtime CSS cannot push points off-screen.
   ============================================================ */
(function installLeaderboardMobileSafeColumnsFix() {
  const STYLE_ID = 'wcpl-leaderboard-mobile-safe-columns-fix';
  const CSS = '\n/* ============================================================\n   MOBILE SAFE FIX — Leaderboard Trend + Points columns\n   2026-06-23\n   Fixes right-edge clipping by removing the oversized spacer grid.\n   Final layout: Rank | Predictions | Trend | Pts\n   ============================================================ */\n#leaderboard-list {\n  --lb-safe-rank-col: 68px;\n  --lb-safe-trend-col: 40px;\n  --lb-safe-pts-col: 50px;\n  --lb-safe-gap: 5px;\n}\n\n#leaderboard-list .lb-v2-table-head,\n#leaderboard-list .lb-row.lb-v2-row,\n.lb-v2-table-head,\n.lb-row.lb-v2-row {\n  box-sizing: border-box !important;\n  width: 100% !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n  display: grid !important;\n  grid-template-columns:\n    var(--lb-safe-rank-col)\n    minmax(0, 1fr)\n    var(--lb-safe-trend-col)\n    var(--lb-safe-pts-col) !important;\n  column-gap: var(--lb-safe-gap) !important;\n  align-items: center !important;\n  overflow: hidden !important;\n}\n\n#leaderboard-list .lb-v2-table-head,\n.lb-v2-table-head {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n#leaderboard-list .lb-row.lb-v2-row,\n.lb-row.lb-v2-row {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\n#leaderboard-list .lb-v2-table-head span:nth-child(1),\n.lb-v2-table-head span:nth-child(1) {\n  grid-column: 1 !important;\n  justify-self: start !important;\n  text-align: left !important;\n}\n\n#leaderboard-list .lb-v2-table-head span:nth-child(2),\n.lb-v2-table-head span:nth-child(2) {\n  grid-column: 2 !important;\n  justify-self: start !important;\n  text-align: left !important;\n}\n\n#leaderboard-list .lb-v2-table-head span:nth-child(3),\n.lb-v2-table-head span:nth-child(3) {\n  grid-column: 3 !important;\n  justify-self: center !important;\n  text-align: center !important;\n}\n\n#leaderboard-list .lb-v2-table-head span:nth-child(4),\n.lb-v2-table-head span:nth-child(4) {\n  grid-column: 4 !important;\n  justify-self: end !important;\n  text-align: right !important;\n  padding-right: 0 !important;\n}\n\n#leaderboard-list .lb-v2-rank-avatar,\n.lb-v2-rank-avatar {\n  grid-column: 1 !important;\n  width: var(--lb-safe-rank-col) !important;\n  min-width: 0 !important;\n  max-width: var(--lb-safe-rank-col) !important;\n  display: grid !important;\n  grid-template-columns: 26px 37px !important;\n  gap: 5px !important;\n  align-items: center !important;\n  overflow: visible !important;\n}\n\n#leaderboard-list .lb-v2-rank-tile,\n#leaderboard-list .lb-v2-medal-simple,\n.lb-v2-rank-tile,\n.lb-v2-medal-simple {\n  width: 26px !important;\n  height: 26px !important;\n  min-width: 26px !important;\n  font-size: 12px !important;\n}\n\n#leaderboard-list .lb-v2-medal-shiny,\n.lb-v2-medal-shiny {\n  width: 28px !important;\n  min-width: 28px !important;\n  max-width: 28px !important;\n}\n\n#leaderboard-list .lb-v2-row .lb-avatar,\n.lb-v2-row .lb-avatar {\n  width: 37px !important;\n  height: 37px !important;\n  min-width: 37px !important;\n  min-height: 37px !important;\n}\n\n#leaderboard-list .lb-v2-main,\n.lb-v2-main {\n  grid-column: 2 !important;\n  min-width: 0 !important;\n  max-width: 100% !important;\n  overflow: hidden !important;\n  padding-left: 2px !important;\n  padding-right: 0 !important;\n}\n\n#leaderboard-list .lb-v2-name-line,\n.lb-v2-name-line,\n#leaderboard-list .lb-v2-stats,\n.lb-v2-stats,\n#leaderboard-list .lb-v2-chips,\n.lb-v2-chips {\n  min-width: 0 !important;\n  max-width: 100% !important;\n}\n\n#leaderboard-list .lb-v2-name,\n.lb-v2-name {\n  min-width: 0 !important;\n  max-width: 100% !important;\n}\n\n#leaderboard-list .lb-v2-chips,\n.lb-v2-chips {\n  overflow: hidden !important;\n  flex-wrap: nowrap !important;\n}\n\n#leaderboard-list .lb-v2-trend,\n.lb-v2-trend {\n  grid-column: 3 !important;\n  width: var(--lb-safe-trend-col) !important;\n  min-width: var(--lb-safe-trend-col) !important;\n  max-width: var(--lb-safe-trend-col) !important;\n  justify-self: center !important;\n  align-self: center !important;\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform: none !important;\n  position: static !important;\n  z-index: 6 !important;\n}\n\n#leaderboard-list .lb-v2-trend .rank-trend,\n.lb-v2-trend .rank-trend {\n  width: 34px !important;\n  min-width: 34px !important;\n  max-width: 34px !important;\n  height: 20px !important;\n  padding: 0 4px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-size: 8.4px !important;\n  line-height: 1 !important;\n  white-space: nowrap !important;\n  font-variant-numeric: tabular-nums !important;\n}\n\n#leaderboard-list .lb-v2-points,\n.lb-v2-points {\n  grid-column: 4 !important;\n  width: var(--lb-safe-pts-col) !important;\n  min-width: var(--lb-safe-pts-col) !important;\n  max-width: var(--lb-safe-pts-col) !important;\n  justify-self: end !important;\n  align-self: center !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  text-align: right !important;\n  overflow: visible !important;\n  transform: none !important;\n  position: static !important;\n  z-index: 6 !important;\n}\n\n#leaderboard-list .lb-v2-points .points-num,\n.lb-v2-points .points-num {\n  display: block !important;\n  max-width: 100% !important;\n  text-align: right !important;\n  font-size: 22px !important;\n  line-height: .95 !important;\n  letter-spacing: -0.055em !important;\n  font-variant-numeric: tabular-nums !important;\n  overflow: visible !important;\n}\n\n#leaderboard-list .lb-v2-points .points-label,\n.lb-v2-points .points-label {\n  display: block !important;\n  text-align: right !important;\n  font-size: 7px !important;\n  padding-right: 1px !important;\n  overflow: visible !important;\n}\n\n@media (min-width: 390px) {\n  #leaderboard-list {\n    --lb-safe-rank-col: 72px;\n    --lb-safe-trend-col: 42px;\n    --lb-safe-pts-col: 54px;\n    --lb-safe-gap: 6px;\n  }\n  #leaderboard-list .lb-v2-rank-avatar,\n  .lb-v2-rank-avatar {\n    grid-template-columns: 28px 39px !important;\n    gap: 5px !important;\n  }\n  #leaderboard-list .lb-v2-rank-tile,\n  #leaderboard-list .lb-v2-medal-simple,\n  .lb-v2-rank-tile,\n  .lb-v2-medal-simple {\n    width: 28px !important;\n    height: 28px !important;\n    min-width: 28px !important;\n  }\n  #leaderboard-list .lb-v2-row .lb-avatar,\n  .lb-v2-row .lb-avatar {\n    width: 39px !important;\n    height: 39px !important;\n    min-width: 39px !important;\n    min-height: 39px !important;\n  }\n  #leaderboard-list .lb-v2-points .points-num,\n  .lb-v2-points .points-num {\n    font-size: 23px !important;\n  }\n}\n\n@media (max-width: 360px) {\n  #leaderboard-list {\n    --lb-safe-rank-col: 62px;\n    --lb-safe-trend-col: 36px;\n    --lb-safe-pts-col: 45px;\n    --lb-safe-gap: 4px;\n  }\n  #leaderboard-list .lb-v2-table-head,\n  .lb-v2-table-head,\n  #leaderboard-list .lb-row.lb-v2-row,\n  .lb-row.lb-v2-row {\n    padding-left: 6px !important;\n    padding-right: 6px !important;\n  }\n  #leaderboard-list .lb-v2-rank-avatar,\n  .lb-v2-rank-avatar {\n    grid-template-columns: 24px 34px !important;\n    gap: 4px !important;\n  }\n  #leaderboard-list .lb-v2-rank-tile,\n  #leaderboard-list .lb-v2-medal-simple,\n  .lb-v2-rank-tile,\n  .lb-v2-medal-simple {\n    width: 24px !important;\n    height: 24px !important;\n    min-width: 24px !important;\n    font-size: 11px !important;\n  }\n  #leaderboard-list .lb-v2-medal-shiny,\n  .lb-v2-medal-shiny {\n    width: 24px !important;\n    min-width: 24px !important;\n    max-width: 24px !important;\n  }\n  #leaderboard-list .lb-v2-row .lb-avatar,\n  .lb-v2-row .lb-avatar {\n    width: 34px !important;\n    height: 34px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n  }\n  #leaderboard-list .lb-v2-trend .rank-trend,\n  .lb-v2-trend .rank-trend {\n    width: 31px !important;\n    min-width: 31px !important;\n    max-width: 31px !important;\n    font-size: 7.8px !important;\n    padding: 0 3px !important;\n  }\n  #leaderboard-list .lb-v2-points .points-num,\n  .lb-v2-points .points-num {\n    font-size: 20px !important;\n  }\n}\n';
  function inject() {
    const old = document.getElementById(STYLE_ID);
    if (old) old.remove();
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    (document.head || document.documentElement).appendChild(style);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject, { once: true });
  } else {
    inject();
  }
})();