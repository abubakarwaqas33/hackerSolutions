Merge Sorted Array JavaScript (LeetCode)


You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/********** CODE SOLUTION HERE /************

var merge = function(nums1, m, nums2, n) {
   let sortedArr = [...nums1.splice(0, m), ...nums2.splice(0, n)];
   sortedArr.sort((num1, num2) => num1 - num2);
   nums1.splice(0, sortedArr.length, ...sortedArr);
};
