// Velocity Motors Single-Page Logic Hub - app.js

// 1. Core Bike Specifications & Hotspots Data
const bikesData = {
    ktm: {
        name: "KTM Duke 390",
        description: "The corner rocket. Powered by a state-of-the-art liquid-cooled single-cylinder engine, delivering premium power-to-weight performance.",
        image: "ktm.png",
        theme: "ktm",
        specs: { power: 43.5, torque: 37, weight: 167, speed: 170 },
        stockDrag: 0.45,
        stockSprint: "21.20",
        hotspots: [
            { id: "ktm-sus", name: "WP APEX Front USDs", price: 25000, desc: "43mm open-cartridge forks offering premium cornering damping.", top: "40%", left: "22%", label: "Suspension" },
            { id: "ktm-brk", name: "ByBre ABS Brake Kit", price: 12000, desc: "320mm front disc with radial calipers and dual-channel Bosch ABS.", top: "74%", left: "15%", label: "Front Brake" },
            { id: "ktm-eng", name: "373cc DOHC Engine Spares", price: 85000, desc: "Original liquid-cooled block. Replaces worn cylinders and pistons.", top: "58%", left: "46%", label: "373cc Engine" },
            { id: "ktm-exh", name: "Akrapovič Titanium Exhaust", price: 45000, desc: "Titanium slip-on exhaust system. Adds power and drops overall weight.", top: "72%", left: "76%", label: "Exhaust" },
            { id: "ktm-tire", name: "Metzeler Sportec Radial Tires", price: 16000, desc: "Superb compound grip, optimizing high-speed cornering.", top: "72%", left: "88%", label: "Rear Tire" }
        ]
    },
    yamaha: {
        name: "Yamaha R15 V4",
        description: "Born from MotoGP DNA. The ultimate lightweight track weapon with highly aerodynamic fairings.",
        image: "yamaha.png",
        theme: "yamaha",
        specs: { power: 18.4, torque: 14.2, weight: 142, speed: 140 },
        stockDrag: 0.38,
        stockSprint: "31.40",
        hotspots: [
            { id: "yam-sus", name: "Upside Down (USD) Forks", price: 18000, desc: "Premium golden USD front forks improving stiffness and stability.", top: "46%", left: "20%", label: "USD Forks" },
            { id: "yam-brk", name: "Nissin Disc Brakes & ABS", price: 8500, desc: "282mm front rotor with high-bite Nissin calipers.", top: "74%", left: "14%", label: "Nissin Brake" },
            { id: "yam-eng", name: "155cc SOHC VVA Engine Spares", price: 40000, desc: "Original cylinder engine spares with Variable Valve Actuation.", top: "60%", left: "44%", label: "155cc VVA" },
            { id: "yam-qs", name: "Yamaha OEM Quickshifter", price: 5500, desc: "Allows clutchless upshifts at full throttle, decreasing shift lag.", top: "54%", left: "52%", label: "Quickshifter" },
            { id: "yam-exh", name: "OEM Racing Muffler", price: 8000, desc: "Sport-tuned muffler exhaust with carbon-fiber guard shields.", top: "70%", left: "76%", label: "Sport Exhaust" }
        ]
    },
    royal_enfield: {
        name: "RE Classic 350",
        description: "Reborn vintage cruise. Retro styling loaded with the refined J-series counterbalanced thump engine.",
        image: "royal_enfield.png",
        theme: "royal_enfield",
        specs: { power: 20.2, torque: 27.0, weight: 195, speed: 115 },
        stockDrag: 0.52,
        stockSprint: "36.80",
        hotspots: [
            { id: "re-seat", name: "Touring Split Leather Seats", price: 4500, desc: "Dual density premium touring seats finished in luxury tan leather.", top: "48%", left: "58%", label: "Split Seat" },
            { id: "re-eng", name: "349cc J-Series Engine block", price: 65000, desc: "Refined counterbalanced block. Restores original thumping power.", top: "64%", left: "46%", label: "RE Engine" },
            { id: "re-brk", name: "Brembo-derived ABS Kit", price: 9000, desc: "Dual-channel ABS with high-grip organic brake pads.", top: "74%", left: "18%", label: "Classic Brake" },
            { id: "re-sus", name: "Twin Gas-charged Shocks", price: 11000, desc: "Adjustable rear suspension designed for custom touring comfort.", top: "64%", left: "74%", label: "Twin Shocks" },
            { id: "re-exh", name: "Peashooter Chrome Silencer", price: 7500, desc: "Original exhaust sound beats with a classic mirror-chrome layer.", top: "78%", left: "74%", label: "Exhaust" }
        ]
    },
    pulsar: {
        name: "Bajaj Pulsar NS200",
        description: "The raw street fighter. Built on a rigid perimeter frame with liquid-cooled triple spark ignition.",
        image: "pulsar.png",
        theme: "pulsar",
        specs: { power: 24.5, torque: 18.7, weight: 156, speed: 136 },
        stockDrag: 0.41,
        stockSprint: "29.50",
        hotspots: [
            { id: "pul-sus", name: "Nitrox Rear Monoshock", price: 8000, desc: "Gas-charged canister suspension offering precise feedback.", top: "58%", left: "58%", label: "Monoshock" },
            { id: "pul-brk", name: "300mm Petal Front Disc", price: 7500, desc: "Wave petal-cut disc offering aggressive heat dissipation.", top: "74%", left: "18%", label: "Petal Disc" },
            { id: "pul-eng", name: "199.5cc DTS-i Block", price: 35000, desc: "Triple spark liquid-cooled cylinder kit for rapid combustion.", top: "62%", left: "46%", label: "DTS-i Engine" },
            { id: "pul-exh", name: "Underbelly Muffler System", price: 6000, desc: "Low-slung underbelly exhaust designed for high stability.", top: "74%", left: "68%", label: "Underbelly" },
            { id: "pul-alloy", name: "17-inch Sports Alloys (Set)", price: 9500, desc: "High-tensile multi-spoke alloy wheels, reduces unsprung mass.", top: "72%", left: "86%", label: "Alloys" }
        ]
    },
    splendor: {
        name: "Hero Splendor Plus",
        description: "India's commuter legend. Unmatched durability and economy with low maintenance costs.",
        image: "splendor.png",
        theme: "splendor",
        specs: { power: 8.0, torque: 8.05, weight: 112, speed: 90 },
        stockDrag: 0.46,
        stockSprint: "44.20",
        hotspots: [
            { id: "sp-sus", name: "Hydraulic Shock Absorbers", price: 3500, desc: "Twin hydraulic rear shocks designed for high utility load support.", top: "62%", left: "78%", label: "Rear Shocks" },
            { id: "sp-brk", name: "Integrated Drum Brakes", price: 2500, desc: "Combines front and rear drum actuation for safe stopping.", top: "74%", left: "18%", label: "IBS Brake" },
            { id: "sp-eng", name: "97.2cc APDV Engine Spares", price: 18000, desc: "Commuter block offering maximum mileage and high durability.", top: "64%", left: "42%", label: "APDV Engine" },
            { id: "sp-wheel", name: "Silver Alloy Wheels (Set)", price: 4500, desc: "Lightweight commuter alloys built for rugged street terrain.", top: "74%", left: "18%", label: "Silver Alloys" },
            { id: "sp-exh", name: "Utility Chrome Silencer", price: 3200, desc: "Muffler system equipped with a classic metal heat guard.", top: "74%", left: "74%", label: "Chrome Exhaust" }
        ]
    }
};

const maxSpecLimits = { power: 60, torque: 50, weight: 220, speed: 200 };

const partsInventory = [
    { id: "inv-oil", name: "Motul 7100 10W50 Synthetic Oil (1L)", price: 1050, category: "maintenance", compatibility: "Universal / High Performance", desc: "100% synthetic double ester engine oil. Excellent shear resistance and smooth shifting.", icon: "fa-oil-can" },
    { id: "inv-plug", name: "NGK Iridium Spark Plug", price: 750, category: "engine", compatibility: "KTM / Yamaha / Pulsar", desc: "Fine iridium tip ensures high durability and a consistently stable spark.", icon: "fa-bolt" },
    { id: "inv-pad", name: "Brembo Ceramic Brake Pads", price: 2200, category: "brakes", compatibility: "KTM / Royal Enfield / Yamaha", desc: "Superior braking power in all conditions with minimal fade and long disc life.", icon: "fa-dolly-flatbed" },
    { id: "inv-chain", name: "DID Drive Chain & Sprocket Gold Kit", price: 4800, category: "performance", compatibility: "KTM / Yamaha / Pulsar", desc: "Heavy-duty gold plated X-ring chain with high-tensile steel front/rear sprockets.", icon: "fa-link" },
    { id: "inv-filter", name: "K&N High-Flow Air Filter", price: 3900, category: "performance", compatibility: "Yamaha R15 / KTM Duke", desc: "Designed to increase horsepower and acceleration. Washable and reusable.", icon: "fa-wind" },
    { id: "inv-led", name: "Sequential LED Indicators (Set of 4)", price: 1499, category: "styling", compatibility: "Universal Fit", desc: "Dynamic flowing LED turn signals. Waterproof, shockproof, and super bright.", icon: "fa-lightbulb" },
    { id: "inv-exh", name: "Akrapovič Replica Carbon Muffler", price: 14500, category: "performance", compatibility: "KTM / Yamaha / RE", desc: "High quality carbon fiber finish exhaust muffler. Increases exhaust note and reduces weight.", icon: "fa-wind" },
    { id: "inv-carb", name: "Classic Splendor Carburetor Assembly Spares", price: 2800, category: "engine", compatibility: "Hero Splendor / Commuters", desc: "Original mechanical carburetor assembly kit. Restores smooth cold starts and peak fuel economy.", icon: "fa-wrench" },
    { id: "inv-spoke", name: "RE Vintage Chrome Spoke Wheels (Set)", price: 6800, category: "performance", compatibility: "Royal Enfield Classic 350", desc: "Heavy-gauge mirror chrome plated retro spokes built for Classic/Bullet models.", icon: "fa-circle-notch" },
    { id: "inv-guard", name: "Heavy-Duty Chrome Engine Crash Guard", price: 2400, category: "styling", compatibility: "Royal Enfield / Commuters", desc: "Mirror-chrome finished crash leg guard with heavy mounting flanges.", icon: "fa-shield-alt" },
    { id: "inv-mirror", name: "Vintage Round Bar-End Chrome Mirrors", price: 1800, category: "styling", compatibility: "Royal Enfield / Universal", desc: "Universal fit mirror bar-end sets with premium metal build.", icon: "fa-eye" },
    { id: "inv-battery", name: "Exide Xplore Maintenance-Free Battery", price: 2600, category: "maintenance", compatibility: "Universal Commuters/Cruisers", desc: "Factory-activated, spill-proof AGM battery with high cranking amps.", icon: "fa-car-battery" },
    { id: "inv-helmet", name: "Steelbird SBA-7 Hurricane Helmet", price: 3200, category: "gear", compatibility: "Rider Safety Gear", desc: "ISI certified full face helmet with high-impact ABS shell and dynamic ventilation.", icon: "fa-hard-hat" },
    { id: "inv-gloves", name: "Rynox Shield Leather Riding Gloves", price: 2750, category: "gear", compatibility: "Rider Safety Gear", desc: "Full-grain leather with carbon fiber knuckle protectors and mobile touchscreen support.", icon: "fa-mitten" }
];

