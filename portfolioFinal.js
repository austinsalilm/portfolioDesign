// 

var aboutTitle = "About"
var aboutPara1 = document.querySelector("#aboutPara1")
var aboutPara2 = document.querySelector("#aboutPara2")
var educationTitle = "Education"
var educationPara1 = document.querySelector("#educationPara1")
var educationPara2 = document.querySelector("#educationPara2")
var experienceTitle = "Experience"
var experiencePara1 = document.querySelector("#experiencePara1")
var experiencePara2 = document.querySelector("#experiencePara2")
var skillTitle = "Skills"
var skillPara1 = document.querySelector("#skillPara1")
var skillPara2 = document.querySelector("#skillPara2")
var contactTitle = "Contact"
var contactPara1 = document.querySelector("#contactPara1")
var contactPara2 = document.querySelector("#contactPara2")
var img = document.querySelector("img")

var about = document.querySelectorAll(".about");
var education = document.querySelectorAll(".education");
var experience = document.querySelectorAll(".experience");
var skills = document.querySelectorAll(".skills");
var contact = document.querySelectorAll(".contact");
var title = document.querySelectorAll("h1")[1];
var para1 = document.querySelectorAll("p")[0];
var para2 = document.querySelectorAll("p")[1];
var navAbout = document.querySelector("#navAbout")
var navEducation = document.querySelector("#navEducation")
var navExperience = document.querySelector("#navExperience")
var navSkills = document.querySelector("#navSkills")
var navContact = document.querySelector("#navContact")
var menuAbout = document.querySelector("#menuAbout")
var menuEducation = document.querySelector("#menuEducation")
var menuExperience = document.querySelector("#menuExperience")
var menuSkills = document.querySelector("#menuSkills")
var menuContact = document.querySelector("#menuContact")

for(var i = 0; i < 2; i++){
		about[i].addEventListener("click", function(){
			title.innerHTML = aboutTitle;
			para1.innerHTML = aboutPara1.innerHTML;
			para2.innerHTML = aboutPara2.innerHTML;
			img.src = "back31.jpg";
		});
		education[i].addEventListener("click", function(){
			title.innerHTML = educationTitle;
			para1.innerHTML = educationPara1.innerHTML;
			para2.innerHTML = educationPara2.innerHTML;
			img.src = "backEdu.jpg";
		});
		experience[i].addEventListener("click", function(){
			title.innerHTML = experienceTitle;
			para1.innerHTML = experiencePara1.innerHTML;
			para2.innerHTML = experiencePara2.innerHTML;
			img.src = "backXp.jpg";
		});
		skills[i].addEventListener("click", function(){
			title.innerHTML = skillTitle;
			para1.innerHTML = skillPara1.innerHTML;
			para2.innerHTML = skillPara2.innerHTML;
			img.src = "backSkill.jpg";
		});
		contact[i].addEventListener("click", function(){
			title.innerHTML = contactTitle;
			para1.innerHTML = contactPara1.innerHTML;
			para2.innerHTML = contactPara2.innerHTML;
			img.src = "backCon.jpg";
		})

}


navAbout.addEventListener("click",function(){
			navAbout.classList.add("selected");
			navEducation.classList.remove("selected");
			navExperience.classList.remove("selected");
			navSkills.classList.remove("selected");
			navContact.classList.remove("selected");
})
navEducation.addEventListener("click",function(){
			navAbout.classList.remove("selected");
			navEducation.classList.add("selected");
			navExperience.classList.remove("selected");
			navSkills.classList.remove("selected");
			navContact.classList.remove("selected");
})

navExperience.addEventListener("click",function(){
			navAbout.classList.remove("selected");
			navEducation.classList.remove("selected");
			navExperience.classList.add("selected");
			navSkills.classList.remove("selected");
			navContact.classList.remove("selected");
})
navSkills.addEventListener("click",function(){
			navAbout.classList.remove("selected");
			navEducation.classList.remove("selected");
			navExperience.classList.remove("selected");
			navSkills.classList.add("selected");
			navContact.classList.remove("selected");
})
navContact.addEventListener("click",function(){
			navAbout.classList.remove("selected");
			navEducation.classList.remove("selected");
			navExperience.classList.remove("selected");
			navSkills.classList.remove("selected");
			navContact.classList.add("selected");
})

menuAbout.addEventListener("click",function(){
			menuAbout.classList.add("selected");
			menuEducation.classList.remove("selected");
			menuExperience.classList.remove("selected");
			menuSkills.classList.remove("selected");
			menuContact.classList.remove("selected");
})
menuEducation.addEventListener("click",function(){
			menuAbout.classList.remove("selected");
			menuEducation.classList.add("selected");
			menuExperience.classList.remove("selected");
			menuSkills.classList.remove("selected");
			menuContact.classList.remove("selected");
})

menuExperience.addEventListener("click",function(){
			menuAbout.classList.remove("selected");
			menuEducation.classList.remove("selected");
			menuExperience.classList.add("selected");
			menuSkills.classList.remove("selected");
			menuContact.classList.remove("selected");
})
menuSkills.addEventListener("click",function(){
			menuAbout.classList.remove("selected");
			menuEducation.classList.remove("selected");
			menuExperience.classList.remove("selected");
			menuSkills.classList.add("selected");
			menuContact.classList.remove("selected");
})
menuContact.addEventListener("click",function(){
			menuAbout.classList.remove("selected");
			menuEducation.classList.remove("selected");
			menuExperience.classList.remove("selected");
			menuSkills.classList.remove("selected");
			menuContact.classList.add("selected");
})