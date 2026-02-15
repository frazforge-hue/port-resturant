// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', e=>{
    e.preventDefault();
    const target=document.querySelector(anchor.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Contact form validation
const form=document.getElementById("contactForm");
const formMessage=document.getElementById("formMessage");
if(form){
  form.addEventListener("submit", e=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();
    if(!name || !email || !message){formMessage.style.color="red";formMessage.textContent="All fields are required!";return;}
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if(!email.match(emailPattern)){formMessage.style.color="red";formMessage.textContent="Please enter a valid email!";return;}
    form.submit();
  });
}
