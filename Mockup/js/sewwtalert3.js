
   
const messageDiv = document.querySelectorAll('message');
       

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

        messageDiv.forEach(button => {('click', () => {
            Swal.fire({
                html: `<div class="post"><img src="${messageImg.src}" alt="Selected Image" class="post-pic"><br><span class="post-text">You clicked the image!</span></div>`,
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                showconfirmButton: false,
                confirmButtonText: ` <div class="post-icon"><span class="material-symbols-outlined">favorite</span></div>`,
                confirmButtonColor: 'transparent', 
            });
        });
        });
  