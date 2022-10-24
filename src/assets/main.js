const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UC9k0tTsh_qStx0HPuPftSsg';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b41cd3b488msh6f8a8d3e3726d7dp1225bejsndecefd765185',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

// cuando se ejectue el archivo se ejecuta esta funcion de forma automatica
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video =>`
            <div class="group relative">
                <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                </div>
            </div>
        `).slice(0.4).join('')}
        `;
        content,innerHTML = view;
    }catch (error) {
        console.log(error);
    }
})();