var pagesDetails = {
  education: `<div style="overflow-x:auto"><table > 
    <tbody>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">M.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2022 Apr</td>
            <td class="ps-2">CGPA more than 9.0 </td>
        </tr>
        <tr class="border-white-1 text-grey">
            <td class="ps-2">B.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2019 April</td>
            <td class="ps-2">CGPA 7.59</td>
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
            <li>It compares the data provided by the user and with the medical database and a report.</li>
            <li>It uses PHP as server side scripting language, html5 as frontend and ajax as a HTTP client
            </li>
        </ul>
    </div>
    <div >
       <div class="highlight">Real time Monitoring, Contamination and Detection in drinking water using IOT</div> 
        <ul>
            <li>Adrino as a core component and python as a main programming language</li>
            <li>Using Total Dissolved Solids Sensor to measures the conductivity of the solution and detect
                the water quality</li>
        </ul>
    </div>
</div>`,
  portfolio: ` <div>
  <div class="highlight mb-2"> Polygonal Chart</div>
  <ul>
      <li>
          Build using <span class="highlight">Python</span> and its libs [<span
              class="highlight">Pillow</span> for Image Draw and <span class="highlight">numpy</span> for
          calculation of point on the circumference of a circle]
      </li>
      <li>Takes input in JSON <span class="highlight">"{ "1" : "1","2" : "2","3" : "4","4" : "2","5" : "4"
              }"</span> </li>
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
  <div class="highlight mb-2">Student Management</div>
  <ul>
      <li>Build using <span class="highlight">NestJs</span>, a NodeJs Framework as backend and <span
              class="highlight">Angular [Typescript]</span> as frontend</li>
      <li>
          It groups Student into various category and manages them more effectively.
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
          Design UI
      </li>
      <li>
          Linked List Functionality
      </li>
      <li>
          Days between two Dates
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
      <input type="email" class="form-control rounded-0" id="InputEmail" name="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
      <label for="InputSubject" class="form-label">Subject</label>
      <input type="text" class="form-control rounded-0" id="InputSubject" name="subject">
  </div>
  <div class="mb-3">
      <label for="InputBody" class="form-label">Body</label>
      <textarea class="form-control rounded-0" rows="6" id="InputBody" name="body"></textarea>
  </div>

  <button type="submit" class="btn btn-primary shadow-none rounded-0 float-end btn-color">Submit</button>
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
  const formData = new FormData(document.forms["contactForm"]);
  var body = "";
  var subject = "";
  for (var pair of formData.entries()) {
    if (pair[0] == "subject") subject = pair[1];
    else body += pair[1] + '%0D%0A';
  }
  window.open(`mailto:official.sheshan@gmail.com?subject=${subject}&body=${body}`);

}

window.onload = () => {
  changeMode(undefined, "dark");
  onSectionClick(undefined, "education");
};
