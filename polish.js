(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=matchMedia('(pointer: coarse)').matches;
  function init(){
    // Remove any cursor elements left by an older cached build.
    document.querySelectorAll('.cursor-dot,.cursor-ring,.custom-cursor,.cursor-follower').forEach(el=>el.remove());
    document.documentElement.classList.add('native-cursor');

    const glow=document.createElement('div');
    glow.className='render-glow';
    document.body.prepend(glow);

    if(!coarse&&!reduced){
      addEventListener('pointermove',e=>{
        document.documentElement.style.setProperty('--mx',e.clientX+'px');
        document.documentElement.style.setProperty('--my',e.clientY+'px');
      },{passive:true});

      document.addEventListener('pointermove',e=>{
        const c=e.target.closest('.result-card,.file-card,.demo-game,.chapter-card:not(.locked),.shared-card');
        if(!c)return;
        const r=c.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        c.style.setProperty('--ry',(x*.65)+'deg');
        c.style.setProperty('--rx',(-y*.65)+'deg');
        c.classList.add('fx-tilt');
      },{passive:true});

      document.addEventListener('pointerout',e=>{
        const c=e.target.closest?.('.fx-tilt');
        if(c&&!c.contains(e.relatedTarget)){
          c.classList.remove('fx-tilt');
          c.style.removeProperty('--rx');
          c.style.removeProperty('--ry');
        }
      });
    }

    const io=new IntersectionObserver(es=>es.forEach(x=>{
      if(x.isIntersecting){x.target.classList.add('fx-in');io.unobserve(x.target)}
    }),{threshold:.08});

    document.querySelectorAll('.landing-more section,.file-card,.about-copy>*').forEach((x,i)=>{
      x.classList.add('fx-reveal');
      x.style.transitionDelay=Math.min(i*45,180)+'ms';
      io.observe(x);
    });

    new MutationObserver(()=>document.querySelectorAll('.result-card,.blueprint-v2').forEach(x=>{
      if(!x.dataset.fx){x.dataset.fx='1';x.classList.add('fx-reveal');io.observe(x)}
    })).observe(document.body,{subtree:true,childList:true});

    document.addEventListener('click',e=>{
      if(!e.target.closest('#lockBtn'))return;
      setTimeout(()=>{
        const stamp=document.querySelector('#revealStamp')?.textContent||'';
        document.body.classList.remove('fx-caught','fx-missed','fx-flash');
        void document.body.offsetWidth;
        document.body.classList.add('fx-flash',stamp.includes('CAUGHT')?'fx-caught':'fx-missed');
        setTimeout(()=>document.body.classList.remove('fx-flash','fx-caught','fx-missed'),360);
      },30);
    },true);
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();