const a=defineNuxtMiddleware(e=>{const{$auth:t}=e.app;if(!t.isAuthenticated)return e.redirect("/login")});export{a as default};
