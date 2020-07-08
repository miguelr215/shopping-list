/*
SHOPPING LIST
must allow these operations:
- enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
- check and uncheck items on the list by clicking the "Check" button
- permanently remove items from the list
*/

$(function(){
    $('#js-shopping-list-form').on('submit', function(event){
        // prevent form default
        event.preventDefault();
        // set variables
        let newItem = $('#shopping-list-entry').val();
        // add new item to list = append to ul
        $('.shopping-list').append(
            '<li><span class="shopping-item">' + newItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></li>'
        );
        // clear input after entry
        $('#shopping-list-entry').val(null);
    });

    // check and uncheck = toggle between shopping item checked class when clicked
    $('li').on('click', '.shopping-item-toggle', function(event){
        let targetItem = $(event.currentTarget);
        let liChild = targetItem.parent();
        let closestSpan = liChild.parent();
        closestSpan.toggleClass('shopping-item__checked');
    });

    // delete li where delete button was clicked
    $('li').on('click', '.shopping-item-delete', function(event){
        let deleteItem = $(event.currentTarget).parent().parent();
        deleteItem.remove();
    });
});