// Global State
let currentBikeKey = localStorage.getItem('velocity_active_bike') || 'ktm';
let cart = JSON.parse(localStorage.getItem('bike_website_cart')) || [];
let selectedColor = localStorage.getItem('velocity_paint_color') || 'red';
let selectedFinish = localStorage.getItem('velocity_paint_finish') || 'glossy';
let isNightMode = localStorage.getItem('velocity_night_mode') === 'true';
let underglowColor = localStorage.getItem('velocity_underglow_color') || '#06b6d4';

// Drag Simulator Variables
let dragCanvas = null;
let dragCtx = null;
let isDragging = false;
let dragTime = 0;
let dragSpeed = 0;
let dragDistance = 0;
let dragAnimId = null;
let testTunedStats = null;
let calculatedSprintRecord = 0;

// Manual Shifter State
let currentGear = 1;
let engineRpm = 1000;
let shiftFeedbackText = "";
let shiftFeedbackColor = "#ffffff";
let shiftFeedbackTimer = 0;

// DOM Selectors
const bikeImage = document.getElementById('bike-display-image');
const bikeStyleImage = document.getElementById('bike-style-image');
const bikeName = document.getElementById('bike-name');
const bikeDesc = document.getElementById('bike-desc');
const bikeHotspotsContainer = document.getElementById('bike-hotspots-container');
const bikeSelector = document.getElementById('bike-selector');

// Specs Elements
const powerVal = document.getElementById('spec-power-val');
const powerBar = document.getElementById('spec-power-bar');
const powerChange = document.getElementById('spec-power-change');
const torqueVal = document.getElementById('spec-torque-val');
const torqueBar = document.getElementById('spec-torque-bar');
const torqueChange = document.getElementById('spec-torque-change');
const weightVal = document.getElementById('spec-weight-val');
const weightBar = document.getElementById('spec-weight-bar');
const weightChange = document.getElementById('spec-weight-change');
const speedVal = document.getElementById('spec-speed-val');
const speedBar = document.getElementById('spec-speed-bar');
const speedChange = document.getElementById('spec-speed-change');

const equippedIndicator = document.getElementById('equipped-indicator');
const equippedCountSpan = document.getElementById('equipped-count');

// Dyno
const dynoCanvas = document.getElementById('dyno-canvas');
let dynoCtx = null;

// Cart drawer Elements
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartBadge = document.getElementById('cart-badge');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartGst = document.getElementById('cart-gst');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const receiptModal = document.getElementById('receipt-modal');
const bookingModal = document.getElementById('booking-modal');
const closeReceiptBtn = document.getElementById('close-receipt-btn');
const shiftGearBtn = document.getElementById('shift-gear-btn');
const toastContainer = document.getElementById('notifications-container');

// Eco Sliders
const calcDistance = document.getElementById('calc-distance');
const calcDistanceVal = document.getElementById('calc-distance-val');
const calcFuelPrice = document.getElementById('calc-fuel-price');
const calcFuelPriceVal = document.getElementById('calc-fuel-price-val');
const calcStyle = document.getElementById('calc-style');
const calcStyleVal = document.getElementById('calc-style-val');
const ecoMonthlySavings = document.getElementById('eco-monthly-savings');
const ecoYearlySavings = document.getElementById('eco-yearly-savings');
const ecoBreakeven = document.getElementById('eco-breakeven');

