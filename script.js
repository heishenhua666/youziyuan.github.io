/**
 * 处理联系表单提交
 * @param {Event} event - 表单提交事件
 */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默认提交行为
    alert('感谢您的联系，' + document.getElementById('name').value + '!');
});
