    $(document).ready(function () {
        $("#buscador").on("input", function () {
            var searchTerm = $(this).val().toLowerCase();

            $(".cursito").each(function () {
                var cardNombre = $(this).data("nombre").toLowerCase();

                if (cardNombre.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });

    function irRegistro() {
        window.location.href = "https://forms.office.com/r/xkaDUqCBB3";
    }
    function irSatisfaccion() {
        window.location.href = "https://forms.office.com/r/vQ3v8cnBhw";
    }

