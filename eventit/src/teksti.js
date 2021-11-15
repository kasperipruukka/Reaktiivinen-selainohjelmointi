const Teksti = ({nimi}) => {

    // Jos nimi on Kasperi
    if (nimi === 'Kasperi') {
        return <div>Reaktiivinen selainohjelmointi</div>;
    }

    // Jos nimi on Werner
    if (nimi === 'Werner') {
        return <div>Web-ohjelmointi</div>;
    }

    // Muuten

    return <div>Opettajat opettaa asioita</div>;
};

export default Teksti;