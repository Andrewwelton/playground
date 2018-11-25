public class Solution {
    public IList<string> FizzBuzz(int n) {
        List<string> fizzBuzz = new List<string>();
        for(int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                fizzBuzz.Add("FizzBuzz");
                continue;
            }
            if (i % 3 == 0) {
                fizzBuzz.Add("Fizz");
                continue;
            }
            if (i % 5 == 0) {
                fizzBuzz.Add("Buzz");
                continue;
            }
            fizzBuzz.Add(i.ToString());
        }
        return fizzBuzz;
    }
}