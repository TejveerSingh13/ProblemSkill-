/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Step 1: Initialize pointers
  let tortoise = head;
  let hare = head;

  // Step 2: Find the cycle
  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    // Step 3: Cycle detected
    if (tortoise === hare) {
      // Step 5: Reset tortoise to head
      tortoise = head;

      // Step 6: Find the node where the cycle starts
      while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
      }

      // Step 7: Return the node where the cycle starts
      return tortoise;
    }
  }

  // Step 4: No cycle found
  return null;
};