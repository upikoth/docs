<template>
	<!--
		Класс .mermaid задается в прокидываемых слотах компонента, а не в самом компоненте специально.
		Иначе при билде добавляются дополнительные символы и диаграммы не отображаются при перезагрузке
		страцицы с диаграммой. Из-за дополнительных симоволов происходит ошибка парсинга синтаксиса mermaid.
	-->
	<slot></slot>
</template>

<script>
import mermaid from 'mermaid'

export default {
	mounted() {
		mermaid.initialize({
			startOnLoad: true,
			theme: 'dark'
		});

		mermaid.init();
	}
};
</script>
