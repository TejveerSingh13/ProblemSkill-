/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/// Best way use 2 pointer on pointer increment by 1 and other by 2 when other reaches end 1 reaches mid.
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let list = new ListNode(0,head)
    const getCount = (l, i) => {
        if(i<0){      // i == -1
        let count = 0
            while(l){
                count ++
                l = l.next
            }
        return count
        } else {
            let count = 0
            while(l){
                count ++
                if(count === i) return l
                l = l.next
            }
        }
    }
    let count = getCount(list.next, -1)
    list = new ListNode(0,head)
    count%2 === 0 ? list = getCount(list.next, (count/2)+1) : list = getCount(list.next, Math.ceil(count/2))
    return list
};