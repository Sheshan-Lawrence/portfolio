var pagesDetails = {
  education: `<div style="overflow-x:auto"><table > 
    <tbody>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">M.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2022 April</td>
            <td class="ps-2">90.0%</td>
        </tr>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">B.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2019 April</td>
            <td class="ps-2">75.9%</td>
        </tr>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">Higher Secondary School Certificate</td>
            <td class="ps-2">ADITYA'S VIVEKANANDA MATRICULATION</td>

            <td class="ps-2">2019 March</td>
            <td class="ps-2">77.16%</td>
        </tr>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">Higher Secondary School Certificate</td>
            <td class="ps-2">THE NEW JOHN DEWEY MATRICULATION</td>
            <td class="ps-2">2014 March</td>
            <td class="ps-2">86.80%</td>
        </tr>
    </tbody>
</table></div>`,
  projects: `<div>
    <div>
        <div class="highlight">Classic Chatbot for Medical</div>
        <ul>
            <li>The objective of Classic chatbot is to diagnose user's illness based on the symptom provided as a input.</li>
          
        </ul>
    </div>
    <div >
       <div class="highlight">Water Quality Detectors using IOT</div> 
        <ul>
            <li>Real time Contamination Detector in drinking water using Arduino as a IOT Component.</li>
            
        </ul>
    </div>
</div>`,
  portfolio: ` <div>
  <div class="highlight mb-2"> Polygonal Chart</div>
  <ul>
      <li>
      Polygonal chart is a creative dispaly of Random colors in polygonal shape based on given JSON input.
      </li>
      <p> <br>JSON
      <span class="highlight">"{ "1" : "1","2" : "2","3" : "4","4" : "2","5" : "4"
              }"</span> </p>
  </ul>
  <div class="row">
      <div class="col-6">
          <img class="img img-thumbnail" src="images/project/pychart1.png" alt="pychart1" onclick="expandImage(this);">

      </div>
      <div class="col-6">
          <img class="img img-thumbnail" src="images/project/pychart2.png" alt="pychart2" onclick="expandImage(this);">

      </div>
  </div>

</div>
<div>
  <div class="highlight mb-2">Student Management System</div>
  <ul>
  <li>
  Student Management System(SMS)  is a web application that provides a interactive base for students to work with their teachers to shape their career.
  
      </li>
      <li>
          A Mini Post and Comment Section to communicate between students and teacher
      </li>
  </ul>
  <div class="row">
      <div class="col-6 col-sm-3">
          <img class="img img-thumbnail" src="images/project/sfm1.png" alt="sfm1" onclick="expandImage(this);">
      </div>
      <div class="col-6 col-sm-3"> 
          <img class="img img-thumbnail" src="images/project/sfm4.png" alt="sfm4" onclick="expandImage(this);">
      </div>
      <div class="col-6 col-sm-3"> 
          <img class="img img-thumbnail" src="images/project/sfm3.png" alt="sfm3" onclick="expandImage(this);">
      </div>
      <div class="col-6 col-sm-3"> 
          <img class="img img-thumbnail" src="images/project/sfm2.png" alt="sfm2" onclick="expandImage(this);">
      </div>
  </div>

</div>
<div>
  <div class="highlight">Internship Task</div>
  <ul>
      <li>
    Web Application prototype to demonstrate UI Design and Linked List functionality
      </li>
  </ul>
  <div class="row text-center">
      <div class="col-12">
          <img class="img img-thumbnail"  src="./images/project/linkedlist.png" alt="linkedlist" onclick="expandImage(this);">

      </div>
  </div>
</div>
<div>
  <div class="highlight">voting Management</div>
  <ul>
      <li>
          Rest API, <span class="highlight">ExpressJS</span>, NodeJS Framework
      </li>
      <li>
          Record Votes to the given participant.
      </li>
  </ul>
</div>`,
  skill: `  <div class="text-start">
  <div class="row ">
      <div class="col-sm-3 text-start"> <span class=" hover-highlight">C</span> </div>
      <div class="col-sm-6 col-md-9  "> <span id="skill1" class="skill "></span>  </div>
      <div  class="text-end"> Beginner </div>
  </div>
  <div class="row">
      <div class="col-sm-3 text-start"> <span class=" hover-highlight">C++</span> </div>
      <div class="col-sm-6 col-md-9"> <span id="skill2" class="skill "> </span>  </div>
      <div  class="text-end"> Beginner </div>

  </div>
  <div class="row">
      <div class="col-sm-3  text-start"><span class=" hover-highlight">HTML5,CSS3,JS </span> </div>
      <div class="col-sm-6 col-md-9"> <span id="skill3" class="skill "></span>  </div>
      <div  class="text-end"> Intermediate </div>

  </div>
  <div class="row">
      <div class="col-sm-3 text-start"><span class=" hover-highlight">NodeJs</span> - <span
              class=" hover-highlight">Express</span>, <span class=" hover-highlight">Angular</span>,<span
              class=" hover-highlight">NestJS</span> </div>
      <div class="col-sm-6 col-md-9"> <span id="skill4" class="skill "></span>  </div>
      <div  class="text-end"> Intermediate </div>

  </div>
  <div class="row">
      <div class="col-sm-3 text-start"><span class=" hover-highlight">MySQL</span>,<span
              class=" hover-highlight"> MongoDB</span> </div>
      <div class="col-sm-6 col-md-9"> <span id="skill5" class="skill "></span>  </div>
      <div  class="text-end"> Intermediate </div>
  </div>

</div>`,
  contact: ` <form name="contactForm" onsubmit="onContactSubmission(event)">
  <div class="mb-3">
      <label for="InputEmail" class="form-label">Email</label>
      <input type="email" class="form-control input" id="InputEmail" name="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
      <label for="InputSubject" class="form-label">Subject</label>
      <input type="text" class="form-control input" id="InputSubject" name="subject">
  </div>
  <div class="mb-3">
      <label for="InputBody" class="form-label">Body</label>
      <textarea class="form-control input" rows="6" id="InputBody" name="body"></textarea>
  </div>

  <button type="submit" class="btn btn-primary shadow-none  float-end btn-color">Submit</button>
</form>`,
};

