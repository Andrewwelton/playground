public class Solution {
    public string DecodeAtIndex(string S, int K) {
        if(K == 1) {
            return new string(S[0], 1);
        }
        
        string tape = "";
        for(int i = 0; i < S.Length; i++) {
            double numberValue = Char.GetNumericValue(S[i]);
            if(numberValue >= 2) {
                string currentTape = tape;
                for(int j = 0; j < numberValue - 1; j++) {
                    tape = tape + currentTape;
                }
            } else {
                tape = tape + S[i];
            }
            if(tape.Length > K) {
                return new string(tape[K-1], 1);
            }
        }
        return new string(tape[K-1], 1);
    }
}