import { h, Fragment } from 'preact';
import './Store.css';

export default function Store({ data }) {
	console.log('hello', data.name);
	return (
		<>
			<div class="store">
				<h2>Hello {data.name}</h2>
				{data.openingTimes.map(d => 
					(<div><div>{d.day}</div></div>))
				}
			</div>
		</>
	);
}