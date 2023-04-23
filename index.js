// * Vueインスタンスを作成
const app1 = new Vue({
	// オプションオブジェクト
	el: '#ex1',
	data: {
		luffy: '海賊王になる男',
	},
});

// * v-bind
const app2 = new Vue({
	el: '#ex2',
	data: {
		url: 'chopper.html',
		devil: '悪魔の実',
	},
});

// * v-for
const app3 = new Vue({
	el: '#ex3',
	data: {
		four_emperors: ['シャンクス', 'カイドウ', 'ビックマム', '白ひげ'],
	},
});

const app4 = new Vue({
	el: '#ex4',
	data: {
		devil_fruits: {
			luffy: 'ゴムゴムの実',
			chopper: 'ヒトヒトの実',
			robin: 'ハナハナの実',
		},
	},
});

// * v-on
const app5 = new Vue({
	el: '#ex5',
	data: {
		devil: '悪魔の実',
		name: 'ゴムゴムの実',
	},
});

const app6 = new Vue({
	el: '#ex6',
	data: {
		devil: '悪魔の実',
		name: 'ゴムゴムの実',
	},
});
