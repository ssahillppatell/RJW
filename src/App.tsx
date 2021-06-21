import { useState } from 'react';
import { useEffect } from 'react';
import Joyride, { Step } from 'react-joyride';

import { ReactComponent as Icon } from './assets/images/icon.svg'

import './App.css';

const URL = 'https://60cb594321337e0017e4484b.mockapi.io/api/v1/target'

let tempSteps: any;
function App() {
    const [steps, setSteps] = useState([] as Step[])

	useEffect(() => {
		const fetchSteps = () => {
			fetch(URL).then((res) => {
				return res.json()
			}).then((res) => {
				tempSteps = res;
				const st = tempSteps.map((s: any) => {
					return {
						target: s.cssSelector,
						title: (
							<>
								{/* <img src={'src/icon-student.svg'} alt = "Student" /> */}
								<Icon />
								<br />
								<span>{s.title}</span>
							</>
						),
						content: s.content,
					}
				});
		
				console.log(st)
				setSteps(st)
			})
		}
		
		fetchSteps();
	}, [])
    
	return (
        <Joyride
            continuous={true}
            scrollToFirstStep={true}
            showProgress={false}
            showSkipButton={false}
            steps={steps}
        />
    );
}

export default App;