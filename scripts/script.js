// all issues

const loadIssues = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
  .then(res => res.json())
  .then(data => displayIssues(data.data));
};

const loadModal = (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  
  fetch(url)
  .then(res => res.json())
  .then(data => displayModal(data.data));
}

const displayModal = (info) => {
  const createBadge = (array) => {
    const BadgeHtml = array.map(badge => `<span class="flex badge badge-soft badge-warning">${badge}</span>`);
    return BadgeHtml.join(" ");
    }

    const date = info.createdAt.split('T')[0];

  const modalBox = document.getElementById('modal-section');
  modalBox.innerHTML = `
     
            <h3 class="text-lg font-bold my-4">${info.title}</h3>
            <p class= "text-gray-500">Opened by ${info.assignee ? info.assignee : "No Name Found"}</p>
            <p class= "text-gray-500">${date}</p>
            <div class="flex gap-1 my-5">
              ${createBadge(info.labels)}
            </div>
            <p class="py-4 text-gray-500">${info.description}</p>

            <div class="bg-[#64748B10] p-5 flex justify-between">
              <div>
                <p class="text-gray-500">Assignee:</p>
                <p class="font-semibold text-lg">${info.assignee ? info.assignee : "No Name Found"}</p>
              </div>
              <div>
                <p class="text-gray-500">Priority:</p>
                <div class="badge badge-info">${info.priority}</div>
              </div>
            </div>
          
  `;
  document.getElementById('word_modal').showModal();
    
}


const displayIssues = (issues) => {

  const cardSection = document.getElementById('card-section');
  cardSection.innerHTML = "";
  for (const issue of issues) {

    const date = issue.createdAt.split('T')[0];

    const createBadge = (array) => {
    const BadgeHtml = array.map(badge => `<span class="flex badge badge-soft badge-warning">${badge}</span>`);
    return BadgeHtml.join(" ");
    }

    const statusImage = issue.status.toLowerCase() === "open" 
    ? "./assets/Open-Status.png" 
    : "./assets/Closed- Status .png";

    const singleCardDiv = document.createElement('div');
    singleCardDiv.classList.add('card', 'w-72', 'bg-base-100', 'shadow-sm');
    singleCardDiv.innerHTML = `
          <div onclick="loadModal(${issue.id})" class="card-body space-y-5">

              <div class="flex justify-between">
                <img src="${statusImage}" alt="">
                  <div class="badge badge-info">${issue.priority}</div>
              </div>
            
              <div>
                  <h2 class="text-xl font-bold">${issue.title}</h2>
                  <p class="text-[#64748B90]">${issue.description}</p>
              </div>

            <div class="flex gap-1">
                ${createBadge(issue.labels)}
            </div>

            <hr>

            <div>
                <p>#<span>${issue.id}</span> by <span>${issue.author}</span></p>
                <p>${date}</p>
            </div>
            
          </div>
        </div>
        `
    cardSection.append(singleCardDiv);
  }

  cardCount();
};

loadIssues();

// login related codes 

// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const loginBtn = document.getElementById('login');
// loginBtn.addEventListener('click', function() {
//   if(username.value === 'admin' && password.value === 'admin123'){
//     document.getElementById('main-page').classList.remove('hidden');
//     document.getElementById('login-page').classList.add('hidden');
//   }else{
//     alert('Wrong Credentials. Please, enter right username and password');
//   }
// });


// card count
const cardCount = () => {
  let initialCount = document.getElementById('card-count');
  const cardSection = document.getElementById('card-section');
  const totalCards = cardSection.children.length;
  initialCount.innerText = totalCards + " Issues";
};