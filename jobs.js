
async function fetchjobfunction(){
    const jobrole=document.querySelector("#job-role").value;
    const location=document.querySelector('#job-location').value;
    

    const ApiKey="2e4ee7ec5d4e5d53d81662a4fdad3f71";
    const ApiId="24ab108e";
    const jobresponse= await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${ApiId}&app_key=${ApiKey}&what=${jobrole}&where=${location}

`);
    const jobdata= await jobresponse.json();
    console.log(jobdata);
  for(let i=0;i<jobdata.results.length;i++){
        const jobdetails= document.getElementById("job-details-card");
       
        jobdetails.innerHTML +=
        `<div class="job-card">
        <div class="heading">
        <h2>${jobdata.results[i].title}</h2>
        <h4 class="loc"> Location: ${jobdata.results[i].location.display_name}</h4>
        
        </div>
        <h4> Company: ${jobdata.results[i].company.display_name}</h4>
        ${jobdata.results[i].salary_max ? `<h4 class="salary">Max salary: ${jobdata.results[i].salary_max}</h4>` : ''}
        ${jobdata.results[i].contract_time ? `<h4 class="contract-time">Contract Time: ${jobdata.results[i].contract_time}</h4>` : ''}
        
        <p>${jobdata.results[i].description}</p>
        <a href="${jobdata.results[i].redirect_url}"><button class="applynow-button">Apply Now</button></a>
        </div>`
        

  };
  
 
}

//https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=24ab108e&app_key=2e4ee7ec5d4e5d53d81662a4fdad3f71&what=developer&where=Hyderabad
//http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${ApiId}&app_key=${ApiKey}
//https://api.adzuna.com/v1/api/jobs/in/categories?app_id=24ab108e&app_key=2e4ee7ec5d4e5d53d81662a4fdad3f71
//https://api.adzuna.com/v1/api/jobs/in/histogram?app_id=24ab108e&app_key=2e4ee7ec5d4e5d53d81662a4fdad3f71&what=developer&location0=hyderabad



//https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=24ab108e&app_key=2e4ee7ec5d4e5d53d81662a4fdad3f71&what=JOB_ROLE&where=Hyderabad
//https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${ApiId}&app_key=${ApiKey}&what=${jobrole}&where=${location}