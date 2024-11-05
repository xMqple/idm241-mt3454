// Select the checkbox
const checkbox = document.getElementById('check');

// Add an event listener to toggle the checkbox state
document.querySelector('.like-icon').addEventListener('click', function() {
    checkbox.checked = !checkbox.checked; // Toggle the checkbox
});
  