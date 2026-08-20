(()=>{
  const STORAGE_KEY='catchme_v02';
  const resetBtn=document.querySelector('#resetBtn');
  if(!resetBtn)return;

  resetBtn.onclick=()=>{
    if(!confirm('真的要清除全部章節、答案和藍圖？這不能復原。'))return;

    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('catchme_subject');

    // Reload from a clean URL so in-memory state and stale landing copy are reset too.
    const cleanUrl=location.pathname+location.search;
    location.replace(cleanUrl);
  };
})();