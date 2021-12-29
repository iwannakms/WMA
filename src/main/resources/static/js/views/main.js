define(function() {
    return {

        type: "line",
        height: 500,
        rows: [
            {
                view: 'button',
                label: 'Show history of illness',
                click: function() {
                    routie('patientInfo')
                }
            },
            { template: "<img src=\"https://i.ibb.co/H72QR0P/Web-Med-Ain.gif\"style=\"margin-left: 550px; width=\"450\" height=\"350\" alt=\"\">" },

        ]
    }
})
