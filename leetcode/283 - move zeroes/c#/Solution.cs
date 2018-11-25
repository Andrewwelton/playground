public class Solution {
    public void MoveZeroes(int[] nums) {
        int zeroSize = 0;
        for(int i = 0; i < nums.Length; i++) {
            if(nums[i] == 0) {
                zeroSize++;
            } else {
                int curNum = nums[i];
                nums[i] = 0;
                nums[i - zeroSize] = curNum;
            }
        }
    }
}