const postfix = "_content_li";
const goTo = function(seqno) {
    window.open("https://cafe.naver.com/destinychild/" + seqno);
}
const writeData = function() {
    const sheet = document.createElement('style');
    const head = document.head || document.getElementsByTagName('head')[0];
    const classified = Object.keys(contents);

    for (let i in classified) {

        const keyword = classified[i];

        const sheet_str = "h2." + keyword + " { background: url('images/" + keyword + ".png') no-repeat;" +
            "    background-size: contain;" +
            "    padding-left: 40px; }";
        sheet.type='text/css';
        sheet.appendChild(document.createTextNode(sheet_str));
        head.appendChild(sheet);

        const ulId = keyword + postfix;
        const ulElement = document.getElementById(ulId);

        const liElements = [];
        const elements = contents[keyword];
        for (let i in elements) {
            const element = elements[i];
            // liElements.push("<li onclick='goTo(" + element.seqno + ")'>[" + element.category + "] " + element.summary + "(" + element.title + " by." + element.author+ ") - " + element.registered + "</li>")
            liElements.push("<li><span onclick='goTo(" + element.seqno + ")'>[" + categories[element.category].label + "] " + element.title + " - by." + element.author+ " - " + element.registered + "</span></li>")
        }

        ulElement.innerHTML = liElements.join("");
    }
}
writeData();