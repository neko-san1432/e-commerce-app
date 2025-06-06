const review = document.querySelectorAll(".review-product");
const home = document.getElementById("home");
const user_reviewed_products = document.getElementById("reviewed-product");
const profile = document.getElementById("profile");
const logout = document.getElementById("logout");
const homel = document.getElementById("home-logo");
if(homel){
homel.addEventListener('click',() => {
  window.location.href = window.origin+"/pages/main-menu.html";
});}

review.forEach(f=>{
  f.addEventListener('click',() => {
    window.location.href = window.origin+"/pages/submit-review.html";
  });
})
home.addEventListener('click',() => {
  window.location.href = window.origin+"/pages/main-menu.html";
});
user_reviewed_products.addEventListener('click',() => {
  window.location.href = window.origin+"/pages/your-reviewed-products.html";
});
profile.addEventListener('click',() => {
  window.location.href = window.origin+"/pages/user-profile.html";
});
logout.addEventListener('click',() => {
  logoutfunc();
  window.location.href = window.origin+"/index.html";
});
import { supabase } from '../api/database.js';

async function logoutfunc() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    showError("Logout error:", error.message);
    return;
  }
  localStorage.clear();
  sessionStorage.clear();

}