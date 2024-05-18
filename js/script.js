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
            imgSrc: "../images/catalysts/catalystToro.png",
            title: "Toro/Renegade/Compass Original",
            description: "(Recondicionado)",
            price: 'R$ 1.480,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Toro/Renegade/Compass%20Original%20(Recondicionado)"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystAmarok.png",
            title: "Amarok Bi-Turbo Original (Base de Troca)",
            description: "",
            price: 'R$ 3.400,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Amarok%20Bi-Turbo%20Original%20(Base%20de%20Troca)"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystGolVolks.png",
            title: "Gol/Fox/Saveiro/Voyage Original",
            description: "",
            price: 'R$ 1.080,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol/Fox/Saveiro/Voyage%20Original"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/catalystNissan.png",
            title: "Nissan Versa / March Original",
            description: "(Recondicionado)",
            price: 'R$ 1.480,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nissan%20Versa%20/%20March%20Original%20(Recondicionado)"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystOnixChevr.png",
            title: "Onix Aspirado Original",
            description: "",
            price: 'R$ 1.320,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Onix%20Aspirado%20Original"
        },
        {
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/catalystOutl.png",
            title: "Outlander/ASX Conjunto 3 peças",
            description: "",
            price: 'R$ 3.800,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Outlander/ASX%20Conjunto%203%20peças"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/catalystPeugeotCitr.png",
            title: "Peugeot/Citroen Original",
            description: "(Recondicionado)",
            price: 'R$ 860,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot/Citroen%20Original%20(Recondicionado)"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/catalystRenault.png",
            title: "Renault Original",
            description: "(Recondicionado)",
            price: 'R$ 640,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Renault%20Original%20(Recondicionado)"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystToroComp.png",
            title: "Toro/Renegade/Compass Original",
            description: "(Recondicionado)",
            price: 'R$ 3.400,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Toro/Renegade/Compass%20Original%20(Recondicionado)"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystUnoArgo.png",
            title: "Uno/Argo/Mob Original",
            description: "(Recondicionado)",
            price: 'R$ 1.230,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Uno/Argo/Mob%20Original%20(Recondicionado)"
        },
        {
            brand: "Land Rover",
            imgSrc: "../images/catalysts/catalystFrelanLand.png",
            title: "Freelander 3 Original",
            description: "(Recondicionado)",
            price: 'R$ 3.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Freelander3%20Original%20(Recondicionado)"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystCamaroChvr.png",
            title: "Camaro V8 Original",
            description: "",
            price: 'R$ 9.300,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Camaro%20V8%20Original%20"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/catalystNissanTroca.png",
            title: "Nissan Kicks Original (Base de Troca)",
            description: "",
            price: 'R$ 1.120,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nissan%20Kicks%20Original%20(Base de Troca)"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystCruze.png",
            title: "Cruze/Sonic Original",
            description: "",
            price: 'R$ 1.460,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Cruze/Sonic%20Original%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/catalystFordFusion.png",
            title: "Ford Fusion Original",
            description: "(Recondicionado)",
            price: 'R$ 1.230,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Fusion%20Original%20(Recondicionado)"
        },
        {
            brand: "Chrysler",
            imgSrc: "../images/catalysts/catalystChrysler.png",
            title: "Chrysler Stratus Original",
            description: "(Recondicionado)",
            price: 'R$ 1.700,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Chrysler%20Stratus%20Original%20(Recondicionado)"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystNivus.png",
            title: "Nivus/T-cross Original",
            description: "(Recondicionado)",
            price: 'R$ 1.780,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nivus/T-cross%20Original%20(Recondicionado)"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/catalystSanta.png",
            title: "Santa Fé Conjunto 3 Peças",
            description: "",
            price: 'R$ 3.500,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Santa%20Fé%20Conjunto%203%20Peças%20Original%20"
        },
        {
            brand: "Caoa Cherry",
            imgSrc: "../images/catalysts/catalystTiggo.png",
            title: "Tiggo 5x Original",
            description: "",
            price: 'R$ 1.380,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Tiggo%205x%20Original%20"
        },
        {
            brand: "Caoa Cherry",
            imgSrc: "../images/catalysts/catalystTiggo7x.png",
            title: "Tiggo 7x Original",
            description: "",
            price: 'R$ 1.780,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Tiggo%207x%20Original%20"
        },
        {
            brand: "Kia",
            imgSrc: "../images/catalysts/catalystKiaBongo.png",
            title: "Kia Bongo/HR Original",
            description: "(Recondicionado)",
            price: 'R$ 2.400,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Kia%20Bongo/HR%20Original%20(Recondicionado)"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/catalystNissanVersa.png",
            title: "Nissan Versa / March 1.0 Original",
            description: "(Recondicionado)",
            price: 'R$ 1.120,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nissan%20Versa%20/%20March%201.0%20Original%20(Recondicionado)"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystTcross.png",
            title: "T-cross/Nivus Original",
            description: "(Recondicionado)",
            price: 'R$ 2.230,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20T-cross/Nivus%20Original%20(Recondicionado)"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/catalystFiesta.png",
            title: "Fiesta / Eco Sport Zetec Rocam Original",
            description: "(Recondicionado)",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fiesta%20/%20Eco%20Sport%20Zetec%20Rocam%20Original%20(Recondicionado)"
        },
        {
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/catalystCheryQQ.png",
            title: "Chery QQ",
            description: "",
            price: 'R$ 930,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Chery%20QQ%20Original%20"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystPrisma.png",
            title: "Prisma/Cobalt/Onix/Spin Original",
            description: "",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Prisma/Cobalt/Onix/Spin%20Original%20"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/catalystHondaHRV.png",
            title: "Honda HRV/WRV Original (Base de Troca)",
            description: "",
            price: 'R$ 1.380,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Honda%20HRV/WRV%20Original%20(Base de Troca)"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystTracker.png",
            title: "Cruze/Tracker Turbo Original",
            description: "",
            price: 'R$ 1.520,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Cruze/Tracker%20Turbo%20Original%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/catalystRanger.png",
            title: "Ford Ranger Original",
            description: "(Recondicionado)",
            price: 'R$ 3.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Ranger%20Original%20"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/catalystKwid.png",
            title: "Renault Kwid",
            description: "",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Renault%20Kwid%20"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystAmarokMono.png",
            title: "Amarok Mono - Turbo Original (Base de Troca)",
            description: "",
            price: 'R$ 4.300,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Amarok%20Mono%20-%20Turbo%20Original%20(Base de Troca)"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/catalystAgile.png",
            title: "Corsa/Celta/Agile/Montana Original",
            description: "",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corsa/Celta/Agile/Montana%20Original%20"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/catalystVeloster.png",
            title: "Hyundai Veloster Original",
            description: "(Recondicionado)",
            price: 'R$ 980,00',   
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hyundai%20Veloster%20Original%20(Recondicionado)"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystPalio.png",
            title: "Palio/Ideia/Bravo/Punto E-tork Original",
            description: "(Recondicionado)",
            price: 'R$ 1.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Palio/Ideia/Bravo/Punto%20E-tork%20Original%20(Recondicionado)"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/catalystL200.png",
            title: "L200 Original",
            description: "(Recondicionado)",
            price: 'R$ 2.600,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20L200%20Original%20(Recondicionado)"
        },
        {
            brand: "Kia",
            imgSrc: "../images/catalysts/catalystSportage.png",
            title: "Sportage/IX35 Original",
            description: "(Recondicionado)",
            price: 'R$ 1.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Sportage/IX35%20Original%20(Recondicionado)"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/catalystHB20.png",
            title: "HB20 Turbo Original",
            description: "",
            price: 'R$ 1.120,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20HB20%20Turbo%20Original"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/catalystSandero.png",
            title: "Sandero/Logan 3cc Original",
            description: "",
            price: 'R$ 1.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Sandero/Logan%203cc%20Original"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/catalystFit.png",
            title: "New City/Fit Original",
            description: "(Recondicionado)",
            price: 'R$ 1.200,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20New%20City/Fit%20Original(Recondicionado)"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/catalystEtios.png",
            title: "Etios/Yaris Original",
            description: "(Recondicionado)",
            price: 'R$ 1.100,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Etios/Yaris%20Original%20(Recondicionado)"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystSiena.png",
            title: "Palio/Siena/Fiorino Original",
            description: "(Recondicionado)",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Palio/Siena/Fiorino%20Original%20(Recondicionado)"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/catalystEcoSport.png",
            title: "Eco Sport 3cc Original",
            description: "",
            price: 'R$ 1.400,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Eco%20Sport%203cc%20Original"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/catalyst130.png",
            title: "Hyundai 130 Original",
            description: "",
            price: 'R$ 2.100,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hyundai%20130%20Original"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/catalystPolo.png",
            title: "Gol/Polo/Virtus MSi Original",
            description: "(Recondicionado)",
            price: 'R$ 1.600,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol/Polo/Virtus%20MSi%20Original%20(Recondicionado)"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/catalystCorollaHibr.png",
            title: "Corolla Hibrido",
            description: "",
            price: 'R$ 2.300,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corolla%20Hibrido%20Original%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/catalystNewFiesta.png",
            title: "Eco Sport / New Fiesta Original",
            description: "",
            price: 'R$ 1.300,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Eco%20Sport%20/%20New%20Fiesta%20Original"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/catalystCronos.png",
            title: "Fiat Cronos Original",
            description: "(Recondicionado)",
            price: 'R$ 980,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fiat%20Cronos%20Original%20(Recondicionado)"
        }
    ];

    const cardsContainer = document.querySelector('.catalysts_container');
    renderCards(catalysts, cardsContainer);

    document.getElementById('brandFilter').addEventListener('change', filterCards);
    document.getElementById('searchFilter').addEventListener('keyup', filterCards);

    function renderCards(cards, container) {
        container.innerHTML = '';
        const cardsGroups = splitIntoGroups(cards, 4);

        cardsGroups.forEach(group => {
            const groupContainer = document.createElement('div');
            groupContainer.classList.add('catalysts_cards');

            group.forEach(card => {
                const cardElement = createCardElement(card);
                groupContainer.appendChild(cardElement);
            });

            container.appendChild(groupContainer);
        });
    }

    function createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('catalysts_card');
        cardElement.setAttribute('data-brand', card.brand);
        cardElement.setAttribute('data-anime', 'bottom');

        const productPageLink = `product_page_template.html?brand=${encodeURIComponent(card.brand)}&imgSrc=${encodeURIComponent(card.imgSrc)}&title=${encodeURIComponent(card.title)}&description=${encodeURIComponent(card.description)}&whatsappLink=${encodeURIComponent(card.whatsappLink)}&price=${encodeURIComponent(card.price)}`;

        cardElement.innerHTML = `
            <img src="${card.imgSrc}" alt="Catalyst">
            <h4 class="product-link">${card.title}</h4>
            <p>${card.description}</p>
            <p>${card.price}</p>
            <a href="${productPageLink}" class="product-link">Saiba Mais</a>
        `;
        return cardElement;
    }

    function filterCards() {
        const input = document.getElementById('searchFilter').value.toUpperCase();
        const select = document.getElementById('brandFilter').value;
        const filteredCards = catalysts.filter(card => {
            const titleMatch = card.title.toUpperCase().includes(input);
            const brandMatch = card.brand === select || select === "";
            return titleMatch && brandMatch;
        });
        renderCards(filteredCards, cardsContainer);
    }

    function splitIntoGroups(array, groupSize) {
        const groups = [];
        for (let i = 0; i < array.length; i += groupSize) {
            groups.push(array.slice(i, i + groupSize));
        }
        return groups;
    }

    console.log("Documento carregado!");
});

animeScroll();
window.addEventListener('scroll', animeScroll);

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    document.querySelectorAll('[data-anime]').forEach(element => {
        if ((windowTop) > element.offsetTop) {
            element.classList.add('animate');
        } else {
            element.classList.remove('animate');
        }
    });
}