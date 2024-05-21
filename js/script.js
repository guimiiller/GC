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