// 2. Initial Setup Router
document.addEventListener('DOMContentLoaded', () => {
    initGlobalTheme();
    initBikes();
    initPartsGrid(partsInventory);
    updateCartUI();
    initThemePicker();
    initPaintCustomizer();
    initEcoSliders();
    initDragStripSimulator();

    if (dynoCanvas) {
        dynoCtx = dynoCanvas.getContext('2d');
        resizeCanvas();
        drawDynoGraph(currentBikeKey);
    }

    window.addEventListener('resize', () => {
        if (dynoCanvas) {
            resizeCanvas();
            drawDynoGraph(currentBikeKey);
        }
    });

    // Event listener mapping
    openCartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', openBookingModal);
    closeReceiptBtn.addEventListener('click', closeReceipt);
    if (shiftGearBtn) {
        shiftGearBtn.addEventListener('click', executeManualUpshift);
    }

    // Keyboard Space & Shift upshift bindings
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
            if (isDragging) {
                e.preventDefault();
                executeManualUpshift();
            }
        }
    });

    // Store search
    document.getElementById('search-parts').addEventListener('input', handleFilterChange);
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            handleFilterChange();
        });
    });

    // Active hash highlight scrolling
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section, header');
        const scrollPos = window.scrollY + 200;
        
        // Sticky nav highlights
        document.querySelector('header').classList.toggle('scrolled', window.scrollY > 40);

        sections.forEach(sec => {
            if (sec.id && scrollPos >= sec.offsetTop && scrollPos < (sec.offsetTop + sec.offsetHeight)) {
                document.querySelectorAll('.nav-links a').forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${sec.id}`);
                });
            }
        });
    });
});

// 3. LED Theme Picker
function initGlobalTheme() {
    document.body.setAttribute('data-theme', bikesData[currentBikeKey].theme);
    if (isNightMode) {
        document.body.classList.add('night-mode');
        document.documentElement.style.setProperty('--underglow-color', underglowColor);
        const btn = document.getElementById('night-toggle-btn');
        if (btn) {
            btn.innerHTML = '<i class="fa fa-sun"></i> Disable Night Mode';
            btn.classList.add('active');
        }
        const underglowCtrls = document.getElementById('underglow-controls');
        if (underglowCtrls) underglowCtrls.style.display = 'flex';
    }
    applyPaintFilters();
}

function initThemePicker() {
    const picker = document.getElementById('theme-picker');
    if (!picker) return;
    picker.innerHTML = '';
    const colors = [
        { class: 'ktm', theme: 'ktm' },
        { class: 'yamaha', theme: 'yamaha' },
        { class: 're', theme: 'royal_enfield' },
        { class: 'pulsar', theme: 'pulsar' },
        { class: 'cyan', theme: 'cyan' },
        { class: 'pink', theme: 'pink' }
    ];
    colors.forEach(color => {
        const dot = document.createElement('div');
        dot.className = `color-dot ${color.class}`;
        if (color.theme === bikesData[currentBikeKey].theme) dot.classList.add('active');
        dot.addEventListener('click', () => {
            document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            document.body.setAttribute('data-theme', color.theme);
            showToast("LED Accent Customized", "Showroom lighting updated.");
        });
        picker.appendChild(dot);
    });
}

// 4. Configurator & Hotspot Rendering
function initBikes() {
    bikeSelector.innerHTML = '';
    Object.keys(bikesData).forEach(key => {
        const btn = document.createElement('button');
        btn.classList.add('bike-btn');
        if (key === currentBikeKey) btn.classList.add('active');
        btn.textContent = bikesData[key].name;
        btn.addEventListener('click', () => switchBike(key));
        bikeSelector.appendChild(btn);
    });
    renderBike(currentBikeKey);
}

function switchBike(key) {
    if (key === currentBikeKey) return;

    if (bikeImage) {
        bikeImage.style.opacity = '0';
        bikeImage.style.transform = 'scale(0.9) translateX(-20px)';
    }
    if (bikeStyleImage) {
        bikeStyleImage.style.opacity = '0';
        bikeStyleImage.style.transform = 'scale(0.9) translateX(20px)';
    }

    setTimeout(() => {
        currentBikeKey = key;
        localStorage.setItem('velocity_active_bike', key);
        document.body.setAttribute('data-theme', bikesData[key].theme);
        
        document.querySelectorAll('.bike-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent === bikesData[key].name);
        });

        renderBike(key);
        applyPaintFilters();

        if (bikeImage) {
            bikeImage.style.opacity = '1';
            bikeImage.style.transform = 'scale(1) translateX(0)';
        }
        if (bikeStyleImage) {
            bikeStyleImage.style.opacity = '1';
            bikeStyleImage.style.transform = 'scale(1) translateX(0)';
        }
    }, 400);
}

function renderBike(key) {
    const data = bikesData[key];
    bikeName.textContent = data.name;
    bikeDesc.textContent = data.description;
    
    if (bikeImage) {
        bikeImage.src = data.image;
        bikeImage.alt = data.name;
    }
    if (bikeStyleImage) {
        bikeStyleImage.src = data.image;
        bikeStyleImage.alt = data.name;
    }

    updateSpecsDashboard(key);
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();

    if (bikeHotspotsContainer) {
        bikeHotspotsContainer.innerHTML = '';
        data.hotspots.forEach(hs => {
            const hDot = document.createElement('div');
            hDot.classList.add('hotspot');
            hDot.style.top = hs.top;
            hDot.style.left = hs.left;

            const hLabel = document.createElement('span');
            hLabel.classList.add('hotspot-label');
            hLabel.textContent = hs.label;
            hDot.appendChild(hLabel);

            const hInfo = document.createElement('div');
            hInfo.classList.add('hotspot-info');
            hInfo.innerHTML = `
                <div class="hotspot-title">
                    <span>${hs.name}</span>
                    <span class="hotspot-price">₹${hs.price.toLocaleString('en-IN')}</span>
                </div>
                <div class="hotspot-desc">${hs.desc}</div>
                <button class="hotspot-action" onclick="addToCart('${hs.id}', '${hs.name.replace(/'/g, "\\'")}', ${hs.price}, '${data.name}')">
                    <i class="fa fa-plus-circle"></i> Fit & Upgrade
                </button>
            `;
            hDot.appendChild(hInfo);
            
            hDot.addEventListener('click', (e) => {
                if (e.target.classList.contains('hotspot-action') || e.target.closest('.hotspot-action')) return;
                e.stopPropagation();
                const activeState = hDot.classList.contains('active');
                document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
                if (!activeState) hDot.classList.add('active');
            });
            bikeHotspotsContainer.appendChild(hDot);
        });
    }
}

function calculateTuningUpgrades(bikeKey) {
    const bike = bikesData[bikeKey];
    let powerBonus = 0;
    let torqueBonus = 0;
    let weightReduction = 0;
    let speedBonus = 0;
    let itemsEquipped = 0;

    cart.forEach(item => {
        const isCompatible = item.compatibility.toLowerCase().includes(bike.name.toLowerCase()) || 
                             item.compatibility.toLowerCase().includes("universal");

        if (isCompatible) {
            itemsEquipped++;
            if (item.id.includes("eng")) {
                powerBonus += bike.specs.power * 0.15; 
                torqueBonus += bike.specs.torque * 0.12; 
                speedBonus += 15;
            } else if (item.id.includes("exh") || item.id === "inv-exh") {
                powerBonus += 3.2; 
                weightReduction += 4.5; 
                speedBonus += 8;
            } else if (item.id.includes("sus")) {
                weightReduction += 2.0; 
            } else if (item.id === "inv-filter") {
                powerBonus += 1.4;
                torqueBonus += 0.8;
            } else if (item.id === "inv-chain") {
                powerBonus += 0.5;
                speedBonus += 3;
            } else if (item.id.includes("wheel") || item.id.includes("alloy")) {
                weightReduction += 3.0;
            }
        }
    });

    return {
        power: parseFloat((bike.specs.power + powerBonus).toFixed(1)),
        torque: parseFloat((bike.specs.torque + torqueBonus).toFixed(1)),
        weight: parseFloat((bike.specs.weight - weightReduction).toFixed(1)),
        speed: Math.round(bike.specs.speed + speedBonus),
        powerDelta: parseFloat(powerBonus.toFixed(1)),
        torqueDelta: parseFloat(torqueBonus.toFixed(1)),
        weightDelta: parseFloat(weightReduction.toFixed(1)),
        speedDelta: speedBonus,
        count: itemsEquipped
    };
}

function updateSpecsDashboard(bikeKey) {
    const tuned = calculateTuningUpgrades(bikeKey);

    if (powerVal) {
        powerVal.textContent = `${tuned.power} PS`;
        powerBar.style.width = `${(tuned.power / maxSpecLimits.power) * 100}%`;
        powerChange.textContent = tuned.powerDelta > 0 ? `+${tuned.powerDelta} HP` : `+0.0 HP`;
        powerChange.classList.toggle('active', tuned.powerDelta > 0);
    }
    if (torqueVal) {
        torqueVal.textContent = `${tuned.torque} Nm`;
        torqueBar.style.width = `${(tuned.torque / maxSpecLimits.torque) * 100}%`;
        torqueChange.textContent = tuned.torqueDelta > 0 ? `+${tuned.torqueDelta} Nm` : `+0.0 Nm`;
        torqueChange.classList.toggle('active', tuned.torqueDelta > 0);
    }
    if (weightVal) {
        weightVal.textContent = `${tuned.weight} kg`;
        weightBar.style.width = `${(1 - (tuned.weight / maxSpecLimits.weight)) * 100}%`; 
        weightChange.textContent = tuned.weightDelta > 0 ? `-${tuned.weightDelta} kg` : `+0.0 kg`;
        weightChange.classList.toggle('active', tuned.weightDelta > 0);
    }
    if (speedVal) {
        speedVal.textContent = `${tuned.speed} km/h`;
        speedBar.style.width = `${(tuned.speed / maxSpecLimits.speed) * 100}%`;
        speedChange.textContent = tuned.speedDelta > 0 ? `+${tuned.speedDelta} km/h` : `+0 km/h`;
        speedChange.classList.toggle('active', tuned.speedDelta > 0);
    }

    if (equippedIndicator) {
        equippedCountSpan.textContent = `${tuned.count} Tuning upgrades fitted`;
        equippedIndicator.classList.toggle('show', tuned.count > 0);
    }

    if (dynoCtx) drawDynoGraph(bikeKey);
}

// 5. Dyno Graph
function resizeCanvas() {
    if (!dynoCanvas) return;
    const rect = dynoCanvas.parentElement.getBoundingClientRect();
    dynoCanvas.width = rect.width - 24;
    dynoCanvas.height = 130;
}

function drawDynoGraph(bikeKey) {
    if (!dynoCtx) return;
    const w = dynoCanvas.width;
    const h = dynoCanvas.height;
    dynoCtx.clearRect(0, 0, w, h);

    dynoCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    dynoCtx.lineWidth = 1;
    const gridC = 8;
    for (let i = 1; i < gridC; i++) {
        const x = (w / gridC) * i;
        dynoCtx.beginPath(); dynoCtx.moveTo(x, 0); dynoCtx.lineTo(x, h); dynoCtx.stroke();
    }
    const gridR = 4;
    for (let i = 1; i < gridR; i++) {
        const y = (h / gridR) * i;
        dynoCtx.beginPath(); dynoCtx.moveTo(0, y); dynoCtx.lineTo(w, y); dynoCtx.stroke();
    }

    const stock = bikesData[bikeKey].specs;
    const tuned = calculateTuningUpgrades(bikeKey);

    const drawCurve = (stockV, tunedV, color, limit) => {
        const scaleY = (v) => h - (v / limit) * (h - 20) - 10;
        dynoCtx.strokeStyle = `${color}40`;
        dynoCtx.lineWidth = 1.5;
        dynoCtx.setLineDash([4, 4]);
        dynoCtx.beginPath();
        dynoCtx.moveTo(0, scaleY(stockV * 0.15));
        dynoCtx.bezierCurveTo(w * 0.4, scaleY(stockV * 0.85), w * 0.7, scaleY(stockV), w, scaleY(stockV * 0.9));
        dynoCtx.stroke();

        dynoCtx.strokeStyle = color;
        dynoCtx.lineWidth = 3;
        dynoCtx.setLineDash([]);
        dynoCtx.beginPath();
        dynoCtx.moveTo(0, scaleY(tunedV * 0.15));
        dynoCtx.bezierCurveTo(w * 0.4, scaleY(tunedV * 0.85), w * 0.7, scaleY(tunedV), w, scaleY(tunedV * 0.95));
        dynoCtx.stroke();
        dynoCtx.shadowColor = color; dynoCtx.shadowBlur = 8; dynoCtx.stroke(); dynoCtx.shadowBlur = 0;
    };

    drawCurve(stock.power, tuned.power, '#ff6600', maxSpecLimits.power);
    drawCurve(stock.torque, tuned.torque, '#10b981', maxSpecLimits.torque);
}

// 6. Paint Customizer & Neon LED Underglow
function initPaintCustomizer() {
    const swatches = document.querySelectorAll('.paint-swatch');
    swatches.forEach(swatch => {
        swatch.classList.toggle('active', swatch.getAttribute('data-color') === selectedColor);
        swatch.addEventListener('click', () => {
            swatches.forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            selectedColor = swatch.getAttribute('data-color');
            localStorage.setItem('velocity_paint_color', selectedColor);
            applyPaintFilters();
        });
    });

    const finishes = document.querySelectorAll('.finish-btn');
    finishes.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-finish') === selectedFinish);
        btn.addEventListener('click', () => {
            finishes.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');
            selectedFinish = btn.getAttribute('data-finish');
            localStorage.setItem('velocity_paint_finish', selectedFinish);
            applyPaintFilters();
        });
    });

    const nightBtn = document.getElementById('night-toggle-btn');
    const underglowCtrls = document.getElementById('underglow-controls');
    
    if (nightBtn) {
        nightBtn.addEventListener('click', () => {
            isNightMode = !isNightMode;
            localStorage.setItem('velocity_night_mode', isNightMode);
            document.body.classList.toggle('night-mode', isNightMode);
            nightBtn.classList.toggle('active', isNightMode);
            
            if (isNightMode) {
                nightBtn.innerHTML = '<i class="fa fa-sun"></i> Disable Night Mode';
                if (underglowCtrls) underglowCtrls.style.display = 'flex';
                showToast("Night Ride Active", "Neon LED underglow activated.");
            } else {
                nightBtn.innerHTML = '<i class="fa fa-moon"></i> Toggle Night Ride Mode';
                if (underglowCtrls) underglowCtrls.style.display = 'none';
                showToast("Night Ride Off", "Underglow shut down.");
            }
            if (document.getElementById('drag-track-canvas')) drawTrack(dragDistance, dragSpeed);
        });
    }

    const glowSwatches = document.querySelectorAll('.underglow-swatch');
    glowSwatches.forEach(gs => {
        gs.classList.toggle('active', gs.getAttribute('data-glow') === underglowColor);
        gs.addEventListener('click', () => {
            glowSwatches.forEach(x => x.classList.remove('active'));
            gs.classList.add('active');
            underglowColor = gs.getAttribute('data-glow');
            localStorage.setItem('velocity_underglow_color', underglowColor);
            document.documentElement.style.setProperty('--underglow-color', underglowColor);
            showToast("LED Color Changed", `Underglow set to ${gs.title}.`);
            if (document.getElementById('drag-track-canvas')) drawTrack(dragDistance, dragSpeed);
        });
    });
}

function applyPaintFilters() {
    let hue = "hue-rotate(0deg)";
    let sat = "saturate(100%)";
    let bri = "brightness(100%)";
    let con = "contrast(100%)";

    switch (selectedColor) {
        case 'red': hue = "hue-rotate(0deg)"; break;
        case 'orange': hue = "hue-rotate(25deg) saturate(130%)"; break;
        case 'blue': hue = "hue-rotate(210deg) saturate(120%)"; break;
        case 'green': hue = "hue-rotate(110deg) saturate(110%)"; break;
        case 'black': hue = "saturate(10%) brightness(35%)"; break;
    }

    switch (selectedFinish) {
        case 'glossy': con = "contrast(105%)"; break;
        case 'matte': 
            sat = selectedColor === 'black' ? "saturate(0%)" : "saturate(70%)";
            bri = "brightness(85%)";
            con = "contrast(90%)";
            break;
        case 'chrome': 
            bri = "brightness(120%)";
            con = "contrast(140%)";
            sat = selectedColor === 'black' ? "saturate(0%)" : "saturate(130%)";
            break;
    }

    if (bikeImage) bikeImage.style.filter = `${hue} ${sat} ${bri} ${con}`;
    if (bikeStyleImage) bikeStyleImage.style.filter = `${hue} ${sat} ${bri} ${con}`;
}

// 7. Eco Calculator
function initEcoSliders() {
    const updateCalculator = () => {
        const dist = parseFloat(calcDistance.value);
        const price = parseFloat(calcFuelPrice.value);
        const style = calcStyle.value;

        calcDistanceVal.textContent = `${dist} km`;
        calcFuelPriceVal.textContent = `₹${price}`;
        
        let label = "Normal";
        let styleMult = 1.0;
        if (style === '1') { label = "Economy"; styleMult = 1.12; }
        else if (style === '2') { label = "Normal"; styleMult = 1.0; }
        else if (style === '3') { label = "Aggressive"; styleMult = 0.85; }
        calcStyleVal.textContent = label;

        const monthlyDist = dist * 30;
        let baseM = 35;
        switch (currentBikeKey) {
            case 'ktm': baseM = 30; break;
            case 'yamaha': baseM = 45; break;
            case 'royal_enfield': baseM = 35; break;
            case 'pulsar': baseM = 38; break;
            case 'splendor': baseM = 65; break;
        }

        const baselineM = baseM * styleMult;
        const upgrades = calculateTuningUpgrades(currentBikeKey);
        const boost = upgrades.count > 0 ? 1.12 : 1.02;
        const tunedM = baselineM * boost;

        const monthlySavings = Math.round(((monthlyDist / baselineM) - (monthlyDist / tunedM)) * price);
        const yearlySavings = monthlySavings * 12;

        let totalSparesCost = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
        if (totalSparesCost === 0) totalSparesCost = 15000; 

        ecoMonthlySavings.textContent = `₹${monthlySavings.toLocaleString('en-IN')}`;
        ecoYearlySavings.textContent = `₹${yearlySavings.toLocaleString('en-IN')}`;
        ecoBreakeven.textContent = monthlySavings > 0 ? `Break-even on parts in ~${(totalSparesCost / monthlySavings).toFixed(1)} months` : "Dyno parts require fuel offsets";
    };

    calcDistance.addEventListener('input', updateCalculator);
    calcFuelPrice.addEventListener('input', updateCalculator);
    calcStyle.addEventListener('input', updateCalculator);
    updateCalculator();
}

// 8. 2D physics engine Drag Strip
function initDragStripSimulator() {
    dragCanvas = document.getElementById('drag-track-canvas');
    if (!dragCanvas) return;
    dragCtx = dragCanvas.getContext('2d');
    
    const launchBtn = document.getElementById('launch-test-btn');
    const resetBtn = document.getElementById('reset-test-btn');
    const sprintTimeText = document.getElementById('sprint-time');
    const sprintSpeedText = document.getElementById('sprint-speed');
    const sprintElapsedText = document.getElementById('sprint-elapsed');

    updateComparisonSpecBoards();

    const resizeTrackCanvas = () => {
        const rect = dragCanvas.parentElement.getBoundingClientRect();
        dragCanvas.width = rect.width - 40;
        dragCanvas.height = 180;
    };
    resizeTrackCanvas();

    drawTrack(0, 0);

    // Launch button is enabled by default now! No engine ignition required.
    launchBtn.disabled = false;
    launchBtn.title = "Press to Launch Quarter-Mile Drag Sprint!";

    launchBtn.addEventListener('click', () => {
        if (isDragging) return;
        runDragSimulation();
    });

    resetBtn.addEventListener('click', () => {
        stopDragSimulation();
        dragTime = 0; dragSpeed = 0; dragDistance = 0;
        sprintTimeText.textContent = "-- s";
        sprintSpeedText.textContent = "0 km/h";
        sprintElapsedText.textContent = "0.00s";
        drawTrack(0, 0);
    });
}

function updateComparisonSpecBoards() {
    const stock = bikesData[currentBikeKey];
    const tuned = calculateTuningUpgrades(currentBikeKey);

    document.getElementById('comp-stock-name').textContent = stock.name;
    document.getElementById('comp-stock-power').textContent = `${stock.specs.power} PS`;
    document.getElementById('comp-stock-weight').textContent = `${stock.specs.weight} kg`;
    document.getElementById('comp-stock-drag').textContent = stock.stockDrag.toFixed(2);
    document.getElementById('comp-stock-sprint').textContent = `${stock.stockSprint} s`;

    document.getElementById('comp-tuned-count').textContent = `${tuned.count} Parts Fitted`;
    document.getElementById('comp-tuned-power').textContent = `${tuned.power} PS`;
    document.getElementById('comp-tuned-weight').textContent = `${tuned.weight} kg`;
    
    let dragRed = 0;
    cart.forEach(item => {
        const isCompatible = item.compatibility.toLowerCase().includes(stock.name.toLowerCase()) || item.compatibility.toLowerCase().includes("universal");
        if (isCompatible && (item.id.includes("exh") || item.id === "inv-exh")) dragRed += 0.02;
    });
    const tunedCd = parseFloat((stock.stockDrag - dragRed).toFixed(3));
    document.getElementById('comp-tuned-drag').textContent = tunedCd.toFixed(2);

    calculatedSprintRecord = parseFloat((parseFloat(stock.stockSprint) * (stock.specs.power / tuned.power) * (tuned.weight / stock.specs.weight) * (tunedCd / stock.stockDrag)).toFixed(2));
    
    testTunedStats = {
        power: tuned.power,
        weight: tuned.weight,
        dragCd: tunedCd,
        estSprint: calculatedSprintRecord
    };

    // Render active fitted performance parts for Drag Test card
    const dragFittedList = document.getElementById('drag-fitted-list');
    if (dragFittedList) {
        dragFittedList.innerHTML = '';
        let fittedItems = [];

        cart.forEach(item => {
            const isCompatible = item.compatibility.toLowerCase().includes(stock.name.toLowerCase()) || 
                                 item.compatibility.toLowerCase().includes("universal") ||
                                 (currentBikeKey === 'ktm' && item.compatibility.toLowerCase().includes("ktm")) ||
                                 (currentBikeKey === 'yamaha' && item.compatibility.toLowerCase().includes("yamaha")) ||
                                 (currentBikeKey === 'royal_enfield' && item.compatibility.toLowerCase().includes("re")) ||
                                 (currentBikeKey === 'pulsar' && item.compatibility.toLowerCase().includes("pulsar"));

            if (isCompatible) {
                let specBonus = "";
                if (item.id.includes("eng")) {
                    specBonus = `(+${(stock.specs.power * 0.15).toFixed(1)} PS, +15 km/h)`;
                } else if (item.id.includes("exh") || item.id === "inv-exh") {
                    specBonus = "(+3.2 PS, -4.5 kg)";
                } else if (item.id.includes("sus")) {
                    specBonus = "(-2.0 kg)";
                } else if (item.id === "inv-filter") {
                    specBonus = "(+1.4 PS, +0.8 Nm)";
                } else if (item.id === "inv-chain") {
                    specBonus = "(+0.5 PS, +3 km/h)";
                } else if (item.id.includes("wheel") || item.id.includes("alloy")) {
                    specBonus = "(-3.0 kg)";
                } else {
                    specBonus = "(Fitted)";
                }

                fittedItems.push(`
                    <div style="margin-bottom: 6px; padding-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.04); display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                        <span style="color: #ffffff; font-weight: 500; font-size: 0.78rem;">✓ ${item.name}</span>
                        <span style="font-size: 0.72rem; color: var(--accent); white-space: nowrap;">${specBonus}</span>
                    </div>
                `);
            }
        });

        if (fittedItems.length === 0) {
            dragFittedList.innerHTML = `<span style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">No custom tuning parts active on this bike model. Scroll up and tap on hotspots or shop items to equip upgrades!</span>`;
        } else {
            dragFittedList.innerHTML = fittedItems.join('');
        }
    }
}

