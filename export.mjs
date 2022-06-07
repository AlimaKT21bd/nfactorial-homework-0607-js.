let visitor = () => {
    let name = "Chel";
    let order = "Ramen";
    return name + " выбрал " + order;
}

let doYouHaveRamen = (product, list) => list.includes(product);

export {visitor, doYouHaveRamen as Rm};