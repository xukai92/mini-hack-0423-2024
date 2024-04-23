function drawFromUniform(x_min: number, x_max: number) {
    let sample = x_min + Math.random() * x_max;
    return sample;
}

function drawFromNormal(mean: number, stdDev: number) {
    let u1 = Math.random();
    let u2 = Math.random();
    let z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z * stdDev + mean;
}

export { drawFromUniform, drawFromNormal };