// Web Audio API Drag Synth variables
let dragAudioCtx = null;
let dragOsc1 = null;
let dragOsc2 = null;
let dragGainNode = null;
let dragFilterNode = null;

function initDragAudio() {
    if (!dragAudioCtx) {
        dragAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (dragAudioCtx.state === 'suspended') {
        dragAudioCtx.resume();
    }
}

function startDragSoundSynth() {
    try {
        initDragAudio();
        const now = dragAudioCtx.currentTime;

        // Two oscillators for a fat engine rumble
        dragOsc1 = dragAudioCtx.createOscillator();
        dragOsc2 = dragAudioCtx.createOscillator();
        dragOsc1.type = 'sawtooth';
        dragOsc2.type = 'sawtooth';
        
        dragOsc1.detune.setValueAtTime(-6, now);
        dragOsc2.detune.setValueAtTime(6, now);

        // Lowpass filter for the intake box roar
        dragFilterNode = dragAudioCtx.createBiquadFilter();
        dragFilterNode.type = 'lowpass';
        dragFilterNode.Q.setValueAtTime(4.0, now);

        // Master gain
        dragGainNode = dragAudioCtx.createGain();
        dragGainNode.gain.setValueAtTime(0.001, now);
        // Ramp up volume rapidly to simulate clutch dump / launch roar
        dragGainNode.gain.exponentialRampToValueAtTime(0.18, now + 0.15);

        // Connect
        dragOsc1.connect(dragFilterNode);
        dragOsc2.connect(dragFilterNode);
        dragFilterNode.connect(dragGainNode);
        dragGainNode.connect(dragAudioCtx.destination);

        // Play
        dragOsc1.start(now);
        dragOsc2.start(now);

        // Initial pitch frequency based on active bike idle pitch
        let idlePitch = 50;
        if (currentBikeKey === 'ktm') idlePitch = 55;
        else if (currentBikeKey === 'yamaha') idlePitch = 65;
        else if (currentBikeKey === 'royal_enfield') idlePitch = 36;
        else if (currentBikeKey === 'pulsar') idlePitch = 50;
        else if (currentBikeKey === 'splendor') idlePitch = 45;

        dragOsc1.frequency.setValueAtTime(idlePitch, now);
        dragOsc2.frequency.setValueAtTime(idlePitch * 0.5, now);
        dragFilterNode.frequency.setValueAtTime(idlePitch * 3.0, now);
    } catch (e) {
        console.error("Audio failed to start", e);
    }
}

function updateDragSoundPitch(rpm) {
    if (!dragAudioCtx || !dragOsc1) return;
    try {
        const now = dragAudioCtx.currentTime;
        
        let idlePitch = 50;
        if (currentBikeKey === 'ktm') idlePitch = 55;
        else if (currentBikeKey === 'yamaha') idlePitch = 65;
        else if (currentBikeKey === 'royal_enfield') idlePitch = 36;
        else if (currentBikeKey === 'pulsar') idlePitch = 50;
        else if (currentBikeKey === 'splendor') idlePitch = 45;

        const specRatio = calculateTuningUpgrades(currentBikeKey).powerDelta > 0 ? 1.25 : 1.0;
        // Frequency proportional to engine RPM
        const currentFreq = idlePitch + ((rpm / 15) * specRatio);

        dragOsc1.frequency.setValueAtTime(currentFreq, now);
        dragOsc2.frequency.setValueAtTime(currentFreq * 0.5, now);
        dragFilterNode.frequency.setValueAtTime(currentFreq * 3.2, now);
    } catch(e) {}
}

function triggerGearShiftSound() {
    if (!dragAudioCtx || !dragGainNode) return;
    try {
        // Play shift backfire pop, but DO NOT drop volume
        playShiftPopAudio();
    } catch(e) {}
}

function playShiftPopAudio() {
    if (!dragAudioCtx) return;
    try {
        const now = dragAudioCtx.currentTime;
        
        // Create noise buffer for backfire pop
        const bufferSize = dragAudioCtx.sampleRate * 0.06;
        const buffer = dragAudioCtx.createBuffer(1, bufferSize, dragAudioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noiseNode = dragAudioCtx.createBufferSource();
        noiseNode.buffer = buffer;

        const popFilter = dragAudioCtx.createBiquadFilter();
        popFilter.type = 'bandpass';
        popFilter.frequency.setValueAtTime(260, now);
        popFilter.Q.setValueAtTime(8, now);

        const popGain = dragAudioCtx.createGain();
        popGain.gain.setValueAtTime(0.38, now);
        popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        noiseNode.connect(popFilter);
        popFilter.connect(popGain);
        popGain.connect(dragAudioCtx.destination);

        noiseNode.start(now);
    } catch(e) {}
}

function stopDragSoundSynth() {
    if (!dragAudioCtx || !dragOsc1) return;
    try {
        const now = dragAudioCtx.currentTime;
        // Fade out
        dragGainNode.gain.linearRampToValueAtTime(0.001, now + 0.25);
        
        const osc1Copy = dragOsc1;
        const osc2Copy = dragOsc2;
        
        dragOsc1 = null;
        dragOsc2 = null;

        setTimeout(() => {
            try {
                osc1Copy.stop();
                osc2Copy.stop();
                osc1Copy.disconnect();
                osc2Copy.disconnect();
                dragFilterNode.disconnect();
                dragGainNode.disconnect();
            } catch(e){}
        }, 300);
    } catch(e) {}
}

function runDragSimulation() {
    isDragging = true;
    const launchBtn = document.getElementById('launch-test-btn');
    launchBtn.disabled = true;
    
    if (shiftGearBtn) {
        shiftGearBtn.style.display = 'inline-flex';
    }

    const sprintTimeText = document.getElementById('sprint-time');
    const sprintSpeedText = document.getElementById('sprint-speed');
    const sprintElapsedText = document.getElementById('sprint-elapsed');

    let startTime = performance.now();
    let lastTime = performance.now();
    let hasReached100 = false;
    let sprint100Time = 0;

    // Reset manual shifter variables
    currentGear = 1;
    engineRpm = 1000;
    shiftFeedbackText = "";
    shiftFeedbackTimer = 0;

    // Start engine sounds automatically
    startDragSoundSynth();

    const updatePhysics = (timestamp) => {
        if (!isDragging) return;

        const dt = (timestamp - lastTime) / 1000;
        lastTime = timestamp;
        dragTime = (timestamp - startTime) / 1000;

        // Gear-based speed limits
        const gearMaxSpeed = currentGear === 1 ? 52 : currentGear === 2 ? 98 : currentGear === 3 ? 146 : (testTunedStats.speed || 180);
        const gearMinSpeed = currentGear === 1 ? 0 : currentGear === 2 ? 38 : currentGear === 3 ? 75 : 115;

        // Calculate RPM based on speed and gear
        if (dragSpeed < gearMinSpeed) {
            // Under-revving due to short shift / engine bogging
            engineRpm = 1000 + (dragSpeed / Math.max(1, gearMinSpeed)) * 2000;
        } else {
            const speedRatio = (dragSpeed - gearMinSpeed) / (gearMaxSpeed - gearMinSpeed);
            engineRpm = 3000 + Math.min(1, Math.max(0, speedRatio)) * 8500;
        }

        // Rev limiter threshold cuts
        let drivingForceFactor = 1.0;
        if (engineRpm >= 11500) {
            // Tat-tat-tat rev bounce
            engineRpm = 11500 + Math.sin(timestamp * 0.08) * 350;
            dragSpeed = Math.min(dragSpeed, gearMaxSpeed);
            drivingForceFactor = 0.0; // Ignition cut!
            // Limiter pops sound snaps
            if (Math.random() < 0.15) playShiftPopAudio();
        } else if (engineRpm < 6000) {
            // Bogging drops power
            drivingForceFactor = 0.4 + ((engineRpm - 1000) / 5000) * 0.6;
        }

        const maxForce = testTunedStats.power * 22;
        const drivingForce = maxForce * Math.max(0.1, 1 - (dragSpeed / (testTunedStats.power * 4))) * drivingForceFactor;
        const aeroDrag = 0.5 * 1.2 * testTunedStats.dragCd * 0.6 * (dragSpeed / 3.6) * (dragSpeed / 3.6);
        const friction = testTunedStats.weight * 0.15;

        const acceleration = Math.max(0, (drivingForce - aeroDrag - friction) / testTunedStats.weight);
        const speedMS = (dragSpeed / 3.6) + (acceleration * dt);
        dragSpeed = Math.min(testTunedStats.power * 4.5, speedMS * 3.6);
        dragDistance += (speedMS * dt);

        if (dragSpeed >= 100 && !hasReached100) {
            hasReached100 = true;
            sprint100Time = parseFloat((testTunedStats.estSprint + (Math.random() * 0.08 - 0.04)).toFixed(2));
            sprintTimeText.textContent = `${sprint100Time} s`;
            showToast("100 km/h Hit!", `Sprint time: ${sprint100Time}s.`);
        }

        sprintSpeedText.textContent = `${Math.round(dragSpeed)} km/h`;
        sprintElapsedText.textContent = `${dragTime.toFixed(2)}s`;

        updateDragSoundPitch(engineRpm);
        drawTrack(dragDistance, dragSpeed);

        if (dragDistance < 1000) {
            dragAnimId = requestAnimationFrame(updatePhysics);
        } else {
            isDragging = false;
            // Freeze final 1km sprint elapsed time in tuned column
            document.getElementById('comp-tuned-sprint').textContent = `${dragTime.toFixed(2)} s`;
            
            // Pop on finish line
            playShiftPopAudio();
            setTimeout(playShiftPopAudio, 120);
            stopDragSoundSynth();
            if (shiftGearBtn) shiftGearBtn.style.display = 'none';
            showToast("Finish Line!", `1km Drag sprint complete in ${dragTime.toFixed(2)}s.`);
            launchBtn.disabled = false;

            // Save result to personal best leaderboard
            saveLeaderboardEntry({
                bike: bikesData[currentBikeKey].name,
                time: parseFloat(dragTime.toFixed(2)),
                topSpeed: Math.round(dragSpeed),
                tuned: testTunedStats && testTunedStats.power > bikesData[currentBikeKey].specs.power,
                date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
            });
            renderLeaderboard();
        }
    };
    dragAnimId = requestAnimationFrame(updatePhysics);
}

function stopDragSimulation() {
    isDragging = false;
    if (dragAnimId) {
        cancelAnimationFrame(dragAnimId);
        dragAnimId = null;
    }
    stopDragSoundSynth();
    if (shiftGearBtn) {
        shiftGearBtn.style.display = 'none';
    }
    const launchBtn = document.getElementById('launch-test-btn');
    if (launchBtn) launchBtn.disabled = false;
}

function drawTrack(distance, speed) {
    if (!dragCtx) return;
    const w = dragCanvas.width;
    const h = dragCanvas.height;

    // 1. Paint road
    dragCtx.fillStyle = '#0f172a';
    dragCtx.fillRect(0, 0, w, h);
    
    // Outer grass/background border
    dragCtx.fillStyle = '#1e293b';
    dragCtx.fillRect(0, h * 0.35, w, h * 0.55);

    // Yellow outer line boundaries
    dragCtx.fillStyle = '#ea580c';
    dragCtx.fillRect(0, h * 0.35, w, 4);
    dragCtx.fillRect(0, h * 0.9, w, 4);

    // Dashed center lane (faster scrolling for high-speed effect)
    dragCtx.strokeStyle = '#ffffff';
    dragCtx.lineWidth = 3;
    dragCtx.setLineDash([20, 15]);
    dragCtx.lineDashOffset = -distance * 8;
    dragCtx.beginPath();
    dragCtx.moveTo(0, h * 0.62);
    dragCtx.lineTo(w, h * 0.62);
    dragCtx.stroke();
    dragCtx.setLineDash([]); 

    // Starting grid line (moves offscreen dynamically)
    const startLineX = 60 - distance * 3.5;
    if (startLineX > 0) {
        dragCtx.fillStyle = '#475569';
        dragCtx.fillRect(startLineX, h * 0.35, 12, h * 0.55);
        // Checkered lines
        dragCtx.strokeStyle = '#ffffff';
        dragCtx.lineWidth = 2;
        dragCtx.beginPath();
        dragCtx.moveTo(startLineX + 6, h * 0.35);
        dragCtx.lineTo(startLineX + 6, h * 0.9);
        dragCtx.stroke();
    }

    // Progress bar tracker
    dragCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    dragCtx.fillRect(60, 15, w - 120, 5);
    dragCtx.fillStyle = 'var(--accent)';
    dragCtx.fillRect(60, 15, (Math.min(distance, 1000) / 1000) * (w - 120), 5);
    dragCtx.fillStyle = '#ffffff';
    dragCtx.font = "bold 9px 'Space Grotesk', sans-serif";
    dragCtx.fillText(`${Math.round(Math.min(distance, 1000))}m / 1000m`, w - 130, 26);

    // Visual bike coordinate scaled relative to 1km (1000m) total distance
    const bikeX = 60 + (Math.min(distance, 1000) / 1000) * (w - 180);
    const bikeY = h * 0.52;

    // 2. Wheelspin Burnout Smoke (Rear tire is at bikeX + 12)
    if (isDragging && speed > 2 && speed < 65) {
        dragCtx.fillStyle = `rgba(226, 232, 240, ${0.45 * (1 - speed / 65)})`;
        for (let i = 0; i < 5; i++) {
            const smokeX = bikeX + 12 - 12 - (Math.random() * 20);
            const smokeY = bikeY + 24 + (Math.random() * 10 - 5);
            const smokeR = 5 + Math.random() * 8;
            dragCtx.beginPath();
            dragCtx.arc(smokeX, smokeY, smokeR, 0, 2 * Math.PI);
            dragCtx.fill();
        }
    }

    // 3. Ambient LED Neon Underglow
    if (isNightMode) {
        dragCtx.shadowColor = underglowColor;
        dragCtx.shadowBlur = 18;
        dragCtx.fillStyle = underglowColor;
        dragCtx.beginPath();
        dragCtx.ellipse(bikeX + 35, bikeY + 28, 32, 5, 0, 0, 2 * Math.PI);
        dragCtx.fill();
        dragCtx.shadowBlur = 0; // reset
    }

    // 4. Draw Bike Name Label above
    const isTuned = testTunedStats && testTunedStats.power > bikesData[currentBikeKey].specs.power;
    const labelText = bikesData[currentBikeKey].name + (isTuned ? " (Tuned)" : " (Stock)");
    dragCtx.font = "bold 10px 'Outfit', sans-serif";
    
    // Label background tag
    const textWidth = dragCtx.measureText(labelText).width;
    dragCtx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    dragCtx.fillRect(bikeX + 35 - textWidth/2 - 6, bikeY - 26, textWidth + 12, 16);
    dragCtx.strokeStyle = 'var(--accent)';
    dragCtx.lineWidth = 1;
    dragCtx.strokeRect(bikeX + 35 - textWidth/2 - 6, bikeY - 26, textWidth + 12, 16);
    
    // Label text
    dragCtx.fillStyle = '#ffffff';
    dragCtx.fillText(labelText, bikeX + 35 - textWidth/2, bikeY - 14);

    // 5. Detailed Rotating Wheels
    const rotation = (distance / 12) % (2 * Math.PI);
    
    const drawWheel = (wx, wy) => {
        dragCtx.save();
        dragCtx.translate(wx, wy);
        dragCtx.rotate(rotation);
        
        // Outer rubber tire
        dragCtx.beginPath();
        dragCtx.arc(0, 0, 11, 0, 2 * Math.PI);
        dragCtx.fillStyle = '#1e293b';
        dragCtx.fill();
        dragCtx.lineWidth = 3.5;
        dragCtx.strokeStyle = '#020617';
        dragCtx.stroke();

        // Silver brake discs
        dragCtx.fillStyle = '#cbd5e1';
        dragCtx.beginPath();
        dragCtx.arc(0, 0, 7, 0, 2 * Math.PI);
        dragCtx.fill();
        // Ventilation holes on brakes
        dragCtx.fillStyle = '#334155';
        for (let i = 0; i < 4; i++) {
            const holeAngle = i * Math.PI / 2;
            dragCtx.beginPath();
            dragCtx.arc(Math.cos(holeAngle) * 5, Math.sin(holeAngle) * 5, 0.8, 0, 2 * Math.PI);
            dragCtx.fill();
        }

        // Alloy spoke lines
        dragCtx.strokeStyle = 'var(--accent)';
        dragCtx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5;
            dragCtx.beginPath();
            dragCtx.moveTo(0, 0);
            dragCtx.lineTo(Math.cos(angle) * 9, Math.sin(angle) * 9);
            dragCtx.stroke();
        }

        // Hub center
        dragCtx.beginPath();
        dragCtx.arc(0, 0, 3, 0, 2 * Math.PI);
        dragCtx.fillStyle = '#94a3b8';
        dragCtx.fill();
        
        dragCtx.restore();
    };

    drawWheel(bikeX + 12, bikeY + 24); // Rear wheel
    drawWheel(bikeX + 58, bikeY + 24); // Front wheel

    // 6. Drive Chain (Connecting rear wheel hub to engine sprocket)
    dragCtx.strokeStyle = '#f1f5f9';
    dragCtx.lineWidth = 1.2;
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 12, bikeY + 24);
    dragCtx.lineTo(bikeX + 35, bikeY + 18);
    dragCtx.stroke();

    // 7. Realistic detailed body chassis & fairings
    dragCtx.fillStyle = 'var(--accent)';
    dragCtx.strokeStyle = '#475569';
    dragCtx.lineWidth = 1.5;
    
    dragCtx.beginPath();
    // Engine cowl & underbelly
    dragCtx.moveTo(bikeX + 22, bikeY + 22);
    dragCtx.lineTo(bikeX + 45, bikeY + 22);
    // Fairings going to front fork nose
    dragCtx.lineTo(bikeX + 52, bikeY + 8);
    dragCtx.lineTo(bikeX + 48, bikeY + 2);
    // Tank cover
    dragCtx.bezierCurveTo(bikeX + 40, bikeY - 4, bikeX + 35, bikeY - 2, bikeX + 32, bikeY + 5);
    // Seat subframe
    dragCtx.lineTo(bikeX + 20, bikeY + 6);
    dragCtx.lineTo(bikeX + 12, bikeY + 12);
    dragCtx.closePath();
    dragCtx.fill();
    dragCtx.stroke();

    // Metallic frame truss lines
    dragCtx.strokeStyle = '#94a3b8';
    dragCtx.lineWidth = 2;
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 24, bikeY + 18);
    dragCtx.lineTo(bikeX + 38, bikeY + 8);
    dragCtx.lineTo(bikeX + 44, bikeY + 18);
    dragCtx.stroke();

    // Engine Cylinder block details
    dragCtx.fillStyle = '#64748b';
    dragCtx.fillRect(bikeX + 32, bikeY + 12, 12, 8);
    dragCtx.fillStyle = '#475569'; // Cylinder fins
    dragCtx.fillRect(bikeX + 32, bikeY + 14, 12, 2);
    dragCtx.fillRect(bikeX + 32, bikeY + 18, 12, 2);

    // Handlebars and fork assemblies
    dragCtx.strokeStyle = '#334155';
    dragCtx.lineWidth = 2.5;
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 58, bikeY + 24); // Front axle
    dragCtx.lineTo(bikeX + 48, bikeY);   // Triple clamp
    dragCtx.stroke();
    // Handlebar bar clip
    dragCtx.fillStyle = '#0f172a';
    dragCtx.fillRect(bikeX + 45, bikeY - 2, 6, 3);

    // Exhaust pipe (Carbon replica or stock chrome)
    dragCtx.strokeStyle = '#475569';
    dragCtx.lineWidth = 3.5;
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 26, bikeY + 20);
    dragCtx.lineTo(bikeX + 9, bikeY + 14);
    dragCtx.stroke();
    
    // Performance exhaust glowing fire cone when racing
    if (isDragging && speed > 5) {
        dragCtx.fillStyle = 'rgba(234, 88, 12, 0.7)';
        dragCtx.beginPath();
        dragCtx.moveTo(bikeX + 9, bikeY + 13);
        dragCtx.lineTo(bikeX + 2, bikeY + 14);
        dragCtx.lineTo(bikeX + 9, bikeY + 15);
        dragCtx.closePath();
        dragCtx.fill();
    }

    // 8. Stylized Leaning Rider in Racing Tuck
    // Suit/jacket
    dragCtx.fillStyle = '#0f172a';
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 22, bikeY + 6); // Seat hip
    dragCtx.lineTo(bikeX + 35, bikeY - 6); // Shoulder
    dragCtx.lineTo(bikeX + 45, bikeY - 2); // Hands on bar
    dragCtx.lineTo(bikeX + 34, bikeY + 6); // Knee forward
    dragCtx.closePath();
    dragCtx.fill();

    // Aerodynamic hump on jacket back
    dragCtx.fillStyle = '#1e293b';
    dragCtx.beginPath();
    dragCtx.moveTo(bikeX + 24, bikeY + 3);
    dragCtx.lineTo(bikeX + 28, bikeY - 4);
    dragCtx.lineTo(bikeX + 32, bikeY - 2);
    dragCtx.closePath();
    dragCtx.fill();

    // Helmet (Head) leaning down
    dragCtx.fillStyle = '#f8fafc'; // Helmet color
    dragCtx.beginPath();
    dragCtx.arc(bikeX + 38, bikeY - 10, 5, 0, 2 * Math.PI);
    dragCtx.fill();
    // Visor reflection
    dragCtx.fillStyle = 'var(--accent)';
    dragCtx.fillRect(bikeX + 39, bikeY - 12, 3, 4);

    // 9. Shift Feedback Popup Overlay
    if (shiftFeedbackTimer > 0) {
        dragCtx.save();
        dragCtx.fillStyle = shiftFeedbackColor;
        dragCtx.font = "bold 11px 'Space Grotesk', sans-serif";
        dragCtx.shadowColor = shiftFeedbackColor;
        dragCtx.shadowBlur = 8;
        // Text centered above the rider's helmet
        const fTextW = dragCtx.measureText(shiftFeedbackText).width;
        dragCtx.fillText(shiftFeedbackText, bikeX + 35 - fTextW / 2, bikeY - 30);
        dragCtx.restore();
        shiftFeedbackTimer--;
    }

    // 10. Tachometer Dashboard HUD Overlay
    const tX = w / 2 - 110;
    const tY = h - 22;
    const tW = 220;
    const tH = 9;

    // HUD glass casing background
    dragCtx.fillStyle = 'rgba(15, 23, 42, 0.82)';
    dragCtx.fillRect(tX - 8, tY - 13, tW + 16, 21);
    dragCtx.strokeStyle = 'var(--border-glass)';
    dragCtx.lineWidth = 1;
    dragCtx.strokeRect(tX - 8, tY - 13, tW + 16, 21);

    // Fill ratio
    const rpmRatio = Math.min(1, engineRpm / 12000);
    const fillW = rpmRatio * tW;

    // Linear color gradient for powerband
    const grad = dragCtx.createLinearGradient(tX, 0, tX + tW, 0);
    grad.addColorStop(0, '#06b6d4');   // Cyan low RPM
    grad.addColorStop(0.7, '#eab308'); // Yellow powerband
    grad.addColorStop(0.88, '#ef4444'); // Red limiter zone

    dragCtx.fillStyle = grad;
    dragCtx.fillRect(tX, tY, fillW, tH);

    // Redline marker notch at 10500 RPM
    dragCtx.fillStyle = '#ef4444';
    dragCtx.fillRect(tX + tW * 0.88, tY, 2, tH);

    // Labels
    dragCtx.fillStyle = '#ffffff';
    dragCtx.font = "bold 9px 'Space Grotesk', sans-serif";
    dragCtx.fillText(`GEAR ${currentGear}`, tX, tY - 3);
    
    // Draw RPM value
    dragCtx.font = "9px 'Space Grotesk', sans-serif";
    const rpmLabelText = `${Math.round(engineRpm)} RPM`;
    const rpmTextW = dragCtx.measureText(rpmLabelText).width;
    dragCtx.fillText(rpmLabelText, tX + tW - rpmTextW, tY - 3);

    // Dynamic warning flash prompt for shifting
    if (engineRpm >= 10000 && isDragging) {
        dragCtx.save();
        dragCtx.fillStyle = Math.floor(Date.now() / 120) % 2 === 0 ? '#ef4444' : '#ffffff';
        dragCtx.font = "bold 9px 'Space Grotesk', sans-serif";
        const promptText = "SHIFT NOW! [SPACE]";
        const promptW = dragCtx.measureText(promptText).width;
        dragCtx.fillText(promptText, tX + tW / 2 - promptW / 2, tY - 3);
        dragCtx.restore();
    }
}

