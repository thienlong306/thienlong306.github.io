document.getElementById("avatar").style.backgroundImage = "url('img/picMySeft.jpg')";
// end img
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
        content: `<a href="tel:0886869244">0886869244</a>`,
    },
    {
        icon: "email.svg",
        content: `<a href="mailto:phandongthienlong306@gmail.com">phandongthienlong306@gmail.com</a>`,
    },
    {
        icon: "github.svg",
        content: `<a href="https://github.com/thienlong306">https://github.com/thienlong306</a>`,
    },
    {
        icon: "facebook-square.svg",
        content: `<a href="https://facebook.com/thienlong306">https://facebook.com/thienlong306</a>`,
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
var lastSkill = "Also proficient in Figma, Illustrator, English.";
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
    {
        name: "Music",
        time: "",
        description: "",
    },
]

var listProject = [
    {
        name: "Quản Lý Tour Du Lịch",
        language: "Java",
        time:"13/3-15/3/2021",
        description: "Xây dựng ứng dụng theo mô hình 3 lớp. Quản lý tour, đoàn, khách hàng, nhân viên, chi phí, địa điểm, trình trạng đoàn và thống kê.",
        link:"https://github.com/thienlong306/QuanLyTourDuLich_XDMHPL",
    },
    {
        name: "Quản Lý Bán Hàng Thời Trang",
        language: "Java",
        time:"1/6-24/6/2020",
        description: "Xây dựng các chức năng thêm, xóa , sửa, tìm kiếm, in phiếu hóa đơn, nhập và xuất file excel.",
        link:"https://github.com/thienlong306/Quan_Ly_Ban_Hang_Thoi_Trang",
    },
    {
        name: "Website Bán Hoa Tươi",
        language: "PHP",
        time:"20/5-17/6/2020",
        description: "Xây dựng các tính năng cơ bản của một website bán hàng bằng PHP.",
        link:"https://github.com/thienlong306/WebsiteBanHoa",
    },
]
// end data
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
    <div class="headline time${index}" >${listProject[index].name}</div>
                    <div class="subheadline">${listProject[index].language}</div>
                    <div class="info">
                    <div>Mô tả: ${listProject[index].description}</div>
                    <a style="color:#969696" onmouseover="this.style.color='#252525'" onmouseout="this.style.color='#969696'"  href="${listProject[index].link}">${listProject[index].link}</a>
                    </div>
    <style>
    .headline.time${index}::after {
        content: "${listProject[index].time}";
        float: right;
    }
    </style>`
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