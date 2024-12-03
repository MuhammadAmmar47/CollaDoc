
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/CollaDoc"
  }
],
  assets: new Map([
['index.csr.html', {size: 522, hash: 'b0051862d207a3b3685184698599de881957d14bc1a47e425c0da0cd3ba2b56f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1035, hash: '098a365ec0f20589595179dac7774670a97e93ea0a8768dcf1c77149320ffe4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20858, hash: 'd6619eb7fef781497aa58bf3dcfc1b30f0456152eefdba0ba68d4fa5bbc1b36c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
