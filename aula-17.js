function teste(key) {
    switch (key) {
        case 'Julio':
            return 'Julio é o nome.'
        case 'Jose':
            console.log('Jose é o nome.');
            break;
        case 'Joao':
            console.log('Joao é o nome.');
            break;
        default:
            console.log('Não tem nome.');
            break;    
    }
}

teste('');