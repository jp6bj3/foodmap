
        const showModalBtn = document.querySelector('.showModal');
        const messageDiv = document.querySelectorAll('.message');

       messageDiv.forEach( messageDivElement => {
             messageDivElement.addEventListener('click', () => {
                const messageImg =  messageDivElement.querySelector('img');
                Swal.fire({
                    html: `<div class="post"><img src="${messageImg.src}" alt="Selected Image" class="post-pic"><br><span class="post-text">You clicked the image!</span></div>`,
                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    showconfirmButton: false,
                    confirmButtonText: `<div class="post-icon"><span class="material-symbols-outlined">favorite</span></div>`,
                    confirmButtonColor: 'transparent',
                });
            });
        });
  