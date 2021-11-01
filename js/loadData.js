for (let index = 0; index < listEducation.length; index++) {
    var input = ` 
    <div class="headline timeedu${index}" >${listEducation[index].name}</div>
                    <div class="subheadline">${listEducation[index].department}</div>
                    <div class="info">
                    <div>${listEducation[index].description}</div>
                    </div>
    <style>
    .headline.timeedu${index}::after {
        content: "${listEducation[index].time}";
        float: right;
    }
    </style>`
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
                    <a style="color:var(--colorLinkProject1);cursor:pointer" onmouseover="this.style.color='var(--colorLinkProject2)'" onmouseout="this.style.color='var(--colorLinkProject1)'" onclick="window.open('${listProject[index].link}','_blank')" ">${listProject[index].link}</a>
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
for (let index = 0; index < listTool.length; index++) {
    var input = ` 
    <div class="headline time${index}" >${listTool[index].name}</div>
                    <div class="subheadline">${listTool[index].language}</div>
                    <div class="info">
                    <div>Mô tả: ${listTool[index].description}</div>
                    <a style="color:var(--colorLinkProject1);cursor:pointer" onmouseover="this.style.color='var(--colorLinkProject2)'" onmouseout="this.style.color='var(--colorLinkProject1)'" onclick="window.open('${listTool[index].link}','_blank')" ">${listTool[index].link}</a>
                    </div>
    <style>
    .headline.time${index}::after {
        content: "${listTool[index].time}";
        float: right;
    }
    </style>`
    var element = document.createElement('div');
    element.className = "block";
    element.innerHTML = input;
    var getListSkill = document.getElementById("listTool");
    getListSkill.appendChild(element);
}
// end Tool