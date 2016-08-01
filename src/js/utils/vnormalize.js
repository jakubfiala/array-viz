export default function vnormalize(arr, scale) {
	var max = -Infinity;
	for (var index in arr) {
		if (arr[index] > max && arr[index] != 0) max = arr[index];
	}
	max = max == -Infinity ? 1 : max;
	for (var index in arr) {
		arr[index] = arr[index] / max * (scale || 1);
	}
	return arr;
}
