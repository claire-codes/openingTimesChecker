import { h, Fragment } from 'preact';
import { useStore } from '@nanostores/preact';
import { dayOfTheWeek } from '../storesStore';
import './StoreList.css';
import Store from "./Store";

export default function StoreList({ data }) {

	const $whichDay = useStore(dayOfTheWeek);

	console.log($whichDay);


	return (
		<>
			{$whichDay}
			<div class="list">
				{data.stores.map(s => (<Store data={s} />))}
			</div>
		</>
	);
};