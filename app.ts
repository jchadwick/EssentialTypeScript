function countdown({ 
    initial, 
    final: final = 0, 
    interval: interval = 1, 
    initial: current 
}) {
    
    while (current > final) {
        console.log(current);
        current -= interval;
    }

}
