const ul = document.querySelector('#links');
const baseURL = "https://osadare.github.io/wdd230/";
const linksURL = "https://osadare.github.io/wdd230/data/links.json";

async function apiFetch(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);

        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

};

apiFetch(linksURL);

function displayLinks(weeks) {
    weeks.forEach((week) => {


        let hli = document.createElement('li');
        let h3 = document.createElement('h3');

        h3.textContent = `${week.week}:`;
        hli.appendChild(h3);
        ul.appendChild(hli);

        week.links.forEach((link) => {
            let li = document.createElement('li');
            let a = document.createElement('a');

            a.setAttribute('href', `${baseURL}${link.url}`);
            a.textContent = link.title;

            li.appendChild(a)
            ul.appendChild(li)
        });
    });
};