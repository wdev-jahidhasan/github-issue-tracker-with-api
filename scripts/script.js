// login related codes 
fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
.then(res => res.json())
.then(data => displayIssues(data.data));

const displayIssues = (issues) => {
    for (const issue of issues) {
        
    }
}



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