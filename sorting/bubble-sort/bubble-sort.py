def bubble_sort(array):
    n = len(array)
    had_to_sort = True

    while had_to_sort:
        # Initially set had_to_sort to False on each new pass
        had_to_sort = False
        # Loop through the array to compare adjacent elements
        for i in range(1, n):
            # If the previous element is greater than the current element, swap them
            if array[i - 1] > array[i]:
                array[i], array[i - 1] = array[i - 1], array[i]
                # Since a swap occurred, we may need to sort more
                had_to_sort = True
    # Return the sorted array
    return array

# Test the bubble sort function
test1 = [8, 5, 2, 9, 5, 6, 3]
print("Sorted array:", bubble_sort(test1))
