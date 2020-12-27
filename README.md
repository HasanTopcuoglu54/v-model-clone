# Vue.js v-model clone
## version
1.0.0

## tutorail

```html
<body>
    <input h-model="name" />
    <button onclick="test()"> Click! </button>

    <script>
        const values = {
            name: 'Job'
        }

        function test() {
            values.name = 'Bob'

            update()
        }
    </script>
    <script src="./h-model.js"> </script>
</body>
```

## Author
Hasan Topçuoğlu