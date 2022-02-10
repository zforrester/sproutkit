// fetch().then(res => re)

// import colors from './colors';

// console.log(colors)

// const swatchData = colors

const swatchData = [
    {'white': '#fff'},
    {'black': '#000'},

    {'truegray-50': 'hsl(0, 0%, 98%)'},
    {'truegray-100': 'hsl(0, 0%, 95%)'},
    {'truegray-200': 'hsl(0, 0%, 90%)'},
    {'truegray-300': 'hsl(0, 0%, 85%)'},
    {'truegray-400': 'hsl(0, 0%, 70%)'},
    {'truegray-500': 'hsl(0, 0%, 50%)'},
    {'truegray-600': 'hsl(0, 0%, 40%)'},
    {'truegray-700': 'hsl(0, 0%, 35%)'},
    {'truegray-800': 'hsl(0, 0%, 20%)'},
    {'truegray-900': 'hsl(0, 0%, 10%)'},


    {'gray-50': 'hsl(220, 20%, 98%)'},
    {'gray-100': 'hsl(220, 10%, 95%)'},
    {'gray-200': 'hsl(220, 15%, 90%)'},
    {'gray-300': 'hsl(220, 20%, 85%)'},
    {'gray-400': 'hsl(220, 20%, 70%)'},
    {'gray-500': 'hsl(220, 20%, 50%)'},
    {'gray-600': 'hsl(220, 20%, 40%)'},
    {'gray-700': 'hsl(220, 20%, 35%)'},
    {'gray-800': 'hsl(220, 20%, 20%)'},
    {'gray-900': 'hsl(220, 20%, 10%)'},


    {'red-50': 'hsl(0, 100%, 98%)'},
    {'red-100': 'hsl(0, 90%, 90%)'},
    {'red-200': 'hsl(0, 80%, 80%)'},
    {'red-300': 'hsl(0, 80%, 70%)'},
    {'red-400': 'hsl(0, 80%, 60%)'},
    {'red-500': 'hsl(0, 80%, 50%)'},
    {'red-600': 'hsl(0, 80%, 40%)'},
    {'red-700': 'hsl(0, 80%, 30%)'},
    {'red-800': 'hsl(0, 90%, 20%)'},
    {'red-900': 'hsl(0, 100%, 10%)'},


    {'tangerine-50': 'hsl(18, 100%, 98%)'},
    {'tangerine-100': 'hsl(18, 90%, 90%)'},
    {'tangerine-200': 'hsl(18, 80%, 80%)'},
    {'tangerine-300': 'hsl(18, 80%, 70%)'},
    {'tangerine-400': 'hsl(18, 80%, 60%)'},
    {'tangerine-500': 'hsl(18, 80%, 50%)'},
    {'tangerine-600': 'hsl(18, 80%, 40%)'},
    {'tangerine-700': 'hsl(18, 80%, 30%)'},
    {'tangerine-800': 'hsl(18, 90%, 20%)'},
    {'tangerine-900': 'hsl(18, 100%, 10%)'},


    {'orange-50': 'hsl(36, 100%, 98%)'},
    {'orange-100': 'hsl(36, 90%, 90%)'},
    {'orange-200': 'hsl(36, 80%, 80%)'},
    {'orange-300': 'hsl(36, 80%, 70%)'},
    {'orange-400': 'hsl(36, 80%, 60%)'},
    {'orange-500': 'hsl(36, 80%, 50%)'},
    {'orange-600': 'hsl(36, 80%, 40%)'},
    {'orange-700': 'hsl(36, 80%, 30%)'},
    {'orange-800': 'hsl(36, 90%, 20%)'},
    {'orange-900': 'hsl(36, 100%, 10%)'},


    {'yellow-50': 'hsl(54, 100%, 98%)'},
    {'yellow-100': 'hsl(54, 90%, 90%)'},
    {'yellow-200': 'hsl(54, 80%, 80%)'},
    {'yellow-300': 'hsl(54, 80%, 70%)'},
    {'yellow-400': 'hsl(54, 80%, 60%)'},
    {'yellow-500': 'hsl(54, 80%, 50%)'},
    {'yellow-600': 'hsl(54, 80%, 40%)'},
    {'yellow-700': 'hsl(54, 80%, 30%)'},
    {'yellow-800': 'hsl(54, 90%, 20%)'},
    {'yellow-900': 'hsl(54, 100%, 10%)'},


    {'lime-50': 'hsl(72, 100%, 98%)'},
    {'lime-100': 'hsl(72, 90%, 90%)'},
    {'lime-200': 'hsl(72, 80%, 80%)'},
    {'lime-300': 'hsl(72, 80%, 70%)'},
    {'lime-400': 'hsl(72, 80%, 60%)'},
    {'lime-500': 'hsl(72, 80%, 50%)'},
    {'lime-600': 'hsl(72, 80%, 40%)'},
    {'lime-700': 'hsl(72, 80%, 30%)'},
    {'lime-800': 'hsl(72, 90%, 20%)'},
    {'lime-900': 'hsl(72, 100%, 10%)'},


    {'green-50': 'hsl(90, 100%, 98%)'},
    {'green-100': 'hsl(90, 90%, 90%)'},
    {'green-200': 'hsl(90, 80%, 80%)'},
    {'green-300': 'hsl(90, 80%, 70%)'},
    {'green-400': 'hsl(90, 80%, 60%)'},
    {'green-500': 'hsl(90, 80%, 50%)'},
    {'green-600': 'hsl(90, 80%, 40%)'},
    {'green-700': 'hsl(90, 80%, 30%)'},
    {'green-800': 'hsl(90, 90%, 20%)'},
    {'green-900': 'hsl(90, 100%, 10%)'},


    {'neon-green-50': 'hsl(108, 100%, 98%)'},
    {'neon-green-100': 'hsl(108, 90%, 90%)'},
    {'neon-green-200': 'hsl(108, 80%, 80%)'},
    {'neon-green-300': 'hsl(108, 80%, 70%)'},
    {'neon-green-400': 'hsl(108, 80%, 60%)'},
    {'neon-green-500': 'hsl(108, 80%, 50%)'},
    {'neon-green-600': 'hsl(108, 80%, 40%)'},
    {'neon-green-700': 'hsl(108, 80%, 30%)'},
    {'neon-green-800': 'hsl(108, 90%, 20%)'},
    {'neon-green-900': 'hsl(108, 100%, 10%)'},


    {'electric-green-50': 'hsl(126, 100%, 98%)'},
    {'electric-green-100': 'hsl(126, 90%, 90%)'},
    {'electric-green-200': 'hsl(126, 80%, 80%)'},
    {'electric-green-300': 'hsl(126, 80%, 70%)'},
    {'electric-green-400': 'hsl(126, 80%, 60%)'},
    {'electric-green-500': 'hsl(126, 80%, 50%)'},
    {'electric-green-600': 'hsl(126, 80%, 40%)'},
    {'electric-green-700': 'hsl(126, 80%, 30%)'},
    {'electric-green-800': 'hsl(126, 90%, 20%)'},
    {'electric-green-900': 'hsl(126, 100%, 10%)'},


    {'sea-foam-50': 'hsl(144, 100%, 98%)'},
    {'sea-foam-100': 'hsl(144, 90%, 90%)'},
    {'sea-foam-200': 'hsl(144, 80%, 80%)'},
    {'sea-foam-300': 'hsl(144, 80%, 70%)'},
    {'sea-foam-400': 'hsl(144, 80%, 60%)'},
    {'sea-foam-500': 'hsl(144, 80%, 50%)'},
    {'sea-foam-600': 'hsl(144, 80%, 40%)'},
    {'sea-foam-700': 'hsl(144, 80%, 30%)'},
    {'sea-foam-800': 'hsl(144, 90%, 20%)'},
    {'sea-foam-900': 'hsl(144, 100%, 10%)'},


    {'teal-50': 'hsl(162, 100%, 98%)'},
    {'teal-100': 'hsl(162, 90%, 90%)'},
    {'teal-200': 'hsl(162, 80%, 80%)'},
    {'teal-300': 'hsl(162, 80%, 70%)'},
    {'teal-400': 'hsl(162, 80%, 60%)'},
    {'teal-500': 'hsl(162, 80%, 50%)'},
    {'teal-600': 'hsl(162, 80%, 40%)'},
    {'teal-700': 'hsl(162, 80%, 30%)'},
    {'teal-800': 'hsl(162, 90%, 20%)'},
    {'teal-900': 'hsl(162, 100%, 10%)'},


    {'aqua-50': 'hsl(180, 100%, 98%)'},
    {'aqua-100': 'hsl(180, 90%, 90%)'},
    {'aqua-200': 'hsl(180, 80%, 80%)'},
    {'aqua-300': 'hsl(180, 80%, 70%)'},
    {'aqua-400': 'hsl(180, 80%, 60%)'},
    {'aqua-500': 'hsl(180, 80%, 50%)'},
    {'aqua-600': 'hsl(180, 80%, 40%)'},
    {'aqua-700': 'hsl(180, 80%, 30%)'},
    {'aqua-800': 'hsl(180, 90%, 20%)'},
    {'aqua-900': 'hsl(180, 100%, 10%)'},


    {'blue-50': 'hsl(198, 100%, 98%)'},
    {'blue-100': 'hsl(198, 90%, 90%)'},
    {'blue-200': 'hsl(198, 80%, 80%)'},
    {'blue-300': 'hsl(198, 80%, 70%)'},
    {'blue-400': 'hsl(198, 80%, 60%)'},
    {'blue-500': 'hsl(198, 80%, 50%)'},
    {'blue-600': 'hsl(198, 80%, 40%)'},
    {'blue-700': 'hsl(198, 80%, 30%)'},
    {'blue-800': 'hsl(198, 90%, 20%)'},
    {'blue-900': 'hsl(198, 100%, 10%)'},


    {'navy-50': 'hsl(216, 100%, 98%)'},
    {'navy-100': 'hsl(216, 90%, 90%)'},
    {'navy-200': 'hsl(216, 80%, 80%)'},
    {'navy-300': 'hsl(216, 80%, 70%)'},
    {'navy-400': 'hsl(216, 80%, 60%)'},
    {'navy-500': 'hsl(216, 80%, 50%)'},
    {'navy-600': 'hsl(216, 80%, 40%)'},
    {'navy-700': 'hsl(216, 80%, 30%)'},
    {'navy-800': 'hsl(216, 90%, 20%)'},
    {'navy-900': 'hsl(216, 100%, 10%)'},


    {'indigo-50': 'hsl(234, 100%, 98%)'},
    {'indigo-100': 'hsl(234, 90%, 90%)'},
    {'indigo-200': 'hsl(234, 80%, 80%)'},
    {'indigo-300': 'hsl(234, 80%, 70%)'},
    {'indigo-400': 'hsl(234, 80%, 60%)'},
    {'indigo-500': 'hsl(234, 80%, 50%)'},
    {'indigo-600': 'hsl(234, 80%, 40%)'},
    {'indigo-700': 'hsl(234, 80%, 30%)'},
    {'indigo-800': 'hsl(234, 90%, 20%)'},
    {'indigo-900': 'hsl(234, 100%, 10%)'},


    {'violet-50': 'hsl(252, 100%, 98%)'},
    {'violet-100': 'hsl(252, 90%, 90%)'},
    {'violet-200': 'hsl(252, 80%, 80%)'},
    {'violet-300': 'hsl(252, 80%, 70%)'},
    {'violet-400': 'hsl(252, 80%, 60%)'},
    {'violet-500': 'hsl(252, 80%, 50%)'},
    {'violet-600': 'hsl(252, 80%, 40%)'},
    {'violet-700': 'hsl(252, 80%, 30%)'},
    {'violet-800': 'hsl(252, 90%, 20%)'},
    {'violet-900': 'hsl(252, 100%, 10%)'},


    {'purple-50': 'hsl(270, 100%, 98%)'},
    {'purple-100': 'hsl(270, 90%, 90%)'},
    {'purple-200': 'hsl(270, 80%, 80%)'},
    {'purple-300': 'hsl(270, 80%, 70%)'},
    {'purple-400': 'hsl(270, 80%, 60%)'},
    {'purple-500': 'hsl(270, 80%, 50%)'},
    {'purple-600': 'hsl(270, 80%, 40%)'},
    {'purple-700': 'hsl(270, 80%, 30%)'},
    {'purple-800': 'hsl(270, 90%, 20%)'},
    {'purple-900': 'hsl(270, 100%, 10%)'},


    {'electric-purple-50': 'hsl(288, 100%, 98%)'},
    {'electric-purple-100': 'hsl(288, 90%, 90%)'},
    {'electric-purple-200': 'hsl(288, 80%, 80%)'},
    {'electric-purple-300': 'hsl(288, 80%, 70%)'},
    {'electric-purple-400': 'hsl(288, 80%, 60%)'},
    {'electric-purple-500': 'hsl(288, 80%, 50%)'},
    {'electric-purple-600': 'hsl(288, 80%, 40%)'},
    {'electric-purple-700': 'hsl(288, 80%, 30%)'},
    {'electric-purple-800': 'hsl(288, 90%, 20%)'},
    {'electric-purple-900': 'hsl(288, 100%, 10%)'},


    {'magenta-50': 'hsl(306, 100%, 98%)'},
    {'magenta-100': 'hsl(306, 90%, 90%)'},
    {'magenta-200': 'hsl(306, 80%, 80%)'},
    {'magenta-300': 'hsl(306, 80%, 70%)'},
    {'magenta-400': 'hsl(306, 80%, 60%)'},
    {'magenta-500': 'hsl(306, 80%, 50%)'},
    {'magenta-600': 'hsl(306, 80%, 40%)'},
    {'magenta-700': 'hsl(306, 80%, 30%)'},
    {'magenta-800': 'hsl(306, 90%, 20%)'},
    {'magenta-900': 'hsl(306, 100%, 10%)'},


    {'fuchsia-50': 'hsl(324, 100%, 98%)'},
    {'fuchsia-100': 'hsl(324, 90%, 90%)'},
    {'fuchsia-200': 'hsl(324, 80%, 80%)'},
    {'fuchsia-300': 'hsl(324, 80%, 70%)'},
    {'fuchsia-400': 'hsl(324, 80%, 60%)'},
    {'fuchsia-500': 'hsl(324, 80%, 50%)'},
    {'fuchsia-600': 'hsl(324, 80%, 40%)'},
    {'fuchsia-700': 'hsl(324, 80%, 30%)'},
    {'fuchsia-800': 'hsl(324, 90%, 20%)'},
    {'fuchsia-900': 'hsl(324, 100%, 10%)'},


    {'blush-50': 'hsl(342, 100%, 98%)'},
    {'blush-100': 'hsl(342, 90%, 90%)'},
    {'blush-200': 'hsl(342, 80%, 80%)'},
    {'blush-300': 'hsl(342, 80%, 70%)'},
    {'blush-400': 'hsl(342, 80%, 60%)'},
    {'blush-500': 'hsl(342, 80%, 50%)'},
    {'blush-600': 'hsl(342, 80%, 40%)'},
    {'blush-700': 'hsl(342, 80%, 30%)'},
    {'blush-800': 'hsl(342, 90%, 20%)'},
    {'blush-900': 'hsl(342, 100%, 10%)'}
];

const swatchTemplate = document.querySelector("[data-swatch-template]")

const swatchList = document.querySelector("[data-swatch-list]")

swatchData.forEach(color => {
    const swatch = swatchTemplate.content.cloneNode(true).children[0]
    const name = swatch.querySelector("[data-name]")
    const colorValue = swatch.querySelector("[data-value]")
    const sample = swatch.querySelector(".sample")
    for (const [key, value] of Object.entries(color)) {
        sample.classList.add(key)
        name.textContent = key
        colorValue.textContent = value
        console.log(`${key}: ${value}`);
    }
    // value.textContent = color.value
    swatchList.append(swatch)
    console.log(swatch)
    console.log(name.textContent)
});

