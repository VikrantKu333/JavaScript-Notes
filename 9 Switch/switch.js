console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 0:
        console.log("This is Sunday");
        break;
    case 1:
        console.log("This is Monday");
        break;
    case 2:
        console.log("This is Tuesday");
        break;
    case 3:
        console.log("This is Wednesday");
        break;
    case 4:
        console.log("This is Thursday");
        break;
    case 5:
        console.log("This is Friday");
        break;
    case 6:
        console.log("Thi is Saturday");
        break;
    default:
        console.log("No information available for that day");
}