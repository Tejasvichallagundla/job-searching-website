
async function fetchjobfunction(){
    const jobrole=document.querySelector("#job-role").value;
    const location=document.querySelector('#job-location').value;
    

    const ApiKey="2e4ee7ec5d4e5d53d81662a4fdad3f71";
    const ApiId="24ab108e";
    const jobresponse= await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${ApiId}&app_key=${ApiKey}&what=${jobrole}&where=${location}

`);
const jobdetails= document.getElementById("job-details-card");
    jobdetails.innerHTML = ""; // Clear previous job details
    const jobdata= await jobresponse.json();
    console.log(jobdata);
  for(let i=0;i<jobdata.results.length;i++){
        const jobdetails= document.getElementById("job-details-card");
        const fullDesc = jobdata.results[i].description;
        const shortDesc = fullDesc.length > 150 ? fullDesc.substring(0, 150) : fullDesc;

        jobdetails.innerHTML +=
        `<div class="job-card">
        <div class="heading">
        <h2>${jobdata.results[i].title}</h2>
        <h4 class="loc"> Location: ${jobdata.results[i].location.display_name}</h4>
        
        </div>
        <h4> Company: ${jobdata.results[i].company.display_name}</h4>
        ${jobdata.results[i].salary_max ? `<h4 class="salary">Max salary: ${jobdata.results[i].salary_max}</h4>` : ''}
        ${jobdata.results[i].contract_time ? `<h4 class="contract-time">Contract Time: ${jobdata.results[i].contract_time}</h4>` : ''}
        
        <p class="job-desc">${shortDesc}...</p>
      ${jobdata.results[i].description.length > 150 ? `<span class="read-more" style="color: white; cursor: pointer;" onclick="toggleDescription(this, \`${shortDesc}\`, \`${fullDesc}\`)">Read More</span>` : ''}
        <a href="${jobdata.results[i].redirect_url}"><button class="applynow-button">Apply Now</button></a>
        </div>`
        

  };
  
 
}
function toggleDescription(elem, shortDesc, fullDesc) {
  const para = elem.previousElementSibling;
  if (para.innerText.includes("...")) {
      para.innerText = fullDesc;
      elem.innerText = "Show Less";
  } else {
      para.innerText = shortDesc + "...";
      elem.innerText = "Read More";
  }
}
