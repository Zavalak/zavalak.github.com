import { initMembershipTable } from './membership_table.js';
import { initContactForm } from './contact_form.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {

  lucide.createIcons();


  initMembershipTable();
  initContactForm();
  

  initAnimations();


  const menuBtn = document.getElementById('mobile-menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {


      alert("Navigation Menu: Services, Membership, Contact");
    });
  }
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