var changeSection = $("#changePageId");


function onSectionClick(evt, sectionname) {
  changeSection.fadeOut(function () {
    changeSection.html(pagesDetails[sectionname]);
    changeSection.fadeIn();
    if (sectionname == "skill") {
      skillAnimate("skill1");
      skillAnimate("skill2");
      skillAnimate("skill3");
      skillAnimate("skill4");
      skillAnimate("skill5");
    }
  });


  if (evt != undefined) {
    var navList = document.getElementById("navbar").children;

    for (let idx = 0; idx < navList.length; idx++) {
      navList[idx].classList.remove("is-active");
    }

    evt.target.classList.add("is-active");
  }
}

// image Expand Functionality

var expandImg = $("#full-image-div");
expandImg.fadeOut();

function expandImage(imgs) {
  let image_element = document.getElementById('expandedImg');
  image_element.src = imgs.src;
  expandImg.fadeIn();
}

function closeFullImage() {
  expandImg.fadeOut()
}

let skillLevel = {
  skill1: 8,
  skill2: 11,
  skill3: 10,
  skill4: 20,
  skill5: 20,
};

function skillAnimate(skillId) {
  let skill = document.getElementById(skillId);
  let skillInterval = setInterval(() => {
    if (skill.innerHTML.length >= 100) {
      clearInterval(skillInterval);
    }
    if (skillLevel[skillId] >= skill.innerHTML.length) {
      skill.innerHTML += "█";
    }
  }, 100);
}

// Change Mode
function changeMode(evt, mode) {
  var r = document.querySelector(":root");
  if (evt != undefined) {
    var navList = document.getElementById("themebar").children;
    for (let idx = 0; idx < navList.length; idx++) {
      navList[idx].classList.remove("is-active");
    }
    evt.target.classList.add("is-active");
  }

  switch (mode) {
    case "dark":
      r.style.setProperty("--main1", "#646464");
      r.style.setProperty("--main2", "#292929");
      r.style.setProperty("--main3", "#555");
      r.style.setProperty("--text1", "#fff");
      break;
    case "light":
      r.style.setProperty("--main1", "#ffffff");
      r.style.setProperty("--main2", "#ffffff");
      r.style.setProperty("--main3", "#646464");
      r.style.setProperty("--text1", "#646464");
      break;
    case "blue":
      r.style.setProperty("--main1", "#50A");
      r.style.setProperty("--main2", "#001E6C");
      r.style.setProperty("--main3", "#646464");
      r.style.setProperty("--text1", "#FFAA4C");
      break;
    case "red":
      r.style.setProperty("--main1", "#161E54");
      r.style.setProperty("--main2", "#161E54");
      r.style.setProperty("--main3", "#FF9B6A");
      r.style.setProperty("--text1", "#FF5151");
      break;
    default:
      r.style.setProperty("--main1", "#161E54");
      r.style.setProperty("--main2", "#161E54");
      r.style.setProperty("--main3", "#FF9B6A");
      r.style.setProperty("--text1", "#FF5151");
      break;
  }
}

function onContactSubmission() {
  event.preventDefault();
  var email = document.getElementById('InputEmail').value;
  var subject = document.getElementById('InputSubject').value;
  var body = `Email : ${email}
  %0D%0A----------------------------------------------------------------------%0D%0A
  Body: ${document.getElementById('InputBody').value.replace(/\n/g, "%0D%0A")}`;
  window.open(`mailto:official.sheshan@gmail.com?subject=${subject}&body=${body}`);
}

window.onload = () => {
  changeMode(undefined, "dark");
  onSectionClick(undefined, "education");
};
