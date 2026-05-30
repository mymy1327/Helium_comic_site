const params =
    new URLSearchParams(
        window.location.search
    );

const mangaId =
    params.get("id");

const chapterId =
    parseInt(
        params.get("chap")
    );

    fetch("data/data.json")
.then(res => res.json())
.then(data => {

    const manga =
        data[mangaId];

    const chapter =
        manga.chapters.find(
            c => c.id === chapterId
        );

});

document.getElementById(
    "chapter-title"
).innerHTML =

`${manga.title}
 - ${chapter.title}

<span class="update-time">
(${chapter.date})
</span>`;

document.getElementById(
    "breadcrumb"
).innerHTML =

`
<a href="homepage.html">
Trang Chủ
</a>

&gt;

<a href="
comicpage.html?id=${mangaId}
">
${manga.title}
</a>

&gt;

${chapter.title}
`;

const reader =
    document.getElementById(
        "chapter-content"
    );

for(
    let i = 1;
    i <= chapter.pages;
    i++
){

    const page =
        String(i)
        .padStart(3,'0');

    reader.innerHTML += `
        <img
            src="
            ${chapter.folder}/${page}.jpg
            "
            loading="lazy"
            alt="page ${i}"
        >
    `;
}