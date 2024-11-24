document.addEventListener("DOMContentLoaded", function () {

    function scorrimentoFoto(listaFoto, avanti, dietro) {
        let contenitoreImg = document.getElementById(listaFoto)
        let tastoAvanti = document.getElementById(avanti)
        let tastoDietro = document.getElementById(dietro)

        if (contenitoreImg && tastoAvanti && tastoDietro) {

            tastoAvanti.addEventListener("click", function(){
                contenitoreImg.scrollBy({
                    left: -280,
                    behavior: "smooth",
                });
            })

            tastoDietro.addEventListener("click", function(){
                contenitoreImg.scrollBy({
                    left: 280,
                    behavior: "smooth",
                });
            })
        }
    }

    scorrimentoFoto("contenitore-img-1", "dietro1", "avanti1")
    scorrimentoFoto("contenitore-img-2", "dietro2", "avanti2")
    scorrimentoFoto("contenitore-img-3", "dietro3", "avanti3")
    scorrimentoFoto("contenitore-img-4", "dietro4", "avanti4")
    scorrimentoFoto("contenitore-img-5", "dietro5", "avanti5")
    scorrimentoFoto("contenitore-img-6", "dietro6", "avanti6")
    scorrimentoFoto("contenitore-img-7", "dietro7", "avanti7")
    scorrimentoFoto("contenitore-img-8", "dietro8", "avanti8")
    scorrimentoFoto("contenitore-img-9", "dietro9", "avanti9")
    scorrimentoFoto("contenitore-img-10", "dietro10", "avanti10")
    scorrimentoFoto("contenitore-img-11", "dietro11", "avanti11")
    scorrimentoFoto("contenitore-img-12", "dietro12", "avanti12")
    scorrimentoFoto("contenitore-img-13", "dietro13", "avanti13")
    scorrimentoFoto("contenitore-img-14", "dietro14", "avanti14")

    let città = {
        genova: {
            titolo: "Stays in Genova",
            card1: {
                img: "assets/card Appartamenti/1.webp",
                voto: "4.1",
                numeroVoti: "5 Ratings",
                luogoCard: "Genova"
            },
            card2: {
                img: "assets/card Appartamenti/2.webp",
                voto: "4.2",
                numeroVoti: "10 Ratings",
                luogoCard: "Genova"
            },
            card3: {
                img: "assets/card Appartamenti/3.webp",
                voto: "4.3",
                numeroVoti: "15 Ratings",
                luogoCard: "Genova"
            },
            card4: {
                img: "assets/card Appartamenti/4.webp",
                voto: "4.4",
                numeroVoti: "20 Ratings",
                luogoCard: "Genova"
            },
            card5: {
                img: "assets/card Appartamenti/5.webp",
                voto: "4.5",
                numeroVoti: "25 Ratings",
                luogoCard: "Genova"
            },
            card6: {
                img: "assets/card Appartamenti/6.webp",
                voto: "4.6",
                numeroVoti: "30 Ratings",
                luogoCard: "Genova"
            },
            card7: {
                img: "assets/card Appartamenti/7.webp",
                voto: "4.7",
                numeroVoti: "35 Ratings",
                luogoCard: "Genova"
            },
            card8: {
                img: "assets/card Appartamenti/8.webp",
                voto: "4.8",
                numeroVoti: "40 Ratings",
                luogoCard: "Genova"
            },
            card9: {
                img: "assets/card Appartamenti/9.webp",
                voto: "4.9",
                numeroVoti: "45 Ratings",
                luogoCard: "Genova"
            },
            card10: {
                img: "assets/card Appartamenti/10.webp",
                voto: "5.0",
                numeroVoti: "50 Ratings",
                luogoCard: "Genova"
            }
        }
    };
    
    

    function componiPagina(cittàScelta) {
        let datiCittà = città[cittàScelta];
        let titoloPagina = document.getElementById("titolo").textContent = datiCittà.titolo;

        document.getElementById("contenitore-img-1").appendChild(datiCittà.card1.img)
        document.getElementById("voto").textContent = datiCittà.card1.voto;
        document.getElementById("numeroVoti").textContent = datiCittà.card1.numeroVoti;
        document.getElementById("luogoCard").textContent = datiCittà.card1.luogoCard;

        document.getElementById("contenitore-img-2").appendChild(datiCittà.card2.img)
        document.getElementById("voto2").textContent = datiCittà.card2.voto;
        document.getElementById("numeroVoti2").textContent = datiCittà.card2.numeroVoti;
        document.getElementById("luogoCard2").textContent = datiCittà.card2.luogoCard;

        document.getElementById("contenitore-img-3").appendChild(datiCittà.card3.img)
        document.getElementById("voto3").textContent = datiCittà.card3.voto;
        document.getElementById("numeroVoti3").textContent = datiCittà.card3.numeroVoti;
        document.getElementById("luogoCard3").textContent = datiCittà.card3.luogoCard;

        document.getElementById("contenitore-img-4").appendChild(datiCittà.card4.img)
        document.getElementById("voto4").textContent = datiCittà.card4.voto;
        document.getElementById("numeroVoti4").textContent = datiCittà.card4.numeroVoti;
        document.getElementById("luogoCard4").textContent = datiCittà.card4.luogoCard;

        document.getElementById("contenitore-img-5").appendChild(datiCittà.card5.img)
        document.getElementById("voto5").textContent = datiCittà.card5.voto;
        document.getElementById("numeroVoti5").textContent = datiCittà.card5.numeroVoti;
        document.getElementById("luogoCard5").textContent = datiCittà.card5.luogoCard;

        document.getElementById("contenitore-img-5").appendChild(datiCittà.card5.img)
        document.getElementById("voto5").textContent = datiCittà.card5.voto;
        document.getElementById("numeroVoti5").textContent = datiCittà.card5.numeroVoti;
        document.getElementById("luogoCard5").textContent = datiCittà.card5.luogoCard;

        document.getElementById("contenitore-img-6").appendChild(datiCittà.card6.img)
        document.getElementById("voto6").textContent = datiCittà.card6.voto;
        document.getElementById("numeroVoti6").textContent = datiCittà.card6.numeroVoti;
        document.getElementById("luogoCard6").textContent = datiCittà.card6.luogoCard;

        document.getElementById("contenitore-img-7").appendChild(datiCittà.card7.img)
        document.getElementById("voto7").textContent = datiCittà.card7.voto;
        document.getElementById("numeroVoti7").textContent = datiCittà.card7.numeroVoti;
        document.getElementById("luogoCard7").textContent = datiCittà.card7.luogoCard;

        document.getElementById("contenitore-img-8").appendChild(datiCittà.card8.img)
        document.getElementById("voto8").textContent = datiCittà.card8.voto;
        document.getElementById("numeroVoti8").textContent = datiCittà.card8.numeroVoti;
        document.getElementById("luogoCard8").textContent = datiCittà.card8.luogoCard;

        document.getElementById("contenitore-img-9").appendChild(datiCittà.card9.img)
        document.getElementById("voto").textContent = datiCittà.card9.voto;
        document.getElementById("numeroVoti").textContent = datiCittà.card9.numeroVoti;
        document.getElementById("luogoCard").textContent = datiCittà.card9.luogoCard;

        document.getElementById("contenitore-img-10").appendChild(datiCittà.card10.img)
        document.getElementById("voto10").textContent = datiCittà.card10.voto;
        document.getElementById("numeroVoti10").textContent = datiCittà.card10.numeroVoti;
        document.getElementById("luogoCard10").textContent = datiCittà.card10.luogoCard;

    }

    componiPagina("genova")

});