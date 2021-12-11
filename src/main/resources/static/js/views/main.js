define(function() {
    return {

        type: "line",
        height: 500,
        rows: [
            {
                view: 'button',
                label: '',
                click: function() {
                    routie('')
                }
            },
            { template: "Row 1" },
            { template: "Row 2" },
            {
                cols: [
                    { template: "col 1" },
                    { template: "col 2" }
                ]
            }
        ]
    }
})
