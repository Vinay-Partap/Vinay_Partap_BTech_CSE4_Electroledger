document.getElementById('category').addEventListener('input', function() {
    const categoryFilter = this.value.toLowerCase();
    const transactionItems = document.querySelectorAll('.transaction-item');
  
    transactionItems.forEach(item => {
      const categoryText = item.querySelector('.left div').textContent.toLowerCase();
      if (categoryText.includes(categoryFilter)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });