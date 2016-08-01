import vadd from './vadd'

export default function vdeneg(arr) {
	let min = 0;

	for (let value of arr) {
		min = min > value ? value : min;
	}

	if (min < 0) return vadd(arr, Math.abs(min));
	else 		 return arr;
}