// 13. Parts Shop Grid searching
function initPartsGrid(items) {
    const grid = document.getElementById('parts-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px; color: var(--text-secondary);">
                <i class="fa fa-search" style="font-size: 2.8rem; margin-bottom: 15px; color: var(--text-muted);"></i>
                <p>No parts match your search terms.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('part-card');
        const iconClass = item.icon || 'fa-cog';

        card.innerHTML = `
            <span class="part-badge">${item.category}</span>
            <div class="part-card-img-placeholder">
                <i class="fa ${iconClass}"></i>
            </div>
            <div class="part-info">
                <span class="part-compatibility">${item.compatibility}</span>
                <h4 class="part-name">${item.name}</h4>
                <p class="part-desc">${item.desc}</p>
                <div class="part-footer">
                    <div class="part-price-block">
                        <span class="price-label">Market Price</span>
                        <span class="price-amount">₹${item.price.toLocaleString('en-IN')}</span>
                    </div>
                    <button class="add-cart-btn" onclick="addToCart('${item.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price}, '${item.compatibility}')" title="Add to Cart">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function handleFilterChange() {
    const query = document.getElementById('search-parts').value.toLowerCase().trim();
    const activeTab = document.querySelector('.cat-tab.active').getAttribute('data-cat');
    const filtered = partsInventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || item.compatibility.toLowerCase().includes(query);
        const matchesCategory = activeTab === 'all' || item.category === activeTab;
        return matchesSearch && matchesCategory;
    });
    initPartsGrid(filtered);
}

// 14. Shopping Cart
function toggleCart() {
    if (cartDrawer) {
        cartDrawer.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    }
}

window.addToCart = function(id, name, price, compatibility) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, name, price, compatibility, quantity: 1 });
    }
    updateCartUI();
    saveCart();
    updateSpecsDashboard(currentBikeKey);
    initEcoSliders();
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();
    showToast("Fitment Added", `${name} fitted.`);
};

// Local storage saving
function saveCart() {
    localStorage.setItem('bike_website_cart', JSON.stringify(cart));
}

function updateCartUI() {
    if (!cartBadge) return;
    const qty = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    cartBadge.textContent = qty;
    cartBadge.style.display = qty > 0 ? 'flex' : 'none';

    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-view">
                <i class="fa fa-shopping-basket"></i>
                <p>Your basket is currently empty.</p>
            </div>
        `;
        cartSubtotal.textContent = "₹0";
        cartGst.textContent = "₹0";
        cartTotal.textContent = "₹0";
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
        checkoutBtn.style.cursor = 'not-allowed';
        return;
    }

    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = '1';
    checkoutBtn.style.cursor = 'pointer';

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const cItem = document.createElement('div');
        cItem.classList.add('cart-item');
        cItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-compat">${item.compatibility}</div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeItem('${item.id}')">
                <i class="fa fa-trash-alt"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cItem);
    });

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    cartGst.textContent = `₹${gst.toLocaleString('en-IN')}`;
    cartTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
}

