// シンプルな検索ボタンの動作例
document.querySelector('.search-bar button').addEventListener('click', function() {
    const query = document.querySelector('.search-bar input').value;
    alert(`検索キーワード: ${query}`);
});
