var container = document.getElementById('container');

function Counter(el) {

    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', 
        (event) => el.innerHTML = (this.count += 1))
}

new Counter(container);

var filtered = [1,2,3].filter(x => x > 0)