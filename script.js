// --- DICTIONNAIRE DE TRADUCTION ---
const translations = {
    fr: {
        title: "Le Choc des Abonnements",
        subtitle: "L'outil qui vous montre où part vraiment votre argent.",
        placeholderName: "Ex: Netflix, Salle de sport...",
        placeholderPrice: "Prix",
        unitMonth: "€/mois",
        btnAdd: "Ajouter",
        listTitle: "📝 Vos dépenses",
        emptyState: "Aucun abonnement ajouté pour le moment.",
        bilanTitle: "Le Bilan 💸",
        labelMonth: "Coût mensuel",
        labelYear: "Sur 1 an",
        label5years: "Sur 5 ans",
        btnShare: "📢 Partager mon choc",
        footerText: "Outil gratuit imaginé et codé par",
        alertError: "Oops ! Entrez un nom valide et un prix supérieur à 0.",
        alertShareEmpty: "Ajoutez d'abord des abonnements avant de partager !",
        alertCopied: "✅ Bilan copié dans le presse-papier ! Collez-le sur vos réseaux.",
        shareTemplate: "Je viens de réaliser que je dépense {total}/an en abonnements 😱💸\n\nCalculez vos dépenses avec l'outil de Julien Dubuc :\n👉 https://julien-dbc.github.io/portfolio",
        shockEmpty: "Ajoutez des abonnements pour découvrir ce que vous pourriez acheter à la place...",
        shockBase: "Si vous annulez tout aujourd'hui :<br><br>",
        shockItems: [
            { max: 300, text: "☕ <strong>Dans 1 an :</strong> De quoi vous payer d'excellents cafés artisanaux tous les mois.<br>👟 <strong>Dans 5 ans :</strong> Une belle paire de sneakers ou un parfum de luxe." },
            { max: 750, text: "🍽️ <strong>Dans 1 an :</strong> Un excellent restaurant étoilé en amoureux.<br>🎸 <strong>Dans 5 ans :</strong> Une belle guitare, un beau bijou ou un vélo de ville neuf." },
            { max: 1500, text: "💆‍♂️ <strong>Dans 1 an :</strong> Un week-end complet en thalasso/spa pour décompresser.<br>🎮 <strong>Dans 5 ans :</strong> Une console Next-Gen (PS5) ET une immense TV 4K !" },
            { max: 3000, text: "📱 <strong>Dans 1 an :</strong> Un smartphone haut de gamme neuf.<br>💻 <strong>Dans 5 ans :</strong> Un MacBook Pro surpuissant ou un beau vélo électrique." },
            { max: 5000, text: "✈️ <strong>Dans 1 an :</strong> Un magnifique city-break en Europe.<br>🌴 <strong>Dans 5 ans :</strong> Un mois entier de Road-Trip aux États-Unis ou à Bali !" },
            { max: 9000, text: "📈 <strong>Dans 1 an :</strong> Un premier investissement solide en bourse (ETF).<br>🚀 <strong>Dans 5 ans :</strong> Le capital de départ pour lancer votre propre entreprise ou startup !" },
            { max: 15000, text: "💎 <strong>Dans 1 an :</strong> Un mois complet de salaire mis de côté (votre matelas de sécurité).<br>🚗 <strong>Dans 5 ans :</strong> Une excellente voiture d'occasion payée comptant !" },
            { max: Infinity, text: "🏖️ <strong>Dans 1 an :</strong> Des vacances de luxe tout compris au bout du monde.<br>🏡 <strong>Dans 5 ans :</strong> Un véritable apport pour acheter un appartement ou une maison !" }
        ]
    },
    en: {
        title: "The Subscription Shock",
        subtitle: "The tool that shows where your money really goes.",
        placeholderName: "Ex: Netflix, Gym...",
        placeholderPrice: "Price",
        unitMonth: "$/month",
        btnAdd: "Add",
        listTitle: "📝 Your expenses",
        emptyState: "No subscriptions added yet.",
        bilanTitle: "The Summary 💸",
        labelMonth: "Monthly cost",
        labelYear: "In 1 year",
        label5years: "In 5 years",
        btnShare: "📢 Share my shock",
        footerText: "Free tool designed and coded by",
        alertError: "Oops! Enter a valid name and a price greater than 0.",
        alertShareEmpty: "Add subscriptions first before sharing!",
        alertCopied: "✅ Summary copied to clipboard! Paste it on your socials.",
        shareTemplate: "I just realized I spend {total}/year on subscriptions 😱💸\n\nCalculate your expenses with Julien Dubuc's tool:\n👉 https://julien-dbc.github.io/portfolio",
        shockEmpty: "Add subscriptions to discover what you could buy instead...",
        shockBase: "If you cancel everything today:<br><br>",
        shockItems: [
            { max: 300, text: "☕ <strong>In 1 year:</strong> Enough to buy premium coffee beans every month.<br>👟 <strong>In 5 years:</strong> A nice pair of sneakers or luxury perfume." },
            { max: 750, text: "🍽️ <strong>In 1 year:</strong> A Michelin-star dinner for two.<br>🎸 <strong>In 5 years:</strong> A beautiful guitar, nice jewelry, or a new city bike." },
            { max: 1500, text: "💆‍♂️ <strong>In 1 year:</strong> A full weekend spa retreat to unwind.<br>🎮 <strong>In 5 years:</strong> A Next-Gen console (PS5) AND a huge 4K TV!" },
            { max: 3000, text: "📱 <strong>In 1 year:</strong> A brand new flagship smartphone.<br>💻 <strong>In 5 years:</strong> A powerful MacBook Pro or a great e-bike." },
            { max: 5000, text: "✈️ <strong>In 1 year:</strong> A beautiful European city break.<br>🌴 <strong>In 5 years:</strong> A month-long road trip in the US or Bali!" },
            { max: 9000, text: "📈 <strong>In 1 year:</strong> A solid first stock market investment (ETF).<br>🚀 <strong>In 5 years:</strong> The seed money to start your own business or startup!" },
            { max: 15000, text: "💎 <strong>In 1 year:</strong> A full month's rent or salary saved up.<br>🚗 <strong>In 5 years:</strong> A reliable used car paid in full!" },
            { max: Infinity, text: "🏖️ <strong>In 1 year:</strong> An all-inclusive luxury vacation.<br>🏡 <strong>In 5 years:</strong> A serious down payment to buy an apartment or a house!" }
        ]
    }
};

