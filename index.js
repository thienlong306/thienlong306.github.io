document.getElementById("avatar").style.backgroundImage =
  "url('img/picMySeft.jpg')";
// end img
var about = [
  {
    name: "Phan Dong Thien Long",
    department: "SOFTWARE Developer INTERN",
    about:
      "Finding an internship to learn advanced knowledge. Practical experience then become fresher then junior and finally a fullstack developer within the next 2 or 3 years.",
  },
];
var listContact = [
  {
    icon: "Account_circle.svg",
    content: "Phan Dong Thien Long",
    hide:"",
  },
  {
    icon: "Home.svg",
    content: "District 12 City. Ho Chi Minh",
    hide:"HidePrint",
  },
  {
    icon: "email.svg",
    content: `<a href="mailto:phandongthienlong306@gmail.com">phandongthienlong306@gmail.com</a>`,
    hide:"",
  },
  {
    icon: "Phone.svg",
    content: `<a href="tel:0886869244">0886869244</a>`,
    hide:"",
  },
  {
    icon: "github.svg",
    content: `<a href="https://github.com/thienlong306">https://github.com/thienlong306</a>`,
    hide:"",
  },
  {
    icon: "facebook-square.svg",
    content: `<a href="https://facebook.com/thienlong306">https://facebook.com/thienlong306</a>`,
    hide:"HidePrint",
  },
  {
    icon: "earth.svg",
    content: `<a href="https://thienlong306.github.io/">https://thienlong306.github.io</a>`,
    hide:"",
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
    time: "2018 - Anticipated Graduation: 9/2022",
    department: "4th-year of Software Engineering",
    description: "Data Structure and Algorithms, Operating system, Networking, Network Administration, Database Management System, Distributed database.",
    timework: "25h-30h/week (All day Monday, Thursday, Friday and Tuesday afternoon)"
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
    name: "Main Language: ",
    time: "",
    description: "Java",
  },
  {
    name: "Database: ",
    time: "",
    description: "MySQL, SQL Server",
  },
  {
    name: "Back-end: ",
    time: "",
    description: "Spring, Swing, JPA/Hibernate, Thymleaf, JSP",
  },
  {
    name: "Front-end: ",
    time: "",
    description: "ReacJS, HTML/CSS/JavaScript, JQuery, Bootstrap",
  },
  {
    name: "Knowledge: ",
    time: "",
    description: "Restful Api, Microservices, Redux, Docker, Data structures and algorithms, Git(GitHub)",
  },
  {
    name: "Tools: ",
    time: "",
    description: "Visual Studio, IntelliJ IDEA, Elipse, Draw.io",
  },
  {
    name: "Personal Skills:",
    time: "",
    description: "Ability to work both independently and collaboratively. Eager to learn, pro-active attitude and self-motivated individual",
  },
  // {
  //   name: "Languages:",
  //   time: "",
  //   description: "English",
  // },
];
var listObject = [
  {
    name: "",
    time: "",
    description: "Looking for work opportunities to broaden my horizons in related fields",
  },
  {
    name: "",
    time: "",
    description: "Experience a professional working environment and accumulate more experience to develop yourself",
  },
  {
    name: "",
    time: "",
    description: "Become a BackEnd developer after graduation.",
  },
  {
    name: "",
    time: "",
    description: "Become a Fullstack developer in the future. (2-3 years later)"
  },
];

var listProject = [
  {
    name: "Spotifake",
    language: "Reacjs Router Redux Bootstrap JQuery",
    time: "16/2/2022-12/5/2022",
    teamsize: "1",
    description: "Spotifake is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.",
    link: "https://github.com/thienlong306/Spotifake",
    hide: "",
    tag: "Reacjs"
  },
  // {
  //   name: "Calculator",
  //   language: "HTML/CSS/JS",
  //   time: "14/1/2022",
  //   teamsize: "1",
  //   description: "Make a Simple Calculator.",
  //   link: "https://thienlong306.github.io/Calculator",
  //   hide: "",
  //   tag: "Website"
  // },
  {
    name: "Email Server",
    language: "Java Swing, TCP/IP, Multithreading",
    time: "18/11 - 23/12/2021",
    teamsize: "1",
    description: "Building a Mail Server System with Java Socket. Client: Send, Receive, Reply, Mark Spam, Schedule, Delete,... Server: Logs, Set data, Send, Lock,... Using Hybrid Encryption",
    link: "https://github.com/thienlong306/EmailServer",
    hide: "",
    tag: "Java"
  },
  {
    name: "Tour Manager",
    language: "Java Swing, MySQL, JDBC",
    time: "13/1 - 15/3/2021",
    teamsize: "1",
    description:
      "Build an MVC Application. Manage tours, groups, customers, employees, costs, locations, group status and statistics.",
    link: "https://github.com/thienlong306/QuanLyTourDuLich_XDMHPL",
    hide: "",
    tag: "Java"
  },
  {
    name: "Fashion Sales Manager",
    language: "Java Swing, MySQL, JDBC",
    time: "1/4 - 24/6/2020",
    teamsize: "1",
    description:
      "Build functions to add, delete, edit, search, print invoices, import and export excel files.",
    link: "https://github.com/thienlong306/Quan_Ly_Ban_Hang_Thoi_Trang",
    hide: "",
    tag: "Java"
  },
  {
    name: "Shop Flower",
    language: "PHP, MySQL",
    time: "20/4 - 17/6/2020",
    teamsize: "3",
    description:
      "Build the basic features of a sales website by PHP.",
    link: "https://github.com/thienlong306/WebsiteBanHoa",
    hide: "",
    tag: "Php"
  },
  // {
  //   name: "Basic OOP Programming",
  //   language: "Java",
  //   time: "28/11 - 11/12/2019",
  //   teamsize: "1",
  //   description: "Build a basic OOP application to process data on txt files.",
  //   link: "https://github.com/thienlong306/OOP_Basic",
  //   hide: "",
  //   tag: "Java"
  // },
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
  {
    name: "Phát triển phần mềm mã nguồn mở",
    language: "",
    time: "",
    description: "",
    link: "https://github.com/thienlong306/PhatTrienPhanMemMaNguonMo",
  },
];
// end data
var listSongs = [
  { song: "Gracie Abrams - Rockland", musician: "Gracie Abrams" },
  { song: "My Name - Hwang Sang Jun (황상준)", musician: "Swervy & Jeminn" },
  { song: "CALL ME IN YOUR SUMMER", musician: "SHE IS SUMMER" },
];
//end music
