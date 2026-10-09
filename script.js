/* ==========================================================
   Project Ageta: script.js
   Contact details: set these once and every form, button and
   footer link on the site will use them.
   whatsapp: number in international format, digits only
   email: your email address
   ========================================================== */
window.SITE_CONTACT = { wa: '', email: '' };
window.__setHash = function (h) { try { history.replaceState(null, '', '#' + h); } catch (e) {} };

/* Shared: theme toggle, mobile menu, contact links */
(function () {
  var root = document.documentElement,
      toggle = document.getElementById('tg'),
      burger = document.getElementById('bg'),
      nav = document.getElementById('nav');
  function palette(dark) { return getComputedStyle(root).getPropertyValue(dark ? '--d-bg' : '--l-bg').trim(); }
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  [].forEach.call(metas, function (m) { if (m.media) m.content = palette(/dark/.test(m.media)); });
  function syncMeta() {
    var dark = (root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')) === 'dark';
    [].forEach.call(metas, function (m) { m.removeAttribute('media'); m.content = palette(dark); });
  }
  try { var saved = localStorage.getItem('theme'); if (saved) { root.setAttribute('data-theme', saved); syncMeta(); } } catch (e) {}
  if (toggle) toggle.addEventListener('click', function () {
    var cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    var next = cur === 'dark' ? 'light' : 'dark';
    if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
      root.classList.add('theming');
      clearTimeout(window.__tt);
      window.__tt = setTimeout(function () { root.classList.remove('theming'); }, 1500);
    }
    root.setAttribute('data-theme', next);
    syncMeta();
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  if (burger && nav) burger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  var c = window.SITE_CONTACT || {};
  [].forEach.call(document.querySelectorAll('[data-contact]'), function (a) {
    if (a.dataset.contact === 'wa' && c.wa) a.href = 'https://wa.me/' + c.wa;
    if (a.dataset.contact === 'email' && c.email) a.href = 'mailto:' + c.email;
  });
  /* content swaps animate only after the page has loaded */
  window.addEventListener('load', function () { window.__ready = true; });
  window.__enter = function (el) {
    if (!window.__ready || !el) return;
    el.classList.remove('enter'); void el.offsetWidth; el.classList.add('enter');
  };
  /* iOS Safari only applies :active styles when a touch listener exists */
  document.addEventListener('touchstart', function () {}, { passive: true });
})();

/* Home (1) */
(function () {
  if (!document.body.classList.contains('pg-home')) return;
(function(){var D=[["Build trust", "Show people you are credible before they get in touch.", "trust"], ["Educate", "Help people understand what you do and why it matters.", "educate"], ["Generate leads", "Turn interested visitors into inquiries.", "leads"], ["Showcase work", "Let your best results speak for you.", "showcase"], ["Qualify prospects", "Attract the right customers and filter out the wrong ones.", "qualify"], ["Help customers", "Support people after they have become customers.", "help-customers"], ["Sell", "Take orders and payments directly.", "sell"], ["Strengthen your brand", "Be recognizable and consistent everywhere.", "brand"], ["Capture demand", "Be found by people who are already looking.", "demand"], ["Answer questions", "Handle the questions you hear again and again.", "answers"]];
var still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function fill(el,list){var n=still?1:2;for(var k=0;k<n;k++)list.forEach(function(d){var a=document.createElement('a');a.className='v';a.href='value-of-a-website.html#'+d[2];a.innerHTML='<b>'+d[0]+'</b><span>'+d[1]+'</span>';if(k){a.tabIndex=-1;a.setAttribute('aria-hidden','true')}el.appendChild(a)})}
fill(document.getElementById('r1'),D.slice(0,5));fill(document.getElementById('r2'),D.slice(5));
var mp=document.getElementById('mp'),mq2=document.getElementById('mq');
if(mp)mp.addEventListener('click',function(){var p=mq2.classList.toggle('paused');mp.setAttribute('aria-pressed',String(p));mp.textContent=p?'Resume scrolling':'Pause scrolling'});})();
})();

/* Value of a Website (1) */
(function () {
  if (!document.body.classList.contains('pg-value')) return;
(function(){var r=document.documentElement,b=document.getElementById('tg'),g=document.getElementById('bg'),n=document.getElementById('nav'),k=document.getElementById('k');

var W=['salesperson','educator','receptionist','portfolio','credibility signal','lead generator','customer service tool'],i=0;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){k.textContent='salesperson, educator, receptionist, portfolio, credibility signal, lead generator and customer service tool';return}
var paused=false,pb=document.getElementById('rp'),box=k.parentNode;
if(pb)pb.addEventListener('click',function(){paused=!paused;pb.setAttribute('aria-pressed',String(paused));pb.textContent=paused?'Resume word changes':'Pause word changes'});
['mouseenter','focusin'].forEach(function(e){box.addEventListener(e,function(){paused=true})});
['mouseleave','focusout'].forEach(function(e){box.addEventListener(e,function(){paused=!!(pb&&pb.getAttribute('aria-pressed')==='true')})});
setInterval(function(){if(paused)return;k.classList.add('off');setTimeout(function(){i=(i+1)%W.length;k.textContent=W[i];k.classList.remove('off')},450)},2600);})();
})();

/* Value of a Website (2) */
(function () {
  if (!document.body.classList.contains('pg-value')) return;
(function(){var J=[{"s": "trust", "t": "Build trust", "d": "Show people you are credible before they get in touch.", "w": "People judge a business quickly, often before any conversation. A website can make that judgment easy by showing who you are, what you have done and how you work.", "h": "Clear information, real work, an honest process and a professional feel remove the doubts that stop people reaching out.", "e": "A new client checks your site before agreeing to a call, and arrives already comfortable.", "l": 0}, {"s": "educate", "t": "Educate", "d": "Help people understand what you do and why it matters.", "w": "Many customers do not know what they need or how your service works. A website can explain it patiently, at any hour.", "h": "Guides, plain-language explanations and a clear structure move visitors from confused to informed.", "e": "A physiotherapy clinic explains common injuries, so patients arrive knowing what to expect.", "l": 0}, {"s": "leads", "t": "Generate leads", "d": "Turn interested visitors into inquiries.", "w": "A website can bring in new customers by giving interested visitors an easy way to start a conversation.", "h": "A clear offer, an obvious next step and low-effort ways to get in touch, such as a form, WhatsApp or a booking link.", "e": "A plumber’s site with a one-tap WhatsApp button turns a late-night search into a job.", "l": 1}, {"s": "showcase", "t": "Showcase work", "d": "Let your best results speak for you.", "w": "Your portfolio is available all the time, presented the way you want it seen.", "h": "Selected projects with context: the problem, the approach and the result, not just a grid of images.", "e": "A photographer’s gallery is organized by type of shoot, so clients find the style they want.", "l": 0}, {"s": "qualify", "t": "Qualify prospects", "d": "Attract the right customers and filter out the wrong ones.", "w": "Not every inquiry is a good fit. A website can help the right people recognize themselves before they contact you.", "h": "Clear scope, guidance on who the service is for, and inquiry questions that surface needs, timing and budget.", "e": "A law firm’s intake questions send a property dispute to the right lawyer, with the details already gathered.", "l": 0}, {"s": "help-customers", "t": "Help customers", "d": "Support people after they have become customers.", "w": "A website can be a useful place for existing customers, saving time for them and for you.", "h": "Practical resources such as order information, guides, contact routes and account help.", "e": "A repair shop lets customers check the status of their job without phoning.", "l": 0}, {"s": "sell", "t": "Sell", "d": "Take orders and payments directly.", "w": "A website can sell products, services or bookings without a middleman.", "h": "Clear product information, a simple checkout and payment options people already trust.", "e": "A bakery takes cake orders online with a date and payment, so the phone stops ringing.", "l": 0}, {"s": "brand", "t": "Strengthen your brand", "d": "Be recognizable and consistent everywhere.", "w": "Your website is the one place where you control the whole impression.", "h": "A consistent voice, visual identity and message make the business memorable and easier to recommend.", "e": "A cafe’s site carries its personality so well that regulars recognize it from the first line.", "l": 0}, {"s": "demand", "t": "Capture demand", "d": "Be found by people who are already looking.", "w": "People search for what you offer every day. A website makes sure you can be found when they do.", "h": "Pages built around what people actually search for, with clear service and location information.", "e": "A search for wedding caterers finds a caterer whose page answers exactly that need.", "l": 0}, {"s": "answers", "t": "Answer questions", "d": "Handle the questions you hear again and again.", "w": "The same questions arrive by phone and message. A website can answer them once, properly.", "h": "Clear FAQs, pricing guidance and process explanations placed where the questions come up.", "e": "A driving school answers 'how many lessons will I need?' online, so calls are about booking.", "l": 0}];
var L=document.getElementById('list'),S=document.getElementById('slot'),B=document.getElementById('board'),P=document.getElementById('panel'),mq=matchMedia('(max-width:860px)'),cur=null;
J.forEach(function(j){var d=document.createElement('div');d.className='job';d.id=j.s;d.innerHTML='<button class="jb" type="button" aria-expanded="false" aria-controls="panel"><b>'+j.t+'</b><span>'+j.d+'</span></button>';d.firstChild.addEventListener('click',function(){pick(j.s,true)});L.appendChild(d)});
function place(){var el=document.getElementById(cur);if(mq.matches&&el){el.after(S)}else{B.appendChild(S)}}
function mark(){[].forEach.call(L.querySelectorAll('.jb'),function(b){b.setAttribute('aria-expanded',String(b.parentNode.id===cur&&!S.hidden))})}
function fill(j){P.innerHTML='<h3>'+j.t+'</h3><p class="ld">'+j.d+'</p><h4>What it does</h4><p>'+j.w+'</p><h4>How it works</h4><p>'+j.h+'</p><div class="ex"><h4>For example</h4><p>'+j.e+'</p></div>'+(j.l?'<a class="lvl" href="#levels">See how this job can level up</a>':'')}
function pick(s,user){var j=J.filter(function(x){return x.s===s})[0];if(!j)return;
if(user)window.__setHash(s);
if(s===cur&&mq.matches&&user){S.hidden=!S.hidden;mark();return}
cur=s;S.hidden=false;P.classList.add('sw');setTimeout(function(){fill(j);P.classList.remove('sw')},user?180:0);place();mark()}
mq.addEventListener('change',place);
var h=location.hash.slice(1),known=J.some(function(x){return x.s===h});
pick(known?h:J[0].s,false);
if(mq.matches&&!known){S.hidden=true;mark()}
if(known){setTimeout(function(){(mq.matches?document.getElementById(h):document.getElementById('jobs')).scrollIntoView()},60)}
window.addEventListener('hashchange',function(){var x=location.hash.slice(1);if(J.some(function(y){return y.s===x})){pick(x,false);setTimeout(function(){(mq.matches?document.getElementById(x):document.getElementById('jobs')).scrollIntoView()},60)}});
})();
})();

/* Value of a Website (3) */
(function () {
  if (!document.body.classList.contains('pg-value')) return;
(function(){var LV=[{"t": "“Contact us”", "d": "A basic call to action. Visitors who want to talk can, but they have to work out for themselves what to ask.", "g": "Unsorted inquiries. Some good, some not.", "s": "A very small business that gets most of its work through word of mouth.", "n": ["Visitor", "“Contact us” button", "Inquiry"]}, {"t": "Information and an inquiry form", "d": "Clear service information and a form that collects what you need. Visitors know what you offer before they get in touch.", "g": "Inquiries that arrive with the details you need.", "s": "Most small businesses that are starting to use their website properly.", "n": ["Visitor", "Service information", "Inquiry form", "Inquiry"]}, {"t": "Landing pages for specific needs", "d": "Separate pages that speak to one customer need each, so people land on exactly what they were looking for.", "g": "Inquiries from people who already know the service is for them.", "s": "Businesses with several services or audiences, or that run ads.", "n": ["Visitor", "Landing page for their need", "Service information", "Inquiry form", "Inquiry"]}, {"t": "Qualification before the inquiry", "d": "Questions that sort inquiries by fit, timing and budget before they ever reach you.", "g": "Inquiries already sorted by fit, so your time goes to the right people.", "s": "Businesses that receive more inquiries than they can serve.", "n": ["Visitor", "Landing page for their need", "Service information", "Form with qualifying questions", "Qualified inquiry"]}, {"t": "Automation, tracking and CRM", "d": "Automatic follow-up, tracking of where leads come from, and a CRM connection so nothing slips through.", "g": "Inquiries that are followed up and tracked without manual effort.", "s": "Businesses with a sales process and enough volume to justify it.", "n": ["Visitor", "Landing page for their need", "Service information", "Form with qualifying questions", "Qualified inquiry", "Automated follow-up", "Tracked in your CRM"]}];var st=document.getElementById('stp'),cap=document.getElementById('cap'),fl=document.getElementById('flow'),cur=0,prev=[];
LV.forEach(function(l,i){var b=document.createElement('button');b.type='button';b.className='sb';b.textContent=i+1;b.setAttribute('aria-label','Level '+(i+1));b.addEventListener('click',function(){go(i)});st.appendChild(b)});
st.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){var n=Math.max(0,Math.min(4,cur+(e.key==='ArrowRight'?1:-1)));go(n);st.children[n].focus();e.preventDefault()}});
function go(i){cur=i;var l=LV[i];
[].forEach.call(st.children,function(b,k){b.setAttribute('aria-pressed',String(k===i));b.classList.toggle('on',k<=i)});
st.style.setProperty('--p',i/4);
cap.textContent='Level '+(i+1)+' of 5. Blue steps are new at this level.';
fl.innerHTML='';l.n.forEach(function(t,k){if(k){var a=document.createElement('span');a.className='ar';a.setAttribute('aria-hidden','true');fl.appendChild(a)}var d=document.createElement('span');d.className='nd'+(prev.indexOf(t)<0?' nw':'');d.textContent=t;fl.appendChild(d)});
prev=l.n;
document.getElementById('lt').textContent=l.t;document.getElementById('ld').textContent=l.d;document.getElementById('lg').textContent=l.g;document.getElementById('ls').textContent=l.s}
go(0);})();
})();

