

var testBoard = JSON.parse('{"board_name": "test_board_1","lists": [{ "list_name": "test_list_1","cards": [{"card_name": "test_card", "desc": "test"}]},{"list_name": "test_list_2","cards": [{ "card_name": "test_card","desc": "test"},{"card_name": "test_card", "desc": "test"}]}]}');


var board = new Vue({
  el: '#board-name',
  data: testBoard
});


var list_display = new Vue({
  el: '#my-test',
  data: {
    lists: testBoard.lists
  }
})





console.log('ELO');