window.changeQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeItem(id);
        return;
    }
    updateCartUI();
    saveCart();
    updateSpecsDashboard(currentBikeKey);
    initEcoSliders();
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();
};

window.removeItem = function(id) {
    const index = cart.findIndex(i => i.id === id);
    if (index === -1) return;
    const name = cart[index].name;
    cart.splice(index, 1);
    updateCartUI();
    saveCart();
    updateSpecsDashboard(currentBikeKey);
    initEcoSliders();
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();
    showToast("Removed Item", `${name} removed.`);
};

let currentTxnDetails = null; // Temporary state holder for pending checkout

function processCheckout() {
    if (cart.length === 0) return;
    const txn = "TXN" + Math.floor(10000000 + Math.random() * 90000000);
    const date = new Date().toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    document.getElementById('receipt-txn-id').textContent = txn;
    document.getElementById('receipt-date').textContent = date;

    const receipt = document.getElementById('receipt-items');
    receipt.innerHTML = '';
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const row = document.createElement('div');
        row.classList.add('receipt-row');
        row.innerHTML = `<span>${item.name} (x${item.quantity})</span><span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>`;
        receipt.appendChild(row);
    });

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    document.querySelectorAll('#receipt-subtotal').forEach(el => el.textContent = `₹${subtotal.toLocaleString('en-IN')}`);
    document.querySelectorAll('#receipt-gst').forEach(el => el.textContent = `₹${gst.toLocaleString('en-IN')}`);
    document.querySelectorAll('#receipt-total').forEach(el => el.textContent = `₹${total.toLocaleString('en-IN')}`);

    // If appointment details exist, display them in the receipt modal
    if (currentBookingDetails) {
        document.getElementById('receipt-booking-info').innerHTML = `<i class="fa fa-calendar-alt"></i> ${currentBookingDetails.center} - ${currentBookingDetails.date} @ ${currentBookingDetails.time}`;
        document.getElementById('receipt-booking-rider').textContent = `Rider: ${currentBookingDetails.rider} (${currentBookingDetails.phone})`;
    }

    // Store txn details and submit immediately to Supabase
    currentTxnDetails = {
        id: txn,
        date: date,
        dateRaw: new Date().toISOString(),
        items: cart.map(item => `${item.name} (x${item.quantity})`),
        total: total,
        booking: typeof currentBookingDetails !== 'undefined' ? currentBookingDetails : null,
        paymentMethod: 'Online'
    };

    submitOrder(currentTxnDetails);
    receiptModal.classList.add('open');
}

