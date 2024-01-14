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
			id1 --> id2
			id1 --> id3
			id2 --> id4
	</pre>
</mermaid>