/* Value of a Website (4) */
(function () {
  if (!document.body.classList.contains('pg-value')) return;
(function(){var T=[{"k": "Consultant", "h": "A consultant’s website", "c": "Authority, education and lead generation", "d": "Prospects want proof that you know your field before they call. The site shows how you think, teaches them something useful and makes the next step easy.", "l": ["trust", "educate", "leads"]}, {"k": "Photographer", "h": "A photographer’s website", "c": "Showcase, trust and acquisition", "d": "Clients choose on style and confidence. The site puts the work first, reassures people about what working together is like and makes it simple to inquire.", "l": ["showcase", "trust", "leads"]}, {"k": "Law firm", "h": "A law firm’s website", "c": "Trust, education, qualification and lead generation", "d": "People arrive worried and unsure. The site earns trust, explains the process in plain language, sorts inquiries by the kind of matter, then invites the right ones to get in touch.", "l": ["trust", "educate", "qualify", "leads"]}, {"k": "Restaurant", "h": "A restaurant’s website", "c": "Discovery, information, ordering and customer service", "d": "Hungry people want to find you, check the menu and hours, order and get quick answers. The site handles all four.", "l": ["demand", "answers", "sell", "help-customers"]}],JB=[["trust", "Build trust"], ["educate", "Educate"], ["leads", "Generate leads"], ["showcase", "Showcase work"], ["qualify", "Qualify prospects"], ["help-customers", "Help customers"], ["sell", "Sell"], ["brand", "Strengthen your brand"], ["demand", "Capture demand"], ["answers", "Answer questions"]];var tb=document.getElementById('tabs'),ch=document.getElementById('chips');
T.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.className='tb';b.textContent=t.k;b.addEventListener('click',function(){show(i)});tb.appendChild(b)});
JB.forEach(function(j){var a=document.createElement('a');a.className='ch';a.href='#'+j[0];a.dataset.s=j[0];a.textContent=j[1];ch.appendChild(a)});
function show(i){var t=T[i];[].forEach.call(tb.children,function(b,k){b.setAttribute('aria-pressed',String(k===i))});
[].forEach.call(ch.children,function(a){a.classList.toggle('lit',t.l.indexOf(a.dataset.s)>-1)});
document.getElementById('mh').textContent=t.h;document.getElementById('mc').textContent=t.c;document.getElementById('md').textContent=t.d}
show(0);})();
})();

