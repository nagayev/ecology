import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Planet from './panels/Planet';
import QuestPage from './panels/QuestPage';
import ProblemPage from './panels/ProblemPage'

/*
const App = props => {
	const handler=(e)=>go(e.currentTarget.dataset.to);
	const [activePanel,go]=useState('home')
	return (
		<View activePanel={activePanel}>
			<Planet id="home" go={go} />
			<QuestPage id="quest" go={go} type="plastic" />
			<ProblemPage id="problem" go={go} />
		</View>
	);
};
*/ 
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home'
		};
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Planet id="home" go={this.go} />
				<QuestPage id="quest" go={this.go} type="plastic" />
				<ProblemPage id="problem" go={this.go} />
			</View>
		);
	}
};

export default App;
