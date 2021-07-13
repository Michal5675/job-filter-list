var fileJSON = `
[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]
  `;
  
  var cardArr = [];
  var btnArr = [];
  var filterCardArr = [];
  var Filters = [];
  var newFilters = [];
  var myJSON = JSON.parse(fileJSON);
  
  var cardBox = document.getElementsByClassName("box")[0];
  
  var filterBox = document.getElementsByClassName("filter-box")[0];

for(let i =0; i < myJSON.length; i++) {
    var card = document.createElement("DIV");
    card.classList.add("tablets");
    cardBox.appendChild(card);
    cardArr.push(card);
    var filters = document.createElement("DIV");
    filters.classList.add("btn-filters");
    card.appendChild(filters);
    
    //create arrays for btns to fill their innerText
    var filtersJSON = [];
    filtersJSON.push(myJSON[i].role);
    filtersJSON.push(myJSON[i].level);

    for(let r in myJSON[i].languages) {
          var languages = myJSON[i].languages[r];
          filtersJSON.push(languages);
    }
    
    for(let p in myJSON[i].tools) {
      var tools = myJSON[i].tools[p];
      if(tools !== undefined) {
        filtersJSON.push(tools);
      }
      
      
}


    for(let k = 0; k < myJSON.length - 5; k++) {
        var btn = document.createElement("BUTTON");
       
        //create butttons and add id to find proper one in array
          
        
         btn.setAttribute("id", k);
          switch (btn.id) {
            case "0":
              btn.innerHTML = filtersJSON[0];
              break;
            case "1":
             btn.innerHTML = filtersJSON[1];
              break;
            case "2":
             btn.innerHTML = filtersJSON[2];
              break;
            case "3":
             btn.innerHTML = filtersJSON[3];
              break;
            case "4":
             if(filtersJSON[4] !== undefined) {
              btn.innerHTML = filtersJSON[4];
             }
             else btn.style.display = "none";
              break;
            default: 
              break;
            }
          
        filters.appendChild(btn);
        
       btnArr.push(btn); 
       
      
  

}
 
Filters.push(filters);

//remove /n and add btn innerText to new array to use in funtcion checkFilters
   newFilters.push(Filters[i].innerText.split("\n"));

   
    var company = document.createElement("DIV");
    company.classList.add("company");
    card.appendChild(company); 

    //create "new" and "featured" section
    var divNew = document.createElement("P");
    divNew.classList.add("new");
    var divFeatured = document.createElement("P");
    divFeatured.classList.add("featured");

    var h2 = document.createElement("H2");
    var h3 = document.createElement("H3");
    var img = document.createElement("IMG");
    

    if(myJSON[i].featured === true) {
      company.appendChild(divFeatured);
      card.style.borderLeft = "8px solid hsl(180, 29%, 50%)";
    }

    if(myJSON[i].new === true) {
      company.appendChild(divNew);
    }
  
   
    card.appendChild(h2);
    card.appendChild(img);
    company.appendChild(h3);

    var sideJobsInfo = document.createElement("DIV");
    sideJobsInfo.classList.add("side-list");
    var ul = document.createElement("UL");
    sideJobsInfo.appendChild(ul);
    
    liArr = [];
    liArr.push(myJSON[i].postedAt);
    liArr.push(myJSON[i].contract);
    liArr.push(myJSON[i].location);
   
    for(let t =0; t < 3; t++) {
      var li = document.createElement("LI");
      li.setAttribute("id", t);
      ul.appendChild(li);
      switch (li.id) {
        case "0":
          li.innerHTML = liArr[0]; 
          break;
        case "1":
          li.innerHTML = "&#x2022"+ "&emsp;";
          li.innerHTML += liArr[1]; 
          break;
        case "2":
          li.innerHTML = "&#x2022" + "&emsp;";
          li.innerHTML += liArr[2]; 
          break;
        default:
          break;
      }
    }
  
    card.appendChild(sideJobsInfo);
   
    
  
    // add name of company, job and special desing
h2.innerHTML = myJSON[i].position;
img.src = myJSON[i].logo;
divNew.innerHTML = "NEW!";
divFeatured.innerHTML = "FEATURED";
h3.innerHTML = myJSON[i].company;

  }
  // create elements of job filter
  var pClear = document.createElement("p");
  pClear.classList.add("clear");
  pClear.innerHTML = "Clear";
  var filterClear = document.createElement("div");
  filterClear.classList.add("filters");
  

  // use "clear" to change everything into default state
  pClear.addEventListener("click", () => {
    filterBox.style.display = "none";
    filterCardArr = [];
    filterClear.innerHTML = "";
    
    for(let k in cardArr) {
      cardArr[k].style.display = "block";
    }
    for(let l in btnArr) {
         btnArr[l].disabled = false;
      }
    
  });







for(let n in btnArr) {
  btnArr[n].addEventListener("click", () =>{
    
    //create remove icon for button
  var iconRemove = document.createElement("div");
  var iconX = document.createElement("img");
  iconX.src = "images/icon-remove.svg";
  iconRemove.appendChild(iconX);
  iconRemove.classList.add("icon-remove");
  
    if(filterBox.style.display === "none") {
      filterBox.style.display = "block";
      filterBox.appendChild(pClear);
     filterBox.appendChild(filterClear);
    }
    var clone = btnArr[n].cloneNode(true);
    clone.classList.add("buttonFilter");
    clone.appendChild(iconRemove);
    
    
    filterClear.appendChild(clone);
    filterCardArr.push(clone.innerText);
    
  
    
  checkFilters(filterCardArr, newFilters);
  
 
  
  iconX.addEventListener("click", (e) => {
      
        //change filterClear children into array
          let n = this.filterClear.children;
          let nArr = Array.from(n);
      
         //find index of clicked elem
         let index = nArr.indexOf(e.target.parentElement.parentElement);
        
       //enable removed button to be used again
        for(let p in btnArr) {
          if(filterClear.innerHTML.includes(filterCardArr[index])) {
  
            
              if(filterCardArr[index] === btnArr[p].innerHTML) {
                btnArr[p].disabled = false;
              }
            
            
           }
        }
          filterClear.removeChild(nArr[index]);
          filterCardArr.splice(index, 1);
         checkFilters(filterCardArr, newFilters);
         
         
        
         if(filterClear.innerHTML === "") {
          filterBox.style.display = "none";
        }
       
        
       
       }); 
    
 
 
         
 // preventing button to be clicked more than one time
 
 if(filterClear.innerHTML.includes(btnArr[n].innerHTML)) {
  
    for(let l in btnArr) {
      if(btnArr[n].innerHTML === btnArr[l].innerHTML) {
         btnArr[l].disabled = true;
      } 
    }
    
   }

});

}

 

function checkFilters(filterCardArr, newFilters) {
  for(let i in cardArr) {
            
    //check if every button in job filter is in a given card 
    if(filterCardArr.every(x => newFilters[i].includes(x))) {
      
      cardArr[i].style.display = "block";   
  
  }
  else 
  cardArr[i].style.display = "none";
   
  
  }
}


//media 

let media = window.matchMedia("(max-width: 700px)");
let media2 = window.matchMedia(("min-width: 701px"));

if(media) {
  
   for(let i in cardArr) {
    let hr = document.createElement("hr");
    hr.classList.add("hr");
     cardArr[i].appendChild(hr);
   }
   
  
}

// if(media2) {
//   pClear.style.left = "23rem"
// }