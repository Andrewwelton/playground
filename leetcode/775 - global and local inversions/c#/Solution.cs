public class Solution {
    public bool IsIdealPermutation(int[] A) {
        int n = A.Length;
        int globalInversions = 0;
        int localInversions = 0;
        for(int i = 0; i < n; i++) {
            if(i + 1 >= n) {
                break;
            }
            if(A[i] > A[i+1]) {
                localInversions++;
            }
            for(int j = i + 1; j < n; j++) {
                if(A[i] > A[j]) {
                    globalInversions++;
                }
            }
        }
        return globalInversions == localInversions;
    }
}