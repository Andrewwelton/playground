public class Solution {
    public string ReverseString(string s) {
        char[] charArray = s.ToCharArray();
        for(int i = 0, j = charArray.Length - 1; i <= j; i++, j--) {
            char first = charArray[i];
            char second = charArray[j];
            charArray[j] = first;
            charArray[i] = second;
        }
        
        return new string(charArray);
    }
}