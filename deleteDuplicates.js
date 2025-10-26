// Given the head of a sorted linked list,
// delete all duplicates such that each element
// appears only once. Return the linked list sorted as well.

var list = [1, 1, 2, 3, 3];

function deleteDuplicates(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] == list[j]) {
        list.splice(list[j], 1);
      }
    }
  }
  console.log(list);
}

deleteDuplicates(list);
