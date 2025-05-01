
async function fetchjobfunction(){
    const ApiKey="2e4ee7ec5d4e5d53d81662a4fdad3f71";
    const ApiId="24ab108e"
    const jobresponse= await fetch(`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${ApiId}&app_key=${ApiKey}`);
    const jobdata= await jobresponse.json();
    console.log(jobdata);
  for(let i=0;i<jobdata.results.length;i++){
        const jobdetails= document.getElementById("job-details-card");
        jobdetails.innerHTML +=
        `<h2>${jobdata.results[i].title}</h2>
        <p>${jobdata.results[i].description}</p>`

  };
 
}

