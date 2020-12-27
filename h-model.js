document.querySelectorAll('input').forEach(function(element) {
    const model = element.getAttribute('h-model')

    if (model !== null) {
        const value = values[model]
        
        if (values[model] !== undefined) {
            element.addEventListener('keyup', function() {
                values[model] = element.value

                console.log(values)
            })

        } else {
            console.error(`A value named "${model}" was not found in values`)
        }
    }
})

function update() {
    document.querySelectorAll('input').forEach(function(element) {
        const model = element.getAttribute('h-model')

        if (model !== null) {
            if (values[model] !== element.value) {
                element.value = values[model]
            }
        }
    })
}