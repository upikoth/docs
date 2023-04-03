<template>
	<!--
		Класс .mermaid задается в прокидываемых слотах компонента, а не в самом компоненте специально.
		Иначе при билде добавляются дополнительные символы и диаграммы не отображаются при перезагрузке
		страцицы с диаграммой. Из-за дополнительных симоволов происходит ошибка парсинга синтаксиса mermaid.
	-->
	<slot :key="key"></slot>
</template>

<script>
import mermaid from 'mermaid'

export default {
	data() {
		return {
			key: 0,
			switchButton: null,
		}
	},
	mounted() {
		mermaid.initialize({
			startOnLoad: true,
			theme: 'dark'
		});

		mermaid.init()

		this.switchButton = document.querySelector('.VPSwitch')
		this.subscribeSwichEvent()
	},
	beforeUnmount() {
		this.unsubscribeSwichEvent()
	},
	methods: {
		async updateTheme() {
			this.key += 1;

			await this.$el.nextElementSibling.removeAttribute('data-processed')

			mermaid.init({
				theme: this.getCurrentTheme()
			}, this.$el.nextElementSibling);
		},

		subscribeSwichEvent() {
			this.switchButton.addEventListener('click', this.updateTheme)
		},

		unsubscribeSwichEvent() {
			this.switchButton.removeEventListener('click', this.updateTheme)
		},

		getCurrentTheme() {
			const attributeValue = this.switchButton.getAttribute('aria-checked')
			return attributeValue === 'true' ? 'dark' : 'default'
		}
	}
};
</script>
