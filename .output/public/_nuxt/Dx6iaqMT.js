const a=defineNuxtMiddleware(e=>{const{$auth:t}=e.app;if(t.isAuthenticated)return e.redirect("/dashboard")});export{a as default};
