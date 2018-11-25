/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> traversal = new List<int>();
        Traverse(root, traversal);
        return traversal;
    }
    
    private void Traverse(TreeNode root, IList<int> traversal) {
        if(root == null) {
            return;
        }
        Traverse(root.left, traversal);
        traversal.Add(root.val);
        Traverse(root.right, traversal);
    }
}