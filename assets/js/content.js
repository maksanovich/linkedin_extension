console.log('start!!!');

const link = document.createElement('script');
link.src = chrome.runtime.getURL('../../tailwindcss.js');
document.head.appendChild(link);

fetch(chrome.runtime.getURL('content.html'))
    .then(response => response.text())
    .then(data => {
        console.log('success upload', data);
        const div = document.createElement('div');
        div.innerHTML = data;
        document.body.append(div);
        
        document.getElementById('in_modal_show').addEventListener('click', () => {
            document.getElementById('in_main').classList.add('slide-in-active');
        });

        document.getElementById('in_modal_close').addEventListener('click', () => {
            document.getElementById('in_main').classList.remove('slide-in-active');
        });
    })
    .catch(error => console.error('Error loading HTML:', error));


