import React from 'react'
import FirstComponet from "./components/FirstComponent"
import SecondComponet from "./components/SecondComponet"
import NameComponet from "./components/NameComponent"

class App extends React.Component {


	render() {
		return (
			<div>
				<FirstComponet/>
			     <SecondComponet/>
				<NameComponet/>
			</div>
		) 
	}
}


export default App;

