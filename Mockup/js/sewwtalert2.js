// 先定義 showModalBtn
const showModalBtn = document.getElementById('showModalBtn'); // 假設這是顯示模態對話框的按鈕

const messageDivs = document.querySelectorAll('.message');

messageDivs.forEach(messageDiv => {
    const messageImg = messageDiv.querySelector('img');

    messageDiv.addEventListener('click', () => {
        Swal.fire({
            html: `<div class="post"><img src="${messageImg.src}" alt="Selected Image" class="post-pic"><br><span class="post-text">You clicked the image!</span></div>`,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            showConfirmButton: false, // 正確的屬性名稱是 showConfirmButton
            confirmButtonText: `<div class="post-icon"><span class="material-symbols-outlined">favorite</span></div>`,
            confirmButtonColor: 'transparent', 
        });
    });
});

// 綁定顯示模態對話框的按鈕事件
showModalBtn.addEventListener('click', () => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, do it!',
        cancelButtonText: 'No, cancel!',
    });
});