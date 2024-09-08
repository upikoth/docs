import{M as e}from"./chunks/mermaid.CHql-oLN.js";import{c as i,a0 as n,G as a,w as r,o as d,j as o}from"./chunks/framework.D-WqjATM.js";const k=JSON.parse('{"title":"Upikoth.dev","description":"","frontmatter":{},"headers":[],"relativePath":"projects/upikoth-dev/intro.md","filePath":"projects/upikoth-dev/intro.md"}'),l={name:"projects/upikoth-dev/intro.md"},c=Object.assign(l,{setup(s){return(p,t)=>(d(),i("div",null,[t[1]||(t[1]=n('<h1 id="upikoth-dev" tabindex="-1">Upikoth.dev <a class="header-anchor" href="#upikoth-dev" aria-label="Permalink to &quot;Upikoth.dev&quot;">​</a></h1><ul><li><a href="https://upikoth.dev" target="_blank" rel="noreferrer">upikoth.dev</a> - документация</li><li><a href="https://starter.upikoth.dev" target="_blank" rel="noreferrer">starter.upikoth.dev</a> - проект starter</li><li><a href="https://leaders2023.upikoth.dev" target="_blank" rel="noreferrer">leaders2023.upikoth.dev</a> - проект leaders2023</li></ul><p>Все проекты размещены на этом домене или его поддоменах</p><p>Все проекты размещены на одном VPS сервере: main - 87.242.121.175</p><h2 id="деиствия-которые-сделаны-на-vps-после-его-аренды" tabindex="-1">Действия, которые сделаны на VPS после его аренды: <a class="header-anchor" href="#деиствия-которые-сделаны-на-vps-после-его-аренды" aria-label="Permalink to &quot;Действия, которые сделаны на VPS после его аренды:&quot;">​</a></h2><ul><li>настройка nginx</li><li>установка docker</li><li>установка portainer</li><li>установка grafana-agent</li></ul>',6)),a(e,null,{default:r(()=>t[0]||(t[0]=[o("pre",{class:".mermaid"},`		flowchart
			id1[Клиент]
			id2[Порт 80/443]
			id3[Порт 22]
			id4[Nginx]
			id5[upikoth.dev
					Docker container
					127.0.0.1:4000,
					name - docs]
			id6[Сервер
					main
					87.242.121.175]
			id7[Portainer
					87.242.121.175:9001,
					name - portainer_agent]
			id8[Порт 9001]
			id9[ssh]
			id10[.../
					Docker container
					127.0.0.1:4001,
					name - frontend]
			id11[.../api
					Docker container
					127.0.0.1:8000,
					name - backend]
			id1 --> id6
			id6 --> id2
			id6 --> id3
			id6 --> id8
			id3 --> id9
			id8 --> id7
			id2 --> id4
			id4 --> id5
			id4 --> id10
			id4 --> id11
			subgraph документация
			id5
			end
			subgraph starter.upikoth.dev
			id10
			id11
			end
	`,-1)])),_:1})]))}});export{k as __pageData,c as default};
