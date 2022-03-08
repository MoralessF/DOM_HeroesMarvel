import Heroe from "./Heroe.js";

const avengers=[];
avengers.push(new Heroe("Steve Rogers","Capitan América",false,true,"Ataque con escudo a múltiples objetivos","Escudo de vibranium","Suero del supersoldado",false,'https://www.cinemascomics.com/wp-content/uploads/2020/07/chris-evans-capitan-america-peliculas-de-marvel.jpg'));
avengers.push(new Heroe("T'Challa","Black Panter",false,true,"Agildar y fuerza sobrehumana","Traje de y garras de vibranium","Hierba otorgada por el Dios pantera",false,'https://i.blogs.es/9b25a4/black-panther/840_560.jpeg'));
avengers.push(new Heroe("James Logan","Wolverine",false,true,"Combate cuerpo a cuerpo con garras de adamantium","Garras de adamantium","Genes mutantes",false,'https://www.cinemascomics.com/wp-content/uploads/2021/12/Hugh-Jackman-Wolverine-Marvel-Studios.jpg'));
avengers.push(new Heroe("Peter Parker","Spiderman",false,true,"Habilidades de araña","Traje de alta tecnología con disparadores de telaraña","Picadura de araña modificada genéticamente",true,'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/11/spider-man-sin-camino-a-casa.jpg?fit=2160%2C1432&ssl=1'));
avengers.push(new Heroe("Carol Danvers","Capitana Marvel",true,true,"Canalizar energía cósmica","Exposición a energía cósmica",'No tiene',true,'https://www.cinemascomics.com/wp-content/uploads/2021/03/brie-larson-capitana-marvel-simbolo.jpg'));
avengers.push(new Heroe('IA Jarvis','Vision',true,false,'Poderes de la gema de la mente','Gema de la mente','Creación de super-androide',true,'https://as01.epimg.net/meristation/imagenes/2021/01/20/noticias/1611141009_391573_1611141045_noticia_normal.jpg'));
avengers.push(new Heroe("Tony Stark","Iron Man",true,true,"Es ingeniero.","Gran inteligencia y traje de alta tecnología","Decidir estudiar ingeniería",true,'https://es.web.img3.acsta.net/r_654_368/newsv7/20/05/07/12/52/3980724.jpg'));
avengers.push(new Heroe("Thor Oddinson","Thor",true,false,"Poderes de Dios nórdico","Mjolnir","Hijo de Dioses",true,'https://www.quever.news/u/fotografias/m/2020/9/12/f850x638-1140_78629_4825.jpg'));
avengers.push(new Heroe("Adam Warlok","Adam Warlok",true,false,'Poderes de la gema del alma','No usa','Creación de super-humano',true,'https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/05/hipertextual-marvel-anunciara-fase-4-su-universo-cinematografico-verano-2019236214.jpg?fit=1200%2C675&ssl=1'));

const main=document.querySelector('main');
const contenedorGeneral=document.createElement('div');
contenedorGeneral.classList.add('album','py-5','bg-light');
main.append(contenedorGeneral);

const contenedorCards=document.createElement('div');
contenedorCards.classList.add('container');
contenedorGeneral.append(contenedorCards);

const renglonCards=document.createElement('div');
renglonCards.classList.add('row','row-cols-1','row-cols-sm-2','row-cols-md-3','g-3');
contenedorCards.append(renglonCards);

avengers.forEach((heroe)=>
    {
        const card=document.createElement('div');
        card.classList.add('col');

        const cardShadow=document.createElement('div');
        cardShadow.classList.add('card','shadow-sm');
        card.append(cardShadow);

        const heroImg=document.createElement('img');
        heroImg.src=heroe.img;
        cardShadow.classList.add('bd-placeholder-img','card-img-top','img-fluid');
        cardShadow.append(heroImg);

        const cardBody=document.createElement('div');
        cardBody.classList.add('card-body');
        cardShadow.append(cardBody);

        const heroAlias=document.createElement('h3');
        heroAlias.classList.add('card-title');
        heroAlias.innerText=heroe.alias;
        cardBody.append(heroAlias);

        const heroNombre=document.createElement('h5');
        heroNombre.classList.add('card-title','text-muted');
        heroNombre.innerText=heroe.nombre;
        cardBody.append(heroNombre);

        const heroPoder=document.createElement('p');
        heroPoder.classList.add('card-text');
        heroPoder.innerText=`Super poder: ${heroe.superPoder}`;
        cardBody.append(heroPoder);

        const seccionInferior=document.createElement('div');
        seccionInferior.classList.add('d-flex','justify-content-between','align-items-center');
        cardBody.append(seccionInferior);

        const seccionBotones=document.createElement('div');
        seccionBotones.classList.add('btn-group');
        if(heroe.vuela)
        {
            const botonVuela=document.createElement('button');
            botonVuela.classList.add('btn','btn-sm','btn-outline-secondary','m-1');
            botonVuela.innerText="Vuela"
            seccionBotones.append(botonVuela);
        }
        if(heroe.humano)
        {
            const botonHumano=document.createElement('button');
            botonHumano.classList.add('btn','btn-sm','btn-outline-secondary','m-1');
            botonHumano.innerText="Humano"
            seccionBotones.append(botonHumano);
        }
        if(heroe.sobrevivirEnEspacioExterior)
        {
            const astronauta=document.createElement('small');
            astronauta.classList.add('text-muted');
            astronauta.innerText="Astronauta"
            seccionInferior.append(astronauta);
        }
        else
        {
            const astronauta=document.createElement('small');
            astronauta.classList.add('text-muted');
            astronauta.innerText="No astronauta"
            seccionInferior.append(astronauta);
        }

        seccionInferior.append(seccionBotones);
        renglonCards.append(card);
    }
);


