import{M as e}from"./chunks/mermaid.CHql-oLN.js";import{c as r,j as s,a,G as n,w as i,o}from"./chunks/framework.D-WqjATM.js";const u=JSON.parse('{"title":"Database","description":"","frontmatter":{},"headers":[],"relativePath":"projects/starter/database.md","filePath":"projects/starter/database.md"}'),d={name:"projects/starter/database.md"},b=Object.assign(d,{setup(l){return(m,t)=>(o(),r("div",null,[t[1]||(t[1]=s("h1",{id:"database",tabindex:"-1"},[a("Database "),s("a",{class:"header-anchor",href:"#database","aria-label":'Permalink to "Database"'},"​")],-1)),t[2]||(t[2]=s("p",null,"В качестве базы данный используется YDB.",-1)),n(e,null,{default:i(()=>t[0]||(t[0]=[s("pre",{class:".mermaid"},`		erDiagram
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
	`,-1)])),_:1}),t[3]||(t[3]=s("h2",{id:"s3",tabindex:"-1"},[a("S3 "),s("a",{class:"header-anchor",href:"#s3","aria-label":'Permalink to "S3"'},"​")],-1)),t[4]||(t[4]=s("p",null,"Помимо БД используется s3 для хранения файлов",-1))]))}});export{u as __pageData,b as default};