// --- LOGIQUE PRINCIPALE ---
let subscriptions = JSON.parse(localStorage.getItem('mySubs')) || [];
let currentLang = localStorage.getItem('appLang') || 'fr'; 

// Formateur de devise automatique (gère l'emplacement du $, les virgules/points)
function formatMoney(amount) {
    const locale = currentLang === 'en' ? 'en-US' : 'fr-FR';
    const currency = currentLang === 'en' ? 'USD' : 'EUR';
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount);
}

function init() {
    const toggle = document.getElementById('lang-toggle');
    toggle.checked = (currentLang === 'en');
    
    toggle.addEventListener('change', (e) => {
        currentLang = e.target.checked ? 'en' : 'fr';
        localStorage.setItem('appLang', currentLang);
        applyTranslation();
        updateUI(); // On met à jour l'interface pour recalculer les devises instantanément
    });

    document.getElementById('sub-price').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addSubscription();
    });
    document.getElementById('sub-name').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('sub-price').focus();
    });

    document.getElementById('btn-add').addEventListener('click', addSubscription);
    document.getElementById('btn-share').addEventListener('click', shareResults);

    applyTranslation();
    updateUI();
}

function applyTranslation() {
    const t = translations[currentLang];
    
    document.getElementById('html-tag').lang = currentLang;
    document.getElementById('title').innerText = t.title;
    document.getElementById('subtitle').innerText = t.subtitle;
    document.getElementById('sub-name').placeholder = t.placeholderName;
    document.getElementById('sub-price').placeholder = t.placeholderPrice;
    document.getElementById('unit-month').innerText = t.unitMonth; // Met à jour €/mois ou $/month
    document.getElementById('btn-add').innerText = t.btnAdd;
    document.getElementById('list-title').innerText = t.listTitle;
    document.getElementById('empty-state').innerText = t.emptyState;
    document.getElementById('bilan-title').innerText = t.bilanTitle;
    document.getElementById('label-month').innerText = t.labelMonth;
    document.getElementById('label-year').innerText = t.labelYear;
    document.getElementById('label-5years').innerText = t.label5years;
    document.getElementById('btn-share').innerText = t.btnShare;
    document.getElementById('footer-text').innerText = t.footerText;
}

