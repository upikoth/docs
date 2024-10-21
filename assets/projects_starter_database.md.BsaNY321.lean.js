import{M as e}from"./chunks/mermaid.CHql-oLN.js";import{c as a,j as s,a as r,G as n,w as i,o}from"./chunks/framework.D-WqjATM.js";const _=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/database.md","filePath":"projects/starter/database.md"}'),d={name:"projects/starter/database.md"},u=Object.assign(d,{setup(l){return(m,t)=>(o(),a("div",null,[t[1]||(t[1]=s("h1",{id:"database",tabindex:"-1"},[r("Database "),s("a",{class:"header-anchor",href:"#database","aria-label":'Permalink to "Database"'},"​")],-1)),t[2]||(t[2]=s("p",null,"В качестве базы данный используется YDB.",-1)),n(e,null,{default:i(()=>t[0]||(t[0]=[s("pre",{class:".mermaid"},`		erDiagram
			registrations
			registrations {
				id string PK
				email string
				confirmation_token string
			}
			password_recovery_requests
			password_recovery_requests {
				id string PK
				email string
				confirmation_token string
			}
			sessions
			sessions {
				id string PK
				user_id string
				token string
				user_role string
			}
			users ||--o{ sessions : has
			users {
				id string PK
				email string
				password_hash string
				role string
			}
	`,-1)])),_:1})]))}});export{_ as __pageData,u as default};
