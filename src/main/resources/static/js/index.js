requirejs.config({
    baseUrl: 'js'
})


function buildRoute(view) {
    return function() {
        webix.ui({
            id: 'root',
            rows: [
                view
            ]
        }, $$('root'))
    }
}

function buildButton(label, route) {
    return {
        view: 'button',
        value: label,
        width: 100,
        align: 'center',
        click: function() {
            routie(route)
        }
    }
}

require(
    ['views/main', 'views/patientInfo', 'views/marks','views/doctors','views/nurses', 'util/resourceProxy'],
    function(main,patientInfo, patients, doctors,nurses, resourceProxy) {
        webix.ready(function() {
            webix.ui({
                container: 'app',
                width: document.body.clientWidth,
                height: document.body.clientHeight,
                rows: [
                    {
                        view: 'toolbar',
                        cols: [
                            buildButton('Home', ''),
                            buildButton('Patients', 'patients'),
                            buildButton('Doctors', 'doctors'),
                            buildButton('Nurses', 'nurses'),
                        ]
                    },
                    {
                        id: 'root'
                    }
                ]
            })
        })

        routie({
            '': buildRoute(main),
            'patientInfo': buildRoute(patientInfo),
            'patients': buildRoute(patients),
            'nurses': buildRoute(nurses),
            'doctors': buildRoute(doctors),
        })
    })