/* Websites (1) */
(function () {
  if (!document.body.classList.contains('pg-websites')) return;
(function(){var S=[].slice.call(document.querySelectorAll('.sp')),R=document.getElementById('rail'),L=R.children,mq=matchMedia('(max-width:860px)');
function act(i){[].forEach.call(L,function(a,k){a.classList.toggle('on',k===i);a.classList.toggle('pa',k<i)});R.style.setProperty('--p',i/(L.length-1))}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(S.indexOf(e.target))})},{rootMargin:'-40% 0px -55% 0px'});S.forEach(function(s){io.observe(s)})}
act(0);
function sync(){S.forEach(function(s,i){var o=mq.matches?i===0:true;s.classList.toggle('open',o);s.firstChild.setAttribute('aria-expanded',String(o))})}
S.forEach(function(s){s.firstChild.addEventListener('click',function(){if(!mq.matches)return;var o=s.classList.toggle('open');this.setAttribute('aria-expanded',String(o))})});
mq.addEventListener('change',sync);sync();})();
})();

/* Working Together (1) */
(function () {
  if (!document.body.classList.contains('pg-working')) return;
(function(){var EX=[["Changing a heading", 0], ["Adjusting the spacing", 0], ["Swapping an image", 0], ["Rewording a paragraph", 0], ["Adding a booking system", 1], ["Adding a members area", 1]],V=[{"t": "Revision", "d": "Refining something that was already agreed. It is covered by your revision rounds."}, {"t": "New scope", "d": "Adding something that was not part of the original project. We discuss it and price it before any work starts."}],t=document.getElementById('tiles'),vd=document.getElementById('vd');
EX.forEach(function(x,i){var b=document.createElement('button');b.type='button';b.className='tl2';b.setAttribute('aria-pressed','false');b.textContent=x[0];b.addEventListener('click',function(){[].forEach.call(t.children,function(c,k){c.setAttribute('aria-pressed',String(k===i))});var v=V[x[1]];vd.innerHTML='<b class="'+(x[1]?'nw2':'')+'">'+v.t+'</b><p>'+v.d+'</p>';window.__enter(vd)});t.appendChild(b)});})();
})();

