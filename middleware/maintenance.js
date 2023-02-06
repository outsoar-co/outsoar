export default function ({ redirect, route }) {
    const isMaintenance = true;
    if (route.name === 'maintenance') {
        return true;
    }

    console.log('isMaintenance', 'isMaintenance', isMaintenance, route);
    // if (isMaintenance) {
    //     return redirect('/maintenance');
    // }
    // if (isMaintenance === false && route.path === '/maintenance') {
    //     return redirect('/');
    // }
}
