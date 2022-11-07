/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

export var deleteDuplicates = function(head) {

    // sets current node to be the head of the list
    let current = head;

    // runs loop until at the end of the list (null value)
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next
        } else{
            current = current.next
        }
    }
    return head;
};