/* About */
(function () {
  if (!document.body.classList.contains('pg-about')) return;
(function(){var r=document.documentElement,b=document.getElementById('tg'),g=document.getElementById('bg'),n=document.getElementById('nav');

var IN=[["Web development", "How a site is built decides how fast, reliable and flexible it is."], ["Design", "Clear structure and hierarchy that help people find what they need."], ["Drawing", "Thinking visually, and sketching an idea before building it."], ["Technology", "New tools are only interesting when they make something genuinely better."], ["3D and interactive experiences", "Websites can be explored, not just read."], ["Learning", "Staying curious is how the work keeps getting better."], ["Psychology and human behavior", "Why people trust, hesitate and decide."], ["Business", "A website has to earn its place, so it has to make business sense."]],ic=document.getElementById('ic'),iw=document.getElementById('iw');
IN.forEach(function(x,i){var q=document.createElement('button');q.type='button';q.className='ib';q.textContent=x[0];q.addEventListener('click',function(){pick(i)});ic.appendChild(q)});
function pick(i){[].forEach.call(ic.children,function(c,k){c.setAttribute('aria-pressed',String(k===i))});iw.innerHTML='<b>'+IN[i][0]+'</b><p>'+IN[i][1]+'</p>';window.__enter(iw)}
pick(0);})();
})();

/* Insights */
(function () {
  if (!document.body.classList.contains('pg-insights')) return;
(function(){var r=document.documentElement,b=document.getElementById('tg'),g=document.getElementById('bg'),n=document.getElementById('nav');

var C=[{"s": "learn", "n": "Learn", "d": "Understand websites, design, strategy and customer behavior.", "q": ["What should your website actually do for your business?", "How does a stranger decide whether to trust your business online?", "Why do visitors leave websites without taking action?"], "a": "Judge your own website by what it needs to accomplish, not just how it looks.", "t": ""}, {"s": "breakdowns", "n": "Breakdowns", "d": "See websites analyzed from a business and user perspective.", "q": ["What do I understand within the first five seconds?", "What evidence of trust does the website give me?", "If I’m interested, what happens next?"], "a": "Look at any website, explain what it communicates and say what you would test to improve it.", "t": "The focus is what a website communicates, not who built it."}, {"s": "research", "n": "Research", "d": "Original research into how businesses and customers actually behave.", "q": ["Why do business owners get a website, or decide not to?", "What did they expect it to do, and did it?", "What makes them trust a website enough to invest in one?"], "a": "Make decisions about your website based on how real people behave, not on assumptions.", "t": ""}, {"s": "experiments", "n": "Experiments", "d": "Ideas tested through real projects and controlled experiments.", "q": ["Can a clearer presentation make a business’s value easier to see?", "Can a one-page website outperform a five-page one for a particular goal?", "What makes a website feel premium without expensive visuals?"], "a": "Know which design and messaging ideas change the result and which don’t.", "t": "Experiments built on concept projects are always labeled as concept."}, {"s": "builds", "n": "Builds", "d": "Follow the thinking and process behind websites I create.", "q": ["Why does the website have these pages?", "Why these colors, this typography and this layout?", "What was learned once it was built?"], "a": "See how a goal turns into structure, design and code, decision by decision.", "t": "Builds based on concept projects are always labeled as concept."}, {"s": "case-studies", "n": "Case studies", "d": "See how those ideas are applied to real businesses.", "q": ["What was the problem, and what did the investigation reveal?", "What strategy followed, and how was it designed and built?", "What changed as a result?"], "a": "Understand what applying this thinking to a real business can achieve.", "t": ""}],N=[].slice.call(document.querySelectorAll('.pn2')),P=document.getElementById('pp'),pg=document.getElementById('pg');
function pick(i){var c=C[i];N.forEach(function(x,k){x.setAttribute('aria-pressed',String(k===i));x.classList.toggle('pa',k<i)});
pg.style.setProperty('--d',(i/5*100).toFixed(1));
P.innerHTML='<h3>'+c.n+'</h3><p>'+c.d+'</p><h4>Questions it explores</h4><ul>'+c.q.map(function(q){return'<li>'+q+'</li>'}).join('')+'</ul><div class="able"><h4>You will leave able to</h4><p>'+c.a+'</p></div>'+(c.t?'<p class="nt">'+c.t+'</p>':'');window.__enter(P)}
N.forEach(function(x,k){x.addEventListener('click',function(){pick(k);window.__setHash(C[k].s)})});
var h=location.hash.slice(1),k=C.map(function(c){return c.s}).indexOf(h);pick(k<0?0:k);
if(k>=0)setTimeout(function(){document.getElementById('explore').scrollIntoView()},60);
})();
})();

