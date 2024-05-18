document.addEventListener("DOMContentLoaded", function () {
    const catalysts = [
        {
            brand: "BMW",
            imgSrc: "../images/catalysts/catalystBMW.png",
            title: "BMW X1 118i 120i 320i 2.0 16v Original",
            description: "(Recondicionado)",
            price: 'R$ 2.300,00',
            whatsappLink: "https://api.whatsapp.com/send/?phone=5511911054332&text=Estou%20interessado%20no%20BMW%20X1%20118i%20120i%20320i%202.0%2016v%20Original%20(Recondicionado)&type=phone_number&app_absent=0"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/catalystNewCivic.png", 
            title: "Catalisador New Civic Original",
            description: "(Recondicionado)",
            price: 'R$ 1.380,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20New%20Civic%20Original%20(Recondicionado)"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/catalystCorolla.png",
            title: "Catalisador Toyota Corolla Original",
            description: "(Recondicionado)",
            price: 'R$ 1.300,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Toyota%20Corolla%20Original%20(Recondicionado)"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystFiat.png",
            title: "Catalisador Fiat Uno Original",
            description: "(Recondicionado)",
            price: 'R$ 1.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Fiat%20Uno%20Original%20(Recondicionado)"
        }
    ];

    const cardsContainer = document.querySelector('#initial-products-container');
    renderInitialCards(catalysts, cardsContainer);

    function renderInitialCards(cards, container) {
        container.innerHTML = '';
        cards.slice(0, 4).forEach(card => {
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        });
    }

    function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('catalysts_card');
        cardElement.setAttribute('data-brand', card.brand);
        cardElement.setAttribute('data-anime', 'bottom');

        const productPageLink = `product_page_template.html?brand=${encodeURIComponent(card.brand)}&imgSrc=${encodeURIComponent(card.imgSrc)}&title=${encodeURIComponent(card.title)}&description=${encodeURIComponent(card.description)}&price=${encodeURIComponent(card.price)}&whatsappLink=${encodeURIComponent(card.whatsappLink)}`;

        cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="Catalyst">
            <h4 class="product-link">${card.title}</h4>
            <p>${card.description}</p>
            <p>${card.price}</p>
            <a href="${productPageLink}" class="product-link">Saiba Mais</a>
        `;
        return cardElement;
    }
});
