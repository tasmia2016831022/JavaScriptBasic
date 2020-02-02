const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Normal');

    // Interpolated
    console.log('Hello %s','world');

    // Styled
    console.log('%c great text','font-size: 40px; background: red');

    // warning!
    console.warn('Warning!!')

    // Error :|
    console.error('ERR')

    // Info
    console.info('Info');

    // Testing
    console.assert(1===2,'wrong')

    // clearing
    console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);

    // Grouping together
    console.clear();

    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
            console.log(`This is ${dog.name}`);
            console.log(`His age is ${dog.age} years`);
        console.groupEnd(`${dog.name}`);

    });

    // counting
    console.count('clear');

    // timing

    console.clear();

    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });