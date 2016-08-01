export default function vadd(arr, offset) {
	for (let i in arr) {
		arr[i] += offset;
	}
	return arr;
}
