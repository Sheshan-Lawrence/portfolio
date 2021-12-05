var pagesDetails = {
  education: `<div style="overflow-x:auto"><table>
    <tbody>
        <tr class="border-white-1">
            <td class="ps-2">M.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2022 Apr</td>
            <td class="ps-2">CGPA more than 9.0 </td>
        </tr>
        <tr class="border-white-1">
            <td class="ps-2">B.C.A Computer Application</td>
            <td class="ps-2">SRM Institute of Science and Technology</td>
            <td class="ps-2">2019 April</td>
            <td class="ps-2">CGPA 7.59</td>
        </tr>
        <tr class="border-white-1">
            <td class="ps-2">Higher Secondary School Certificate</td>
            <td class="ps-2">ADITYA'S VIVEKANANDA MATRICULATION</td>

            <td class="ps-2">2019 March</td>
            <td class="ps-2">77.16%</td>
        </tr>
        <tr class="border-white-1">
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
  contact: "",
};

var changeSection = document.getElementById("changePageId");
changeSection.innerHTML = pagesDetails['education'];

function onSectionClick(sectionname) {
  changeSection.innerHTML = pagesDetails[sectionname];
  if(sectionname=="skill"){
    skillAnimate("skill1");
    skillAnimate("skill2");
    skillAnimate("skill3");
    skillAnimate("skill4");
    skillAnimate("skill5");
  }
}

// image Expand Functionality
function expandImage(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}

function closeFullImage() {
  var expandImg = document.getElementById("full-image-div");
  expandImg.style.display = "none";
}

let skillLevel = {
  skill1: 20,
  skill2: 25,
  skill3: 35,
  skill4: 38,
  skill5: 28,
};

function skillAnimate(skillId) {
  let skill = document.getElementById(skillId);
  let skillInterval = setInterval(() => {
    if (skill.innerHTML.length >= 100) {
      clearInterval(skillInterval);
    }
    if (skillLevel[skillId] >= skill.innerHTML.length) {
      skill.innerHTML  += "█";
    } 

  }, 100);
}