function addSubscription() {
    const nameInput = document.getElementById('sub-name');
    const priceInput = document.getElementById('sub-price');
    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);

    if (name === "" || isNaN(price) || price <= 0) {
        alert(translations[currentLang].alertError);
        return;
    }

    subscriptions.push({ id: Date.now(), name: name, price: price });
    saveData();
    
    nameInput.value = '';
    priceInput.value = '';
    nameInput.focus();
}

function deleteSubscription(id) {
    subscriptions = subscriptions.filter(sub => sub.id !== id);
    saveData();
}

function saveData() {
    localStorage.setItem('mySubs', JSON.stringify(subscriptions));
    updateUI();
}

function updateUI() {
    const listElement = document.getElementById('sub-list');
    const emptyState = document.getElementById('empty-state');
    listElement.innerHTML = ''; 

    let totalMonth = 0;

    if (subscriptions.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }

    subscriptions.forEach((sub) => {
        totalMonth += sub.price;
        const li = document.createElement('li');
        li.className = "bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center fade-in hover:bg-slate-100 transition";
        li.innerHTML = `
            <span class="font-semibold text-slate-700">${sub.name}</span> 
            <div class="flex items-center gap-4">
                <span class="text-rose-500 font-bold">${formatMoney(sub.price)}</span>
                <button onclick="deleteSubscription(${sub.id})" class="text-slate-400 hover:text-red-500 transition text-lg" title="Supprimer">×</button>
            </div>
        `;
        listElement.appendChild(li);
    });

    const totalYear = totalMonth * 12;
    const total5Years = totalYear * 5;

    // Utilisation du formateur automatique pour les totaux
    document.getElementById('total-month').innerText = formatMoney(totalMonth);
    document.getElementById('total-year').innerText = formatMoney(totalYear);
    document.getElementById('total-5years').innerText = formatMoney(total5Years);

    const shockElement = document.getElementById('shock-element');
    const t = translations[currentLang];

    if (totalMonth === 0) {
        shockElement.innerHTML = `<em>${t.shockEmpty}</em>`;
    } else {
        const shockData = t.shockItems.find(item => total5Years < item.max) || t.shockItems[t.shockItems.length - 1];
        shockElement.innerHTML = `<strong>${t.shockBase}</strong> ${shockData.text}`;
    }
}

function shareResults() {
    if (subscriptions.length === 0) {
        alert(translations[currentLang].alertShareEmpty);
        return;
    }
    
    const totalYear = subscriptions.reduce((acc, curr) => acc + curr.price, 0) * 12;
    
    // Formater l'argent dans le texte de partage sans les décimales pour faire plus propre
    const locale = currentLang === 'en' ? 'en-US' : 'fr-FR';
    const currency = currentLang === 'en' ? 'USD' : 'EUR';
    const formattedTotal = new Intl.NumberFormat(locale, { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(totalYear);

    const textToShare = translations[currentLang].shareTemplate.replace('{total}', formattedTotal);

    navigator.clipboard.writeText(textToShare).then(() => {
        alert(translations[currentLang].alertCopied);
    }).catch(err => {
        console.error('Erreur lors de la copie', err);
    });
}

// Lancement
init();