document.getElementById("avatar").style.backgroundImage =
  "url('img/picMySeft.jpg')";
// end img
var about = [
  {
    name: "Phan Đồng Thiên Long",
    department: "Backend Engineer Intern",
    about:
      "Finding an internship to learn advanced knowledge. Practical experience then become fresher then junior and finally a fullstack developer within the next 2 or 3 years.",
  },
];
var listContact = [
  {
    icon: "Account_circle.svg",
    content: "24/4/2000 Ninh Thuan",
  },
  {
    icon: "Home.svg",
    content: "District 12 City. Ho Chi Minh",
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
];
// var listSkill = [
//   {
//     name: "Front-end: ",
//     progress: "HTML5, CSS3, JavaScript",
//   },
//   {
//     name: "CSS Framework:",
//     progress: "Bootstrap",
//   },
//   {
//     name: "JavaScript library:",
//     progress: "JQuery",
//   },
//   {
//     name: "Database: ",
//     progress: "MySQL, SQL Server",
//   },
//   {
//     name: "Java SE: ",
//     progress: "Java core, OOP, Exception Handling, JDBC",
//   },
//   {
//     name: "Testing: ",
//     progress: "JUnit, TestNG, Selenium",
//   },
//   {
//     name: "Version control:",
//     progress: "Git(Github)",
//   },
// ];
var lastSkill = "";
var listEducation = [
  {
    name: "Sai Gon University",
    time: "2018 - 2022",
    department: "Information Technology",
    description: "GPA: 6.52/10",
  },
];
var listInterestes = [
  {
    name: "Game",
    time: "",
    description: "",
  },
  {
    name: "Design",
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
];
var listSkill2 = [
  {
    name: "Front-end: ",
    time: "",
    description: "HTML, CSS, JavaScript, JQuery, Bootstrap  ",
  },
  {
    name: "Java SE: ",
    time: "",
    description: "Java core, OOP, Exception Handling, JDBC, Networking",
  },
  {
    name: "Database: ",
    time: "",
    description: "MySQL, SQL Server",
  },
  {
    name: "Testing: ",
    time: "",
    description: "JUnit, TestNG, Selenium",
  },
  {
    name: "Version control:",
    time: "",
    description: "Git(Github)",
  },
];

var listProject = [
  {
    name: "Music-Player",
    language: "HTML/CSS/JS Bootstrap JQuery",
    time: "16/1/2022",
    description: "Build a Music Player.",
    link: "https://thienlong306.github.io/Music-Player/",
    hide: "",
    tag: "Website"
  },
  {
    name: "Calculator",
    language: "HTML/CSS/JS",
    time: "14/1/2022",
    description: "Make a Simple Calculator.",
    link: "https://thienlong306.github.io/Calculator/",
    hide: "",
    tag: "Website"
  },
  {
    name: "Email Server",
    language: "Java",
    time: "18/11 - 23/12/2021",
    description: "Description: Building a Mail Server System with Java Socket.",
    link: "https://github.com/thienlong306/EmailServer",
    hide: "",
    tag: "Java"
  },
  {
    name: "Tour Manager",
    language: "Java",
    time: "13/3 - 15/3/2021",
    description:
      "Build an MVC Application. Manage tours, groups, customers, employees, costs, locations, group status and statistics.",
    link: "https://github.com/thienlong306/QuanLyTourDuLich_XDMHPL",
    hide: "",
    tag: "Java"
  },
  {
    name: "Fashion Sales Manager",
    language: "Java",
    time: "1/6 - 24/6/2020",
    description:
      "Build functions to add, delete, edit, search, print invoices, import and export excel files.",
    link: "https://github.com/thienlong306/Quan_Ly_Ban_Hang_Thoi_Trang",
    hide: "",
    tag: "Java"
  },
  {
    name: "Shop Flower",
    language: "PHP",
    time: "20/5 - 17/6/2020",
    description:
      "Build the basic features of a sales website by PHP.",
    link: "https://github.com/thienlong306/WebsiteBanHoa",
    hide: "",
    tag: "Website"
  },
  {
    name: "Basic OOP Programming",
    language: "Java",
    time: "28/11 - 11/12/2019",
    description: "Build a basic OOP application to process data on txt files.",
    link: "https://github.com/thienlong306/OOP_Basic",
    hide: "",
    tag: "Java"
  },
];
// end data
var listTool = [
  {
    name: "DocNew",
    language: "",
    time: "",
    description: "",
    link: "https://thienlong306.github.io/Tools/DocNew/Test.html",
  },
];
// end data
var listDocument = [
  {
    name: "Công nghệ phần mềm",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/Cong_nghe_phan_mem",
  },
  {
    name: "Quản trị mạng",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/Lab_Quan_Tri_Mang",
  },
  {
    name: "Thiết kế giao diện",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/HCI",
  },
  {
    name: "Phân tích thiết kế hệ thống thông tin",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/PhanTichThietKeHeThongThongTin_QuanLyBanGiay",
  },
  {
    name: "PPNC khoa học trong Công nghệ thông tin",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/PPNCKH",
  },
  {
    name: "Phân tích thiết kế hướng đối tượng",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/PTTK_HDT",
  },
];
// end data
var listSongs = [
  { song: "Gracie Abrams - Rockland", musician: "Gracie Abrams" },
  { song: "My Name - Hwang Sang Jun (황상준)", musician: "Swervy & Jeminn" },
  { song: "CALL ME IN YOUR SUMMER", musician: "SHE IS SUMMER" },
];
//end music
