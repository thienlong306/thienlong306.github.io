var imgMySeft = document.getElementById("avatar");
var about = [
    {
        name: "Phan Đồng Thiên Long",
        department: "Software Developer",
        about: "Mong muốn có thể trở thành một Fullstack Developer trong tương lai.",
    }
];
var listContact = [
    {
        icon: "Account_circle.svg",
        content: "24/4/2000 Ninh Thuận",
    },
    {
        icon: "Home.svg",
        content: "Quận 12 TP. Hồ Chí Minh",
    },
    {
        icon: "Phone.svg",
        content: "0886869244",
    },
    {
        icon: "email.svg",
        content: "phandongthienlong306@gmail.com",
    },
    {
        icon: "github.svg",
        content: "https://github.com/thienlong306",
    },
]
var listSkill = [
    {
        name: "HTML5/CSS3/JavaScript",
        progress: "90",
    },
    {
        name: "Bootstrap",
        progress: "80",
    },
    {
        name: "jQuery",
        progress: "70",
    },
    {
        name: "Java",
        progress: "90",
    },
    {
        name: "MySQL",
        progress: "80",
    },
    {
        name: "Selenium",
        progress: "80",
    }
]
var lastSkill = "Also proficient in Adobe Photoshop and Illustrator, English.";
var listEducation = [
    {
        name: "Trường Đại Học Sài Gòn",
        time: "2018-now",
        description: "Học ngành Công Nghệ Thông Tin",
    },
]
var listInterestes = [
    {
        name: "Chơi Game",
        time: "",
        description: "",
    },
    {
        name: "Xem Phim",
        time: "",
        description: "",
    },
    {
        name: "Code",
        time: "",
        description: "",
    },
    {
        name: "Thiết kế",
        time: "",
        description: "",
    },
    {
        name: "Board Game",
        time: "",
        description: "",
    },
]
var listProject = [
    {
        name: "Quản Lý Tour Du Lịch",
        time: "Java",
        description: "https://github.com/thienlong306/QuanLyTourDuLich_XDMHPL",
    },
    {
        name: "Website Bán Hoa Tươi",
        time: "PHP",
        description: "https://github.com/thienlong306/WebsiteBanHoa",
    },
]
// end data
imgMySeft.style.backgroundImage = "url('img/picMySeft.jpg')";
// end img
for (let index = 0; index < listEducation.length; index++) {
    var input = ` 
    <div class="headline">${listEducation[index].name}</div>
                    <div class="subheadline">${listEducation[index].time}</div>
                    <div class="info">
                    ${listEducation[index].description}
                    </div>`
    var element = document.createElement('div');
    element.className = "block";
    element.innerHTML = input;
    var getListSkill = document.getElementById("listEducation");
    getListSkill.appendChild(element);
}
// end Education
for (let index = 0; index < listSkill.length; index++) {
    var input = ` <span>${listSkill[index].name}</span>
    <div class="progress">
        <div class="determinate" style="width: ${listSkill[index].progress}%;">
            <div class="cricle"><img src="img/circle.svg" alt="" class="filter"></div>
        </div>
    </div>`
    var element = document.createElement('div');
    element.className = "skill";
    element.innerHTML = input;
    var getListSkill = document.getElementById("listSkill");
    getListSkill.appendChild(element);
}
var element = document.createElement('div');
element.className = "skill lastSkill";
element.innerHTML = lastSkill;
var lastSkill = document.getElementById("listSkill");
lastSkill.appendChild(element);
// end Skill
for (let index = 0; index < listContact.length; index++) {
    var input = `
    <div class="icon"><img src="img/${listContact[index].icon}" alt="" class="filter"></div>
    <div class="text"><span>${listContact[index].content}</span></div>`
    var element = document.createElement('div');
    element.className = "item";
    element.innerHTML = input;
    var getListContact = document.getElementById("listContact");
    getListContact.appendChild(element);
}
// end Contact
for (let index = 0; index < listProject.length; index++) {
    var input = ` 
    <div class="headline">${listProject[index].name}</div>
                    <div class="subheadline">${listProject[index].time}</div>
                    <div class="info">
                    ${listProject[index].description}
                    </div>`
    var element = document.createElement('div');
    element.className = "block";
    element.innerHTML = input;
    var getListSkill = document.getElementById("listProject");
    getListSkill.appendChild(element);
}
// end Project
var element = document.createElement('span');
element.innerHTML = `<h1>${about[0].name}</h1>
<div class="description">${about[0].department}</div>
<span class="about">${about[0].about}</span>`;
var inputAbout = document.getElementById("Tittle");
inputAbout.appendChild(element);
// end about
for (let index = 0; index < listInterestes.length; index++) {
    var input = ` 
    <div class="headline">${listInterestes[index].name}</div>
                    <div class="subheadline">${listInterestes[index].time}</div>
                    <div class="info">
                    ${listInterestes[index].description}
                    </div>`
    var element = document.createElement('div');
    element.className = "block";
    element.innerHTML = input;
    var getListSkill = document.getElementById("listInterestes");
    getListSkill.appendChild(element);
}
// end listInterestes