/* Free Tools (1) */
(function () {
  if (!document.body.classList.contains('pg-tools')) return;
(function(){
var CFG=window.__CFG=window.SITE_CONTACT;
var r=document.documentElement,b=document.getElementById('tg'),g=document.getElementById('bg'),n=document.getElementById('nav');

[].forEach.call(document.querySelectorAll('.fm'),function(f){f.addEventListener('submit',function(e){e.preventDefault();
var k=f.dataset.kind,v=function(x){return f.elements[x]?f.elements[x].value.trim():''};
var t=k==='audit'?'Hello, I would like a free website audit.\nWebsite: '+v('site')+'\nBusiness: '+v('biz')+(v('goal')?'\nWhat I would like to improve: '+v('goal'):''):'Hello, I would like a free website performance report.\nWebsite: '+v('site');
var box=f.querySelector('.rs');
if(CFG.wa){window.open('https://wa.me/'+CFG.wa+'?text='+encodeURIComponent(t),'_blank');box.hidden=false;box.textContent='Thank you. Your request is ready to send on WhatsApp.';box.classList.add('sent');return}
if(CFG.email){location.href='mailto:'+CFG.email+'?subject='+encodeURIComponent(k==='audit'?'Free website audit request':'Website performance report request')+'&body='+encodeURIComponent(t);return}
box.hidden=false;box.innerHTML='Your request is ready. Copy it and send it to me on WhatsApp or by email.<pre></pre><button class="btn" type="button">Copy request</button>';box.querySelector('pre').textContent=t;
box.querySelector('button').addEventListener('click',function(){if(navigator.clipboard)navigator.clipboard.writeText(t)});
})});
var ck=document.getElementById('ck'),er=document.getElementById('er');
function est(){var on=[].filter.call(ck.querySelectorAll('input'),function(i){return i.checked}),sc=on.reduce(function(a,i){return a+ +i.dataset.w},0);
var tier=sc<=3?['Essential','A focused site covers what you have chosen.']:sc<=9?['Growth','Your choices point to a website that does more.']:['Advanced','Your choices point to deeper functionality and more sophisticated experiences.'];
var bars=on.sort(function(a,b){return b.dataset.w-a.dataset.w}).map(function(i){return'<div><span>'+i.dataset.n+'</span><i style="width:'+(i.dataset.w*20)+'%"></i></div>'}).join('');
er.innerHTML='<h4>Points toward: '+tier[0]+'</h4><p>'+tier[1]+' Exact figures come with your proposal.</p>'+(bars?'<div class="dv2">'+bars+'</div>':'')+'<p style="margin-top:12px"><a href="websites.html#packages">See the packages</a></p>'}
ck.addEventListener('change',est);est();
var vt=document.getElementById('vt'),vf=document.getElementById('vf'),vr=document.getElementById('vr'),mode=0;
var F=[[['vis','Monthly visitors',1000],['cur','Current conversion rate (%)',1],['imp','Improved conversion rate (%)',2],['cls','Inquiries that become customers (%)',20],['val','Value of one customer (KSh)',20000]],[['ext','Extra qualified inquiries per month',5],['cls','Inquiries that become customers (%)',20],['val','Value of one customer (KSh)',20000]]];
var keep={};
function draw(){vf.innerHTML=F[mode].map(function(x){return'<label>'+x[1]+'<input type="number" min="0" step="any" inputmode="decimal" enterkeyhint="done" name="'+x[0]+'" autocomplete="off" data-k="'+x[0]+'" value="'+(keep[x[0]]!=null?keep[x[0]]:x[2])+'"></label>'}).join('');calc()}
function num(k){var e=vf.querySelector('[data-k="'+k+'"]');return e?Math.max(0,parseFloat(e.value)||0):0}
var fm=new Intl.NumberFormat('en-KE',{maximumFractionDigits:1});
function calc(){[].forEach.call(vf.querySelectorAll('input'),function(i){keep[i.dataset.k]=i.value});
var extra=mode?num('ext'):num('vis')*Math.max(0,num('imp')-num('cur'))/100,cust=extra*num('cls')/100,yr=cust*num('val')*12;
vr.innerHTML='<div class="st3"><div><b>'+fm.format(extra)+'</b><span>extra inquiries a month</span></div><div><b>'+fm.format(cust)+'</b><span>extra customers a month</span></div><div><b>KSh\u00a0'+fm.format(Math.round(yr))+'</b><span>potential extra value a year</span></div></div><p>This is what your own assumptions imply. It is not a prediction.</p>'}
vf.addEventListener('input',calc);
[].forEach.call(vt.children,function(x){x.addEventListener('click',function(){mode=+x.dataset.m;[].forEach.call(vt.children,function(y){y.setAttribute('aria-pressed',String(y===x))});draw()})});
draw();
})();
})();

