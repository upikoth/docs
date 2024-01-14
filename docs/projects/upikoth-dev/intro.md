<script setup>
import Mermaid from '../../.vitepress/components/mermaid.vue'
</script>

# Upikoth.dev

- [upikoth.dev](https://upikoth.dev) - документация
- [starter.upikoth.dev](https://starter.upikoth.dev) - проект starter
- [leaders2023.upikoth.dev](https://leaders2023.upikoth.dev) - проект leaders2023

Все проекты размещены на этом домене или его поддоменах

Все проекты размещены на одном VPS сервере: main - 87.242.121.175

<mermaid>
	<pre class='.mermaid'>
		flowchart
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
					127.0.0.1:8080,
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
			subgraph starter.upikoth.dev
			id10
			id11
			end
	</pre>
</mermaid>
