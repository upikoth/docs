<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'

onMounted(() => {
	(
		function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};

	// @ts-ignore
		m[i].l=1*new Date();
		for (var j = 0; j < document.scripts.length; j++) {
			if (document.scripts[j].src === r) {
				return;
			}
		}

	// @ts-ignore
		k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
	)(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

	// @ts-ignore
	ym(96194575, "init", {
		clickmap:true,
		trackLinks:true,
		accurateTrackBounce:true,
		webvisor:true
	});
})

const { Layout } = DefaultTheme
</script>

<template>
	<!-- Yandex.Metrika counter -->
	<noscript>
		<div>
			<img src="https://mc.yandex.ru/watch/96194575" style="position:absolute; left:-9999px;" alt="" />
		</div>
	</noscript>
	<!-- Yandex.Metrika counter -->

  <layout />
</template>
