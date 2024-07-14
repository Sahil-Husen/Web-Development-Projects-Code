let data = [
    {
        name: 'Amna',
        src: 'https://plus.unsplash.com/premium_photo-1677966884057-ec2e31ce61d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29yZ2VvdXMlMjBnaXJsJTIwbXVzbGltfGVufDB8fDB8fHww'
    },
    {
        name: 'Rafiya',
        src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdvcmdlb3VzJTIwZ2lybCUyMG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D '
    },
    {
        name: 'Zohra',
        src: 'https://plus.unsplash.com/premium_photo-1677966145689-2f2ba6f8782b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29yZ2VvdXMlMjBnaXJsJTIwbXVzbGltfGVufDB8fDB8fHww'
    },
    {
        name: 'Zainab',
        src: 'https://plus.unsplash.com/premium_photo-1677966720102-85368db94c5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdvcmdlb3VzJTIwZ2lybCUyMG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D'
    },


    {
        name: 'Sayyeda',
        src: 'https://plus.unsplash.com/premium_photo-1663957887050-2882a02018aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdvcmdlb3VzJTIwbXVzbGltbCUyMGdpcmxzfGVufDB8fDB8fHww'
    },
    {
        name: 'Mahak',
        src: 'https://plus.unsplash.com/premium_photo-1683121207885-5ab19fadce58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdvcmdlb3VzJTIwbXVzbGltbCUyMGdpcmxzfGVufDB8fDB8fHww'
    },
    {
        name: 'Kausar',
        src: 'https://plus.unsplash.com/premium_photo-1676925808017-37319d452584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdvcmdlb3VzJTIwZ2lybCUyMG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name: 'Habiba',
        src: 'https://plus.unsplash.com/premium_photo-1682096847586-e298c00e6074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGdvcmdlb3VzJTIwZ2lybCUyMG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D'
    },
];

const people = document.querySelector('.people');
const inputs = document.querySelector('#input');
let pers = "";

data.forEach((item) => {
    pers += `<div class="img">
        <img src=${item.src} alt="">
        <h3>${item.name}</h3>
    </div>`;
});

people.innerHTML = pers;

inputs.addEventListener('input', () => {
    let matching = data.filter(function (e) {
        return e.name.toLowerCase().startsWith(inputs.value.toLowerCase());
    });
    // console.clear();
    // console.log(matching);


    let newUsers = "";
    matching.forEach((item) => {
        newUsers += `<div class="img">
            <img src=${item.src} alt="">
            <h3>${item.name}</h3>
        </div>`;
    });

    people.innerHTML = newUsers;




});
