public class Solution {
    public int SingleNumber(int[] nums) {
        Dictionary<int, int> occurrences = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            if(occurrences.ContainsKey(nums[i])) {
                occurrences[nums[i]] += 1;
            } else {
                occurrences[nums[i]] = 1;
            }
        }
        foreach(int key in occurrences.Keys) {
            if(occurrences[key] == 1) {
                return key;
            }
        }
        return -1;
    }
}