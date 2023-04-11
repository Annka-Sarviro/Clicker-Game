import modalOpen from './helpers/modalOpen.js'
import modalClose from './helpers/modalClose.js'
import refs from "./helpers/refs.js"

const user = JSON.parse(localStorage?.getItem('user'));

refs.buttonModalSubmit.addEventListener('click', onRegFornSubmit)

if(!user) {
   modalOpen(refs.backdrop)  
}

if(user) {
   refs.userLogOut.style.display = `block`
   refs.userLogOut.addEventListener('click', onLogout)    
}
const userData = {};

function onRegFornSubmit (e) {
    let formFeel = true
    e.preventDefault()
    for (let field of form) {
    const {name} = field;

    if (name) {
        const {value} = field;
        userData[name] =  value;
    }}
    
	if (userData.name.trim() === '' || userData.email.trim() === '' || userData.password.trim() === '') {
		formFeel= false;
	}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(userData.email)) {
		formFeel= false;;
	}

    if(userData.name.trim() === 'Test' && userData.email.trim() === 'test@email.com' && userData.password.trim() === 'test') {
        formFeel = true
    }
    if(formFeel) {
        refs.userName.textContent = `${userData.name}`
        localStorage.setItem('user', JSON.stringify(userData));
        refs.userLogOut.style.display = `block`
        modalClose(refs.backdrop)        
    }  
}

function onLogout () {
    localStorage.removeItem('user');
    refs.userName.textContent = `User`
    refs.userLogOut.style.display = `none`
    modalOpen(refs.backdrop)
}