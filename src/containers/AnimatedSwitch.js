import React from "react";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";


export default class AnimatedSwitch extends Switch {
	constructor(props) {
		super(props);
		this.state = {
			animate: new Animated.Value(0)
		};
	}
	componentWillAppear(cb) {
		console.log("componentWillAppear");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			180
		);
		cb();
	}
	componentWillEnter(cb) {
		console.log("componentWillEnter");
		setTimeout(
			() => Animated.spring(this.state.animate, { toValue: 1 }).start(),
			180
		);
		cb();
	}
	componentWillLeave(cb) {
		console.log("componentWillLeave");
		Animated.spring(this.state.animate, { toValue: 0 }).start();
		setTimeout(() => cb(), 225);
	}
	render() {
		const style = {
			opacity: Animated.template`${this.state.animate}`,
			// transform: Animated.template`
			// 	translate3d(0,${this.state.animate.interpolate({
			// 	inputRange: [0, 1],
			// 	outputRange: ["112px", "0px"]
			// })},0)
			// `
		};
		return (
			<Animated.div style={style} className="animated-page-wrapper">
				{super.render()}
			</Animated.div>
		);
	}
};
