
 const showModalBtn = document.getElementById('showModal');
    const messageDiv = document.getElementById('message');
    const messageImg = messageDiv.querySelector('img');

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

    messageDiv.addEventListener('click', () => {
      Swal.fire({
        html: `<img src="${messageImg.src}" alt="Selected Image" width="200"><br><span>You clicked the image!</span>`,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'OK',
        confirmButtonColor: 'transparent', // 設置確認按鈕背景為透明
      });
    });
