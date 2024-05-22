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
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/catalystTiggo.png",
            title: "Tiggo 5x Original",
            description: "",
            price: 'R$ 1.380,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Tiggo%205x%20Original%20"
        },
        {
            brand: "Caoa Chery",
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
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Yaris_1.5_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Yaris 1.5 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 1.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Yaris%201.5%202017%202018%202019%202020%202021"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Vw_Up_Tsi_2014_2015_2016_2017_2018_2019-transformed.png",
            title: "Catalisador Vw Up Tsi 2014 2015 2016 2017 2018 2019",
            description: "",
            price: 'R$ 1.399,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Vw%20Up%20Tsi%202014%202015%202016%202017%202018%202019"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Vw_Up_1.0_Aspirado_3_Cil._12v_2014_2015_2016_2017_2018_2019-transformed.png",
            title: "Catalisador Vw Up 1.0 Aspirado 3 Cil. 12v 2014 2015 2016 2017 2018 2019",
            description: "",
            price: 'R$ 869,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Vw%20Up%201.0%20Aspirado%203%20Cil.%2012v%202014%202015%202016%202017%202018%202019"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Vw_Tiguan_2.0_Tsi_Audi_Q3_2.0_Tsi-transformed.png",
            title: "Catalisador Vw Tiguan 2.0 Tsi Audi Q3 2.0 Tsi",
            description: "",
            price: 'R$ 3.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Vw%20Tiguan%202.0%20Tsi%20Audi%20Q3%202.0%20Tsi%20"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_2008_1.6-transformed.png",
            title: "Catalisador Peugeot 2008 1.6",
            description: "",
            price: 'R$ 1.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%202008%201.6%20"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_Nissan_Kicks_1.6_16v_2016_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Nissan Kicks 1.6 16v 2016 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 1.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nissan%20Kicks%201.6%2016v%202016%202017%202018%202019%202020%202021"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Logan_1.6_16v_Sandero_1.6_16v_Duster_1.6_16v_Oroch_1.6_16v_Captur_1.6_16v_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Logan 1.6 16v Sandero 1.6 16v Duster 1.6 16v 2017 2018 2019 2020",
            description: "",
            price: 'R$ 1.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Logan%20Kicks%201.6%2016v%20Sandero%201.6%2016v%20Duster%201.6%2016v%20Oroch%201.6%2016v%20Captur%201.6%202017%202018%202019%202020"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Logan_1.0_3cc_Sandero_1.0_12v_3_Cilindros_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Logan 1.0 3cc Sandero 1.0 12v 3 Cilindros 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Logan%201.0%203cc%20Sandero%20Sandero%201.0%203%20Cilindros%202016%202017%202018%202019%202020%20"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_1.0_8v_98_99_2000_2001_2002_2003_2004_2005_2006_Special_G2_G3-transformed.png",
            title: "Catalisador Gol 1.0 8v 98 99 2000 2001 2002 2003 2004 2005 2006 Special G2 G3",
            description: "",
            price: 'R$ 779,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%201.0%208v%2098%2099%202000%202001%202002%202003%202004%202005%202006%20Special%20G2%20G3"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Argo_1.0_3cc_Cronos_Uno_1.0_3cc_Mobi_1.0_3cc_2020_2021_2022_2023_3_Cilindros-transformed.png",
            title: "Catalisador Argo 1.0 3cc Cronos Uno 1.0 3cc Mobi 1.0 3cc 2020 2021 2022 2023 3 Cilindros",
            description: "",
            price: 'R$ 769,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Argo%201.0%203cc%20Cronos%20Uno%201.0%203cc%20Mobi%201.0%203cc%202020%202021%202023%203%20Cilindros"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Cobalt_Spin_2013_2014_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Secundário Cobalt Spin 2013 2014 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 499,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Cobalt%20Spin%202013%202014%202015%202016%202017%202018%202019%202020"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Scenic_Megane_1999_2000_2001_2002_2003_2004_2005-transformed.png",
            title: "Catalisador Scenic Megane 1999 2000 2001 2002 2003 2004 2005",
            description: "",
            price: 'R$ 999,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Scenic%20Megane%201999%202000%202001%202002%202003%202004%202005%20"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Saveiro_1.6_16v_Fox_1.6_16v_Gol_1.6_16v_Voyage_1.6_16v_2015_2016_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Saveiro 1.6 16v Fox 1.6 16v Gol 1.6 16v Voyage 1.6 16v 2015 2016 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 1,359,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Saveiro%201.6%2016v%20Fox%201.6%2016v%20Voyage%201.6%2016v%202015%202016%202017%202018%202019%202020%202021"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Sandero_1.6_16v_Logan_1.6_16v_Duster_1.6_16v-transformed.png",
            title: "Catalisador Sandero 1.6 16v Logan 1.6 16v Duster 1.6 16v",
            description: "",
            price: 'R$ 679,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Sandero%201.6%2016v%20Logan%201.6%2016v%20Duster%201.6%2016v%20"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Primário_Etios_1.3_1.5_20012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Primário Etios 1.3 1.5 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 765,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Etios%201.3%201.5%202013%202014%202015%202016%20"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Kwid_1.0_3cc_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Kwid 1.0 3cc 2018 2019 2020 2021",
            description: "",
            price: 'R$ 989,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Kwid%201.0%203cc%202018%202019%202020%202021%20"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_Voyage_Fox_1.0_12v_3cilindros_G6_G7_G8_Polo_1.0_3cc_aspirado_Virtus-transformed.png",
            title: "Catalisador Gol Voyage Fox 1.0 12v 3 cilindros G6 G7 G8 Polo 1.0 3cc aspirado Virtus",
            description: "",
            price: 'R$ 819,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%20Voyage%20Fox%201.0%2012v%203%20cilindros%20G6%20G7%20G8%20Polo%201.0%203cc%20aspirado%20Virtus"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Etios_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Etios 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 1.129,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Etios%202017%202018%202019%202020%202021%20"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Duplo_Hilux_2.7_Gasolina_2009_2010_2011_2012_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Duplo Hilux 2.7 Gasolina 2009 2010 2011 2012 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 2.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Duplo%20Hilux%202.7%20Gasolina%202009%202010%20%202011%202012%202013%202014%202015%202016%202017"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Clio_1.0_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Clio 1.0 2013 2014 2015 2016",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Clio%201.0%202013%202014%202015%202016%20"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_Versa_1.6_16v_March_1.6-transformed.png",
            title: "Catalisador Versa 1.6 16v March 1.6",
            description: "",
            price: 'R$ 1.399,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Versa%201.6%2016v%20March%201.6%20"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Onix_Prisma_2013_2014_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Secundário Onix Prisma 2013 2014 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 499,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Onix%Prisma%202013%202014%202015%202016%202017%202018%202019%202020"
        },
        {
            brand: "Lifan",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Lifan_X60_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Secundário Lifan X60 2013 2014 2015 2016",
            description: "",
            price: 'R$ 559,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Lifan%20X60%202013%202014%202015%202016%20"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Primário_Tucson_2.0_16v_Kia_Sportage_2.0_16v-transformed.png",
            title: "Catalisador Primário Tucson 2.0 16v Kia Sportage 2.0 16v",
            description: "",
            price: 'R$ 1.999,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Tucson%202.0%2016v%20Kia%20Sportage%202.0%2016v"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_Primario_Pajero_Tr4_2007_2008_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Primario Pajero Tr4 2007 2008 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 879,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Pajero%20Tr4%202007%202008%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Lifan",
            imgSrc: "../images/catalysts/Catalisador_Primario_Lifan_X60_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Primario Lifan X60 2013 2014 2015 2016",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Lifan%20X60%202013%202014%202015%202016%20"
        },
        {
            brand: "Kia",
            imgSrc: "../images/catalysts/Catalisador_Primário_Kia_Sportage_2.0_16v_Ix35_2.0_16v-transformed.png",
            title: "Catalisador Primário Kia Sportage 2.0 16v Ix35 2.0 16v",
            description: "",
            price: 'R$ 1.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Kia%20Sportage%202.0%2016v%20Ix35%202.0%2016v"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_Nissan_Livina_Grand_Livina_Tiida_1.8_16v_Sentra_2.0_16v_2013_Em_Diante-transformed.png",
            title: "Catalisador Nissan Livina Grand Livina Tiida 1.8 16v Sentra 2.0 16v 2013 Em Diante",
            description: "",
            price: 'R$ 1.499,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Nissan%20Livina%20Tiida%20Livina%201.8%2016v%20Sentra%202.0%2016v%202013%20Em%20Diante"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_L200_Triton_Pajero_Dakar_3.5_V6_Flex_2010...lado_Direito-transformed.png",
            title: "Catalisador L200 Triton Pajero Dakar 3.5 V6 Flex 2010 lado Direito",
            description: "",
            price: 'R$ 1.399,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20L200%20Triton%20Pajero%20Dakar%203.5%20V6%20Flex%202010%20lado%20Direito%20"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Hb20_1.6_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Secundário Hb20 1.6 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 489,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Hb20%201.6%202015%202016%202017%202018%202019%202020%20"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Hb20_1.0_3cc_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Secundário Hb20 1.0 3cc 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 479,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Hb20%201.0%203cc%202015%202016%202017%202018%202019%202020"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Hyundai_I30_2.0_2008_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Hyundai I30 2.0 2008 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 2.490,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hyundai%20I30%202.0%202008%202009%202010%202011%202012%202013%20"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Hb20_1.6_I30_1.6_Creta_Veloster_Kia_Cerato_1.6_Soul-transformed.png",
            title: "Catalisador Hb20 1.6 I30 1.6 Creta Veloster Kia Cerato 1.6 Soul",
            description: "",
            price: 'R$ 819,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hb20%201.6%20I30%201.6%20Creta%20Veloster%20Kia%20Cerato%201.6%20Soul"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Fiesta_1.0_1.6_Ecosport_1.6_2009_2010_2011_2012_Focus_2008_2009-transformed.png",
            title: "Catalisador Fiesta 1.0 1.6 Ecosport 1.6 2009 2010 2011 2012 Focus 2008 2009",
            description: "",
            price: 'R$ 979,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fiesta%201.0%201.6%20Ecosport%201.6%202009%202010%202011%202012%20Focus%202008%202009"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ecosport_Fiesta_Ka_1.5_1.6_Sigma-transformed.png",
            title: "Catalisador Ecosport Fiesta Ka 1.5 1.6 Sigma",
            description: "",
            price: 'R$ 1.139,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ecosport%20Fiesta%20Ka%201.5%201.6%20Sigma%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Courier_1.6_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Courier 1.6 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Courier%201.6%202009%202010%202011%202012%202013"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Civic_Honda_Crv_Gasolina_Com_Valvula_Egr-transformed.png",
            title: "Catalisador Civic Honda Crv Gasolina Com Valvula Egr",
            description: "",
            price: 'R$ 2.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Civic%20Honda%20Crv%20Gasolina%20Com%20Valvula%20Egr"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Civic_1.8_2006_2007_2008_2009_2010_2011_2012_Flex-transformed.png",
            title: "Catalisador Civic 1.8 2006 2007 2008 2009 2010 2011 2012 Flex",
            description: "",
            price: 'R$ 2.049,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Civic%201.8%202006%202007%202008%202009%202010%202011%202012%20Flex"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Civic_1.6_Lx_1997_1998_1999_2000-transformed.png",
            title: "Catalisador Civic 1.6 Lx 1997 1998 1999 2000",
            description: "",
            price: 'R$ 1.369,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Civic%201.6%20Lx%201997%201998%201999%202000%20"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Uno_Mille_Flex_2006_2007_2008_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Uno Mille Flex 2006 2007 2008 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Uno%20Mille%20Flex%202006%202007%202008%202009%202010%202011%202012%202013"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Uno_Fiorino_2001_2002_2003_2004_2005-transformed.png",
            title: "Catalisador Uno Fiorino 2001 2002 2003 2004 2005",
            description: "",
            price: 'R$ 639,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Uno%20Fiorino%202001%202002%202003%202004%202005%20"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Honda_City_Fit_1.4_1.5_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Secundário Honda City Fit 1.4 1.5 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Honda%20City%20Fit%201.4%201.5%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Primário_Honda_City_Fit_1.4_1.5_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Primário Honda City Fit 1.4 1.5 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 1.029,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Honda%20City%20Fit%201.4%201.5%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Primário_Honda_City_Fit_1.4_1.5_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Primário Honda City Fit 1.4 1.5 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 1.029,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Honda%20City%20Fit%201.4%201.5%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Palio_Siena_Idea_Weekend_Punto_Strada_1.3_1.4_2005_2006_2007_2008-transformed.png",
            title: "Catalisador Palio Siena Idea Weekend Punto Strada 1.3 1.4 2005 2006 2007 2008",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Palio%20Siena%20Idea%20Weekend%20Punto%201.3%201.4%202005%202006%202007%202008%20"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Palio_Siena_1.0_8v_Fire_Flex_2005_2006_2007_2008-transformed.png",
            title: "Catalisador Palio Siena 1.0 8v Fire Flex 2005 2006 2007 2008",
            description: "",
            price: 'R$ 799,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Palio%20Siena%201.0%208v%20Fire%20Flex%202005%202006%202007%202008%20"
        },
        {
            brand: "Jeep",
            imgSrc: "../images/catalysts/Catalisador_Jeep_Renegade_Fiat_Toro_1.8-transformed.png",
            title: "Catalisador Jeep Renegade Fiat Toro 1.8",
            description: "",
            price: 'R$ 1.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Jeep%20Renegade%20Fiat%20Toro%201.8%20"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Honda_Fit_2003_2004_2005_2006_2007_2008-transformed.png",
            title: "Catalisador Honda Fit 2003 2004 2005 2006 2007 2008",
            description: "",
            price: 'R$ 759,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Honda%20Fit%202003%202004%202005%202006%202007%202008"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Grand_Siena_1.4_2011_2012_2013_2014_Palio_1.4_Evo_2012_2013_2014-transformed.png",
            title: "Catalisador Grand Siena 1.4 2011 2012 2013 2014 Palio 1.4 Evo 2012 2013 2014",
            description: "",
            price: 'R$ 929,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Grand%20Siena%201.4%202011%202012%202013%202014%20Palio%201.4%20Evo%202012%202013%202014"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Fusion_2.3_2.5_2006_2007_2008_2009_2010_2011_2012-transformed.png",
            title: "Catalisador Fusion 2.3 2.5 2006 2007 2008 2009 2010 2011 2012",
            description: "",
            price: 'R$ 1.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fusion%202.3%202.5%202006%202007%202008%202009%202010%202011%202012%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ford_Ka_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Ford Ka 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Ka%202009%202010%202011%202012%202013%20"
        },
        {
            brand: "Dodge",
            imgSrc: "../images/catalysts/Catalisador_Traseiro_Dodge_Journey_2.7_V6_2007_2008_2009_2010-transformed.png",
            title: "Catalisador Traseiro Dodge Journey 2.7 V6 2007 2008 2009 2010",
            description: "",
            price: 'R$ 2.569,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Traseiro%20Dodge%20Journey%202.7%20V6%202007%202008%202009%202010"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Primário_Peugeot_308_2.0_408_3008_Citroen_C4_2.0_Grand_Picasso-transformed.png",
            title: "Catalisador Primário Peugeot 308 2.0 408 3008 Citroen C4 2.0 Grand Picasso",
            description: "",
            price: 'R$ 2.039,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Peugeot%20308%202.0%20408%203008%20Citroen%20C4%202.0%20Grand%20Picasso"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_307_1.6_308_1.6_Citroen_C4_1.6-transformed.png",
            title: "Catalisador Peugeot 307 1.6 308 1.6 Citroen C4 1.6",
            description: "",
            price: 'R$ 689,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%20307%201.6%20308%201.6%20Citroen%20C4%201.6%20"
        },
        {
            brand: "MINI",
            imgSrc: "../images/catalysts/Catalisador_Mini_Cooper_1.6_Thp_Peugeot_208_2008_308_3008_408_508_Rcz_Citroen_C4_Lounge_C5_Ds3_Ds4_Ds5-transformed.png",
            title: "Catalisador Mini Cooper 1.6 Thp Peugeot 208 2008 308 3008 408 508 Rcz Citroen C4 C5",
            description: "",
            price: 'R$ 1.479,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Mini%20Cooper%201.6%20Thp%20Peugeot%20208%202008%20308%203008%20408%20508%20Rcz%20Citroen%20C4%20Lounge%20C5%20Ds3%20Ds4%20Ds5"
        },
        {
            brand: "Suzuki",
            imgSrc: "../images/catalysts/Catalisador_Grand_Vitara_2.0_2009_2010_2011_2012_2013_2014_2015_2016_2017_2018-transformed.png",
            title: "Catalisador Grand Vitara 2.0 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018",
            description: "",
            price: 'R$ 849,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Grand%20Vitara%202.0%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%20"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_Fusca_Voyage_Kombi_Saveiro_Santana_Apollo_Parati_Escort_Pampa_Versailles_Royale_Autolatina-transformed.png",
            title: "Catalisador Gol Fusca Voyage Kombi Saveiro Santana Apollo Parati Escort Pampa Versailles Royale Autolatina",
            description: "",
            price: 'R$ 399,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%20Fusca%20Voyage%20Kombi%20Saveiro%20Santana%20Apollo%20Parati%20Escort%20Pampa%20Versailles%20Royale%20Autolatina%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ford_Ecosport_2.0_4x2_2003_à_2009-transformed.png",
            title: "Catalisador Ford Ecosport 2.0 4x2 2003 à 2009",
            description: "",
            price: 'R$ 999,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Ecosport%202.0%204x2%202003%20à%202009%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Focus_2.0_16v_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Focus 2.0 16v 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.289,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Focus%202.0%2016v%202009%202010%202011%202012%202013"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Focus_1.6_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Focus 1.6 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Focus%201.6%202009%202010%202011%202012%202013%20"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ecosport_Fiesta_Ford_Ka_1.5_3cc_2015_2016_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Ecosport Fiesta Ford Ka 1.5 3cc 2015 2016 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ecosport%20Fiesta%20Ford%20Ka%201.5%203cc%202015%202016%202017%202018%202019%202020%202021"
        },
        {
            brand: "Dodge",
            imgSrc: "../images/catalysts/Catalisador_Dianteiro_Dodge_Journey_2.7_V6_2007_2008_2009_2010-transformed.png",
            title: "Catalisador Dianteiro Dodge Journey 2.7 V6 2007 2008 2009 2010",
            description: "",
            price: 'R$ 2.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Dianteiro%20Dodge%20Journey%202.7%20V6%202007%202008%202009%202010%20"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Cruze_1.8_Tracker_Sonic-transformed.png",
            title: "Catalisador Cruze 1.8 Tracker Sonic",
            description: "",
            price: 'R$ 1.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Cruze%201.8%20Tracker%20Sonic%20"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Argo_Cronos_Strada_Uno_1.3_2020_2021_2022_2023_2024-transformed.png",
            title: "Catalisador Argo Cronos Strada Uno 1.3 2020 2021 2022 2023 2024",
            description: "",
            price: 'R$ 1.039,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Argo%20Cronos%20Strada%20Uno%201.3%202020%202021%202022%202023%202024"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Argo_Cronos_Strada_Uno_1.3_2017_2018_2019-transformed.png",
            title: "Catalisador Argo Cronos Strada Uno 1.3 2017 2018 2019",
            description: "",
            price: 'R$ 1.039,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Argo%20Cronos%20Strada%20Uno%201.3%202017%202018%202019"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Argo_1.0_3cc_Uno_1.0_3cc_Mobi_1.0_3cc-transformed.png",
            title: "Catalisador Argo 1.0 3cc Uno 1.0 3cc Mobi 1.0 3cc",
            description: "",
            price: 'R$ 799,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Argo%201.0%203cc%20Uno%201.0%203cc%20Mobi%201.0%203cc"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Virtus_Polo_1.6_16v_2017_2018_2019_2020_2021_2022_2023-transformed.png",
            title: "Catalisador Virtus Polo 1.6 16v 2017 2018 2019 2020 2021 2022 2023",
            description: "",
            price: 'R$ 1.399,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Virtus%20Polo%201.6%2016v%202017%202018%202019%202020%202021%202022%202023"
        },
        {
            brand: "Suzuki",
            imgSrc: "../images/catalysts/Catalisador_Suzuki_Sx4_2.0_16v_2007_2008_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Suzuki Sx4 2.0 16v 2007 2008 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 1.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Suzuki%20Sx4%202.0%2016v%202007%202008%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Captiva_2.4_2011_2012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Secundário Captiva 2.4 2011 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 869,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Captiva%202.4%202011%202012%202013%202014%202015%202016"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Primário_S10_2.5_Flex_2013_2014_2015_2016_2017_2018-transformed.png",
            title: "Catalisador Primário S10 2.5 Flex 2013 2014 2015 2016 2017 2018",
            description: "",
            price: 'R$ 2.119,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20S10%202.5%20Flex%202013%202014%202015%202016%202017%202018"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Polo_Nivus_Virtus_TCross_1.0_Tsi_3cc_2018_2019_2020_2021_3_Cilindros-transformed.png",
            title: "Catalisador Polo Nivus Virtus TCross 1.0 Tsi 3cc 2018 2019 2020 2021 3 Cilindros",
            description: "",
            price: 'R$ 2.049,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Polo%20Nivus%20Virtus%20TCross%201.0%20Tsi%203cc%202018%202019%202020%202021%203%20Cilindros"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_208_1.0_3_Cilindros_C3_1.0_Firefly_3cc-transformed.png",
            title: "Catalisador Peugeot 208 1.0 3 Cilindros C3 1.0 Firefly 3cc",
            description: "",
            price: 'R$ 919,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%20208%201.0%203%20Cilindros%20C3%201.0%20Firefly%203cc"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Onix_1.0_12v_3_Cilindros_Aspirado_3cc_2020_20212022-transformed.png",
            title: "Catalisador Onix 1.0 12v 3 Cilindros Aspirado 3cc 2020 2021 2022",
            description: "",
            price: 'R$ 1.679,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Onix%201.0%2012v%203%20Cilindros%20Aspirado%203cc%202020%202021%202022"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Onix_1.0_3cc_12v_Turbo_Tracker_1.0_3cc_e_1.2_Turbo_2020_2021_2022_2023_3_cilindros-transformed.png",
            title: "Catalisador Onix 1.0 3cc 12v Turbo Tracker 1.0 3cc e 1.2 Turbo 2020 2021 2022 2023 3 cilindros",
            description: "",
            price: 'R$ 1.490,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Onix%201.0%203cc%2012v%20Turbo%20Tracker%201.0%203cc%20e%201.2%20Turbo%202020%202021%202022%202023%203%20cilindros"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Jetta_2.0_16v_211cv_New_Beatle_2013_2014_2015_2016_2017_2018-transformed.png",
            title: "Catalisador Jetta 2.0 16v 211cv New Beatle 2013 2014 2015 2016 2017 2018",
            description: "",
            price: 'R$ 3.249,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Jetta%202.0%2016v%20211cv%20New%20Beatle%202013%202014%202015%202016%202017%202018"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ford_Ka_1.0_3_Cilindros_3_cc_2015_2016_2017_2018_2019_2020_Bocal_na_Saida-transformed.png",
            title: "Catalisador Ford Ka 1.0 3 Cilindros 3 cc 2015 2016 2017 2018 2019 2020 Bocal na Saida",
            description: "",
            price: 'R$ 1.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Ka%201.0%203%20Cilindros%203%20cc%202015%202016%202017%202018%202019%202020%20Bocal%20na%20Saida"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ecosport_1.6_Fiesta_1.0_1.6_2003_2004_2005_2006_2007_2008_Fiesta-transformed.png",
            title: "Catalisador Ecosport 1.6 Fiesta 1.0 1.6 2003 2004 2005 2006 2007 2008 Fiesta",
            description: "",
            price: 'R$ 599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ecosport%201.6%20Fiesta%201.0%201.6%202003%202004%202005%202006%202007%202008%20Fiesta"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Cruze_1.4_16v_Turbo_Flex_2017_2018_2019_2020_2021_Tracker_1.4-transformed.png",
            title: "Catalisador Cruze 1.4 16v Turbo Flex 2017 2018 2019 2020 2021 Tracker 1.4",
            description: "",
            price: 'R$ 1.899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Cruze%201.4%2016v%20Turbo%20Flex%202017%202018%202019%202020%202021%20Tracker%201.4"
        },
        {
            brand: "Citroen",
            imgSrc: "../images/catalysts/Catalisador_Aircross_e_C3_1.6_16v_Peugeot_208_2021_2022_2023-transformed.png",
            title: "Catalisador Aircross e C3 1.6 16v Peugeot 208 2021 2022 2023",
            description: "",
            price: 'R$ 1.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Aircross%20e%20C3%201.6%2016v%20Peugeot%20208%202021%202022%202023"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Junta_Catalisador_Hyundai_Hb20_1.6_Creta_Veloster_I30_Kia_Soul_Cerato_1.6-transformed.png",
            title: "Junta Catalisador Hyundai Hb20 1.6 Creta Veloster I30 Kia Soul Cerato 1.6",
            description: "",
            price: 'R$ 15,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Junta%20Catalisador%20Hyundai%20Hb20%201.6%20Creta%20Veloster%20I30%20Kia%20Soul%20Cerato%201.6"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Junta_Catalisador_Hyundai_Hb20_1.6_Creta_Veloster_I30_Kia_Soul_Cerato_1.62-transformed.png",
            title: "Junta Catalisador Hyundai Hb20 1.6 Creta Veloster I30 Kia Soul Cerato 1.6 2",
            description: "",
            price: 'R$ 39,90',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Junta%20Catalisador%20Hyundai%20Hb20%201.6%20Creta%20Veloster%20I30%20Kia%20Soul%20Cerato%201.6%202"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Silencioso_Escapamento_Traseiro_Honda_Fit_2003_2004_2005_2006_2007_2008-transformed.png",
            title: "Silencioso Escapamento Traseiro Honda Fit 2003 2004 2005 2006 2007 2008",
            description: "",
            price: 'R$ 126,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Silencioso%20Escapamento%20Traseiro%20Honda%20Fit%202003%202004%202005%202006%202007%202008"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_Versa_1.0_3_Cilindros_3cc_2015_2016_2017_2018_2019_2020_2021_March_1.0_3_Cilindros_3cc-transformed.png",
            title: "Catalisador Versa 1.0 3 Cilindros 3cc 2015 2016 2017 2018 2019 2020 2021 March 1.0 3 Cilindros 3cc",
            description: "",
            price: 'R$ 1.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Versa%201.0%203%20Cilindros%203cc%202015%202016%202017%202018%202019%202020%202021%20March%201.0%203%20Cilindros%203cc"
        },
        {
            brand: "Citroen",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Vtr_C4_Hatch_Pallas_C4_Picasso_Peugeot_307_308_408_2.0_16v_2006_2007_2008_2009_10_2011_2012_2013-transformed.png",
            title: "Catalisador Secundário Vtr C4 Hatch Pallas C4 Picasso Peugeot 307 308 408 2.0 16v 2006 2007 2008 2009 10 2011 2012 2013",
            description: "",
            price: 'R$ 969,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Vtr%20C4%20Hatch%20Pallas%20C4%20Picasso%20Peugeot%20307%20308%20408%202.0%2016v%202006%202007%202008%202009%2010%202011%202012%202013"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Gol_Parati_Saveiro_Santana_1.6_1.8_2.0-transformed.png",
            title: "Catalisador Secundário Gol Parati Saveiro Santana 1.6 1.8 2.0",
            description: "",
            price: 'R$ 589,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Secundário%20Gol%20Parati%20Saveiro%20Santana%201.6%201.8%202.0"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Palio_1.0_Siena_1.0_Uno_1.0_Evo_2010_2011_2012_2013_2014-transformed.png",
            title: "Catalisador Palio 1.0 Siena 1.0 Uno 1.0 Evo 2010 2011 2012 2013 2014",
            description: "",
            price: 'R$ 789,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Palio%201.0%20Siena%201.0%20Uno%201.0%20Evo%202010%202011%202012%202013%202014"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Kombi_1.4_2009_2010_2011_2012_2013_2014_2_Encaixes_Sonda-transformed.png",
            title: "Catalisador Kombi 1.4 2009 2010 2011 2012 2013 2014 2 Encaixes Sonda",
            description: "",
            price: 'R$ 749,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Kombi%201.4%202009%202010%202011%202012%202013%202014%202%20Encaixes%20Sonda"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Kombi_1.4_2006_2007_2008-transformed.png",
            title: "Catalisador Kombi 1.4 2006 2007 2008",
            description: "",
            price: 'R$ 669,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Kombi%201.4%202006%202007%202008"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Hyundai_Elantra_2014_2015_2016_2017_2018_2019-transformed.png",
            title: "Catalisador Hyundai Elantra 2014 2015 2016 2017 2018 2019",
            description: "",
            price: 'R$ 1.899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hyundai%20Elantra%202014%202015%202016%202017%202018%202019"
        },
        {
            brand: "Honda",
            imgSrc: "../images/catalysts/Catalisador_Honda_Hrv_1.8_16v_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Honda Hrv 1.8 16v 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 2.429,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Honda%20Hrv%201.8%2016v%202015%202016%202017%202018%202019%202020"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_Parati_Saveiro_Santana_1.6_1.8_2.0-transformed.png",
            title: "Catalisador Gol Parati Saveiro Santana 1.6 1.8 2.0",
            description: "",
            price: 'R$ 679,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%20Parati%20Saveiro%20Santana%201.6%201.8%202.0"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_1.0_8v_G4_2010_2011_2012_2013_2_Encaixes_Sonda-transformed.png",
            title: "Catalisador Gol 1.0 8v G4 2010 2011 2012 2013 2 Encaixes Sonda",
            description: "",
            price: 'R$ 879,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%201.0%208v%20G4%202010%202011%202012%202013%202%20Encaixes%20Sonda"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ford_Ka_1.0_3_Cilindros_3cc_2015_2016_2017_2018_2019_2020_Flange_na_Saida-transformed.png",
            title: "Catalisador Ford Ka 1.0 3 Cilindros 3cc 2015 2016 2017 2018 2019 2020 Flange na Saida",
            description: "",
            price: 'R$ 1.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ford%20Ka%201.0%203%20Cilindros%203cc%202015%202016%202017%202018%202019%202020%20Flange%20na%20Saida"
        },
        {
            brand: "Ford",
            imgSrc: "../images/catalysts/Catalisador_Ecosport_2.0_16v_4x2_2013_2014_2015_2016_2017_2018_2019-transformed.png",
            title: "Catalisador Ecosport 2.0 16v 4x2 2013 2014 2015 2016 2017 2018 2019",
            description: "",
            price: 'R$ 2.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Ecosport%202.0%2016v%204x2%202013%202014%202015%202016%202017%202018%202019"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Creta_2.0_16v_2017_2018_2019_2020_2021-transformed.png",
            title: "Catalisador Creta 2.0 16v 2017 2018 2019 2020 2021",
            description: "",
            price: 'R$ 1.899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Creta%202.0%2016v%202017%202018%202019%202020%202021"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Corsa_Celta_Prisma_Classic_1.0-transformed.png",
            title: "Catalisador Corsa Celta Prisma Classic 1.0",
            description: "",
            price: 'R$ 849,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corsa%20Celta%20Prisma%20Classic%201.0"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Coletor_Catalisador_Fox_1.0_2006_2007_2008-transformed.png",
            title: "Coletor Catalisador Fox 1.0 2006 2007 2008",
            description: "",
            price: 'R$ 859,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Coletor%20Catalisador%20Fox%201.0%202006%202007%202008"
        },
        {
            brand: "Universal",
            imgSrc: "../images/catalysts/Catalisador_Universal_Grande_1.6_1.8_2.0_2.2_2.4_-_para_Adaptação-transformed.png",
            title: "Catalisador Universal Grande 1.6 1.8 2.0 2.2 2.4 - para Adaptação",
            description: "",
            price: 'R$ 669,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Universal%20Grande%201.6%201.8%202.0%202.2%202.4%20-%20para%20Adaptação"
        },
        {
            brand: "Universal",
            imgSrc: "../images/catalysts/Catalisador_Universal_1.0_1.1_1.2_para_Adaptação-transformed.png",
            title: "Catalisador Universal 1.0 1.1 1.2 para Adaptação",
            description: "",
            price: 'R$ 529,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Universal%201.0%201.1%201.2%20para%20Adaptação"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Toyota_Rav4_2011_2012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Toyota Rav4 2011 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 3.199,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Toyota%20Rav4%202011%202012%202013%202014%202015%202016"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Toyota_Rav4_2.0_16v_2004_2005_2006_Rav4_2.4_16v_2007_2008_2009_2010-transformed.png",
            title: "Catalisador Toyota Rav4 2.0 16v 2004 2005 2006 Rav4 2.4 16v 2007 2008 2009 2010",
            description: "",
            price: 'R$ 3.099,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Toyota%20Rav4%202.0%2016v%202004%202005%202006%20Rav4%202.4%2016v%202007%202008%202009%202010"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Etios_Sedan_20012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Secundário Etios Sedan 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 849,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Etios%20Sedan%202012%202013%202014%202015%202016"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Etios_Hatch_20012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador Secundário Etios Hatch 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 729,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Etios%20Hatch%202012%202013%202014%202015%202016"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Sandero_1.6_8v_Logan_1.6_8v-transformed.png",
            title: "Catalisador Sandero 1.6 8v Logan 1.6 8v",
            description: "",
            price: 'R$ 729,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Sandero%201.6%208v%20Logan%201.6%208v"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Sandero_1.0_16v_Logan_1.0_16v_4_Cilindros-transformed.png",
            title: "Catalisador Sandero 1.0 16v Logan 1.0 16v 4 Cilindros",
            description: "",
            price: 'R$ 639,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Sandero%201.0%2016v%20Logan%201.0%2016v%204%20Cilindros"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Megane_Sedan_Gran_Tour_1.6_2.0_2006_2007_2008_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Megane Sedan Gran Tour 1.6 2.0 2006 2007 2008 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 749,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Megane%20Sedan%20Gran%20Tour%201.6%202.0%202006%202007%202008%202009%202010%202011%202012%202013"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_Voyage_Saveiro_G5_G6_Fox_Spacefox_Crossfox_Golf-transformed.png",
            title: "Catalisador Gol Voyage Saveiro G5 G6 Fox Spacefox Crossfox Golf",
            description: "",
            price: 'R$ 799,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%20Voyage%20Saveiro%20G5%20G6%20Fox%20Spacefox%20Crossfox%20Golf"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Gol_1.0_8v_2001_2002_2003_2004_2005_2006_2007_2008_2009_Power_Trend-transformed.png",
            title: "Catalisador Gol 1.0 8v 2001 2002 2003 2004 2005 2006 2007 2008 2009 Power Trend",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Gol%201.0%208v%202001%202002%202003%202004%202005%202006%202007%202008%202009%20Power%20Trend"
        },
        {
            brand: "Volkswagen",
            imgSrc: "../images/catalysts/Catalisador_Fox_1.0_2003_2004_2005-transformed.png",
            title: "Catalisador Fox 1.0 2003 2004 2005",
            description: "",
            price: 'R$ 839,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Fox%201.0%202003%202004%202005"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Corolla_2009_2010_2011_2012_2013_2014_2015_2016_2017_2018_2019_2020-transformed.png",
            title: "Catalisador Corolla 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020",
            description: "",
            price: 'R$ 1.349,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corolla%202009%202010%202011%202012%202013%202014%202015%202016%202017%202018%202019%202020"
        },
        {
            brand: "Toyota",
            imgSrc: "../images/catalysts/Catalisador_Corolla_2002_2003_2004_2005_2006_2007_2008-transformed.png",
            title: "Catalisador Corolla 2002 2003 2004 2005 2006 2007 2008",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corolla%202002%202003%202004%202005%202006%202007%202008"
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_Sentra_2007_2008_2009_2010_2011_2012-transformed.png",
            title: "Catalisador Sentra 2007 2008 2009 2010 2011 2012",
            description: "",
            price: 'R$ 1.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Sentra%202007%202008%202009%202010%202011%202012"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Pajero_Tr4_2007_2008_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Secundário Pajero Tr4 2007 2008 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Pajero%20Tr4%202007%202008%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Renault_Duster_2.0_4x2-transformed.png",
            title: "Catalisador Renault Duster 2.0 4x2",
            description: "",
            price: 'R$ 919,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Renault%20Duster%202.0%204x2"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Primário_Peugeot_307_2.0_16v-transformed.png",
            title: "Catalisador Primário Peugeot 307 2.0 16v",
            description: "",
            price: 'R$ 2.299,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Peugeot%20307%202.0%2016v"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_207_1.4_8v1.6_16v_Hatch_Sedan_Sw_Hoggar_C4_Cactus-transformed.png",
            title: "Catalisador Peugeot 207 1.4 8v 1.6 16v Hatch Sedan Sw Hoggar C4 Cactus",
            description: "",
            price: 'R$ 699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%20207%201.4%208v%201.6%2016v%20Hatch%20Sedan%20Sw%20Hoggar%20C4%20Cactus"
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_206_1.4_1.6_206_Sw_1.4_1.6-transformed.png",
            title: "Catalisador Peugeot 206 1.4 1.6 206 Sw 1.4 1.6",
            description: "",
            price: 'R$ 849,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%20206%201.4%201.6%20206%20Sw%201.4%201.6"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_Pajero_Sport_Hpe_3.5_4x4_2007_Em_Diante_Lado_Esquerdo-transformed.png",
            title: "Catalisador Pajero Sport Hpe 3.5 4x4 2007 Em Diante Lado Esquerdo",
            description: "",
            price: 'R$ 1.499,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Pajero%20Sport%20Hpe%203.5%204x4%202007%20Em%20Diante%20Lado%20Esquerdo"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_Pajero_Sport_Hpe_3.5_4x4_2007_Em_Diante_Lado_Direito-transformed.png",
            title: "Catalisador Pajero Sport Hpe 3.5 4x4 2007 Em Diante Lado Direito",
            description: "",
            price: 'R$ 1.699,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Pajero%20Sport%20Hpe%203.5%204x4%202007%20Em%20Diante%20Lado%20Direito"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_Mitsubishi_Outlander_2.4_4x4_16v_2010...-transformed.png",
            title: "Catalisador Mitsubishi Outlander 2.4 4x4 16v 2010/...",
            description: "",
            price: 'R$ 2.089,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Mitsubishi%20Outlander%202.4%204x4%2016v%202010/..."
        },
        {
            brand: "Nissan",
            imgSrc: "../images/catalysts/Catalisador_March_1.0_4cc_2011_2012_2013_2014_2015_2016-transformed.png",
            title: "Catalisador March 1.0 4cc 2011 2012 2013 2014 2015 2016",
            description: "",
            price: 'R$ 599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20March%201.0%204cc%202011%202012%202013%202014%202015%202016"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Kangoo_1.6_16v-transformed.png",
            title: "Catalisador Kangoo 1.6 16v",
            description: "",
            price: 'R$ 999,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Kangoo%201.6%2016v"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Fluence_2011_2012_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Fluence 2011 2012 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 969,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fluence%202011%202012%202013%202014%202015%202016%202017"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Duster_2.0_16v_4x4_2012_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Duster 2.0 16v 4x4 2012 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 1.029,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Duster%202.0%2016v%204x4%202012%202013%202014%202015%202016%202017"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Clio_1.6_16v_Symbol_1.6_16v-transformed.png",
            title: "Catalisador Clio 1.6 16v Symbol 1.6 16v",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Clio%201.6%2016v%20Symbol%201.6%2016v"
        },
        {
            brand: "Renault",
            imgSrc: "../images/catalysts/Catalisador_Clio_1.0_99_2000_201_02_03_04_05_06_07_08_09_10_11_2012-transformed.png",
            title: "Catalisador Clio 1.0 99 2000 201 02 03 04 05 06 07 08 09 10 11 2012",
            description: "",
            price: 'R$ 569,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Clio%201.0%2099%202000%20201%2002%2003%2004%2005%2006%2007%2008%2009%2010%2011%202012"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Tubo_Motor_Com_Catalisador_Fiorino_Fire_1.3_2002_2003_2004_2005_2006-transformed.png",
            title: "Tubo Motor Com Catalisador Fiorino Fire 1.3 2002 2003 2004 2005 2006",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Tubo%20Motor%20Com%20Catalisador%20Fiorino%20Fire%201.3%202002%202003%202004%202005%202006"
        },
        {
            brand: "Citroen",
            imgSrc: "../images/catalysts/Catalisador_Xsara_Picasso_2.0_16v_2001_2002_2003_2004_2005_2006_2007_2008_2009_2010_2011-transformed.png",
            title: "Catalisador Xsara Picasso 2.0 16v 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011",
            description: "",
            price: 'R$ 1.169,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Xsara%20Picasso%202.0%2016v%202001%202002%202003%202004%202005%202006%202007%202008%202009%202010%202011"
        },
        {
            brand: "Citroen",
            imgSrc: "../images/catalysts/Catalisador_Xsara_Picasso_1.6_2001_2002_2003_2004_2005_2006_2007_2008_2009-transformed.png",
            title: "Catalisador Xsara Picasso 1.6 2001 2002 2003 2004 2005 2006 2007 2008 2009",
            description: "",
            price: 'R$ 879,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Xsara%20Picasso%201.6%202001%202002%202003%202004%202005%202006%202007%202008%202009"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Tucson_2.0_16v_Kia_Sportage_2.0_16v-transformed.png",
            title: "Catalisador Secundário Tucson 2.0 16v Kia Sportage 2.0 16v",
            description: "",
            price: 'R$ 869,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Tucson%202.0%2016v%20Kia%20Sportage%202.0%2016v"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Ix35_2.0_16v_Sportage_2.0_16v_2012...-transformed.png",
            title: "Catalisador Secundário Ix35 2.0 16v Sportage 2.0 16v 2012/...",
            description: "",
            price: 'R$ 1.429,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Secundário%20Ix35%202.0%2016v%20Sportage%202.0%2016v%202012..."
        },
        {
            brand: "Peugeot",
            imgSrc: "../images/catalysts/Catalisador_Peugeot_Partner_1.6_Citroen_Berlingo_1.6-transformed.png",
            title: "Catalisador Peugeot Partner 1.6 Citroen Berlingo 1.6",
            description: "",
            price: 'R$ 879,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Peugeot%20Partner%201.6%20Citroen%20Berlingo%201.6"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Linea_1.9_2009_2010_2011_2012-transformed.png",
            title: "Catalisador Linea 1.9 2009 2010 2011 2012",
            description: "",
            price: 'R$ 1.149,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Linea%201.9%202009%202010%202011%202012"
        },
        {
            brand: "Mitsubishi",
            imgSrc: "../images/catalysts/Catalisador_L200_Triton_Pajero_Dakar_3.5_V6_Flex_2010..._Lado_Esquerdo-transformed.png",
            title: "Catalisador L200 Triton Pajero Dakar 3.5 V6 Flex 2010/... Lado Esquerdo",
            description: "",
            price: 'R$ 1.149,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20L200%20Triton%20Pajero%20Dakar%203.5%20V6%20Flex%202010...%20Lado%20Esquerdo"
        },
        {
            brand: "Kia",
            imgSrc: "../images/catalysts/Catalisador_Kia_Picanto_2005_2006_2007_2008_2009_2010-transformed.png",
            title: "Catalisador Kia Picanto 2005 2006 2007 2008 2009 2010",
            description: "",
            price: 'R$ 2.290,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Kia%20Picanto%202005%202006%202007%202008%202009%202010"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Fiorino_Palio_Uno_Siena_Mobi_1.0_4cc_1.01.4_Evo_Doblo_Idea-transformed.png",
            title: "Catalisador Fiorino Palio Uno Siena Mobi 1.0 4cc 1.0 1.4 Evo Doblo Idea",
            description: "",
            price: 'R$ 819,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fiorino%20Palio%20Uno%20Siena%20Mobi%201.0%204cc%201.0%201.4%20Evo%20Doblo%20Idea"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Fiorino_1.3_Flex_2007_2008_2009_2010_2011_2012_2013-transformed.png",
            title: "Catalisador Fiorino 1.3 Flex 2007 2008 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 769,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Fiorino%201.3%20Flex%202007%202008%202009%202010%202011%202012%202013"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Doblo_Strada_Palio_Siena_Weekend_Bravo_Punto_Idea_Linea_Cronos_Grand_Seina_1.6_16v_e_1.8_Etorq-transformed.png",
            title: "Catalisador Doblo Strada Palio Siena Weekend Bravo Punto Idea Linea Cronos Grand Siena 1.6 16v e 1.8 Etorq",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Doblo%20Strada%20Palio%20Siena%20Weekend%20Bravo%20Punto%20Idea%20Linea%20Cronos%20Grand%20Siena%201.6%2016v%%201.8%20Etorq"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Doblo_Palio_Siena_Weekend_Strada_1.4_Fiorino_Evo_Idea_Punto_Uno_1.4-transformed.png",
            title: "Catalisador Doblo Palio Siena Weekend Strada 1.4 Fiorino Evo Idea Punto Uno 1.4",
            description: "",
            price: 'R$ 890,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Doblo%20Palio%20Siena%20Weekend%20Strada%201.4%20Fiorino%20Evo%20Idea%20Punto%20Uno%201.4"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Doblo_Idea_Palio_Punto_Siena_Weekend_Stilo_Strada_1.8-transformed.png",
            title: "Catalisador Doblo Idea Palio Punto Siena Weekend Stilo Strada 1.8",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Doblo%20Idea%20Palio%20Punto%20Siena%20Weekend%20Stilo%20Strada%201.8"
        },
        {
            brand: "Mercedes",
            imgSrc: "../images/catalysts/Catalisador_Classe_a_160_190-transformed.png",
            title: "Catalisador Classe a 160 190",
            description: "",
            price: 'R$ 949,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Classe%20a%20160%20190"
        },
        {
            brand: "Citroen",
            imgSrc: "../images/catalysts/Catalisador_Citroen_Aircross_C3_Peugeot_208_C3_Picasso-transformed.png",
            title: "Catalisador Citroen Aircross C3 Peugeot 208 C3 Picasso",
            description: "",
            price: 'R$ 749,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Citroen%20Aircross%20C3%20Peugeot%20208%20C3%20Picasso"
        },
        {
            brand: "Fiat",
            imgSrc: "../images/catalysts/Catalisador_Stilo_Strada_Palio_Corsa_Montana_Meriva_Idea_Punto_1.8_Doblo-transformed.png",
            title: "Catalisador Stilo Strada Palio Corsa Montana Meriva Idea Punto 1.8 Doblo",
            description: "",
            price: 'R$ 979,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Stilo%20Strada%20Palio%20Corsa%20Montana%20Meriva%20Idea%20Punto%201.8%20Doblo"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Secundário_S10_2.4_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Secundário S10 2.4 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 989,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20S10%202.4%202013%202014%202015%202016%202017"
        },
        {
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/Catalisador_Secundário_Chery_Tiggo_2.0_16v_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Secundário Chery Tiggo 2.0 16v 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 719,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundário%20Chery%20Tiggo%202.0%2016v%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Secundario_Astra_Vectra_Zafira_2009_2010_20011_2012_2013-transformed.png",
            title: "Catalisador Secundario Astra Vectra Zafira 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.029,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Secundario%20Astra%20Vectra%20Zafira%202009%202010%202011%202012%202013"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_S10_Blazer_2.4_2007_2008_2009_2010_2011_2012-transformed.png",
            title: "Catalisador S10 Blazer 2.4 2007 2008 2009 2010 2011 2012",
            description: "",
            price: 'R$ 1.069,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20S10%20Blazer%202.4%202007%202008%202009%202010%202011%202012"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Primário_S10_2.4_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Primário S10 2.4 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 839,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20S10%202.4%202013%202014%202015%202016%202017"
        },
        {
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/Catalisador_Primario_Chery_Tiggo_2.0_16v_2009_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Primario Chery Tiggo 2.0 16v 2009 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primario%20Chery%20Tiggo%202.0%2016v%202009%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Primario_Captiva_2.4_16v_2011_2012_2013_2014_2015_2016_2017-transformed.png",
            title: "Catalisador Primario Captiva 2.4 16v 2011 2012 2013 2014 2015 2016 2017",
            description: "",
            price: 'R$ 2.489,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primario%20Captiva%202.4%2016v%202011%202012%202013%202014%202015%202016%202017"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Primário_Astra_Vectra_Zafira_2009_2010_20011_2012_2013-transformed.png",
            title: "Catalisador Primário Astra Vectra Zafira 2009 2010 2011 2012 2013",
            description: "",
            price: 'R$ 1.169,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Primário%20Astra%20Vectra%20Zafira%202009%202010%202011%202012%202013"
        },
        {
            brand: "Hyundai",
            imgSrc: "../images/catalysts/Catalisador_Hb20_1.0_2012_2013_2014_2015_2016_2017_2018_2019_2020_Kia_Picanto_1.0-transformed.png",
            title: "Catalisador Hb20 1.0 2012 2013 2014 2015 2016 2017 2018 2019 2020 Kia Picanto 1.0",
            description: "",
            price: 'R$ 819,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Hb20%201.0%202012%202013%202014%202015%202016%202017%202018%202019%202020%20Kia%20Picanto%201.0"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Corsa_93_94_95_96_97_98_99_2000_2001_2002_2003_2004_Hatch_e_Sedan_Classic-transformed.png",
            title: "Catalisador Corsa 93 94 95 96 97 98 99 2000 2001 2002 2003 2004 Hatch e Sedan Classic",
            description: "",
            price: 'R$ 489,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Corsa%2093%2094%2095%2096%2097%2098%2099%202000%202001%202002%202003%202004%20Hatch%20e%20Sedan%20Classic"
        },
        {
            brand: "Caoa Chery",
            imgSrc: "../images/catalysts/Catalisador_Chery_Face_1.3_16v_2010_2011_2012_2013_2014_2015-transformed.png",
            title: "Catalisador Chery Face 1.3 16v 2010 2011 2012 2013 2014 2015",
            description: "",
            price: 'R$ 1.499,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Chery%20Face%201.3%2016v%202010%202011%202012%202013%202014%202015"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Celta_Cobalt_Classic_Prisma_Montana_Onix_Spin-transformed.png",
            title: "Catalisador Celta Cobalt Classic Prisma Montana Onix Spin",
            description: "",
            price: 'R$ 899,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Celta%20Cobalt%20Classic%20Prisma%20Montana%20Onix%20Spin"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Celta_1.0_2000_2001_2002_2003_2004_2005-transformed.png",
            title: "Catalisador Celta 1.0 2000 2001 2002 2003 2004 2005",
            description: "",
            price: 'R$ 529,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Celta%201.0%202000%202001%202002%202003%202004%202005"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Captiva_3.6_V6_2008_2009_2010_2011_Lado_Esquerdo-transformed.png",
            title: "Catalisador Captiva 3.6 V6 2008 2009 2010 2011 Lado Esquerdo",
            description: "",
            price: 'R$ 2.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Captiva%203.6%20V6%202008%202009%202010%202011%20Lado%20Esquerdo"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Captiva_3.6_V6_4x2_2008_2009_2010_Lado_Direito-transformed.png",
            title: "Catalisador Captiva 3.6 V6 4x2 2008 2009 2010 Lado Direito",
            description: "",
            price: 'R$ 2.599,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Captiva%203.6%20V6%204x2%202008%202009%202010%20Lado%20Direito"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Captiva_3.0_V6_2011_2012_2013_2014_Lado_Esquerdo-transformed.png",
            title: "Catalisador Captiva 3.0 V6 2011 2012 2013 2014 Lado Esquerdo",
            description: "",
            price: 'R$ 1.590,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Captiva%203.0%20V6%202011%202012%202013%202014%20Lado%20Esquerdo"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Captiva_3.0_V6_2011_2012_2013_2014_Lado_Direito-transformed.png",
            title: "Catalisador Captiva 3.0 V6 2011 2012 2013 2014 Lado Direito",
            description: "",
            price: 'R$ 1.579,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Captiva%203.0%20V6%202011%202012%202013%202014%20Lado%20Direito"
        },
        {
            brand: "Audi",
            imgSrc: "../images/catalysts/Catalisador_Audi_A4_A5_Q5_2.0_16v_Turbo_2009...-transformed.png",
            title: "Catalisador Audi A4 A5 Q5 2.0 16v Turbo 2009...",
            description: "",
            price: 'R$ 1.799,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Catalisador%20Audi%20A4%20A5%20Q5%202.0%2016v%20Turbo%202009..."
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Astra_Vectra_Zafira-transformed.png",
            title: "Catalisador Astra Vectra Zafira",
            description: "",
            price: 'R$ 889,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Astra%20Vectra%20Zafira"
        },
        {
            brand: "Chevrolet",
            imgSrc: "../images/catalysts/Catalisador_Agile_Celta_Corsa_Classic_Prisma_Montana_Meriva-transformed.png",
            title: "Catalisador Agile Celta Corsa Classic Prisma Montana Meriva",
            description: "",
            price: 'R$ 739,00',
            whatsappLink: "https://wa.me/5511911054332?text=Estou%20interessado%20no%20Agile%20Celta%20Corsa%20Classic%20Prisma%20Montana%20Meriva"
        },
    ];

    const cardsContainer = document.querySelector('#products-container');
    const paginationContainer = document.querySelector('#pagination');
    const itemsPerPage = 12;
    let currentPage = 1;

    function renderCards(cards, container) {
        container.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentCards = cards.slice(start, end);

        currentCards.forEach(card => {
            const cardElement = createCardElement(card);
            container.appendChild(cardElement);
        });

        renderPagination(cards.length);
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

    function renderPagination(totalItems) {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.classList.add('pagination-button');
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                filterCards();
            });
            paginationContainer.appendChild(button);
        }
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

    renderCards(catalysts, cardsContainer);

    document.getElementById('brandFilter').addEventListener('change', filterCards);
    document.getElementById('searchFilter').addEventListener('keyup', filterCards);

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

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.nav-menu a');

    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function() {
            menu.classList.remove('ativo');
            navMenu.classList.remove('ativo');
        });
    });
});

window.addEventListener('scroll', () => {
    if (menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    }
});
