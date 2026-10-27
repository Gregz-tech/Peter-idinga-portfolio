(()=>{'use strict';
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
const intro=document.querySelector('#intro');
if(intro){
 let seen=true;try{seen=sessionStorage.getItem('gregztech-intro')==='seen';sessionStorage.setItem('gregztech-intro','seen')}catch{seen=false}
 if(!seen&&!reduce.matches){
  intro.hidden=false;const word=document.querySelector('#greeting-word');const greetings=['Hello','Bonjour','Hola','Ciao','こんにちは','Welcome'];let count=0;
  const timer=setInterval(()=>{count++;if(count<greetings.length){word.textContent=greetings[count]}else{clearInterval(timer);intro.classList.add('leaving');document.querySelector('.hero')?.classList.add('arrive');setTimeout(()=>{intro.hidden=true},850)}},220);
  setTimeout(()=>{intro.hidden=true;clearInterval(timer)},2400);
 }
}
const dialog=document.querySelector('#mobile-menu');const toggle=document.querySelector('.menu-toggle');
function closeMenu(){dialog?.close();toggle?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}
toggle?.addEventListener('click',()=>{dialog.showModal();toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open')});
document.querySelector('.menu-close')?.addEventListener('click',closeMenu);
dialog?.addEventListener('close',()=>{toggle?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')});
dialog?.addEventListener('click',e=>{if(e.target===dialog&&e.clientX<dialog.getBoundingClientRect().left)closeMenu()});
dialog?.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',closeMenu));
if('IntersectionObserver' in window&&!reduce.matches){
 document.querySelectorAll('.capability,.decision-grid>div').forEach((el,i)=>el.style.setProperty('--reveal-delay',`${i%4*65}ms`));
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}},{threshold:.06});
 document.querySelectorAll('.project,.about-layout,.capability,.decision-grid>div,.personal-intro>p,.personal-intro>div,.section-heading,.case-story>div,.gallery-heading,.screen-figure,.journey,.outcome,.next-project').forEach(el=>{el.classList.add('reveal-enabled');observer.observe(el)});
 reduce.addEventListener('change',e=>{if(e.matches){document.querySelectorAll('.reveal-enabled').forEach(el=>el.classList.add('visible'));if(intro)intro.hidden=true;observer.disconnect()}});
}
// Small viewport-relative drift adds depth without interfering with native scrolling.
if(!reduce.matches&&'requestAnimationFrame' in window){
 const previews=[...document.querySelectorAll('.project.lead .desktop-device')];let queued=false;
 function paint(){queued=false;for(const el of previews){const box=el.getBoundingClientRect();if(box.bottom>0&&box.top<window.innerHeight){const offset=reduce.matches?0:Math.max(-9,Math.min(9,(box.top+box.height/2-window.innerHeight/2)*.022));el.style.setProperty('--image-drift',`${offset}px`)}}}
 window.addEventListener('scroll',()=>{if(!queued){queued=true;window.requestAnimationFrame(paint)}},{passive:true});paint();
 reduce.addEventListener('change',()=>{if(reduce.matches)previews.forEach(el=>el.style.setProperty('--image-drift','0px'))});
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
})();