function closeReceipt() {
    receiptModal.classList.remove('open');
    currentTxnDetails = null;

    cart = [];
    saveCart();
    updateCartUI();
    updateSpecsDashboard(currentBikeKey);
    initEcoSliders();
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();
    showToast("Order Placed", "Invoice settled. Spares sent to local assembly hub.");
}


function getSupabaseClient() {
    if (window.supabaseClientInstance && typeof window.supabaseClientInstance.from === 'function') {
        return window.supabaseClientInstance;
    }
    if (typeof supabase !== 'undefined' && supabase && typeof supabase.from === 'function') {
        return supabase;
    }
    if (window.supabase && typeof window.supabase.from === 'function') {
        return window.supabase;
    }
    return null;
}

function saveLocalOrder(orderData) {
    try {
        let localOrders = JSON.parse(localStorage.getItem('VELOCITY_LOCAL_ORDERS') || '[]');
        const exists = localOrders.some(o => o.id === orderData.id);
        if (!exists) {
            localOrders.unshift(orderData);
            localStorage.setItem('VELOCITY_LOCAL_ORDERS', JSON.stringify(localOrders));
        }
    } catch (e) {
        console.warn("Could not save to localStorage:", e);
    }
}

// ================= Order Submission (Supabase + Local Fallback) =================
async function submitOrder(orderData) {
    // 1. Guaranteed storage in LocalStorage fallback
    saveLocalOrder(orderData);

    // 2. Attempt Supabase sync
    try {
        const client = getSupabaseClient();
        if (!client) {
            showToast("Order Saved", `Order ${orderData.id} stored locally in browser.`);
            return;
        }

        const itemsStr = (orderData.items || []).join(', ');
        const centerName = orderData.booking ? orderData.booking.center : 'Walk-in Hub';
        const apptDate = orderData.booking ? orderData.booking.date : '';
        const apptTime = orderData.booking ? orderData.booking.time : '';
        const payMethod = orderData.paymentMethod || 'Online';
        const addressText = `Center: ${centerName} | Appt: ${apptDate} @ ${apptTime} | Pay: ${payMethod} | Items: ${itemsStr}`;

        const { error } = await client.from('orders').insert([{
            customer_name: orderData.booking ? orderData.booking.rider : 'Walk-in Customer',
            phone: orderData.booking ? orderData.booking.phone : 'N/A',
            address: addressText,
            total: orderData.total
        }]);

        if (error) {
            console.warn("Supabase insert note:", error);
            showToast("Order Saved", `Saved locally. Note: ${error.message || 'Supabase table pending'}`);
        } else {
            showToast("Order Synced", `Order ${orderData.id} saved to Supabase.`);
        }
    } catch (err) {
        console.warn("Supabase insert exception:", err);
        showToast("Order Saved", `Order ${orderData.id} stored in browser.`);
    }
}

// ================= My Orders Drawer =================
function openOrdersDrawer() {
    document.getElementById('orders-overlay').style.display = 'block';
    document.getElementById('orders-drawer').style.right = '0';
    loadOrders();
}

function closeOrdersDrawer() {
    document.getElementById('orders-overlay').style.display = 'none';
    document.getElementById('orders-drawer').style.right = '-480px';
}

async function loadOrders() {
    const listContainer = document.getElementById('orders-list-container');
    const badge = document.getElementById('orders-source-badge');
    const countText = document.getElementById('orders-count-text');

    if (!listContainer) return;

    listContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
            <i class="fa fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 12px; display: block; color: var(--accent);"></i>
            <p style="font-size: 0.82rem; font-family: 'Space Grotesk', sans-serif;">Loading your orders…</p>
        </div>
    `;

    let orders = [];
    let source = 'local';

    try {
        const client = getSupabaseClient();
        if (!client) {
            throw new Error("Supabase client not loaded.");
        }

        const { data, error } = await client
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        orders = (data || []).map(row => {
            let center = 'Walk-in';
            let apptDate = '';
            let apptTime = '';
            let payMethod = 'Online';
            let itemsList = ['Custom Order'];
            
            if (row.address) {
                const parts = row.address.split(' | ');
                parts.forEach(p => {
                    if (p.startsWith('Center: ')) center = p.replace('Center: ', '');
                    else if (p.startsWith('Appt: ')) {
                        const apptInfo = p.replace('Appt: ', '');
                        const apptParts = apptInfo.split(' @ ');
                        apptDate = apptParts[0] || '';
                        apptTime = apptParts[1] || '';
                    } else if (p.startsWith('Pay: ')) {
                        payMethod = p.replace('Pay: ', '');
                    } else if (p.startsWith('Items: ')) {
                        const itemsStr = p.replace('Items: ', '');
                        itemsList = itemsStr.split(', ');
                    }
                });
            }

            return {
                id: `TXN-${row.id}`,
                date: new Date(row.created_at).toLocaleDateString('en-IN', {
                    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                }),
                dateRaw: row.created_at,
                items: itemsList,
                total: row.total || 0,
                paymentMethod: payMethod,
                booking: {
                    center: center,
                    date: apptDate,
                    time: apptTime,
                    rider: row.customer_name || 'N/A',
                    phone: row.phone || 'N/A'
                }
            };
        });
        source = 'supabase';
    } catch (err) {
        console.warn('Could not load orders from Supabase:', err);
        orders = [];
        source = 'offline';
    }

    if (badge) {
        if (source === 'supabase') {
            badge.textContent = 'Live · Supabase';
            badge.style.background = 'rgba(16,185,129,0.15)';
            badge.style.color = '#10b981';
        } else {
            badge.textContent = 'Connection Failed';
            badge.style.background = 'rgba(239,68,68,0.15)';
            badge.style.color = '#ef4444';
        }
    }
    if (countText) {
        countText.textContent = `${orders.length} order${orders.length === 1 ? '' : 's'}`;
    }

    if (orders.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align:center; padding:60px 20px; color:var(--text-muted);">
                <i class="fa fa-box-open" style="font-size:2rem; margin-bottom:12px; display:block;"></i>
                <p style="font-size:0.82rem; font-family:'Space Grotesk',sans-serif;">No orders yet. Complete a checkout to see it here.</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = orders.map(order => {
        const payBadge = order.paymentMethod === 'COD'
            ? `<span style="background: rgba(251, 191, 36, 0.12); color: #fbbf24; font-size: 0.62rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: 8px; border: 1px solid rgba(251, 191, 36, 0.2); font-family: 'Space Grotesk', sans-serif;">COD</span>`
            : `<span style="background: rgba(16, 185, 129, 0.12); color: #10b981; font-size: 0.62rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: 8px; border: 1px solid rgba(16, 185, 129, 0.2); font-family: 'Space Grotesk', sans-serif;">Paid</span>`;
        
        const bookingHtml = order.booking && order.booking.center && order.booking.center !== 'Walk-in'
            ? `<div style="font-size:0.72rem; color:var(--accent); margin-top:8px; display:flex; align-items:center; gap:6px;">
                 <i class="fa fa-calendar-alt"></i>
                 <span>${order.booking.center} (${order.booking.date} @ ${order.booking.time})</span>
               </div>`
            : '';
        return `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 12px; padding: 14px; margin-bottom: 12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span style="font-weight:700; font-size:0.85rem; display: flex; align-items: center;">${order.id} ${payBadge}</span>
                <span style="font-weight:700; color:var(--accent); font-size:0.85rem;">₹${Number(order.total).toLocaleString('en-IN')}</span>
            </div>
            <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:6px;">${order.date}</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${(order.items || []).join(', ')}</div>
            ${bookingHtml}
        </div>
        `;
    }).join('');
}




function showToast(title, message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `
        <i class="fa fa-info-circle"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ================= Appointment Booking Widget Logic =================
let selectedTimeSlotValue = null;
let currentBookingDetails = null; // Temp holder for confirmed booking details

window.openBookingModal = function() {
    if (cart.length === 0) return;
    
    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        dateInput.min = tomorrow.toISOString().split('T')[0];
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
    
    // Reset selected slot
    selectedTimeSlotValue = null;
    document.querySelectorAll('.booking-slot-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-glass)';
    });

    toggleCart(); // Close the cart drawer
    bookingModal.classList.add('open');
};

window.closeBookingModal = function() {
    bookingModal.classList.remove('open');
};

window.selectTimeSlot = function(element) {
    document.querySelectorAll('.booking-slot-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-glass)';
    });
    element.classList.add('active');
    element.style.borderColor = 'var(--accent)';
    selectedTimeSlotValue = element.getAttribute('data-time');
};

window.confirmBooking = function(event) {
    event.preventDefault();
    if (!selectedTimeSlotValue) {
        showToast("Select Time", "Please choose a time slot for fitment.");
        return;
    }

    const center = document.getElementById('booking-center').value;
    const dateVal = document.getElementById('booking-date').value;
    const nameVal = document.getElementById('booking-name').value;
    const phoneVal = document.getElementById('booking-phone').value;

    // Convert date to readable string
    const formattedDate = new Date(dateVal).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    currentBookingDetails = {
        center: center,
        date: formattedDate,
        time: selectedTimeSlotValue,
        rider: nameVal,
        phone: phoneVal
    };

    closeBookingModal();
    processCheckout(); // Advance to invoice receipt modal!
};

window.confirmBookingCOD = function() {
    const form = document.getElementById('booking-form');
    if (form && !form.reportValidity()) {
        return;
    }
    
    if (!selectedTimeSlotValue) {
        showToast("Select Time", "Please choose a time slot for fitment.");
        return;
    }

    const center = document.getElementById('booking-center').value;
    const dateVal = document.getElementById('booking-date').value;
    const nameVal = document.getElementById('booking-name').value;
    const phoneVal = document.getElementById('booking-phone').value;

    const formattedDate = new Date(dateVal).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    const bookingDetails = {
        center: center,
        date: formattedDate,
        time: selectedTimeSlotValue,
        rider: nameVal,
        phone: phoneVal
    };

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    const txn = "TXN-COD-" + Math.floor(10000000 + Math.random() * 90000000);
    const date = new Date().toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const orderData = {
        id: txn,
        date: date,
        dateRaw: new Date().toISOString(),
        items: cart.map(item => `${item.name} (x${item.quantity})`),
        total: total,
        booking: bookingDetails,
        paymentMethod: 'COD'
    };

    // Save directly to Supabase
    submitOrder(orderData);

    // Clear cart and close modal
    cart = [];
    saveCart();
    updateCartUI();
    updateSpecsDashboard(currentBikeKey);
    initEcoSliders();
    if (document.getElementById('drag-track-canvas')) updateComparisonSpecBoards();
    
    closeBookingModal();
};

