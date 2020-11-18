let data = [
    {
        years: '2012',
        info: []
    },
    {
        years: '2013',
        info:[]
    },
    {
        years: '2014',
        info:[]
    },
    {
        years: '2015',
        info:[]
    },
    {
        years: '2016',
        info:[]
    },
    {
        years: '2017',
        info:[]
    },
    {
        years: '2018',
        info:[]
    },
    {
        years: '2019',
        info:[]
    },
    {
        years: '2020',
        info:[
            {
                img: "/src/images/Design.png",
                color: "turquoise",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design1.png",
                color: "turquoise",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design2.png",
                color: "turquoise",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design3.png",
                color: "turquoise",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design.png",
                color: "orange",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design1.png",
                color: "orange",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design2.png",
                color: "orange",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design3.png",
                color: "orange",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design.png",
                color: "blue",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design1.png",
                color: "blue",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design2.png",
                color: "blue",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design3.png",
                color: "blue",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design.png",
                color: "purple",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design1.png",
                color: "purple",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design2.png",
                color: "purple",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design3.png",
                color: "purple",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design.png",
                color: "yellow",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design1.png",
                color: "yellow",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design2.png",
                color: "yellow",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            },
            {
                img: "/src/images/Design3.png",
                color: "yellow",
                name: "Ярослав Зубко",
                position: "Design nomination",
                descript: "Lead Product Designer, Revenue, Tinder"
            }
        ]
    }
];
console.log(data)
let starter = () => {
    let block = document.createElement('ul');
    block.classList.add('bottom__menu');
    let divBlock = document.createElement('div');
    divBlock.classList.add('year__blocks');
    data.forEach(e => {
        block.innerHTML += `<li class="years__list" data-years="${e.years}">${e.years}</li>`
        divBlock.innerHTML += `<div class="years__block" data-years="${e.years}"></div>`
    })
    tileNavigations.appendChild(block);
    tile.appendChild(divBlock);
    let curent = document.querySelectorAll('.years__block');
    data.forEach((e, index) => {
        if(e.years == curent[index].dataset.years){
            e.info.forEach(elements =>{
                let block = document.createElement('div');
                block.classList.add('photos');
                block.innerHTML = `
                    <div class="photos__img" style=" background-image: url(${elements.img})">
                    <div class="${elements.color} icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9329 0H11.9197V5.63008H0V16.8903H11.9206V5.63012H19.9329V0ZM28.0146 5.63008H19.9351V16.8903H28.0146V5.63008ZM39.9982 16.8907H28.0114V37.3163H39.9982V16.8907ZM11.9197 21.4732H19.9329V27.1033H11.9197V21.4732ZM15.9603 37.3159H0V40H15.9603V37.3159Z"/>
                        </svg>
                    </div>
                    <div class="hover__block">
                        <p class="hover__title">${elements.name}</p>
                        <p class="hover__sub">${elements.position}</p>
                        <p class="hover__descript">${elements.descript}</p>
                    </div>
                    </div>
                `;
                curent[index].appendChild(block);
            })
        }
    });
    let lastYears = document.querySelectorAll('.years__list'),
        lastBlock = document.querySelectorAll('.years__block');
    lastYears[lastYears.length - 1].classList.add('actuale');
    lastBlock[lastBlock.length - 1].classList.add('curents');
    lastYears.forEach((e, index) => {
        e.onclick = (element) => {
            if(!e.classList.contains('actuale')){
                for(let i = 0; i<lastYears.length; i++){
                    lastYears[i].classList.remove('actuale');
                    lastBlock[i].classList.remove('curents');
                }
                element.target.classList.add('actuale');
                if(element.target.innerHTML == lastBlock[index].dataset.years){
                    lastBlock[index].classList.add('curents')
                }
            }
        }
    })
};
starter();