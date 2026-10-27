// problem link: https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let allSumArr=[]
    traverseTree(root,0,allSumArr)
    let finalSum= allSumArr.reduce((acc,el)=>{
        return acc+el
    },0)
    return finalSum
};
const traverseTree= (node,prevSum,allSumArr)=>{
    let currentSum=prevSum*10+node.val
    if(node.left===null&&node.right===null){
        allSumArr.push(currentSum)
        return
    }
    if(node.left!==null){
        traverseTree(node.left,currentSum,allSumArr)
    }
    if(node.right!==null){
        traverseTree(node.right,currentSum,allSumArr)
    }
}