window.executeManualUpshift = function() {
    if (!isDragging) return;

    if (currentGear < 4) {
        let quality = "";
        let color = "#ffffff";
        let boost = 0;

        // RPM precision checks
        if (engineRpm >= 10000 && engineRpm <= 11300) {
            quality = "PERFECT SHIFT! +Boost";
            color = "#10b981"; // green
            boost = 8; // +8 km/h boost!
        } else if (engineRpm < 10000) {
            quality = "EARLY SHIFT (ENGINE BOG)";
            color = "#fbbf24"; // yellow
            boost = -6; // bog down penalty
        } else {
            quality = "LIMITER SHIFT (LATE)";
            color = "#ef4444"; // red
            boost = -1; // no boost
        }

        currentGear++;
        dragSpeed = Math.max(10, dragSpeed + boost);
        shiftFeedbackText = quality;
        shiftFeedbackColor = color;
        shiftFeedbackTimer = 50; // show on canvas for 50 frames

        triggerGearShiftSound();
        showToast("Gear Shift", `Gear ${currentGear} Engaged! - ${quality}`);
    } else {
        showToast("Max Gear", "Already in top gear (4th Gear).");
    }
};

// =============================================
// PERSONAL BEST LEADERBOARD (localStorage)
// =============================================

const LEADERBOARD_KEY = 'velocity_leaderboard';

function saveLeaderboardEntry(entry) {
    const records = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');
    records.push(entry);
    // Sort by time ascending (fastest first), keep top 10
    records.sort((a, b) => a.time - b.time);
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(records.slice(0, 10)));
}

function renderLeaderboard() {
    const container = document.getElementById('leaderboard-list');
    if (!container) return;
    const records = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || '[]');

    if (records.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 0.82rem; font-family: 'Space Grotesk', sans-serif;">
                <i class="fa fa-flag-checkered" style="font-size: 2rem; margin-bottom: 8px; display: block;"></i>
                Complete a 1km test ride to register your first record.
            </div>`;
        return;
    }

    const medals = ['🥇', '🥈', '🥉'];

    container.innerHTML = records.map((r, i) => {
        const medal = medals[i] || `<span style="font-size:0.75rem; opacity:0.5;">#${i + 1}</span>`;
        const tunedBadge = r.tuned
            ? `<span style="background: rgba(234,88,12,0.15); color: #ea580c; border: 1px solid rgba(234,88,12,0.3); padding: 2px 8px; border-radius: 20px; font-size: 0.68rem; font-family: 'Space Grotesk', sans-serif; font-weight: 700;">TUNED</span>`
            : `<span style="background: rgba(100,116,139,0.15); color: var(--text-secondary); border: 1px solid var(--border-glass); padding: 2px 8px; border-radius: 20px; font-size: 0.68rem; font-family: 'Space Grotesk', sans-serif;">STOCK</span>`;
        const isTop = i === 0;
        return `
            <div style="
                display: flex; align-items: center; gap: 14px;
                background: ${isTop ? 'rgba(251, 191, 36, 0.05)' : 'rgba(255,255,255,0.02)'};
                border: 1px solid ${isTop ? 'rgba(251,191,36,0.25)' : 'var(--border-glass)'};
                border-radius: 10px; padding: 10px 16px; flex-wrap: wrap;">
                <div style="font-size: 1.4rem; min-width: 28px; text-align: center;">${medal}</div>
                <div style="flex: 1; min-width: 120px;">
                    <div style="font-weight: 700; color: #ffffff; font-size: 0.88rem; font-family: 'Outfit', sans-serif;">${r.bike}</div>
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${r.date}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${tunedBadge}
                    <div style="text-align: right;">
                        <div style="font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: ${isTop ? '#fbbf24' : 'var(--accent)'};">${r.time}s</div>
                        <div style="font-size: 0.7rem; color: var(--text-muted);">Top: ${r.topSpeed} km/h</div>
                    </div>
                </div>
            </div>`;
    }).join('');
}

window.clearLeaderboard = function() {
    localStorage.removeItem(LEADERBOARD_KEY);
    renderLeaderboard();
    showToast("Leaderboard", "All personal best records cleared.");
};

// Render leaderboard on initial page load
renderLeaderboard();

// =============================================
// SIDE-BY-SIDE BIKE COMPARISON ENGINE
// =============================================

window.openCompareModal = function() {
    const modal = document.getElementById('compare-modal-overlay');
    if (!modal) return;
    modal.style.display = 'block';
    setTimeout(() => renderComparison(), 50);
};

window.closeCompareModal = function() {
    const modal = document.getElementById('compare-modal-overlay');
    if (modal) modal.style.display = 'none';
};

window.renderComparison = function() {
    const keyA = document.getElementById('cmp-bike-a').value;
    const keyB = document.getElementById('cmp-bike-b').value;
    const bikeA = bikesData[keyA];
    const bikeB = bikesData[keyB];

    // Update images
    const imgA = document.getElementById('cmp-img-a');
    const imgB = document.getElementById('cmp-img-b');
    if (imgA) imgA.src = bikeA.image;
    if (imgB) imgB.src = bikeB.image;

    const stats = [
        { label: 'Power Output', unit: 'PS', aVal: bikeA.specs.power, bVal: bikeB.specs.power, max: 55, higherBetter: true, icon: 'fa-bolt' },
        { label: 'Max Torque',   unit: 'Nm', aVal: bikeA.specs.torque, bVal: bikeB.specs.torque, max: 40, higherBetter: true, icon: 'fa-rotate' },
        { label: 'Top Speed',    unit: 'km/h', aVal: bikeA.specs.speed, bVal: bikeB.specs.speed, max: 200, higherBetter: true, icon: 'fa-gauge-high' },
        { label: 'Kerb Weight',  unit: 'kg', aVal: bikeA.specs.weight, bVal: bikeB.specs.weight, max: 220, higherBetter: false, icon: 'fa-weight-hanging' },
        { label: 'Aero Drag Cd', unit: '', aVal: bikeA.stockDrag, bVal: bikeB.stockDrag, max: 0.6, higherBetter: false, icon: 'fa-wind' },
        { label: 'Est. 1km Sprint', unit: 's', aVal: parseFloat(bikeA.stockSprint), bVal: parseFloat(bikeB.stockSprint), max: 45, higherBetter: false, icon: 'fa-flag-checkered' }
    ];

    const grid = document.getElementById('cmp-stats-grid');
    let aWins = 0, bWins = 0;

    grid.innerHTML = stats.map(s => {
        const aRatio = Math.min(1, s.aVal / s.max);
        const bRatio = Math.min(1, s.bVal / s.max);
        const aWins_ = s.higherBetter ? s.aVal > s.bVal : s.aVal < s.bVal;
        const bWins_ = s.higherBetter ? s.bVal > s.aVal : s.bVal < s.aVal;
        if (aWins_) aWins++;
        if (bWins_) bWins++;
        const aColor = aWins_ ? 'var(--accent)' : bWins_ ? 'rgba(100,116,139,0.6)' : '#94a3b8';
        const bColor = bWins_ ? '#10b981' : aWins_ ? 'rgba(100,116,139,0.6)' : '#94a3b8';
        const aBarW = Math.round(aRatio * 100);
        const bBarW = Math.round(bRatio * 100);

        return `
        <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 10px; padding: 12px 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-secondary); font-family: 'Space Grotesk', sans-serif; display: flex; align-items: center; gap: 6px;">
                    <i class="fa ${s.icon}" style="color: var(--accent);"></i>${s.label}
                </span>
                ${aWins_ ? `<span style="font-size:0.65rem; background: rgba(var(--accent-rgb,234,88,12),0.15); color: var(--accent); padding: 2px 8px; border-radius: 20px; font-family:'Space Grotesk',sans-serif; font-weight:700;">BIKE A WINS</span>` :
                  bWins_ ? `<span style="font-size:0.65rem; background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 8px; border-radius: 20px; font-family:'Space Grotesk',sans-serif; font-weight:700;">BIKE B WINS</span>` :
                  `<span style="font-size:0.65rem; color: var(--text-muted); font-family:'Space Grotesk',sans-serif;">TIE</span>`}
            </div>
            <!-- Bike A bar -->
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <span style="font-size:0.78rem; font-weight:700; font-family:'Outfit',sans-serif; color:${aColor}; min-width:52px; text-align:right;">${s.aVal}${s.unit}</span>
                <div style="flex:1; height:7px; background: rgba(255,255,255,0.06); border-radius:4px; overflow:hidden;">
                    <div style="height:100%; width:${aBarW}%; background:${aColor}; border-radius:4px; transition: width 0.6s cubic-bezier(.4,0,.2,1);"></div>
                </div>
                <span style="font-size:0.65rem; color: var(--accent); font-family:'Space Grotesk',sans-serif; min-width:30px;">A</span>
            </div>
            <!-- Bike B bar -->
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size:0.78rem; font-weight:700; font-family:'Outfit',sans-serif; color:${bColor}; min-width:52px; text-align:right;">${s.bVal}${s.unit}</span>
                <div style="flex:1; height:7px; background: rgba(255,255,255,0.06); border-radius:4px; overflow:hidden;">
                    <div style="height:100%; width:${bBarW}%; background:${bColor}; border-radius:4px; transition: width 0.6s cubic-bezier(.4,0,.2,1);"></div>
                </div>
                <span style="font-size:0.65rem; color: #10b981; font-family:'Space Grotesk',sans-serif; min-width:30px;">B</span>
            </div>
        </div>`;
    }).join('');

    // Winner banner
    const banner = document.getElementById('cmp-winner-banner');
    if (aWins > bWins) {
        banner.innerHTML = `<span style="font-size:1.5rem;">🏆</span>
            <div style="font-size:1.05rem; font-weight:900; color: var(--accent); margin: 4px 0;">${bikeA.name} wins overall</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${aWins} vs ${bWins} categories — based on stock specifications</div>`;
        banner.style.borderColor = 'rgba(234,88,12,0.3)';
    } else if (bWins > aWins) {
        banner.innerHTML = `<span style="font-size:1.5rem;">🏆</span>
            <div style="font-size:1.05rem; font-weight:900; color: #10b981; margin: 4px 0;">${bikeB.name} wins overall</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${bWins} vs ${aWins} categories — based on stock specifications</div>`;
        banner.style.borderColor = 'rgba(16,185,129,0.3)';
    } else {
        banner.innerHTML = `<span style="font-size:1.5rem;">🤝</span>
            <div style="font-size:1.05rem; font-weight:900; color: #ffffff; margin: 4px 0;">It's a tie! Both bikes are equally matched</div>
            <div style="font-size:0.78rem; color:var(--text-secondary);">${aWins} vs ${bWins} categories each</div>`;
        banner.style.borderColor = 'rgba(255,255,255,0.1)';
    }
};

// Close compare modal on overlay click
document.getElementById('compare-modal-overlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeCompareModal();
});

// =============================================
// SUPABASE CONNECTION STATUS MONITOR
// =============================================

async function checkSupabaseStatus() {
    const dot = document.getElementById('server-status-dot');
    const text = document.getElementById('server-status-text');
    if (!dot || !text) return;

    try {
        const client = getSupabaseClient();
        if (!client) throw new Error("No Supabase client available");

        // Ping Supabase orders table with lightweight head request
        await client.from('orders').select('id', { count: 'exact', head: true });

        dot.style.background = '#10b981';  // Green
        dot.style.boxShadow = '0 0 8px #10b981';
        text.textContent = 'ONLINE';
        text.style.color = '#10b981';
    } catch (err) {
        dot.style.background = '#ef4444';  // Red
        dot.style.boxShadow = '0 0 8px #ef4444';
        text.textContent = 'OFFLINE';
        text.style.color = '#ef4444';
    }
}

// Initial check + re-check every 15 seconds
checkSupabaseStatus();
setInterval(checkSupabaseStatus, 15000);