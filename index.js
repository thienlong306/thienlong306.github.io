document.getElementById("avatar").style.backgroundImage =
  "url('img/picMySeft.jpg')";
// end img
var about = [
  {
    name: "Phan Đồng Thiên Long",
    department: "Nhà phát triển phần mềm",
    about:
      "Mong muốn có thể trở thành một Fullstack Developer trong tương lai.",
  },
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
    name: "Trường Đại Học Sài Gòn",
    time: "2018 - Hiện tại",
    department: "Công nghệ thông tin",
    description: "Học chuyên ngành Kỹ Thuật Phần Mềm.",
  },
];
var listInterestes = [
  {
    name: "Game",
    time: "",
    description: "",
  },
  {
    name: "Thiết Kế",
    time: "",
    description: "",
  },
  {
    name: "Board Game",
    time: "",
    description: "",
  },
  {
    name: "Nhạc",
    time: "",
    description: "",
  },
];
var listSkill2 = [
  {
    name: "Front-end: ",
    time: "",
    description: "HTML, CSS, JavaScript",
  },
  {
    name: "CSS Framework:",
    time: "",
    description: "Bootstrap",
  },
  {
    name: "JavaScript library:",
    time: "",
    description: "JQuery",
  },
  {
    name: "Java SE: ",
    time: "",
    description: "Java core, OOP, Exception Handling, JDBC",
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
    description: "Music Player online cơ bản",
    link: "https://thienlong306.github.io/Music-Player/",
    hide: "",
  },
  {
    name: "Calculator",
    language: "HTML/CSS/JS",
    time: "14/1/2022",
    description: "Máy tính bỏ túi online cơ bản.",
    link: "https://thienlong306.github.io/Calculator/",
    hide: "",
  },
  {
    name: "Quản Lý Tour Du Lịch",
    language: "Java",
    time: "13/3 - 15/3/2021",
    description:
      "Xây dựng ứng dụng theo mô hình 3 lớp. Quản lý tour, đoàn, khách hàng, nhân viên, chi phí, địa điểm, trình trạng đoàn và thống kê.",
    link: "https://github.com/thienlong306/QuanLyTourDuLich_XDMHPL",
    hide: "",
  },
  {
    name: "Quản Lý Bán Hàng Thời Trang",
    language: "Java",
    time: "1/6 - 24/6/2020",
    description:
      "Xây dựng các chức năng thêm, xóa , sửa, tìm kiếm, in phiếu hóa đơn, nhập và xuất file excel.",
    link: "https://github.com/thienlong306/Quan_Ly_Ban_Hang_Thoi_Trang",
    hide: "",
  },
  {
    name: "Website Bán Hoa Tươi",
    language: "PHP",
    time: "20/5 - 17/6/2020",
    description:
      "Xây dựng các tính năng cơ bản của một website bán hàng bằng PHP.",
    link: "https://github.com/thienlong306/WebsiteBanHoa",
    hide: "HidePrint",
  },
  {
    name: "Lập trình OOP cơ bản",
    language: "Java",
    time: "28/11 - 11/12/2019",
    description: "Xây dựng ứng dụng OOP cơ bản để xử lý dữ liệu trên file txt.",
    link: "https://github.com/thienlong306/OOP_Basic",
    hide: "HidePrint",
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
