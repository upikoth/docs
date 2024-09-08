import{M as r}from"./chunks/mermaid.CHql-oLN.js";import{c as n,j as e,a,G as i,w as s,a0 as o,o as l}from"./chunks/framework.D-WqjATM.js";const b=JSON.parse('{"title":"Starter","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/intro.md","filePath":"projects/starter/intro.md"}'),p={name:"projects/starter/intro.md"},k=Object.assign(p,{setup(d){return(u,t)=>(l(),n("div",null,[t[1]||(t[1]=e("h1",{id:"starter",tabindex:"-1"},[a("Starter "),e("a",{class:"header-anchor",href:"#starter","aria-label":'Permalink to "Starter"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Цель проекта: создать набор проектов, на основе которых можно будет быстро инициализировать новый проект и сразу начать разработку бизнес логики, а не заниматься настройками окружения.",-1)),t[3]||(t[3]=e("h2",{id:"архитектура",tabindex:"-1"},[a("Архитектура "),e("a",{class:"header-anchor",href:"#архитектура","aria-label":'Permalink to "Архитектура"'},"​")],-1)),i(r,null,{default:s(()=>t[0]||(t[0]=[e("pre",{class:".mermaid"},`		architecture-beta
			group internet(internet)[Browser]
			group api(cloud)[Yandex Cloud]
			group observability(cloud)[Observability]
			service frontend_app(internet)[Frontend App] in internet
			service gateway(internet)[Gateway] in api
			service backend_app(server)[Backend App] in api
			service ydb(database)[YDB] in api
			service ycp(server)[Cloud Postbox] in api
			service s3(database)[Object Storage] in api
			service sentry(server)[Sentry] in observability
			service smart_web_security(server)[Smart Web Security] in api
			frontend_app:R -- L:gateway
			frontend_app:T -- B:sentry
			gateway:R -- L:backend_app
			gateway:T -- B:s3
			gateway:B -- T:smart_web_security
			backend_app:R -- L:ydb
			backend_app:B -- T:ycp
			backend_app:T -- B:s3
			backend_app:T -- T:sentry
	`,-1)])),_:1}),t[4]||(t[4]=o('<h2 id="превью" tabindex="-1">Превью <a class="header-anchor" href="#превью" aria-label="Permalink to &quot;Превью&quot;">​</a></h2><ul><li>Приложение: <a href="https://starter.upikoth.dev" target="_blank" rel="noreferrer">https://starter.upikoth.dev</a></li></ul><h2 id="стек" tabindex="-1">Стек <a class="header-anchor" href="#стек" aria-label="Permalink to &quot;Стек&quot;">​</a></h2><ul><li>Frontend: Vue3 + Quasar</li><li>Backend: Go + Ydb</li><li>yandex.cloud: object storage (s3), cloud postbox, container registry, serverless containers</li></ul><h2 id="task-manager" tabindex="-1">Task manager <a class="header-anchor" href="#task-manager" aria-label="Permalink to &quot;Task manager&quot;">​</a></h2><ul><li><a href="https://github.com/users/upikoth/projects/2" target="_blank" rel="noreferrer">https://github.com/users/upikoth/projects/2</a></li></ul><h2 id="ссылки-на-репозитории" tabindex="-1">Ссылки на репозитории <a class="header-anchor" href="#ссылки-на-репозитории" aria-label="Permalink to &quot;Ссылки на репозитории&quot;">​</a></h2><ul><li>Frontend: <a href="https://github.com/upikoth/starter-vue3" target="_blank" rel="noreferrer">https://github.com/upikoth/starter-vue3</a></li><li>Backend: <a href="https://github.com/upikoth/starter-go" target="_blank" rel="noreferrer">https://github.com/upikoth/starter-go</a></li></ul><h2 id="полезные-ссылки-по-проекту" tabindex="-1">Полезные ссылки по проекту <a class="header-anchor" href="#полезные-ссылки-по-проекту" aria-label="Permalink to &quot;Полезные ссылки по проекту&quot;">​</a></h2><ul><li><a href="https://upikoth.sentry.io/projects/starter-vue3/?project=4505991751598080" target="_blank" rel="noreferrer">Sentry starter</a></li><li><a href="https://starter.upikoth.dev/api/docs/app" target="_blank" rel="noreferrer">Swagger</a></li></ul>',10))]))}});export{b as __pageData,k as default};
