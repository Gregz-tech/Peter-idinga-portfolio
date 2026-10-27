const vm=require('node:vm');const fs=require('node:fs');const assert=require('node:assert/strict');
const code=fs.readFileSync('dist/app.js','utf8');
function run({seen=false,reduced=false,brokenStorage=false}={}){
 let interval;let timers=[];const classes=new Set();const intro={hidden:true,classList:{add:c=>classes.add(c)}};const word={textContent:'Hello'};let stored=seen?'seen':null;
 const context={window:{matchMedia:()=>({matches:reduced,addEventListener(){}})},sessionStorage:{getItem(){if(brokenStorage)throw Error('disabled');return stored},setItem(k,v){stored=v}},document:{querySelector:s=>s==='#intro'?intro:s==='#greeting-word'?word:null,querySelectorAll:()=>[],body:{classList:{remove(){},add(){}}}},setInterval:f=>(interval=f,1),clearInterval(){},setTimeout:(f,t)=>timers.push([f,t]),Date};
 vm.runInNewContext(code,context);return{intro,word,classes,timers,tick(){interval?.()}};
}
let a=run();assert.equal(a.intro.hidden,false);for(const word of ['Bonjour','Hola','Ciao','こんにちは','Welcome']){a.tick();assert.equal(a.word.textContent,word)}a.tick();assert(a.classes.has('leaving'));a.timers.find(t=>t[1]===850)[0]();assert.equal(a.intro.hidden,true);
assert.equal(run({seen:true}).intro.hidden,true);assert.equal(run({reduced:true}).intro.hidden,true);
const blocked=run({brokenStorage:true});assert.equal(blocked.intro.hidden,false);blocked.timers.find(t=>t[1]===2400)[0]();assert.equal(blocked.intro.hidden,true);
console.log('PASS: greetings, exit, session skip, reduced-motion skip and storage/failsafe handling.');
// Scroll reveals remain available without motion and release their observers after entry.
function scrollRun(reduced){
 let enter,change,observed=0,unobserved=0,disconnected=false;const classes=new Set();const el={classList:{add:x=>classes.add(x)},style:{setProperty(){}}};
 const context={window:{matchMedia:()=>({matches:reduced,addEventListener:(type,fn)=>{change=fn}}),IntersectionObserver:true},IntersectionObserver:class{constructor(fn){enter=fn}observe(){observed++}unobserve(){unobserved++}disconnect(){disconnected=true}},document:{querySelector:()=>null,querySelectorAll:s=>s==='[data-year]'?[]:[el],body:{classList:{add(){},remove(){}}}},Date};
 vm.runInNewContext(code,context);return{classes,get observed(){return observed},get unobserved(){return unobserved},get disconnected(){return disconnected},enter:()=>enter([{isIntersecting:true,target:el}]),reduce:()=>change({matches:true})};
}
const scrolling=scrollRun(false);assert(scrolling.observed>0);scrolling.enter();assert(scrolling.classes.has('visible'));assert(scrolling.unobserved>0);scrolling.reduce();assert(scrolling.disconnected);assert.equal(scrollRun(true).observed,0);
console.log('PASS: scroll entry, observer cleanup, live reduced-motion change and reduced-motion bypass.');
