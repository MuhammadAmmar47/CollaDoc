
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 513, hash: 'fb4f833c75ed7d3697b4c500c0db3831b4c8f5ef1d4c59e74d7c52efccd5a525', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1026, hash: '800504a17c7cf990ab13607cf007e74732c4e4996d0240a98d9167396477560a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20849, hash: '824d517ff1471a111216316418dc3eae84ee61a38f3b90c4711cab92dc74bc25', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
