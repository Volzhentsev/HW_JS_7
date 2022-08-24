function tabSwitch() {
    let tab =Array.from(document.querySelectorAll(".tab"))
        for (let i = 0; i < tab.length; i++) {
            tab[i].onclick = () => {
                flip(i)
        }
    }
}

function flip(index) {
    const tab = Array.from(document.querySelectorAll(".tab"));
    const content = Array.from(document.querySelectorAll(".tab__content"));
    for (let i = 0; i < tab.length; i++) {
        tab[i]['className'] = 'tab';
        content[i]['className'] = 'tab__content';
        tab[index]['className'] = 'tab tab_active';
        content[index]['className'] = 'tab__content tab__content_active';
    }
}

tabSwitch();

