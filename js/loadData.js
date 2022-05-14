for (let index = 0; index < listEducation.length; index++) {
  var input = ` 
    <div class="headline timeedu${index}" >${listEducation[index].name}</div>
                    <div class="info">
                    <div class="subheadline"><span class="headline">Major</span>: ${listEducation[index].department}</div>
                    <div><span class="headline">Coursework</span>: ${listEducation[index].description}</div>  
                    </div>
    <style>
    .headline.timeedu${index}::after {
        content: "${listEducation[index].time}";
        float: right;
    }
    </style>`;
  var element = document.createElement("div");
  element.className = "block";
  element.innerHTML = input;
  var getListSkill = document.getElementById("listEducation");
  getListSkill.appendChild(element);
}
// end Education
for (let index = 0; index < listSkill.length; index++) {
  var input = ` <span class='nameSkill'>${listSkill[index].name}</span>
    <span class="progressSkill">
    ${listSkill[index].progress}
    </span>`;
  var element = document.createElement("div");
  element.className = "skill";
  element.innerHTML = input;
  var getListSkill = document.getElementById("listSkill");
  getListSkill.appendChild(element);
}
var element = document.createElement("div");
element.className = "skill lastSkill";
element.innerHTML = lastSkill;
var lastSkill = document.getElementById("listSkill");
lastSkill.appendChild(element);
// end Skill
for (let index = 0; index < listContact.length; index++) {
  var input = `
    <div class="icon"><img src="img/${listContact[index].icon}" alt="" class="filter"></div>
    <div class="text"><span>${listContact[index].content}</span></div>`;
  var element = document.createElement("div");
  element.className = `item ${listContact[index].hide}`;
  element.innerHTML = input;
  var getListContact = document.getElementById("listContact");
  getListContact.appendChild(element);
}
// end Contact
for (let index = 0; index < listProject.length; index++) {
  var input = `
                    <div class="removeProject">X</div>
                    <div class="headline time${index} nameProject" >${listProject[index].name}</div>
                    <div class="info">
                    <div class=""><span class="headline">Tech stack</span>: ${listProject[index].language}</div>
                    <div><span class="headline">Description</span>: ${listProject[index].description}</div>
                    <span class="headline">${listProject[index].tag==="Java"?"Github":"Github"}</span>: <a class="linkGit" style="color:var(--colorLinkProject1);cursor:pointer" onmouseover="this.style.color='var(--colorLinkProject2)'" onmouseout="this.style.color='var(--colorLinkProject1)'" onclick="window.open('${listProject[index].link}','_blank')" ">${listProject[index].link}</a>
                    </div>
    <style>
    .headline.time${index}::after {
        content: "${listProject[index].time}";
        float: right;
    }
    </style>`;
  var element = document.createElement("li");
  element.className = `block ${listProject[index].hide} ${listProject[index].tag}`;
  element.class
  element.innerHTML = input;
  var getListSkill = document.getElementById("listProject");
  getListSkill.appendChild(element);
}
// end Project
var element = document.createElement("span");
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
                    </div>`;
  var element = document.createElement("div");
  element.className = "block";
  element.innerHTML = input;
  var getListSkill = document.getElementById("listInterestes");
  getListSkill.appendChild(element);
}
// end listInterestes
for (let index = 0; index < listSkill2.length; index++) {
    var input = ` 
      <span class="headline">${listSkill2[index].name}</span>
                      <span class="info">
                      ${listSkill2[index].description}
                      </span>`;
    var element = document.createElement("div");
    element.innerHTML = input;
    var getListSkill = document.getElementById("listSkill2");
    getListSkill.appendChild(element);
  }
  // end listSkill2
for (let index = 0; index < listObject.length; index++) {
    var input = ` 
      <span class="headline">${listObject[index].name}</span>
                      <span class="info">  • 
                      ${listObject[index].description}
                      </span>`;
    var element = document.createElement("div");
    element.innerHTML = input;
    var getListSkill = document.getElementById("listObject");
    getListSkill.appendChild(element);
  }
  // end listObject
for (let index = 0; index < listTool.length; index++) {
  var input = ` 
    <div class="headline timeTool${index}" >${listTool[index].name}</div>
                    <div class="subheadline">${listTool[index].language}</div>
                    <div class="info">
                    <div> ${listTool[index].description}</div>
                    <a style="color:var(--colorLinkProject1);cursor:pointer" onmouseover="this.style.color='var(--colorLinkProject2)'" onmouseout="this.style.color='var(--colorLinkProject1)'" onclick="window.open('${listTool[index].link}','_blank')" ">${listTool[index].link}</a>
                    </div>
    <style>
    .headline.timeTool${index}::after {
        content: "${listTool[index].time}";
        float: right;
    }
    </style>`;
  var element = document.createElement("div");
  element.className = "block";
  element.innerHTML = input;
  var getListSkill = document.getElementById("listTool");
  getListSkill.appendChild(element);
}
// end Tool
for (let index = 0; index < listDocument.length; index++) {
  var input = ` 
    <div class="headline timeDocument${index}" >${listDocument[index].name}</div>
                    <div class="subheadline">${listDocument[index].language}</div>
                    <div class="info">
                    <div>${listDocument[index].description}</div>
                    <a style="color:var(--colorLinkProject1);cursor:pointer" onmouseover="this.style.color='var(--colorLinkProject2)'" onmouseout="this.style.color='var(--colorLinkProject1)'" onclick="window.open('${listDocument[index].link}','_blank')" ">${listDocument[index].link}</a>
                    </div>
    <style>
    .headline.timeDocument${index}::after {
        content: "${listDocument[index].time}";
        float: right;
    }
    </style>`;
  var element = document.createElement("div");
  element.className = "block";
  element.innerHTML = input;
  var getListSkill = document.getElementById("listDocument");
  getListSkill.appendChild(element);
}
// end Document
$('.JAVA').click(function (e) { 
  e.preventDefault();
  $('.Reacjs').hide("slow");
  $('.Php').hide("slow");
  $('.Java').show("slow");
  $('.black').removeClass('black');
  $(this).addClass('black');
});
$('.REACJS').click(function (e) { 
  e.preventDefault();
  $('.Java').hide("slow");
  $('.Php').hide("slow");
  $('.Reacjs').show("slow");
  $('.black').removeClass('black');
  $(this).addClass('black');
});
$('.PHP').click(function (e) { 
  e.preventDefault();
  $('.Java').hide("slow");
  $('.Reacjs').hide("slow");
  $('.Php').show("slow");
  $('.black').removeClass('black');
  $(this).addClass('black');
});
$('.ALL').click(function (e){
  e.preventDefault();
  $('.Java').show("slow");
  $('.Reacjs').show("slow");
  $('.Php').show("slow");
  $('.black').removeClass('black');
  $(this).addClass('black');
})
$('.removeProject').click(function (e) { 
  e.preventDefault();
  $(this).parent().hide("slow");
});