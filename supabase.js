// Supabase project config with dynamic LocalStorage support
const DEFAULT_SUPABASE_URL = "https://socmgpgozmbpigmgqrbp.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvY21ncGdvem1icGlnbWdxcmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNTk4NjAsImV4cCI6MjEwMDgzNTg2MH0.1ZIui7hxuePHhQEfJAQWvkKhOqQHhRDTkFZKio_djQ8";

// Save reference to original SDK object before window.supabase is overwritten
if (window.supabase && typeof window.supabase.createClient === 'function') {
    window.supabaseSDK = window.supabase;
}

function getActiveSupabaseCredentials() {
    const savedUrl = localStorage.getItem('CUSTOM_SUPABASE_URL');
    const savedKey = localStorage.getItem('CUSTOM_SUPABASE_ANON_KEY');

    return {
        url: (savedUrl && savedUrl.trim()) ? savedUrl.trim() : DEFAULT_SUPABASE_URL,
        key: (savedKey && savedKey.trim()) ? savedKey.trim() : DEFAULT_SUPABASE_ANON_KEY,
        isCustom: Boolean(savedUrl || savedKey)
    };
}

function initSupabaseClient() {
    const creds = getActiveSupabaseCredentials();
    const sdk = window.supabaseSDK || window.supabase;
    if (sdk && typeof sdk.createClient === 'function') {
        window.supabaseClientInstance = sdk.createClient(creds.url, creds.key);
        window.supabase = window.supabaseClientInstance;
    }
}

// Initialize Supabase Client Instance
initSupabaseClient();

// Global helpers for site UI configuration modal
window.getActiveSupabaseCredentials = getActiveSupabaseCredentials;

window.saveSupabaseCredentialsFromUI = function(newUrl, newKey) {
    if (!newUrl || !newKey) {
        alert("Please enter both a valid Supabase URL and Anon Key.");
        return false;
    }
    let cleanUrl = newUrl.trim();
    if (cleanUrl.endsWith('/rest/v1/') || cleanUrl.endsWith('/rest/v1')) {
        cleanUrl = cleanUrl.replace(/\/rest\/v1\/?$/, '');
    }
    localStorage.setItem('CUSTOM_SUPABASE_URL', cleanUrl);
    localStorage.setItem('CUSTOM_SUPABASE_ANON_KEY', newKey.trim());
    initSupabaseClient();
    location.reload();
    return true;
};

window.resetSupabaseCredentialsFromUI = function() {
    localStorage.removeItem('CUSTOM_SUPABASE_URL');
    localStorage.removeItem('CUSTOM_SUPABASE_ANON_KEY');
    initSupabaseClient();
    location.reload();
};