/* Free Tools (2) */
(function () {
  if (!document.body.classList.contains('pg-tools')) return;
(function(){
var RQ=[{"k": "biz", "q": "What does your business do?", "h": "A sentence or two is plenty.", "t": "text"}, {"k": "jobs", "q": "What should your website do for the business?", "h": "Choose as many as apply.", "t": "multi", "o": ["Build trust", "Educate", "Generate leads", "Showcase work", "Qualify prospects", "Help customers", "Sell", "Strengthen your brand", "Capture demand", "Answer questions"]}, {"k": "aud", "q": "Who is it for?", "h": "Describe the people you want to reach.", "t": "text"}, {"k": "cta", "q": "What should visitors be able to do?", "h": "These become the main calls to action.", "t": "multi", "o": ["Contact me", "Message me on WhatsApp", "Book a call or appointment", "Request a quote", "Buy something", "Call me"]}, {"k": "feat", "q": "Which features do you need?", "h": "Choose what you expect to need.", "t": "multi", "o": ["Contact form", "WhatsApp button", "Booking or scheduling", "Online payments", "Content you can edit yourself", "Gallery or portfolio", "Articles or blog", "Integrations with other tools", "More than one language"]}, {"k": "cont", "q": "What content do you already have?", "h": "This shows what still needs to be prepared.", "t": "multi", "o": ["Logo and brand colors", "Written text", "Photos", "Testimonials", "Pricing details"]}, {"k": "qs", "q": "What questions do customers keep asking?", "h": "One per line. Your website should answer these.", "t": "area"}, {"k": "later", "q": "Is there anything you might need later?", "h": "Optional. Future features, new services, other markets.", "t": "area"}],CK=[["Strategy", ["The website has one clear goal", "I know exactly who it is for", "Success is defined and measured", "The main action is obvious"]], ["Content", ["It says what the business does in one clear sentence", "The copy is written for visitors, not insiders", "Hours, prices and contact details are up to date", "Images are real and good quality"]], ["Design", ["Colors and typography are consistent", "The most important things stand out", "Text is readable with enough space", "It looks like it belongs to the brand"]], ["User experience", ["Navigation is simple", "Key information is a few clicks away", "Forms are short and work properly", "It works smoothly on a phone"]], ["Trust", ["Visitors can see who is behind the business", "There is proof: past work or customer feedback", "Contact details are easy to find", "The presentation is professional and consistent"]], ["Conversion", ["Every page has a clear next step", "There are easy ways to get in touch", "People can use the contact method they prefer", "The next step is obvious after reading"]], ["Performance", ["Pages load quickly on mobile", "Images are optimized", "There are no unnecessary scripts or heavy effects"]], ["SEO", ["Each page has a clear title and description", "Headings are structured logically", "The business has a Google Business Profile", "Pages use the words customers search for"]], ["Accessibility", ["Text has enough contrast", "Images have text descriptions", "It can be used with a keyboard", "Font sizes are comfortable to read"]], ["Technical", ["It works across browsers and devices", "Links and forms have been tested", "I control the domain and hosting renewals", "Backups exist"]], ["Security", ["The site uses HTTPS", "Software and plugins are kept updated", "Passwords are strong and admin access is limited", "Forms are protected against spam"]]],SH=[{"q": "How do customers find you today?", "o": ["Word of mouth and recommendations", "Social media", "Walk-ins and local presence", "Ads or other channels"]}, {"q": "What stage is the business at?", "o": ["Just starting", "Established and growing", "Established and steady"]}, {"q": "How do customers usually decide to buy?", "o": ["Quickly, often on the spot", "After comparing a few options", "After research and building trust"]}, {"q": "Roughly how valuable is one customer?", "o": ["Small", "Medium", "High"]}, {"q": "What does your sales process look like?", "o": ["Customers simply buy", "A conversation, then they buy", "Quotes and proposals"]}, {"q": "What online presence do you have now?", "o": ["None yet", "Social media only", "Social media and listings", "An existing website"]}, {"q": "What is your main goal?", "o": ["More customers", "Look credible", "Share information", "Sell online", "Not sure yet"]}, {"q": "What is your biggest problem right now?", "o": ["Not enough inquiries", "People don’t trust us enough", "Answering the same questions again and again", "Hard to be found", "No real problem, just exploring"]}];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function deliver(t,subj,box){var c=window.__CFG||{};if(c.wa){window.open('https://wa.me/'+c.wa+'?text='+encodeURIComponent(t),'_blank');return}
if(c.email){location.href='mailto:'+c.email+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(t);return}
box.hidden=false;box.innerHTML='Copy this and send it to me on WhatsApp or by email.'}
/* Requirements Builder */
var rq=document.getElementById('rq'),ra={},rs=0,rt=0;
window.addEventListener('beforeunload',function(e){if(rs>0&&rs<RQ.length){e.preventDefault();e.returnValue=''}});
function rview(){if(rs>=RQ.length){return rdoc()}var s=RQ[rs],h='<div class="pg2"><i style="transform:scaleX('+(rs/RQ.length)+')"></i></div><h3>'+s.q+'</h3><p class="hint">'+s.h+'</p>';
if(s.t==='text')h+='<input type="text" id="ri" name="'+s.k+'" autocomplete="off" aria-label="'+s.q+'" value="'+esc(ra[s.k]||'')+'">';
else if(s.t==='area')h+='<textarea id="ri" name="'+s.k+'" autocomplete="off" aria-label="'+s.q+'">'+esc(ra[s.k]||'')+'</textarea>';
else h+='<div class="opts">'+s.o.map(function(o){return'<button type="button" class="op" aria-pressed="'+((ra[s.k]||[]).indexOf(o)>-1)+'">'+o+'</button>'}).join('')+'</div>';
h+='<div class="nv"><button class="btn" type="button" id="rb"'+(rs?'':' disabled')+'>Back</button><button class="btn solid" type="button" id="rn">'+(rs===RQ.length-1?'Create my requirements':'Next')+'</button></div>';
rq.innerHTML=h;window.__enter(rq);if(rt){var hd=rq.querySelector('h3');hd.tabIndex=-1;hd.focus({preventScroll:true})}
[].forEach.call(rq.querySelectorAll('.op'),function(b){b.addEventListener('click',function(){var a=ra[s.k]=ra[s.k]||[],i=a.indexOf(b.textContent);if(i>-1)a.splice(i,1);else a.push(b.textContent);b.setAttribute('aria-pressed',String(i<0))})});
document.getElementById('rn').addEventListener('click',function(){var e=document.getElementById('ri');if(e)ra[s.k]=e.value.trim();rs++;rt=1;rview()});
document.getElementById('rb').addEventListener('click',function(){var e=document.getElementById('ri');if(e)ra[s.k]=e.value.trim();rs--;rt=1;rview()})}
function rdoc(){var J=ra.jobs||[],F=ra.feat||[],C=ra.cont||[],P=['Home','About'];
if(J.indexOf('Sell')<0)P.push('Services');if(J.indexOf('Showcase work')>-1)P.push('Work or portfolio');if(J.indexOf('Sell')>-1||F.indexOf('Online payments')>-1)P.push('Shop');if(F.indexOf('Booking or scheduling')>-1)P.push('Booking');if(J.indexOf('Educate')>-1||J.indexOf('Answer questions')>-1)P.push('Resources and FAQ');if(F.indexOf('Articles or blog')>-1)P.push('Articles');P.push('Contact');
var I=[];if(F.indexOf('Online payments')>-1)I.push('A payment provider, for cards or mobile money');if(F.indexOf('Booking or scheduling')>-1)I.push('A calendar or scheduling tool');if(F.indexOf('WhatsApp button')>-1)I.push('WhatsApp');if(F.indexOf('Integrations with other tools')>-1)I.push('The other tools you use, such as a CRM or email platform');if(J.indexOf('Generate leads')>-1||J.indexOf('Qualify prospects')>-1)I.push('Somewhere to collect and follow up inquiries');
var all=['Logo and brand colors','Written text','Photos','Testimonials','Pricing details'],Q=(ra.qs||'').split(/\n+/).filter(Boolean);if(!Q.length)Q=['What do you do, and who is it for?','How much does it cost?','How do I get started?'];
var S=[['Website goal',J.length?['This website needs to: '+J.join(', ').toLowerCase()+'.']:['To be agreed.']],['About the business',[ra.biz||'Not provided']],['Target audience',[ra.aud||'Not provided']],['Recommended pages',P],['Required features',F.length?F:['None selected']],['Content needed',all.map(function(c){return(C.indexOf(c)>-1?'Ready: ':'Still needed: ')+c})],['Integrations',I.length?I:['None identified yet']],['Primary calls to action',(ra.cta&&ra.cta.length)?ra.cta:['To be agreed']],['Questions your website should answer',Q],['Potential future requirements',[ra.later||'None noted']]];
var txt='WEBSITE REQUIREMENTS\n\n'+S.map(function(x){return x[0].toUpperCase()+'\n'+x[1].map(function(l){return'- '+l}).join('\n')}).join('\n\n');
rq.innerHTML='<div class="pg2"><i style="transform:scaleX(1)"></i></div><h3>Your website requirements</h3><p class="hint">Take this to me or to any developer.</p><div class="doc2">'+S.map(function(x){return'<h4>'+x[0]+'</h4><ul>'+x[1].map(function(l){return'<li>'+esc(l)+'</li>'}).join('')+'</ul>'}).join('')+'</div><div class="acts"><button class="btn solid" type="button" id="rc">Copy as text</button><button class="btn" type="button" id="rse">Send it to me</button><button class="btn" type="button" id="rr">Start again</button></div><p class="hint" id="rm" hidden style="margin-top:12px"></p>';
document.getElementById('rc').addEventListener('click',function(){if(navigator.clipboard)navigator.clipboard.writeText(txt);this.textContent='Copied'});
document.getElementById('rse').addEventListener('click',function(){deliver('Hello, here are my website requirements.\n\n'+txt,'Website requirements',document.getElementById('rm'))});
document.getElementById('rr').addEventListener('click',function(){var b=this;if(b.dataset.armed){ra={};rs=0;rt=0;rview();return}b.dataset.armed='1';b.textContent='Click again to clear your answers';setTimeout(function(){if(b.isConnected){delete b.dataset.armed;b.textContent='Start again'}},4000)});window.__enter(rq);var rh=rq.querySelector('h3');rh.tabIndex=-1;rh.focus({preventScroll:true})}
rview();
/* Checklist */
var cg=document.getElementById('cg'),st={};try{st=JSON.parse(localStorage.getItem('wcl')||'{}')}catch(e){}
cg.innerHTML=CK.map(function(c,i){return'<details><summary>'+c[0]+'<em></em></summary>'+c[1].map(function(t,j){return'<label><input type="checkbox" name="check" data-id="'+i+'-'+j+'"'+(st[i+'-'+j]?' checked':'')+'><span>'+t+'</span></label>'}).join('')+'</details>'}).join('');
function cu(){var tot=0,done=0,w=[];[].forEach.call(cg.children,function(d,i){var ins=d.querySelectorAll('input'),n=0;[].forEach.call(ins,function(x){if(x.checked)n++});d.querySelector('em').textContent=n+' of '+ins.length;tot+=ins.length;done+=n;w.push([CK[i][0],n/ins.length])});
document.getElementById('ovb').style.transform='scaleX('+(done/tot)+')';document.getElementById('ovt').textContent=done+' of '+tot+' checked';document.querySelector('.ov').classList.toggle('done',done===tot);
var f=document.getElementById('cf');if(!done){f.innerHTML='Tick what is true for your website. Anything left unticked shows you where to focus.'}else{w.sort(function(a,b){return a[1]-b[1]});f.innerHTML='Where to focus first: <b>'+w.slice(0,3).map(function(x){return x[0]}).join(', ')+'</b>'}}
cg.addEventListener('change',function(e){st[e.target.dataset.id]=e.target.checked?1:0;try{localStorage.setItem('wcl',JSON.stringify(st))}catch(x){}cu()});cu();
/* Should I have a website */
var sh=document.getElementById('sh'),sa=[],ss=0,sTouched=0;
function sv(){if(ss>=SH.length)return sres();var s=SH[ss];sh.innerHTML='<div class="pg2"><i style="transform:scaleX('+(ss/SH.length)+')"></i></div><h3>'+s.q+'</h3><p class="hint">Question '+(ss+1)+' of '+SH.length+'</p><div class="opts col">'+s.o.map(function(o,i){return'<button type="button" class="op" data-i="'+i+'">'+o+'</button>'}).join('')+'</div>'+(ss?'<div class="nv"><button class="btn" type="button" id="sb">Back</button></div>':'');
[].forEach.call(sh.querySelectorAll('.op'),function(b){b.addEventListener('click',function(){sa[ss]=+b.dataset.i;ss++;sTouched=1;sv()})});
var bk=document.getElementById('sb');if(bk)bk.addEventListener('click',function(){ss--;sv()});window.__enter(sh);if(sTouched){var sh3=sh.querySelector('h3');sh3.tabIndex=-1;sh3.focus({preventScroll:true})}}
function sres(){var a=sa,sc=0,pro=[],con=[],has=a[5]===3;
function add(n,t){sc+=n;if(n>0)pro.push([n,t]);else con.push(t)}
if(a[0]===0)add(1,'People who hear about you by recommendation often look you up online first. A website makes that moment count.');
if(a[0]===1)add(1,'Social media works, but you do not own it. A website gives people a stable place to check you out.');
if(a[0]===2)add(-1,'Local foot traffic already brings customers to you, so a website would add less than it would elsewhere.');
if(a[0]===3)add(1,'You are already paying for attention. A website decides what happens to it.');
if(a[1]===1)add(1,'You are growing, and a website helps you scale how people find and trust you.');
if(a[2]===0)add(-1,'Your customers decide quickly, often in person, so a website matters less than other things right now.');
if(a[2]===1)add(1,'Your customers compare options, and a website is where that comparison happens.');
if(a[2]===2)add(2,'Your customers research and build trust before they buy, which is exactly where a website does its best work.');
if(a[3]===1)add(1,'Each customer is worth enough that a few extra inquiries matter.');
if(a[3]===2)add(2,'When each customer is worth a lot, even a few extra inquiries make a real difference.');
if(a[4]===1)add(1,'Your sales start with a conversation, and a website can answer questions before it begins.');
if(a[4]===2)add(2,'Your sales involve conversations and quotes. A website can build trust and answer questions before the first call.');
if(a[5]<=1)add(1,'Without a proper home online, people have little to go on when they look you up.');
if(a[6]!==4&&a[6]!==undefined&&a[6]<4)add(1,'Your main goal is something a website is good at.');
if(a[7]<4)add(1,'The problem you describe is one a website can directly address.');
pro.sort(function(x,y){return y[0]-x[0]});
var head=sc>=5?'A website could help you a lot':sc>=2?'A website could help, though it may not be your first priority':'A website probably is not your biggest priority right now';
var fo=[],g=a[6],p=a[7];
if(p===3)fo.push('Set up and complete your Google Business Profile, then make sure your pages match what people search for.');
if(p===1||g===1)fo.push('Show real proof: who is behind the business, past work and customer feedback.');
if(p===0||g===0)fo.push('Make your offer and the next step unmistakable, with an easy way to get in touch.');
if(p===2)fo.push('Answer the common questions clearly in one place.');
if(g===3)fo.push('Make buying simple, with clear products and an easy way to pay.');
if(!fo.length)fo.push('Start with one clear page that says what you do and who it is for.');
var h='<div class="pg2"><i style="transform:scaleX(1)"></i></div><div class="vd2"><h4>'+head+'</h4></div>';
if(has)h+='<p class="hint" style="margin-top:14px">You already have a website, so the better question is whether it is doing its job. <a class="lk" href="#audit">The free audit</a> answers that.</p>';
h+='<h3 style="margin-top:22px">Why</h3><ul class="doc2" style="margin:8px 0 0;padding-left:20px;color:var(--color-text-muted)">'+pro.slice(0,4).map(function(x){return'<li>'+x[1]+'</li>'}).join('')+con.slice(0,2).map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>';
if(sc>=2)h+='<h3 style="margin-top:22px">If you decide it makes sense, focus on</h3><ul class="doc2" style="margin:8px 0 0;padding-left:20px;color:var(--color-text-muted)">'+fo.slice(0,3).map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul>';
else h+='<h3 style="margin-top:22px">What I would focus on instead</h3><ul class="doc2" style="margin:8px 0 0;padding-left:20px;color:var(--color-text-muted)"><li>Keep your WhatsApp and social profiles clear and consistent.</li><li>Make sure Google shows your correct hours and location.</li><li>Revisit a website when customers start comparing you with others, or when you need to look more established.</li></ul>';
h+='<div class="acts"><a class="btn solid" href="#audit">Get a free audit</a><a class="btn" href="#requirements">Plan a website</a><button class="btn" type="button" id="sr">Start again</button></div>';
sh.innerHTML=h;window.__enter(sh);document.getElementById('sr').addEventListener('click',function(){sa=[];ss=0;sv()})}
sv();
})();
})();

