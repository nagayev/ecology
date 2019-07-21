import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Planet from './panels/Planet';
import QuestPage from './panels/QuestPage';
import ProblemPage from './panels/ProblemPage';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					console.log('Get info about user');
					this.setState({ fetchedUser: e.detail.data });
					break;
				/*
				case 'VKWebAppGeodataResult':
					console.log(`Get user coords: ${e}`); */
				default:
					console.log(`[Debug] ${e.detail.type}`);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Planet id="planet" go={this.go} />
				<QuestPage id="quest" go={this.go} />
				<ProblemPage id="problem" go={this.go} />
			</View>
		);
	}
}

export default App;
