import { h, Fragment } from 'preact';
import './StoreList.css';
import Store from "./Store";

export default function StoreList({ data }) {

	return (
		<>
			<div class="list">
				{data.stores.map(s => (<Store data={s} />))}
			</div>
		</>
	);
};