/* Start a project */
(function () {
  if (!document.body.classList.contains('pg-start')) return;
(function(){
var CFG=window.SITE_CONTACT;
var r=document.documentElement,b=document.getElementById('tg'),g=document.getElementById('bg'),n=document.getElementById('nav');

function deliver(t,subj,box,done){
if(CFG.wa){window.open('https://wa.me/'+CFG.wa+'?text='+encodeURIComponent(t),'_blank');box.hidden=false;box.textContent=done;box.classList.add('sent');return}
if(CFG.email){location.href='mailto:'+CFG.email+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(t);return}
box.hidden=false;box.innerHTML='Your message is ready. Copy it and send it to me on WhatsApp or by email.<pre></pre><button class="btn" type="button">Copy message</button>';box.querySelector('pre').textContent=t;
box.querySelector('button').addEventListener('click',function(){if(navigator.clipboard)navigator.clipboard.writeText(t);this.textContent='Copied'})}
var f=document.getElementById('pf');
f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),v=function(k){return(d.get(k)||'').toString().trim()},l=function(k){return d.getAll(k).join(', ')};
var t='Hello, I would like to start a project.\n\nName: '+v('name')+'\nEmail: '+v('email')+'\nBusiness: '+v('biz')+(v('site')?'\nWebsite: '+v('site'):'')+'\n\nLooking for: '+v('kind')+(v('about')?'\nAbout the business: '+v('about'):'')+'\nWhat it should accomplish: '+v('goal')+(v('problem')?'\nWhat is not working: '+v('problem'):'')+(l('need')?'\nWhat I think I will need: '+l('need'):'')+(v('budget')?'\nBudget: '+v('budget'):'')+(v('time')?'\nTimeline: '+v('time'):'')+(v('more')?'\nAnything else: '+v('more'):'');
deliver(t,'New project inquiry from '+v('name'),document.getElementById('rs'),'Thank you. Your project details are ready to send on WhatsApp. I will review them and get back to you.')});
document.getElementById('sbn').addEventListener('click',function(){deliver('Hello, I would like to take part in your study on what business owners in Kenya think about websites.','Taking part in the study',document.getElementById('sm'),'Thank you. Your message is ready to send on WhatsApp.')});
})();
})();
