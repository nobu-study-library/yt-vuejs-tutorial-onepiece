// Vueインスタンスを作成
const app1 = new Vue({
	// オプションオブジェクト
	el: '#ex1',
	data: {
		luffy: '海賊王になる男',
	},
});

const app2 = new Vue({
	el: '#ex2',
	data: {
		url: 'chopper.html',
		devil: '悪魔の実',
	},
});
