let color2 = "";
        let color = "";
        document.addEventListener('keydown', function (event) {
            /* Cambiar a color 1 */
            if (event.key === 'a') {
                color = "pink";
                /* Cambiar a color 2 */
            } else if (event.key === 's') {
                color = "orange";
                /* Cambiar a color 3 */
            } else if (event.key === 'd') {
                color = "skyblue"
            }
            document.getElementById("key").style.backgroundColor = color;

                /* Cambiar a color2 1 */
                if (event.key === 'q') {
                color2 = "purple";
                /* Cambiar a color2 2 */
            } else if (event.key === 'w') {
                color2 = "grey";
                /* Cambiar a color2 3 */
            } else if (event.key === 'e') {
                color2 = "brownS"
            }
            document.getElementById("key2").style.backgroundColor = color2;

        })