function quicksort(arr) {
    function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
        return i + 1;
    }

    function quicksortRecursive(low, high) {
        if (low < high) {
            let pi = partition(low, high);
            quicksortRecursive(low, pi - 1);
            quicksortRecursive(pi + 1, high);
        }
    }

    quicksortRecursive(0, arr.length - 1);
    return arr;
}

// Test
const testArray = [10, 7, 8, 9, 1, 5];
console.log("Unsorted array:", testArray);
console.log("Sorted array:", quicksort([...testArray])); // Fazendo uma cópia para não modificar o original
