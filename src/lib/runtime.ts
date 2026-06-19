// Inline script: detects OS theme on first paint.
// Stored in localStorage under "theme". Re-applied on each load.
export const initScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', t === 'dark');
    document.documentElement.dataset.theme = t;
  } catch(e) {}
})();
`;
